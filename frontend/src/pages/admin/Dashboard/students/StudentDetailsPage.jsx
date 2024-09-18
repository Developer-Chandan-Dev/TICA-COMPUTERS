/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { indianDate } from "../../../../components/admin/Dashboard/indianDate";

const StudentDetailsPage = () => {
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState(null);

  const { studentId } = useParams();
  useEffect(() => {
    const fetchstudentData = async () => {
      const response = await axios.get(`/api/v1/instructor/student/${studentId}`);

      const data = response.data;
      if (data.error) {
        return setError(data.error);
      } else {
        setStudentData(data);
      }
    };
    fetchstudentData();
  }, [studentId]);

  return (
    <>
      {studentData != null ? (
        <div className="mx-auto mt-7 text-sm">
          <div className="flex items-start mx-auto w-11/12 py-6 bg-white detailsBox">
            <Link to="/dashboard/instructor/features/students" className="ml-5">
              <button className="back-btn flex-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="16"
                  width="16"
                  className="opacity-80 cursor-pointer"
                  fill="currentColor"
                  title="Back"
                >
                  <path d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z" />
                </svg>
                <span>Go Back</span>
              </button>
            </Link>
            <div className=" w-auto mx-auto xl:w-96 h-96 imagePart ">
              <div className="w-44 h-44 rounded-full my-4 mx-auto overflow-hidden border">
                <img src={studentData.profilePic} alt="image" />
              </div>
              <div className="text-center px-10">
                <h1
                  className="text-xl py-2 font-semibold"
                  style={{ color: "#1b306b" }}
                >
                  {studentData.studentName}
                </h1>
                <p className="text-sm text-gray-600 py-1">
                  Registration no : 10
                </p>
                <p className="text-sm text-gray-600 px-4 font-medium w-80">
                  {studentData.courseName}
                </p>
              </div>
            </div>
            <div className=" md:w-1/2 h-auto px-6 py-4 rounded contentPart mx-auto flex items-center justify-center">
              <ul className="py-2">
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">Student Name</p>{" "}
                  <span className="font-normal">{studentData.studentName}</span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">Course Name</p>{" "}
                  <span className="font-normal">{studentData.courseName}</span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">Registration Date</p>{" "}
                  <span className="font-normal">
                    {indianDate(studentData.registrationDate)}
                  </span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">Admission Date</p>{" "}
                  <span className="font-normal">
                    {indianDate(studentData.admissionDate)}
                  </span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">Father's Name</p>{" "}
                  <span className="font-normal">{studentData.fathername}</span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">Mother's Name</p>{" "}
                  <span className="font-normal">{studentData.mothername}</span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">Date of Birth</p>{" "}
                  <span className="font-normal">
                    {indianDate(studentData.DOB)}
                  </span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">Gender</p>{" "}
                  <span className="font-normal">{studentData.gender}</span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">Address</p>{" "}
                  <span className="font-normal">{studentData.address}</span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">City</p>{" "}
                  <span className="font-normal">{studentData.city}</span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">State</p>{" "}
                  <span className="font-normal">{studentData.state}</span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">10th Role no.</p>{" "}
                  <span className="font-normal">123456789</span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">Mobile no</p>{" "}
                  <span className="font-normal">{studentData.mobile}</span>
                </li>
                <li className="py-1 flex items-center flex-wrap gap-x-5 gap-y-3">
                  <p className="font-semibold w-44">Addhar no</p>{" "}
                  <span className="font-normal">{studentData.aadharNo}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-96 flex-center p-5">
          <p className="text-3xl font-semibold text-gray-800 ml-10 mt-10">
            Loading...
          </p>
        </div>
      )}
      {error && <div>Error in Data fetching : {error}</div>}
    </>
  );
};

export default StudentDetailsPage;
