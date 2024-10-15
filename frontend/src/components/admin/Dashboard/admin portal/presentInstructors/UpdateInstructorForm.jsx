/* eslint-disable react/no-unescaped-entities */
import "./instructor.css";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { formatDateToHTML } from "../../formateDateToHTML";

import useHandleInstructorAndStaffForm from "../../../../../hooks/admin/admin portal/useHandleInstructorAndStaffForm";

const UpdateInstructorForm = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  const {
    formData,
    handleChange,
    handleFileChange,
    handleGenderChange,
    handleArrayChange,
    addArrayItem,
    removeArrayItem,
    handleObjectChange,
    handleSubmit,
    loading,
    error,
    setFormData,
  } = useHandleInstructorAndStaffForm(
    {
      fullname: "",
      email: "",
      phoneno: "",
      DOB: "",
      address: "",
      gender: "",
      profilePic: null,
      education: [{ year: "", college: "" }],
      specilization: [""],
      experience: [{ year: "", experiencePlace: "" }],
      courseTaught: [""],
      bio: "",
      employmentStatus: "",
      department: "",
      joiningDate: "",
      username: "",
      password: "",
      confirmPassword: "",
      skills: [{ title: "", subTitle: "" }],
      certification: [""],
      socialMediaUrls: {
        facebook: "",
        instagram: "",
        whatsapp: "",
        twitter: "",
        linkedin: "",
      },
      emergencyContactInfo: [""],
      profilePicPublicId: "",
    },
    "PUT"
  );
  const { instructorId } = useParams();

  useEffect(() => {
    const instructorData = async () => {
      const response = await axios.get(
        `${VITE_API_URL}/api/v1/admin/instructor/${instructorId}`
      );
      const data = response.data;

      if (data != null) {
        setFormData(data);
      }
    };
    instructorData();
  }, [instructorId]);

  console.log(formData);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await handleSubmit(`${VITE_API_URL}/api/v1/admin/instructor/${instructorId}`);
    if (data) {
      toast.success(data.message);
      // Handle success (e.g., rest form, show success message)
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="w-full text-sm">
        <>
          {/* Personal Information */}
          <fieldset className="my-2">
            <legend className="text-xl font-medium sm:text-2xl">
              Personal Information
            </legend>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="fullname">Full Name</label>
                <div className="px-2 my-2 w-full sm:w-72 h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <input
                    type="text"
                    className="w-fill-available sm:w-64 bg-transparent outline-none"
                    placeholder="Instructor name"
                    value={formData.fullname}
                    onChange={handleChange}
                    id="fullname"
                    name="fullname"
                    required
                  />
                </div>
              </div>
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="email">Email Address</label>
                <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <input
                    type="email"
                    className=" w-fill-available sm:w-64 bg-transparent outline-none"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="phoneno">Phone Number</label>
                <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <input
                    type="text"
                    className=" w-fill-available sm:w-64 bg-transparent outline-none"
                    placeholder="Phone number"
                    value={formData.phoneno}
                    onChange={handleChange}
                    minLength={10}
                    maxLength={10}
                    id="phoneno"
                    name="phoneno"
                    required
                  />
                </div>
              </div>
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="DOB">Date of Birth</label>
                <div className="px-2 my-2 w-full md:w-72 h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <input
                    type="date"
                    className=" w-fill-available sm:w-64 bg-transparent outline-none"
                    value={formatDateToHTML(formData.DOB)}
                    onChange={handleChange}
                    id="DOB"
                    name="DOB"
                    required
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
                    className=" w-full h-full resize-none bg-transparent outline-none"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address..."
                    required
                  ></textarea>
                </div>
              </div>
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="profilePicture">Profile Picture</label>
                <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <input
                    type="file"
                    className=" w-fill-available sm:w-64 bg-transparent outline-none"
                    accept="image/*"
                    onChange={handleFileChange}
                    id="profilePicture"
                    name="profilePicture"
                  />
                </div>
              </div>
            </div>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              {/* Gender Area */}
              <div className="inputBox my-2 w-full sm:w-auto">
                <h2>Gender</h2>
                <div className="px-2 my-2 w-full gap-x-4 sm:w-72  h-10 rounded border-2 border-slate-50 py-1 shadow-slate-700 flex items-center justify-start">
                  <div className="flex items-center gap-x-2">
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      className="w-4 h-4 cursor-pointer"
                      id="male"
                      value="male"
                      name="gender"
                      checked={formData.gender === "male"}
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
                      checked={formData.gender === "female"}
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
                      checked={formData.gender === "other"}
                      onChange={handleGenderChange}
                    />
                  </div>
                </div>
              </div>
              {/* Gender Area */}
            </div>
          </fieldset>

          {/* Professional Information  */}
          <fieldset className="my-2">
            <legend className="my-2 text-xl font-medium sm:text-2xl">
              Professional Information
            </legend>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full">
                <label htmlFor="education">Education Qualifications</label>
                <br />
                {formData.education.map((edu, index) => (
                  <>
                    <div
                      className="px-2 my-2 w-full h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-between"
                      key={index}
                    >
                      <input
                        type="text"
                        className="w-fill-available bg-transparent outline-none"
                        value={edu.year}
                        onChange={(e) =>
                          handleArrayChange("education", index, {
                            ...edu,
                            year: e.target.value,
                          })
                        }
                        name="education"
                        placeholder="Year"
                        id="education"
                      />
                    </div>
                    <div className="px-2 my-2 w-full h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-between">
                      <input
                        type="text"
                        className="w-fill-available bg-transparent outline-none"
                        value={edu.college}
                        onChange={(e) =>
                          handleArrayChange("education", index, {
                            ...edu,
                            college: e.target.value,
                          })
                        }
                        name="college"
                        placeholder="Collage Name"
                        id="college"
                      />
                      <button
                        className="removeFieldBtn"
                        type="button"
                        onClick={() => removeArrayItem("education", index)}
                      >
                        -
                      </button>
                    </div>
                  </>
                ))}
                <button
                  className="addNewFieldBtn"
                  type="button"
                  onClick={() =>
                    addArrayItem("education", { year: "", college: "" })
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full">
                <label htmlFor="specializations">Areas of Specialization</label>
                <br />
                {formData.specilization.map((item, index) => (
                  <div
                    className="px-2 my-2 w-full h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-between"
                    key={index}
                  >
                    <input
                      type="text"
                      className="w-fill-available bg-transparent outline-none"
                      value={item}
                      onChange={(e) =>
                        handleArrayChange(
                          "specilization",
                          index,
                          e.target.value
                        )
                      }
                      placeholder="Specializations"
                      name="specializations"
                      id="specializations"
                    />
                    <button
                      className="removeFieldBtn"
                      type="button"
                      onClick={() => removeArrayItem("specilization", index)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  className="addNewFieldBtn"
                  type="button"
                  onClick={() => addArrayItem("specilization", "")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full">
                <label htmlFor="experience">Experience</label>
                <br />
                {formData.experience.map((exp, index) => (
                  <>
                    <div
                      className="px-2 my-2 w-full h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-between"
                      key={index}
                    >
                      <input
                        type="text"
                        className="w-fill-available bg-transparent outline-none"
                        value={exp.year}
                        onChange={(e) =>
                          handleArrayChange("experience", index, {
                            ...exp,
                            year: e.target.value,
                          })
                        }
                        name="year"
                        placeholder="Experience Year"
                        id="experience"
                      />
                    </div>
                    <div className="px-2 my-2 w-full h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-between">
                      <input
                        type="text"
                        className="w-fill-available bg-transparent outline-none"
                        value={exp.experiencePlace}
                        onChange={(e) =>
                          handleArrayChange("experience", index, {
                            ...exp,
                            experiencePlace: e.target.value,
                          })
                        }
                        name="experience"
                        placeholder="Experience place/institute/company etc."
                        id="experience place"
                      />
                      <button
                        className="removeFieldBtn"
                        type="button"
                        onClick={() => removeArrayItem("experience", index)}
                      >
                        -
                      </button>
                    </div>
                  </>
                ))}
                <button
                  className="addNewFieldBtn"
                  type="button"
                  onClick={() =>
                    addArrayItem("experience", {
                      year: "",
                      experiencePlace: "",
                    })
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full">
                <label htmlFor="courseTaught">Courses Taught</label>
                <br />
                {formData.courseTaught.map((item, index) => (
                  <div
                    className="px-2 my-2 w-full h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-between"
                    key={index}
                  >
                    <input
                      type="text"
                      className="w-fill-available bg-transparent outline-none"
                      value={item}
                      onChange={(e) =>
                        handleArrayChange("courseTaught", index, e.target.value)
                      }
                      name="courseTaught"
                      placeholder="Course Taught"
                      id="courseTaught"
                    />
                    <button
                      className="removeFieldBtn"
                      type="button"
                      onClick={() => removeArrayItem("courseTaught", index)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  className="addNewFieldBtn"
                  type="button"
                  onClick={() => addArrayItem("courseTaught", "")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="bio">Professional Biography</label>
                <div className="px-2 my-2 w-full sm:w-72  h-20 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <textarea
                    name="bio"
                    id="bio"
                    className="w-full h-full resize-none bg-transparent outline-none"
                    placeholder="Enter your bio"
                    value={formData.bio}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Employment Information  */}
          <fieldset className="my-2">
            <legend className="my-2 text-xl font-medium sm:text-2xl">
              Employment Information
            </legend>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full sm:w-auto">
                <h2>Employment Status</h2>
                <div className="px-2 my-2 w-full sm:w-72 h-9 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <select
                    name="employmentStatus"
                    className=" w-full h-full bg-transparent outline-none"
                    id="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose option</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                  </select>
                </div>
              </div>
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="department">Department</label>
                <div className="px-2 my-2 w-full sm:w-72 h-9 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <select
                    name="department"
                    className=" w-full h-full bg-transparent outline-none"
                    id="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose option</option>
                    <option value="Software">Software</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Software & Hardware">
                      Software & Hardware
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="inputBoxes flex w-full items-center flex-wrap">
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="dateOfJoining">Date of Joining</label>
                <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <input
                    type="date"
                    className="w-fill-available sm:w-64 bg-transparent outline-none"
                    value={formatDateToHTML(formData.joiningDate)}
                    onChange={handleChange}
                    name="joiningDate"
                    id="dateOfJoining"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Additional Information  */}
          <fieldset className="my-2">
            <legend className="my-2 text-xl font-medium sm:text-2xl">
              Additional Information
            </legend>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full">
                <label htmlFor="skills">Skills</label>
                <br />
                {formData.skills.map((skill, index) => (
                  <>
                    <div
                      className="px-2 my-2 w-full h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-between"
                      key={index}
                    >
                      <input
                        type="text"
                        className="w-fill-available bg-transparent outline-none"
                        value={skill.title}
                        onChange={(e) =>
                          handleArrayChange("skills", index, {
                            ...skill,
                            title: e.target.value,
                          })
                        }
                        name="title"
                        placeholder="Skills Title"
                        id="skills"
                      />
                    </div>
                    <div className="px-2 my-2 w-full h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-between">
                      <input
                        type="text"
                        className="w-fill-available bg-transparent outline-none"
                        value={skill.subTitle}
                        onChange={(e) =>
                          handleArrayChange("skills", index, {
                            ...skill,
                            subTitle: e.target.value,
                          })
                        }
                        name="subTitle"
                        placeholder="Skills SubTitle"
                        id="skillsSubTitle"
                      />
                      <button
                        className="removeFieldBtn"
                        type="button"
                        onClick={() => removeArrayItem("skills", index)}
                      >
                        -
                      </button>
                    </div>
                  </>
                ))}
                <button
                  className="addNewFieldBtn"
                  type="button"
                  onClick={() =>
                    addArrayItem("skills", { title: "", subTitle: "" })
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full certification">
                <label htmlFor="certifications">Certifications</label>
                <br />
                {formData.certification.map((item, index) => (
                  <div
                    className="px-2 my-2 w-full h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-between"
                    key={index}
                  >
                    <input
                      type="text"
                      className="w-fill-available bg-transparent outline-none"
                      value={item}
                      onChange={(e) =>
                        handleArrayChange(
                          "certification",
                          index,
                          e.target.value
                        )
                      }
                      name="certification"
                      placeholder="Certifications"
                      id="certification"
                    />
                    <button
                      className="removeFieldBtn"
                      type="button"
                      onClick={() => removeArrayItem("certification", index)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  className="addNewFieldBtn"
                  type="button"
                  onClick={() => addArrayItem("certification", "")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full">
                <label htmlFor="emergencyContactInfo">
                  Emergency Contact Information
                </label>
                <br />
                {formData.emergencyContactInfo.map((item, index) => (
                  <div
                    className="px-2 my-2 w-full h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-between"
                    key={index}
                  >
                    <input
                      type="text"
                      className="w-fill-available bg-transparent outline-none"
                      value={item}
                      onChange={(e) =>
                        handleArrayChange(
                          "emergencyContactInfo",
                          index,
                          e.target.value
                        )
                      }
                      name="emergencyContactInfo"
                      placeholder="Emergency Contact Info"
                      id="emergencyContactInfo"
                    />
                    <button
                      className="removeFieldBtn"
                      type="button"
                      onClick={() =>
                        removeArrayItem("emergencyContactInfo", index)
                      }
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  className="addNewFieldBtn"
                  type="button"
                  onClick={() => addArrayItem("emergencyContactInfo", "")}
                >
                  +
                </button>
              </div>
            </div>

            <h2 className="my-2 text-lg font-medium sm:text-xl">
              Social Media Connections
            </h2>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="facebook">Facebook Account URL</label>
                <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <input
                    type="text"
                    name="facebook"
                    id="facebook"
                    className=" w-fill-available sm:w-64 bg-transparent outline-none"
                    value={
                      formData.socialMediaUrls != undefined
                        ? formData.socialMediaUrls.facebook
                        : ""
                    }
                    onChange={(e) =>
                      handleObjectChange(
                        "socialMediaUrls",
                        "facebook",
                        e.target.value
                      )
                    }
                    placeholder="Facebook URL"
                  />
                </div>
              </div>
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="instagram">Instagram Account URL</label>
                <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <input
                    type="text"
                    name="instagram"
                    id="instagram"
                    className=" w-fill-available sm:w-64 bg-transparent outline-none"
                    value={
                      formData.socialMediaUrls != undefined
                        ? formData.socialMediaUrls.instagram
                        : ""
                    }
                    onChange={(e) =>
                      handleObjectChange(
                        "socialMediaUrls",
                        "instagram",
                        e.target.value
                      )
                    }
                    placeholder="Instagram URL"
                  />
                </div>
              </div>
            </div>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="twitter">Twitter Account URL</label>
                <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <input
                    type="text"
                    name="twitter"
                    id="twitter"
                    className=" w-fill-available sm:w-64 bg-transparent outline-none"
                    value={
                      formData.socialMediaUrls != undefined
                        ? formData.socialMediaUrls.twitter
                        : ""
                    }
                    onChange={(e) =>
                      handleObjectChange(
                        "socialMediaUrls",
                        "twitter",
                        e.target.value
                      )
                    }
                    placeholder="Twitter URL"
                  />
                </div>
              </div>
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="linkedin">LinkedIn Account URL</label>
                <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <input
                    type="text"
                    name="linkedin"
                    id="linkedin"
                    className=" w-fill-available sm:w-64 bg-transparent outline-none"
                    value={
                      formData.socialMediaUrls != undefined
                        ? formData.socialMediaUrls.linkedin
                        : ""
                    }
                    onChange={(e) =>
                      handleObjectChange(
                        "socialMediaUrls",
                        "linkedin",
                        e.target.value
                      )
                    }
                    placeholder="LinkedIn URL"
                  />
                </div>
              </div>
            </div>
            <div className="inputBoxes flex w-full items-center flex-wrap gap-3">
              <div className="inputBox my-2 w-full sm:w-auto">
                <label htmlFor="whatsapp">What'sApp number</label>
                <div className="px-2 my-2 w-full sm:w-72  h-10 rounded border-2 border-slate-50 py-1 bg-slate-50 shadow shadow-slate-700 flex items-center justify-start">
                  <input
                    type="text"
                    name="whatsapp"
                    id="whatsapp"
                    className=" w-fill-available sm:w-64 bg-transparent outline-none"
                    maxLength={10}
                    minLength={10}
                    value={
                      formData.socialMediaUrls != undefined
                        ? formData.socialMediaUrls.whatsapp
                        : ""
                    }
                    onChange={(e) =>
                      handleObjectChange(
                        "socialMediaUrls",
                        "whatsapp",
                        e.target.value
                      )
                    }
                    placeholder="WhatsApp URL"
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <>
          <button
            className="px-5 transition-all shadow-md hover:shadow-lg hover:shadow-slate-500 shadow-slate-400 py-2 mr-2 text-white rounded"
            name="submit"
            type="submit"
            disabled={loading}
            style={{
              background:
                "repeating-linear-gradient(45deg, rgb(13, 69, 97), rgb(158, 158, 158) 100px)",
            }}
          >
            {loading ? "Updating..." : "Update Instructor"}
          </button>
        </>
      </form>
    </>
  );
};

export default UpdateInstructorForm;
