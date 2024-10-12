import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setMaterialHeading } from "../../../features/admin/MaterialHeading/materialHeadingSlice";
import useAnimatedMenu from "../../../hooks/user/useAnimatedMenu";

const MaterialSidebar = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [data, setData] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const materialHeading = fetch(`${VITE_API_URL}/api/v1/instructor/materials-heading`);
    materialHeading
      .then((value) => {
        return value.json();
      })
      .then((response) => {
        return setData(response);
      })
      .catch((error) => {
        return setData(error);
      });
  }, []);

  const handleClick = (_id) => {
    dispatch(setMaterialHeading(_id));
  };

  // Use custom hooks for toggle hamburger
  const {
    isOpen: isHamburgerOpen,
    openMenu: openHamburger,
    closeMenu: closeHamburger,
    menuRef: hamburgerRef,
  } = useAnimatedMenu("x", -80, "x", 0, "x", 0, "x", -80);

  return (
    <div className="relative ">
      <div className="absolute top-0 block sm:hidden shadow w-5 h-[22px] flex-center drop-shadow z-10 ">
        <ul className="mx-auto cursor-pointer" onClick={openHamburger}>
          <li className="rounded-lg h-1 w-4 mx-auto my-[1px] bg-gray-500 cursor-pointer"></li>
          <li className="rounded-lg h-1 w-4 mx-auto my-[1px] bg-gray-500 cursor-pointer"></li>
          <li className="rounded-lg h-1 w-4 mx-auto my-[1px] bg-gray-500 cursor-pointer"></li>
        </ul>
      </div>
      {isHamburgerOpen && (
        <div
          className="materialSidebar block sm:hidden w-48 top-1 absolute left-0 sm:relative sm:top-0 h-auto px-5 py-6 md:w-44 lg:w-64 md:h-full z-10 -translate-x-20 sm:translate-x-0 bg-white drop-shadow sm:drop-shadow-none"
          ref={hamburgerRef}
        >
          {/* <div className="w-full flex justify-between items-center relative"> */}
          <h1
            className="text-xl font-bold py-2 ml-3"
            style={{ color: "#464646" }}
          >
            Materials
          </h1>
          <div
            className="closeButton cursor-pointer left-40 top-9 flex items-center justify-center "
            onClick={closeHamburger}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width={18}
              height={18}
              fill="gray"
              className="transition-all hover:fill-white"
            >
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
            </svg>
          </div>
          {/* </div> */}
          <ul className="ordered_list mt-5 ">
            <Link to="/materials">
              <li
                className={`my-2 ordered_list !bg-transparent border flex items-center mb-3 hover:bg-white ${
                  location.pathname.endsWith("/materials")
                    ? "active-ordered_list"
                    : ""
                }`}
                onClick={() => handleClick(null)}
              >
                <input
                  type="checkbox"
                  checked={location.pathname.endsWith("/materials")}
                  className="w-4 h-4 cursor-default"
                />
                <span className="ml-3">All</span>
              </li>
            </Link>

            {data != null
              ? data.map(({ _id, name }) => (
                  <Link key={_id} to={`/materials/${_id}`}>
                    <li
                      className={`my-2 ordered_list !bg-transparent border flex items-center mb-3 ${
                        location.pathname.includes(_id)
                          ? "active-ordered_list"
                          : ""
                      }`}
                      onClick={() => handleClick(_id)}
                    >
                      <input
                        type="checkbox"
                        checked={location.pathname.endsWith(_id)}
                        className="w-4 h-4 cursor-default"
                        readOnly={true}
                      />
                      <span className="ml-3">{name}</span>
                    </li>
                  </Link>
                ))
              : "Nothing to show here."}
          </ul>
        </div>
      )}
      <div className="hidden sm:block w-48 top-1 absolute left-0 sm:relative sm:top-0 h-auto px-5 py-6 md:w-44 lg:w-64 md:h-full z-10 -translate-x-20 sm:translate-x-0 bg-white drop-shadow sm:drop-shadow-none">
        <h1
          className="text-xl font-bold py-2 ml-3"
          style={{ color: "#464646" }}
        >
          Materials
        </h1>

        <ul className="ordered_list mt-5 ">
          <Link to="/materials">
            <li
              className={`my-2 ordered_list !bg-transparent border flex items-center mb-3 hover:bg-white ${
                location.pathname.endsWith("/materials")
                  ? "active-ordered_list"
                  : ""
              }`}
              onClick={() => handleClick(null)}
            >
              <input
                type="checkbox"
                checked={location.pathname.endsWith("/materials")}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="ml-3">All</span>
            </li>
          </Link>

          {data != null
            ? data.map(({ _id, name }) => (
                <Link key={_id} to={`/materials/${_id}`}>
                  <li
                    className={`my-2 ordered_list !bg-transparent border flex items-center mb-3 ${
                      location.pathname.includes(_id)
                        ? "active-ordered_list"
                        : ""
                    }`}
                    onClick={() => handleClick(_id)}
                  >
                    <input
                      type="checkbox"
                      checked={location.pathname.endsWith(_id)}
                      className="w-4 h-4 cursor-default"
                      readOnly={true}
                    />
                    <span className="ml-3">{name}</span>
                  </li>
                </Link>
              ))
            : "Nothing to show here."}
        </ul>
      </div>
    </div>
  );
};

export default MaterialSidebar;
