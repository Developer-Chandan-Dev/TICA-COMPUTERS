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
    console.log(publicId);
    const result = await cloudinary.uploader.destroy(publicId);
    return result; // Cloudinary returns a result object, you can check it.
  } catch (error) {
    console.error("Error deleting file from cloudinary:", error);
    throw new Error(`Failed to delete image from Cloudinary: ${error.message}`);
  }
};

module.exports = { uploadToCloudinary, deleteFromCloudinary };
