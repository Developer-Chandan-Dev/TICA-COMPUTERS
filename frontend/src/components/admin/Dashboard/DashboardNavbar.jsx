import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDashboardNavbarData } from "../../../features/admin/DashboardNavbarData/DashboardNavbarDataSlice";
import { setToggleSidebar } from "../../../features/admin/SidebarToggle/sidebarToggleSlice";
import { useDashboardAuthContext } from "../../../context/DashboardAuthContext";
import useAnimatedMenu from "../../../hooks/user/useAnimatedMenu";

const DashboardNavbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navbarRef = useRef();
  const handleButtonRef = useRef();
  const showDownButtonRef = useRef();

  const [navbarData, setNavbarData] = useState(null);
  const { authDashboardUser } = useDashboardAuthContext();

  // <-------------- Set Dashboard Navbars2 -------------->
  const path = location.pathname;
  useEffect(() => {
    if (path.includes("admin")) {
      dispatch(
        setDashboardNavbarData([
          {
            navbar: "Instructors",
            navbarUrl: "/dashboard/admin/instructor",
          },
          {
            navbar: "Staffs",
            navbarUrl: "/dashboard/admin/staff",
          },
          {
            navbar: "Users",
            navbarUrl: "/dashboard/admin/users",
          },
          {
            navbar: "Contacts",
            navbarUrl: "/dashboard/admin/contact",
          },
          {
            navbar: "Accounts",
            navbarUrl: "/dashboard/admin/accounts",
          },
        ])
      );
    } else if (!path.includes("admin") && path.includes("instructor")) {
      dispatch(
        setDashboardNavbarData([
          {
            navbar: "Registration",
            navbarUrl: "/dashboard/instructor/features/registered-students",
          },
          {
            navbar: "Students",
            navbarUrl: "/dashboard/instructor/features/students",
          },
          {
            navbar: "Courses",
            navbarUrl: "/dashboard/instructor/features/courses",
          },
          {
            navbar: "Enquries",
            navbarUrl: "/dashboard/instructor/features/enquiries",
          },
          {
            navbar: "Materials",
            navbarUrl: "/dashboard/instructor/features/materials",
          },
        ])
      );
    } else {
      dispatch(setDashboardNavbarData(null));
    }
  }, [dispatch, path]);

  const openMenu = () => {
    dispatch(setToggleSidebar("block"));
  };

  const handleHideSecondNavbar = () => {
    gsap.to(navbarRef.current, {
      height: "64px",
      duration: 1,
    });
    gsap.to(showDownButtonRef.current, {
      display: "flex",
      duration: 1,
    });
  };
  const handleShowSecondNavbar = () => {
    gsap.to(navbarRef.current, {
      height: "112px",
      duration: 1,
    });
    gsap.to(showDownButtonRef.current, {
      display: "none",
      duration: 1,
    });
  };

  // <-------------- Get Dashboard Navbar2 Navs -------------->
  const navbar2Data = useSelector((state) => state.dashboardNavbarData.value);
  useEffect(() => {
    setNavbarData(navbar2Data);
  }, [navbar2Data]);

  // Using custom hooks for toggle submenu
  const {
    isOpen: isSubMenuOpen,
    openMenu: openSubMenu,
    // closeMenu : closeSubMenu,
    menuRef: subMenuRef,
  } = useAnimatedMenu("x", 80, "x", 0, "x", 0, "x", 80);

  return (
    <>
      <div
        className={`w-fill-available sticky top-0 z-40 h-16 border-b sm:${
          navbarData === null ? "h-16" : "h-28"
        } sm:overflow-hidden `}
        ref={navbarRef}
        style={{ color: "#868C9B", background: "#fff" }}
      >
        <div className="w-11/12 flex items-center justify-between h-16 mx-auto z-30 bg-white">
          <div>
            <span className="font-bold ml-4">TICA COMPUTERS</span>
          </div>
          <div className="flex gap-x-4 items-center relative mr-10">
            <Link to="/dashboard/account">
              {" "}
              <div className="w-8 h-8 mr-1 sm:ml-3 rounded-full flex items-center justify-center cursor-pointer overflow-hidden border">
                {authDashboardUser.profilePic ? (
                  <img
                    src={authDashboardUser.profilePic}
                    alt="img"
                    className="w-full h-full object-fill"
                  />
                ) : (
                  authDashboardUser.username[0]
                )}
              </div>
            </Link>
            <span className="text-2xl">|</span>
            <span className="hidden sm:block text-sm pr-10">
              {authDashboardUser.username.split("-")[0]}
            </span>
            <div className="openButton flex items-center justify-center bg-white transition-all shadow cursor-pointer sm:hidden absolute top-3 left-12 z-50 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                width={16}
                height={16}
                className="opacity-55"
                onClick={openSubMenu}
              >
                <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
              </svg>
            </div>
          </div>
        </div>

        {path.includes("admin") || path.includes("instructor") ? (
          <div
            className={`h-0 w-0 hidden sm:flex absolute top-10 right-7 drop-shadow-lg transition-all sm:w-12 sm:h-5 items-center justify-center rounded-md cursor-pointer hover:shadow-md`}
            ref={showDownButtonRef}
            onClick={handleShowSecondNavbar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="15"
              height="15"
              className="hidden sm:block"
              fill="#5a5a5a"
            >
              <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
            </svg>
          </div>
        ) : (
          ""
        )}

        <div className="openButton flex items-center justify-center bg-white shadow cursor-pointer sm:hidden absolute top-5 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            width={16}
            height={16}
            className="opacity-55"
            onClick={openMenu}
          >
            <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
          </svg>
        </div>

        {path.includes("admin") || path.includes("instructor") ? (
          <div
            className={`z-20 sm:!block sm:opacity-100 relative sm:top-0 sm:shadow sm:w-full sm:h-12 bg-white sm:translate-x-0`}
          >
            <div className="hidden sm:flex sm:w-11/12 mx-auto sm:h-12 sm:sticky top-16 items-center justify-between">
              <ul className="flex items-center gap-x-3 sm:absolute bottom-0 text-xs sm:text-sm">
                {navbarData != null
                  ? navbarData.map(({ navbar, navbarUrl }) => (
                      <Link to={navbarUrl} key={navbarUrl}>
                        {" "}
                        <li
                          className={`px-4 text-sm pb-2 pt-3  border-b-4 ${
                            location.pathname.includes(navbarUrl)
                              ? "border-blue-400"
                              : "border-transparent"
                          } cursor-pointer hover:bg-slate-50`}
                        >
                          {navbar}
                        </li>
                      </Link>
                    ))
                  : ""}
              </ul>
              <div
                className="transition-all w-12 h-5 drop-shadow-lg absolute -right-3 bottom-3 hidden sm:flex items-center justify-center rounded cursor-pointer hover:shadow-md"
                ref={handleButtonRef}
                onClick={handleHideSecondNavbar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="15"
                  height="15"
                  fill="currentColor"
                >
                  <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" />
                </svg>
              </div>
            </div>
            {isSubMenuOpen && (
              <div
                className="hidden opacity-0 absolute right-0 shadow-md shadow-gray-400 w-40 h-auto bg-white translate-x-20 mx-auto top-0 sm:hidden"
                ref={subMenuRef}
              >
                <ul className="sm:hidden items-center gap-x-3 bottom-0 text-xs">
                  {navbarData != null
                    ? navbarData.map(({ navbar, navbarUrl }) => (
                        <Link to={navbarUrl} key={navbarUrl}>
                          {" "}
                          <li
                            className={`px-3 text-sm pb-2 pt-3  border-b-4 ${
                              location.pathname.includes(navbarUrl)
                                ? "border-blue-400"
                                : "border-transparent"
                            } cursor-pointer hover:bg-slate-50`}
                          >
                            {navbar}
                          </li>
                        </Link>
                      ))
                    : ""}
                </ul>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DashboardNavbar;
