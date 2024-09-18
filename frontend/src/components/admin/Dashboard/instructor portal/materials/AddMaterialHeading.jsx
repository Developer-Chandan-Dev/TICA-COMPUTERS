import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addMaterialHeading } from "../../../../../features/admin/MaterialHeading/materialHeadingSlice";

const AddMaterialHeading = () => {
  const [heading, setHeading] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = handleInputErrors(heading);
    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch("/api/v1/instructor/materials-heading/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: heading,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Heading added successfully");
        dispatch(addMaterialHeading(data));
        setHeading("");
      } else {
        toast.error(data.err);
      }

      setLoading(false);
      return data;
    } catch (error) {
      console.error(error.err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-full h-40 text-sm ">
        <h1 className="text-lg py-3 ml-1 font-medium">Add Material heading</h1>

        <form onSubmit={handleSubmit}>
          <div className="w-96 h-9 rounded flex items-center px-2 justify-start bg-[#fffdfd] drop-shadow">
            <input
              type="text"
              className="w-fill-available bg-transparent outline-none border-none"
              placeholder="Material heading name"
              value={heading}
              required
              onChange={(e) => setHeading(e.target.value)}
            />
          </div>
          <button type="submit" className="material-sm mr-7 mt-3">
            ADD
          </button>
        </form>
      </div>
    </>
  );
};

export default AddMaterialHeading;

function handleInputErrors(heading) {
  if (!heading) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
