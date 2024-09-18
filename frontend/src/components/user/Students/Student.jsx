import { useEffect, useState } from "react";
import StudentDetails from "./StudentDetails";
import PropTypes from "prop-types";
import axios from "axios";

const Student = ({ currentPage, setTotalPages, searchTerm }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [itemsPerPage] = useState(7); // Define items per page

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("/api/v1/user/student/", {
          params: {
            page: currentPage,
            limit: itemsPerPage,
            search: searchTerm, // Send search term as a query parameter
          },
        });
        if (!response || !response.data) {
          setError("Internal Server Error");
        }

        const data = response.data;
        console.log(data);
        if (!data) {
          setError("Data not found");
        }

        if (data.error) {
          setError(data.error);
        } else {
          setData(data.items);
          setTotalPages(data.totalPages);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchStudents();
  }, [currentPage, itemsPerPage, searchTerm, setTotalPages]);

  return (
    <>
      {data !== null ? (
        data.map(({ _id, studentName, courseName, registrationDate }) => (
          // eslint-disable-next-line react/jsx-key
          <StudentDetails
            SN={_id}
            key={_id}
            studentName={studentName}
            courseName={courseName}
            registrationDate={registrationDate}
          />
        ))
      ) : (
        <p className="text-2xl font-semibold text-gray-700">Loading...</p>
      )}
      {error && (
        <>
          <div className="px-5 py-4 mx-auto mt-10 bg-white shadow-md shadow-slate-300 rounded-md">
            <h1 className="text-xl">
              Error in fetching student data form server:{error}
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default Student;

Student.propTypes = {
  searchTerm: PropTypes.string,
  currentPage: PropTypes.number,
  setTotalPages: PropTypes.func,
};
