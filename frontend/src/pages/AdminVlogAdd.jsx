import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminVlogAdd = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");

  const convertToEmbedUrl = (url) => {
    try {
      const u = new URL(url);

      // normal watch URL
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;

      // short youtu.be
      if (u.hostname === "youtu.be") {
        const id = u.pathname.replace("/", "");
        return `https://www.youtube.com/embed/${id}`;
      }

      // shorts
      if (u.pathname.startsWith("/shorts/")) {
        const id = u.pathname.split("/shorts/")[1];
        return `https://www.youtube.com/embed/${id}`;
      }

      return url;
    } catch {
      return url;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    const embedUrl = convertToEmbedUrl(videoUrl);

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}
/api/vlogs`,
        { title, videoUrl: embedUrl, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Vlog added successfully");
      setTitle("");
      setVideoUrl("");
      setDescription("");
      navigate("/admin");
    } catch (error) {
      alert("Error adding vlog");
      console.log(error);
    }
  };

  return (
    <div className="pt-24 px-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Vlog</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 border border-gray-200 p-6 rounded-xl bg-white shadow-sm">
        <input
          type="text"
          placeholder="Enter Vlog Title"
          className="border border-gray-300 p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Paste YouTube Video URL"
          className="border border-gray-300 p-2 rounded"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border border-gray-300 p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Add Vlog
        </button>
      </form>
    </div>
  );
};

export default AdminVlogAdd;
