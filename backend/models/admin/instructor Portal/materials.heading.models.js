const mongoose = require("mongoose");

const materialHeadingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const MaterialHeadings = mongoose.model(
  "MaterialHeading",
  materialHeadingSchema
);
module.exports = MaterialHeadings;
