import PropTypes from "prop-types";
import { indianDate } from "../../../admin/Dashboard/indianDate";

const InstructorInfo = ({
  fullname,
  email,
  phoneno,
  address,
  specilization,
  courseTaught,
  department,
  joiningDate,
  certification,
  bio,
}) => {
  return (
    <>
      <div className="py-10 my-5 px-5 sm:px-10 details instructor-details text-sm bg-[#FBFCFC] shadow rounded-md">
        {/* Personal Info */}
        <div>
          <h1 className="text-xl py-3 font-medium">Personal Information</h1>
          <ul>
            <li className="sm:flex items-center w-11/12 flex-wrap sm:flex-nowrap my-2">
              <p className="w-96 font-semibold">Name</p>
              <p className="w-fill-available">{fullname}</p>
            </li>
            <li className="sm:flex items-center w-11/12 flex-wrap sm:flex-nowrap my-2">
              <p className="w-96 font-semibold">Email</p>
              <p className="w-fill-available">{email}</p>
            </li>
            <li className="sm:flex items-center w-11/12 flex-wrap sm:flex-nowrap my-2">
              <p className="w-96 font-semibold">Phone no</p>
              <p className="w-fill-available">{phoneno}</p>
            </li>
            <li className="sm:flex items-center w-11/12 flex-wrap sm:flex-nowrap my-2">
              <p className="w-96 font-semibold">Address</p>
              <p className="w-fill-available">{address}</p>
            </li>
          </ul>
        </div>
        {/* Professional Info */}
        <div>
          <h1 className="text-xl py-3 font-medium">Professional Information</h1>
          <ul>
            <li className="sm:flex items-center w-11/12 flex-wrap sm:flex-nowrap my-2">
              <p className="w-96 font-semibold">Areas of Specialization</p>
              <div className="w-fill-available flex items-center gap-x-1">
                {specilization.map((element, index) => (
                  <span
                    key={index}
                    className={`${
                      index % 2 == 0
                        ? "text-red-400 font-semibold"
                        : "font-medium text-gray-700"
                    }`}
                  >
                    {element}
                  </span>
                ))}
              </div>
            </li>
            <li className="sm:flex items-center w-11/12 flex-wrap sm:flex-nowrap my-2">
              <p className="w-96 font-semibold">Courses Taught</p>
              <div className="w-fill-available flex items-center gap-x-1">
                {courseTaught.map((course, index) => (
                  <span
                    key={index}
                    className={`${
                      index % 2 == 0
                        ? "text-red-400 font-semibold"
                        : "font-medium text-gray-700"
                    }`}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </li>
          </ul>
        </div>

        {/* Employment Info */}
        <div>
          <h1 className="text-xl py-3 font-medium">Employment Infomation</h1>
          <ul>
            <li className="sm:flex items-center w-11/12 flex-wrap sm:flex-nowrap my-2">
              <p className="w-96 font-semibold">Department</p>
              <p className="w-fill-available">{department}</p>
            </li>
            <li className="sm:flex items-center w-11/12 flex-wrap sm:flex-nowrap my-2">
              <p className="w-96 font-semibold">Joining Date </p>
              <p className="w-fill-available">{indianDate(joiningDate)}</p>
            </li>
          </ul>
        </div>

        {/* Additional Info */}
        <div>
          <h1 className="text-xl py-3 font-medium">Additional Infomation</h1>
          <ul>
            <li className="sm:flex items-center w-11/12 flex-wrap sm:flex-nowrap my-2">
              <p className="w-96 font-semibold">Certification</p>
              <p className="w-fill-available">
                {certification.map((course, index) => (
                  <span
                    key={index}
                    className={`${
                      index % 2 == 0
                        ? "text-red-400 font-semibold"
                        : "font-medium text-gray-700 ml-1"
                    }`}
                  >
                    {course}
                  </span>
                ))}
              </p>
            </li>
          </ul>
        </div>

        {/* Professional Bio */}
        <div>
          <h1 className="text-xl py-3 font-medium">Professional Bio</h1>
          <p>{bio}</p>
        </div>
      </div>
    </>
  );
};

export default InstructorInfo;

InstructorInfo.propTypes = {
  fullname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneno: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  specilization: PropTypes.array.isRequired,
  courseTaught: PropTypes.array.isRequired,
  department: PropTypes.string.isRequired,
  joiningDate: PropTypes.string.isRequired,
  certification: PropTypes.array.isRequired,
  bio: PropTypes.string.isRequired,
};

// InstructorInfo.defaultProps = {
//   fullname: "Set fullname here",
//   email: "Set email here",
//   phoneno: "Set phoneno here",
//   address: "Set address here",
//   specilization: ["Set specilization here"],
//   courseTaught: ["Set course taught here"],
//   department: "Set department here",
//   joiningDate: "Set joining date here",
//   certification: ["Set specilization here"],
//   bio: "Set bio here",
// };
