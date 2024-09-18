/* eslint-disable react/prop-types */
const StudentDetails = ({ studentName, courseName, registrationDate }) => {


  return (
    <>
      <tr className="w-full h-14 cursor-pointer hover:shadow border-b hover:bg-gray-50 text-gray-500">
        <td className="px-4 font-medium">
          {studentName}
        </td>
        <td className="px-4">{courseName}</td>
        <td className="pl-5">{DateDisplay(registrationDate)}</td>
        <td className="pl-">
          <div className="flex items-center ml-4">
            <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width="14"
                height="14"
                fill="white"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </div>
            <span className="ml-3">Unread</span>
          </div>
        </td>
      </tr>
    </>
  );
};

export default StudentDetails;

function DateDisplay(getDate) {
  const isoDateString = getDate;
  const dateObject = new Date(isoDateString);

  // Format date to Indian style
  const indianDateFormat = dateObject.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return indianDateFormat;
}
