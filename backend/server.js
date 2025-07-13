import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection using Clever Cloud env variables
const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  port: process.env.MYSQL_ADDON_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:");
    console.error("Host:", process.env.MYSQL_ADDON_HOST);
    console.error("User:", process.env.MYSQL_ADDON_USER);
    console.error("Database:", process.env.MYSQL_ADDON_DB);
    console.error("Error Details:", err.message);
    return;
  }
  console.log("✅ Connected to MySQL DB successfully");
});

app.post("/api/submit-score", (req, res) => {
  const { userId, subjectId, subjectName, score, timeSpent } = req.body;

  const sql = `
    INSERT INTO exam_results (user_id, subject_id, subject_name, score, time_spent)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [userId, subjectId, subjectName, score, timeSpent], (err, result) => {
    if (err) {
      console.error("Error submitting score:", err);
      return res.status(500).json({ message: "Failed to submit score" });
    }
    res.status(200).json({ message: "Score submitted successfully" });
  });
});

app.get("/api/fetch-scores/:userId", (req, res) => {
  const { userId } = req.params;
  const sql = `
    SELECT id, subject_id, subject_name, score, time_spent, created_at
    FROM exam_results
    WHERE user_id = ?
    ORDER BY created_at DESC
  `;

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Error fetching scores:", err);
      return res.status(500).json({ message: "Failed to fetch scores" });
    }
    res.json(results);
  });
});

app.post("/api/signup", (req, res) => {
  const { fullName, email, password } = req.body;
  const sql = "INSERT INTO exam_login (full_name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [fullName, email, password], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ success: true, message: "User registered" });
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM exam_login WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error("Login error:", err);
      return res.status(500).json({ message: "Server error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = results[0];
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ success: true, message: "Login successful", user });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
