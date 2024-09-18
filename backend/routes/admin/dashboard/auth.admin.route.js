const express = require("express");
const router = express.Router();
const adminSignup = require("../../../controllers/admin/dashboard/auth.admin.controller");

router.post("/admin-signup", adminSignup);

module.exports = router;
