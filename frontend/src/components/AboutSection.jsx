import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Left Side Images */}
        <div className="space-y-6">
          <img
            src="/images/img5.jpg"
            alt="NGO work"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
          <img
            src="/images/img6.jpg"
            alt="Community help"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
            About Our NGO
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            <span className="font-semibold text-blue-950">
              Baba Harinath Divyang Seva Trust
            </span>{" "}
            is a non-profit organization dedicated to empowering persons with disabilities
            and uplifting communities through compassion and opportunity.  
            We believe that every individual deserves dignity, education, and the chance
            to live independently.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Our NGO provides support and training to{" "}
            <span className="font-medium">women from underprivileged backgrounds</span>{" "}
            by teaching them tailoring and sewing skills, helping them achieve financial
            independence.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            We also provide <span className="font-medium">Nishulk Shiksha</span>{" "}
            to children who cannot afford formal coaching, ensuring that no child’s
            education is left behind.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Through every initiative — from vocational workshops to community outreach —
            we strive to create an inclusive, self-reliant, and compassionate society
            where everyone can thrive.
          </p>

          {/* Optional: Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 text-center">
            <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900">150+</h3>
              <p className="text-sm text-gray-600">Beneficiaries</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900">20+</h3>
              <p className="text-sm text-gray-600">Women Trained</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900">10+</h3>
              <p className="text-sm text-gray-600">Community Events</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900">5+</h3>
              <p className="text-sm text-gray-600">Active Programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
