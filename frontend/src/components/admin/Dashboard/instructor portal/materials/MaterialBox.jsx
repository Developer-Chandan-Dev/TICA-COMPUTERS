import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MaterialBox = ({
  id,
  title,
  desc,
  tag,
  fileBanner,
  type,
  onDelete,
  data,
  setData,
}) => {
  return (
    <div className=" w-[19rem] h-64 rounded-lg bg-[#F7F8F8] drop-shadow shadow-lg relative">
      <div className="absolute right-2 top-2 w-14 h-5 bg-white drop-shadow-sm flex-center">
        <span className="text-xs font-medium text-[#7A7A7A]">{tag}</span>{" "}
      </div>
      <div className="w-16 h-16 mx-auto mt-4 mb-4 bg-red-200 rounded-full overflow-hidden">
        <img src={fileBanner} alt="fileBanner" />
      </div>
      <div className="px-5 mx-auto text-center">
        <h2 className=" text-lg font-semibold text-[#7A7A7A]">{title}</h2>
        <p className=" text-[15px] text-[#A2A1A1] my-1">
          {desc.length > 50 ? desc.slice(0, 50) + "..." : desc}
        </p>
        <div className="mt-2">
          <Link
            to={`/dashboard/instructor/features/materials/${type}/update/${id}`}
          >
            <button type="button" className="material_btn mr-1">
              Edit
            </button>
          </Link>
          <button
            type="button"
            className="material_btn"
            onClick={() =>
              onDelete(
                id,
                "/api/v1/instructor/materials",
                setData,
                data,
                "material"
              )
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialBox;

MaterialBox.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  fileBanner: PropTypes.string.isRequired,
  type: PropTypes.func,
  onDelete: PropTypes.func,
  data: PropTypes.array,
  setData: PropTypes.func,
};

// MaterialBox.defaultProps = {
//   id: "materialId",
//   title: "Set title here",
//   desc: "Set description here",
//   tag: "Set tag name here",
//   fileBanner: "Set file banner here",
// };
