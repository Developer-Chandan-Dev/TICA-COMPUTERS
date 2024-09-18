const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");

// Use cookie-parser middleware
app.use(cookieParser());
app.use(cors());
app.use(cors({ origin: "http://localhost:5000" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Body parser middleware for parsing application/x-www-form-urlencoded
const PORT = process.env.PORT || 8000;

// <============== File imports ==============>
const db = require("./db/connectionToMongoDB");
const authRoutes = require("./routes/users/auth-users.route.js");
const userProfileRoutes = require("./routes/users/users-profile.route.js");
const coursesRoute = require("./routes/users/course.route.js");
const candidateRegistration = require("./routes/users/registraion.route.js");
const showStudentUserRoute = require("./routes/users/students.route.js");
const addEnquiry = require("./routes/users/enquiry.route.js");
const aboutData = require("./routes/users/about.route.js");

// <============== admin dashboard files ==============>
const dashboardLoginRoute = require("./routes/admin/dashboard/auth.route.dashboard");
const adminSignup = require("./routes/admin/dashboard/auth.admin.route");
const dashboardPanels = require("./routes/admin/dashboard/dashboard.panels.js");
const addCourseByAdminRoute = require("./routes/admin/instructor portal/courses.admin.route.js");
const studentAdminRoute = require("./routes/admin/instructor portal/students.admin.route.js");
const instructorCreation = require("./routes/admin/admin portal/instructor.adminPortal.route.js");
const staffCreation = require("./routes/admin/admin portal/staff.adminPortal.route.js");
const getEnquiry = require("./routes/admin/instructor portal/enquiry.route.js");
const registeredCandidates = require("./routes/admin/instructor portal/register.candidates.admin.route.js");
const materialHeading = require("./routes/admin/instructor portal/materials.heading.route.js");
const material = require("./routes/admin/instructor portal/materials.admin.route.js");
const presentUsers = require("./routes/admin/admin portal/users.adminPortal.route.js");
const userContact = require("./routes/admin/admin portal/contact.adminPortal.route.js");
const dashboardAccounts = require("./routes/admin/admin portal/accounts.adminPortal.route.js");
const adminPanelData = require("./routes/admin/admin portal/admin.panel.route.js");

// <============ Routes ===============>
// User Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", userProfileRoutes);
app.use("/api/v1/user/course", coursesRoute);
app.use("/api/v1/user/registration", candidateRegistration);
app.use("/api/v1/user/student", showStudentUserRoute);
app.use("/api/v1/user/enquiry", addEnquiry);
app.use("/api/v1/user/", aboutData);

// <============= Admin Routes ==============>
app.use("/api/v1/admin", adminSignup);
app.use("/api/v1/admin/dashboard", dashboardLoginRoute);
app.use("/api/v1/admin/panel", adminPanelData);
app.use("/api/v1", dashboardPanels);
app.use("/api/v1/instructor/registered-candidates", registeredCandidates);
app.use("/api/v1/instructor/course", addCourseByAdminRoute);
app.use("/api/v1/instructor/student", studentAdminRoute);
app.use("/api/v1/admin/instructor", instructorCreation);
app.use("/api/v1/admin/staff", staffCreation);
app.use("/api/v1/instructor/enquiry", getEnquiry);
app.use("/api/v1/admin/present-users", presentUsers);
app.use("/api/v1/admin/contact", userContact);
app.use("/api/v1/admin/accounts", dashboardAccounts);

// <----- Materials start ------>
app.use("/api/v1/instructor/materials-heading", materialHeading);
app.use("/api/v1/instructor/materials", material);

// <----- Materials end ------>

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}`);
});

// admin
// admin@123
