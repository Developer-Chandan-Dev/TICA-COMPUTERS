const courseModelsByAdmin = require("../../../models/admin/instructor Portal/course.models");
const Instructor = require("../../../models/admin/admin Portal/instructor.model");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../../../utils/uploadToCloudinary");

const addCourse = async (req, res) => {
  try {
    const data = ({
      courseShortName,
      courseFullName,
      description,
      duration,
      fees,
      level,
      instructor,
      language,
      prerequisites,
      syllabus,
      rating,
      reviews,
      enrollments,
    } = req.body);

    const coursePic = req.file ? req.file.path : null; // Get local file path
    console.log(data);
    console.log(coursePic);

    // Check if the course with the same fullname and shortname already exists
    const existingCourse = await courseModelsByAdmin.findOne({
      $or: [{ courseFullName }, { courseShortName }],
    });

    if (existingCourse) {
      return res.status(400).json({ error: "Course already exists" });
    }

    // Upload on cloudinary
    const result = await uploadToCloudinary(
      coursePic,
      "courses",
      `courses/${courseShortName}_${Date.now()}`
    );

    // Create new course
    const newCourse = new courseModelsByAdmin({
      ...data,
      coursePic: result ? result?.secure_url : null ,
      coursePicPublicId: result ? result?.public_id : null,
    });

    if (newCourse) {
      await newCourse.save();
      res.status(201).json({ message: "Course Added Successfully" });
    } else {
      res.status(400).json({ error: "Invalid Course Details" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await courseModelsByAdmin.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Course Deleted Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const courseData = req.body;
    const coursePic = req.file ? req.file.path : null; // Get local file path

    let coursePicUrl = null;
    let coursePicPublicId = null;

    // Delete the old profile picture if a new one is provided
    if (courseData.coursePicPublicId && coursePic) {
      console.log(
        "Deleting old image with public ID:",
        courseData.coursePicPublicId
      );
      await deleteFromCloudinary(courseData.coursePicPublicId);
    }

    // Upload the new course picture if provided
    if (coursePic) {
      const uploadResult = await uploadToCloudinary(
        coursePic,
        "courses",
        `courses/${courseData.courseShortName}_${Date.now()}`
      );
      coursePicUrl = uploadResult.secure_url;
      coursePicPublicId = uploadResult.public_id;
    }

    const response = await courseModelsByAdmin.findByIdAndUpdate(
      courseId,
      {
        coursePic: coursePicUrl,
        coursePicPublicId: coursePicPublicId,
        ...courseData,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Course data not found" });
    }
    res.status(200).json({ message: "Course updated Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const searchQuery = req.query.search || "";

    // <------------ Search Filter -------------->
    const searchFilter = searchQuery
      ? { courseFullName: { $regex: searchQuery, $options: "i" } } // Case - insensitive search on the 'name' field
      : {}; // No filter if search is empty

    // Example: filter by shortCourseName and select specific fields
    const shortCourseName = req.query.courseShortName;
    const filter = shortCourseName ? { shortCourseName } : {};

    const data = await courseModelsByAdmin
      .find(searchFilter)
      .select(
        "courseFullName mainTopics courseShortName duration category showOnHome _id coursePic"
      );

    if (!data) {
      return res.status(404).json({ error: "Courses not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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
      return res.status(404).json({ error: "Courses not found" });
    }
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
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getHomePageCourse = async (req, res) => {
  try {
    // I was try to get all courses with showOnHome : ture and filter them and get some fields only like: _id, courseFullName, courseShortName, mainTopics, duration. Now I'm not know how I can achieve this.
    const data = await courseModelsByAdmin
      .find({ showOnHome: true })
      .select(
        "_id courseShortName courseFullName category duration mainTopics coursePic"
      );

    if (!data) {
      return res.status(404).json({ error: "Courses not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateHomePageCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const data = req.body;

    const response = await courseModelsByAdmin.findByIdAndUpdate(
      courseId,
      data,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Material not found" });
    }
    res.status(200).json({
      message: `Material ${
        data.showOnHome === true
          ? "added on Home page"
          : "removed from Home page"
      } successfully`,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addCourse,
  deleteCourse,
  updateCourse,
  getAllCourses,
  getCourseDetails,
  getHomePageCourse,
  updateHomePageCourse,
};
