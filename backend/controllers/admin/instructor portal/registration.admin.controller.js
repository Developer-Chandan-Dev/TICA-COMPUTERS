// const cloudinary = require("cloudinary");
const Register = require("../../../models/admin/instructor Portal/registration.models");
const Admission = require("../../../models/admin/instructor Portal/admission.models");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../../../utils/uploadToCloudinary");

// <=============== Register New Candidate ===============>
const registerCandidate = async (req, res) => {
  try {
    const data = req.body;
    const profilePic = req.file ? req.file.path : null; // Get local file path

    const aadharno = await Register.findOne({ aadharNo: data.aadharNo });
    const aadharno2 = await Admission.findOne({ aadharNo: data.aadharNo });
    if (aadharno || aadharno2) {
      return res.status(400).json({ error: "Addhar already exists" });
    }

    // Upload on cloudinary
    const result = await uploadToCloudinary(
      profilePic,
      "candidates",
      `candidates/${data.candidateName}_${Date.now()}`
    );

    // Create a new Student document
    const newStudent = new Register({
      ...data,
      profilePic: result.secure_url,
      profilePicPublicId: result.public_id,
    });

    if (newStudent) {
      // Save student
      const response = await newStudent.save();
      res.status(201).json({ message: "Registration successful" });

      // Welcome Message in Institute
    } else {
      res.status(400).json({ error: "Invalid Details" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// <=============== Get all students ===============>
const getAllRegisterCandidate = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 7;
    const searchQuery = req.query.search || "";

    // <------------ Search Filter -------------->
    const searchFilter = searchQuery
      ? { candidateName: { $regex: searchQuery, $options: "i" } } // Case - insensitive search on the 'name' field
      : {}; // No filter if search is empty

    // Count total items that match the search query
    const totalItems = await Register.countDocuments(searchFilter);
    const totalPages = Math.ceil(totalItems / limit);

    const addharNo = req.query.addharNo; // filter by addharNo and select specific fields
    const filter = addharNo ? { addharNo } : {};

    // Fetch paginated and filtered data
    const items = await Register.find(searchFilter)
      .select("-state -lastUpdated -city -profilePic")
      .skip((page - 1) * limit)
      .limit(limit);

    // If not items
    if (!items) {
      return res.status(404).json({ error: "Candidate data not found" });
    }

    res.json({ items, totalPages, totalItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// <=============== Get a single candidate details ===============>
const getRegisterCandidateDetails = async (req, res) => {
  try {
    const studentId = req.params.id;

    const response = await Register.findOne({ _id: studentId });
    if (!response) {
      return res.status(400).json({ error: "Student details now found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// <=============== Delete a Registered candidate ===============>
const deleteRegisterCandidate = async (req, res) => {
  try {
    const id = req.params.id;

    const candidate = await Admission.findById({ _id: id });
    // Delete profilePic from cloudinary
    if (candidate.profilePicPublicId) {
      await deleteFromCloudinary(data.profilePicPublicId);
    }

    await Register.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Course Deleted Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// <=============== Update a Registered candidate ===============>
const updatedRegisteredCandidate = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const profilePic = req.file ? req.file.path : null; // Get local file path

    let profilePicUrl = null;
    let profilePicPublicId = null;

    // Delete the old profile picture if a new one is provided
    if (data.profilePicPublicId && profilePic) {
      await deleteFromCloudinary(data.profilePicPublicId);
    }

    // Upload the new profile picture if provided
    if (profilePic) {
      const uploadResult = await uploadToCloudinary(
        profilePic,
        "candidates",
        `candidates/${data.candidateName}_${Date.now()}`
      );
      profilePicUrl = uploadResult.secure_url;
      profilePicPublicId = uploadResult.public_id;
    }

    // Update the candidate with new data and profile picture URL
    const response = await Register.findByIdAndUpdate(
      id,
      {
        profilePic: profilePicUrl,
        profilePicPublicId: profilePicPublicId,
        ...data,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "Candidate updated Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// <=============== Monthly registration data ===============>
const getMonthlyRegistration = async (req, res) => {
  try {
    const registrations = await Register.aggregate([
      {
        $group: {
          _id: { $month: "$registrationDate" }, // Extracts the month from the date
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 }, // Sorts by month (1 for January, 2 for February, etc.)
      },
    ]);
    res.json(registrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching monthly registration" });
  }
};

// <=============== Weekly registration data ===============>
const getWeeklyRegistration = async (req, res) => {
  // Get current year and month
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are 0-based in JavaScript

  try {
    const registration = await Register.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $eq: [{ $year: "$registrationDate" }, year] },
              { $eq: [{ $month: "$registrationDate" }, month] },
            ],
          },
        },
      },
      {
        $group: {
          _id: {
            week: { $week: "$registrationDate" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { "_id.week": 1 }, // Sort by week number
      },
    ]); // Send the aggregated data as a response
    res.json(registration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching monthly registration" });
  }
};

module.exports = {
  registerCandidate,
  getAllRegisterCandidate,
  getRegisterCandidateDetails,
  deleteRegisterCandidate,
  updatedRegisteredCandidate,
  getMonthlyRegistration,
  getWeeklyRegistration,
};
