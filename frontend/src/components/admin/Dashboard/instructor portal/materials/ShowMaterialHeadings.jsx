import useMaterialHeadings from "../../../../../hooks/admin/instructor portal/useMaterialHeadings";

const ShowMaterialHeadings = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const {
    headings,
    handleEditClick,
    handleUpdateClick,
    handleCancelClick,
    handleDeleteClick,
    handleInputChange,
    handleCheckBox
  } = useMaterialHeadings(`${VITE_API_URL}/api/v1/instructor/materials-heading/`);

  return (
    <div className="w-full h-auto text-sm">
      <h1 className="text-lg py-3 ml-1 font-medium">Material headings</h1>
      <div>
        {headings != null
          ? headings.map((heading, index) => (
              <div
                className="w-96 h-10 bg-slate-50 flex items-center justify-between px-4 my-1"
                key={index}
              >
                <div className=" w-8 h-6 flex-center">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    className="w-5 h-5 cursor-pointer"
                    // checked={isChecked}
                    onChange={handleCheckBox}
                  />
                </div>
                <input
                  type="text"
                  className="w-60 bg-transparent outline-none border-none font-medium"
                  value={heading.name}
                  name="heading"
                  onChange={(e) => handleInputChange(index, e)}
                  disabled={!heading.isEditing}
                  />
                <div className="flex items-center gap-x-3">
                  {heading.isEditing ? (
                    <>
                      <div className="w-6 rounded-full h-6 bg-green-400 flex-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="16"
                          height="16"
                          fill="white"
                          className="opacity-50 transition-all cursor-pointer hover:opacity-100"
                          onClick={() => handleUpdateClick(index)}
                        >
                          <path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z" />
                        </svg>
                      </div>
                      <div className="w-6 rounded-full h-6 bg-red-400 flex-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          width="16"
                          height="16"
                          fill="white"
                          className="opacity-50 transition-all cursor-pointer hover:opacity-100"
                          onClick={() => handleCancelClick(index)}
                        >
                          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      onClick={() => handleEditClick(index)}
                      width="16"
                      height="16"
                      fill="gray"
                      className="opacity-50 transition-all cursor-pointer hover:opacity-100"
                    >
                      <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z" />
                    </svg>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    onClick={() => handleDeleteClick(index)}
                    fill="gray"
                    className="bi bi-trash3 opacity-50 transition-all cursor-pointer hover:opacity-100"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default ShowMaterialHeadings;
