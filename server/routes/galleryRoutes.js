import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import Gallery from "../models/Gallery.js";
import { verifyAdminToken } from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// Cloudinary storage setup
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "gallery",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({ storage });

// Upload new image (Protected)
router.post("/upload", verifyAdminToken, upload.single("image"), async (req, res) => {
  try {
    const newGallery = new Gallery({
      imageUrl: req.file.path, // Cloudinary gives a direct hosted URL
      description: req.body.description || "",
    });

    await newGallery.save();
    res.json({ msg: "Image uploaded successfully", newGallery });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all images (Public)
router.get("/", async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: error.message });
  }
});

// Delete image (Protected)
router.delete("/:id", verifyAdminToken, async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (!image) return res.status(404).json({ message: "Image not found" });

    // Extract Cloudinary public_id from URL (for deleting from Cloudinary)
    const urlParts = image.imageUrl.split("/");
    const fileName = urlParts[urlParts.length - 1].split(".")[0]; // public_id without extension

    await cloudinary.uploader.destroy(`gallery/${fileName}`);

    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
