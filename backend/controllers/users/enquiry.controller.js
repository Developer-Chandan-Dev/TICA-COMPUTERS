const Enquiry = require("../../models/users/enquiry.models");

const addEnquiry = async (req, res) => {
  try {
    const data = req.body;

    // Create new Enquiry
    const newEnquiry = new Enquiry(data);

    // Save new Enquiry
    if (newEnquiry) {
      await newEnquiry.save();
      res.status(201).json({ message: "Enquiry added successfully" });
    } else {
      res.status(400).json({ err: "Data not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

module.exports = addEnquiry;
