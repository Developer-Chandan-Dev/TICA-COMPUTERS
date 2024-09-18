import { useParams } from "react-router-dom";
import UpdateStudentDetails from "../../../../components/admin/Dashboard/instructor portal/students/UpdateStudentDetails";

const EditStudentDetails = () => {
  const { studentId } = useParams();
  return (
    <section className="w-full h-auto px-2 py-5">
      <div className="w-full md:w-11/12 mx-auto px-3 sm:px-5 xl:pl-10 py-5 bg-white drop-shadow">
        <UpdateStudentDetails studentId={studentId} />
      </div>
    </section>
  );
};

export default EditStudentDetails;
