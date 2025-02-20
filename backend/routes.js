import express from 'express';
import multer from 'multer';
import pool from './db.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';


const app = express();
app.use(cors());

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save images to "uploads" directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  },
});

const upload = multer({ storage });

// For showroom vehicle uploads
// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure the `showroom_uploads` folder exists
const showroomUploadsPath = path.join(__dirname, 'showroom_uploads');
if (!fs.existsSync(showroomUploadsPath)) {
  fs.mkdirSync(showroomUploadsPath, { recursive: true });
}

// ✅ Correct Multer Storage Configuration
const showroomStorage = multer.diskStorage({
  destination: showroomUploadsPath, // Ensure absolute path
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname.replace(/\s+/g, '-'); // Avoid spaces in filenames
    cb(null, uniqueName);
  },
});

const uploadShowroom = multer({ storage: showroomStorage });

export { uploadShowroom };

// const uploadShowroom = multer({ storage: showroomStorage });
// Route to post vehicles for sale (admin)
router.post('/vehicles', upload.single('vehicleImage'), (req, res) => {
  const newVehicle = {
    id: Date.now(),
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    image: req.file.path,  // Image path saved on the server
  };

  res.json({ message: 'Vehicle posted for sale successfully', vehicle: newVehicle });
});



// Route to get all loans
// router.get('/loans', (req, res) => {
//   res.json(loan);
// });

