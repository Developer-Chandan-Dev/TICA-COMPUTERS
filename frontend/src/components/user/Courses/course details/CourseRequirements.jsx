const CourseRequirements = ({ prerequisites }) => {
  return (
    <div className="w-full sm:w-11/12 mx-auto h-auto px-3 py-4 md:p-4 text-gray-600 text-sm">
      {/* Course Requirements */}
      <div className="w-11/12 mx-auto sm:mx-0 sm:w-full">
        <h1 className="text-2xl font-semibold">Requirements</h1>
        <ul className="ml-5 py-4">
          {prerequisites != null
            ? prerequisites.map((prerequisite, index) => (
                <li className=" list-disc" key={index}>
                  {prerequisite}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default CourseRequirements;
