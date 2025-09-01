import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function InteriorDesignPage() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section
        id="hero"
        className="relative bg-red-900 text-white py-8 overflow-hidden"
      >
        {/* Decorations */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-red-700 rounded-full opacity-20" />
        <div className="absolute -left-16 bottom-0 w-64 h-64 bg-red-800 rounded-full opacity-20" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              Elegant Interiors. <br /> Designed for Comfort & Style.
            </h1>
            <p className="text-sm md:text-base mb-4 text-red-100 max-w-md mx-auto md:mx-0">
              Abujas Interior Design brings creativity, elegance, and
              functionality together to craft spaces that reflect your taste and
              lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/hire"
                className="bg-white text-red-900 text-sm px-5 py-2 rounded-lg font-semibold hover:bg-red-50 transition shadow"
              >
                Book a Designer
              </Link>
              <Link
                to="/portfolio"
                className="bg-red-800 text-white text-sm px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition shadow"
              >
                View Portfolio
              </Link>
            </div>
            <p className="text-red-100 text-xs mt-3">
              Residential · Commercial · Luxury · Renovations
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 mt-6 md:mt-0 flex justify-center">
            <img
              src="/images/interior-hero.jpg"
              alt="Interior design showcase"
              className="max-w-full h-auto rounded-lg shadow-lg w-56 md:w-72"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div id="about" className="bg-red-800 px-6 py-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Spaces That Inspire
          </h2>
          <p className="text-red-100 text-sm md:text-base max-w-2xl mx-auto">
            From living rooms to luxury offices, we transform ordinary spaces
            into extraordinary interiors. With a balance of modern trends and
            timeless design, we create spaces that are both functional and
            inspiring.
          </p>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Interior Design Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Tailored solutions for every style — whether minimal, classic, or
            luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Space Planning",
              desc: "Optimizing layouts for comfort, flow, and efficiency.",
              img: "/images/space-planning.jpg",
            },
            {
              title: "Furniture & Decor",
              desc: "Custom furniture and décor pieces to match your style.",
              img: "/images/furniture.jpg",
            },
            {
              title: "Lighting Design",
              desc: "Ambient, task, and accent lighting for perfect moods.",
              img: "/images/lighting.jpg",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-red-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Recent Interior Projects
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            A glimpse into our beautifully crafted interiors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "/images/interior1.jpg",
            "/images/interior2.jpg",
            "/images/interior3.jpg",
            "/images/interior4.jpg",
            "/images/interior5.jpg",
            "/images/interior6.jpg",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Interior Project ${i + 1}`}
              className="rounded-lg shadow-md object-cover h-48 w-full"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-900 text-white py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Let’s Redesign Your Space Today!
        </h2>
        <p className="text-red-100 max-w-xl mx-auto mb-6">
          Work with Abujas Interior Design to bring beauty, comfort, and style
          into your home or office. Get started with a consultation.
        </p>
        <Link
          to="/contact"
          className="bg-white text-red-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-100 transition shadow"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
