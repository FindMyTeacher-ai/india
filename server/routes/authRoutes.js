const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
  signup,
  login,
  profile
} = require("../controllers/authController");

// Home API
router.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "FindMyTeacher API Working 🚀"
  });
});

// Signup
router.post("/api/signup", signup);

// Login
router.post("/api/login", login);

// Protected Profile
router.get("/api/profile", verifyToken, profile);

// Admin Only
router.get(
  "/api/admin",
  verifyToken,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin 👑",
      user: req.user
    });
  }
);

module.exports = router;