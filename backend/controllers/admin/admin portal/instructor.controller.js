const bcryptjs = require("bcryptjs");
const Instructor = require("../../../models/admin/admin Portal/instructor.model");
const DashboardUsers = require("../../../models/admin/dashboard/dashboardUsers.model");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../../../utils/uploadToCloudinary");

// Get All Instructors by Admin
const showInstructorByAdmin = async (req, res) => {
  try {
    const data = await Instructor.find().select(
      "_id fullname profilePic specilization bio"
    );

    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllDetails = async (req, res) => {
  try {
    const instructorId = req.params.id;

    const data = await Instructor.findById({ _id: instructorId }).select(
      "-username -password"
    );
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Add New Instructors by Admin
const addInstructorByAdmin = async (req, res) => {
  try {
    const { username, password, confirmPassword, ...data } = req.body;
    const profilePic = req.file ? req.file.path : null; // Get local file path

    if (!username || !password || !confirmPassword) {
      return res.status(400).json({
        error: "Username, password, and confirmPassword are required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const user = await DashboardUsers.findOne({ username, role: "instructor" });
    if (user) {
      return res.status(400).json({ error: "Instructor name already exists" });
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Upload to cloudinary
    const result = await uploadToCloudinary(
      profilePic,
      "dashboard-users",
      `dashboard-users/${data.fullname}_instructor_${Date.now()}`
    );

    // Insert into Instructor collection (excluding username, password, and role)
    const instructor = new Instructor({
      ...data,
      profilePic: result.secure_url,
      profilePicPublicId: result.public_id,
    });

    // Insert into Dashboard collection
    const newDashboardUser = new DashboardUsers({
      username: username + "-instructor",
      password: hashedPassword,
      role: "instructor",
      fullname: data.fullname,
      profilePic: result.secure_url,
      profilePicPublicId: result.public_id,
      email: data.email,
    });

    if (newDashboardUser && instructor) {
      const savedDashboardUser = await newDashboardUser.save();
      if (savedDashboardUser) {
        await instructor.save();
        res.status(201).json({ message: "Instructor added successfully" });
      }
    }
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Username already exists" });
    }
    res.status(500).json({ error: "Internal Server error", error });
  }
};

// Update Instructor by Admin
const updateInstructorByAdmin = async (req, res) => {
  try {
    const instructorId = req.params.id;
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
        `dashboard-users/${data.fullname}_instructor_${Date.now()}`
      );
      profilePicUrl = uploadResult.secure_url;
      newProfilePicPublicId = uploadResult.public_id;
    }

    const response = await Instructor.findByIdAndUpdate(
      instructorId,
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
      return res.status(404).json({ error: "Instructor not found" });
    }
    res.status(200).json({ message: "Instructor updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete Instructor by Admin
const deleteInstructorByAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Instructor.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Course Deleted Successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  showInstructorByAdmin,
  getAllDetails,
  addInstructorByAdmin,
  updateInstructorByAdmin,
  deleteInstructorByAdmin,
};
