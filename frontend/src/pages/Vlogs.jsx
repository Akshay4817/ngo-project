import React, { useEffect, useState } from "react";

const Vlogs = () => {
  const [vlogs, setVlogs] = useState([]);

  useEffect(() => {
    const fetchVlogs = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/vlogs`);
        const data = await res.json();
        setVlogs(data);
      } catch (error) {
        console.error("Error fetching vlogs:", error);
      }
    };

    fetchVlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-950 mb-4">Our Vlogs</h1>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Watch our latest stories, campaigns, and community events.  
        Real people, real impact.
      </p>

      {vlogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {vlogs.map((vlog) => (
            <div
              key={vlog._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 overflow-hidden"
            >
              <div className="relative w-full h-56">
                <iframe
                  src={vlog.videoUrl}
                  title={vlog.title}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-green-700 mb-1">
                  {vlog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{vlog.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {vlog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg mt-10">
          No vlogs available yet. Check back soon!
        </p>
      )}
    </div>
  );
};

export default Vlogs;
