const express = require("express");
const router = express.Router();
const {
  addHeading,
  showHeadings,
  deleteHeading,
  updateHeading,
} = require("../../../controllers/admin/instructor portal/materials.heading.admin.controller");

router.post("/add", addHeading);
router.get("/", showHeadings);
router.delete("/:id", deleteHeading);
router.put("/:id", updateHeading);

module.exports = router;
