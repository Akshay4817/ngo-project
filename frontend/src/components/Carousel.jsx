import React, { useState, useEffect } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react"; // npm install lucide-react

export default function Carousel() {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const delay = 3000; 

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, delay);
  return () => clearInterval(timer); // cleanup when unmounts
}, [images.length]);

  return (
 <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">

      {/* Slides */}
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
             className="w-full aspect-[16/9] flex-shrink-0 bg-center bg-cover bg-black"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
