import "./style.css";
import AdminCards from "./AdminCards";
import { useDashboardAuthContext } from "../../../../context/DashboardAuthContext";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const { authDashboardUser } = useDashboardAuthContext();
  
  return (
    <>
      <div className="w-full h-[350px] rounded-lg mb-5 adminBanner flex items-start">
        <div className="pt-8 pb-10 pl-10 pr-5 w-[650px] drop-shadow text-[#07090e] sm:ml-10 mt-10 backdrop-filter backdrop-blur-sm bg-opacity-5">
          <h1 className="text-3xl font-bold py-2 ">Admin Panel</h1>
          <p className="text-sm sm:text-base">
            Welcome your{" "}
            <span className="font-bold text-blue-800">
              {authDashboardUser.fullname}
            </span>{" "}
            on Admin Panel. You have access of entire application.You can modify
            delete anything.
          </p>
          <p className="mt-2 hidden sm:block text-sm sm:text-base">
            Explore & Manage Users, Instructors, Staffs, Contacts etc.
          </p>
          <div className="mt-5 gap-x-1 flex justify-start text-[15px]">
            <Link to="/dashboard/admin/accounts">
              <button className="px-3 py-[6px] rounded-md text-sm border border-[#0e4648] bg-transparent shadow-md transition-all hover:!bg-slate-200 text-[#0e4648] ">
                Accounts
              </button>
            </Link>
            <Link to="/dashboard/admin/users">
              <button className="px-3 py-[6px] rounded-md text-sm border border-[#0e4648] bg-transparent shadow-md transition-all hover:!bg-slate-200 text-[#0e4648] ">
                Users
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap py-3 gap-5">
        <AdminCards />
      </div>
    </>
  );
};

export default AdminHome;
