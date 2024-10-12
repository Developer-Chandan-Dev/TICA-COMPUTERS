import EnquiryInfo from "./EnquiryInfo";
import Spinner from "../../../../utility/Spinner";
import useHandleDeletewithSweetAlert from "../../../../../hooks/admin/instructor portal/useHandleDeletewithSweetAlert";
import useFetchData from "../../../../../hooks/utils/useFetchData";

const Enquiry = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const { data, setData, error, loading } = useFetchData(
    `${VITE_API_URL}/api/v1/instructor/enquiry`
  );

  const { handleDelete } = useHandleDeletewithSweetAlert();

  return (
    <>
      {loading && <Spinner />}
      {error && <p className="text-red-600">{error}</p>}
      {data != null ? (
        data.map((enquiryData, index) => (
          <EnquiryInfo
            key={enquiryData._id}
            id={enquiryData._id}
            name={enquiryData.name}
            email={enquiryData.email}
            phone={enquiryData.phone}
            message={enquiryData.message}
            address={enquiryData.address}
            createdAt={enquiryData.createdAt}
            userPic={enquiryData.userPic}
            index={index}
            arrow={index % 2 === 0 ? "left" : "right"}
            onDelete={handleDelete}
            data={data}
            setData={setData}
          />
        ))
      ) : (
        <h1>No Enquiry found</h1>
      )}
    </>
  );
};

export default Enquiry;
