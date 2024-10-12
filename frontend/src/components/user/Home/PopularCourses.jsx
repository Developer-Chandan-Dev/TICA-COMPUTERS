import { Link } from "react-router-dom";
import PopularCourseBox from "./PopularCourseBox";
import Spinner from "../../utility/Spinner";
import useFetchData from "../../../hooks/utils/useFetchData";

const PopularCourses = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const {
    data = [],
    error,
    loading,
  } = useFetchData(`${VITE_API_URL}/api/v1/instructor/course/home/data`);
  console.log(data);

  return (
    <>
      <div className="py-5 w-full bg-white">
        <h1 className="text-2xl sm:text-3xl font-medium text-center px-3 py-2 after:w-auto sm:after:w-72 md:after:w-96 after:mx-auto after:h-1 after:rounded-lg after:mt-5 after:bg-red-500 after:block">
          Popular Courses with Certificate
        </h1>

        <div className="items-center flex flex-wrap my-10 gap-4 px-3 popularCourses mx-auto text-center">
          {loading && <Spinner />}
          {error && <p className="text-red-600">{error}</p>}
          {Array.isArray(data) && data.length > 0 && data !== null ? (
            data.map((data, index) => (
              <PopularCourseBox
                key={index}
                id={data._id}
                courseFullName={data.courseFullName}
                courseShortName={data.courseShortName}
                category={data.category}
                duration={data.duration}
                mainTopics={data.mainTopics}
                coursePic={data.coursePic}
              />
            ))
          ) : (
            <h1>No Popular courses found</h1>
          )}
        </div>

        <div className="w-11/12 mx-auto flex justify-center py-4">
          <Link to="/courses">
            <button className="sm">Explore more...</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
