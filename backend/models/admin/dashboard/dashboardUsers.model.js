const mongoose = require("mongoose");

const dashboardUser = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlen: 8,
    },
    email: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String, // URL of the image
    },
    profilePicPublicId: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "instructor", "staff"],
    },
  },
  { timestamps: true }
);

const DashboardUsers = mongoose.model("dashboardUsers", dashboardUser);
module.exports = DashboardUsers;
