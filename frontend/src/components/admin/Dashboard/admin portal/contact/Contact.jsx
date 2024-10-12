import ContactInfo from "./ContactInfo";
import useHandleDeletewithSweetAlert from "../../../../../hooks/admin/instructor portal/useHandleDeletewithSweetAlert";
import useFetchData from "../../../../../hooks/utils/useFetchData";
import Spinner from "../../../../utility/Spinner";

const Contact = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  const { data, error, loading, setData } = useFetchData(
    `${VITE_API_URL}/api/v1/admin/contact`
  );

  // HandleDelete hook
  const { handleDelete } = useHandleDeletewithSweetAlert();

  console.log(data);

  return (
    <>
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      {data != null ? (
        data.map((contactData, index) => (
          <ContactInfo
            key={contactData._id}
            id={contactData._id}
            name={contactData.name}
            email={contactData.email}
            phone={contactData.phoneno}
            message={contactData.message}
            address={contactData.address}
            createdAt={contactData.createdAt}
            userPic={contactData.userPic}
            index={index}
            arrow={index % 2 === 0 ? "left" : "right"}
            onDelete={handleDelete}
            data={data}
            setData={setData}
          />
        ))
      ) : (
        <p className="pl-2 text-2xl">Loading...</p>
      )}
    </>
  );
};

export default Contact;
