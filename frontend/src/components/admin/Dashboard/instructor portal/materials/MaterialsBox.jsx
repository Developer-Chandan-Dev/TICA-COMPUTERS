import { Link } from "react-router-dom";
import {PropTypes} from 'prop-types';

const MaterialsBox = ({
  id,
  title,
  author,
  desc,
  tag,
  type,
  fileUrl,
  fileBanner,
  isChecked,
  onCheckBoxChange,
}) => {
  const handleChange = () => {
    if (isChecked) {
      onCheckBoxChange(id, false);
    } else if (!isChecked) {
      onCheckBoxChange(id, true);
    }
  };

  return (
    <div className=" w-[19rem] h-64 rounded-lg bg-[#F7F8F8] drop-shadow shadow-lg relative">
      <div className="absolute left-2 top-2 w-8 h-6 flex-center">
        <input
          type="checkbox"
          name="check"
          id="check"
          className="w-5 h-5 cursor-pointer"
          checked={isChecked}
          onChange={handleChange}
        />
      </div>
      <div className="absolute right-2 top-2 w-14 h-5 bg-white drop-shadow-sm flex-center">
        <span className="text-xs font-medium text-[#7A7A7A]">{tag}</span>{" "}
      </div>
      <div className="w-16 h-16 mx-auto my-4 bg-red-200 rounded-full"></div>
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
          <button type="button" className="material_btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialsBox;

MaterialsBox.propTypes = {

}