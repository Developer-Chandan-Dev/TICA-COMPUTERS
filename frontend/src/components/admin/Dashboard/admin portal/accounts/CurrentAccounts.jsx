import DetailsBox from "./DetailsBox";
import useFetchData from "../../../../../hooks/utils/useFetchData";
import Spinner from "../../../../utility/Spinner";
import useHandleDeletewithSweetAlert from "../../../../../hooks/admin/instructor portal/useHandleDeletewithSweetAlert";

const CurrentAccounts = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const { data, setData, error, loading } = useFetchData(`${VITE_API_URL}/api/v1/admin/accounts`);
  const { handleDelete } = useHandleDeletewithSweetAlert();
  return (
    <>
      <div className="h-[470px] px-5 py-4 flex items-center flex-wrap gap-x-4 gap-y-4 overflow-y-auto ">
        <>
          {loading && <Spinner />}
          {error && <p>{error}</p>}
          {data != null ? (
            data.map(({ _id, username, email, fullname, role, profilePic }) => (
              <DetailsBox
                key={_id}
                id={_id}
                username={username}
                role={role}
                fullname={fullname}
                email={email}
                profilePic={profilePic}
                setData={setData}
                data={data}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <div className="w-[200px] h-[350px] flex-center absolute">
              <h1>User not found</h1>
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default CurrentAccounts;
