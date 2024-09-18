import { Link } from "react-router-dom";
import { Course } from "../index";
import { useState } from "react";

const CoursesContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <section className="h-auto pb-5">
        <div className="w-full shadow-xl rounded py-1 shadow-gray-400 bg-white">
          <div className="w-full my-2 flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-start flex-wrap">
              <div className="py-2 px-3 w-80 ml-4 mb-2 rounded-full border text-sm bg-white shadow-md shadow-gray-300 flex items-center searchBox">
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
                  placeholder="Search for courses.."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent w-fill-available outline-none"
                />
              </div>
              <div className="py-2 px-4 ml-5 mb-2 cursor-pointer rounded-full border text-sm bg-white shadow-md shadow-gray-300 flex items-center">
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
              <Link to="/dashboard/instructor/features/courses/add">
                {" "}
                <button
                  className="py-2 px-5 mr-5 text-xs rounded-full border shadow hover:shadow-md hover:shadow-gray-300 "
                  style={{ color: "#958ef3" }}
                >
                  <b>+ ADD NEW COURSE</b>
                </button>
              </Link>
            </div>
          </div>

          <div
            className="w-full flex items-start flex-wrap p-5 gap-5 pb-20 sm:pb-2 rounded-lg overflow-auto"
            style={{ height: "68vh" }}
          >
            <Course searchTerm={searchTerm} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesContainer;
