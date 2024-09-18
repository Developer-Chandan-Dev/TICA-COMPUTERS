const express = require("express");
const router = express.Router();
const upload = require("../../../middlewares/fileUploadMiddleware");
const {
  addCourse,
  deleteCourse,
  updateCourse,
  getAllCourses,
  getCourseDetails,
  getHomePageCourse,
  updateHomePageCourse,
} = require("../../../controllers/admin/instructor portal/courses.controller");

router.post("/add", upload.single("coursePic"), addCourse);
router.delete("/:id", deleteCourse);
router.put("/:id", upload.single("coursePic"), updateCourse);
router.get("/", getAllCourses);
router.get("/:courseName", getCourseDetails);
router.get("/home/data", getHomePageCourse);
router.put("/home-data/:id", updateHomePageCourse);

module.exports = router;
