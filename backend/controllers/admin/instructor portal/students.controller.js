const Register = require("../../../models/admin/instructor Portal/registration.models");
const Admission = require("../../../models/admin/instructor Portal/admission.models");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../../../utils/uploadToCloudinary");

// <=============== Add New Student ===============>
const addStudent = async (req, res) => {
  try {
    const { id } = req.params;

    // Finding candidate in database using `id`
    const candidate = await Register.findById(id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    // Check what this aadharno is already exists in our collecitons
    const aadharno = await Admission.findOne({ aadharNo: candidate.aadharNo });
    if (aadharno) {
      return res.status(400).json({ error: "Addhar already exists" });
    }

    // new student
    const newStudent = new Admission({
      studentName: candidate.candidateName,
      courseName: candidate.courseName,
      fathername: candidate.fathername,
      mothername: candidate.mothername,
      DOB: candidate.DOB,
      registrationDate: candidate.registrationDate,
      gender: candidate.gender,
      address: candidate.address,
      city: candidate.city,
      state: candidate.state,
      country: candidate.country,
      mobile: candidate.mobile,
      aadharNo: candidate.aadharNo,
      profilePic: candidate.profilePic,
      profilePicPublicId: candidate.profilePicPublicId,
    });

    if (newStudent) {
      await newStudent.save();
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

// <============= Get All students in one time ===============>
const getAllStudent = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 7;
    const searchQuery = req.query.search || "";

    // <------------ Search Filter -------------->
    const searchFilter = searchQuery
      ? { studentName: { $regex: searchQuery, $options: "i" } } // Case - insensitive search on the 'name' field
      : {}; // No filter if search is empty

    // Count total items that match the search query
    const totalItems = await Admission.countDocuments(searchFilter);
    const totalPages = Math.ceil(totalItems / limit);

    const addharNo = req.query.addharNo; // filter by addharNo and select specific fields
    const filter = addharNo ? { addharNo } : {};

    // Fetch paginated and filtered data
    const items = await Admission.find(searchFilter)
      .select("-state -lastUpdated -city -profilePic")
      .skip((page - 1) * limit)
      .limit(limit);

    // If not items
    if (!items) {
      return res.status(404).json({ error: "Student data not found" });
    }

    res.json({ items, totalPages, totalItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// <=============== Get a single student details ===============>
const getStudentDetails = async (req, res) => {
  try {
    const studentId = req.params.id;

    const response = await Admission.findOne({ _id: studentId });
    if (!response) {
      return res.status(400).json({ error: "Student details now found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// <=============== Update a Admissioned student ===============>
const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const data = req.body;
    const profilePic = req.file ? req.file.path : null; // Get local file path
    console.log(profilePic, data, data.profilePicPublicId);

    let profilePicUrl = null;
    let profilePicPublicId = null;

    // Checking what students is in database or not
    const student = await Admission.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Delete the old profile picture if a new one is provided
    if (data.profilePicPublicId && profilePic) {
      await deleteFromCloudinary(data.profilePicPublicId);
    }

    // Upload the new profile picture if provided
    if (profilePic) {
      const uploadResult = await uploadToCloudinary(
        profilePic,
        "candidates",
        `candidates/${data.studentName}_${Date.now()}`
      );
      profilePicUrl = uploadResult.secure_url;
      profilePicPublicId = uploadResult.public_id;
    }

    // Update the candidate with new data and profile picture URL
    const response = await Admission.findByIdAndUpdate(
      studentId,
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
      return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json({ message: "Student Details updated Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// <=============== Delete a Admissioned student ===============>
const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;

    const student = await Admission.findById({ _id: id });
    // Delete profilePic from cloudinary
    if (student.profilePicPublicId) {
      await deleteFromCloudinary(data.profilePicPublicId);
    }

    await Admission.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Course Deleted Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// <=============== Monthly admission data ===============>
const getMonthlyStudent = async (req, res) => {
  try {
    const admissions = await Admission.aggregate([
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
    res.json(admissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching monthly registration" });
  }
};

// <=============== Weekly admission data ===============>
const getWeeklyStudent = async (req, res) => {
  // Get current year and month
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are 0-based in JavaScript

  try {
    const admissions = await Admission.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $eq: [{ $year: "$admissionDate" }, year] },
              { $eq: [{ $month: "$admissionDate" }, month] },
            ],
          },
        },
      },
      {
        $group: {
          _id: {
            week: { $week: "$admissionDate" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { "_id.week": 1 }, // Sort by week number
      },
    ]); // Send the aggregated data as a response
    res.json(admissions);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Errror fetching current month weekly admissions" });
  }
};

module.exports = {
  addStudent,
  getAllStudent,
  getStudentDetails,
  updateStudent,
  deleteStudent,
  getMonthlyStudent,
  getWeeklyStudent,
};
