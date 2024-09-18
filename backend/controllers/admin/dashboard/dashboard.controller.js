const Course = require("../../../models/admin/instructor Portal/course.models");
const Register = require("../../../models/admin/instructor Portal/registration.models");
const Admission = require("../../../models/admin/instructor Portal/admission.models");
const Materials = require("../../../models/admin/instructor Portal/materials.models");
const Enquiry = require("../../../models/users/enquiry.models");

// Dashboard Controller
const dashboard = (req, res) => {
  try {
    res.status(200).json({ message: "Welcome in Dashboard" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Admin panel Controller
const adminPanel = (req, res) => {
  try {
    res.status(200).json({ message: "Welcome in Admin Panel" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Instructor panel Controller
const instructorPanel = (req, res) => {
  try {
    res.status(200).json({ message: "Welcome in Instructor Panel" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Staff panel Controller
const staffPanel = (req, res) => {
  try {
    res.status(200).json({ message: "Welcome in Staff Panel" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

function getCurrentMonthRange() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1); // First day of the current month
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1); // First day of the next month

  return { start: startOfMonth, end: startOfNextMonth };
}

const dashboardCardsData = async (req, res) => {
  try {
    // Get current month's date range
    const { start, end } = getCurrentMonthRange();

    const courseLength = (await Course.find()).length;
    const admissionLength = (await Admission.find()).length;
    const materialsLength = (await Materials.find()).length;
    const registerLength = (await Register.find()).length;
    const enquiryLength = (await Enquiry.find()).length;

    // Aggregation pipelines
    const currentMonthRegister = await Register.aggregate([
      // Stage 1: Match documents created in the current month
      {
        $match: {
          createdAt: {
            $gte: start, // Start of the current month
            $lt: end, // Less than the start of the next month
          },
        },
      },
    ]);
    const currentMonthAdmission = await Admission.aggregate([
      // Stage 1: Match documents created in the current month
      {
        $match: {
          createdAt: {
            $gte: start, // Start of the current month
            $lt: end, // Less than the start of the next month
          },
        },
      },
    ]);
    const currentMonthMaterial = await Materials.aggregate([
      // Stage 1: Match documents created in the current month
      {
        $match: {
          createdAt: {
            $gte: start, // Start of the current month
            $lt: end, // Less than the start of the next month
          },
        },
      },
    ]);
    const currentMonthEnquiry = await Enquiry.aggregate([
      // Stage 1: Match documents created in the current month
      {
        $match: {
          createdAt: {
            $gte: start, // Start of the current month
            $lt: end, // Less than the start of the next month
          },
        },
      },
    ]);

    res.status(200).json({
      courseLength,
      registerLength,
      admissionLength,
      materialsLength,
      enquiryLength,
      currentMonthRegister: currentMonthRegister.length,
      currentMonthAdmission: currentMonthAdmission.length,
      currentMonthMaterial: currentMonthMaterial.length,
      currentMonthEnquiry: currentMonthEnquiry.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  dashboard,
  adminPanel,
  instructorPanel,
  staffPanel,
  dashboardCardsData,
};
