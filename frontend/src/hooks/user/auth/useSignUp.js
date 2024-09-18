import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullname,
    username,
    email,
    password,
    confirmPassword,
  }) => {
    const success = handleInputErrors({
      fullname,
      username,
      email,
      password,
      confirmPassword,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          email,
          password,
          confirmPassword,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        // localStorage
        localStorage.setItem("new-user", JSON.stringify(data));
        // context
        setAuthUser(data);
        toast.success("Signup successfully");
      } else {
        toast.error(data.message);
      }

      setLoading(false);
      return data;
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignUp;

function handleInputErrors({
  fullname,
  username,
  email,
  password,
  confirmPassword,
}) {
  if (!fullname || !username || !password || !confirmPassword || !email) {
    alert("Please fill in all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password don't match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
