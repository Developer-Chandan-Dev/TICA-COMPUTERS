// course.models.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseShortName: {
      type: String,
      required: true,
      unique: true,
    },
    courseFullName: {
      type: String,
      required: true,
      unique: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Software", "Hardware", "Software & Hardware"],
    },
    longDesc: {
      type: String,
      required: true,
    },
    whatYouLearn: {
      type: [String],
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    fees: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
    },
    coursePic: {
      type: String, // URL from cloudinary
    },
    coursePicPublicId: {
      type: String,
    },
    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructors",
      required: true,
    },
    language: {
      type: String,
      required: true,
      enum: ["Hindi", "English","Hindi & English"],
      default: "Hindi",
    },
    prerequisites: {
      type: [String],
      required: true,
    },
    syllabus: [
      {
        heading: String,
        topics: [String],
      },
    ],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    mainTopics: {
      type: [String],
      required: true,
    },
    reviews: [
      {
        student: String,
        comment: String,
        rating: {
          type: Number,
          min: 0,
          max: 5,
        },
      },
    ],
    enrollments: {
      type: Number,
      default: 0,
    },
    showOnHome: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
