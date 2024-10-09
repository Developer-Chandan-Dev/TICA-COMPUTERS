import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

// <------------- Client Pages and Components --------------->
// <------------- Pages --------------->
import Home from "./pages/user/Home/Home";
import Students from "./pages/user/Students/Students";
import Contact from "./pages/user/Contact/Contact";
import About from "./pages/user/about/About";
import NotFound from "./pages/NotFound";
import {
  Courses,
  CourseDetailsPage,
  CourseRegisterPage,
  InstructorDetailsPage,
} from "./pages/user/Courses/index";
import { Login, Signup } from "./pages/user/auth/index";

// Components
// import { CourseContainer, Course } from "./components/user/Courses/index";

// <------------- Admin Pages and Components --------------->
// <------------- Pages --------------->
import LoginDashboard from "./pages/admin/auth/LoginDashboard";
import {
  Dashboard,
  AdminPortal,
  InstructorPortal,
  EnrolledStudents,
  AvailableCourses,
  StudentDetailsPage,
  StudentSwitcher,
  AddCourse,
  OurCourses,
  MaterialContainer,
  EnquiryContainer,
  RegistrationContainer,
  PresentUsers,
  ContactContainer,
  UpdateCourse,
  RegisterCandidateDetails,
  RegisterCandidateEdit,
  EditStudentDetails,
} from "./pages/admin/Dashboard/index";

// <------------- Components --------------->
import {
  AccountDetails,
  DashboardContainer,
} from "./components/admin/Dashboard/index";

import {
  AdminHome,
  InstructorsContainer,
  StaffContainer,
  PresentUsersContainer,
  UserDetails,
  UsersChart,
  AccountsManagement,
  CurrentAccounts,
  EditAccountDetails,
} from "./components/admin/Dashboard/admin portal/index";
import {
  AddInstructor,
  InstructorDetails,
  ShowInstructors,
  UpdateInstructor,
} from "./components/admin/Dashboard/admin portal/presentInstructors/index";
import {
  AddStaff,
  ShowStaffs,
  UpdateStaff,
} from "./components/admin/Dashboard/admin portal/presentStaffs";
import StaffDetails from "./components/admin/Dashboard/admin portal/presentStaffs/StaffDetails";

import {
  InstructorContainerAdmin,
  InstructorHome,
} from "./components/admin/Dashboard/instructor portal/index";

// <------------- Context --------------->
import { useAuthContext } from "./context/AuthContext";
import { useDashboardAuthContext } from "./context/DashboardAuthContext";
import {
  AddMaterial,
  AllMaterials,
  MaterialHeadings,
  ShowMaterials,
  UpdateMaterial,
} from "./components/admin/Dashboard/instructor portal/materials/index";
import Materials from "./pages/user/material/Materials";
import MaterialDetails from "./pages/user/material/MaterialDetails";
import ScrollToTop from "./components/utility/ScrollToTop";

