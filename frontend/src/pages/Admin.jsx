import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin/data`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(res.data);
      } catch (err) {
        navigate("/admin-login");
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="pt-24 px-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div>
        {data && data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">
        <button
          onClick={() => navigate("/admin/gallery/add")}
          className="bg-green-600 text-white px-6 py-4 rounded-xl shadow hover:bg-green-700"
        >
          Add Gallery Images
        </button>

        <button
          onClick={() => navigate("/admin/gallery/delete")}
          className="bg-green-600 text-white px-6 py-4 rounded-xl shadow hover:bg-green-700"
        >
          Delete Gallery Images
        </button>

        <button
          onClick={() => navigate("/admin/vlogs/add")}
          className="bg-green-600 text-white px-6 py-4 rounded-xl shadow hover:bg-green-700"
        >
          Add Vlogs
        </button>

        <button
          onClick={() => navigate("/admin/vlogs/delete")}
          className="bg-green-600 text-white px-6 py-4 rounded-xl shadow hover:bg-green-700"
        >
          Delete Vlogs
        </button>
      </div>
    </div>
  );
};

export default Admin;
