const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/fileUploadMiddleware"); // Multer middleware for local storage
const {
  registerCandidate,
} = require("../../controllers/admin/instructor portal/registration.admin.controller");

router.post("/new", upload.single("profilePic"), registerCandidate);

module.exports = router;
