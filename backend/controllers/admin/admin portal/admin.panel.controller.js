const Instructor = require("../../../models/admin/admin Portal/instructor.model.js");
const Staffs = require("../../../models/admin/admin Portal/staff.model.js");
const Admission = require("../../../models/admin/instructor Portal/admission.models.js");
const Course = require("../../../models/admin/instructor Portal/course.models.js");
const User = require("../../../models/users/user.models.js");
const Contact = require("../../../models/users/contact.model.js");

const adminPanelData = async (req, res) => {
  try {
    // Get current month's date range
    const { start, end } = getCurrentMonthRange();

    const instructorLen = (await Instructor.find()).length;
    const staffLen = (await Staffs.find()).length;
    const courseLen = (await Course.find()).length;
    const userLen = (await User.find()).length;
    const contactLen = (await Contact.find()).length;
    const admissionLen = (await Admission.find()).length;

    // Aggregation pipelines
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
    const currentMonthUsers = await User.aggregate([
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
    const currentMonthContacts = await Contact.aggregate([
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
      instructorLen,
      staffLen,
      admissionLen,
      courseLen,
      userLen,
      contactLen,
      currentMonthAdmission: currentMonthAdmission?.length || 0,
      currentMonthUsers: currentMonthUsers?.length || 0,
      currentMonthContacts: currentMonthContacts?.length || 0,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

function getCurrentMonthRange() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1); // First day of the current month
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1); // First day of the next month

  return { start: startOfMonth, end: startOfNextMonth };
}

module.exports = adminPanelData;
