import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const useCourseForm = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    courseName: "",
    candidateName: "",
    fathername: "",
    mothername: "",
    DOB: "",
    registrationDate: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    profilePic: null,
    mobile: "",
    aadharNo: "",
  });
  const [errors, setErrors] = useState({}); // To track errors for each field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormValues({
      ...formValues,
      profilePic: e.target.files[0],
    });
  };

  const validateFields = () => {
    const {
      courseName,
      candidateName,
      fathername,
      mothername,
      DOB,
      registrationDate,
      gender,
      address,
      city,
      state,
      mobile,
      aadharNo,
    } = formValues;

    if (!courseName) {
      toast.error("Please choose course name");
      return "Please choose course name";
    }
    if (
      !candidateName ||
      !fathername ||
      !mothername ||
      !gender ||
      !DOB ||
      !registrationDate ||
      !address ||
      !city ||
      !state ||
      !mobile ||
      !aadharNo
    ) {
      toast.error("Please fill in all fields");
      return "Please fill in all fields";
    }
    if (mobile.length < 10) {
      toast.error("Mobile number at least 10 digits.");
      return "Mobile number at least 10 digits.";
    }
    if (aadharNo.length < 12) {
      toast.error("Aadhar number at least 12 digits");
      return "Aadhar number at least 12 digits";
    }

    // No errors, return nul or empty string
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start loading
    setLoading(true);

    const errorMessage = validateFields();

    if (errorMessage) {
      // If any field is empty, display the alert and stop loading
      toast.error(errorMessage);
      setErrors(errorMessage);
      setLoading(false); // Stop loading if validation fails
      return;
    }

    const formData = new FormData();
    formData.append("courseName", formValues.courseName);
    formData.append("candidateName", formValues.candidateName);
    formData.append("fathername", formValues.fathername);
    formData.append("mothername", formValues.mothername);
    formData.append("DOB", formValues.DOB);
    formData.append("registrationDate", formValues.registrationDate);
    formData.append("gender", formValues.gender);
    formData.append("address", formValues.address);
    formData.append("city", formValues.city);
    formData.append("state", formValues.state);
    formData.append("profilePic", formValues.profilePic);
    formData.append("mobile", formValues.mobile);
    formData.append("aadharNo", formValues.aadharNo);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post(
        `${VITE_API_URL}/api/v1/user/registration/new`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newResponse = response.data;

      if (response.status === 201) {
        toast.success(newResponse.message);
        setFormValues({
          courseName: "",
          candidateName: "",
          fathername: "",
          mothername: "",
          DOB: "",
          registrationDate: "",
          gender: "",
          address: "",
          city: "",
          state: "",
          profilePic: null,
          mobile: "",
          aadharNo: "",
        });
      } else {
        // Handle non-201 responses, if needed
        toast.error("Unexpected response status");
      }
    } catch (error) {
      // Check if the error response contains a specific message about Aadhar
      if (error.response && error.response.data && error.response.data.error) {
        const specificError = error.response.data.error;
        if (specificError === "Addhar already exists") {
          toast.error(
            "Aadhar number already exists. Please use a different one."
          );
        } else {
          toast.error(specificError);
        }
      } else {
        // Handle other errors
        toast.error(
          "An error occurred while submitting the form. Please try again."
        );
      }
    } finally {
      // Stop loading in both success and failure scenarios
      setLoading(false);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();

    setFormValues({
      courseName: "",
      candidateName: "",
      fathername: "",
      mothername: "",
      DOB: "",
      registrationDate: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      profilePic: null,
      mobile: "",
      aadharNo: "",
    });
    toast.success("Form Reset Successfully");
  };

  return {
    formValues,
    errors, // Return the errors to display them in the UI
    handleInputChange,
    handleFileChange,
    handleSubmit,
    handleReset,
    loading,
    setFormValues
  };
};

export default useCourseForm;
