import axios from "axios";
import { useState } from "react";

const useHandleInstructorAndStaffForm = (initialState, method) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const handleGenderChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  const handleArrayChange = (name, index, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (name, item) => {
    setFormData((prev) => ({
      ...prev,
      [name]: [...prev[name], item],
    }));
  };

  const removeArrayItem = (name, index) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].filter((_, i) => i !== index),
    }));
  };

  const handleObjectChange = (objectName, key, value) => {
    setFormData((prev) => ({
      ...prev,
      [objectName]: {
        ...prev[objectName],
        [key]: value,
      },
    }));
  };

  // Handle Submit
  const handleSubmit = async (url) => {
    setLoading(true);
    setError(null);
    const formDataToSend = new FormData();

    for (let key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((item, index) => {
          if (typeof item === "object" && item !== null) {
            for (let subkey in item) {
              formDataToSend.append(
                `${key}[${index}][${subkey}]`,
                item[subkey]
              );
            }
          } else {
            formDataToSend.append(`${key}[${index}]`, item);
          }
        });
      } else if (
        typeof formData[key] === "object" &&
        formData[key] !== null &&
        key === "socialMediaUrls"
      ) {
        for (let subkey in formData[key]) {
          formDataToSend.append(`${key}[${subkey}]`, formData[key][subkey]);
        }
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    for (const [key, value] of formDataToSend.entries()) {
      console.log(`${key}:`, value);
    }
    

    try {
      const response = await axios({
        method: method, // 'POST' OR 'PUT'
        url: url, // The API endpoint
        data: formDataToSend, // Actual data
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      setFormData(initialState);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.response?.data?.message || "Something went wrong");
      return null;
    }
  };

  // Handle Form Reset
  const handleResetForm = () => {
    setFormData(initialState);
  };
  return {
    formData,
    handleChange,
    handleFileChange,
    handleGenderChange,
    handleArrayChange,
    addArrayItem,
    removeArrayItem,
    handleObjectChange,
    handleSubmit,
    loading,
    error,
    setFormData,
    handleResetForm
  };
};

export default useHandleInstructorAndStaffForm;
