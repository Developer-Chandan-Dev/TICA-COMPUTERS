const courseModelsByAdmin = require("../../models/admin/instructor Portal/course.models");
const Instructor = require("../../models/admin/admin Portal/instructor.model");

const getAllCourse = async (req, res) => {
  try {
    const data = await courseModelsByAdmin
      .find()
      .select(
        "courseFullName mainTopics courseShortName duration category showOnHome _id coursePic"
      );

    if (!data) {
      return res.status(404).json({ err: "Courses not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const getCourseDetails = async (req, res) => {
  try {
    const coursename = req.params.courseName;
    const data = await courseModelsByAdmin.findOne({
      courseShortName: coursename,
    });
    const instructorInfo = await Instructor.findById(data.instructorId);

    if (!data) {
      return res.status(404).json({ err: "Courses not found" });
    }

    // course response
    res.status(200).json({
      _id: data._id,
      courseShortName: data.courseShortName,
      courseFullName: data.courseFullName,
      shortDesc: data.shortDesc,
      category: data.category,
      longDesc: data.longDesc,
      whatYouLearn: data.whatYouLearn,
      duration: data.duration,
      fees: data.fees,
      level: data.level,
      coursePic: data.coursePic,
      language: data.language,
      prerequisites: data.prerequisites,
      syllabus: data.syllabus,
      rating: data.rating,
      mainTopics: data.mainTopics,
      instructor: {
        instructorId: data.instructorId,
        instructorName: instructorInfo.fullname,
        instructorPic: instructorInfo.profilePic,
        instructorBio: instructorInfo.bio,
      },
      enrollments: data.enrollments,
      reviews: data.reviews,
      creationDate: data.creationDate,
      lastUpdated: data.lastUpdated,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

module.exports = { getAllCourse, getCourseDetails };
