import { useEffect, useState } from "react";
import MaterialBox from "./MaterialBox";
import MaterialSidebar from "./MaterialSidebar";
import { useParams } from "react-router-dom";
import Spinner from "../../utility/Spinner";

const MaterialContainer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const id = useParams();
  useEffect(() => {
    setLoading(true);
    const allMaterialsData = fetch(`/api/v1/instructor/materials`);
    allMaterialsData
      .then((value) => {
        return value.json();
      })
      .then((response) => {
        if (
          !id ||
          id.materialHeadingId === undefined ||
          id.materialHeadingId == {}
        ) {
          setLoading(false);
          setError(null);
          return setData(response);
        }
        const newArray = [];
        response.filter((item) => {
          // console.log(item.type, id.materialHeadingId);
          if (item.type === id.materialHeadingId) {
            return newArray.push(item);
          }
        });
        setData(newArray);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <section className="w-full h-auto mx-auto pt-5 relative bg-white text-sm pb-5">
      <div className="w-full sm:w-11/12 h-auto bg-white mx-auto relative">
        <h1 className="text-center py-3 text-2xl after:w-40 after:mx-auto after:h-1 after:rounded-lg after:mt-2 after:bg-red-500 after:block font-bold">
          Our Materials
        </h1>
        <div className="w-full h-auto p-1 flex items-start relative overflow-y-auto overflow-x-hidden">
          <MaterialSidebar />
          <div className="w-full sm:w-[500px] md:w-[80%] h-[600px] py-3 px-3 overflow-y-auto gap-x-4 gap-y-4 flex flex-wrap">
            {error && <p>{error}</p>}
            {loading && <Spinner />}
            {data != null ? (
              data.map((data, index) => (
                <MaterialBox
                  key={index}
                  id={data._id}
                  title={data.title}
                  author={data.author}
                  desc={data.desc}
                  tag={data.tag}
                  type={data.type}
                  fileUrl={data.fileUrl}
                  fileBanner={data.fileBanner}
                />
              ))
            ) : (
              <h2>No materials found!</h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialContainer;
