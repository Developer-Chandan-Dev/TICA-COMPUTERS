import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDashboardAuthContext } from "../../../context/DashboardAuthContext";

const useDashboardLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setAuthDashboardUser } = useDashboardAuthContext();

  const dashboardLogin = async ({ username, password, role }) => {
    const success = handleInputErrors({ username, password, role });
    if (!success) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/v1/admin/dashboard/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: `${username}${role != "admin" ? "-" + role : ""}`,
          password,
          role,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        //  localStorage
        localStorage.setItem("new-dashboard-user", JSON.stringify(data));
        // context
        setAuthDashboardUser(data);
        toast.success("Dashboard Login successfully");
        setTimeout(() => {
          toast.success("Welcome in Dashboard");
        }, 1000);
        navigate("/dashboard");
      } else {
        setError(data.message);
        toast.error(data.message);
      }

      setLoading(false);
      return data;
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return { loading, dashboardLogin, error };
};

export default useDashboardLogin;

function handleInputErrors({ username, password, role }) {
  if (!username || !password || !role) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
