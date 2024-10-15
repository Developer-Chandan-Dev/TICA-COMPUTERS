import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./style.css";
import AboutDeveloper from "./AboutDeveloper";
import useFetchData from "../../../hooks/utils/useFetchData";
import Spinner from "../../utility/Spinner";
import aboutImg from "../../../assets/3.jpg";

const AboutContainer = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  useGSAP(() => {
    gsap.to(".aboutSite div", {
      opacity: 1,
      x: 0,
      duration: 2,
    });
    gsap.to(".aboutSite img", {
      opacity: 1,
      duration: 2,
      x: 0,
    });
  }, []);


  const { data, error, loading } = useFetchData(
    `${VITE_API_URL}/api/v1/user/about-data`
  );

  console.log(data, error, loading);
  return (
    <>
      <section className="w-full h-auto mx-auto py-5 relative text-sm">
        <div className="flex items-center py-5 w-4/5 h-96 mx-auto aboutSite">
          <div className="sm:pr-10 pr-2 aboutSite-content opacity-0 -translate-x-40">
            <h1 className="py-2 text-3xl">
              <b>This is TICA COMPUTERS</b>
            </h1>
            <p>
              TICA COMPUTERS is a computer institute provides you numbers of
              computer courses and teach you from scratch everything. You can
              choose and register according you preference in any course.
            </p>
            <br />
            <p>
              At TICA we are an a mission to simplify the education of computer
              courses and made it easy for students to learn about computer
              coureses. We teach students how to work with computer, software.
            </p>
            <br />
            <p>
              And you know what? This work is important, because we are all
              customers. We believe life is a little bit better when the
              customer experiences we all share are painless frictionless and
              more helpful.
            </p>
          </div>
          <img
            src={aboutImg}
            className="h-72 opacity-0 translate-x-40"
            alt=""
          />
        </div>

        <div className="w-3/4 sm:w-1/2 my-7 h-56 mx-auto  flex items-center justify-around">
          {loading && <Spinner />}
          {error && <p>{error}</p>}

          <div className="p-4 flex-center flex-col">
            <h1 className="text-5xl text-blue-500">
              <b>
                {data && data !== null ? (
                  data.totalStudents + '+'
                ) : (
                  <p className="text-base">Not any students found</p>
                )}
                
              </b>
            </h1>
            <h3 className="text-lg text-teal-800 mt-2">
              <b>Students</b>
            </h3>
          </div>
          <div className="p-4 flex-center flex-col">
            <h1 className="text-3xl text-green-500">
              <b>
                {data !== null ? (
                  data.totalCourses + '+'
                ) : (
                  <p className="text-base">Not any course found</p>
                )}
                
              </b>
            </h1>
            <h3 className="text-lg text-teal-800 mt-2">
              <b>Courses</b>
            </h3>
          </div>
        </div>

        <AboutDeveloper />
      </section>
    </>
  );
};

export default AboutContainer;
