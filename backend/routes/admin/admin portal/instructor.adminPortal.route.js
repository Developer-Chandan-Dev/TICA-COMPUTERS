const express = require("express");
const router = express.Router();
const upload = require("../../../middlewares/fileUploadMiddleware");
const {
  showInstructorByAdmin,
  getAllDetails,
  addInstructorByAdmin,
  updateInstructorByAdmin,
  deleteInstructorByAdmin,
} = require("../../../controllers/admin/admin portal/instructor.controller");

router.get("/", showInstructorByAdmin);
router.get("/:id", getAllDetails);
router.post("/add", upload.single("profilePic"), addInstructorByAdmin);
router.put("/:id", upload.single("profilePic"), updateInstructorByAdmin);
router.delete("/:id", deleteInstructorByAdmin);

module.exports = router;
