import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ConstructionPage() {
  return (
    <>
      <Navbar />

      {/* COMPACT HERO - Construction */}
      <section
        id="hero"
        className="relative bg-red-900 text-white py-8 overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-red-700 rounded-full opacity-20" />
        <div className="absolute -left-16 bottom-0 w-64 h-64 bg-red-800 rounded-full opacity-20" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              Reliable Construction. <br /> Built with Precision.
            </h1>
            <p className="text-sm md:text-base mb-4 text-red-100 max-w-md mx-auto md:mx-0">
              From foundations to finishing touches — Abujas Construction
              delivers durable, modern, and safe structures tailored to your
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/hire"
                className="bg-white text-red-900 text-sm px-5 py-2 rounded-lg font-semibold hover:bg-red-50 transition shadow"
              >
                Hire Our Team
              </Link>
              <Link
                to="/projects"
                className="bg-red-800 text-white text-sm px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition shadow"
              >
                View Projects
              </Link>
            </div>
            <p className="text-red-100 text-xs mt-3">
              Residential · Commercial · Renovations · Roadworks · Custom Builds
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 mt-6 md:mt-0 flex justify-center">
            <img
              src="/images/construction-showcase.jpg"
              alt="Abujas construction site"
              className="max-w-full h-auto rounded-lg shadow-lg w-48 md:w-64"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <div id="about" className="bg-red-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-white">
              From Blueprint to Reality
            </h2>
            <p className="text-red-100 text-xs md:text-sm">
              Whether it’s a home, office, or public project, Abujas Construction
              ensures quality, safety, and timely delivery.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#projects"
              className="bg-white text-red-800 text-xs font-bold py-1.5 px-3 rounded-full hover:bg-red-100 transition shadow-sm"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Our Construction Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            We handle projects of all scales, from residential to commercial and
            public works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Residential Homes",
              desc: "Modern, durable, and energy-efficient homes designed for comfort.",
              img: "residential.jpg",
            },
            {
              title: "Commercial Buildings",
              desc: "High-quality office complexes, malls, and business spaces.",
              img: "commercial.png",
            },
            {
              title: "Renovations",
              desc: "Transforming old spaces into modern, functional environments.",
              img: "renovation.png",
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

      {/* PROJECT SHOWCASE */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Ongoing & Completed Projects
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Take a look at some of our construction sites and finished projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "/images/project1.jpg",
            "/images/project2.jpg",
            "/images/project3.jpg",
            "/images/project4.jpg",
            "/images/project5.jpg",
            "/images/project6.jpg",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Project ${i + 1}`}
              className="rounded-lg shadow-md object-cover h-48 w-full"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-900 text-white py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Ready to Start Your Project?
        </h2>
        <p className="text-red-100 max-w-xl mx-auto mb-6">
          Partner with Abujas Construction to bring your vision to life. Get in
          touch today for a free consultation and quote.
        </p>
        <Link
          to="/contact"
          className="bg-white text-red-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-100 transition shadow"
        >
          Contact Us
        </Link>
      </section>
    
    </>
  );
}
