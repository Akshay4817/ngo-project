// src/pages/Home.jsx
import React from "react";
import Carousel from "../components/Carousel";
import AboutSection from "../components/AboutSection";
import WhatWeDo from "../components/WhatWeDo";

export default function Home() {
  return (
    <div className="bg-slate-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">

          {/* Left text */}
          <div>
            <p className="uppercase tracking-[0.2em] text-blue-200 text-xs mb-3">
              Baba Harinath Divyang Seva Trust
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Empowering Divyang, women and children with dignity and opportunity.
            </h1>

            <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-xl">
              From skill training to education support, we work to build an
              inclusive, self-reliant and compassionate society.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/donation"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold bg-amber-400 text-blue-950 shadow-md hover:shadow-lg transition"
              >
                Donate Now
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold border border-blue-200 text-blue-50 hover:bg-blue-800/50 transition"
              >
                Volunteer / Contact Us
              </a>
            </div>
          </div>

          {/* Right carousel */}
          <div className="relative">
            <div className="rounded-3xl bg-blue-800/40 backdrop-blur p-4 sm:p-6 shadow-2xl">
              <Carousel />
            </div>

            <div className="hidden sm:block absolute -bottom-6 -right-4 bg-amber-400 text-blue-950 text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
              Registered NGO • Since 2024
            </div>
          </div>
        </div>
      </section>

      {/* NEW Section */}
  

      {/* Agenda Section */}
      <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.2em] text-blue-500 text-xs mb-2">
              What We Focus On
            </p>

            <h2 className="text-4xl font-extrabold text-blue-950 mb-3">
              Our Agenda
            </h2>

            <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
              At <span className="font-semibold text-blue-900">
                Baba Harinath Divyang Seva Trust
              </span>, our agenda is to build an inclusive and self-reliant
              society through empowerment, education and compassion.
            </p>
          </div>

          {/* 4 Agenda Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-blue-950 mb-2">
                Empowering Divyang
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Medical support, mobility aid and vocational opportunities.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-blue-950 mb-2">
                Women’s Livelihood
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Tailoring and handicraft training for sustainable income.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-blue-950 mb-2">
                Education Support
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Free tuition classes and study materials for children.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-blue-950 mb-2">
                Awareness & Inclusion
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Workshops, events and collaborations for equal opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

      <AboutSection />
    </div>
  );
}
