import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Outlet } from "react-router-dom";
import {
  InstructorsContainer,
  StaffContainer,
  AdminHome,
  AccountsManagement,
} from "../../../../components/admin/Dashboard/admin portal/index";
import { InstructorDetails } from "../../../../components/admin/Dashboard/admin portal/presentInstructors/index";
import { StaffDetails } from "../../../../components/admin/Dashboard/admin portal/presentStaffs/index";
import ContactContainer from "./contact/ContactContainer";

const AdminPortal = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchDashboardLoginMessage = async () => {
      try {
        const response = await axios.get(`${VITE_API_URL}/api/v1/dashboard/admin-panel`);
        const data = response.data;
        toast.success(data.message);
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.message);
      }
    };

    fetchDashboardLoginMessage();
  }, []);

  document.title = "TICA Computers - Admin Panel";
  return (
    <>
      <section className="w-fill-available overflow-auto dashboardPageControl">
        <section className="w-11/12 h-auto py-3 mx-auto my-3">
          <Outlet>
            <AdminHome />
            <InstructorsContainer />
            <InstructorDetails />
            <StaffContainer />
            <StaffDetails />
            <ContactContainer />
            <AccountsManagement />
          </Outlet>
        </section>
      </section>
    </>
  );
};

export default AdminPortal;
