const express = require("express");
const router = express.Router();
const upload = require("../../../middlewares/fileUploadMiddleware");
const {
  addStudent,
  getAllStudent,
  getStudentDetails,
  updateStudent,
  deleteStudent,
  getMonthlyStudent,
  getWeeklyStudent,
} = require("../../../controllers/admin/instructor portal/students.controller");

router.post("/:id", upload.single("profilePic"), addStudent); // Add new Student
router.get("/", getAllStudent); // Get all students
router.get("/:id", getStudentDetails); // Get Student details
router.put("/:id", upload.single("profilePic"), updateStudent); // Update Student
router.delete("/:id", deleteStudent); // Delete Student
router.get("/admission/monthly", getMonthlyStudent);
router.get("/admission/current-month-weeks", getWeeklyStudent);

module.exports = router;
