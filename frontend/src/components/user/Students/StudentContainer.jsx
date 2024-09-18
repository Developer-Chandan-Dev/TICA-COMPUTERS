import { useState } from "react";
import Student from "./Student";
import { Link } from "react-router-dom";

const StudentContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <section className="w-full sm:w-11/12 md:w-4/5 mx-auto h-auto py-4">
        <div
          className="w-full shadow-xl rounded shadow-slate-300 py-1"
          style={{ background: "#fefdfe" }}
        >
          <div className="w-full mx-auto pt-3 pb-2">
            <div className="w-full my-2 flex items-center justify-between flex-wrap">
              <div className="flex items-center flex-start flex-wrap mb-2">
                <div className="py-2 px-3 w-80 ml-4 rounded-full border text-sm bg-white shadow-md shadow-gray-300 flex items-center mb-2 searchBox">
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
                    className="bg-transparent w-fill-available outline-none"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <div className="py-2 px-4 ml-4 cursor-pointer rounded-full border text-sm bg-white shadow-md shadow-gray-300 flex items-center">
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
                  <span className="mx-2 opacity-50">Filter</span>
                </div>
              </div>
              <div className="flex-items-center ml-4">
                <Link to="/courses/register">
                  <button
                    className="py-2 px-5 mr-5 text-xs rounded-full border shadow hover:shadow-md hover:shadow-gray-300 "
                    style={{ color: "#958ef3" }}
                  >
                    <b>+ ADD NEW STUDENT</b>
                  </button>
                </Link>
              </div>
            </div>

            <div
              className=" px-4 w-full mx-auto overflow-auto relative"
              style={{ height: "470px" }}
            >
              <table className="mx-auto my-1 h-auto text-sm relative w-[600px] sm:w-[700px] md:w-[800px] lg:w-[900px]">
                <thead className="relative">
                  <tr className="w-full h-14 bg-white rounded-sm overflow-hidden border-b sticky top-0">
                    <th className="px-4 text-left opacity-40">
                      Name of Student
                    </th>
                    <th className="px-4 text-left opacity-40">Course Name</th>
                    <th className="px-5 text-left opacity-40">
                      Admission Date
                    </th>
                    <th className="px-5 text-left opacity-60 flex pt-4">
                      <span className="mr-3"> Status</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className=" opacity-60"
                      >
                        <path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" />
                      </svg>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <Student
                    currentPage={currentPage}
                    setTotalPages={setTotalPages}
                    searchTerm={searchTerm}
                  />
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-center ">
              <div className="flex items-center gap-x-2 mt-2 text-sm">
                <button
                  className={` ${
                    currentPage === 1 ? "disable_btn" : "enable_btn"
                  }`}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous{" "}
                </button>
                <div className="w-40 flex-center">
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                </div>
                <button
                  className={`${
                    currentPage === totalPages ? "disable_btn" : "enable_btn"
                  }`}
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
