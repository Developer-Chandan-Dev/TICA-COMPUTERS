/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import useMaterialFormUpdate from "../../../../../hooks/admin/instructor portal/useMaterialFormUpdate";

const MaterialFormUpdate = ({
  id,
  title,
  desc,
  author,
  fileUrl,
  fileBanner,
  tag,
  type,
}) => {
  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    fileUrl: "",
    desc: "",
    author: "",
    fileBanner: "",
  });

  const { updateMaterialForm } = useMaterialFormUpdate();

  let materialName = useSelector((state) => state.materialHeading.data);
  console.log(materialName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateMaterialForm(inputs);
    setInputs({
      title: "",
      fileUrl: "",
      desc: "",
      author: "",
      fileBanner: "",
    });
  };

  useEffect(() => {
    setInputs({ ...inputs, id: id, title: title, desc: desc, author: author });
  }, []);

  return (
    <>
      <form
        className="font-medium"
        style={{ color: "#787878" }}
        onSubmit={handleSubmit}
      >
        <div className="xl:flex items-center justify-start gap-x-7">
          <div className="my-2">
            <label htmlFor="notesTitle" className="ml-3">
              Update {materialName} Title
            </label>
            <div className="px-3 py-2 bg-gray w-full xl:w-72 rounded-md my-3">
              <input
                type="text"
                className="bg-transparent outline-none font-medium text-sm w-fill-available"
                placeholder="Your notes title"
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
              Update Author name
            </label>
            <div className="px-3 py-2 bg-gray w-full xl:w-72 rounded-md my-3">
              <input
                type="text"
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
              Update your {materialName}
            </label>
            <div className="px-3 py-2 bg-gray w-full xl:w-72 rounded-md my-3 ">
              <input
                type="file"
                className="bg-transparent outline-none font-medium text-sm w-fill-available"
                placeholder="Your notes file path"
                id="fileUrl"
                name="fileUrl"
                value={inputs.fileUrl}
                onChange={(e) =>
                  setInputs({ ...inputs, fileUrl: e.target.value })
                }
              />
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="fileBannerFilePath" className="ml-3">
              Update your {materialName} banner
            </label>
            <div className="px-3 py-2 bg-gray w-full xl:w-72 rounded-md my-3  drop-shadow">
              <input
                type="file"
                className="bg-transparent outline-none font-medium text-sm w-fill-available"
                placeholder="Your notes file path"
                id="fileBanner"
                name="fileBanner"
                value={inputs.fileBanner}
                onChange={(e) =>
                  setInputs({ ...inputs, fileBanner: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="my-3">
          <label htmlFor="notesDesc" className="ml-3">
            Update Description for your {materialName}
          </label>
          <div className="px-3 py-2 bg-gray w-full xl:w-96 rounded-md my-3 drop-shadow">
            <textarea
              name="desc"
              className="bg-transparent w-full resize-none h-20 outline-none font-medium text-sm"
              placeholder={`Your ${materialName} description...`}
              id="notesDesc"
              value={inputs.desc}
              onChange={(e) => setInputs({ ...inputs, desc: e.target.value })}
            />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="material-sm drop-shadow-md">
            Update {materialName}
          </button>
        </div>
      </form>
    </>
  );
};

export default MaterialFormUpdate;
