import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// /* eslint-disable react/prop-types */
const DetailsBox = ({
  id,
  username,
  role,
  fullname,
  // email,
  profilePic,
  data,
  setData,
  onDelete,
}) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  return (
    <>
      <div className="w-72 bg-white p-2 border rounded-md drop-shadow flex gap-x-3 transition-all cursor-pointer hover:drop-shadow-lg hover:-translate-y-1">
        <div className="w-20 h-20 border rounded-md overflow-hidden object-fill flex-center">
          {profilePic == "undefined" ||
          profilePic === null ||
          profilePic == "" ? (
            <h1 className="text-4xl font-bold text-slate-500">{username[0]}</h1>
          ) : (
            <img
              src={profilePic}
              alt="img"
              className="w-full h-full object-fill"
            />
          )}
        </div>
        <div className="flex justify-between w-44 gap-x-4">
          <div className="mt-1">
            <h1 className="text-gray-600 drop-shadow font-semibold">
              {fullname}
            </h1>
            <p className="text-gray-500 text-sm font-medium">{role}</p>
          </div>
          <div className="flex items-center h-7 gap-x-2 gap-y-2 mt-1 flex-wrap">
            <Link to={`/dashboard/admin/accounts/edit/${id}`}>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3 cursor-pointer opacity-45 hover:opacity-100"
              viewBox="0 0 16 16"
              title="Delete"
              onClick={() =>
                onDelete(
                  id,
                  `${VITE_API_URL}/api/v1/admin/accounts`,
                  setData,
                  data,
                  "dashboard user"
                )
              }
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBox;

DetailsBox.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  role: PropTypes.string,
  fullname: PropTypes.string,
  email: PropTypes.string,
  profilePic: PropTypes.string,
  data: PropTypes.array,
  setData: PropTypes.func,
  onDelete: PropTypes.func,
};
