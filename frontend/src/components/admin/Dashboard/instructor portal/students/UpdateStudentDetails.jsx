/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { formatDateToHTML } from "../../formateDateToHTML";
import { Link } from "react-router-dom";
import useUpdateStudentDetails from "../../../../../hooks/admin/instructor portal/useUpdateStudentDetails";

const UpdateStudentDetails = ({ studentId }) => {
  const [inputs, setInputs] = useState({
    id: "",
    courseName: "",
    studentName: "",
    fathername: "",
    mothername: "",
    registrationDate: "",
    admissionDate: "",
    gender: "",
    city: "",
    state: "",
    profilePic: null,
    DOB: "",
    address: "",
    mobile: "",
    aadharNo: "",
    profilePicPublicId:"",
  });
  const [courseNames, setCourseNames] = useState(null);
  const [error, setError] = useState(null);

  const { studentDetailsForm, loading } = useUpdateStudentDetails();

  useEffect(() => {
    const courseDetails = fetch(`/api/v1/user/course/`);
    courseDetails
      .then((value) => {
        return value.json();
      })
      .then((response) => {
        return setCourseNames(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    const studentDetails = fetch(`/api/v1/instructor/student/${studentId}`);
    studentDetails
      .then((value) => {
        return value.json();
      })
      .then((response) => {
        setInputs({ ...response, id: response._id });
      })
      .catch((error) => {
        setError(error);
      });
  }, [studentId]);

  const handleGenderChange = (event) => {
    setInputs({ ...inputs, gender: event.target.value });
  };

  const handleCourseSelectionChange = (event) => {
    setInputs({ ...inputs, courseName: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await studentDetailsForm(inputs);
    setInputs({
      id: "",
      courseName: "",
      studentName: "",
      fathername: "",
      mothername: "",
      registrationDate: "",
      admissionDate: "",
      gender: "",
      city: "",
      state: "",
      profilePic: null,
      DOB: "",
      address: "",
      mobile: "",
      aadharNo: "",
      profilePicPublicId:"",
    });
  };

  return (
    <>
      <div className="flex items-center justify-between w-full mx-auto my-3 flex-wrap">
        <h2 className="text-2xl font-bold mb-2">Update Student Details</h2>{" "}
        <Link to="/dashboard/instructor/features/students">
          <button className="back-btn flex-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="16"
              width="16"
              className="opacity-80 cursor-pointer"
              fill="currentColor"
              title="Back"
            >
              <path d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z" />
            </svg>
            <span>Go Back</span>
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="text-sm admissionForm mt-5">
        {/* Personal Information */}
        <fieldset className="w-full py-2 ">
          <div className="inputBoxes">
            <legend className="text-2xl">Personal Information</legend>
          </div>
          <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="courseName">Course Name</label>
              <div className="px-2 my-2 w-full h-8 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <select
                  name="courseName"
                  id="courseName"
                  className="w-fill-available outline-none bg-transparent"
                  value={inputs.courseName}
                  onChange={handleCourseSelectionChange}
                >
                  <option value="">Please choose an option</option>
                  {courseNames != null
                    ? courseNames.map((courseName, index) => (
                        <option value={courseName.courseShortName} key={index}>
                          {courseName.courseFullName}
                        </option>
                      ))
                    : "No course found"}
                </select>
              </div>
            </div>
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="studentName">Student Name</label>
              <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <input
                  type="text"
                  className="w-fill-available bg-transparent outline-none"
                  placeholder="Student Name"
                  required
                  value={inputs.studentName}
                  onChange={(e) =>
                    setInputs({ ...inputs, studentName: e.target.value })
                  }
                  id="studentName"
                  name="studentName"
                />
              </div>
            </div>
          </div>
          <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="fathername">Father's Name</label>
              <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <input
                  type="text"
                  className=" w-fill-available bg-transparent outline-none"
                  placeholder="Father's Name"
                  required
                  value={inputs.fathername}
                  onChange={(e) =>
                    setInputs({ ...inputs, fathername: e.target.value })
                  }
                  id="fathername"
                  name="fathername"
                />
              </div>
            </div>
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="mothername">Mother's Name</label>
              <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <input
                  type="text"
                  className="w-fill-available bg-transparent outline-none"
                  required
                  value={inputs.mothername}
                  onChange={(e) =>
                    setInputs({ ...inputs, mothername: e.target.value })
                  }
                  id="mothername"
                  name="mothername"
                  placeholder="Mother's Name"
                />
              </div>
            </div>
          </div>
          <div className="inputBoxes flex w-full sm:w-full items-center flex-wrap gap-3">
            {/* Gender Area */}

            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="gender">Gender</label>
              <div className="px-2 my-2 w-full gap-x-4 sm:w-72  h-10 rounded border-2 border-slate-50 py-1 shadow-slate-700 flex items-center justify-start">
                <div className="flex items-center gap-x-2">
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    className="w-4 h-4 cursor-pointer"
                    id="male"
                    value="male"
                    name="gender"
                    checked={inputs.gender === "male"}
                    onChange={handleGenderChange}
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    className="w-4 h-4 cursor-pointer"
                    id="female"
                    value="female"
                    name="gender"
                    checked={inputs.gender === "female"}
                    onChange={handleGenderChange}
                  />
                </div>
                <div className="flex items-center gap-x-2">
                  <label htmlFor="other">Other</label>
                  <input
                    type="radio"
                    className="w-4 h-4 cursor-pointer"
                    id="other"
                    value="other"
                    name="gender"
                    checked={inputs.gender === "other"}
                    onChange={handleGenderChange}
                  />
                </div>
              </div>
            </div>

            {/* Gender Area */}

            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="dob">Date of Birth</label>
              <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <input
                  type="date"
                  className=" w-fill-available bg-transparent outline-none"
                  required
                  id="dob"
                  value={formatDateToHTML(inputs.DOB)}
                  onChange={(e) =>
                    setInputs({ ...inputs, DOB: e.target.value })
                  }
                  name="dob"
                />
              </div>
            </div>
          </div>
          <div className="inputBoxes flex w-full sm:w-full items-center flex-wrap gap-3">
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="dob">Registration Date</label>
              <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <input
                  type="date"
                  className=" w-fill-available bg-transparent outline-none"
                  required
                  id="dob"
                  value={formatDateToHTML(inputs.registrationDate)}
                  onChange={(e) =>
                    setInputs({ ...inputs, registrationDate: e.target.value })
                  }
                  name="dob"
                />
              </div>
            </div>
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="profilePic">Profile Picture</label>
              <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <input
                  type="file"
                  className=" w-fill-available bg-transparent outline-none"
                  id="profilePic"
                  name="profilePic"
                  accept="image/*"
                  onChange={(e) =>
                    setInputs({ ...inputs, profilePic: e.target.files[0] })
                  }
                />
              </div>
            </div>
          </div>
          <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="address">Address</label>
              <div className="px-2 my-2 w-full sm:w-72  h-20 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <textarea
                  name="address"
                  id="address"
                  value={inputs.address}
                  onChange={(e) =>
                    setInputs({ ...inputs, address: e.target.value })
                  }
                  className=" w-full h-full resize-none bg-transparent outline-none"
                  placeholder="Enter your address..."
                ></textarea>
              </div>
            </div>
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="cityName">City</label>
              <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <input
                  type="text"
                  className="w-fill-available bg-transparent outline-none"
                  required
                  id="cityName"
                  name="cityName"
                  placeholder="City Name"
                  value={inputs.city}
                  onChange={(e) =>
                    setInputs({ ...inputs, city: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="stateName">State</label>
              <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <input
                  type="text"
                  className=" w-fill-available bg-transparent outline-none"
                  placeholder="State Name"
                  required
                  value={inputs.state}
                  onChange={(e) =>
                    setInputs({ ...inputs, state: e.target.value })
                  }
                  id="stateName"
                  name="stateName"
                />
              </div>
            </div>
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="mobile">Mobile No.</label>
              <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <input
                  type="text"
                  className="w-fill-available bg-transparent outline-none"
                  required
                  id="mobile"
                  name="mobile"
                  value={inputs.mobile}
                  onChange={(e) =>
                    setInputs({ ...inputs, mobile: e.target.value })
                  }
                  maxLength="10"
                  minLength="10"
                  placeholder="Mobile no"
                />
              </div>
            </div>
          </div>
          <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="aadharNo">Aadhar No.</label>
              <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <input
                  type="text"
                  className="w-fill-available bg-transparent outline-none"
                  required
                  id="aadharNo"
                  name="aadharNo"
                  value={inputs.aadharNo}
                  onChange={(e) =>
                    setInputs({ ...inputs, aadharNo: e.target.value })
                  }
                  maxLength="12"
                  minLength="12"
                  placeholder="Aadhar no"
                />
              </div>
            </div>
            <div className="inputBox my-2 w-full sm:w-auto">
              <label htmlFor="admissionDate">Admission date</label>
              <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                <input
                  type="date"
                  className="w-fill-available bg-transparent outline-none"
                  required
                  id="admissionDate"
                  name="admissionDate"
                  value={formatDateToHTML(inputs.admissionDate)}
                  onChange={(e) =>
                    setInputs({ ...inputs, admissionDate: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="inputBoxes mt-3">
            <button
              className="px-5 transition-all shadow-md hover:shadow-lg hover:shadow-slate-500 shadow-slate-400 py-2 mr-2 text-white rounded"
              name="submit"
              type="submit"
              style={{
                background:
                  "repeating-linear-gradient(45deg, rgb(13, 69, 97), rgb(158, 158, 158) 100px)",
              }}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default UpdateStudentDetails;
