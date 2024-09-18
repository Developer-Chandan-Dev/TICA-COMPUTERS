const bcryptjs = require("bcryptjs");
const DashboardUsers = require("../../../models/admin/dashboard/dashboardUsers.model");

const adminSignup = async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body; // extract data from req.body

    if (password !== confirmPassword) {
      return res.status(400).json({ err: "Password don't match" });
    }

    const existingAdmins = await DashboardUsers.find({ role: "admin" });
    if (existingAdmins.length > 0) {
      return res.status(403).send("Admin signup is disabled");
    }

    // hash password
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newAdmin = new DashboardUsers({
      username,
      password: hashedPassword,
      role: "admin",
    });

    if (newAdmin) {
      await newAdmin.save();
      res.status(201).send("Admin created successfully");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

module.exports = adminSignup;
