const Admission = require("../../models/admin/instructor Portal/admission.models");
const Course = require("../../models/admin/instructor Portal/course.models");

const getTotalCoursesAndStudents = async (req, res) => {
  try {
    const studentData = (await Admission.find()).length;
    const totalCourses = (await Course.find()).length;

    if (!studentData || !totalCourses) {
      return res.status(400).json({ error: "Data not found" });
    }

    res
      .status(200)
      .json({ totalStudents: studentData - 2, totalCourses: totalCourses - 1 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getTotalCoursesAndStudents;
