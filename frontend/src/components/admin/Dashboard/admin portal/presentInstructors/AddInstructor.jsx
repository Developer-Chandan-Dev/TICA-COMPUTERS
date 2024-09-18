import { Link } from "react-router-dom";
import InstructorForm from "./InstructorForm";

const AddInstructor = () => {
  return (
    <>
      <div className="flex items-center justify-between w-11/12 mx-auto my-3">
        <div className="flex items-center justify-between w-full mx-auto my-3 flex-wrap">
          <h2 className="text-2xl font-bold mb-2">Add Instructor</h2>{" "}
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
      </div>
      <section className="addForm w-11/12 mx-auto my-2 h-auto flex items-center flex-wrap gap-x-3 gap-y-4 sm:pb-0">
        <InstructorForm />
      </section>
    </>
  );
};

export default AddInstructor;
