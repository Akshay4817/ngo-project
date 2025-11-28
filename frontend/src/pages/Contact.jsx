import { Mail, Phone, Instagram, Facebook, Youtube, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-950 mb-10 tracking-wide">
        Get in Touch With Us
      </h2>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side – Contact Details */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-950" />
              <div>
                <p className="font-semibold text-blue-950">Email</p>
                <p>Babaharinathdivyang@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-950" />
              <div>
                <p className="font-semibold text-blue-950">Phone</p>
                <p>+91 76652 28153</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-950" />
              <div>
                <p className="font-semibold text-blue-950">Address</p>
                <p>Near Alampur Mandir,Behind Libaray, Sector(3)A, Bhiwadi(Raj)</p>
              </div>
            </div>
          </div>

          {/* Right Side – Social Links */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 text-center md:text-left">
              Stay connected and follow our journey:
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-800 transition"
              >
                <Instagram className="text-pink-600" />
                <span className="font-medium">@Baba Harinath Divyang Sewa Trust</span>
              </a>
              <a
                href="https://www.facebook.com/share/p/1KBpMzxpfN/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-800 transition"
              >
                <Facebook className="text-blue-600" />
                <span className="font-medium">facebook.com/Baba Harinath Divyang Sewa Trust</span>
              </a>
              <a
                href="https://youtube.com/@kddayma-d5o?si=OzQbAO004jTuR5nP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-800 transition"
              >
                <Youtube className="text-red-600" />
                <span className="font-medium">Baba Harinath Divyang Sewa Trust</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
