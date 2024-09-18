import { useState } from "react";
import { toast } from "react-toastify";

const useMaterialForm = () => {
  const [loading, setLoading] = useState(false);

  const materialForm = async ({
    title,
    author,
    fileUrl,
    fileBanner,
    desc,
    type,
    tag,
  }) => {
    const success = handleInputError({
      title,
      author,
      fileUrl,
      fileBanner,
      desc,
      tag,
    });

    if (!success) return;
    setLoading(true);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("author", author);
    formData.append("fileUrl", fileUrl);
    formData.append("fileBanner", fileBanner);
    formData.append("desc", desc);
    formData.append("type", type);
    formData.append("tag", `#${tag}`);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const res = await fetch(`/api/v1/instructor/materials/${type}/add/`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
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
  return { materialForm, loading };
};

export default useMaterialForm;

function handleInputError({ title, author, fileUrl, fileBanner, desc }) {
  if (!title || !author || !fileUrl || !fileBanner || !desc) {
    toast.error("Please fill all fileds");
    return false;
  }
  return true;
}
