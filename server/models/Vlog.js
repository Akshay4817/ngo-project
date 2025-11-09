import mongoose from "mongoose";

const vlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: String,
  date: String,
}, { timestamps: true });

export default mongoose.model("Vlog", vlogSchema);
