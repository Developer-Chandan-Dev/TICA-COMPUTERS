const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phoneno: {
    type: String,
    required: true,
    // minLen: [10, "Number at least 10 digits"],
    // maxLen: [10, "Number maximum 10 digits"],
  },
  address: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  userPic: {
    type: String, // Cloudinary url
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contacts = mongoose.model("Contacts", contactSchema);
module.exports = Contacts;
