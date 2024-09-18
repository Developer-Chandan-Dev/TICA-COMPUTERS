const Materials = require("../../../models/admin/instructor Portal/materials.models");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../../../utils/uploadToCloudinary");

const addMaterial = async (req, res) => {
  try {
    const data = req.body;
    const fileBanner = req.files["fileBanner"][0].path; // Access the banner url
    const fileUrl = req.files["fileUrl"][0].path; // Access the fileURL (PDF)

    // Upload banner and file to cloudinary
    const bannerResult = await uploadToCloudinary(
      fileBanner,
      "material-banner",
      `material-banner/${data.title}_${Date.now()}`
    );

    const urlResult = await uploadToCloudinary(
      fileUrl,
      "material-file",
      `material-file/${data.title}_${Date.now()}`
    );

    // Create a new Material document
    const newMaterial = new Materials({
      ...data,
      fileBanner: bannerResult.secure_url,
      fileBannerPublicid: bannerResult.public_id,
      fileUrl: urlResult.secure_url,
      fileUrlPublicid: urlResult.public_id,
    });
    console.log(newMaterial);

    if (newMaterial) {
      const response = await newMaterial.save();
      console.log(response);
      res.status(201).json({ message: "Form submitted successfully" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllMaterials = async (req, res) => {
  try {
    const data = await Materials.find();

    if (!data) {
      return res.status(400).json({ error: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMaterials = async (req, res) => {
  try {
    const materialType = req.params.id;
    console.log(materialType);
    const data = await Materials.find({ type: materialType });
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMaterial = async (req, res) => {
  try {
    const materialId = req.params.id;
    const data = await Materials.findById(materialId);
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getHomePageMaterial = async (req, res) => {
  try {
    const data = await Materials.find({ showOnHome: true });
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateHomePageMaterial = async (req, res) => {
  try {
    const materialId = req.params.id;
    const data = req.body;

    const response = await Materials.findByIdAndUpdate(materialId, data, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: "Material not found" });
    }
    console.log(response);
    res.status(200).json({
      message: `Material ${
        data.showOnHome === true
          ? "added on Home page"
          : "removed from Home page"
      } successfully`,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateMaterials = async (req, res) => {
  try {
    const materialId = req.params.id;
    const data = req.body;

    const files = req.files || {}; // Ensure files is defined

    let fileBanner = files["fileBanner"] ? files["fileBanner"][0].path : null; // Access the banner url
    let fileUrl = files["fileUrl"] ? files["fileUrl"][0].path : null; // Access the fileURL (PDF)

    console.log(files);
    console.log(fileBanner, fileUrl);
    console.log(data, materialId);

    let newBannerUrl = null;
    let newBannerPublicId = null;

    let newFileUrl = null;
    let newFilePublicId = null;

    // Delete the old fileBanner && fileUrl if a new one is provided
    if (files["fileBanner"] && data.fileBannerPublicid) {
      await deleteFromCloudinary(data.fileBannerPublicid);
    }

    if (files["fileUrl"] && data.fileUrlPublicid) {
      await deleteFromCloudinary(data.fileUrlPublicid);
    }

    // Upload new banner and new file to Cloudinary if provided
    if (fileBanner) {
      const uploadResult = await uploadToCloudinary(
        fileBanner,
        "material-banner",
        `material-banner/${data.title}_${Date.now()}`
      );
      console.log("File Banner Result:", uploadResult);
      newBannerUrl = uploadResult.secure_url;
      newBannerPublicId = uploadResult.public_id;
    }

    if (fileUrl) {
      const uploadResult = await uploadToCloudinary(
        fileUrl,
        "material-file",
        `material-file/${data.title}_${Date.now()}`
      );
      console.log("File Url Result:", uploadResult);
      newFileUrl = uploadResult.secure_url;
      newFilePublicId = uploadResult.public_id;
    }

    const response = await Materials.findByIdAndUpdate(
      materialId,
      {
        fileBanner: newBannerUrl,
        fileBannerPublicid: newBannerPublicId,
        fileUrl: newFileUrl,
        fileUrlPublicid: newFilePublicId,
        ...data,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Material not found" });
    }
    console.log(response);
    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteMaterial = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Materials.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Material Deleted Successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addMaterial,
  getAllMaterials,
  getMaterial,
  getMaterials,
  getHomePageMaterial,
  updateMaterials,
  deleteMaterial,
  updateHomePageMaterial,
};
