import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Outlet } from "react-router-dom";
// import { EnrolledStudents, OurCourses } from "../index";
import {
  InstructorHome,
  InstructorContainerAdmin,
} from "../../../../components/admin/Dashboard/instructor portal/index";

const InstructorPortal = () => {
  useEffect(() => {
    const fetchDashboardLoginMessage = async () => {
      try {
        const response = await axios.get("/api/v1/dashboard/instructor-panel");
        const data = response.data;
        toast.success(data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchDashboardLoginMessage();
  }, []);

  document.title = "TICA Computers - Instructor Panel";

  return (
    <>
      <section className="w-fill-available overflow-y-hidden overflow-x-hidden dashboardPageControl">
        <Outlet>
          <InstructorHome />
          <InstructorContainerAdmin />
        </Outlet>
      </section>
    </>
  );
};

export default InstructorPortal;
