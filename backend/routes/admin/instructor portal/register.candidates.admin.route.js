const express = require("express");
const router = express.Router();
const upload = require("../../../middlewares/fileUploadMiddleware");

const {
  getAllRegisterCandidate,
  getRegisterCandidateDetails,
  deleteRegisterCandidate,
  updatedRegisteredCandidate,
  getMonthlyRegistration,
  getWeeklyRegistration,
} = require("../../../controllers/admin/instructor portal/registration.admin.controller");

router.get("/", getAllRegisterCandidate);
router.get("/:id", getRegisterCandidateDetails);
router.delete("/:id", deleteRegisterCandidate);
router.put("/:id", upload.single("profilePic"), updatedRegisteredCandidate);
router.get("/registration/monthly", getMonthlyRegistration);
router.get("/registration/current-month-weeks", getWeeklyRegistration);

module.exports = router;