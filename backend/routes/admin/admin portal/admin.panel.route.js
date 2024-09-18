const express = require("express");
const router = express.Router();
const adminPanelCardData = require("../../../controllers/admin/admin portal/admin.panel.controller.js");

router.get("/card-data", adminPanelCardData);

module.exports = router;
