import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";
import { useDashboardAuthContext } from "../../../context/DashboardAuthContext";

const useUpdateUser = (initialState) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  console.log(VITE_API_URL);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const { setAuthUser } = useAuthContext();
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

  // <--------- Handle update user details ----------->
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.username);
    formDataToSend.append("fullname", formData.fullname);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("profilePic", formData.profilePic);

    setLoading(true);
    try {
      const res = await axios.put(
        `${VITE_API_URL}/api/v1/profile/${formData._id}`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Handle successful response
      toast.success(res.data.message || "Data updated successfully");

      // Assuming user data is stored as a JSON string in localStorage under the key 'new-user'
      const userData = localStorage.getItem("new-user");

      if (userData) {
        // Parse the JSON string into an object
        const userObject = JSON.parse(userData);
        // Update the profilePic field
        userObject.profilePic = res.data.profilePic || userObject.profilePic;

        // Convert the updated user object back to a JSON string
        const updatedUserData = JSON.stringify(userObject);

        // Store the updated JSON string in localStorage
        localStorage.setItem("new-user", updatedUserData);
      }
      setLoading(false);
    } catch (error) {
      // Handle error
      if (error.response) {
        // Backend error response
        toast.error(error.response.data.error || "Update failed");
      } else if (error.request) {
        // Request made but no response
        toast.error("No response from server.");
      } else {
        // Any other errror
        toast.error("Error: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // <--------- Handle Logout ---------->
  const handleLogout = async () => {
    // Send request to backend to clear cookies
    console.log(`${VITE_API_URL}/api/v1/auth/logout`);
    await fetch(`${VITE_API_URL}/api/v1/auth/logout`, {
      method: "POST",
      credentials: "include", // This ensures cookies are sent with the request
    });

    // Clear auth user state and localStorage
    setAuthUser(null);
    setAuthDashboardUser(null);
    localStorage.removeItem("new-user");
    localStorage.removeItem("new-dashboard-user");
    toast.success("Logout successfully");
  };

  return {
    loading,
    formData,
    setFormData,
    handleChange,
    handleFileChange,
    handleSubmit,
    handleLogout,
  };
};

export default useUpdateUser;
