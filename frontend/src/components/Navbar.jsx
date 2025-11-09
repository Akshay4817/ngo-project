import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Donation", path: "/donation" },
    { name: "Vlogs", path: "/vlogs" },
    { name: "Admin Login", path: "/admin-login" },
  ];

  return (
    <nav className="bg-blue-950 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
       {/* Logo / Title */}
<div className="flex items-center space-x-3">
  <img
    src="/images/img7.jpg"
    alt="Baba Harinath Divyang Seva Trust Logo"
    className="h-10 w-10 object-cover rounded-full"
  />
  <h1 className="text-xl md:text-2xl font-bold text-white">
    <span className="text-yellow-400">Baba Harinath Divyang Seva Trust</span>
  </h1>
</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-yellow-400 focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-blue-950 text-white border-t border-blue-900 shadow-md">
          {links.map((link) => (
            <li key={link.name} className="border-b border-blue-900">
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 hover:bg-blue-900 hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
