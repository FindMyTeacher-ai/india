const express = require("express");
const router = express.Router();

const {
  addTeacher,
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher
} = require("../controllers/teacherController");

// ==========================
// Add Teacher
// ==========================
router.post("/api/teachers", addTeacher);

// ==========================
// Get All Teachers
// ==========================
router.get("/api/teachers", getTeachers);

// ==========================
// Get Teacher By ID
// ==========================
router.get("/api/teachers/:id", getTeacherById);

// ==========================
// Update Teacher
// ==========================
router.put("/api/teachers/:id", updateTeacher);

// ==========================
// Delete Teacher
// ==========================
router.delete("/api/teachers/:id", deleteTeacher);

module.exports = router;