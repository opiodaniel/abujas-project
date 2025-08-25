// src/pages/Home.tsx
import { Hammer, BadgeDollarSign, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section className="text-gray-900 font-sans">
      <Navbar />

      {/* HERO */}
      <section id="hero" className="relative bg-green-700 text-white py-10 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-green-500 rounded-full opacity-20" />
        <div className="absolute -left-20 bottom-0 w-80 h-80 bg-emerald-600 rounded-full opacity-20" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Hire trusted engineers & skilled trades.
            </h1>
            <p className="text-lg mb-6 text-green-100">
              Abujas connects customers to vetted carpenters, builders, electricians, plumbers,
              and more. Book maintenance or full projects, track progress, and get it done right.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/hire"
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition shadow"
              >
                Hire a Professional
              </Link>

              <Link
                to="/services"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow"
              >
                Browse Services
              </Link>
            </div>

            <p className="text-green-100 text-sm mt-6">
              Carpentry · Construction · Electrical · Plumbing · Welding · More
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center">
            <img
              src="/images/hero-illustration.svg"
              alt="Abujas engineering & maintenance marketplace"
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Optional wave */}
        <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="white" opacity="0.05">
          <path d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,218.7C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </section>

      {/* ABOUT STRIP */}
      <div id="about" className="bg-emerald-600 px-6 md:px-12 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Built for Engineering & Maintenance
            </h2>
            <p className="text-emerald-100 mt-2 text-sm md:text-base">
              From small home fixes to large construction projects, Abujas helps you find the right
              professional, get transparent quotes, and manage work milestones with ease.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/how-it-works"
              className="bg-white text-emerald-700 hover:bg-emerald-100 font-bold py-2 px-4 rounded-full text-sm transition shadow-md hover:shadow-lg"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="bg-gray-50 py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Hammer className="text-white" />
            </div>
            <h3 className="text-lg font-bold">Skilled Pros Across Trades</h3>
            <p className="text-gray-500 text-sm">
              Vetted engineers and artisans in carpentry, construction, electrical, plumbing, welding, and more.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <BadgeDollarSign className="text-white" />
            </div>
            <h3 className="text-lg font-bold">Instant Quotes & Transparent Rates</h3>
            <p className="text-gray-500 text-sm">
              Post your job, compare offers, and select the best fit based on price, experience, and reviews.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <CalendarCheck className="text-white" />
            </div>
            <h3 className="text-lg font-bold">Schedule & Track Progress</h3>
            <p className="text-gray-500 text-sm">
              Agree on milestones, track updates, and keep everything organized from start to finish.
            </p>
          </div>
        </div>
      </div>

      {/* IMPACT / STATS */}
      <section className="bg-green-50 py-12 px-6 shadow-inner">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-green-700">320+</p>
            <p className="text-sm mt-1">Registered Professionals</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-emerald-600">1,200+</p>
            <p className="text-sm mt-1">Jobs Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-600">24 hrs</p>
            <p className="text-sm mt-1">Avg. Response Time</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-3xl font-bold mb-3">Contact Abujas</h2>
          <p className="text-gray-600 mb-6">
            Have a project or need scheduled maintenance? We’re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@abujas.com"
              className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition text-center"
            >
              Email Us
            </a>
            <Link
              to="/hire"
              className="bg-white text-green-700 border border-green-600 px-5 py-3 rounded-lg hover:bg-green-50 transition text-center"
            >
              Hire a Professional
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
