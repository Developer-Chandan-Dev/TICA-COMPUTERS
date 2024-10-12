import { Link } from "react-router-dom";
import { indianDate } from "../../indianDate";
import PropTypes from "prop-types";
import { useDashboardAuthContext } from "../../../../../context/DashboardAuthContext";

const RegisterCandidateInfo = ({
  id,
  candidateName,
  courseName,
  fathername,
  mothername,
  dob,
  gender,
  registrationDate,
  address,
  mobile,
  isChecked,
  onCheckboxChange,
  onDelete,
  setData,
  data,
  setChecked,
  checked,
}) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const { authDashboardUser } = useDashboardAuthContext();

  const handleChange = () => {
    if (!isChecked) {
      onCheckboxChange(id);
    }
  };

  return (
    <>
      <tr className="py-2 h-14 sticky top-0 border-b cursor-pointer hover:bg-slate-50">
        {/* <Link to="/dashboard/instructor/students/details"> */}
        <td className="h-7 pl-5 pr-1 text-gray-700 font-semibold">
          <input
            type="checkbox"
            className={`w-4 h-4 ${
              isChecked ? "cursor-default" : "cursor-pointer"
            }`}
            checked={isChecked}
            onChange={
              authDashboardUser.role === "admin" ||
              authDashboardUser.role === "instructor"
                ? handleChange
                : ""
            }
          />
          {/* <button>explore</button> */}
        </td>
        <td className="h-7 pl-5 pr-1 text-gray-700 font-semibold">
          {candidateName}
        </td>
        <td className="h-7 pl-6 pr-1 text-gray-500 font-medium">
          {courseName}
        </td>
        <td className="h-7 pl-6 pr-1 text-gray-500 font-medium">
          {indianDate(registrationDate)}
        </td>
        <td className="h-7 pl-5 pr-1 text-gray-500 font-medium">
          {fathername}
        </td>
        <td className="h-7 pl-5 pr-1 text-gray-500 font-medium">
          {mothername}
        </td>
        <td className="h-7 pl-5 pr-1 text-gray-500 font-medium">
          {indianDate(dob)}
        </td>
        <td className="h-7 pl-5 pr-1 text-gray-500 font-medium">{gender}</td>
        <td className="h-7 pl-5 pr-1 text-gray-500 font-medium">
          {address.length > 20 ? address.slice(0, 20) + "..." : address}
        </td>
        <td className="h-7 pl-5 pr-1 text-gray-500 font-medium">{mobile}</td>
        <td className="h-7 pl-5 pr-1 text-gray-500 font-medium">
          {isChecked ? (
            <span className="text-green-600">Cleared</span>
          ) : (
            <span className="text-red-600">Pending</span>
          )}
        </td>

        <td className="h-7 text-gray-500 ">
          <div className="flex items-center justify-around h-7 gap-x-2 px-2">
            <Link
              to={`/dashboard/instructor/features/registered-students/details/${id}`}
            >
              <button className="text-sm px-3 py-[6px] rounded border text-gray-700 drop-shadow transition-all hover:bg-white">
                Details
              </button>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3 cursor-pointer opacity-45 hover:opacity-100"
              viewBox="0 0 16 16"
              title="Delete"
              onClick={() =>
                authDashboardUser.role === "admin" ||
                authDashboardUser.role === "instructor"
                  ? onDelete(
                      id,
                      `${VITE_API_URL}/api/v1/instructor/registered-candidates/`,
                      setData,
                      data,
                      setChecked,
                      checked,
                      "Candidate"
                    )
                  : ""
              }
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
            <Link
              to={
                authDashboardUser.role === "admin" ||
                authDashboardUser.role === "instructor"
                  ? `/dashboard/instructor/features/registered-students/edit/${id}`
                  : ""
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="16"
                height="16"
                className="cursor-pointer opacity-45 hover:opacity-100"
                title="Edit"
                fill="currentColor"
              >
                <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z" />
              </svg>
            </Link>
          </div>
        </td>
        {/* </Link> */}
      </tr>
    </>
  );
};

export default RegisterCandidateInfo;

RegisterCandidateInfo.propTypes = {
  id: PropTypes.string.isRequired,
  candidateName: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  fathername: PropTypes.string.isRequired,
  mothername: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  registrationDate: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func,
  onDelete: PropTypes.func,
  setData: PropTypes.func,
  data: PropTypes.array,
  setChecked: PropTypes.func,
  checked: PropTypes.bool,
};
