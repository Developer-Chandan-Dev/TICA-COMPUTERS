import { useParams } from "react-router-dom";

import UpdateCandidateDetails from "../../../../../components/admin/Dashboard/instructor portal/registrations/UpdateCandidateDetails";

const RegisterCandidateEdit = () => {
  const { candidateId } = useParams();
  return (
    <>
      <section className="w-full h-auto px-2 py-5">
        
        <div className="w-full md:w-11/12 mx-auto px-3 sm:px-5 xl:pl-10 py-5 bg-white drop-shadow">
          <UpdateCandidateDetails candidateId={candidateId} />
        </div>
      </section>
    </>
  );
};

export default RegisterCandidateEdit;
