import "./Dashboard.css";
import {
  SideBar,
  DashboardContainer,
  DashboardNavbar,
  AccountDetails,
} from "../../../components/admin/Dashboard/index";
import { Outlet } from "react-router-dom";
import AdminPortal from "./admin portal/AdminPortal";
import InstructorPortal from "./instructor portal/InstructorPortal";
import ScrollToTop from "../../../components/utility/ScrollToTop";

const Dashboard = () => {
  document.title = "TICA Computers - Dashboard";

  return (
    <section className="w-screen h-screen bg-white flex">
      <SideBar />
      <section
        className="overflow-y-auto big-container h-screen w-fill-available "
        style={{ background: "#f2f6fa" }}
      >
        <DashboardNavbar />
        <ScrollToTop />
        <Outlet>
          <DashboardContainer />
          <AdminPortal />
          <InstructorPortal />
          <AccountDetails />
        </Outlet>
      </section>
    </section>
  );
};

export default Dashboard;
