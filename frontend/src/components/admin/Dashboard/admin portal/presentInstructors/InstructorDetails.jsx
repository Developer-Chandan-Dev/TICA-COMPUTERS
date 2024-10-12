import { useParams, Link } from "react-router-dom";
import Instructor from "../../../../user/Courses/instructor details/Instructor";
import InstructorInfo from "../../../../user/Courses/instructor details/InstructorInfo";
import Spinner from "../../../../utility/Spinner";
import useFetchDataUsingId from "../../../../../hooks/utils/useFetchDataUsingId";

const InstructorDetails = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const { instructorId } = useParams();
  const { data, error, loading } = useFetchDataUsingId(
    `${VITE_API_URL}/api/v1/admin/instructor`,
    instructorId
  );

  return (
    <>
      {loading && (
        <div className="w-full h-[350px] flex-center">
          <Spinner />
        </div>
      )}
      {error && <p className="text-red-600">{error}</p>}
      {data != null ? (
        <div className="mx-auto w-full sm:w-11/12">
          <div className="w-full flex items-center justify-between px-1 h-10 mx-auto my-2">
            <Link to="/dashboard/admin/instructor">
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
          </div>

          <Instructor
            fullname={data.fullname}
            email={data.email}
            bio={data.bio}
            skills={data.skills}
            experience={data.experience}
            education={data.education}
            socialMediaUrls={data.socialMediaUrls}
            profilePic={data.profilePic}
          />

          <InstructorInfo
            fullname={data.fullname}
            email={data.email}
            phoneno={data.phoneno}
            address={data.address}
            specilization={data.specilization}
            courseTaught={data.courseTaught}
            department={data.department}
            joiningDate={data.joiningDate}
            certification={data.certification}
            bio={data.bio}
          />
        </div>
      ) : (
        <h1>Instructor details not found.</h1>
      )}
    </>
  );
};

export default InstructorDetails;
