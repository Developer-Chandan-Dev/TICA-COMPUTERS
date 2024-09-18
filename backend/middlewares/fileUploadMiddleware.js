const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Configure multer for file storage temporarily
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Store files temporarily in a local directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
