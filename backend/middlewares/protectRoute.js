const jwt = require("jsonwebtoken");

const User = require("../models/users/user.models");

// Middleware
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    // cookie/token === null || not found
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token Provided" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal error message" });
  }
};

module.exports = protectRoute;
