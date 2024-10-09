/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import useAnimatedMenu from "../../../../../hooks/user/useAnimatedMenu";

const CourseInfo = ({
  id,
  courseFullName,
  duration,
  mainTopics,
  courseShortName,
  showOnHome,
  coursePic,
  isChecked,
  onCheckBoxChange,
  onDelete,
}) => {
  const [showOptions, setShowOptions] = useState("hidden");

  const {
    isOpen: isOptionsOpen,
    openMenu: openOptions,
    closeMenu: closeOptions,
    menuRef: optionsRef,
  } = useAnimatedMenu();

  const handleOptions = () => {
    if (showOptions === "hidden") {
      setShowOptions("flex");
    } else {
      setShowOptions("hidden");
    }
  };

  const handleChange = () => {
    if (isChecked) {
      onCheckBoxChange(id, false);
    } else if (!isChecked) {
      onCheckBoxChange(id, true);
    }
  };

  return (
    <>
      <div
        className="course-card w-5/6 block sm:w-72 rounded h-auto sm:h-auto mx-auto sm:mx-0 overflow-hidden shadow-sm shadow-gray-400 text-sm relative transition-all hover:shadow-md hover:shadow-gray-300 cursor-default"
        style={{ backgroundColor: "#0D4561" }}
      >
        <div className="absolute left-2 top-2 w-8 h-6 flex-center">
          <input
            type="checkbox"
            name="check"
            id="check"
            className="w-5 h-5 cursor-pointer"
            checked={isChecked}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <ul
            className="absolute w-6 h-6 cursor-pointer rounded-full right-3 top-3 flex items-center justify-center flex-col hover:shadow-white"
            id="handleOptions"
            onClick={handleOptions}
          >
            <li className="w-[3px] h-[3px] rounded-full bg-white transition-all hover:drop-shadow"></li>
            <li className="w-[3px] h-[3px] rounded-full bg-white transition-all hover:drop-shadow my-[2px]"></li>
            <li className="w-[3px] h-[3px] rounded-full bg-white transition-all hover:drop-shadow"></li>
          </ul>
          <div
            className={`w-8 h-14 bg-white shadow-md shadow-white rounded ${showOptions} absolute right-10 top-3 items-center justify-center flex-col gap-y-3`}
            id="options"
          >
            <Link
              to={`/dashboard/instructor/features/courses/update/${courseShortName}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="14"
                height="14"
                fill="#0D4561"
                className="cursor-pointer opacity-60 transition-all hover:opacity-100"
              >
                <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z" />
              </svg>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="#0D4561"
              onClick={() => onDelete(id)}
              className="bi bi-trash3 cursor-pointer opacity-60 transition-all hover:opacity-100"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
          </div>
        </div>
        <div className=" w-28 mx-3 sm:mx-0 sm:w-full sm:h-36 flex  py-2 items-center justify-center">
          <div className=" w-24 h-24 bg-blue-400 rounded-full shadow-md shadow-gray-400 overflow-hidden object-fill">
            <img src={coursePic} alt="course Pic" />
          </div>
        </div>
        <div className="card-buttomPart w-full sm:w-full h-auto flex sm:block">
          <div
            className=" w-auto h-auto sm:h-32 pb-3 relative flex items-center justify-start sm:justify-center"
            style={{ background: "#ECF8FE" }}
          >
            <div>
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
              <h2 className="sm:text-center pt-8 px-4 sm:pt-8 pb-2 text-base font-medium">
                {courseFullName}
              </h2>
              <div className="flex items-center justify-center flex-wrap px-3 mt-1 gap-2">
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
          <div
            className="buttonPart pt-3 pb-1 sm:pt-1 sm:w-full h-auto inline-block sm:flex sm:bg-yellow-300 items-center justify-around px-1 gap-x-1"
            style={{ background: "#ECF8FE" }}
          >
            <button className="px-2 py-1 mb-1 mr-1 sm:mr-0 text-xs bg-cyan-600 text-white shadow-md shadow-slate-400 hover:shadow-slate-500 rounded  sm:bg-none cursor-pointer">
              {duration}
            </button>
            <Link to={`/courses/register/${courseShortName}`}>
              <button className="px-2 py-1 mb-1 mr-1 sm:mr-0 text-xs bg-cyan-600 text-white shadow-md shadow-slate-400 hover:shadow-slate-500 rounded  sm:bg-none cursor-pointer">
                Register Now
              </button>
            </Link>
            <Link to={`/courses/details/${courseShortName}`}>
              <button className="px-2 py-1 text-xs mb-1 bg-cyan-600 text-white shadow-md shadow-slate-400 hover:shadow-slate-500 rounded  sm:bg-none cursor-pointer">
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
