const Users = require("../../models/users/user.models");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../../utils/uploadToCloudinary");

const getProfile = async (req, res) => {
  try {
    const profileId = req.params.id; // get id from params

    const user = await Users.findById(profileId);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      gender: user.gender,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const profileId = req.params.id;
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
        "users-profiles",
        `users-profiles/${data.fullname}__${Date.now()}`
      );
      profilePicUrl = uploadResult.secure_url;
      newProfilePicPublicId = uploadResult.public_id;
    }

    const response = await Users.findByIdAndUpdate(
      profileId,
      {
        profilePic: profilePicUrl,
        profilePicPublicId: newProfilePicPublicId,
        ...data,
      },
      {
        new: true, // Return the updated document
        runValidators: true, // Run mongoose validation of schema
      }
    );

    if (!response) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getProfile, updateProfile };
