import { Link } from "react-router-dom";
import MaterialBox from "./MaterialBox";
import Spinner from "../../utility/Spinner";
import useFetchData from "../../../hooks/utils/useFetchData";
import EmptyBox from "../../utility/EmptyBox";

const MaterialsSection = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const {
    data = [],
    error,
    loading,
  } = useFetchData(`${VITE_API_URL}/api/v1/instructor/materials/home/data`);

  console.log(data);

  return (
    <>
      <div
        className="w-full sm:w-11/12 h-auto md:h-auto m-auto py-10 md:flex items-center justify-evenly flex-col bg-white"
        // style={{ background: "#f8f5ee99" }}
      >
        <h1 className=" text-3xl font-medium text-center px-3 py-2 after:w-56 after:mx-auto after:h-1 after:rounded-lg after:mt-5 after:bg-red-500 after:block">
          Materials
        </h1>
        <div className=" flex items-center flex-wrap gap-6 mt-10 mb-5 py-5 mx-auto px-3">
          {loading && <Spinner />}
          {error && <p className="text-red-500">{error}</p>}
          {Array.isArray(data) && data.length > 0 && data !== null ? (
            data.map((data, index) => (
              <MaterialBox
                key={index}
                id={data._id}
                title={data.title}
                tag={data.tag}
                desc={data.desc}
                fileUrl={data.fileUrl}
                fileBanner={data.fileBanner}
              />
            ))
          ) : (
            !loading && <EmptyBox/>
          )}
        </div>
        <div className="w-11/12 mx-auto flex justify-center py-4">
          <Link to="/materials">
            <button className="sm">Explore more...</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MaterialsSection;
