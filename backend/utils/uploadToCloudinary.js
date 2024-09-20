const cloudinary = require("./cloudinary");
const fs = require("fs");

const uploadToCloudinary = async (filePath, folder, publicId) => {
  if (!filePath) return null;
  return await cloudinary.uploader
    .upload(filePath, {
      folder: folder,
      public_id: publicId,
      use_filename: true,
    })
    .then((result) => {
      // After uploading, delete the local file
      fs.unlinkSync(filePath); // delete the file from the local storage
      return result; // return the cloudinary response
    })
    .catch((error) => {
      fs.unlinkSync(filePath);
      console.error("Error uploading to Cloudinary:", error);
      throw error; // throw the error for handling
    });
};

const deleteFromCloudinary = async (publicId) => {
  try {
    console.log("Deleting image with publicId:", publicId);

    // Call Cloudinary's delete API
    const result = await cloudinary.uploader.destroy(publicId);

    // Check Cloudinary's response
    if (result.result === "ok") {
      
      console.log("Image successfully deleted from Cloudinary:", result);
      return result;
    } else {
      console.error("Image not deleted from Cloudinary:", result);
      throw new Error(
        `Failed to delete image from Cloudinary. Response: ${result.result}`
      );
    }
  } catch (error) {
    console.error("Error deleting file from Cloudinary:", error);
    throw new Error(`Failed to delete image from Cloudinary: ${error.message}`);
  }
};

module.exports = { uploadToCloudinary, deleteFromCloudinary };
