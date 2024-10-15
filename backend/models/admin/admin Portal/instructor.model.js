const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    // Personal Information
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneno: {
      type: String,
      required: true,
      maxlen: 10,
      minlen: 10,
    },
    DOB: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    address: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String, // URL from cloudinary
    },
    profilePicPublicId: {
      type: String,
    },

    // Professional Information

    education: [
      {
        year: String,
        college: String,
      },
    ],

    specilization: {
      type: [String],
    },

    experience: [{ year: String, experiencePlace: String }],

    courseTaught: {
      type: [String],
    },
    bio: {
      type: String,
    },

    // Employment Information

    employmentStatus: {
      type: String,
      enum: ["Full-Time", "Part-Time"],
      required: true,
    },
    department: {
      type: String,
      enum: ["Software", "Hardware", "Software & Hardware"],
      required: true,
    },
    joiningDate: {
      type: Date,
      required: true,
      default: Date.now,
    },

    //   Additional Information
    skills: [
      {
        title: String,
        subTitle: String,
      },
    ],

    certification: {
      type: [String],
    },
    socialMediaUrls: {
      facebook: { type: String, trim: true },
      instagram: { type: String, trim: true },
      whatsapp: { type: String, trim: true },
      twitter: { type: String, trim: true },
      linkedin: { type: String, trim: true },
    },
    emergencyContactInfo: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Instructor = mongoose.model("Instructors", instructorSchema);
module.exports = Instructor;
