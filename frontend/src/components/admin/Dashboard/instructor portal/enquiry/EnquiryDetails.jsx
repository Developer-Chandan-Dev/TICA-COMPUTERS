// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";
import { formatDate } from "../dateUtils";

const EnquiryDetails = () => {
  const data = useSelector((state) => state.enquiryData.value);
  return (
    <>
      {data != null ? (
        <div
          className="enquiryDetails px-6 py-2 overflow-y-auto block text-sm"
          style={{ height: "310px"}}
        >
          <h1 className="text-lg my-2 font-bold relative before:absolute before:-left-2 before:w-1 before:block before:h-7 before:rounded-full before:bg-red-200">
            {data.name}
          </h1>
          <div className="text-sm mb-1 relative before:absolute before:-left-2 before:w-1 before:block before:h-24 before:rounded-full before:bg-blue-200">
            <div className="flex my-1">
              <p className=" text-wrap">
                <span className="mr-2 font-semibold">Email : </span> {data.email}
              </p>
            </div>
            <div className="flex my-1">
              <p className="text-wrap">
                <span className="mr-2 font-semibold">Phone : </span>{" "}
                {data.phone}
              </p>
            </div>
            <div className="flex my-1">
              <p className="text-wrap">
                <span className="mr-2 font-semibold">Address : </span>{" "}
                {data.address}
              </p>
            </div>
          </div>

          <small className="">{formatDate(data.createdAt)}</small>
          <p className="text-sm text-gray-600 pr-5 pt-3 border-t">
            {data.message}
          </p>
        </div>
      ) : (
        <p className="text-sm pl-5 pt-5">
          Please click on any enquiry to see all details.
        </p>
      )}
    </>
  );
};

export default EnquiryDetails;
