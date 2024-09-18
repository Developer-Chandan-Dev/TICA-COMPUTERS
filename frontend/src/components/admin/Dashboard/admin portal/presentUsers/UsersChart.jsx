import Chart from "./Chart";
import { Link } from "react-router-dom";

const UsersChart = () => {
  return (
    <div className="h-auto py-5 relative">
      <Link to="/dashboard/admin/users/">
        <button className="back-btn flex-center gap-x-2 absolute left-4 top-3">
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
      <div className="w-full md:w-11/12 mx-auto">
        <Chart className="" />
      </div>
    </div>
  );
};

export default UsersChart;
