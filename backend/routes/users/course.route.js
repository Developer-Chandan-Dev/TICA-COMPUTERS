const express = require("express");
const router = express.Router();
const {
  getAllCourse,
  getCourseDetails,
} = require("../../controllers/users/course.controller.courses");

router.get("/", getAllCourse);

router.get("/:courseName", getCourseDetails);

module.exports = router;
