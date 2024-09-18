import { useState } from "react";
import { toast } from "react-toastify";

const useEnquiryForm = () => {
  const [loading, setLoading] = useState(false);

  const enquiryForm = async ({
    name,
    email,
    phone,
    address,
    message,
    userPic,
  }) => {
    const success = handleInputErrors({
      name,
      email,
      phone,
      address,
      message,
    });

    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch("/api/v1/user/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, address, message, userPic }),
      });
      const data = await res.json();
      if (res.ok) {
        console.log(data);
        toast.success(data.message);
      } else {
        toast.error(data.err);
      }
      setLoading(false);
      return data;
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { enquiryForm, loading };
};

export default useEnquiryForm;

function handleInputErrors({ name, email, phone, address, message }) {
  if (!name || !email || !phone || !address || !message) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (phone.length != 10) {
    toast.error("Please enter a valid phone number.");
    return false;
  }
  return true;
}
