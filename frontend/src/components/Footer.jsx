export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 mt-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2 text-green-200">Baba Harinath Divyang Seva Trust</h3>
          <p className="text-sm text-green-100 max-w-xs">
            Working together to make the world a better place through compassion, education, and sustainable action.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 text-sm text-green-100">
          <a href="/about" className="hover:text-green-300 transition">About Us</a>
          <a href="/gallery" className="hover:text-green-300 transition">Gallery</a>
          <a href="/contact" className="hover:text-green-300 transition">Contact</a>
          <a href="/donation" className="hover:text-green-300 transition">Donate</a>
        </div>
      </div>

      <div className="border-t border-blue-950 mt-8 pt-4 text-center text-green-200 text-sm">
        © {new Date().getFullYear()} Our NGO. All rights reserved.   <span>
          Registration N0:-20240311105156
        </span>
      </div>
    </footer>
  );
}
