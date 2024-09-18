const express = require("express");
const router = express.Router();

const getTotalCoursesAndStudents = require("../../controllers/users/about.controllers");

router.get("/about-data", getTotalCoursesAndStudents);

module.exports = router;
