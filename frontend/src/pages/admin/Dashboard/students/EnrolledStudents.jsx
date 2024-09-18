import { StudentContainer } from "../../../../components/admin/Dashboard/instructor portal";
import MonthlyChartStudents from "./MonthlyChartStudents";
import WeeklyChartStudents from "./WeeklyChartStudents";

import "../Dashboard.css";

const EnrolledStudents = () => {
  return (
    <>
      <div className="w-11/12 mx-auto h-auto md:flex items-center justify-between gap-4 py-3">
        <div className="sm:w-96 md:w-72 lg:w-96 custom-chartBox rounded-md drop-shadow-sm text-gray-400 h-80 bg-white p-1 sm:p-2 mx-auto flex-center">
          <WeeklyChartStudents className="w-full" />
        </div>
        <div className="sm:w-fill-available h-80 bg-white p-1 sm:p-2 mx-auto mt-5 md:mt-0 flex-center">
          <MonthlyChartStudents className="w-full" />
        </div>
      </div>

      <div className=" w-11/12 mx-auto h-auto pb-10 sm:pb-0">
        <h1 className="my-3 text-lg">Students</h1>
        <StudentContainer />
      </div>
    </>
  );
};

export default EnrolledStudents;
