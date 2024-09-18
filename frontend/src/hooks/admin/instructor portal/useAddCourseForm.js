import { toast } from "react-toastify";
import { useState } from "react";

const useAddCourseForm = () => {
  const [loading, setLoading] = useState(false);

  const addCourseForm = async ({
    courseFullName,
    courseShortName,
    shortDesc,
    category,
    duration,
    fees,
    level,
    language,
    coursePic,
    whatYouLearn,
    prerequisites,
    mainTopics,
    instructorId,
    syllabus,
    longDesc,
  }) => {
    const success = handleInputErrors({
      courseFullName,
      courseShortName,
      shortDesc,
      category,
      duration,
      fees,
      level,
      language,
      coursePic,
      whatYouLearn,
      prerequisites,
      mainTopics,
      instructorId,
      syllabus,
      longDesc,
    });
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/v1/instructor/course/add", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: JSON.stringify({
          courseFullName,
          courseShortName,
          shortDesc,
          category,
          duration,
          fees,
          level,
          language,
          coursePic,
          whatYouLearn,
          prerequisites,
          mainTopics,
          instructorId,
          syllabus,
          longDesc,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Form submitted successfully");
      } else {
        toast.error(data.err);
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

  return { addCourseForm, loading };
};

export default useAddCourseForm;

function handleInputErrors({
  courseFullName,
  courseShortName,
  shortDesc,
  category,
  duration,
  fees,
  level,
  language,
  coursePic,
  whatYouLearn,
  prerequisites,
  mainTopics,
  instructorId,
  syllabus,
  longDesc,
}) {
  if (!category) {
    toast.error("Please choose course category");
    return false;
  }
  if (!level) {
    toast.error("Please choose course level");
    return false;
  }
  if (!language) {
    toast.error("Please choose course langauge");
    return false;
  }
  if (!coursePic) {
    toast.error("Please choose a picture for your course thumbnail");
    return false;
  }
  if (
    !courseFullName ||
    !courseShortName ||
    !shortDesc ||
    !duration ||
    !fees ||
    !whatYouLearn ||
    !prerequisites ||
    !mainTopics ||
    !instructorId ||
    !syllabus ||
    !longDesc
  ) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
