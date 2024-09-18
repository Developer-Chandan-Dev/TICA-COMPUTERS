import "./style.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToggleSidebar } from "../../../features/admin/SidebarToggle/sidebarToggleSlice";
import { useDashboardAuthContext } from "../../../context/DashboardAuthContext";

function SideBar() {
  const [shortSideBar2, setShortSideBar2] = useState("disable");

  const location = useLocation();
  const dispatch = useDispatch();

  const { setAuthDashboardUser } = useDashboardAuthContext();

  // <------------ Control sidebar -------------->
  const toggleSidebar = () => {
    if (shortSideBar2 === "disable") {
      setShortSideBar2("enable");
    } else {
      setShortSideBar2("disable");
    }
  };

  // <--------- handle Close Sidebar Menu --------->
  const closeMenu = () => {
    dispatch(setToggleSidebar("hidden"));
  };
  // <-------------- Handle Logout -------------->
  const handleLogout = async () => {
    // Send request to backend to clear cookies
    await fetch("/api/v1/admin/dashboard/logout", {
      method: "POST",
      credentials: "include", // This ensures cookies are sent with the request
    });

    // Clear auth user state and localStorage
    setAuthDashboardUser(null);
    localStorage.removeItem("new-dashboard-user");
  };

  const toggleMode = useSelector((state) => state.toggleSidebar.value);

  return (
    <div
      className={`sidebar w-14 z-50 h-svh shadow ${toggleMode} sm:block sm:w-16 sm:relative  ${
        shortSideBar2 === "enable" ? "short-sidebar" : "lg:w-1/5"
      }  absolute bottom-0 scroll-smooth`}
      style={{ background: "#f9fbfa" }}
    >
      <div
        className={`items-center justify-between w-4/5 mx-auto my-4 sm:flex ${
          shortSideBar2 === "enable" ? "mx-auto" : ""
        }`}
      >
        <Link
          to="/dashboard"
          className={`flex items-center w-full justify-between`}
        >
          <h1
            className={`hidden lg:block font-semibold ${
              shortSideBar2 === "enable" ? "lg:hidden" : ""
            }`}
          >
            Dashboard
          </h1>
          <div className="rounded-full w-8 h-8 bg-red-200 ml-[10px]"></div>
        </Link>
      </div>
      <ul
        className="navlist mx-auto my-8 sm:my-10 w-11/12 sm:block"
        style={{ color: "#A6ADBA" }}
      >
        <Link to="/dashboard">
          <li
            className={`flex sidebar-li items-center list-none hover:opacity-1 sm:px-4 sm:py-3 my-1 cursor-pointer ${
              location.pathname === "/dashboard" ? "active-li" : ""
            }`}
            title="Dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="#A6ADBA"
              className={`bi bi-grid-fill mx-auto  ${
                shortSideBar2 === "enable" ? "lg:mx-auto" : "lg:mx-0"
              }`}
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
            </svg>
            <span
              className={`ml-3 hidden lg:block hover:text-white ${
                shortSideBar2 === "enable" ? "lg:hidden" : ""
              }`}
            >
              Dashboard
            </span>
          </li>
        </Link>
        <Link to="/dashboard/admin">
          <li
            className={`flex sidebar-li items-center list-none hover:opacity-1 sm:px-4 sm:py-3 my-1 cursor-pointer ${
              location.pathname === "/dashboard/admin" ||
              location.pathname.includes("/dashboard/admin")
                ? "active-li"
                : ""
            }`}
            title="Admin Portal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#A6ADBA"
              className={`bi bi-shield-fill  mx-auto   ${
                shortSideBar2 === "enable" ? "lg:mx-auto" : "lg:mx-0"
              }`}
              viewBox="0 0 16 16"
            >
              <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
            </svg>
            <span
              className={`ml-3 hover:text-white hidden lg:block ${
                shortSideBar2 === "enable" ? "lg:hidden" : ""
              }`}
            >
              Admin Panel
            </span>
          </li>
        </Link>
        <Link to="/dashboard/instructor">
          <li
            className={`flex sidebar-li items-center list-none hover:opacity-1 sm:px-4 sm:py-3 my-1 cursor-pointer ${
              location.pathname === "/dashboard/instructor" ||
              location.pathname.includes("/dashboard/instructor")
                ? "active-li"
                : ""
            }`}
            title="Instructor Panel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#A6ADBA"
              className={`bi bi-book-fill mx-auto   ${
                shortSideBar2 === "enable" ? "lg:mx-auto" : "lg:mx-0"
              }`}
              viewBox="0 0 16 16"
            >
              <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
            </svg>
            <span
              className={`ml-3 hover:text-white hidden lg:block ${
                shortSideBar2 === "enable" ? "lg:hidden" : ""
              }`}
            >
              Instructor Panel
            </span>
          </li>
        </Link>
        <Link to="/dashboard/account">
          <li
            className={`flex sidebar-li items-center list-none hover:opacity-1 sm:px-4 sm:py-3 my-1 cursor-pointer ${
              location.pathname === "/dashboard/account" ||
              location.pathname.includes("/dashboard/account")
                ? "active-li"
                : ""
            }`}
            title="Account Settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="#A6ADBA"
              className={`bi bi-gear-fill mx-auto   ${
                shortSideBar2 === "enable" ? "lg:mx-auto" : "lg:mx-0"
              }`}
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
            <span
              className={`ml-3 hover:text-white hidden lg:block ${
                shortSideBar2 === "enable" ? "lg:hidden" : ""
              }`}
            >
              Account
            </span>
          </li>
        </Link>
      </ul>

      <div
        className="hidden w-7 h-7 rounded-md absolute -right-6 cursor-pointer drop-shadow-sm shadow-sm bottom-[44px] items-center justify-center sm:hidden lg:flex bg-[#f9fbfa] -z-10"
        onClick={toggleSidebar}
      >
        {shortSideBar2 === "enable" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            width="16"
            height="16"
            className="opacity-80"
          >
            <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            width="16"
            height="16"
            className="opacity-80"
          >
            <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
          </svg>
        )}
      </div>

      <div
        className="closeButton w-7 h-7 flex items-center bottom-20 top-auto left-4 justify-center sm:hidden hover:bg-gray-200"
        style={{ background: "linear-gradient(#a79df3, #837ff3) !important" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="cursor-pointer"
          width={22}
          height={22}
          onClick={closeMenu}
          fill="#a6adba"
        >
          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
        </svg>
      </div>
      <div className="flex-center w-full mx-auto absolute bottom-10 -z-10 ">
        <button
          className={`py-2 w-4/5 flex items-center justify-center lg:justify-start gap-x-3 rounded lg:px-4 hover:bg-white hover:drop-shadow text-sm`}
          title="Logout"
          onClick={handleLogout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            xlinkTitle="Logout"
            fill="currentColor"
            className="bi bi-box-arrow-right cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
            />
            <path
              fillRule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
          <span
            className={`hidden lg:block opacity-90 ${
              shortSideBar2 === "enable" ? "lg:hidden" : ""
            }`}
          >
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
