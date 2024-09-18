import { Outlet } from "react-router-dom";
import { AddStaff, ShowStaffs, UpdateStaff } from "./presentStaffs/index";

const StaffContainer = () => {
  return (
    <>
      <section className="w-full h-auto py-4 pb-24">
        <section
          className="px-2 py-3 sm:px-4 sm:py-4 w-full mx-auto rounded overflow-hidden flex items-center flex-wrap gap-x-3 gap-y-4 shadow-lg shadow-slate-500 bg-white"        >
          <Outlet>
            <ShowStaffs />
            <AddStaff />
            <UpdateStaff />
          </Outlet>
        </section>
      </section>
    </>
  );
};

export default StaffContainer;
