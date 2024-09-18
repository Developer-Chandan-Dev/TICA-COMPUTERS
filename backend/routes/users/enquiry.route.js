const express = require("express");
const router = express.Router();
const addEnquiry = require("../../controllers/users/enquiry.controller");

router.post("/", addEnquiry);

module.exports = router;
