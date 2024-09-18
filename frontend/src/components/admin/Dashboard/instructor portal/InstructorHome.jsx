import { CardContainer } from "../index";
import { useDashboardAuthContext } from "../../../../context/DashboardAuthContext";
import { Link } from "react-router-dom";

const InstructorHome = () => {
  const { authDashboardUser } = useDashboardAuthContext();
  return (
    <>
      <section className="w-full h-auto ">
        <div className="w-11/12 h-[350px] rounded-lg mb-5 instructorBanner mt-5 flex items-start mx-auto">
          <div className="pt-10 pb-2 pl-7 sm:pl-14 pr-5 w-[650px] drop-shadow text-slate-100">
            <h1 className="text-3xl font-bold py-2">Instructor Panel</h1>
            <p className="mt-4 text-sm sm:text-base">
              Welcome your{" "}
              <span className="font-bold text-blue-800">
                {authDashboardUser.fullname}
              </span>{" "}
              on Admin Panel. You have access of entire application.You can
              modify delete anything.
              <br />
            </p>
            <p className="hidden sm:block">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              voluptatibus eum culpa minus dolore, eius perspiciatis
            </p>
            <div className="mt-7 gap-x-1 flex justify-start text-[15px]">
              <Link to="/dashboard/instructor/features/registered-students">
                <button className="px-3 py-[6px] rounded-lg transition-all border border-[#fc7f3c] font-semibold text-slate-300 hover:text-white hover:shadow-md hover:shadow-orange-300">
                  New Registrations
                </button>
              </Link>
              <Link to="/dashboard/instructor/features/enquiries">
                <button className="px-3 py-[6px] rounded-lg transition-all border border-[#fc7f3c] font-semibold text-slate-300 hover:text-white hover:shadow-md hover:shadow-orange-300">
                  Enquiries
                </button>
              </Link>
            </div>
          </div>
        </div>
        <>
          <CardContainer />
        </>
      </section>
    </>
  );
};

export default InstructorHome;
