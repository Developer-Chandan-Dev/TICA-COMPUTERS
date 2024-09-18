import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useMaterialForm from "../../../../../hooks/admin/instructor portal/useMaterialForm";
import { useSelector } from "react-redux";

const MaterialForm = () => {
  const [inputs, setInputs] = useState({
    title: "",
    fileUrl: null,
    desc: "",
    author: "",
    fileBanner: null,
    type: "",
    tag: "",
  });

  // const id = useParams();
  const { materialForm, loading } = useMaterialForm();

  const materialHeadingId = useParams();
  const materialName = useSelector((state) => state.materialHeading.data);
  useEffect(() => {
    setInputs({
      ...inputs,
      type: materialHeadingId.materialHeadingId,
      tag: materialName,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await materialForm(inputs);
    setInputs({
      title: "",
      fileUrl: null,
      desc: "",
      author: "",
      fileBanner: null,
      type: materialHeadingId.materialHeadingId,
      tag: materialName,
    });
  };

  console.log(inputs);

  return (
    <>
      <form
        className="font-medium text-sm"
        style={{ color: "#787878" }}
        onSubmit={handleSubmit}
      >
        <div className="xl:flex items-center justify-start gap-x-7">
          <div className="my-2">
            <label htmlFor="notesTitle" className="ml-3">
              Add {materialName} Title
            </label>
            <div className="px-3 py-2 bg-gray w-full xl:w-72 rounded-md my-3">
              <input
                type="text"
                required
                className="bg-transparent outline-none font-medium text-sm w-fill-available"
                placeholder={`Your ${materialName} title`}
                id="title"
                name="title"
                value={inputs.title}
                onChange={(e) =>
                  setInputs({ ...inputs, title: e.target.value })
                }
              />
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="authorName" className="ml-3">
              Add Author name
            </label>
            <div className="px-3 py-2 bg-gray w-full xl:w-72 rounded-md my-3">
              <input
                type="text"
                required
                className="bg-transparent outline-none font-medium text-sm w-fill-available"
                placeholder="Author name"
                id="author"
                name="author"
                value={inputs.author}
                onChange={(e) =>
                  setInputs({ ...inputs, author: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="xl:flex items-center justify-start gap-x-7 flex-wrap">
          <div className="my-2">
            <label htmlFor="notesFilePath" className="ml-3">
              Choose your {materialName}
            </label>
            <div className="px-3 py-2 bg-gray w-full xl:w-72 rounded-md my-3 ">
              <input
                type="file"
                required
                className="bg-transparent outline-none font-medium text-sm w-fill-available"
                placeholder="Your notes file path"
                id="fileUrl"
                name="fileUrl"
                accept=".ppt, .pptx, .pdf"
                onChange={(e) =>
                  setInputs({ ...inputs, fileUrl: e.target.files[0] })
                }
              />
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="fileBannerFilePath" className="ml-3">
              Choose your {materialName} banner
            </label>
            <div className="px-3 py-2 bg-gray w-full xl:w-72 rounded-md my-3  drop-shadow">
              <input
                type="file"
                required
                className="bg-transparent outline-none font-medium text-sm w-fill-available"
                placeholder="Your notes file path"
                id="fileBanner"
                name="fileBanner"
                accept="image/*"
                onChange={(e) =>
                  setInputs({ ...inputs, fileBanner: e.target.files[0] })
                }
              />
            </div>
          </div>
        </div>
        <div className="my-3">
          <label htmlFor="notesDesc" className="ml-3">
            Add Description for your {materialName}
          </label>
          <div className="px-3 py-2 bg-gray w-full xl:w-96 rounded-md my-3 drop-shadow">
            <textarea
              name="desc"
              required
              className="bg-transparent w-full resize-none h-20 outline-none font-medium text-sm"
              placeholder={`Your ${materialName} description...`}
              id="notesDesc"
              value={inputs.desc}
              onChange={(e) => setInputs({ ...inputs, desc: e.target.value })}
            />
          </div>
        </div>
        <div className="mt-6"  >
          <button type="submit" className="material-sm drop-shadow-md">
            {loading ? `Adding ${materialName}` : `Add ${materialName}`}
          </button>
        </div>
      </form>
    </>
  );
};

export default MaterialForm;
