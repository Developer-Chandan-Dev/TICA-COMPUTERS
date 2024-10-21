import { useState, useEffect } from "react";
import MaterialsBox from "./MaterialsBox";
import { toast } from "react-toastify";
import Spinner from "../../../../utility/Spinner";
import EmptyBox from "../../../../utility/EmptyBox";

const AllMaterials = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);

  useEffect(() => {
    setLoading(true);
    const allMaterialsData = fetch(
      `${VITE_API_URL}/api/v1/instructor/materials`
    );
    allMaterialsData
      .then((value) => {
        return value.json();
      })
      .then((response) => {
        setData(response);
        setLoading(false);
        const materialShowOnHome = response;
        // Initialize an array to hold the IDs
        const ids = [];

        // Iterate through each material
        if (materialShowOnHome)
          materialShowOnHome.forEach((element) => {
            if (element.showOnHome) {
              ids.push(element._id);
            }
          });
        setCheckedIds(ids);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setData(null);
      });
  }, []);

  const handleSetOnHome = async (objectId, boolean) => {
    // set material on Home page
    setLoading(true);
    try {
      const res = await fetch(
        `${VITE_API_URL}/api/v1/instructor/materials/home-data/${objectId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({
            showOnHome: boolean,
          }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);

        // If this material is not added on home page then add on home page
        if (!checkedIds.includes(objectId)) {
          const updatedCheckedIds = [...checkedIds, objectId];
          setCheckedIds(updatedCheckedIds);
        } else if (checkedIds.includes(objectId)) {
          // If this material is already on home page then remove from home page
          const index = checkedIds.indexOf(objectId);
          checkedIds.splice(index, 1);
          const updatedCheckedIds = checkedIds.filter(
            (checkedId) => checkedId !== objectId
          );
          setCheckedIds(updatedCheckedIds);
        }
      } else {
        toast.error(data.err);
      }

      setLoading(false);
      return data;
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center flex-wrap gap-3 ">
        {loading && <Spinner />}
        {/* {err} */}
        {Array.isArray(data) && data.length > 0 && data != null
          ? data.map((data, index) => (
              <MaterialsBox
                key={index}
                id={data._id}
                title={data.title}
                author={data.author}
                desc={data.desc}
                tag={data.tag}
                type={data.type}
                fileBanner={data.fileBanner}
                createdAt={data.createdAt}
                isChecked={checkedIds.includes(data._id)}
                onCheckBoxChange={handleSetOnHome}
              />
            ))
          : // <h2 className="pl-2 text-2xl font-semibold">Loading...</h2>
            !loading && <EmptyBox boxWidth="500px" boxHeight="100%" />}
      </div>
    </>
  );
};

export default AllMaterials;
