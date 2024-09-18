const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserDetails,
  userChartData,
  updateUser,
  deleteUser,
  blockUser,
  searchFilterUsers
} = require("../../../controllers/admin/admin portal/presentUsers.controller.js");


router.get("/", getAllUsers);
router.get("/:id", getUserDetails);
router.get("/data/chart-data", userChartData);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/block/:id", blockUser);
router.get("/users", searchFilterUsers)

module.exports = router;
