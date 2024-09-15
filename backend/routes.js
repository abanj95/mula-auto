import express from 'express';
import multer from 'multer';

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Route to handle car image uploads
router.post('/upload', upload.single('carImage'), (req, res) => {
  res.json({ message: 'Image uploaded successfully', file: req.file });
});

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

export default router;
