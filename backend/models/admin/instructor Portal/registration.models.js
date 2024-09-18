const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseFName: {
      type: String,
    },
    candidateName: {
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
    status: {
      type: String,
      enum: ["Pending", "Cleared"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Register = mongoose.model("Register", registerSchema);
module.exports = Register;
