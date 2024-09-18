const bcryptjs = require("bcryptjs");
const DashboardUsers = require("../../../models/admin/dashboard/dashboardUsers.model");
const generateTokenAndSetCookie = require("../../../utils/generateTokenForDashboard");

const dashboardLogin = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    console.log(username, password, role);
    const user = await DashboardUsers.findOne({ username, role });
    const comparePassword = await bcryptjs.compare(
      password,
      user?.password || ""
    );

    if (!user || !comparePassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log(user);
    // generate Token
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      role: user.role,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const dashboardLogout = async (req, res) => {
  try {
    res.cookie("dashboard_jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};
module.exports = { dashboardLogin, dashboardLogout };
