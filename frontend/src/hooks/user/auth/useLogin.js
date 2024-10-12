import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  console.log(VITE_API_URL)

  const login = async ({ username, password }) => {
    const success = handleInputErrors({ username, password });
    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch(`${VITE_API_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        // localStorage
        localStorage.setItem("new-user", JSON.stringify(data));
        // context
        setAuthUser(data);
        toast.success("Login successfully");
      } else {
        toast.error(data.err);
      }

      setLoading(false);
      return data;
    } catch (error) {
      console.error(error.err);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
