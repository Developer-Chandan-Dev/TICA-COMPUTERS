const MaterialHeadings = require("../../../models/admin/instructor Portal/materials.heading.models");

const addHeading = async (req, res) => {
  try {
    const data = ({ name } = req.body);

    const materialName = await MaterialHeadings.findOne({ name });
    if (materialName) {
      return res.status(400).json({ err: "Material type already present." });
    }
    // create new material heading
    const newHeading = new MaterialHeadings(data);

    // Save New Heading
    if (newHeading) {
      const response = await newHeading.save();
      res.status(201).json(response);
    } else {
      res.status(400).json({ err: "Data not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const showHeadings = async (req, res) => {
  try {
    const headings = await MaterialHeadings.find();
    res.status(200).json(headings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const deleteHeading = async (req, res) => {
  try {
    const headingId = req.params.id;
    const data = await MaterialHeadings.findByIdAndDelete(headingId);
    res.status(200).json({ message: "Material Heading deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const updateHeading = async (req, res) => {
  try {
    const headingId = req.params.id;
    const data = req.body;

    const response = await MaterialHeadings.findByIdAndUpdate(headingId, data, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ err: "Material Heading not found" });
    }
    res.status(200).json({ message: "Maertial heading updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

module.exports = { addHeading, showHeadings, deleteHeading, updateHeading };
