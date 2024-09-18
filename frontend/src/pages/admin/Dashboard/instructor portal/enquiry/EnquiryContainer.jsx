import "./style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";
import Enquiry from "../../../../../components/admin/Dashboard/instructor portal/enquiry/Enquiry";
import EnquiryDetails from "../../../../../components/admin/Dashboard/instructor portal/enquiry/EnquiryDetails";

const EnquiryContainer = () => {
  const data = useSelector((state) => state.enquiryData.value);

  useGSAP(() => {
    if (data != null) {
      gsap.fromTo(
        ".enquiryDetailsBox",
        {
          y: 80,
          display: "none",
        },
        {
          y: 0,
          display: "block",
        }
      );
    }
  }, [data]);

  const closeEnquryDetails = () => {
    gsap.fromTo(
      ".enquiryDetailsBox",
      {
        y: 0,
        display: "block",
      },
      {
        y: 80,
        display: "none",
      }
    );
  };

  return (
    <>
      <section className="w-full sm:w-11/12 relative mx-auto pt-5 pb-0 ">
        <div className="flex items-start justify-between gap-x-6 w-full relative enquiryContainer h-[530px]">
          <div className="bg-white shadow-md shadow-slate-200 enquiryBox w-full lg:w-2/3 relative">
            <h1 className="py-4 px-6 text-gray-500 border-b">Enquires</h1>
            <div className="enquiryContainer sm:overflow-y-auto">
              {/* Timeline start */}

              <div className="timeline overflow-auto h-[450px] pb-3 ">
                <Enquiry />
              </div>

              {/* Timeline end */}
            </div>
          </div>
          <div
            className={`enquiryDetailsBox bg-white h-96 absolute lg:fixed right-5 w-80 z-10 shadow-xl hidden shadow-gray-500 rounded-xl ${
              data != null ? "block" : "hidden"
            } lg:fixed lg:block lg:translate-y-0 lg:shadow-md lg:shadow-slate-200 lg:rounded-none`}
          >
            <div className="flex items-center justify-between text-base text-gray-600 border-b font-bold">
              <h1 className="py-4 px-5 ">Enquiry details</h1>
              <div
                className="w-8 h-8 mr-3 bg-red-50 cursor-pointer flex items-center justify-center transition-all hover:bg-red-200 lg:hidden"
                onClick={closeEnquryDetails}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 320 512"
                  fill="gray"
                  className="transition-all hover:fill-white"
                >
                  {" "}
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </div>
            </div>
            <EnquiryDetails />
          </div>
        </div>
      </section>
    </>
  );
};

export default EnquiryContainer;
