const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    studentName: {
      type: String,
      requied: true,
    },
    fathername: {
      type: String,
      required: true,
    },
    mothername: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    registrationDate: {
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
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      min: 10,
      max: 10,
    },
    aadharNo: {
      type: String,
      required: true,
      min: 12,
      max: 12,
      unique: true,
    },
    profilePic: {
      type: String, // URL from cloudinary
    },
    profilePicPublicId: {
      type: String,
    },
    admissionDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Admission = mongoose.model("Admission", admissionSchema);
module.exports = Admission;
