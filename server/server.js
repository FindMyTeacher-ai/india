require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

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
  res.send("🚀 FindMyTeacher Backend API is Running Successfully!");
});

// ==========================
// Start Server
// ==========================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});