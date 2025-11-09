import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminGalleryDelete = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/gallery`);
        setImages(res.data);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };
    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      alert("Admin not logged in");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/gallery/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Remove the deleted image from the state without reloading
      setImages((prev) => prev.filter((img) => img._id !== id));
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Error deleting image");
    }
  };

  return (
    <div className="pt-24 px-6 min-h-screen bg-gradient-to-b from-red-50 to-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-red-800">
        Delete Gallery Images
      </h2>

      {images.length === 0 ? (
        <p className="text-gray-500 text-center">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => {
            const cleanPath = img.imageUrl?.replace(/\\/g, "/"); // Fix any backslashes
            return (
              <div
                key={img._id}
                className="border p-3 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={cleanPath}
                  alt={img.description || "Gallery image"}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="mt-2 text-gray-700 text-sm">{img.description}</p>
                <button
                  onClick={() => handleDelete(img._id)}
                  className="mt-3 bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/admin")}
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to Admin
        </button>
      </div>
    </div>
  );
};

export default AdminGalleryDelete;