router.post('/loans', upload.array('images', 10), async (req, res) => {
  const client = await pool.connect(); // Start a DB transaction
  try {
    const { name, email, phone, town, vehicleBrand, model, year, mileage, purchaseMethod, vehicleValue, loanAmount } = req.body;

    await client.query("BEGIN"); // Start Transaction

    // 1️⃣ Insert applicant details
    const applicantResult = await client.query(
      'INSERT INTO applicants (name, email, phone, town) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, email, phone, town]
    );
    const applicantId = applicantResult.rows[0].id;

    // 2️⃣ Insert vehicle details
    const vehicleResult = await client.query(
      'INSERT INTO vehicles (applicant_id, brand, model, year, mileage, purchase_method, vehicle_value) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
      [applicantId, vehicleBrand, model, year, mileage, purchaseMethod, vehicleValue]
    );
    const vehicleId = vehicleResult.rows[0].id;

    // 3️⃣ Insert loan application
    const loanResult = await client.query(
      'INSERT INTO loans (applicant_id, vehicle_id, amount, status, date_applied) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
      [applicantId, vehicleId, loanAmount, 'Pending']
    );

    // 4️⃣ Store Image Paths in Database
    if (req.files.length > 0) {
      for (const file of req.files) {
        const imageUrl = `/uploads/${file.filename}`; // Correct URL format
        await client.query(
          'INSERT INTO images (vehicle_id, image_url) VALUES ($1, $2)',
          [vehicleId, imageUrl] // Store correct image path
        );
      }
    }

    await client.query("COMMIT"); // Commit the transaction
    res.json({ message: "Loan application submitted successfully", loan: loanResult.rows[0] });

  } catch (error) {
    await client.query("ROLLBACK"); // Rollback transaction in case of error
    console.error("Error inserting loan:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    client.release(); // Release client back to the pool
  }
});

router.get('/loans/:id', async (req, res) => {
  const loanId = req.params.id;
  try {
    // Fetch loan details, applicant details, and vehicle details
    const result = await pool.query(`
      SELECT 
        loans.id AS loan_id,
        applicants.name AS applicant_name,
        applicants.email AS applicant_email,
        applicants.phone AS applicant_phone,
        vehicles.id AS vehicle_id,
        vehicles.brand AS vehicle_brand,
        vehicles.model AS vehicle_model,
        vehicles.year AS vehicle_year,
        vehicles.mileage AS vehicle_mileage,
        vehicles.purchase_method AS vehicle_purchase_method,
        vehicles.vehicle_value AS vehicle_value,
        loans.amount AS loan_amount,
        loans.status AS loan_status,
        loans.date_applied
      FROM loans
      JOIN applicants ON loans.applicant_id = applicants.id
      JOIN vehicles ON loans.vehicle_id = vehicles.id
      WHERE loans.id = $1`, 
      [loanId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Loan not found" });
    }

    const loanDetails = result.rows[0];

    // Fetch vehicle images separately
    const imageResults = await pool.query(`
      SELECT image_url FROM images WHERE vehicle_id = $1
    `, [loanDetails.vehicle_id]);

    // loanDetails.vehicle_images = imageResults.rows.map(row => `/uploads/${row.image_url}`);
    loanDetails.vehicle_images = imageResults.rows.map(row => 
      `http://localhost:3001/${row.image_url}`
    );
    
    res.json(loanDetails);
  } catch (error) {
    console.error("Error fetching loan details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



router.get('/loans', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        loans.id AS loan_id,
        applicants.name AS applicant_name,
        applicants.email,
        applicants.phone,
        vehicles.brand AS vehicle_brand,
        vehicles.model,
        vehicles.year,
        vehicles.mileage,
        vehicles.purchase_method,
        vehicles.vehicle_value,
        loans.amount,
        loans.status AS loan_status,
        loans.date_applied
      FROM loans
      JOIN applicants ON loans.applicant_id = applicants.id
      JOIN vehicles ON loans.vehicle_id = vehicles.id
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching loans:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// showroom api

// Get all vehicles
router.get('/showroom', async (req, res) => {
  const result = await pool.query('SELECT * FROM showroom ORDER BY date_posted DESC');
  res.json(result.rows);
});

// Update vehicle details
router.put('/showroom/:id', uploadShowroom.array('images', 10), async (req, res) => {
  const { id } = req.params;
  const { title, description, price, transmission, date_posted, main_image, deletedImages } = req.body;
  const files = req.files;
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // 1️⃣ Update Vehicle Details
    await client.query(
      `UPDATE showroom
       SET title = $1, description = $2, price = $3, transmission = $4, date_posted = $5, main_image = $6
       WHERE id = $7`,
      [title, description, price, transmission, date_posted, main_image, id]
    );

    // 2️⃣ Handle Deleted Images
    if (deletedImages) {
      const imagesToDelete = JSON.parse(deletedImages);
      for (const imageUrl of imagesToDelete) {
        await client.query(`DELETE FROM showroom_images WHERE vehicle_id = $1 AND image_url = $2`, [id, imageUrl]);

        // Optionally delete the file from the server
        const fs = require('fs');
        fs.unlink(`./${imageUrl}`, (err) => {
          if (err) console.error('Failed to delete image:', err);
        });
      }
    }

    // 3️⃣ Handle New Image Uploads
    for (const file of files) {
      await client.query(
        `INSERT INTO showroom_images (vehicle_id, image_url)
         VALUES ($1, $2)`,
        [id, file.path]
      );
    }

    await client.query('COMMIT');
    res.status(200).json({ message: 'Vehicle updated successfully' });

  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error updating vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
});


// POST API to create a new vehicle listing
router.post('/showroom', uploadShowroom.array('images', 10), async (req, res) => {
  const client = await pool.connect();
  try {
    const { title, description, price, transmission, mainImage } = req.body;
    const files = req.files;

    await client.query('BEGIN');

    // ✅ Fix: Only store filename, not full path
    const mainImageFile = files.find(file => file.originalname === mainImage);
    const mainImagePath = mainImageFile ? mainImageFile.filename : null; // Store only the filename

    if (!mainImagePath) {
      throw new Error('Main image is missing!');
    }

    // Insert vehicle details
    const vehicleResult = await client.query(
      `INSERT INTO showroom (title, description, price, transmission, main_image, status)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [title, description, price, transmission, mainImagePath, 'Available']
    );

    const vehicleId = vehicleResult.rows[0].id;

    // Insert vehicle images
    for (const file of files) {
      await client.query(
        `INSERT INTO showroom_images (vehicle_id, image_url)
         VALUES ($1, $2)`,
        [vehicleId, file.filename] // ✅ Store only the filename
      );
    }

    await client.query('COMMIT');
    res.status(201).json({ message: 'Vehicle posted successfully!', vehicleId });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error posting vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
});



// Get single vehicle details by ID
router.get('/showroom/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Fetch vehicle details
    const vehicleResult = await pool.query(
      `SELECT * FROM showroom WHERE id = $1`, 
      [id]
    );

    if (vehicleResult.rows.length === 0) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    const vehicle = vehicleResult.rows[0];

    // Fetch associated images
    const imageResults = await pool.query(
      `SELECT image_url FROM showroom_images WHERE vehicle_id = $1`, 
      [id]
    );

    vehicle.images = imageResults.rows.map(img => img.image_url); // Attach images to the vehicle data

    res.json(vehicle);
  } catch (error) {
    console.error('Error fetching vehicle details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// delete posts
router.delete('/showroom/:id', async (req, res) => {
  const client = await pool.connect();
  try {
    const { id } = req.params;
    await client.query('BEGIN');

    // Delete related images first (if applicable)
    await client.query('DELETE FROM showroom_images WHERE vehicle_id = $1', [id]);

    // Then delete the vehicle itself
    const result = await client.query('DELETE FROM showroom WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      await client.query('ROLLBACK');
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    await client.query('COMMIT');
    res.json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error deleting vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
});

// ✅ Post Offer Route
router.post('/offers', async (req, res) => {
  const client = await pool.connect();
  try {
    const { vehicle_id, user_name, user_email, user_number, offer_amount } = req.body;

    if (!vehicle_id || !user_name || !user_email || !user_number || !offer_amount) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    await client.query(
      `INSERT INTO vehicle_offers (vehicle_id, user_name, user_email, user_number, offer_amount) 
       VALUES ($1, $2, $3, $4, $5)`,
      [vehicle_id, user_name, user_email, user_number, offer_amount]
    );

    res.status(201).json({ message: 'Offer submitted successfully!' });
  } catch (error) {
    console.error('Error submitting offer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
});


// ✅ Get Offers for a Specific Vehicle
router.get('/offers/:vehicle_id', async (req, res) => {
  const client = await pool.connect();
  try {
      const { vehicle_id } = req.params;
      
      const result = await client.query(
          `SELECT * FROM vehicle_offers WHERE vehicle_id = $1 ORDER BY date_offered DESC`,
          [vehicle_id]
      );

      res.status(200).json(result.rows);
  } catch (error) {
      console.error('Error fetching offers:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  } finally {
      client.release();
  }
});

// ✅ Fetch all offers
router.get('/offers', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT o.id, o.vehicle_id, v.title AS vehicle_name, o.user_name, o.user_email, o.user_number, o.offer_amount, o.status, o.date_offered
      FROM vehicle_offers o
      JOIN showroom v ON o.vehicle_id = v.id
      ORDER BY o.date_offered DESC;
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching offers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ Update offer status
router.patch('/offers/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    await pool.query(`UPDATE vehicle_offers SET status = $1 WHERE id = $2`, [status, id]);
    res.json({ message: `Offer ${id} updated to ${status}` });
  } catch (error) {
    console.error('Error updating offer status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ Delete an offer
router.delete('/offers/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query(`DELETE FROM vehicle_offers WHERE id = $1`, [id]);
    res.json({ message: `Offer ${id} deleted successfully` });
  } catch (error) {
    console.error('Error deleting offer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export default router;
