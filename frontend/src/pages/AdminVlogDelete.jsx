import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminVlogDelete = () => {
  const [vlogs, setVlogs] = useState([]);

  const fetchVlogs = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}
/api/vlogs`);
      setVlogs(res.data);
    } catch (error) {
      console.error("Error fetching vlogs:", error);
    }
  };

  const deleteVlog = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");

      await axios.delete(`${process.env.REACT_APP_API_URL}
/api/vlogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchVlogs();
    } catch (error) {
      console.error("Error deleting vlog:", error);
    }
  };

  useEffect(() => {
    fetchVlogs();
  }, []);

  return (
    <div className="p-6 pt-24">
      <h2 className="text-3xl font-semibold mb-6">Delete Vlog</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vlogs.map((vlog) => (
          <div key={vlog._id} className="border rounded-lg p-4 shadow flex flex-col gap-3">
            <p className="text-lg font-medium">{vlog.title}</p>

            <iframe
              src={vlog.videoUrl}
              title={vlog.title}
              className="w-full h-40"
              allowFullScreen
            ></iframe>

            <button
              onClick={() => deleteVlog(vlog._id)}
              className="bg-red-600 text-white px-4 py-2 rounded w-full"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminVlogDelete;
