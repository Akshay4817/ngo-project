import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminGalleryDelete = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}
/api/gallery`);
        setImages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("adminToken");
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/gallery/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setImages(images.filter(img => img._id !== id));
    } catch (error) {
      console.log(error);
      alert("Error deleting image");
    }
  };

  return (
    <div className="pt-24 px-6">
      <h2 className="text-2xl font-bold mb-6">Delete Gallery Images</h2>

      <div className="grid grid-cols-3 gap-6">
        {images.map(img => (
          <div key={img._id} className="border p-3 rounded shadow">
            <img
              src={`${process.env.REACT_APP_API_URL}
/${img.imageUrl}`}
              alt=""
              className="w-full h-40 object-cover rounded"
            />
            <p className="mt-2 text-sm">{img.description}</p>
            <button
              onClick={() => handleDelete(img._id)}
              className="mt-3 bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/admin")}
        className="mt-8 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
      >
        Back to Admin
      </button>
    </div>
  );
};

export default AdminGalleryDelete;
