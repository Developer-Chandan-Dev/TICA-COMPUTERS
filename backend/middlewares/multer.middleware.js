const multer = require("multer");
const path = require("path");

// Set up Multer to store files locally in 'uploads/ folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directory to save uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    ); // unique filename
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
