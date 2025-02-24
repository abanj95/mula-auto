import bcrypt from "bcrypt";
import pool from "./db.js"; 
import dotenv, { config } from 'dotenv';

dotenv.config({ path: '../.env' });

const createAdmin = async () => {
  const email = process.env.ADMIN_EMAIL;
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD; 
  const role = process.env.ADMIN_ROLE; 
  const is_active = true; 

  try {
    const passwordHash = await bcrypt.hash(password, 10); // Hash password

    await pool.query(
      `INSERT INTO admins (email, username, password_hash, role, is_active, created_at, updated_at) 
       VALUES ($1, $2, $3, $4, $5, NOW(), NOW())`,
      [email, username, passwordHash, role, is_active]
    );

    console.log("✅ Admin user created successfully!");
  } catch (error) {
    console.error("❌ Error creating admin:", error);
  } finally {
    pool.end();
  }
};

createAdmin();
