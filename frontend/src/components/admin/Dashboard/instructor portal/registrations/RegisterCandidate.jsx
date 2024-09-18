import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { RegisterCandidateInfo } from "../index";
import Spinner from "../../../../utility/Spinner";
import PropTypes from "prop-types";
import useHandleDeletewithSweetAlert from "../../../../../hooks/admin/instructor portal/useHandleDeletewithSweetAlert";

const RegisterCandidate = ({ searchTerm, currentPage, setTotalPages }) => {
  const [candidates, setCandidates] = useState(null);
  const [checkedIds, setCheckedIds] = useState([]);
  const [itemsPerPage] = useState(7); // Define items per page
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load candidates data and check if status is Cleared
  useEffect(() => {
    setLoading(true);
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          "/api/v1/instructor/registered-candidates",
          {
            params: {
              page: currentPage,
              limit: itemsPerPage,
              search: searchTerm, // Send search term as a query paramter
            },
          }
        ); // fetch all candidates from register collection

        const data = response.data;
        if (data.error) {
          setError(data.error);
          setLoading(false);
        } else {
          const ids = []; // Initializing an empty array
          data.items.forEach((element) => {
            if (element.status === "Cleared") {
              ids.push(element._id);
            }
          });
          setCheckedIds(ids);
          setCandidates(data.items);
          setTotalPages(data.totalPages);
          setLoading(false);
          setError(null);
        }
      } catch (error) {
        setError(
          "Failed to load registered candidates, Please try again later",
          error
        );
        console.error("Error fetching candidates data:", error);
        setLoading(false);
      }
    };
    fetchCandidates();
  }, [currentPage, itemsPerPage, searchTerm, setTotalPages]);

  const { handleDeleteWithcheckedIds } = useHandleDeletewithSweetAlert();

  // Handle checkbox change and update state and local storage
  const handleApprove = async (objectId) => {
    await axios.post(`/api/v1/instructor/student/${objectId}`); // adding data in Student collections
    await axios.put(`/api/v1/instructor/registered-candidates/${objectId}`, {
      status: "Cleared",
    });
    if (!checkedIds.includes(objectId)) {
      const updatedCheckedIds = [...checkedIds, objectId];
      setCheckedIds(updatedCheckedIds);
    }
    toast.success("Student added successfully"); // Success alert
  };

  return (
    <>
      {loading && <Spinner />}
      {error && (
        <div className="w-[200px] h-[350px] flex-center absolute">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      {candidates != null ? (
        candidates.map(
          ({
            _id,
            courseName,
            candidateName,
            fathername,
            mothername,
            DOB,
            registrationDate,
            gender,
            address,
            mobile,
          }) => (
            <RegisterCandidateInfo
              key={_id}
              id={_id}
              courseName={courseName}
              candidateName={candidateName}
              fathername={fathername}
              mothername={mothername}
              dob={DOB}
              registrationDate={registrationDate}
              gender={gender}
              address={address}
              mobile={mobile}
              isChecked={checkedIds.includes(_id)}
              onCheckboxChange={handleApprove}
              onDelete={handleDeleteWithcheckedIds}
              setData={setCandidates}
              data={candidates}
              setChecked={setCheckedIds}
              checked={checkedIds}
            />
          )
        )
      ) : (
        <div className="w-[200px] h-[350px] flex-center absolute">
          <h1>No candidates found</h1>
        </div>
      )}
    </>
  );
};

export default RegisterCandidate;

RegisterCandidate.propTypes = {
  searchTerm: PropTypes.string,
  currentPage: PropTypes.number,
  setTotalPages: PropTypes.func,
};
