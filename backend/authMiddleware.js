import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const authenticateAdmin = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Access Denied. No token provided." });
  }

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.admin = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

export default authenticateAdmin;
