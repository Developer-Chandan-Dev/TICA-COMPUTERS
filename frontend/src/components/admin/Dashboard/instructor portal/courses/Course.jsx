/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import CourseInfo from "./CourseInfo";
import Spinner from "../../../../utility/Spinner";
import useHandleDeletewithSweetAlert from "../../../../../hooks/admin/instructor portal/useHandleDeletewithSweetAlert";
import EmptyBox from "../../../../utility/EmptyBox";

const Course = ({ searchTerm }) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);

  const { handleDelete } = useHandleDeletewithSweetAlert();

  useEffect(() => {
    setLoading(true);
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${VITE_API_URL}/api/v1/instructor/course/`,
          {
            params: {
              search: searchTerm,
            },
          }
        );
        const data = response.data;
        if (!data) {
          setError("Data not found");
        }
        if (data.error) {
          setError(data.error);
        } else {
          const ids = []; // Initialize an array to hold the IDs

          // Iterate through each course
          data.forEach((element) => {
            if (element.showOnHome) {
              ids.push(element._id);
            }
          });
          setCheckedIds(ids);
          setLoading(false);
          return setData(data);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
        setLoading(false);
      }
    };
    fetchCourses();
  }, [searchTerm]);

  const handleSetOnHome = async (objectId, boolean) => {
    // Set Course on Home page
    setLoading(true);
    try {
      const res = await fetch(
        `${VITE_API_URL}/api/v1/instructor/course/home-data/${objectId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({
            showOnHome: boolean,
          }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);

        // If this material is not added on home page then add on home page
        if (!checkedIds.includes(objectId)) {
          const updatedCheckedIds = [...checkedIds, objectId];
          setCheckedIds(updatedCheckedIds);
        } else if (checkedIds.includes(objectId)) {
          // If this material is already on home page then remove from home page
          const index = checkedIds.indexOf(objectId);
          checkedIds.splice(index, 1);
          const updatedCheckedIds = checkedIds.filter(
            (checkedId) => checkedId !== objectId
          );
          setCheckedIds(updatedCheckedIds);
        }
      } else {
        toast.error(data.err);
      }

      setLoading(false);
      return data;
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCourseDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${VITE_API_URL}/api/v1/instructor/course/${id}`)
          .then(() => {
            setData(data.filter((item) => item._id !== id));

            Swal.fire("Deleted!", "Your file has been deleted", "success");
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "There was an error delete your file.",
              "error"
            );
          });
      }
    });
  };

  return (
    <>
      {console.log(loading)}
      {loading && (
        <div className="w-full h-[350px] flex-center ">
          <Spinner />
        </div>
      )}
      {Array.isArray(data) && data.length > 0 && data != null
        ? data.map(
            ({
              _id,
              courseFullName,
              duration,
              mainTopics,
              courseShortName,
              coursePic,
              showOnHome,
            }) => (
              <CourseInfo
                key={_id}
                id={_id}
                courseFullName={courseFullName}
                duration={duration}
                mainTopics={mainTopics}
                courseShortName={courseShortName}
                coursePic={coursePic}
                showOnHome={showOnHome}
                isChecked={checkedIds.includes(_id)}
                onCheckBoxChange={handleSetOnHome}
                onDelete={handleCourseDelete}
              />
            )
          )
        : // <p className="text-2xl">Loading...</p>
          !loading && <EmptyBox />}
    </>
  );
};

export default Course;
