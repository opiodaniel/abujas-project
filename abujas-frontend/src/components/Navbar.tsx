import { useState } from "react";
import { Menu, X, Hammer, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // for dropdown toggle

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services", dropdown: true }, // dropdown
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { label: "Furniture Solutions", to: "/furniture" },
    { label: "Construction Works", to: "/construction" },
    { label: "Interior Design", to: "/interior-design" },
    { label: "Maintenance & Repairs", to: "/maintenance" },
  ];

  const whatsappNumber = "+256791880099";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello Abujas Construction, I'd like to discuss a project.`;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="abujas-logo.png"
              alt="Abujas Logo"
              className="w-18 h-18 block md:hidden"
            />
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <h1 className="hidden md:flex items-center text-xl font-bold text-red-900 gap-2">
              <Hammer className="text-red-900" size={28} />
              Abujas Construction and Services Company Ltd.
            </h1>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-3 font-medium text-gray-700">
          {navLinks.map((link, idx) => (
            <li key={link.label} className="relative group flex items-center">
              {!link.dropdown ? (
                <a
                  href={link.href}
                  className="px-2 py-2 hover:text-red-900 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <>
                  <button
                    className="px-2 py-2 flex items-center gap-1 hover:text-red-900 transition-colors duration-200"
                  >
                    {link.label}
                    <ChevronDown size={16} />
                  </button>
                  {/* Dropdown Menu */}
                  <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-md rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {serviceLinks.map((service) => (
                    <li key={service.label}>
                      <Link
                        to={service.to}
                        className="block px-4 py-2 hover:bg-red-50 hover:text-red-900"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                  </ul>
                </>
              )}
              {idx < navLinks.length - 1 && (
                <span className="text-gray-400 mx-2">|</span>
              )}
            </li>
          ))}
        </ul>

        {/* WhatsApp + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* WhatsApp Button (Desktop) */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-all duration-200 shadow-sm"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="h-5 w-5" />
            <span>WhatsApp Us</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-red-900 p-2 rounded"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-red-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              {!link.dropdown ? (
                <a
                  href={link.href}
                  className="block p-2 rounded hover:text-red-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex justify-between items-center p-2 rounded hover:text-red-900"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isServicesOpen && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {serviceLinks.map((service) => (
                        <li key={service.label}>
                          <Link
                            to={service.to}
                            className="block p-2 rounded hover:bg-red-50 hover:text-red-900"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                </>
              )}
            </li>
          ))}

          {/* WhatsApp Button - Mobile */}
          <li>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
