import { useState } from "react";
import { toast } from "react-toastify";

const useUpdateStudentDetails = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const studentDetailsForm = async ({
    id,
    courseName,
    studentName,
    fathername,
    mothername,
    registrationDate,
    admissionDate,
    gender,
    city,
    state,
    profilePic,
    DOB,
    address,
    mobile,
    aadharNo,
    profilePicPublicId,
  }) => {
    setLoading(true);

    // Create a FormData object
    const formData = new FormData();

    // Append fields to the FormData object
    formData.append("courseName", courseName);
    formData.append("studentName", studentName);
    formData.append("fathername", fathername);
    formData.append("mothername", mothername);
    formData.append("DOB", DOB);
    formData.append("registrationDate", registrationDate);
    formData.append("admissionDate", admissionDate);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("mobile", mobile);
    formData.append("aadharNo", aadharNo);
    formData.append("profilePicPublicId", profilePicPublicId);

    // Append file if provided
    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const res = await fetch(`${VITE_API_URL}/api/v1/instructor/student/${id}`, {
        method: "PUT",
        body: formData, // No need to set Content-Type header
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        toast.success("Form submitted successfully");
      } else {
        toast.error(data.error);
      }
      setLoading(false);
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error(`Submission failed: ${error.message}`);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { studentDetailsForm, loading, error };
};

export default useUpdateStudentDetails;
