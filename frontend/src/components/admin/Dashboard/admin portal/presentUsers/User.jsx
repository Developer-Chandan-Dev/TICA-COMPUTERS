import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import UserNames from "./UserNames";
import PropTypes from "prop-types";
import useHandleDeletewithSweetAlert from "../../../../../hooks/admin/instructor portal/useHandleDeletewithSweetAlert";

const User = ({ currentPage, setTotalPages, searchTerm }) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [data, setData] = useState([]);
  const [blockedIds, setBlockedIds] = useState([]);
  const [itemsPerPage] = useState(7); // Define items per page
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { handleDelete } = useHandleDeletewithSweetAlert();

  // Fetch data from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${VITE_API_URL}/api/v1/admin/present-users`, {
          params: {
            page: currentPage,
            limit: itemsPerPage,
            search: searchTerm, // Send search term as a query paramter
          },
        });
        const data = response.data;
        if (data.error) {
          setError(data.error);
        } else {
          const ids = []; // Initialize an arra to hold hte IDs
          // Iterate through each user
          data.items.forEach((element) => {
            if (element.blocked === true) {
              ids.push(element._id);
            }
          });
          setBlockedIds(ids);
          setData(data.items);
          setTotalPages(data.totalPages);
        }
      } catch (error) {
        console.error("Error in fetching users data:", error);
      }
    };
    fetchUsers();
  }, [currentPage, itemsPerPage, searchTerm, setTotalPages]);

  // Block and unblock user
  const handleBlockUser = async (id, blocked) => {
    try {
      const res = await fetch(`${VITE_API_URL}/api/v1/admin/present-users/block/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          blocked: blocked === true ? false : true,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);

        // If this user is not blocked then block and if blocked then unblock
        if (!blockedIds.includes(id)) {
          const updatedBlockedIds = [...blockedIds, id];
          setBlockedIds(updatedBlockedIds);
        } else {
          const index = blockedIds.indexOf(id);
          blockedIds.splice(index, 1);
          const updatedBlockedIds = blockedIds.filter(
            (blockedId) => blockedId !== id
          );
          setBlockedIds(updatedBlockedIds);
        }
      } else {
        toast.error(data.err);
      }

      setLoading(false);
      return data;
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {data != null
        ? data.map(({ _id, fullname, username, email, createdAt,profilePic }, index) => (
            // eslint-disable-next-line react/jsx-key
            <UserNames
              key={index}
              id={_id}
              SN={index + 1}
              fullname={fullname}
              username={username}
              email={email}
              createdAt={createdAt}
              blocked={blockedIds.includes(_id)}
              onBlocked={handleBlockUser}
              onDelete={handleDelete}
              data={data}
              setData={setData}
              profilePic={profilePic}
            />
          ))
        : "Loading..."}
    </>
  );
};

export default User;

User.propTypes = {
  searchTerm: PropTypes.string,
  currentPage: PropTypes.number,
  setTotalPages: PropTypes.func,
};
