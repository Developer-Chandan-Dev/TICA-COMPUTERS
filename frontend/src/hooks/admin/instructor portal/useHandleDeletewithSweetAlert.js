import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const useHandleDeletewithSweetAlert = () => {
  // Delete data
  const handleDelete = (id, url, setData, data, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${url}/${id}`)
          .then(() => {
            setData(data.filter((item) => item._id !== id));
            Swal.fire("Deleted!", `${name} has been deleted`, "success");
          })
          .catch((error) => {
            toast.error(error.response.data.error);
            Swal.fire(
              "Error!",
              `There was an error delete your ${name}.`,
              "error"
            );
          });
      }
    });
  };

  //   Delete data with checkedIds
  const handleDeleteWithcheckedIds = (
    id,
    url,
    setData,
    data,
    setChecked,
    checked,
    name
  ) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${url}/${id}`)
          .then(() => {
            setData(data.filter((item) => item._id !== id));
            const updatedCheckedIds = checked.filter(
              (checkedId) => checkedId !== id
            );
            setChecked(updatedCheckedIds);

            Swal.fire("Deleted!", `${name} has been deleted`, "success");
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              `There was an error delete your ${name}.`,
              "error"
            );
          });
      }
    });
  };

  return { handleDelete, handleDeleteWithcheckedIds };
};

export default useHandleDeletewithSweetAlert;
