const express = require("express");
const router = express.Router();
const upload = require("../../../middlewares/fileUploadMiddleware");
const {
  addMaterial,
  getAllMaterials,
  getMaterials,
  updateMaterials,
  getHomePageMaterial,
  getMaterial,
  deleteMaterial,
  updateHomePageMaterial,
} = require("../../../controllers/admin/instructor portal/materials.controller");

router.post(
  "/:id/add",
  upload.fields([{ name: "fileBanner" }, { name: "fileUrl" }]),
  addMaterial
);
router.get("/", getAllMaterials);
router.get("/all/:id", getMaterials);
router.get("/:id", getMaterial);
router.get("/home/data", getHomePageMaterial);
router.put("/:id", updateMaterials);
router.put("/home-data/:id", updateHomePageMaterial);
router.delete("/:id", deleteMaterial);

module.exports = router;
