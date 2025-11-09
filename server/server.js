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

// Handle __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Connect to MongoDB
connectDB();

// ✅ CORS Configuration
app.use(
  cors({
    origin: [
      "https://ngo-project-gamma.vercel.app", // your current Vercel site
      "https://ngo-project-m1sq6kehr-akshay-negis-projects.vercel.app", // keep old one just in case
      "http://localhost:3000" // for local dev
    ],
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files (uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ API Routes
app.use("/api/admin", adminAuthRoutes);
app.use("/api/vlogs", vlogRoutes);
app.use("/api/gallery", galleryRoutes);

// ✅ Default route (for quick test)
app.get("/", (req, res) => {
  res.send("API is running and connected successfully...");
});

// ✅ Port config
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
