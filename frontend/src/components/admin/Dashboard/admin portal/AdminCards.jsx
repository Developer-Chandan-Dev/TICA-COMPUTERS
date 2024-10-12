import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useFetchData from "../../../../hooks/utils/useFetchData";

const AdminCards = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  useGSAP(() => {
    gsap.to(".card", {
      opacity: 1,
      x: 0,
      stagger: 0.5,
    });
  }, []);

  const { data } = useFetchData(`${VITE_API_URL}/api/v1/admin/panel/card-data`);

  return (
    <>
      <Link
        to="/dashboard/admin/instructor"
        className="mx-auto w-60 text-white h-48 rounded-md shadow-md shadow-gray-300 cursor-pointer card opacity-0 translate-x-20 sm:mx-0"
        style={{ background: "#1b306bdb", boxShadow: "0 10px 25px #1b306bdb" }}
      >
        <div className="flex mt-3 w-48 mx-auto items-center justify-between">
          <h1>Instructors</h1>
          <div className="w-16 h-16 rounded-full bg-transparent flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              className="bi bi-book-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
            </svg>
          </div>
        </div>

        <div className="w-48 mx-auto mt-10 flex justify-between items-center">
          <div className="text-center">
            <p className="text-3xl">
              {data !== null ? data.instructorLen : "0"}
            </p>
            {/* <p className="text-xs ml-1 mt-2"></p> */}
          </div>
          <div className="mr-3">
            <span className="text-xs mr-2">Now Working</span>
          </div>
        </div>
      </Link>
      <Link
        to="/dashboard/admin/staff"
        className="mx-auto w-60 h-48 rounded-md text-white shadow-md shadow-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 card opacity-0 translate-x-20 sm:mx-0"
        style={{ background: "#25bbc3", boxShadow: "0 10px 25px #25bbc3" }}
      >
        <div className="flex mt-3 w-48 mx-auto items-center justify-between">
          <h1>Staffs</h1>
          <div className="w-16 h-16 rounded-full bg-transparent flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="white"
              className="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
          </div>
        </div>

        <div className="w-48 mx-auto mt-10 flex justify-between items-center">
          <div className="text-center">
            <p className="text-3xl">{data !== null ? data.staffLen : "0"}</p>
            <p className="text-xs ml-1 mt-2"></p>
          </div>
          <div className="mr-3">
            <span className="text-xs mr-2">Now Working</span>
          </div>
        </div>
      </Link>
      <Link
        to="/dashboard/instructor/features/students"
        className="mx-auto w-60 text-white h-48 rounded-md shadow-md shadow-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 card opacity-0 translate-x-20 sm:mx-0"
        style={{ background: "#ff9800", boxShadow: "0 10px 25px #ff9800" }}
      >
        <div className="flex mt-3 w-48 mx-auto items-center justify-between">
          <h1>Students</h1>
          <div className="w-16 h-16 rounded-full bg-transparent flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="white"
              className="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
          </div>
        </div>

        <div className="w-48 mx-auto mt-6 flex justify-between items-center">
          <div className="text-center">
            <p className="text-3xl">
              {data !== null ? data.currentMonthAdmission : "0"}
            </p>
            <p className="text-xs ml-1 mt-2">This month</p>
          </div>
          <div className="mr-3 text-center">
            <p className="text-xs mr-2 my-1">Total</p>
            <p className="text-base mr-2 ">
              {data !== null ? data.admissionLen : "0"}
            </p>
          </div>
        </div>
      </Link>
      <Link
        to="/dashboard/instructor/features/courses"
        className="mx-auto w-60 h-48 text-white rounded-md shadow-md shadow-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 card opacity-0 translate-x-20 sm:mx-0"
        style={{ background: "#e13e5d", boxShadow: "0 10px 25px #e13e5d" }}
      >
        <div className="flex mt-3 w-48 mx-auto items-center justify-between">
          <h1>Courses</h1>
          <div className="w-16 h-16 rounded-full g-transparent flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              className="bi bi-book-half"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
            </svg>
          </div>
        </div>

        <div className="w-48 mx-auto mt-6 flex justify-between items-center">
          <div className="text-center">
            <p className="text-3xl">{data !== null ? data.courseLen : "0"}</p>
            <p className="text-xs ml-1 mt-2">Now Available</p>
          </div>
          <div className="mr-3 text-center">
            <p className="text-xs mt-2">Total</p>
            <p className=" text-lg">{data !== null ? data.courseLen : "0"}</p>
          </div>
        </div>
      </Link>
      <Link
        to="/dashboard/admin/users"
        className="mx-auto w-60 h-48 text-white rounded-md shadow-md shadow-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 card opacity-0 translate-x-20 sm:mx-0"
        style={{ background: "#e13e5d", boxShadow: "0 10px 25px #e13e5d" }}
      >
        <div className="flex mt-3 w-48 mx-auto items-center justify-between">
          <h1>Users</h1>
          <div className="w-16 h-16 rounded-full g-transparent flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="white"
              className="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
          </div>
        </div>

        <div className="w-48 mx-auto mt-6 flex justify-between items-center">
          <div className="text-center">
            <p className="text-3xl">
              {data !== null ? data.currentMonthUsers : "0"}
            </p>
            <p className="text-xs ml-1 mt-2">This month</p>
          </div>
          <div className="mr-3 text-center">
            <p className="text-xs mr-2 my-1">Total</p>
            <p className="text-lg mr-2 ">
              {data !== null ? data.userLen : "0"}
            </p>
          </div>
        </div>
      </Link>
      <Link
        to="/dashboard/admin/contact"
        className="mx-auto w-60 h-48 text-white rounded-md shadow-md shadow-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 card opacity-0 translate-x-20 sm:mx-0"
        style={{
          background: "linear-gradient(#ae3d9d, #5151cd)",
          boxShadow: "0 10px 25px #ae3d9d",
        }}
      >
        <div className="flex mt-3 w-48 mx-auto items-center justify-between">
          <h1>Contacts</h1>
          <div className="w-16 h-16 rounded-full g-transparent flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="40"
              height="40"
              fill="white"
            >
              <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
            </svg>
          </div>
        </div>

        <div className="w-48 mx-auto mt-6 flex justify-between items-center">
          <div className="text-center">
            <p className="text-3xl">
              {data !== null ? data.currentMonthContacts : "0"}
            </p>
            <p className="text-xs ml-1 mt-2">This month</p>
          </div>
          <div className="mr-3 text-center">
            <p className="text-xs mr-2 my-1">Total</p>
            <p className="text-lg mr-2 ">
              {data !== null ? data.contactLen : "0"}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AdminCards;
