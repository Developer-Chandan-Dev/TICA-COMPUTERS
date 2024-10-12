/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import "./style.css";
import useCourseForm from "../../../hooks/user/courses/useCourseForm";
import { useParams } from "react-router-dom";
// import GenderCheckbox from "./GenderCheckbox";

const CourseForm = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const {
    formValues,
    errors,
    handleInputChange,
    handleFileChange,
    handleSubmit,
    handleReset,
    loading,
    setFormValues,
  } = useCourseForm();

  const [courseNames, setCourseNames] = useState(null);
  useEffect(() => {
    const courseDetails = fetch(`${VITE_API_URL}/api/v1/user/course/`);
    courseDetails
      .then((value) => {
        return value.json();
      })
      .then((response) => {
        setCourseNames(response);
      });
  }, []);

  const { courseName } = useParams();

  useEffect(() => {
    if (courseNames !== null) {
      courseNames.forEach((course) => {
        if (course.courseShortName === courseName) {
          setFormValues({ ...formValues, courseName: courseName });
        }
      });
    }
  }, [courseName, courseNames]);

  return (
    <form onSubmit={handleSubmit} className="text-sm admissionForm">
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
                value={formValues.courseName}
                onChange={handleInputChange}
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
            {errors.courseName && (
              <span className="error text-red-600 font-semibold">
                {errors.courseName}
              </span>
            )}
          </div>
          <div className="inputBox my-2 w-full sm:w-auto">
            <label htmlFor="candidateName">Candidate Name</label>
            <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
              <input
                type="text"
                className="w-fill-available bg-transparent outline-none"
                placeholder="Candidate Name"
                required
                value={formValues.candidateName}
                onChange={handleInputChange}
                id="candidateName"
                name="candidateName"
              />
            </div>
            {errors.candidateName && (
              <span className="error text-red-600 font-semibold">
                {errors.candidateName}
              </span>
            )}
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
                value={formValues.fathername}
                onChange={handleInputChange}
                id="fathername"
                name="fathername"
              />
            </div>
            {errors.fathername && (
              <span className="error text-red-600 font-semibold">
                {errors.fathername}
              </span>
            )}
          </div>
          <div className="inputBox my-2 w-full sm:w-auto">
            <label htmlFor="mothername">Mother's Name</label>
            <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
              <input
                type="text"
                className="w-fill-available bg-transparent outline-none"
                required
                value={formValues.mothername}
                onChange={handleInputChange}
                id="mothername"
                name="mothername"
                placeholder="Mother's Name"
              />
            </div>
            {errors.mothername && (
              <span className="error text-red-600 font-semibold">
                {errors.mothername}
              </span>
            )}
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
                  checked={formValues.gender === "male"}
                  onChange={handleInputChange}
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
                  checked={formValues.gender === "female"}
                  onChange={handleInputChange}
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
                  checked={formValues.gender === "other"}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {errors.gender && (
              <span className="error text-red-600 font-semibold">
                {errors.gender}
              </span>
            )}
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
                value={formValues.DOB}
                onChange={handleInputChange}
                name="DOB"
              />
            </div>
            {errors.DOB && (
              <span className="error text-red-600 font-semibold">
                {errors.DOB}
              </span>
            )}
          </div>
        </div>
        <div className="inputBoxes flex w-full sm:w-full items-center flex-wrap gap-3">
          <div className="inputBox my-2 w-full sm:w-auto">
            <label htmlFor="registrationDate">Registration Date</label>
            <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
              <input
                type="date"
                className=" w-fill-available bg-transparent outline-none"
                required
                id="registrationDate"
                value={formValues.registrationDate}
                onChange={handleInputChange}
                name="registrationDate"
              />
            </div>
            {errors.registrationDate && (
              <span className="error text-red-600 font-semibold">
                {errors.registrationDate}
              </span>
            )}
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
                onChange={handleFileChange} // Handle file input separately
              />
            </div>
            {errors.profilePic && (
              <span className="error text-red-600 font-semibold">
                {errors.profilePic}
              </span>
            )}
          </div>
        </div>
        <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
          <div className="inputBox my-2 w-full sm:w-auto">
            <label htmlFor="address">Address</label>
            <div className="px-2 my-2 w-full sm:w-72  h-20 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
              <textarea
                name="address"
                id="address"
                value={formValues.address}
                onChange={handleInputChange}
                className=" w-full h-full resize-none bg-transparent outline-none"
                placeholder="Enter your address..."
              ></textarea>
            </div>
            {errors.address && (
              <span className="error text-red-600 font-semibold">
                {errors.address}
              </span>
            )}
          </div>
          <div className="inputBox my-2 w-full sm:w-auto">
            <label htmlFor="city">City</label>
            <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
              <input
                type="text"
                className="w-fill-available bg-transparent outline-none"
                required
                id="city"
                name="city"
                placeholder="City Name"
                value={formValues.city}
                onChange={handleInputChange}
              />
            </div>
            {errors.city && (
              <span className="error text-red-600 font-semibold">
                {errors.city}
              </span>
            )}
          </div>
        </div>
        <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
          <div className="inputBox my-2 w-full sm:w-auto">
            <label htmlFor="state">State</label>
            <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
              <input
                type="text"
                className=" w-fill-available bg-transparent outline-none"
                placeholder="State Name"
                required
                value={formValues.state}
                onChange={handleInputChange}
                id="state"
                name="state"
              />
            </div>
            {errors.state && (
              <span className="error text-red-600 font-semibold">
                {errors.state}
              </span>
            )}
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
                value={formValues.mobile}
                onChange={handleInputChange}
                maxLength="10"
                minLength="10"
                placeholder="Mobile no"
              />
            </div>
            {errors.mobile && (
              <span className="error text-red-600 font-semibold">
                {errors.mobile}
              </span>
            )}
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
                value={formValues.aadharNo}
                onChange={handleInputChange}
                maxLength="12"
                minLength="12"
                placeholder="Aadhar no"
              />
            </div>
            {errors.aadharNo && (
              <span className="error text-red-600 font-semibold">
                {errors.aadharNo}
              </span>
            )}
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
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button
            className="px-5 transition-all shadow-md hover:shadow-lg hover:shadow-slate-500 shadow-slate-400 py-2 mr-2 text-white rounded"
            name="reset"
            type="reset"
            onClick={handleReset}
            style={{
              background:
                "repeating-linear-gradient(45deg, rgb(13, 69, 97), rgb(158, 158, 158) 100px)",
            }}
          >
            Reset
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default CourseForm;
