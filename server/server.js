require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = 3000;

// ==========================
// Connect MongoDB
// ==========================
connectDB();

// ==========================
// Middleware
// ==========================
app.use(express.json());

// ==========================
// Import Routes
// ==========================
const authRoutes = require("./routes/authRoutes");
const teacherRoutes = require("./routes/teacherRoutes");

// ==========================
// Use Routes
// ==========================
app.use(authRoutes);
app.use(teacherRoutes);

// ==========================
// Home Route
// ==========================
app.get("/", (req, res) => {
  res.send("🚀 FindMyTeacher Backend Running!");
});

// ==========================
// Start Server
// ==========================
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});