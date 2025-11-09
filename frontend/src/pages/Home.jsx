import Carousel from "../components/Carousel";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <div>
      <Carousel />
     <section className="bg-blue-100 py-12 px-6 text-center">
  <h2 className="text-5xl font-bold text-blue-950 mb-6">
    Our Agenda
  </h2>

  <div className="max-w-5xl mx-auto text-left text-gray-800 text-lg leading-relaxed space-y-6">
    <p>
      At <span className="font-semibold text-blue-900">Baba Harinath Divyang Seva Trust</span>, our agenda is to build an inclusive and self-reliant society by focusing on empowerment, education, and compassion.
    </p>

    <div>
      <h3 className="text-2xl font-semibold text-blue-950 mb-2">1. Empowering Persons with Disabilities (Divyang)</h3>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Providing medical assistance, mobility support, and vocational opportunities.</li>
        <li>Encouraging equal participation in education, employment, and social life.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-blue-950 mb-2">2. Supporting Women’s Livelihood</h3>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Conducting sewing and tailoring training programs.</li>
        <li>Helping women establish small-scale home businesses for financial stability.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-blue-950 mb-2">3. Promoting Education for Underprivileged Students</h3>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Offering free tuition classes and learning materials to children in need.</li>
        <li>Guiding them academically and emotionally to achieve their goals.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-blue-950 mb-2">4. Creating Awareness and Inclusion</h3>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Organizing community events, workshops, and social campaigns that promote equality and compassion.</li>
          <li>
      Collaborating with local organizations and volunteers to raise awareness
      about the rights and inclusion of persons with disabilities.
    </li>
      </ul>
    </div>
  </div>
</section>


      <AboutSection />
    </div>
  );
}
