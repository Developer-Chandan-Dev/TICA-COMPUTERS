import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  addMaterialHeading,
  deleteMaterialHeading,
  setMaterialHeading,
  updatedMaterialHeading,
} from "../../../features/admin/MaterialHeading/materialHeadingSlice";

//

const useMaterialHeadings = (initialUrl) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [headings, setHeadings] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);

  const dispatch = useDispatch();
  const heading = useSelector((state) => state.materialHeading.data);
  useEffect(() => {
    const materialHeadings = fetch(initialUrl);
    materialHeadings
      .then((value) => {
        return value.json();
      })
      .then((response) => {
        if (Array.isArray(response)) {
          // Agar array of object hai
          const ids = [];

          response.forEach((item) => {
            if(item.active === true){
              ids.push(item._id);
            }
            console.log(ids);
            setCheckedIds(ids);
            // dispatch(addMaterialHeading(item));
          });
        } else {
          // Agar single object hai
          // dispatch(addMaterialHeading(response));
        }
        // console.log(response);
        return setHeadings(response);
      })
      .catch((error) => {
        console.error("Error fetching material headings:", error);
      });
  }, [initialUrl, dispatch]);
  
  console.log(checkedIds);

  const handleEditClick = (index) => {
    const updatedHeadings = [...headings];
    updatedHeadings[index] = {
      ...updatedHeadings[index],
      isEditing: true,
      originalHeadingName: updatedHeadings[index].name,
    };
    setHeadings(updatedHeadings);
  };

  const handleUpdateClick = async (index) => {
    const updatedHeading = headings[index];

    try {
      await axios.put(
        `${VITE_API_URL}/api/v1/instructor/materials-heading/${updatedHeading._id}`,
        {
          name: updatedHeading.name,
        }
      );
      toast.success("Material Heading updated successfully");
      const updatedHeadings = [...headings];

      updatedHeadings[index].isEditing = false;
      setHeadings(updatedHeadings);
      // dispatch(updatedMaterialHeading(updatedMHeadings));
    } catch (error) {
      toast.error("Material Heading updating error", error);
      console.error("Error updating material heading:", error);
    }
  };

  const handleCancelClick = (index) => {
    const updatedHeadings = [...headings];
    updatedHeadings[index].name = updatedHeadings[index].originalHeadingName;
    updatedHeadings[index].isEditing = false;
    setHeadings(updatedHeadings);
  };

  const handleDeleteClick = async (index) => {
    const headingId = headings[index]._id;

    try {
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
            .delete(`${VITE_API_URL}/api/v1/instructor/materials-heading/${headingId}`)
            .then(() => {
              setHeadings(headings.filter((_, i) => i !== index));
              console.log(headingId);
              dispatch(deleteMaterialHeading(headingId));
              Swal.fire("Deleted!", "Your file has been deleted", "success");
            })
            .catch(() => {
              Swal.fire(
                "Error!",
                "There was an error delete your file.",
                "error"
              );
            });
        }
      });
    } catch (error) {
      console.error("Error delete heading name:", error);
    }
  };

  const handleInputChange = (index, e) => {
    const updatedHeadings = [...headings];
    updatedHeadings[index].name = e.target.value;
    setHeadings(updatedHeadings);
  };

  const checkActiveChecks = ()=>{
    
  }

  const handleCheckBox = (index) => {
    console.log(index);
  };

  return {
    headings,
    handleEditClick,
    handleUpdateClick,
    handleCancelClick,
    handleDeleteClick,
    handleInputChange,
    handleCheckBox
  };
};

export default useMaterialHeadings;