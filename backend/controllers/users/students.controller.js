const Admission = require("../../models/admin/instructor Portal/admission.models");

const getAllStudents = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 2;
    const limit = parseInt(req.query.limit) || 7;
    const searchQuery = req.query.search || "";

    // <------------ Search Filter -------------->
    const searchFilter = searchQuery
      ? { studentName: { $regex: searchQuery, $options: "i" } } // Case - insensitive search on the 'name' field
      : {}; // No filter if search is empty

    const totalItems = await Admission.countDocuments(searchFilter); // Count total items that match the search query
    const totalPages = Math.ceil(totalItems / limit);

    // Fetch paginated and filtered data
    const items = await Admission.find(searchFilter)
      .select(
        "-state -lastUpdated -city -profilePic -fathername -mothername -country -aadharNo -mobile -address -gender -DOB"
      )
      .skip((page - 1) * limit)
      .limit(limit);

    // If not items
    if (!items) {
      return res.status(404).json({ error: "Student data not found" });
    }

    res.json({ items, totalPages, totalItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

module.exports = { getAllStudents };
