const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/fileUploadMiddleware");
const {
  getProfile,
  updateProfile,
} = require("../../controllers/users/profile.controller.users");

router.get("/profile/:id", getProfile);

router.put("/profile/:id", upload.single("profilePic"), updateProfile);

module.exports = router;
