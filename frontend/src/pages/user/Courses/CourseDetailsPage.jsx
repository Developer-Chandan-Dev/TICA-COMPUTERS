import "./style.css";
import { Link, useParams } from "react-router-dom";
import {
  WhatYouLearn,
  CourseContent,
  CourseInstructor,
  CourseRequirements,
  CourseDesc,
  MainTopics,
} from "../../../components/user/Courses/index.js";
import Navbar from "../../../components/user/Navbar.jsx";
import Footer from "../../../components/user/Footer.jsx";
import Spinner from "../../../components/utility/Spinner.jsx";
import useFetchDataUsingId from "../../../hooks/utils/useFetchDataUsingId.js";

const CourseDetailsPage = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const { courseName } = useParams();
  const { data, error, loading } = useFetchDataUsingId(
    `${VITE_API_URL}/api/v1/user/course`,
    courseName
  );

  console.log(data);

  return (
    <>
      <section className="flex h-screen w-full mx-auto pageControl">
        <section className="overflow-auto w-fill-available">
          <Navbar />
          {!error ? loading && <Spinner /> : ""}

          {error && (
            <div className="w-full text-center h-96 flex-center">{error}</div>
          )}
          {data != null ? (
            <section className="w-full h-auto bg-white relative courseDetailsMainContainer">
              {/* Course Banner */}
              <section
                className="courseBanner h-auto w-full sm:h-96 "
                style={{ background: "#f8f5ee" }}
              >
                <div className="p-5 pt-14 sm:w-4/5 md:w-3/4 xl:w-2/3 text-center mx-auto">
                  <h1 className="text-2xl px-2 py-2 md:text-3xl text-gray-600">
                    <b>{data.courseFullName}</b>
                  </h1>
                  <h4 className="text-base sm:text-lg py-2 px-2 md:py-4 text-gray-600">
                    {data.shortDesc}
                  </h4>
                  <h6>
                    <span className="text-cyan-600 ">100 +</span> Students
                  </h6>
                  <h6 className="text-gray-500 py-2 px-2 text-sm sm:text-base">
                    Created by{" "}
                    <Link
                      className="text-violet-700 hover:text-violet-900 hover:underline"
                      to={`/courses/instructor/details/${data.instructor.instructorId}`}
                    >
                      {data.instructor.instructorName}
                    </Link>
                  </h6>
                  <small>Last updated 2024 in Hindi</small>
                </div>
              </section>

              <section className="flex items-start justify-between relative w-full courseDetailsContainer p-2">
                <div className="w-full relative">
                  <WhatYouLearn whatYouLearn={data.whatYouLearn} fees={data.fees} duration={data.duration} courseShortName={data.courseShortName} />
                  <MainTopics mainTopics={data.mainTopics} />
                  <CourseContent syllabus={data.syllabus} />
                  <CourseRequirements prerequisites={data.prerequisites} />
                  <CourseDesc longDesc={data.longDesc} />
                  <CourseInstructor instructor={data.instructor} />
                </div>
              </section>
            </section>
          ) : (
            <div className="w-full text-center py-10">
              Course details not found{" "}
            </div>
          )}

          <Footer />
        </section>
      </section>
    </>
  );
};

export default CourseDetailsPage;
