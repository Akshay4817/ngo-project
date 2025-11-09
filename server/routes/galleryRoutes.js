import express from "express";
import multer from "multer";
import Gallery from "../models/gallery.js";
import { verifyAdminToken } from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Upload new image (Protected)
router.post("/upload", verifyAdminToken, upload.single("image"), async (req, res) => {
  try {
    let path = req.file.path;
    path = path.replace(/\\/g, "/");

    const newGallery = new Gallery({
      imageUrl: path,
      description: req.body.description || ""
    });

    await newGallery.save();
    res.json({ msg: "Image uploaded", newGallery });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server error" });
  }
});

// Get all images (Public)
router.get("/", async (req, res) => {
  try {
    const images = await Gallery.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete image (Protected)
router.delete("/:id", verifyAdminToken, async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
