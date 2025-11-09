import express from "express";
import Vlog from "../models/Vlog.js";
import { verifyAdminToken } from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// Create vlog (Protected)
router.post("/", verifyAdminToken, async (req, res) => {
  try {
    const vlog = new Vlog(req.body);
    await vlog.save();
    res.json(vlog);
  } catch (error) {
    console.error("Error creating vlog:", error);
    res.status(500).json({ message: "Failed to create vlog" });
  }
});

// Get all vlogs (Public)
router.get("/", async (req, res) => {
  try {
    const vlogs = await Vlog.find();
    res.json(vlogs);
  } catch (error) {
    console.error("Error fetching vlogs:", error);
    res.status(500).json({ message: "Failed to fetch vlogs" });
  }
});

// Delete vlog (Protected)
router.delete("/:id", verifyAdminToken, async (req, res) => {
  try {
    await Vlog.findByIdAndDelete(req.params.id);
    res.json({ message: "Vlog deleted successfully" });
  } catch (error) {
    console.error("Error deleting vlog:", error);
    res.status(500).json({ message: "Failed to delete vlog" });
  }
});

export default router;
