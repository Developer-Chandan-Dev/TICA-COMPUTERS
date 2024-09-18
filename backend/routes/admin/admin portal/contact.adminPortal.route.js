const express = require("express");
const router = express.Router();
const {
  addContact,
  getAllContacts,
  getContact,
  deleteContact,
} = require("../../../controllers/admin/admin portal/contact.controller");

router.post("/add", addContact);
router.get("/", getAllContacts);
router.get("/:id", getContact);
router.delete("/:id", deleteContact);

module.exports = router;
