import pkg from 'pg';
const { Pool } = pkg;

// Configure PostgreSQL connection
const pool = new Pool({
  user: 'postgres',         
  host: 'localhost',       
  database: 'mula_app',    
  password: '1234', 
  port: 5432,              
});

// Test the connection
pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("PostgreSQL Connection Error:", err));

export default pool;
