const bcrypt = require("bcryptjs");
const DashboardUsers = require("../../../models/admin/dashboard/dashboardUsers.model");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../../../utils/uploadToCloudinary");

const getAllDashboardUsers = async (req, res) => {
  try {
    // Get all Dashboard Users from database
    const data = await DashboardUsers.find().select("-password");

    if (!data) {
      return res.status(400).json({ error: "Users not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

const getAllDetails = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const data = await DashboardUsers.findOne({ _id: id }).select(
      "username fullname email role profilePic"
    );

    if (!data) {
      return res.status(400).json({ error: "Data not found" });
    }
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

const updateUserDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const profilePic = req.file ? req.file.path : null;
    console.log(data, profilePic);

    let profilePicUrl = null;
    let newProfilePicPublicId = null;

    const user = await DashboardUsers.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete the old profile pic if a new one is provided
    if (data.profilePicPublicId && profilePic) {
      await deleteFromCloudinary(data.profilePicPublicId);
    }

    // Upload the new dashboard user pic if provided
    if (profilePic) {
      const uploadResult = await uploadToCloudinary(
        profilePic,
        "dashboard-users",
        `dashboard-users/${data.fullname}_${data.role}_${Date.now()}`
      );
      console.log(uploadResult);
      profilePicUrl = uploadResult.secure_url;
      newProfilePicPublicId = uploadResult.public_id;
    }

    console.log(newProfilePicPublicId);

    const updatedUser = await DashboardUsers.findByIdAndUpdate(
      id,
      {
        profilePic: profilePicUrl,
        profilePicPublicId: newProfilePicPublicId,
        ...data,
      },
      {
        new: true,
        runValidators: true,
      }
    ).select("username fullname email role profilePic _id profilePicPublicId");

    console.log(updatedUser);

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

const updatePassword = async (req, res) => {
  try {
    const { oldpassword, password, confirmPassword } = req.body;
    const id = req.params.id;

    // Validate input
    if (!oldpassword || !password || !confirmPassword) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    if (password !== confirmPassword) {
      return res
        .status(401)
        .json({ message: "Confirm Password doesn't match" });
    }

    // Get user
    const user = await DashboardUsers.findOne({ _id: id });

    const comparePassword = await bcrypt.compare(
      oldpassword,
      user?.password || ""
    );

    if (!comparePassword) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the password in the database
    if (hashedPassword) {
      await DashboardUsers.findByIdAndUpdate(id, { password: hashedPassword });
      console.log("Password updated successfully");
      res.status(200).json({ message: "Password updated successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteDashboardUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await DashboardUsers.findByIdAndDelete({ _id: userId });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllDashboardUsers,
  getAllDetails,
  updateUserDetails,
  updatePassword,
  deleteDashboardUser,
};