function App() {
  // eslint-disable-next-line no-unused-vars
  const { courseName, instructorId, staffId } = useParams();

  const { authUser } = useAuthContext();
  const { authDashboardUser } = useDashboardAuthContext();

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* <--------------------- User Routes start here ---------------------> */}

        {/* <--------------------- Home Page ---------------------> */}
        <Route path="/" element={<Home />} />

        {/* <--------------------- Auth Pages ---------------------> */}
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />

        {/* <--------------------- Course page ---------------------> */}
        <Route path="/courses" element={<Courses />} />
        <Route
          path="/courses/register"
          element={authUser ? <CourseRegisterPage /> : <Navigate to="/" />}
        />
        <Route
          path="/courses/register/:courseName"
          element={authUser ? <CourseRegisterPage /> : <Navigate to="/" />}
        />
        <Route
          path="courses/details/:courseName"
          element={authUser ? <CourseDetailsPage /> : <Navigate to="/" />}
        />
        <Route
          path="courses/instructor/details/:instructorId"
          element={<InstructorDetailsPage />}
        />

        {/* <--------------------- Students Page --------------------->*/}
        <Route
          path="/students"
          element={authUser ? <Students /> : <Navigate to="/" />}
        />

        {/* <--------------------- Contact Page ---------------------> */}
        <Route path="/contact" element={<Contact />} />

        {/* <--------------------- About Page ---------------------> */}
        <Route path="/about" element={<About />} />

        {/* <--------------------- Material Page ---------------------> */}
        <Route
          path="/materials"
          element={authUser ? <Materials /> : <Navigate to="/" />}
        />
        <Route
          path="/materials/:materialHeadingId"
          element={authUser ? <Materials /> : <Navigate to="/" />}
        />
        <Route
          path="/materials/details/:materialDetailsId"
          element={<MaterialDetails />}
        />

        {/* <--------------------- NotFound Page -----------------------> */}
        {/* Catch all undefined routes */}
        <Route path="*" element={<NotFound />} />

        {/* <--------------------- Dashboard Routes start here ---------------------> */}
        <Route
          path="/dashboard"
          element={
            authUser && authDashboardUser ? (
              <Dashboard />
            ) : !authUser && !authDashboardUser ? (
              <Navigate to="/login" />
            ) : !authUser ? (
              <Navigate to="/login" />
            ) : authUser && !authDashboardUser ? (
              <Navigate to="/login-dashboard" />
            ) : (
              ""
            )
          }
        >
          <Route path="" element={<DashboardContainer />} />

          {/* <--------------------- Admin Portal ---------------------> */}
          <Route
            path="admin"
            element={
              authDashboardUser !== null &&
              authDashboardUser.role === "admin" ? (
                <AdminPortal />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          >
            <Route path="" element={<AdminHome />} />
            <Route
              path="instructor"
              element={
                (authDashboardUser !== null &&
                  authDashboardUser.role === "admin") ||
                (authDashboardUser !== null &&
                  authDashboardUser.role === "instructor") ||
                (authDashboardUser !== null &&
                  authDashboardUser.role === "staff") ? (
                  <InstructorsContainer />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            >
              <Route path="" element={<ShowInstructors />} />
              <Route path="add" element={<AddInstructor />} />
              <Route path=":instructorId" element={<InstructorDetails />} />
              <Route
                path="update/:instructorId"
                element={<UpdateInstructor />}
              />

              {/* Show Instructor & Add Instructor */}
            </Route>
            <Route path="staff" element={<StaffContainer />}>
              <Route path="" element={<ShowStaffs />} />
              <Route path="add" element={<AddStaff />} />
              <Route path=":staffId" element={<StaffDetails />} />
              <Route path="update/:staffId" element={<UpdateStaff />} />
            </Route>

            <Route path="users" element={<PresentUsers />}>
              <Route path="" element={<PresentUsersContainer />} />
              <Route path="details/:userId" element={<UserDetails />} />
              <Route path="chart" element={<UsersChart />} />
            </Route>
            <Route path="contact" element={<ContactContainer />} />
            <Route path="accounts" element={<AccountsManagement />}>
              <Route path="" element={<CurrentAccounts />} />
              <Route path="edit/:accountId" element={<EditAccountDetails />} />
            </Route>

          </Route>

          {/* <--------------------- Instructor Portal ---------------------> */}
          <Route path="instructor" element={<InstructorPortal />}>
            <Route path="" element={<InstructorHome />} />
            <Route path="features" element={<InstructorContainerAdmin />}>
              <Route path="students" element={<StudentSwitcher />}>
                <Route path="" element={<EnrolledStudents />} />
                <Route
                  path="details/:studentId"
                  element={<StudentDetailsPage />}
                />
                <Route
                  path="edit/:studentId"
                  element={<EditStudentDetails />}
                />
              </Route>
              <Route path="courses" element={<OurCourses />}>
                <Route path="" element={<AvailableCourses />} />
                <Route path="add" element={<AddCourse />} />
                <Route
                  path="update/:courseShortName"
                  element={<UpdateCourse />}
                />
              </Route>
              <Route path="materials" element={<MaterialContainer />}>
                <Route path="" element={<AllMaterials />} />
                <Route
                  path=":materialHeadingId/show"
                  element={<ShowMaterials />}
                />
                <Route
                  path=":materialHeadingId/add"
                  element={<AddMaterial />}
                />
                <Route path="headings" element={<MaterialHeadings />} />
                <Route
                  path={":materialHeadingId/update/:materialId"}
                  element={<UpdateMaterial />}
                />
              </Route>
              <Route path="enquiries" element={<EnquiryContainer />} />
              <Route
                path="registered-students"
                element={<RegistrationContainer />}
              />
              <Route
                path="registered-students/details/:candidateId"
                element={<RegisterCandidateDetails />}
              />
              <Route
                path="registered-students/edit/:candidateId"
                element={<RegisterCandidateEdit />}
              />
            </Route>
          </Route>

          {/* Account Details */}
          <Route path="account" element={<AccountDetails />} />
        </Route>

        {/* <--------------------- Dashboard Auth Page ---------------------> */}
        <Route
          path="/login-dashboard"
          element={
            authUser && !authDashboardUser ? (
              <LoginDashboard />
            ) : authUser && authDashboardUser ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
// Aake teri banho me ye sham lage sanduri
