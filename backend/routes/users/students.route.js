const express = require("express");
const router = express.Router();
const protectRoute = require("../../middlewares/protectRoute");
const {
  getAllStudents,
} = require("../../controllers/users/students.controller");

router.get("/", protectRoute, getAllStudents);

// router.get("/:id", getstudentDetails);

module.exports = router;
