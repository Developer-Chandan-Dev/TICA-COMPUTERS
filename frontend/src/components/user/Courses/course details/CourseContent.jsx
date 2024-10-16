import { useState } from "react";

const CourseContent = ({ syllabus }) => {
  const [expandedSections, setExpandedSections] = useState([]);
  const [rotate, setRotate] = useState("rotate-0");

  function handleSelection(index) {
    setExpandedSections((prev) => {
      if (prev.includes(index)) {
        setRotate("rotate-0");
        return prev.filter((i) => i !== index);
      } else {
        setRotate("rotate-180");
        return [...prev, index];
      }
    });
  }

  return (
    <div className="w-full sm:w-11/12 mx-auto h-auto px-3 py-4 md:p-4 text-gray-600 text-sm">
      {/* Course Content */}
      <h1 className="ml-5 md:ml-0 sm:text-2xl font-semibold py-6">
        Course Content
      </h1>
      <div className="w-full mx-auto md:mx-0 md:w-3/4 h-auto mb-8 mt-2 border">
        <div className="w-full">
          {syllabus != null ? (
            syllabus.map(({ _id, heading, topics }, index) => (
              <div key={_id}>
                <div
                  className="flex items-center py-3 px-5 gap-x-4 border"
                  style={{ background: "#f7f9fa" }}
                >
                  <div
                    className="w-5 h-5 flex-center"
                    onClick={() => handleSelection(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      width="16"
                      height="16"
                      className={`cursor-pointer ${
                        expandedSections.includes(index) ? rotate : ""
                      }`}
                      fill="currentColor"
                    >
                      <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                    </svg>
                  </div>
                  <span className="font-semibold">{heading}</span>
                </div>
                {expandedSections.includes(index) && (
                  <ul className="h-auto sm:h-auto ">
                    {topics != null
                      ? topics.map((topic, index) => (
                          <li
                            className="py-4 px-5 flex items-center gap-x-3"
                            key={index}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              width="18"
                              height="13"
                              fill="currentColor"
                            >
                              <path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z" />
                            </svg>
                            <span>{topic}</span>
                          </li>
                        ))
                      : "Topics not found! 404"}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <p className="text-2xl">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
