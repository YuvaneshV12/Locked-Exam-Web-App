import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://locked-exam-app.onrender.com", // frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  port: process.env.MYSQL_ADDON_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
    return;
  }
  console.log("✅ Connected to MySQL DB successfully");
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// In-memory OTP store: { email: { otp, expiresAt } }
const otpStore = {};

// Generate 6-digit OTP
function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP email function

export async function sendOtpEmail(email) {
  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"TechExamHub" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Your OTP for TechExamHub Signup",
    html: `<p>Your OTP is: <b>${otp}</b>. It is valid for 5 minutes.</p>`,
  };

  try {
    await transporter.verify();
    await transporter.sendMail(mailOptions);
    console.log("✅ OTP email sent to:", email);
    return true;
  } catch (error) {
    console.error("❌ Failed to send OTP email:", error.message || error);
    return false;
  }
}

// Verify OTP function
function verifyOtp(email, otp) {
  const record = otpStore[email];
  if (!record) return false;

  if (record.otp === otp && record.expiresAt > Date.now()) {
    // OTP is valid; remove it so it can't be reused
    delete otpStore[email];
    return true;
  }
  return false;
}

// Routes

app.post("/api/submit-score", (req, res) => {
  const { userId, subjectId, subjectName, score, timeSpent } = req.body;

  const sql = `
    INSERT INTO exam_results (user_id, subject_id, subject_name, score, time_spent)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [userId, subjectId, subjectName, score, timeSpent],
    (err, result) => {
      if (err) {
        console.error("Error submitting score:", err);
        return res.status(500).json({ message: "Failed to submit score" });
      }
      res.status(200).json({ message: "Score submitted successfully" });
    }
  );
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
  const sql =
    "INSERT INTO exam_login (full_name, email, password) VALUES (?, ?, ?)";
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

// OTP endpoints

app.post("/api/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email required" });
  }

  try {
    const success = await sendOtpEmail(email);
    if (success) {
      res.json({ message: "OTP sent" });
    } else {
      // Something failed silently inside sendOtpEmail
      res.status(500).json({ message: "Failed to send OTP (check server logs)" });
    }
  } catch (error) {
    console.error("Error in /api/send-otp:", error);
    res.status(500).json({ message: "Error sending OTP", error: error.message });
  }
});

app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp)
    return res.status(400).json({ message: "Email and OTP required" });

  if (verifyOtp(email, otp)) {
    res.json({ message: "OTP verified" });
  } else {
    res.status(400).json({ message: "Invalid or expired OTP" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});