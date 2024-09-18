import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import useFetchData from "../../../hooks/utils/useFetchData";

const Card = () => {
  useGSAP(() => {
    gsap.to(".card", {
      opacity: 1,
      y: 0,
      stagger: 0.5,
    });
  }, []);

  const { data} = useFetchData("/api/v1/dashboard/card-data");
  

  return (
    <>
      <Link
        to="/dashboard/instructor/features/registered-students"
        className="mx-auto w-60 text-white h-48 rounded-md shadow-md shadow-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 card opacity-0 translate-y-20 sm:mx-0 drop-shadow-md hover:translate-y-10"
        style={{
          background: "linear-gradient(#ae3d9d, #5151cd)",
          boxShadow: "0 10px 25px #ae3d9d",
        }}
      >
        <div className="flex mt-3 w-48 mx-auto items-center justify-between">
          <h1>Registrations</h1>
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

        <div className="w-48 mx-auto mt-6 flex justify-between items-center text-center">
          <div>
            <p className=" text-3xl">
              {data !== null ? data.currentMonthRegister : "0"}
            </p>
            <p className="text-xs mt-2">This month</p>
          </div>
          <div className="mr-3">
            <p className="text-xs mt-2">Total</p>
            <p className="text-lg mt-2">
              {data !== null ? data.registerLength : "0"}
            </p>
          </div>
        </div>
      </Link>
      <Link
        to="/dashboard/instructor/features/students"
        className="mx-auto w-60 text-white h-48 rounded-md shadow-md shadow-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 card opacity-0 translate-y-20 sm:mx-0 drop-shadow-md"
        style={{ background: "#8883f3", boxShadow: "0 10px 25px #8883f3" }}
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

        <div className="w-48 mx-auto mt-6 flex justify-between items-center text-center">
          <div>
            <p className="text-3xl">
              {data !== null ? data.currentMonthAdmission : "0"}
            </p>
            <p className="text-xs mt-2">This month</p>
          </div>
          <div className="mr-3">
            <p className="text-xs mt-2">Total</p>
            <p className="text-lg">
              {data !== null ? data.admissionLength : "0"}
            </p>
          </div>
        </div>
      </Link>
      <Link
        to="/dashboard/instructor/features/courses"
        className="w-60 mx-auto h-48 rounded-md text-white shadow-md shadow-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 card opacity-0 translate-y-20 sm:mx-0 drop-shadow-md"
        style={{ background: "#25bbc3", boxShadow: "0 10px 25px #25bbc3" }}
      >
        <div className="flex mt-3 w-48 mx-auto items-center justify-between">
          <h1>Courses</h1>
          <div
            className="w-16 h-16 rounded-full bg-transparent flex justify-center items-center"
            style={{ color: "#8883f3" }}
          >
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

        <div className="w-48 mx-auto mt-6 flex justify-between items-center text-center">
          <div>
            <p className=" text-3xl">
              {data !== null ? data.courseLength : "0"}
            </p>
            <p className="text-xs mt-2">Now Availble</p>
          </div>
          <div className="mr-3">
            <p className="text-xs mt-2">Total</p>
            <p className=" text-lg">
              {data !== null ? data.courseLength : "0"}
            </p>
          </div>
        </div>
      </Link>
      <Link
        to="/dashboard/instructor/features/materials"
        className="w-60 mx-auto text-white h-48 rounded-md shadow-md shadow-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 card opacity-0 translate-y-20  sm:mx-0 drop-shadow-xl"
        style={{ background: "#ff9800", boxShadow: "0 10px 25px #ff9800" }}
      >
        <div className="flex mt-3 w-48 mx-auto items-center justify-between">
          <h1>Materials</h1>
          <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
            <span className=" text-lg " style={{ color: "#8883f3" }}>
              80%
            </span>
          </div>
        </div>

        <div className="w-48 mx-auto mt-6 flex justify-between items-center text-center">
          <div>
            <p className=" text-3xl">
              {data !== null ? data.currentMonthMaterial : "0"}
            </p>
            <p className="text-xs mt-2">This month</p>
          </div>
          <div className="mr-3">
            <p className="text-xs mr-2">Total</p>
            <p className=" text-lg">
              {data !== null ? data.materialsLength : "0"}
            </p>
          </div>
        </div>
      </Link>
      <Link
        to="/dashboard/instructor/features/enquiries"
        className="w-60 mx-auto h-48 text-white rounded-md shadow-md shadow-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 card opacity-0 translate-y-20 sm:mx-0 drop-shadow-md"
        style={{ background: "#e13e5d", boxShadow: "0 10px 25px #e13e5d" }}
      >
        <div className="flex mt-3 w-48 mx-auto items-center justify-between">
          <h1>Enquiries</h1>
          <div className="w-16 h-16 rounded-full bg-yellow-100 flex justify-center items-center">
            <span className="text-lg" style={{ color: "#8883f3" }}>
              80%
            </span>
          </div>
        </div>

        <div className="w-48 mx-auto mt-6 flex justify-between items-center text-center">
          <div>
            <p className="text-3xl">
              {data !== null ? data.currentMonthEnquiry : "0"}
            </p>
            <p className="text-xs mt-2">This month</p>
          </div>
          <div className="mr-3">
            <p className="text-xs mt-2">Total</p>
            <p className="text-lg">
              {data !== null ? data.enquiryLength : "0"}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
