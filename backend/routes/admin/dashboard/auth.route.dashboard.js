const express = require("express");
const router = express.Router();
const {
  dashboardLogin,
  dashboardLogout,
} = require("../../../controllers/admin/dashboard/auth.dashboard.controller");

router.post("/login", dashboardLogin);
router.post("/logout", dashboardLogout);

module.exports = router;
