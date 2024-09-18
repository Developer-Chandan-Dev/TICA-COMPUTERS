/* eslint-disable react/prop-types */
import gsap from "gsap";
import { useDispatch } from "react-redux";
import { useGSAP } from "@gsap/react";
import { formatDate } from "../dateUtils";
import { setEnquiryData } from "../../../../../features/admin/EnquiryData/enquiryDataSlice";
import userIcon from "../../../../../assets/images/user.png";

const EnquiryInfo = ({
  id,
  name,
  email,
  phone,
  address,
  createdAt,
  message,
  arrow,
  onDelete,
  data,
  setData,
  userPic,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      setEnquiryData({ name, email, phone, address, createdAt, message })
    );
  };

  useGSAP(() => {
    gsap.to(".timeline-container", {
      opacity: 1,
      x: 0,
      delay: 0.5,
      stagger: 0.5,
      zIndex: 10,
    });
  }, []);
  return (
    <>
      <div
        className={`timeline-container ${arrow}-timeline-container opacity-0  ${
          arrow === "left" ? "-translate-x-20" : "translate-x-20"
        }`}
        onClick={handleClick}
      >
        <img src={userPic ? userPic : userIcon} />
        {/* <span className="w-10 h-10 border-2 border-slate-200 rounded-full"></span> */}
        <div className="text-box active-text-box">
          <div className="flex items-center justify-between">
            <h2 className=" text-base" style={{ color: "#00aeef" }}>
              <b>{name}</b>
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-trash3 deleteIcon"
              viewBox="0 0 16 16"
              title="Delete"
              onClick={() =>
                onDelete(
                  id,
                  "/api/v1/instructor/enquiry",
                  setData,
                  data,
                  "enquiry"
                )
              }
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
          </div>
          <small className="mb-2" style={{ color: "#f95853" }}>
            {formatDate(createdAt)}
          </small>
          <p>
            {message.length > 120 ? message.slice(0, 120) + "..." : message}
          </p>
          <span className={`${arrow}-timeline-container-arrow`}></span>
        </div>
      </div>
    </>
  );
};

export default EnquiryInfo;
