const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
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

const Enquiry = mongoose.model("Enquiries", enquirySchema);
module.exports = Enquiry;
