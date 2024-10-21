import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

const useUpdateCourseForm = (initialState, method, onChange) => {
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
      coursePic: e.target.files[0],
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

  const addHeading = () => {
    // addArrayItem("syllabus", { heading: "", topics: [""] });
    addArrayItem("syllabus", { heading: "", topics: [""] });
  };

  const removeHeading = (index) => {
    removeArrayItem("syllabus", index);
  };

  const addTopic = (headingIndex) => {
    const updatedHeading = {
      ...formData.syllabus[headingIndex],
      topics: [...formData.syllabus[headingIndex].topics, ""],
    };
    handleArrayChange("syllabus", headingIndex, updatedHeading);
  };

  const removeTopic = (headingIndex, topicIndex) => {
    const updatedHeading = {
      ...formData.syllabus[headingIndex],
      topics: formData.syllabus[headingIndex].topics.filter(
        (_, i) => i !== topicIndex
      ),
    };
    handleArrayChange("syllabus", headingIndex, updatedHeading);
  };
  const updateHeading = (index, newHeading) => {
    setFormData((prev) => {
      const updatedSyllabus = [...prev.syllabus];
      updatedSyllabus[index].heading = newHeading;
      return { ...prev, syllabus: updatedSyllabus };
    });
  };

  const updateTopic = (headingIndex, topicIndex, newTopic) => {
    setFormData((prev) => {
      const newSyllabus = [...prev.syllabus];
      newSyllabus[headingIndex].topics[topicIndex] = newTopic;
      return { ...prev, syllabus: newSyllabus };
    });
  };

  // Call onChange prop whenever formData changes
  useEffect(() => {
    if (onChange) onChange(formData.syllabus);
  }, [formData, onChange]);

  const handleSubmit = async (url) => {
    setLoading(true);
    setError(null);
    const formDataToSend = new FormData();

    for (let key in formData) {
      if (Array.isArray(formData[key]) && key !== "syllabus") {
        formData[key].forEach((item, index) => {
          if (typeof item === "object" && item !== null) {
            for (let subkey in item) {
              formDataToSend.append(
                `${key}[${index}][${subkey}]`,
                item[subkey]
              );

              if (Array.isArray(item.topics)) {
                console.log(item.topics);
                if (subkey == "topics") {
                  for (let subkey2 in subkey) {
                    console.log(key, item, subkey, subkey2);
                    console.log(
                      `${key}[${index}][${subkey}][${index}][${subkey2}]`,
                      subkey[subkey2]
                    );
                  }
                  formDataToSend.append(
                    `${key}[${index}][${subkey}]`,
                    item.topics
                  );
                }
              }
            }
          } else {
            formDataToSend.append(`${key}[${index}]`, item);
          }
        });
      } else if (
        typeof formData[key] === "object" &&
        formData[key] !== null &&
        !formData.coursePic &&
        key !== "syllabus"
      ) {
        for (let subkey in formData[key]) {
          console.log(subkey, formData[key]);
          formDataToSend.append(`${key}[${subkey}]`, formData[key][subkey]);
        }
      } else {
        if (key !== "syllabus") {
          console.log(formData, [key]);
          formDataToSend.append(key, formData[key]);
        }
      }
    }

    formData.syllabus.forEach((item, index) => {
      // Add the heading field
      formDataToSend.append(`syllabus[${index}][heading]`, item.heading);

      // Add topics field as an array
      item.topics.forEach((topic, topicIndex) => {
        formDataToSend.append(
          `syllabus[${index}][topics][${topicIndex}]`,
          topic
        );
      });
    });

    try {
      console.log(formData);
      // Log the FormData to see the contents
      for (const [key, value] of formDataToSend.entries()) {
        console.log(`${key}:`, value);
      }
      const response = await axios({
        method: method, // 'POST' OR 'PUT'
        url: url, // The API endpoint
        data: formDataToSend, // Add your headers here
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response, response.data, '191');

      setLoading(false);
      setFormData(initialState);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.response?.data?.error || "Something went wrong");
      return null;
    }
  };

  const resetForm = () => {
    setFormData(initialState);
    toast.success("Form reseted successfully");
  };

  return {
    addHeading,
    removeHeading,
    updateHeading,
    addTopic,
    removeTopic,
    updateTopic,
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
    setLoading,
    setFormData,
    resetForm,
    setError,
  };
};

export default useUpdateCourseForm;
