import "./Navbar.css";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useAnimatedMenu from "../../hooks/user/useAnimatedMenu";
import useUpdateUser from "../../hooks/user/auth/useUpdateUser";

function Navbar() {
  // <------- States -------->
  const { authUser } = useAuthContext();
  const location = useLocation();

  // Using custom hooks for toggle hamburger & userProfile
  const {
    isOpen: isHamburgerOpen,
    openMenu: openHamburger,
    closeMenu: closeHamburger,
    menuRef: hamburgerRef,
  } = useAnimatedMenu("x", -80, "x", 0, "x", 0, "x", -80);
  const {
    isOpen: isUserProfileOpen,
    openMenu: openProfile,
    closeMenu: closeProfile,
    menuRef: userProfileRef,
  } = useAnimatedMenu("x", 200, "x", 0, "x", 0, "x", 200);
  const {
    isOpen: isUserInfoOpen,
    openMenu: openUserInfo,
    closeMenu: closeUserInfo,
    menuRef: userInfoRef,
  } = useAnimatedMenu("x", 200, "x", 0, "x", 0, "x", 200);

  // Using Hook variables here
  const {
    formData,
    handleChange,
    handleFileChange,
    setFormData,
    handleSubmit,
    handleLogout,
  } = useUpdateUser({
    id: "",
    fullname: "",
    username: "",
    email: "",
    profilePic: "",
  });
  // <---------- Handle & Update User Details ----------->
  useEffect(() => {
    authUser !== null ? setFormData(authUser) : "";
  }, []);

  return (
    <header
      className="w-full h-16 sticky top-0 z-50 text-sm"
      style={{ backgroundColor: "#104d6b" }}
    >
      <nav className="w-11/12 h-16 mx-auto flex items-center justify-between ">
        <div className="text-white font-semibold text-base">TICA COMPUTERS</div>
        {isHamburgerOpen && (
          <ul
            className={`navBar-navlist absolute w-36 -left-0 top-16 px-2 py-3 items-center opacity-0 -translate-x-20 z-10 md:hidden`}
            ref={hamburgerRef}
          >
            <Link to="/">
              <li
                className={`text-gray-300 transition-all cursor-pointer my-3 px-3 hover:text-white ${
                  location.pathname === "/" ? "active-client-li" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/courses">
              <li
                className={`text-gray-300 transition-all cursor-pointer my-3 px-3 hover:text-white ${
                  location.pathname === "/courses" ? "active-client-li" : ""
                }`}
              >
                Courses
              </li>
            </Link>
            <Link to="/about">
              <li
                className={`text-gray-300 transition-all cursor-pointer my-3 px-3 hover:text-white ${
                  location.pathname === "/about" ? "active-client-li" : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link to="/contact">
              <li
                className={`text-gray-300 transition-all cursor-pointer my-3 px-3 hover:text-white ${
                  location.pathname === "/contact" ? "active-client-li" : ""
                }`}
              >
                Contact
              </li>
            </Link>

            <div
              className="closeButton cursor-pointer flex items-center justify-center md:hidden"
              onClick={closeHamburger}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width={18}
                height={18}
                fill="white"
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </div>
          </ul>
        )}
        <ul className="hidden md:py-0 md:bg-transparent md:flex md:relative md:top-0 md:opacity-100 md:translate-x-0 md:px-0">
          <Link to="/">
            <li
              className={`text-gray-300 transition-all cursor-pointer my-3 px-3 md:my-0 md:px-0 md:mx-3 lg:mx-5 lg:text-base hover:text-white ${
                location.pathname === "/" ? "active-client-li" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link to="/courses">
            <li
              className={`text-gray-300 transition-all cursor-pointer my-3 px-3 md:my-0 md:px-0 md:mx-3 lg:mx-5 lg:text-base hover:text-white ${
                location.pathname === "/courses" ? "active-client-li" : ""
              }`}
            >
              Courses
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`text-gray-300 transition-all cursor-pointer my-3 px-3 md:my-0 md:px-0 md:mx-3 lg:mx-5 lg:text-base hover:text-white ${
                location.pathname === "/about" ? "active-client-li" : ""
              }`}
            >
              About
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={`text-gray-300 transition-all cursor-pointer my-3 px-3 md:my-0 md:px-0 md:mx-3 lg:mx-5 lg:text-base hover:text-white ${
                location.pathname === "/contact" ? "active-client-li" : ""
              }`}
            >
              Contact
            </li>
          </Link>
        </ul>

        <div
          className="openButton flex items-center justify-center md:hidden"
          style={{ background: "#104d6b" }}
        >
          <ul className="mx-auto cursor-pointer" onClick={openHamburger}>
            <li className="rounded-lg h-1 w-4 mx-auto bg-gray-100"></li>
            <li className="rounded-lg h-1 w-4 mx-auto bg-gray-100"></li>
            <li className="rounded-lg h-1 w-4 mx-auto bg-gray-100"></li>
          </ul>
        </div>
        <div className="flex items-center relative">
          {authUser ? (
            <>
              <div
                className="w-8 h-8 border-2 border-slate-300 rounded-full cursor-pointer overflow-hidden flex-center"
                onClick={openUserInfo}
              >
                {authUser.profilePic ? (
                  <img
                    src={authUser.profilePic}
                    alt="img"
                    className="w-full h-full object-fill"
                  />
                ) : (
                  <h1 className="text-xl font-bold text-white">
                    {authUser.username[0]}
                  </h1>
                )}
              </div>
              {isUserInfoOpen && (
                <ul
                  className="w-48 bg-white overflow-hidden absolute top-12 -right-1 rounded-b-xl shadow-lg shadow-gray-400 translate-x-20"
                  ref={userInfoRef}
                >
                  <li className="pl-5 pr-2 font-semibold py-4 border-b flex items-center justify-between">
                    <span>{formData.fullname}</span>
                    <div
                      className="closeButton2 cursor-pointer flex items-center justify-center"
                      onClick={closeUserInfo}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        width="18"
                        height="18"
                        className=""
                      >
                        <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                      </svg>
                    </div>
                  </li>
                  <li
                    className="pl-5 pt-2 pb-3 flex items-center gap-2 cursor-pointer transition-all hover:bg-slate-50"
                    onClick={openProfile}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-gear-fill opacity-60 "
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                    <span>Account Settings</span>
                  </li>
                </ul>
              )}

              {isUserProfileOpen && (
                <div
                  className="w-72 sm:w-[450px] h-[550px] rounded-lg shadow-lg absolute top-12 -right-1 px-0 pb-4 cursor-default opacity-0 hidden translate-x-20 z-50"
                  ref={userProfileRef}
                  style={{
                    background: "#f6f6f6",
                  }}
                >
                  <div className="flex items-center justify-between bg-white px-4 py-4">
                    <h2 className="font-bold">Account Settings</h2>
                    <div
                      className="closeButton2 cursor-pointer flex items-center justify-center"
                      onClick={closeProfile}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        width="18"
                        height="18"
                        className=""
                      >
                        <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full h-96 py-3">
                    <div className=" w-11/12 rounded mx-auto h-auto p-4 bg-white pb-10 relative">
                      <form className="text-sm" onSubmit={handleSubmit}>
                        <div className="w-20 h-20 mb-3 rounded-md overflow-hidden border">
                          <img
                            src={authUser.profilePic}
                            alt="user-image"
                            className="w-full h-full object-fit"
                          />{" "}
                        </div>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          id="profilePicture"
                          name="profilePic"
                          accept="image/*"
                          className="my-2"
                        />
                        <div className="mb-5">
                          <label
                            htmlFor="fullname"
                            className="font-medium ml-1"
                          >
                            Full Name
                          </label>
                          <div className="w-full bg-white border py-1 px-2 rounded-md mt-2">
                            <input
                              type="text"
                              value={formData.fullname}
                              onChange={handleChange}
                              id="fullname"
                              name="fullname"
                              placeholder="Full name"
                              className="outline-none bg-transparent border-none w-fill-available"
                            />
                          </div>
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor="username"
                            className="font-medium ml-1"
                          >
                            User Name
                          </label>
                          <div className="w-full bg-white border py-1 px-2 rounded-md mt-2">
                            <input
                              type="text"
                              value={formData.username}
                              onChange={handleChange}
                              id="username"
                              name="username"
                              placeholder="Username"
                              className="outline-none bg-transparent border-none w-fill-available"
                            />
                          </div>
                        </div>
                        <div className="mb-5">
                          <label htmlFor="email" className="font-medium ml-1">
                            Email
                          </label>
                          <div className="w-full bg-white border py-1 px-2 rounded-md mt-2">
                            <input
                              type="text"
                              value={formData.email}
                              onChange={handleChange}
                              id="email"
                              name="email"
                              placeholder="Email"
                              className="outline-none bg-transparent border-none w-fill-available"
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-end mt-5">
                          <button type="submit" className="sm">
                            Save
                          </button>
                        </div>
                      </form>
                      <button
                        className={`py-2 w-10 sm:w-28 flex items-center justify-center lg:justify-start gap-x-3 rounded lg:px-4 hover:bg-white hover:drop-shadow text-sm absolute bottom-10`}
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
                        <span className={`hidden sm:block opacity-90`}>
                          Logout
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <LoginSignupButtons />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

function LoginSignupButtons() {
  return (
    <>
      <Link to="/login">
        <button className="btn px-5 transition-all btn shadow-md hover:shadow-lg hover:shadow-slate-500 shadow-slate-400 py-2 mr-2 text-white rounded-lg">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button className="btn px-5 hidden sm:block transition-all btn shadow-md hover:shadow-lg hover:shadow-slate-500 shadow-slate-400 py-2 text-white rounded-lg">
          Signup
        </button>
      </Link>
    </>
  );
}
