import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import vlogRoutes from "./routes/vlogRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Static folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
connectDB();
console.log("Admin routes loaded");

// Routes
app.use("/api/admin", adminAuthRoutes);
app.use("/api/vlogs", vlogRoutes);
app.use("/api/gallery", galleryRoutes);

// Default route (optional, just for testing)
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
