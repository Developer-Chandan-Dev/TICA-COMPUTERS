/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CourseInstructor = ({ instructor }) => {
  return (
    <div className="w-full sm:w-11/12 mx-auto h-auto px-3 py-4 md:p-4 text-gray-600 text-sm">
      {/* Instructor */}
      <div className="w-11/12 mx-auto sm:mx-0 sm:w-full mt-4">
        <h1 className="text-xl font-semibold">Instructor</h1>
        <Link to={`/courses/instructor/details/${instructor.instructorId}`}>
          {/* <Link to={`/courses/instructor/details/`}> */}
          <h1 className="text-xl font-semibold text-blue-400 underline">
            {instructor.instructorName}
          </h1>
        </Link>
        <div>
          <div className="w-40 my-3 h-40 rounded-full border overflow-hidden">
            <img src={instructor.instructorPic} alt="instructorPic" />
          </div>
          <p>{instructor.instructorBio}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
