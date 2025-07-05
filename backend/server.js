const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Gova%4012345",
  database: "donotdelete",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    return;
  }
  console.log("✅ Connected to MySQL DB");
});


// ✅ Signup Route
app.post("/api/signup", (req, res) => {
  const { fullName, email, password } = req.body;

  const sql = "INSERT INTO exam_login (full_name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [fullName, email, password], (err, result) => {
    if (err) {
      console.error("❌ Insert error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ success: true, message: "User registered successfully" });
  });
});


// ✅ Login Route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM exam_login WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error("❌ Login error:", err);
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
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});