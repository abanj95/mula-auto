import pkg from 'pg';
import 'dotenv/config';
const { Pool } = pkg;

// Configure PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,        
  host: process.env.DB_HOST,         
  database: process.env.DB_NAME,     
  password: process.env.DB_PASSWORD, 
  port: process.env.DB_PORT,         
});

// Test the connection
pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("PostgreSQL Connection Error:", err));

export default pool;
