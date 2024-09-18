const CourseDesc = ({longDesc}) => {
  return (
    <div className="w-full sm:w-11/12 mx-auto h-auto px-3 py-4 md:p-4 text-gray-600 text-sm">
      {/* Course Description */}
      <div className="w-11/12 mx-auto sm:mx-0 sm:w-full mt-4">
        <h1 className="text-2xl font-semibold">Description</h1>
        <p>{longDesc}</p>
      </div>
    </div>
  )
}

export default CourseDesc
