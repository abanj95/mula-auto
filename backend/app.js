import express from 'express';
import path from 'path';
import multer from 'multer';
import routes from './routes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const upload = multer({ dest: 'uploads/' }); // Folder where images will be stored

// Middleware
app.use(express.json()); // Parse JSON bodies

// Serve the Vue app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

app.get('/',(req, res) =>{
    res.send("backend is working");
} );

// API routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
