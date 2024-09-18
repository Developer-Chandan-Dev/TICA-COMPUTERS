const jwt = require("jsonwebtoken");

const DashboardUsers = require("../models/admin/dashboard/dashboardUsers.model");
// Middleware
const protectDashboardRoutes = async (req, res, next) => {
  try {
    const token = req.cookies.dashboard_jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token Provided" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token " });
    }

    const user = await DashboardUsers.findById(decoded.userId).select(
      "-password"
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectDashboardRoutes middleware", error.message);
    res.status(500).json({ error: "Internal error message" });
  }
};

module.exports = protectDashboardRoutes;
