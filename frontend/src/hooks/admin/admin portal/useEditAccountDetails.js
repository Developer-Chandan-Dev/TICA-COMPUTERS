import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDashboardAuthContext } from "../../../context/DashboardAuthContext";

const useEditAccountDetails = (initialState, id) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(initialState);

  const { authDashboardUser, setAuthDashboardUser } = useDashboardAuthContext();
  // console.log(authDashboardUser._id);

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

  // Handle Update Details
  const handleUpdateDetails = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.username);
    formDataToSend.append("fullname", formData.fullname);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("profilePic", formData.profilePic);
    formDataToSend.append("profilePicPublicId", formData.profilePicPublicId);

    for (const [key, value] of formDataToSend.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      setLoading(true);
      const res = await axios.put(
        `${VITE_API_URL}/api/v1/admin/accounts/details/update/${id}`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log(res.data);
      setFormData(initialState);
      setLoading(false);
      if (id === authDashboardUser._id) {
        // Assuming user data is stored as a JSON string in localStorage under the key 'new-dashboard-user'
        setAuthDashboardUser(res.data);
        localStorage.setItem("new-dashboard-user", JSON.stringify(res.data));
      }
    } catch (error) {
      console.error(error);
      // Handle error
      if (error.response) {
        // Backend error response
        console.error(error);
        toast.error(error.response.data.error || "Update failed");
        setLoading(false);
      } else if (error.request) {
        // Request made but no response
        toast.error("No response from server.");
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

  // Handle Update Password
  const handleUpdatePassword = async ({
    id,
    oldpassword,
    password,
    confirmPassword,
  }) => {
    const success = handleInputError({
      oldpassword,
      password,
      confirmPassword,
    });
    if (!success) return;
    setLoading2(true);

    try {
      const response = await axios.patch(
        `${VITE_API_URL}/api/v1/admin/accounts/details/update-password/${id}`,
        { oldpassword, password, confirmPassword }
      );

      setLoading2(false);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      toast.error("Error updating password");
      setLoading2(false);
    }
  };

  return {
    error,
    setError,
    formData,
    setFormData,
    loading,
    loading2,
    handleChange,
    handleFileChange,
    handleUpdateDetails,
    handleUpdatePassword,
  };
};

export default useEditAccountDetails;

function handleInputError({ oldpassword, password, confirmPassword }) {
  if (!oldpassword || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password.length < 8) {
    toast.error("Password must be atleast 8 characters");
  }
  if (password !== confirmPassword) {
    toast.error("Confirm password doesn't match");
    return false;
  }
  return true;
}
