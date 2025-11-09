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

// ✅ CORS first, before anything else
app.use(
  cors({
    origin: [/\.vercel\.app$/, "http://localhost:3000"],
    credentials: true,
  })
);

// ✅ Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Connect DB
connectDB();

// ✅ Routes
app.use("/api/admin", adminAuthRoutes);
app.use("/api/vlogs", vlogRoutes);
app.use("/api/gallery", galleryRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API is running and CORS configured correctly...");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
