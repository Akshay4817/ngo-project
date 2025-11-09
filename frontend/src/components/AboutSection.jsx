import React from "react";

const AboutSection = () => {
  return (
   <section className="bg-white py-16 px-6 md:px-20 text-center">
  <h2 className="text-5xl md:text-4xl font-bold text-gray-800 mb-6">
    About Our NGO
  </h2>

  <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
    <span className="font-semibold text-blue-950">
      Baba Harinath Divyang Seva Trust
    </span>{" "}
    is a non-profit organization dedicated to empowering persons with
    disabilities and uplifting communities through compassion and opportunity.
    We believe that every individual, regardless of physical or financial
    limitations, deserves dignity, education, and the chance to live
    independently.
    <br />
    <br />
    Our NGO provides support and training to{" "}
    <span className="font-medium">women from underprivileged backgrounds</span>{" "}
    by teaching them tailoring and sewing skills, helping them achieve
    financial independence. Alongside this, we conduct{" "}
    <span className="font-medium">free tuition classes</span> for children who
    cannot afford formal coaching, ensuring that no child’s education is left
    behind.
    <br />
    <br />
    Through every initiative — from vocational workshops to community outreach
    — we strive to create an inclusive, self-reliant, and compassionate society
    where everyone can thrive.
  </p>

  <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8">
    <img
      src="/images/img5.jpg"
      alt="NGO work"
      className="rounded-2xl shadow-lg w-full md:w-1/3 object-cover"
    />
    <img
      src="/images/img6.jpg"
      alt="Community help"
      className="rounded-2xl shadow-lg w-full md:w-1/3 object-cover"
    />
  </div>
</section>

  );
};

export default AboutSection;
