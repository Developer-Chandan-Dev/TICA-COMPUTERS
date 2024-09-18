// eslint-disable-next-line no-unused-vars
import { Outlet } from "react-router-dom";
import { AddInstructor, ShowInstructors, UpdateInstructor } from "./presentInstructors/index";

const InstructorsContainer = () => {
  return (
    <>
      <section className="w-full h-auto py-4 pb-24">
        <section
          className="px-2 py-2 sm:p-4 w-full mx-auto rounded overflow-hidden flex items-center flex-wrap gap-x-3 gap-y-4 shadow-lg shadow-slate-500 bg-white"
        >
          <Outlet>
            <ShowInstructors />
            <AddInstructor />
            <UpdateInstructor/>
          </Outlet>
        </section>
      </section>
    </>
  );
};

export default InstructorsContainer;
