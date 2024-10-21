import "./style.css";
import Course from "./Course";
import { Banner } from "../../../components/user/index";
import useFetchData from "../../../hooks/utils/useFetchData.js";
import Spinner from "../../utility/Spinner";
import EmptyBox from "../../utility/EmptyBox.jsx";

const CourseContainer = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const { data, error, loading } = useFetchData(`${VITE_API_URL}/api/v1/user/course/`);

  return (
    <section
      className="w-full h-auto pb-4 text-sm"
      style={{ background: "#f8f5ee99" }}
    >
      <Banner
        title="Our Courses with Certificate for You"
        desc="Our all courses are here you can explore all courses and find out course according your requirment. If you are going to register for any course then first you need to know that what are you going to learn in this course. Who will taught you?"
      />
      <h1 className="text-center py-3 text-2xl after:w-40 after:mx-auto after:h-1 after:rounded-lg after:mt-2 after:bg-red-500 after:block font-bold">
        Our Courses
      </h1>

      <div className="card-container items-center flex flex-wrap w-11/12 mx-auto my-10 gap-4 px-3 ">
        <>
          {loading && <Spinner />}
          {error && <p className="text-red-500">{error}</p>}
          {Array.isArray(data) && data.length > 0 && data != null ? (
            data.map(
              ({
                _id,
                courseFullName,
                duration,
                mainTopics,
                courseShortName,
                category,
                coursePic,
              }) => (
                <Course
                  id={_id}
                  courseFullName={courseFullName}
                  duration={duration}
                  mainTopics={mainTopics}
                  courseShortName={courseShortName}
                  key={_id}
                  category={category}
                  coursePic={coursePic}
                />
              )
            )
          ) : (
            !loading && <EmptyBox/>
          )}
        </>
      </div>
    </section>
  );
};

export default CourseContainer;
