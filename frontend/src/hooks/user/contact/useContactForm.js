import { useState } from "react";
import { toast } from "react-toastify";

const useContactForm = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);

  const contactform = async ({
    name,
    email,
    phoneno,
    address,
    message,
    userPic,
  }) => {
    const success = handleInputErrors({
      name,
      email,
      phoneno,
      address,
      message,
      userPic,
    });

    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch(`${VITE_API_URL}/api/v1/admin/contact/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phoneno,
          address,
          message,
          userPic,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      setLoading(false);
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error(`Submission failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  return { contactform, loading };
};

export default useContactForm;

function handleInputErrors({ name, phoneno, message }) {
  if (!name || !phoneno || !message) {
    toast.error("Please fill all fields");
    return false;
  }
  if (phoneno.length < 10) {
    toast.error("Number at least 10 digits");
    return false;
  }
  return true;
}
