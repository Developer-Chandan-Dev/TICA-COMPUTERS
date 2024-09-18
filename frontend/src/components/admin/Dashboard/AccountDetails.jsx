import { useEffect } from "react";
import { useDashboardAuthContext } from "../../../context/DashboardAuthContext";
import useAccountDetails from "../../../hooks/admin/admin portal/useAccountDetails";

const AccountDetails = () => {
  const { authDashboardUser } = useDashboardAuthContext();
  const {
    // loading,
    formData,
    setFormData,
    handleChange,
    // handleFileChange,
    handleUpdate,
    handleLogout,
  } = useAccountDetails(
    {
      fullname: "",
      email: "",
      profilePic: null,
    },
    authDashboardUser._id
  );
  useEffect(() => {
    setFormData(authDashboardUser);
  }, [authDashboardUser, setFormData]);

  return (
    <section className="w-full h-auto mt-16 accountMainBox p-5 flex-center">
      <div
        className="flex gap-x-8 gap-y-5 flex-wrap px-5 sm:px-10 py-14 shadow rounded-2xl accountBox"
        style={{
          background:
            "repeating-linear-gradient(45deg, #ffffff, transparent 200px)",
        }}
      >
        <div className="rounded-2xl flex h-auto py-2 flex-wrap gap-x-2 px-2 gap-y-3 backdrop-filter backdrop-blur-sm bg-opacity-20 bg-white drop-shadow-lg shadow accountDetailsForm">
          <div className="w-[235px] h-56 mx-auto flex-center mx">
            <div className="w-40 h-40 rounded-md shadow drop-shadow flex-center">
              {formData.profilePic ? (
                <img
                  src={formData.profilePic}
                  alt="img"
                  className="w-full h-full object-fill"
                />
              ) : (
                <h1 className="text-7xl font-bold text-slate-500">
                  {authDashboardUser.username[0]}
                </h1>
              )}
            </div>
          </div>
          <form
            className="w-[350px] h-56 mx-auto px-4 py-3 text-sm"
            onSubmit={handleUpdate}
          >
            <div className="flex items-center justify-between gap-x-3 gap-y-2">
              <h2 className="font-semibold text-lg">My Profile:</h2>
              <h4 className="font-semibold text-slate-600 ">
                {formData.username !== undefined &&
                formData.username.includes("-")
                  ? formData.username.split("-")[0]
                  : formData.username}{" "}
                | {formData.role}
              </h4>
            </div>
            <div className="flex items-center justify-between gap-x-3 gap-y-2 my-5 flex-wrap">
              <h5>Fullname:</h5>
              <input
                type="text"
                placeholder="Fullname"
                name="fullname"
                required
                value={formData.fullname}
                onChange={handleChange}
                className="rounded-md outline-neutral-300 px-3 py-1 drop-shadow border"
              />
            </div>
            <div className="my-4 ">
              <input
                type="email"
                placeholder="Your email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md outline-neutral-300 px-3 py-1 drop-shadow border"
              />
            </div>
            <div className="flex-center mt-8">
              <button
                className="px-6 rounded-full py-[6px] text-white font-semibold transition-all hover:drop-shadow"
                style={{
                  background: "linear-gradient(45deg, #edb855, #ff5959)",
                }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="rounded-2xl shadow w-80 backdrop-filter backdrop-blur-sm bg-opacity-20 bg-white drop-shadow-lg h-32 px-6 py-5 text-sm accountActiveBox">
          <div className="flex items-center justify-between border-b py-2">
            <h2 className="font-semibold text-lg">My Account</h2>
            <div className="rounded-full w-7 h-7 flex-center border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="13"
                height="13"
                className=" fill-slate-600"
              >
                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <h2>Active Account</h2>
            <button
              className="px-6 rounded-full py-[6px] text-white font-semibold transition-all hover:drop-shadow "
              onClick={handleLogout}
              style={{ background: "linear-gradient(45deg, #edb855, #ff5959)" }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountDetails;
