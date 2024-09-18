const express = require("express");
const router = express.Router();
const {
  getEnquiry,
  getEnquiryDetails,
  deleteEnquiry,
} = require("../../../controllers/admin/instructor portal/enquiry.controller");

router.get("/", getEnquiry);
router.get("/:id", getEnquiryDetails);
router.delete("/:id", deleteEnquiry);

module.exports = router;
