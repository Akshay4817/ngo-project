// src/components/WhatWeDo.jsx
import React from "react";
import { FaWheelchair, FaFemale, FaBookOpen } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <section className="bg-sky-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="uppercase tracking-[0.25em] text-blue-500 text-xs mb-2">
          What We Do
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-10">
          Our Key Initiatives
        </h2>

        <div className="grid gap-10 md:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <div className="text-5xl text-blue-700 mb-5 flex justify-center">
              <FaWheelchair />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Support for Divyang
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Medical help, mobility support and skill-based development for
              persons with disabilities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <div className="text-5xl text-pink-600 mb-5 flex justify-center">
              <FaFemale />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Women Empowerment
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Tailoring and sewing training for women to achieve financial
              independence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <div className="text-5xl text-green-600 mb-5 flex justify-center">
              <FaBookOpen />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Tuition for Children
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Free tuition classes, learning materials, and educational
              guidance for underprivileged students.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
