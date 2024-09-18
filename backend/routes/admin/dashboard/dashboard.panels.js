const express = require("express");
const router = express.Router();
const protectRoute = require("../../../middlewares/protectRoute");
const protectDashboardRoutes = require("../../../middlewares/protectDashboardRoutes");
const {
  dashboard,
  adminPanel,
  instructorPanel,
  staffPanel,
  dashboardCardsData,
} = require("../../../controllers/admin/dashboard/dashboard.controller");

const {
  isAdmin,
  isInstructor,
  isStaff,
} = require("../../../middlewares/protectPanels");

router.get("/dashboard", protectRoute, protectDashboardRoutes, dashboard);

router.get(
  "/dashboard/admin-panel",
  protectRoute,
  protectDashboardRoutes,
  isAdmin,
  adminPanel
);

router.get(
  "/dashboard/instructor-panel",
  protectRoute,
  protectDashboardRoutes,
  isInstructor,
  instructorPanel
);
router.get(
  "/dashboard/staff-panel",
  protectRoute,
  protectDashboardRoutes,
  isStaff,
  staffPanel
);

router.get("/dashboard/card-data", dashboardCardsData);

module.exports = router;
