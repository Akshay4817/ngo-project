import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminGalleryAdd = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/gallery/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Image uploaded successfully");
      setImage(null);
      setDescription("");
      navigate("/admin"); // go back admin dashboard
    } catch (error) {
      alert("Error uploading image");
      console.log(error);
    }
  };

  return (
    <div className="pt-24 px-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Gallery Image</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border border-gray-300 p-2 rounded"
        />

        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default AdminGalleryAdd;
