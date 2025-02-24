import pkg from 'pg';
// import 'dotenv/config';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const { Pool } = pkg;
// Configure PostgreSQL connection
/*const pool = new Pool({
  user: process.env.DB_USER,        
  host: process.env.DB_HOST,         
  database: process.env.DB_NAME,     
  password: process.env.DB_PASSWORD, 
  port: process.env.DB_PORT,         
}); */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});


// Test the connection
pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("PostgreSQL Connection Error:", err));

export default pool;
