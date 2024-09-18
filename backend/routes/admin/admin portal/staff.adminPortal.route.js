const express = require("express");
const router = express.Router();
const upload = require("../../../middlewares/fileUploadMiddleware");
const {
  showStaffByAdmin,
  getAllDetails,
  addStaffByAdmin,
  updateStaffByAdmin,
  deleteStaffByAdmin,
} = require("../../../controllers/admin/admin portal/staff.controller");

router.get("/", showStaffByAdmin);
router.get("/:id", getAllDetails);
router.post("/add", upload.single("profilePic"), addStaffByAdmin);
router.put("/:id", upload.single("profilePic"), updateStaffByAdmin);
router.delete("/:id", deleteStaffByAdmin);

module.exports = router;
