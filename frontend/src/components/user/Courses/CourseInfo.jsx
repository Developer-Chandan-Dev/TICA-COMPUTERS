/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CourseInfo = ({
  courseFullName,
  duration,
  mainTopics,
  courseShortName,
  category,
  coursePic,
}) => {
  useGSAP(() => {
    gsap.to(".courseBox", {
      opacity: 1,
      y: 1,
      stagger: 0.5,
    });
  }, []);
  console.log(coursePic);
  return (
    <>
      <div
        className="course-card courseBox w-5/6 block sm:w-72 rounded h-auto sm:h-auto mx-auto sm:mx-0 overflow-hidden shadow-sm shadow-gray-400 opacity-0 text-sm relative translate-y-20 transition-all hover:shadow-md hover:shadow-gray-300 cursor-default "
        style={{ backgroundColor: "#0D4561" }}
      >
        <div className="absolute right-2 top-2 w-20 h-5 bg-slate-200 drop-shadow-sm flex-center">
          <span className="text-xs font-medium text-[#7A7A7A]">
            #{category}
          </span>{" "}
        </div>
        <div className=" w-28 mx-3 sm:mx-0 sm:w-full sm:h-36 flex  py-2 items-center justify-center relative">
          <div className=" w-24 h-24 bg-blue-400 rounded-full shadow-md shadow-gray-400 overflow-hidden object-fill">
            <img src={coursePic} alt="coursePic" width="100%" height="100%" />
          </div>
        </div>
        <div className="card-buttomPart w-full sm:w-full h-auto flex sm:block bg-[#ECF8FE]">
          <div className=" w-auto h-auto sm:h-32 relative  pb-3 flex items-center justify-start sm:justify-center bg-[#ECF8FE]">
            <div className=" ">
              <div
                className="link-circle w-12 h-12 rounded-full absolute -top-6 flex items-center justify-center"
                style={{ background: "#ECF8FE" }}
              >
                <Link
                  to="/courses/register"
                  className="w-9 h-9 bg-cyan-300 rounded-full flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="22"
                    height="22"
                    fill="blue"
                    className="cursor-pointer"
                  >
                    <path d="M568.9 143.5l-150.9-138.2C404.8-6.773 384 3.039 384 21.84V96C241.2 97.63 128 126.1 128 260.6c0 54.3 35.2 108.1 74.08 136.2c12.14 8.781 29.42-2.238 24.94-16.46C186.7 252.2 256 224 384 223.1v74.2c0 18.82 20.84 28.59 34.02 16.51l150.9-138.2C578.4 167.8 578.4 152.2 568.9 143.5zM416 384c-17.67 0-32 14.33-32 32v31.1l-320-.0013V128h32c17.67 0 32-14.32 32-32S113.7 64 96 64H64C28.65 64 0 92.65 0 128v319.1c0 35.34 28.65 64 64 64l320-.0013c35.35 0 64-28.66 64-64V416C448 398.3 433.7 384 416 384z" />
                  </svg>
                </Link>
              </div>
              <h2 className="sm:text-center pt-8 pl-3 pr-1 sm:px-4 sm:pt-8 pb-2 text-base font-medium">
                {courseFullName}
              </h2>
              <div className="flex items-center justify-start sm:justify-center flex-wrap px-3 mt-1 gap-2">
                {mainTopics != null
                  ? mainTopics.map((topic, index) => (
                      <button
                        key={index}
                        className="p-1 rounded bg-gray-100 shadow-md shadow-cyan-400 text-gray-600 text-xs"
                      >
                        {topic}
                      </button>
                    ))
                  : "Computer Fundamental"}
              </div>
            </div>
          </div>
          <div className="buttonPart pt-8 h-auto sm:h-12 pb-1 sm:pt-1 sm:w-full inline-block sm:flex items-center justify-around px-1 gap-x-1 gap-y-2 bg-[#ecf8fe] sm:bg-[#ebf1f7]">
            <button
              className="px-2 py-1 mb-1 sm:mb-0 mr-1 sm:mr-0 text-xs transition-all text-white shadow-md shadow-slate-400 hover:shadow-slate-500 rounded  sm:bg-none cursor-pointer"
              style={{ background: "#82a9bc" }}
            >
              {duration}
            </button>
            <Link to="/courses/register">
              <button
                className="px-2 py-1 mb-1 sm:mb-0 mr-1 sm:mr-0 text-xs transition-all text-white shadow-md shadow-slate-400 hover:shadow-slate-500 rounded  sm:bg-none cursor-pointer"
                style={{ background: "#82a9bc" }}
              >
                Register Now
              </button>
            </Link>
            <Link to={`/courses/details/${courseShortName}`}>
              <button
                className="px-2 py-1 text-xs transition-all text-white shadow-md shadow-slate-400 hover:shadow-slate-500 rounded  sm:bg-none cursor-pointer"
                style={{ background: "#82a9bc" }}
              >
                Course Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseInfo;
