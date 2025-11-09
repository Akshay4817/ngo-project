import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/gallery`);
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-6 text-center relative">
      <h1 className="text-4xl font-bold text-blue-950 mb-4">Our Gallery</h1>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Glimpses of our initiatives, community drives, and the beautiful people we serve.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.length > 0 ? (
          images.map((img, index) => {
            // ensure clean URL regardless of backend slashes
            const cleanPath = img.imageUrl?.replace(/\\/g, "/");

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(cleanPath)}
              >
                <img
                  src={cleanPath}
                  alt={img.description || `Gallery ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
                {img.description && (
                  <p className="mt-2 text-gray-700 text-sm">{img.description}</p>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-lg col-span-3">
            No images uploaded yet.
          </p>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white text-black font-bold rounded-full px-3 py-1 text-lg hover:bg-green-100"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
