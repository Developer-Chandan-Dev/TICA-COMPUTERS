import { Link } from "react-router-dom";
import User from "./User";
import { useState } from "react";

const PresentUsersContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page whenever search term changes
  };

  return (
    <>
      <div className="w-full mx-auto pt-3 pb-3">
        <h1 className=" text-[20px] font-medium text-center px-2 py-1 after:w-44 after:mx-auto after:h-1 after:rounded-lg after:mt-1 after:bg-red-500 after:block">
          Present Users
        </h1>
        <div className="w-full my-2 flex items-center justify-between flex-wrap gap-x-2 gap-y-3">
          <div className="flex items-center flex-wrap gap-x-1 gap-y-3">
            <div className="py-2 px-3 w-80 ml-4 rounded-full border text-sm bg-white shadow-md shadow-gray-300 flex items-center">
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
                placeholder="Search for users.."
                value={searchTerm}
                onChange={handleSearch}
                className="bg-transparent w-fill-available outline-none"
              />
            </div>
            <div className="py-2 px-3 sm:px-4 ml-2 sm:ml-4 cursor-pointer rounded-full border text-sm bg-white shadow-md shadow-gray-300 flex items-center">
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
              <span className="mx-2 opacity-50 hidden sm:block">Filter</span>
            </div>
          </div>
          <div className="bg-white flex-items-center ml-4">
            <Link to="/dashboard/admin/users/chart">
              {" "}
              <button
                className="py-2 px-5 mr-5 text-xs rounded-full border shadow hover:shadow-md hover:shadow-gray-300 "
                style={{ color: "#958ef3" }}
              >
                <b>EXPLORE IN CHART</b>
              </button>
            </Link>
          </div>
        </div>

        <div
          className=" px-4 w-full mx-auto overflow-auto relative bg-white"
          style={{ height: "470px" }}
        >
          <table
            className=" w-full mx-auto h-auto text-sm relative text-left text-gray-500"
            style={{ width: "1000px" }}
          >
            <thead className="relative">
              <tr className="w-full h-14 bg-white rounded-sm overflow-hidden border-b sticky top-0 z-10">
                <th className="px-2 text-left opacity-40 font-bold">
                  <span>S. No.</span>
                </th>
                <th className="px-2 text-left opacity-40 font-bold">
                  <span>Full Name</span>
                </th>
                <th className="p2-4 text-left pt-4 opacity-40 flex items-center gap-x-1 font-bold">
                  <span>User Name</span>{" "}
                </th>
                <th className="px-5 text-left opacity-40 font-bold">Email</th>
                <th className="px-5 text-left opacity-40 font-bold">
                  Account creation date
                </th>
                <th className="px-5 text-left opacity-40 font-bold">Options</th>
              </tr>
            </thead>
            <tbody>
              <User
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
              className={` ${currentPage === 1 ? "disable_btn" : "enable_btn"}`}
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
    </>
  );
};

export default PresentUsersContainer;
