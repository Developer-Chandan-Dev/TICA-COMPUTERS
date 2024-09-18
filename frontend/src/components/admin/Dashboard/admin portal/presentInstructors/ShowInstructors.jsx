import "./instructor.css";
import { Link } from "react-router-dom";
import InstructorBox from "./InstructorBox";
import useFetchData from "../../../../../hooks/utils/useFetchData";
import useHandleDeletewithSweetAlert from "../../../../../hooks/admin/instructor portal/useHandleDeletewithSweetAlert";
import Spinner from "../../../../utility/Spinner";

const ShowInstructors = () => {
  const { data, loading, error, setData } = useFetchData("/api/v1/admin/instructor/");
  const { handleDelete } = useHandleDeletewithSweetAlert();

  return (
    <>
      <div className="flex items-center justify-between w-11/12 mx-auto my-3 gap-1 flex-wrap text-sm">
        <h2 className="text-2xl font-bold">Our instructors</h2>{" "}
        <div className="flex items-center justify-between w-full flex-wrap mb-2 sm:w-auto gap-x-2 text-sm sm:text-base">
          <Link to="/dashboard/admin">
            <button className="back-btn flex-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="16"
                width="16"
                className="opacity-80 cursor-pointer"
                fill="currentColor"
                title="Back"
              >
                <path d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z" />
              </svg>
              <span>Go Back</span>
            </button>
          </Link>
          <Link to="/dashboard/admin/instructor/add">
            <button className="py-1 px-5 border-2 hover:text-blue-900 hover:bg-white border-blue-900 bg-blue-900 rounded text-white">
              Add New
            </button>
          </Link>
        </div>
      </div>

      <section className="w-full h-auto py-4 flex items-center flex-wrap gap-x-3 gap-y-4">
      <>
      {loading && (
        <div className="w-full h-[350px] flex-center">
          <Spinner />
        </div>
      )}
      {error && <p className="text-red-600">{error}</p>}
      {data != null ? (
        data.map(({ _id, fullname, profilePic, specilization, bio }) => (
          <InstructorBox
            id={_id}
            key={_id}
            fullname={fullname}
            profilePic={profilePic}
            specilization={specilization}
            bio={bio}
            onDelete={handleDelete}
            setData={setData}
            data={data}
          />
        ))
      ) : (
        <p className="text-2xl">No instructor found</p>
      )}
    </>
      </section>
    </>
  );
};

export default ShowInstructors;
