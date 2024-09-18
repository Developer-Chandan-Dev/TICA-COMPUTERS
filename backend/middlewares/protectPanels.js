const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Access denied: Admin only" });
  }
};

const isInstructor = (req, res, next) => {
  if (
    req.user &&
    (req.user.role === "admin" ||
      req.user.role === "instructor" ||
      req.user.role === "staff")
  ) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Access denied: Admin,Instructor & staff only" });
  }
};

const isStaff = (req, res, next) => {
  if (req.user && (req.user.role === "admin" || req.user.role === "staff")) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Access denied: Admin, Instructor and Staff only" });
  }
};

module.exports = { isAdmin, isInstructor, isStaff };
