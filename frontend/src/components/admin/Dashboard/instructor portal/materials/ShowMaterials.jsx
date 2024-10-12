import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MaterialBox from "./MaterialBox";
import useHandleDeletewithSweetAlert from "../../../../../hooks/admin/instructor portal/useHandleDeletewithSweetAlert";
import useFetchDataUsingId from "../../../../../hooks/utils/useFetchDataUsingId";
import Spinner from "../../../../utility/Spinner";

const ShowMaterials = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const { materialHeadingId } = useParams();
  const { data, error, loading, setData } = useFetchDataUsingId(
    `${VITE_API_URL}/api/v1/instructor/materials/all`,
    materialHeadingId
  );

  // Handle Material deletion
  const { handleDelete } = useHandleDeletewithSweetAlert();

  return (
    <>
      <div className="w-full relative bg-white">
        <div className="gap-x-5 gap-y-5 flex items-center flex-wrap py-5 w-full">
          {loading && <Spinner />}
          {error && <p>{error}</p>}
          {data != null ? (
            data.map((materialData, index) => (
              <MaterialBox
                key={index}
                id={materialData._id}
                title={materialData.title}
                author={materialData.author}
                desc={materialData.desc}
                tag={materialData.tag}
                type={materialData.type}
                fileBanner={materialData.fileBanner}
                fileUrl={materialData.fileUrl}
                createdAt={materialData.createdAt}
                onDelete={handleDelete}
                data={data}
                setData={setData}
              />
            ))
          ) : (
            <h2 className="pl-2 text-2xl font-semibold">
              No Material Present here.
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowMaterials;
