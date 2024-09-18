import "./style.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EnquiryForm from "./EnquiryForm";

const WelcomeSection = () => {
  useGSAP(() => {
    gsap.to(".contentSection", {
      opacity: 1,
      x: 0,
      delay: 1,
      duration: 1,
    });
  }, []);

  return (
    <>
      <section className="w-full h-auto py-3 px-0 sm:p-3 text-sm">
        <div className="w-full sm:w-11/12 mx-auto py-10 flex items-start justify-between welcomeSection flex-wrap">
          <div
            className="contentSection w-3/5 px-3 sm:px-0 opacity-0 -translate-x-20"
          >
            <h1 className="text-3xl heading my-1 font-medium">WELCOME TO TICA COMPUTERS</h1>
            <h4 className="text-sm heading-bottom mt-3 after:block after:w-24 after:rounded-full after:h-1 after:bg-red-500 after:mt-2">
              TECHNOSOFT INSTITUTE OF COMPUTER ACCOUNTING
            </h4>
            <div
              className="pt-6 text-sm text-gray-500"
              style={{ lineHeight: "22px" }}
            >
              <p>
                Sanjay Gandhi Computer Saksharta Mission Trust has been
                registered under the Public Trust Act 1882 (Reg.No.2327) from
                Govt. Of India N.C.T., Delhi working in different fields of
                Programme & Commercial Training Organizatio nis also certified
                by ISO 90001: 2015 Org.
              </p>
              <br />
              <p>
                Through the Govt. is taking major steps in influencing the
                computer education in the country but the participation of NGO's
                in spreading this vital utility technical education can't be
                deined. After a thought survey it was found that there is a lot
                of awareness of computers even in the remotest of areas but the
                general public can't be equipped with the art firstly due to
                unaffordable charges load down by big private computer centers
                and also that the general public have some misconception in th
                eir mind about learning computers.
              </p>
            </div>
            <div className="flex flex-wrap my-4 items-center gap-x-3 gap-y-6 letter-space-5">
              <div className="flex text-sm text-gray-500 w-72 justify-start">
                <div className="w-12 h-12 rounded-full bg-red-400 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    height="18"
                    width="18"
                    className="opacity-70"
                    fill="white"
                  >
                    <path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z" />
                  </svg>
                </div>
                <span className="ml-5">MISSION & VISION</span>
              </div>
              <div className="flex text-sm text-gray-500 w-72 justify-start">
                <div
                  className="w-12 h-12 rounded-full flex justify-center items-center"
                  style={{ background: "#0d4561" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    height="18"
                    className=" opacity-70"
                    width="18"
                    fill="white"
                  >
                    <path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM192 0C90.02 .3203 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.18 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.18 35.69-72.61 52.18-91.45C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM176 80C131.9 80 96 115.9 96 160c0 8.844 7.156 16 16 16S128 168.8 128 160c0-26.47 21.53-48 48-48c8.844 0 16-7.148 16-15.99S184.8 80 176 80z" />
                  </svg>
                </div>
                <span className="ml-5">OUR DREAM</span>
              </div>
              <div className="flex text-sm text-gray-500 w-72 justify-start">
                <div
                  className="w-12 h-12 rounded-full flex justify-center items-center"
                  style={{ background: "#0d4561" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    height="18"
                    width="18"
                    className="opacity-70"
                    fill="white"
                  >
                    <path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z" />
                  </svg>
                </div>
                <span className="ml-5">MISSION & VISION</span>
              </div>
              <div className="flex text-sm text-gray-500 w-72 justify-start">
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-red-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    height="18"
                    className=" opacity-70"
                    width="18"
                    fill="white"
                  >
                    <path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM192 0C90.02 .3203 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.18 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.18 35.69-72.61 52.18-91.45C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM176 80C131.9 80 96 115.9 96 160c0 8.844 7.156 16 16 16S128 168.8 128 160c0-26.47 21.53-48 48-48c8.844 0 16-7.148 16-15.99S184.8 80 176 80z" />
                  </svg>
                </div>
                <span className="ml-5">OUR DREAM</span>
              </div>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
