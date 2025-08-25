import { useState } from "react";
import { Menu, X, Hammer } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-green-700">
          <Hammer className="text-green-700" size={28} />
          Abujas
        </Link>

        {/* Desktop Links with separators */}
        <ul className="hidden md:flex items-center gap-3 font-medium text-gray-700">
          {navLinks.map((link, idx) => (
            <li key={link.label} className="flex items-center">
              <a
                href={link.href}
                className="px-2 py-2 hover:text-green-700 transition"
              >
                {link.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span className="text-gray-400 mx-2">|</span>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/hire"
            className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Hire a Professional
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-green-700 p-2 rounded"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block p-2 rounded hover:text-green-700 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/hire"
              className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Hire a Professional
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
