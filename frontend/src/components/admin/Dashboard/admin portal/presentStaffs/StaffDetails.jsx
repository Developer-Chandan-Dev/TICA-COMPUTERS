import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Staff from "./Staff";
import StaffDetailsInfo from "./StaffDetailsInfo";

const StaffDetails = () => {
  const { staffId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const staffData = fetch(`/api/v1/admin/staff/${staffId}`);
    staffData
      .then((value) => {
        return value.json();
      })
      .then((response) => {
        return setData(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <>
      {data != null ? (
        <div className="mx-auto w-full sm:w-11/12">
          <div className="w-full flex items-center justify-between px-1 h-10 mx-auto my-2">
            <Link to="/dashboard/admin/staff">
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

          <Staff
            fullname={data.fullname}
            email={data.email}
            bio={data.bio}
            skills={data.skills}
            experience={data.experience}
            education={data.education}
            socialMediaUrls={data.socialMediaUrls}
            profilePic={data.profilePic}
          />

          <StaffDetailsInfo
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
        <p className="text-2xl">Loading...</p>
      )}
    </>
  );
};

export default StaffDetails;
