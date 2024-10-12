import { useParams } from "react-router-dom";
import useEditAccountDetails from "../../../../../hooks/admin/admin portal/useEditAccountDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditAccountDetails = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const { accountId } = useParams();

  const {
    // error,
    setError,
    formData,
    handleChange,
    loading,
    loading2,
    handleFileChange,
    setFormData,
    handleUpdateDetails,
    handleUpdatePassword,
  } = useEditAccountDetails(
    {
      id: "",
      username: "",
      fullname: "",
      role: "",
      email: "",
      profilePic: null,
      profilePicPublicId: "",
    },
    accountId
  );

  const [password, setPassword] = useState({
    id: "",
    oldpassword: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setFormData({ ...formData, id: accountId });
    setPassword({ ...password, id: accountId });
  }, [accountId]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `${VITE_API_URL}/api/v1/admin/accounts/details/${accountId}`
        );
        const data = response.data;

        setFormData(data);
      } catch (error) {
        console.log("Error in fetching user details:", error);
        setError(error);
      }
    };
    fetchUserDetails();
  }, [accountId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await handleUpdatePassword(password);
    if (response) {
      toast.success(response.message);
      setPassword({
        oldpassword: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <>
      <div className=" px-5 py-4 h-auto flex items-start gap-x-5 gap-y-5 justify-around flex-wrap">
        <div className="w-72 h-auto p-2 bg-[#f9fbfa] rounded-md drop-shadow shadow">
          <form
            className="text-sm flex-center flex-col gap-y-4 py-5"
            onSubmit={handleUpdateDetails}
          >
            <h1 className="text-xl font-semibold ">Change User Details</h1>
            <div>
              <input
                type="text"
                className="px-2 py-2 w-64 h-9 rounded border-2 outline-slate-400"
                name="fullname"
                placeholder="Fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                className="px-2 py-2 w-64 h-9 rounded border-2 outline-slate-400"
                placeholder="Username"
                name="username"
                value={formData.username.split("-")[0]}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                className="px-2 py-2 w-64 h-9 rounded border-2 outline-slate-400"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="ml-1">
              <select
                name="role"
                id="role"
                className="w-64 h-9 pl-1 rounded border-2 outline-slate-400"
                value={formData.role}
                onChange={handleChange}
              >
                <option defaultChecked value="">
                  Choose option
                </option>
                <option value="admin">Admin</option>
                <option value="instructor">Instructor</option>
                <option value="staff">Staff</option>
              </select>
            </div>
            <div className="ml-1">
              <input
                type="file"
                className="py-2 w-64 h-9 rounded "
                placeholder="email"
                accept="i"
                name="email"
                onChange={handleFileChange}
              />
            </div>
            <div className="w-60 mt-5">
              <button
                className="px-5 w-full transition-all shadow-md hover:shadow-lg hover:shadow-slate-500 shadow-slate-400 py-2 mr-2 text-white rounded"
                name="submit"
                type="submit"
                disabled={loading}
                style={{
                  background:
                    "repeating-linear-gradient(45deg, rgb(13, 69, 97), rgb(158, 158, 158) 100px)",
                }}
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </div>
        <div className="w-72 h-auto p-2 bg-[#f9fbfa] rounded-md drop-shadow shadow">
          <form
            className="text-sm flex-center flex-col gap-y-4 py-5"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl font-semibold ">Change Password</h1>
            <div className="mt-5">
              <input
                type="password"
                className="px-2 py-2 w-64 h-10 rounded border-2 outline-slate-400"
                required
                placeholder="Enter old password"
                value={password.oldpassword}
                onChange={(e) =>
                  setPassword({ ...password, oldpassword: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="password"
                className="px-2 py-2 w-64 h-10 rounded border-2 outline-slate-400"
                placeholder="Enter new password"
                required
                minLength={8}
                value={password.password}
                onChange={(e) =>
                  setPassword({ ...password, password: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="password"
                className="px-2 py-2 w-64 h-10 rounded border-2 outline-slate-400"
                placeholder="Confirm Password"
                required
                minLength={8}
                value={password.confirmPassword}
                onChange={(e) =>
                  setPassword({ ...password, confirmPassword: e.target.value })
                }
              />
            </div>
            <div className="w-60 mt-5">
              <button
                className="w-full transition-all shadow-md hover:shadow-lg hover:shadow-slate-500 shadow-slate-400 py-2 mr-2 text-white rounded"
                name="submit"
                type="submit"
                disabled={loading}
                style={{
                  background:
                    "repeating-linear-gradient(45deg, rgb(13, 69, 97), rgb(158, 158, 158) 100px)",
                }}
              >
                {loading2 ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAccountDetails;
