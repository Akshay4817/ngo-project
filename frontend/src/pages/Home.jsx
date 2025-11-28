import Carousel from "../components/Carousel";
import AboutSection from "../components/AboutSection";
import WhatWeDo from "../components/WhatWeDo";



export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-blue-200 text-xs mb-3">
              Baba Harinath Divyang Seva Trust
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Empowering Divyang, women and children with dignity and opportunity.
            </h1>
            <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-xl">
              From skill development and livelihood programs to education support,
              we work to build an inclusive, self-reliant, and compassionate society.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/donation"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold bg-amber-400 text-blue-950 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Donate Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold border border-blue-200 text-blue-50 hover:bg-blue-800/60 transition"
              >
                Volunteer / Contact Us
              </a>
            </div>
          </div>

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

         <WhatWeDo />

      {/* Our Agenda Section */}
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-6xl mx-auto">
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
              At <span className="font-semibold text-blue-900">Baba Harinath Divyang Seva Trust</span>, 
              our agenda is to build an inclusive and self-reliant society through
              empowerment, education, and compassion.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-4">
                ♿
              </div>
              <h3 className="text-lg font-semibold text-blue-950 mb-2">
                Empowering Divyang
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Medical assistance, mobility support and skill-based opportunities
                for persons with disabilities.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-xs space-y-1 mt-auto">
                <li>Mobility & medical support</li>
                <li>Vocational training & livelihoods</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-2xl mb-4">
                👩‍🧵
              </div>
              <h3 className="text-lg font-semibold text-blue-950 mb-2">
                Women’s Livelihood
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Training women in sewing, tailoring and other skills to build
                sustainable home-based income.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-xs space-y-1 mt-auto">
                <li>Sewing & tailoring centers</li>
                <li>Support for micro-businesses</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl mb-4">
                📚
              </div>
              <h3 className="text-lg font-semibold text-blue-950 mb-2">
                Education Support
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Free tuition classes, study material and guidance for children
                from underprivileged backgrounds.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-xs space-y-1 mt-auto">
                <li>Tuition & mentoring</li>
                <li>Books & learning material</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl mb-4">
                🤝
              </div>
              <h3 className="text-lg font-semibold text-blue-950 mb-2">
                Awareness & Inclusion
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Building a compassionate community through events, workshops
                and collaborations.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-xs space-y-1 mt-auto">
                <li>Community events & campaigns</li>
                <li>Work with volunteers & local bodies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
</div>


      {/* About Section */}
      <AboutSection />
    </div>
  );
}
