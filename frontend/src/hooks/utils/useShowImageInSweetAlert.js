import Swal from "sweetalert2";

const useShowImageInSweetAlert = () => {
  const showAlertWithImage = (imageUrl, username) => {
    Swal.fire({
      title: username,
      text: "This  alert has an image!",
      imageUrl: imageUrl,
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: username,
    });
  };

  return { showAlertWithImage };
};

export default useShowImageInSweetAlert;
