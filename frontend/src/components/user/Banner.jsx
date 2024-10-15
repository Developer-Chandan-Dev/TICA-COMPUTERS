/* eslint-disable react/prop-types */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Banner = ({
  title,
  desc,
  className = "bg-[#f8f5ee]",
  text = "text-gray-700",
}) => {
  useGSAP(() => {
    gsap.to("#banner-content", {
      opacity: 1,
      duration: 1,
      delay: 0.1,
      y: 0,
      ease: "back.inOut",
    });
  }, []);

  return (
    <section
      className={`w-full h-[320px] sm:h-[350px] md:h-[370px] lg:h-[390px] xl:h-[430px] flex items-center ${text} drop-shadow justify-center ${className}`}
    >
      <div
        className="w-4/5 m-auto sm:max-w-md md:max-w-xl lg:max-w-2xl opacity-0 translate-y-10"
        id="banner-content"
      >
        <h1
          className="text-center text-2xl sm:text-3xl lg:px-10 md:text-4xl font-bold"
          id="title"
        >
          {title}
        </h1>
        <p className="py-5 text-center " id="desc">
          {desc}
        </p>
      </div>
    </section>
  );
};

export default Banner;
