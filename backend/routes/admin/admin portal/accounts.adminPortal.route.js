const express = require("express");
const router = express.Router();
const upload = require("../../../middlewares/fileUploadMiddleware");
const {
  getAllDashboardUsers,
  getAllDetails,
  updateUserDetails,
  updatePassword,
  deleteDashboardUser
} = require("../../../controllers/admin/admin portal/accounts.controller");

router.get("/", getAllDashboardUsers);
router.get("/details/:id", getAllDetails);
router.delete("/:id", deleteDashboardUser);
router.put(
  "/details/update/:id",
  upload.single("profilePic"),
  updateUserDetails
);
router.patch(
  "/details/update/:id",
  upload.single("profilePic"),
  updateUserDetails
);
router.patch("/details/update-password/:id", updatePassword);

module.exports = router;
