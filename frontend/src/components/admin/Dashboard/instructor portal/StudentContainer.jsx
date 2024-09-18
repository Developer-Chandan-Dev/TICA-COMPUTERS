/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { StudentInfo } from "./index";
import { Link } from "react-router-dom";
import Spinner from "../../../utility/Spinner";
import useHandleDeletewithSweetAlert from "../../../../hooks/admin/instructor portal/useHandleDeletewithSweetAlert";
import axios from "axios";
import PropTypes from "prop-types";

const StudentContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page whenever search term changes
  };

  const [students, setStudents] = useState([]);
  const [itemsPerPage] = useState(7); // Define items per page
  const [error, setError] = useState(null);

  // Fetch students data
  useEffect(() => {
    setLoading(true);
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`/api/v1/instructor/student/`, {
          params: {
            page: currentPage,
            limit: itemsPerPage,
            search: searchTerm, // Send search term as a query paramter
          },
        });
        const data = response.data;
        if (data.error) {
          setError(data.error);
          setLoading(false);
        } else {
          setStudents(data.items); // `items` is the paginated data
          setTotalPages(data.totalPages); // `totalPages` is the total number of pages)
          setLoading(false);
          setError(null);
        }
      } catch (error) {
        setError("Failed to load students, Please try again later", error);
        console.error("Error fetching student data:", error);
        setLoading(false);
      }
    };
    fetchStudents();
  }, [currentPage, itemsPerPage, searchTerm, setTotalPages]);

  const { handleDelete } = useHandleDeletewithSweetAlert();
  return (
    <>
      <section className="w-full h-auto py-4">
        <div
          className="w-full shadow-xl rounded shadow-slate-300 py-1"
          style={{ background: "#fefdfe" }}
        >
          <div className="w-full mx-auto pt-2 pb-2 ">
            <div className="w-full my-2 flex items-center justify-between flex-wrap gap-x-2 gap-y-3">
              <div className="flex items-center flex-wrap gap-x-1 gap-y-3">
                <div className="py-2 px-3 w-80 ml-4 searchBox rounded-full border text-sm bg-white shadow-md shadow-gray-300 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-search ml-1 mr-2 opacity-40"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for students.."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="bg-transparent w-fill-available outline-none"
                  />
                </div>

                {/* Please don't comment out this if you know how to add filter logic and then comment out and add filter logic */}
                {/* <div className="py-2 px-3 sm:px-4 ml-2 sm:ml-4 cursor-pointer rounded-full border text-sm bg-white shadow-md shadow-gray-300 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-funnel opacity-40"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                  </svg>
                  <span className="mx-2 opacity-50 hidden sm:block">
                    Filter
                  </span>
                </div> */}
              </div>
              <div className="bg-white flex-items-center ml-4">
                <Link to="/courses/register">
                  {" "}
                  <button
                    className="py-2 px-5 mr-5 text-xs rounded-full border shadow hover:shadow-md hover:shadow-gray-300 "
                    style={{ color: "#958ef3" }}
                  >
                    <b>+ ADD NEW CANDIDATE</b>
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="px-4 w-full mx-auto overflow-auto relative bg-white"
              style={{ height: "460px" }}
            >
              <table
                className=" w-full mx-auto h-auto text-sm relative text-left"
                style={{ width: "1800px" }}
              >
                <thead className="relative">
                  <tr className="w-full h-14 bg-white rounded-sm overflow-hidden border-b sticky top-0 z-10">
                    <th className="px-2 text-left opacity-40 font-bold">
                      <span>Student Name</span>
                    </th>
                    <th className="p2-4 text-left pt-4 opacity-40 flex items-center gap-x-1 font-bold">
                      <span>Course Name</span>{" "}
                    </th>
                    <th className="px-5 text-left opacity-40 font-bold">
                      Father's Name
                    </th>
                    <th className="px-5 text-left opacity-40 font-bold">
                      Mother's Name
                    </th>
                    <th className="px-5 text-left opacity-40 font-bold">
                      Admission Date
                    </th>
                    <th className="px-5 text-left opacity-40 font-bold">
                      Registration Date
                    </th>
                    <th className="px-5 text-left opacity-40 font-bold">
                      Date of Birth
                    </th>
                    <th className="px-5 text-left opacity-40 font-bold">
                      Gender
                    </th>
                    <th className="px-5 text-left opacity-40 font-bold">
                      Address
                    </th>
                    <th className="px-5 text-left opacity-40 font-bold">
                      Mobile No
                    </th>
                    <th className="px-5 text-left opacity-40 font-bold">
                      Aadhar No
                    </th>
                    <th className="px-5 text-left opacity-40 font-bold">
                      Hello
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading && <Spinner />}

                  {error && (
                    <div className="w-[200px] h-[350px] flex-center absolute">
                      <p className="text-red-500">{error}</p>
                    </div>
                  )}

                  {students != null ? (
                    students.map(
                      ({
                        _id,
                        studentName,
                        courseName,
                        fathername,
                        mothername,
                        DOB,
                        registrationDate,
                        gender,
                        address,
                        admissionDate,
                        mobile,
                        aadharNo,
                      }) => (
                        <StudentInfo
                          id={_id}
                          studentName={studentName}
                          courseName={courseName}
                          fatherName={fathername}
                          motherName={mothername}
                          dob={DOB}
                          admissionDate={admissionDate}
                          registrationDate={registrationDate}
                          gender={gender}
                          address={address}
                          mobileNo={mobile}
                          addharNo={aadharNo}
                          key={_id}
                          onDelete={handleDelete}
                          setData={setStudents}
                          data={students}
                        />
                      )
                    )
                  ) : (
                    <td>No student found</td>
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-center ">
              <div className="flex items-center gap-x-2 mt-2 text-sm">
                <button
                  className={` ${
                    currentPage === 1 ? "disable_btn" : "enable_btn"
                  } `}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous{" "}
                </button>
                <div className="w-auto sm:w-40 flex-center">
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                </div>
                <button
                  className={` ${
                    currentPage === totalPages ? "disable_btn" : "enable_btn"
                  } `}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentContainer;

StudentContainer.propTypes = {
  searchTerm: PropTypes.string,
  currentPage: PropTypes.number,
  setTotalPages: PropTypes.func,
  loading: PropTypes.bool,
  setLoading: PropTypes.bool,
};
