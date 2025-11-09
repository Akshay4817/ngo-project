import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const volunteers = [
    {
      name: "Karamvir Dayma",
      role: "Founder and President",
      image: "/images/img14.jpg",
    },
    {
      name: "Ram Singh",
      role: "Vice President",
      image: "/images/img20.jpg",
    },
    {
      name: "Vinod Negi",
      role: "General Secretary",
      image: "/images/img16.jpg",
    },
    {
      name: "Monika",
      role: "Joint Secretary",
      image: "/images/img17.jpg",
    },
     {
      name: "Savita",
      role: "Secretary",
      image: "/images/img15.jpg",
    },
     {
      name: "Pintu ram",
      role: "Treasurer",
      image: "/images/img18.jpg",
    },
     {
      name: "Sukha Kuwar",
      role: "Member",
      image: "/images/img19.jpg",
    },
     {
      name: "Akshay Negi",
      role: "Website Developer (Volunteer)",
      image: "/images/img21.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-6">
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-950 mb-4"
        >
          About Our Organization
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-700 max-w-3xl mx-auto text-lg"
        >
          We are a non-profit committed to driving social and environmental change
          through compassion, education, and collaboration. Every small step
          we take together shapes a better tomorrow.
        </motion.p>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {[
          {
            title: "Our Mission",
            text: "To empower underprivileged communities through education, skill development, and sustainable support programs.",
            img: "/images/img12.jpg",
          },
          {
            title: "Our Vision",
            text: "To build an inclusive and compassionate society where every child, woman, and differently-abled person has equal access to education, opportunities, and dignity.",
            img: "/images/img11.jpg",
          },
          {
            title: "Our Value",
            text: 
              "We believe every person deserves respect, dignity, and a fair chance, no matter their background or ability.",
            img: "/images/img13.jpg",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-1 transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-950 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Impact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center mb-20"
      >
        <h2 className="text-3xl font-bold text-blue-950 mb-4">Our Impact So Far</h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
        Empowering differently-abled individuals, educating children, and uplifting women — creating opportunities for every life to thrive with dignity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-green-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-blue-950">100+</h3>
            <p className="text-gray-600">Children Educated</p>
          </div>
          <div className="bg-green-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-blue-950">50+</h3>
            <p className="text-gray-600">Empowered Women</p>
          </div>
          <div className="bg-green-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-blue-950">10+</h3>
            <p className="text-gray-600">Community Drives</p>
          </div>
        </div>
      </motion.div>

      {/* Volunteers Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-blue-950 mb-8">Our Volunteers</h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          Meet the amazing individuals whose dedication keeps our mission alive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {volunteers.map((vol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={vol.image}
                alt={vol.name}
                className="w-30 h-30 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-950">
                {vol.name}
              </h3>
              <p className="text-gray-600 text-sm">{vol.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
