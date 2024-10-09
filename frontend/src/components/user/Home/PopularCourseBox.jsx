/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PopularCourseBox = ({
  courseFullName,
  courseShortName,
  category,
  duration,
  mainTopics,
  coursePic
}) => {
  return (
    <div
      className="w-72 m-2 rounded h-auto mx-auto mb-4 overflow-hidden shadow-sm shadow-gray-400 transition-all hover:shadow-xl hover:shadow-gray-300 cursor-default hover:-translate-y-1"
      style={{ backgroundColor: "#0D4561" }}
    >
      <div className="w-full h-36 flex items-center justify-center relative">
        <div className="absolute right-2 top-2 w-20 h-5 bg-yellow-50 drop-shadow-sm flex-center">
          <span className="text-xs font-medium text-[#7A7A7A]">
            #{category}
          </span>{" "}
        </div>
        <div className=" w-24 h-24 bg-blue-400 rounded-full shadow-md shadow-gray-400 overflow-hidden object-fill">
          <img src={coursePic} alt="coursePic" className="w-full h-full" />
        </div>
      </div>
      <div
        className=" w-full h-auto relative"
        style={{ background: "#ECF8FE" }}
      >
        <div
          className="w-12 h-12 bg-white rounded-full absolute -top-6 flex items-center justify-center shadow-sm shadow-slate-400"
          style={{ left: "120px" }}
        >
          <Link
             to={`/courses/register/${courseShortName}`}
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

        <h2 className="text-center pt-8 pb-2 text-base font-semibold text-gray-700">
          {courseFullName}
        </h2>
        <div className="flex items-center justify-center w-full flex-wrap px-2 pt-2 pb-4 gap-x-2 gap-y-1 mx-auto">
          {mainTopics != null
            ? mainTopics.map((topic, index) => (
                <button
                  key={index}
                  className="p-1 rounded bg-gray-200 text-xs text-center "
                >
                  {topic}
                </button>
              ))
            : "Computer Fundamental"}
        </div>
      </div>
      <div className=" w-full h-12 flex items-center justify-around bg-yellow-300">
        <span className="text-sm cursor-pointer">{duration}</span>
        <Link  to={`/courses/register/${courseShortName}`}>
          <span className="text-sm cursor-pointer">Register Now</span>
        </Link>
        <Link to={`/courses/details/${courseShortName}`}>
          <span className="text-sm cursor-pointer">Course Details</span>
        </Link>
      </div>
    </div>
  );
};

export default PopularCourseBox;
