const mongoose = require("mongoose");
const { Schema } = mongoose;

const schemaMaterials = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String, // URL from cloudinary
    },
    fileUrlPublicid: {
      type: String, // URL from cloudinary
    },
    fileBanner: {
      type: String, // URL from cloudinary
    },
    fileBannerPublicid: {
      type: String, // URL from cloudinary
    },
    tag: {
      type: String,
      requied: true,
    },
    desc: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "MaterialHeading",
    },
    showOnHome: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Materials = mongoose.model("Materials", schemaMaterials);
module.exports = Materials;
