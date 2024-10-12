import { useState } from "react";
import { toast } from "react-toastify";

const useBlockUser = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);

  const blockUser = async ({ id, blocked }) => {
    setLoading(true);
    console.log(id, "blocked:", blocked);
    try {
      const res = await fetch(`${VITE_API_URL}/api/v1/admin/present-users/block/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blocked: blocked }),
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
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { blockUser, loading };
};

export default useBlockUser;
