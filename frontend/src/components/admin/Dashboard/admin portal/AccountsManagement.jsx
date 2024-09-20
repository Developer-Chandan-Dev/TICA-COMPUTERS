import { Link, Outlet, useLocation } from "react-router-dom";
import CurrentAccounts from "./accounts/CurrentAccounts";
import EditAccountDetails from "./accounts/EditAccountDetails";

const AccountsManagement = () => {
  const location = useLocation();

  return (
    <section className="w-full bg-white drop-shadow-md shadow-md rounded p-2 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-left pl-5 py-5 text-xl text-semibold font-semibold sticky">
          Manage Account
        </h1>
        <Link
          to={`${
            location.pathname === "/dashboard/admin/accounts"
              ? "/dashboard/admin"
              : "/dashboard/admin/accounts"
          } `}
        >
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
      <Outlet>
        <CurrentAccounts />
        <EditAccountDetails />
      </Outlet>
    </section>
  );
};

export default AccountsManagement;
