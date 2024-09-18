const mega = require("mega");
const fs = require("fs");
const path = require("path");

// Initialize Mega client with login credentials
const email = process.env.MEGA_EMAIL;
const password = process.env.MEGA_PASSWORD;
console.log(email, password);
const client = mega({ email, password });

/**
 * Uploads a file to a specific folder in Mega
 * @param {string} folderName - The name of the folder where the file will be uploaded
 * @param {string} filePath - The path to the file to be uploaded.
 * @returns {Promise} - Resolves with the uploaded file information.
 */

const uploadFile = (folderName, filePath) => {
  return new Promise((resolve, reject) => {
    const fileName = path.basename(filePath);
    if (!fs.existsSync(filePath)) {
      return reject(new Error("File does not exist at path." + filePath));
    }
    const fileStream = fs.createReadStream(filePath);

    // Create folder if it doesn't exist
    client.getFolder(folderName, (err, folder) => {
      if (err && err.code === "ENOENT") {
        client.createFolder(folderName, (err, newFolder) => {
          if (err) {
            return reject(err);
          }
          uploadToFolder(newFolder, fileStream, fileName, resolve, reject);
        });
      } else if (err) {
        return reject(err);
      } else {
        uploadToFolder(folder, fileStream, fileName, resolve, reject);
      }
    });
  });
};

/**
 * Helper function to upload file to a folder.
 * @param {object} folder - The folder where the file will be uploaded
 * @param {object} fileStream - The file stream to uplaod.
 * @param {string} fileName - The name of the file
 * @param {function} resolve - Promise resolve function.
 * @param {function} reject - Promise reject function.
 */

const uploadToFolder = (folder, fileStream, fileName, resolve, reject) => {
  console.log("Uploading file:",fileName);
  console.log("Folder", folder);
  client.upload(fileStream, fileName, folder, (error, file) => {
    if (error) {
      return reject(error);
    }
    resolve(file);
  });
};

module.exports = { uploadFile };
