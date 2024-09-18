import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMaterialHeading } from "../../../../../features/admin/MaterialHeading/materialHeadingSlice";

const MaterialSidebar = ({ categories, onCategorySelect }) => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const materialHeading = fetch("/api/v1/instructor/materials-heading");
    materialHeading
      .then((value) => {
        return value.json();
      })
      .then((response) => {
        return setData(response);
      })
      .catch((error) => {
        return setData(error);
      });
  }, []);

    const handleClick = (name) => {
    dispatch(setMaterialHeading(name));
  };

  return (
    <>
      <div
        className="hidden md:block relative px-5 py-8 md:w-44 lg:w-64 md:h-full bg-blue-400"
        style={{ background: "#E7E7E7" }}
      >
        <Link to="/dashboard/instructor/features/materials">
          <h1
            className="text-xl font-bold py-2 ml-3"
            style={{ color: "#464646" }}
          >
            Materials
          </h1>
        </Link>
        <ul className="ordered_list mt-5 ">
          {data != null
            ? data.map(({ _id, name }) => (
                <Link
                  to={`/dashboard/instructor/features/materials/${_id}/show`}
                  key={_id}
                >
                  {" "}
                  <li
                    className={`my-2 ordered_list ${
                      location.pathname.includes(_id)
                        ? "active-ordered_list"
                        : ""
                    }`}
                    onClick={() => handleClick(name)}
                  >
                    {name}
                  </li>
                </Link>
              ))
            : "Loading..."}
        </ul>
        <div className="w-11/12 mx-auto absolute bottom-10 flex justify-end items-end ">
          <Link to="/dashboard/instructor/features/materials/headings">
            <button className="material-sm mr-7">
              Create <span className="ml-1">+</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MaterialSidebar;
