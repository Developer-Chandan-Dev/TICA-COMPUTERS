const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    // Personal Information
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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
      required: true,
    },

    experience: [{ year: String, experiencePlace: String }],

    courseTaught: {
      type: [String],
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },

    // Employment Information

    employmentStatus: {
      type: String,
      required: true,
      enum: ["Full-Time", "Part-Time"],
    },
    department: {
      type: String,
      required: true,
      enum: ["Software", "Hardware", "Software & Hardware"],
    },
    joiningDate: {
      type: Date,
      required: true,
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
      required: true,
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
      required: true,
    },
  },
  { timestamps: true }
);

const Staffs = mongoose.model("Staffs", staffSchema);
module.exports = Staffs;
