const Enquiry = require("../../../models/users/enquiry.models");

const getEnquiry = async (req, res) => {
  try {
    const data = await Enquiry.find().sort({ createdAt: -1 }).exec();

    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const getEnquiryDetails = async (req, res) => {
  try {
    const enquiryId = req.params.id;

    const response = await Enquiry.findById(enquiryId);
    if (response) {
      res.status(200).json(response);
    } else {
      return res.status(404).json({ err: "Data not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const deleteEnquiry = async (req, res) => {
  try {
    const enquiryId = req.params.id;
    const response = await Enquiry.findByIdAndDelete(enquiryId);

    res.status(200).json({ err: "Enquiry deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

module.exports = { getEnquiry, getEnquiryDetails, deleteEnquiry };
