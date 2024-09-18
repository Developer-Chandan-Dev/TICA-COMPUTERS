import { useParams } from "react-router-dom";
import { Footer, Navbar } from "../../../components/user";
import Instructor from "../../../components/user/Courses/instructor details/Instructor";
import InstructorInfo from "../../../components/user/Courses/instructor details/InstructorInfo";
import Spinner from "../../../components/utility/Spinner";
import useFetchDataUsingId from "../../../hooks/utils/useFetchDataUsingId";

const InstructorDetailsPage = () => {
  const { instructorId } = useParams();
  const { data, loading, error } = useFetchDataUsingId(
    "/api/v1/admin/instructor",
    instructorId
  );

  return (
    <>
      <section className="flex h-screen w-full mx-auto pageControl">
        <section className="overflow-auto w-fill-available">
          <Navbar />
          {loading && <Spinner />}
          {error && <p className="text-red-600">{error}</p>}
          {data != null ? (
            <div className="mx-auto w-full sm:w-11/12">
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

          <Footer />
        </section>
      </section>
    </>
  );
};

export default InstructorDetailsPage;
