import BarChart from "./BarChart";
import { Card } from "./index";
import { useDashboardAuthContext } from "../../../context/DashboardAuthContext";
import MonthlyChartStudents from "../../../pages/admin/Dashboard/students/MonthlyChartStudents";

const DashboardContainer = () => {
  const { authDashboardUser } = useDashboardAuthContext();

  document.title = "TICA Computers - Dashboard";

  return (
    <>
      {/* <DashboardNavbar /> */}
      <section className="w-11/12 h-auto py-3 mx-auto my-3 dashboardPageControl">
        <div className="w-full h-72 mt-3 mb-5 rounded-lg flex justify-start items-center dashboard_banner ">
          <div className="w-11/12 p-3 h-auto rounded-md bg-clip-padding ml-3 sm:ml-10 backdrop-filter backdrop-blur-sm bg-opacity-5 text-white md:w-[600px] drop-shadow">
            <h1 className="text-3xl sm:text-4xl">Dashboard</h1>
            <h1 className="text-xl sm:text-2xl mt-5">
              Welcome,{" "}
              <span className="text-slate-50">
                {authDashboardUser.fullname}
              </span>
            </h1>
            <p className="my-2 text-sm sm:text-base">
              You are login as{" "}
              <span className="text-slate-200">{authDashboardUser.role}</span>{" "}
              in Dashboard. You can access{" "}
              {authDashboardUser.role === "admin"
                ? "all the routes"
                : authDashboardUser.role === "instructor" ??
                  authDashboardUser.role === "instructor"
                ? "all routes but not admin routes"
                : "instructor routes but can not change anything. You have not permission for change or delete anything"}
              .
            </p>
          </div>
        </div>
        <section className="flex items center gap-5 my-5 w-full h-auto py-2 flex-wrap">
          <Card />
        </section>
        <section className="w-full h-auto md:flex items-start justify-between py-2 px-0">
          <div className=" w-11/12 md:w-7/12 h-72 bg-white rounded py-2 mx-auto shadow shadow-gray-200 m-2 flex-center">
            <MonthlyChartStudents />
          </div>
          <div className=" w-11/12 md:w-2/5 h-40 bg-white rounded mx-auto shadow shadow-gray-200 m-2 flex items-center justify-center flex-col">
            <div className=" w-11/12 h-40  mx-auto flex items-center border-b">
              <div className="h-full w-32">
                <div className="w-20 h-20 mx-auto mt-4 rounded-2xl border shadow flex-center">
                  {authDashboardUser.profilePic ? (
                    <img
                      src={authDashboardUser.profilePic}
                      alt="img"
                      className="w-full h-full object-fill"
                    />
                  ) : (
                    <h1 className="text-4xl font-bold text-slate-500">
                      {authDashboardUser.username[0]}
                    </h1>
                  )}
                </div>
              </div>
              <div className="h-full pt-4 relative">
                <div>
                  <h1 className="text-lg first-line:font-semibold text-gray-700 py-1">
                    {authDashboardUser.username.split("-")[0]}
                  </h1>
                  <p className="text-base text-slate-500">
                    {authDashboardUser.role}
                  </p>
                  <p className="text-sm text-slate-500 ">
                    {authDashboardUser.email}
                  </p>
                </div>
                <div className="h-10 absolute bottom-0 text-sm border-t py-1">
                  {/* Hello everyone{" "} */}
                </div>
              </div>
            </div>
            {/* <div className=" w-11/12 h-28 mx-auto"></div> */}
          </div>
        </section>
      </section>
    </>
  );
};

export default DashboardContainer;
