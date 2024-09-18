const Staff = require("../../../models/admin/admin Portal/staff.model");
const DashboardUsers = require("../../../models/admin/dashboard/dashboardUsers.model");
const bcryptjs = require("bcryptjs");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../../../utils/uploadToCloudinary");

// Get All Staff by Admin
const showStaffByAdmin = async (req, res) => {
  try {
    const data = await Staff.find().select(
      "_id fullname profilePic specilization bio profilePic"
    );

    if (!data) {
      return res.status(400).json({ error: "Staff not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get all Details fo Staff
const getAllDetails = async (req, res) => {
  try {
    const staffId = req.params.id;

    const data = await Staff.findById({ _id: staffId }).select(
      "-username -password"
    );

    if (!data) {
      return res.status(400).json({ error: "Staff not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add New Staff by Admin
const addStaffByAdmin = async (req, res) => {
  try {
    const { username, password, confirmPassword, ...data } = req.body;
    const profilePic = req.file ? req.file.path : null; // Get local file path

    if (!username || !password || !confirmPassword) {
      return res.status(400).json({
        error: "Username, password, and confirmPassword are required",
      });
    }

    // Check password and confirm password are same or not
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    // Finding what any other user is present with this username in database
    const user = await DashboardUsers.findOne({ username, role: "staff" });
    if (user) {
      return res.status(400).json({ error: "Staff name already exists" });
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Upload to cloudinary
    const result = await uploadToCloudinary(
      profilePic,
      "dashboard-users",
      `dashboard-users/${data.fullname}_staff_${Date.now()}`
    );

    // Create new Staff
    const staff = new Staff({
      ...data,
      profilePic: result.secure_url,
      profilePicPublicId: result.public_id,
    });

    const newDashboardUser = new DashboardUsers({
      username: username + "-staff",
      password: hashedPassword,
      role: "staff",
      fullname: data.fullname,
      profilePic: result.secure_url,
      profilePicPublicId: result.public_id,
      email: data.email,
    });

    // Saving Staff
    if (newDashboardUser && staff) {
      const savedDashboardUser = await newDashboardUser.save(); // Staff login details saving here
      if (savedDashboardUser) {
        await staff.save(); // Staff Details saving here
        res.status(201).json({ message: "Staff added successfully" });
      }
    }
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Username already exists" });
    }
    res.status(500).json({ error: "Inter Server error", error });
  }
};

// Update Staff by Admin
const updateStaffByAdmin = async (req, res) => {
  try {
    const staffId = req.params.id;
    const data = req.body;
    const profilePic = req.file ? req.file.path : null; // Get local file path

    let profilePicUrl = null;
    let newProfilePicPublicId = null;

    // Delete the old profile pic if a new one is provided
    if (data.profilePicPublicId && profilePic) {
      await deleteFromCloudinary(data.profilePicPublicId);
    }

    // Upload the new dashboard user pic if provided
    if (profilePic) {
      const uploadResult = await uploadToCloudinary(
        profilePic,
        "dashboard-users",
        `dashboard-users/${data.fullname}_staff_${Date.now()}`
      );

      profilePicUrl = uploadResult.secure_url;
      newProfilePicPublicId = uploadResult.public_id;
    }

    const response = await Staff.findByIdAndUpdate(
      staffId,
      {
        profilePic: profilePicUrl,
        profilePicPublicId: newProfilePicPublicId,
        ...data,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Staff not found" });
    }
    res.status(200).json({ message: "Staff updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete Staff by Admin
const deleteStaffByAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Staff.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Staff Deleted Successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  showStaffByAdmin,
  getAllDetails,
  addStaffByAdmin,
  updateStaffByAdmin,
  deleteStaffByAdmin,
};
