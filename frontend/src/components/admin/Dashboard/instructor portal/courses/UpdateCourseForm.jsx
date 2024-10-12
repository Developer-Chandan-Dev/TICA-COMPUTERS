import { useState, useEffect } from "react";
import useUpdateCourseForm from "../../../../../hooks/admin/instructor portal/useUpdateCourseForm";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../../../../utility/Spinner";

const UpdateCourseForm = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [instructors, setInstructors] = useState(null);

  const {
    // updateCourseForm,
    formData,
    handleChange,
    handleFileChange,
    handleArrayChange,
    addArrayItem,
    removeArrayItem,
    handleSubmit,
    setFormData,
    loading,
    addHeading,
    removeHeading,
    updateHeading,
    addTopic,
    setLoading,
    removeTopic,
    updateTopic,
    error,
  } = useUpdateCourseForm(
    {
      id: "",
      courseFullName: "",
      courseShortName: "",
      shortDesc: "",
      category: "",
      duration: "",
      fees: "",
      level: "",
      language: "",
      coursePic: null,
      whatYouLearn: [""],
      prerequisites: [""],
      mainTopics: [""],
      instructorId: "",
      syllabus: [
        {
          heading: "",
          topics: [""],
        },
      ],
      longDesc: "",
      coursePicPublicId:""
    },
    "PUT"
  );

  const navigate = useNavigate();

  // <----------- Fetching Course Data ----------->
  const { courseShortName } = useParams();
  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${VITE_API_URL}/api/v1/instructor/course/${courseShortName}`
        );
        const courseData = response.data; // Set course data to the formData state

        setFormData(courseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course data:", error);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseShortName, setFormData, setLoading]);

  // <----------- Fetching Instructor Data ----------->
  useEffect(() => {
    const instructorData = fetch(`${VITE_API_URL}/api/v1/admin/instructor/`);
    instructorData
      .then((value) => {
        return value.json();
      })
      .then((response) => {
        return setInstructors(response);
      })
      .catch((error) => {
        console.error("Error fetching instructor  data:", error);
      });
  }, []);

  console.log(formData);
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await handleSubmit(`${VITE_API_URL}/api/v1/instructor/course/${formData._id}`);
    if (data.message == "Course updated Successfully") {
      toast.success(data.message);
      navigate("/dashboard/instructor/features/courses");
    } else {
      toast.error(error);
    }
  };
  return (
    <>
      <>
        {formData != null ? (
          <h3>Update course from here</h3>
        ) : (
          <h3 className="text-green-600">Course updated successfully</h3>
        )}
      </>
      {loading && <Spinner />}
      {/* <form className="w-full h-auto py-5 text-sm" onSubmit={handleSubmit}> */}
      {!loading && formData != null && (
        <form className="w-full h-auto py-5 text-sm" onSubmit={onSubmit}>
          {/* <------------- Course full name and short name -------------> */}
          <div className="w-full sm:flex items-center justify-start gap-x-3 md:gap-x-6  lg:gap-x-10 ">
            <div className="courseInputBox flex-center">
              <input
                type="text"
                className="w-fill-available bg-transparent border-none outline-none"
                required
                placeholder="Enter course full name"
                value={formData.courseFullName}
                onChange={handleChange}
                name="courseFullName"
              />
            </div>
            <div className=" courseInputBox  flex-center mt-8 sm:mt-0">
              <input
                type="text"
                className="w-fill-available bg-transparent border-none outline-none"
                required
                placeholder="Enter course short name"
                value={formData.courseShortName}
                name="courseShortName"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* <------------- Course short desc and category -------------> */}
          <div className="w-full sm:flex items-start justify-start gap-x-3 md:gap-x-6  lg:gap-x-10 mt-8">
            <div className="courseTextarea flex-center h-32 sm:h-20">
              <textarea
                placeholder="Enter course short description here"
                required
                className="w-fill-available bg-transparent border-none outline-none h-fill-available py-1"
                name="shortDesc"
                value={formData.shortDesc}
                onChange={handleChange}
              />
            </div>
            <div className="courseInputBox flex-center mt-8 sm:mt-0">
              <select
                id="courseName"
                className="w-fill-available outline-none bg-transparent"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Choose course cataegory</option>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="Software & Hardware">Software & Hardware</option>
              </select>
            </div>
          </div>

          {/* <------------- Course duration and fees -------------> */}
          <div className="w-full sm:flex items-center justify-start gap-x-3 md:gap-x-6  lg:gap-x-10 mt-8 ">
            <div className="courseInputBox flex-center">
              <input
                type="text"
                className="w-fill-available bg-transparent border-none outline-none"
                name="duration"
                required
                placeholder="Enter course duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
            <div className="courseInputBox flex-center mt-8 sm:mt-0">
              <input
                type="text"
                className="w-fill-available bg-transparent border-none outline-none"
                name="fees"
                required
                placeholder="Enter course fees"
                value={formData.fees}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* <------------- Course level and language -------------> */}
          <div className="w-full sm:flex items-start justify-start gap-x-3 md:gap-x-6  lg:gap-x-10 mt-8">
            <div className="courseInputBox flex-center mt-5 sm:mt-0">
              <select
                name="level"
                id="courseName"
                className="w-fill-available outline-none bg-transparent"
                value={formData.level}
                onChange={handleChange}
              >
                <option value="">Choose course level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="courseInputBox flex-center mt-5 sm:mt-0">
              <select
                name="language"
                id="courseLanguage"
                className="w-fill-available outline-none bg-transparent"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="">Choose course language</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Hindi & English">Hindi & English</option>
              </select>
            </div>
          </div>

          {/* <------------- Course picture ------------->  */}
          <h1 className="py-3 mt-6">Course Thumbnail</h1>
          <div className="w-full sm:flex items-center justify-start gap-x-3 md:gap-x-6  lg:gap-x-10">
            <div className="courseInputBox flex-center">
              <input
                type="file"
                className="w-fill-available bg-transparent border-none outline-none"
                placeholder="Enter course full name"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* <------------- What you learn ------------->  */}
          <div className="w-full h-auto py-2 mt-6">
            <h3 className="ml-2 py-1">What you will learn in this course</h3>
            {formData.whatYouLearn.map((whatYouLearn, index) => (
              <div
                className="bigInputBox mt-4 flex items-center justify-between"
                key={index}
              >
                <input
                  type="text"
                  className="w-fill-available border-none outline-none bg-transparent"
                  placeholder="Enter what? students learns in this course..."
                  name="whatYouLearn"
                  required
                  value={whatYouLearn}
                  onChange={(e) =>
                    handleArrayChange("whatYouLearn", index, e.target.value)
                  }
                />
                <span
                  className="text-2xl font-bold cursor-pointer w-9 h-8 rounded-full flex-center text-gray-400 hover:shadow hover:shadow-gray-300"
                  onClick={() => addArrayItem("whatYouLearn", "")}
                >
                  +
                </span>
                <span
                  className="text-4xl font-bold cursor-pointer w-9 h-8 rounded-full flex-center text-gray-400 ml-1 hover:shadow hover:shadow-gray-300"
                  onClick={() => removeArrayItem("whatYouLearn", index)}
                >
                  -
                </span>
              </div>
            ))}
          </div>

          {/* <------------- Prerequities -------------> */}
          <div className="w-full h-auto py-2 mt-6">
            <h3 className="ml-2 py-1">Prerequisites for this course</h3>
            {formData.prerequisites.map((prerequisites, index) => (
              <div
                className="bigInputBox mt-4 flex items-center justify-between"
                key={index}
              >
                <input
                  type="text"
                  className="w-fill-available border-none outline-none bg-transparent"
                  required
                  name="prerequisites"
                  placeholder="Prerequisites or requirments for this course..."
                  value={prerequisites}
                  onChange={(e) =>
                    handleArrayChange("prerequisites", index, e.target.value)
                  }
                />
                <span
                  className="text-2xl font-bold cursor-pointer w-9 h-8 rounded-full flex-center text-gray-400 hover:shadow hover:shadow-gray-300"
                  onClick={() => addArrayItem("prerequisites", "")}
                >
                  +
                </span>
                <span
                  className="text-4xl font-bold cursor-pointer w-9 h-8 rounded-full flex-center text-gray-400 ml-1 hover:shadow hover:shadow-gray-300"
                  onClick={() => removeArrayItem("prerequisites", index)}
                >
                  -
                </span>
              </div>
            ))}
          </div>

          {/* <------------- Main Topics -------------> */}
          <div className="w-full h-auto py-2 mt-6">
            <h3 className="ml-2 py-1">Main topics for this course</h3>
            {formData.mainTopics.map((mainTopic, index) => (
              <div
                className="bigInputBox mt-4 flex items-center justify-between"
                key={index}
              >
                <input
                  type="text"
                  className="w-fill-available border-none outline-none bg-transparent"
                  required
                  placeholder="Main topics for this course..."
                  value={mainTopic}
                  onChange={(e) =>
                    handleArrayChange("mainTopics", index, e.target.value)
                  }
                />
                <button
                  type="button"
                  className="text-2xl font-bold cursor-pointer w-9 h-8 rounded-full flex-center text-gray-400 hover:shadow hover:shadow-gray-300"
                  onClick={() => addArrayItem("mainTopics", "")}
                >
                  +
                </button>
                <button
                  type="button"
                  className="text-4xl font-bold cursor-pointer w-9 h-8 rounded-full flex-center text-gray-400 ml-1 hover:shadow hover:shadow-gray-300"
                  onClick={() => removeArrayItem("mainTopics", index)}
                >
                  -
                </button>
              </div>
            ))}
          </div>

          {/* <-------------- Instructor Details --------------> */}
          <h1 className="py-3 mt-6">Instructor for this course</h1>
          <div className="w-full sm:flex items-center justify-start gap-x-3 md:gap-x-6  lg:gap-x-10 mt-4">
            <div className="courseInputBox flex-center mt-5 sm:mt-0">
              <select
                name="instructorId"
                id="instructorId"
                className="w-fill-available outline-none bg-transparent"
                value={formData.instructorId}
                onChange={handleChange}
              >
                <option value="">Choose instructor </option>
                {instructors != null
                  ? instructors.map(({ fullname, _id }, index) => (
                      <option value={_id} key={index}>
                        {fullname}
                      </option>
                    ))
                  : ""}
              </select>
            </div>
          </div>

          {/* <-------------- Course content -------------->  */}
          <h1 className="py-3 mt-6">Course Content</h1>
          <div className="p-2 border rounded sm:pl-5 courseContentSection">
            {formData.syllabus.map((content, contentIndex) => (
              <div key={contentIndex}>
                <div className="w-full h-auto py-2 mt-2">
                  <div className="flex items-center justify-between w-11/12">
                    <h3 className="ml-2 py-1">Heading {contentIndex + 1}</h3>
                    {contentIndex !== 0 && (
                      <button
                        type="button"
                        className=" px-3 rounded py-2 bg-gray-100 transition-all hover:bg-gray-200"
                        onClick={() => removeHeading(contentIndex)}
                      >
                        Remove section
                      </button>
                    )}
                  </div>
                  <div className="courseInputBox sm:w-11/12 mt-4 flex items-center justify-between">
                    <input
                      type="text"
                      className="w-fill-available border-none outline-none bg-transparent"
                      required
                      placeholder="Enter heading name here"
                      name="heading"
                      value={content.heading}
                      onChange={(e) =>
                        updateHeading(contentIndex, e.target.value)
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full h-auto py-2 mt-2">
                    <h3 className="ml-2 py-1">Topics</h3>

                    {content.topics.map((topic, topicIndex) => (
                      <div
                        className="courseInputBox sm:w-11/12 mt-4 flex items-center justify-between"
                        key={topicIndex}
                      >
                        <input
                          type="text"
                          className="w-fill-available border-none outline-none bg-transparent"
                          required
                          placeholder="Enter topic here"
                          name="topics"
                          value={topic}
                          onChange={(e) =>
                            updateTopic(
                              contentIndex,
                              topicIndex,
                              e.target.value
                            )
                          }
                        />
                        {topicIndex !== 0 && (
                          <span
                            className="text-xl font-bold cursor-pointer text-gray-400 ml-3"
                            onClick={() =>
                              removeTopic(contentIndex, topicIndex)
                            }
                          >
                            -
                          </span>
                        )}
                        <span
                          className="text-xl font-bold cursor-pointer text-gray-400 ml-3"
                          onClick={() => addTopic(contentIndex)}
                        >
                          +
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <span
              className="h-10 cursor-pointer w-10 rounded-xl flex-center bg-gray-100 transition-all my-2 text-2xl font-bold text-gray-400 hover:bg-gray-200 hover:shadow hover:shadow-gray-300"
              onClick={addHeading}
            >
              +
            </span>
          </div>

          {/* <------------- Course Long Description -------------> */}
          <h1 className="py-3 mt-6">Course long description</h1>
          <div className="bigTextarea sm:flex items-center justify-start gap-x-3 md:gap-x-6  lg:gap-x-10 mt-0">
            <div className=" resize-none flex-center  w-full">
              <textarea
                placeholder="Enter course long descriptoin here"
                className="w-fill-available bg-transparent border-none outline-none py-1 h-40"
                name="longDesc"
                required
                value={formData.longDesc}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              className="px-5 transition-all shadow-md hover:shadow-lg hover:shadow-slate-500 shadow-slate-400 py-2 mr-2 text-white rounded"
              name="submit"
              type="submit"
              style={{
                background:
                  "repeating-linear-gradient(45deg, rgb(13, 69, 97), rgb(158, 158, 158) 100px)",
              }}
            >
              {loading ? "Updating" : "Update"}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default UpdateCourseForm;
