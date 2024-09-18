import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Banner = ({ title, desc }) => {
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
      className="w-full h-96 flex items-center justify-center"
      style={{ background: "#f8f5ee" }}
    >
      <div
        className="w-4/5 m-auto sm:max-w-md md:max-w-xl lg:max-w-2xl opacity-0 translate-y-10"
        id="banner-content"
      >
        <h1
          className="text-center text-2xl sm:text-3xl lg:px-10 md:text-4xl" id="title"
          style={{ fontFamily: "Cooper Black" }}
        >
          {title}
        </h1>
        <p className="py-5 text-center desc" id="desc">{desc}</p>
      </div>
    </section>
  );
};

export default Banner;
