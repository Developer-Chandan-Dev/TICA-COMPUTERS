import { useState } from "react";
import { toast } from "react-toastify";

const useMaterialFormUpdate = () => {
  const [loading, setLoading] = useState(false);

  const updateMaterialForm = async ({
    id,
    title,
    author,
    // fileUrl,
    // fileBanner,
    desc,
  }) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/v1/instructor/materials/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          author,
          // fileUrl,
          // fileBanner,
          desc,
        }),
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
  return { updateMaterialForm, loading };
};

export default useMaterialFormUpdate;
