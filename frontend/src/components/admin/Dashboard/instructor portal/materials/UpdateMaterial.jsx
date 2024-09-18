import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MaterialFormUpdate from "./MaterialFormUpdate";

const UpdateMaterial = () => {
  const [data, setData] = useState(null); // /api/v1/instructor/materials/

  const { materialId } = useParams();
  console.log(materialId);

  useEffect(() => {
    const allMaterialsData = fetch(
      `/api/v1/instructor/materials/${materialId}`
    );
    allMaterialsData
      .then((value) => {
        return value.json();
      })
      .then((response) => {
        return setData(response);
      });
  }, [materialId]);
  console.log(data);

  return (
    <>
      {data != null ? (
        <MaterialFormUpdate
          id={data._id}
          title={data.title}
          author={data.author}
          desc={data.desc}
          createdAt={data.createdAt}
          fileUrl={data.fileUrl}
          fileBanner={data.fileBanner}
        />
      ) : (
        <h2 className="pl-2 text-2xl font-semibold">Loading...</h2>
      )}
    </>
  );
};

export default UpdateMaterial;
