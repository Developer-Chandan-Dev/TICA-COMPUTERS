const User = require("../../../models/users/user.models.js");

const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 7;
    const searchQuery = req.query.search || "";

    // <--------------- Search Filter --------------->
    const searchFilter = searchQuery
      ? { fullname: { $regex: searchQuery, $options: "i" } } // Case - insensitive search on the 'name' field
      : {}; // No filter if search is empty

    const totalItems = await User.countDocuments(searchFilter); // Count total items that match the search query
    const totalPages = Math.ceil(totalItems / limit); // Get total pages according total items

    // Fetch paginated and filtered data
    const items = await User.find(searchFilter)
      .select("-password")
      .skip((page - 1) * limit)
      .limit(limit);

    if (!items) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ items, totalPages, totalItems });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;

    const response = await User.findById(userId).select("-password");
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Data for users chart
const userChartData = async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" }, // Extracts the month from the date
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 }, // Sorts by month (1 for January, 2 for February, etc.)
      },
    ]);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching monthly Signup Users" });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const response = await User.findByIdAndUpdate(userId, data, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "Account updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const response = await User.findByIdAndDelete(userId);

    if (response) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const blockUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const response = await User.findByIdAndUpdate(userId, data, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.status(200).json({
      message: `User ${
        response.blocked == true ? "blocked" : "unblocked"
      } successfully`,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const searchFilterUsers = async (req, res) => {
  try {
    res.send("Search Filter users");
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  getUserDetails,
  userChartData,
  updateUser,
  deleteUser,
  blockUser,
  searchFilterUsers,
};
