import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const WhatYouLearn = ({ whatYouLearn, fees, duration,courseShortName }) => {
  return (
    <div className="w-full pt-6 sm:w-11/12 flex justify-between flex-wrap-reverse gap-x-4 gap-y-4 mx-auto">
      <div className="pt-6 border px-6 pb-4 mr-10 whatYouLearn w-[60%] my-10">
        <h2 className="text-xl py-2 pl-1 font-semibold text-gray-500">
          What you&apos;ll learn
        </h2>

        <div className="flex items-center flex-wrap w-full">
          {whatYouLearn != null
            ? whatYouLearn.map((learn, index) => (
                <div
                  className="topicTextBox w-96 h-auto py-2 px-2 flex "
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="30"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z" />
                  </svg>
                  <p className=" pl-3 text-sm text-gray-800">{learn}</p>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div>
        <div className="w-80 h-80 mt-6 border rounded drop-shadow sm:w-[300px] flex-center flex-col ">
          <h1 className="text-xl font-semibold">Duration and Fees</h1>
          <div className="w-64 h-[6px] mt-3 bg-[#104d6b] rounded-lg"></div>
          <ul className="w-11/12 flex-center flex-col gap-y-1 mt-3 mb-2">
              <li className="flex w-11/12 items-center justify-between"><span>Duration</span> <span>: {duration}</span> </li>
              <li className="flex w-11/12 items-center justify-between"><span>Total Fees</span><span>: {fees - 1000}</span> </li>
              <li className="flex w-11/12 items-center justify-between"><span>Registration Fees</span> <span>: 1000</span> </li>
          </ul>
          <h2 className="text-lg font-semibold mt-3 mb-2">Our Plans</h2>
          <ul className="w-11/12 flex-center flex-col gap-y-1 ">
              <li className="flex w-11/12 items-center justify-between"><span>One Time Pay</span> <span>: {fees - 500}</span> </li>
              <li className="flex w-11/12 items-center justify-between"><span>Two Time Pay</span><span>: {fees - 300}</span> </li>
              <li className="flex w-11/12 items-center justify-between"><span>Monthly Pay</span> <span>: 400</span> </li>
          </ul>
        </div>
        <Link to={`/courses/register/${courseShortName}`}>
          <div className="w-80 px-4 mt-4 h-10 sm:w-[300px] flex-center sm !rounded">
            <span>Enroll Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WhatYouLearn;
