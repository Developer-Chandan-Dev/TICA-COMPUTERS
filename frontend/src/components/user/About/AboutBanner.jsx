import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  useGSAP(() => {
    gsap.to(".aboutBannerText", {
      y: 0,
      opacity: 1,
      stagger: 0.5,
    });
    gsap.to(".aboutBannerImg", {
      x: 0,
      opacity: 1,
      stagger: 0.5,
    });
  }, []);

  return (
    <>
      <section
        className="w-full flex items-center banner text-sm"
        style={{
          background: "#e3f4fe",
          height: "500px",
          borderRadius: "0 0 120px 0",
        }}
      >
        <div className="w-11/12 mx-auto flex items-center justify-between aboutBannerflex">
          <div className="w-5/12 aboutBannerImg opacity-0 translate-x-20">
            <h4
              className="text-sm opacity-0 translate-y-20 aboutBannerText font-medium"
              id=""
              style={{ color: "#60bcd8" }}
            >
              KNOW THAT WHO WE ARE?
            </h4>
            <h1
              className="text-4xl my-3 aboutText aboutBannerText opacity-0 translate-y-20"
              style={{ fontFamily: "Cooper Black" }}
            >
              Get a Chance to Know About Us and{" "}
              <span style={{ color: "#2e8fbf" }}>Relive Our Journey</span>
            </h1>
            <p className="aboutBannerText opacity-0 translate-y-20">
              Here, we are providing lots of computer courses for you. You can
              register for any course and learn courses from scratch. If you
              don't familiar with computer so don't worry we are here for you,
              If you familiar with computer then it's great.
            </p>
            <Link to="/">
              {" "}
              <button className="px-5 aboutBannerText opacity-0 translate-y-20 py-2 rounded-xl border-2 transition-all bg-blue-300 text-white border-blue-300 hover:text-blue-400 hover:bg-transparent mt-5  mr-1">
                Send a Enquiry
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-5 aboutBannerText opacity-0 translate-y-20 py-2 rounded-xl border-2 transition-all border-blue-300 text-blue-400 mt-1 hover:bg-blue-300 hover:text-white">
                Contact Us
              </button>
            </Link>
          </div>
          <div className=" w-5/12 aboutBannerImg opacity-0 translate-x-20">
            <img src="/src/assets/images/courses.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
