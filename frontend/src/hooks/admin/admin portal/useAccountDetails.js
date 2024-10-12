import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDashboardAuthContext } from "../../../context/DashboardAuthContext";

const useAccountDetails = (initialState, id) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(initialState);

  const { setAuthDashboardUser } = useDashboardAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      profilePic: e.target.files[0],
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Create new form
    const formDataToSend = new FormData();
    formDataToSend.append("fullname", formData.fullname);
    formDataToSend.append("email", formData.email);
    // formDataToSend.append(
    //   "profilePic",
    //   formData.profilePic !== undefined && formData.profilePic
    // );

    for (const [key, value] of formDataToSend.entries()) {
      console.log(`${key}:`, value);
    }
    console.log(id);

    try {
      const res = await axios.patch(
        `${VITE_API_URL}/api/v1/admin/accounts/details/update/${id}`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log(res.data);
      setFormData(res.data);
      setLoading(false);
      // Update local storage
      localStorage.setItem("new-dashboard-user", JSON.stringify(res.data));
      toast.success("Account Update Successfully");
    } catch (error) {
      // Handle error
      if (error.response) {
        toast.error(error.response.data.error || "Update failed"); // Backend error response
        setLoading(false);
      } else if (error.request) {
        toast.error("No response from server."); // Request made but no response
        setLoading(false);
      } else {
        // Any other errror
        toast.error("Error: " + error.message);
        setLoading(false);
      }
    } finally {
      setLoading(false);
    }
  };

  // <--------- Handle Logout ---------->
  const handleLogout = async () => {
    // Send request to backend to clear cookies
    await fetch(`${VITE_API_URL}/api/v1/admin/dashboard/logout`, {
      method: "POST",
      credentials: "include", // This ensures cookies are sent with the request
    });

    // Clear auth user state and localStorage
    setAuthDashboardUser(null);
    localStorage.removeItem("new-dashboard-user");
    toast.success("Logout successfully");
  };

  return {
    error,
    loading,
    formData,
    setFormData,
    handleChange,
    handleFileChange,
    handleUpdate,
    handleLogout,
  };
};

export default useAccountDetails;
