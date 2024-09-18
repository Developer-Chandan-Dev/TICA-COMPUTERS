import { Outlet } from "react-router-dom";
import {
  EnrolledStudents,
  OurCourses,
  EnquiryContainer,
  MaterialContainer,
  RegistrationContainer,
  RegisterCandidateDetails,
  RegisterCandidateEdit,
} from "../../../../pages/admin/Dashboard/index";

const InstructorContainerAdmin = () => {
  return (
    <>
      <section className="w-full h-fill-available">
        <section className="w-full">
          <Outlet>
            <RegistrationContainer />
            <EnrolledStudents />
            <OurCourses />
            <EnquiryContainer />
            <MaterialContainer />
            <RegisterCandidateDetails />
            <RegisterCandidateEdit />
          </Outlet>
        </section>
      </section>
    </>
  );
};

export default InstructorContainerAdmin;
