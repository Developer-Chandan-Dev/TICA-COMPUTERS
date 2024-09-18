import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import { indianDate } from "../../admin/Dashboard/indianDate";
// import { formatDate } from "../../admin/Dashboard/instructor portal/dateUtils";

const Details = ({
  title,
  desc,
  author,
  tag,
  fileBanner,
  fileUrl,
}) => {
  return (
    <div className="w-full px-3 py-5 sm:w-11/12 mx-auto flex justify-evenly items-center gap-5 flex-wrap backdrop-brightness-105 mb-10 relative">
      <span className="absolute left-5 top-5 text-xs font-medium text-[#7A7A7A] shadow-md drop-shadow px-2 py-1">
        {tag}
      </span>
      <div className="w-96 h-96 flex items-center justify-center flex-col">
        <div className="w-56 h-56 rounded-full my-5 overflow-hidden backdrop-brightness-125 bg-orange-200">
          <img
            src={fileBanner}
            className="w-full h-full"
            alt="Material banner"
          />
        </div>
        <div className="py-4">
          <Link to={fileUrl} download={true}>
            <button
              type="button"
              className="material_btn backdrop-blur-xl flex items-center justify-between"
            >
              <span>Download</span>
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-4 h-[14px] ml-1"
                fill="gray"
              >
                <path
                  className="st0"
                  d="M13 8.5l-1.3-1.4L8.9 10V0H7.1v10L4.3 7.1 3 8.5l5 5zM3.6 14.1h8.8V16H3.6z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[700px] h-auto pb-10 sm:pb-4 sm:h-80 px-6 py-4 ">
        <h1 className="font-semibold text-xl my-2">{title}</h1>
        <div className="">
          <small>{author}</small>
          {/* <small className="ml-3 text-gray-500">{formatDate(createdAt)}</small> */}
          {/* <small className="ml-3 text-gray-500">{createdAt}</small> */}
        </div>
        <p className="desc text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Details;

Details.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  // fileBanner: PropTypes.string.isRequired,
};

Details.defaultProps = {
  title: "Set title here",
  desc: "Set description here",
  author: "Set author name here",
  tag: "Set tag name here",
};
