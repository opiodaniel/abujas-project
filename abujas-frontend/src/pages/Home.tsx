// src/pages/Home.tsx
import { Hammer, BadgeDollarSign, CalendarCheck, Building, Droplets, Plug, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import RecentProjects from "../components/RecentProjects";
import WhyChooseUs from "../components/WhyChooseUs";

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
            Crafting Comfort. <br /> Building Trust.
            </h1>
            <p className="text-lg mb-6 text-green-100">
              Abujas Construction and Services Company Ltd provides professional construction, carpentry, 
              interior design, and maintenance services — and connects you to vetted electricians, plumbers, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/hire"
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition shadow"
              >
                Book a Service
              </Link>

              <Link
                to="/furniture"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow"
              >
                Shop Furniture
              </Link>
            </div>

            <p className="text-green-100 text-sm mt-6">
              Carpentry · Construction · Electrical · Plumbing · Welding · More
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center">
            <img
              src="/images/hero.svg"
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
            Build, Renovate, or Maintain with Confidence
            </h2>
            <p className="text-emerald-100 mt-2 text-sm md:text-base">
              Whether it’s a bespoke furniture piece, a full-scale construction project, or routine maintenance, 
              Abujas ensures quality, reliability, and a seamless experience every step of the way.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/how-it-works"
              className="bg-white text-emerald-700 hover:bg-emerald-100 font-bold py-2 px-4 rounded-full text-sm transition shadow-md hover:shadow-lg"
            >
              Learn How Abujas Works
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
            <h3 className="text-lg font-bold">Comprehensive Construction Works</h3>
            <p className="text-gray-500 text-sm">
            Small, medium, and large-scale projects including roofing, masonry, building works, architectural planning, and renovations.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <BadgeDollarSign className="text-white" />
            </div>
            <h3 className="text-lg font-bold">Furniture Solutions</h3>
            <p className="text-gray-500 text-sm">
              Quality furniture for home and office: cupboards, beds, sofas, tables, office desks, shelves, and custom-made pieces.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <CalendarCheck className="text-white" />
            </div>
            <h3 className="text-lg font-bold">Interior Design & Expert Services</h3>
            <p className="text-gray-500 text-sm">
               Stylish, functional interior solutions: kitchen designs, bedrooms, offices, bathrooms, lighting, 
               flooring, and additional services like electrical & plumbing.
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


      {/* Services Section */}
      <Services />    


      {/* How It Works  */}
      <section id="how-it-works" className="py-20 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">How Abujas Works</h2>
          <p className="text-gray-600 mt-2">
            A simple, transparent process to get your projects done efficiently.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition">
            <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full text-xl mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Select a Service</h3>
            <p className="text-gray-500 text-sm text-center">
              Choose from furniture, interior design, construction, or maintenance services that suit your needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition">
            <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full text-xl mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Get Expert Consultation</h3>
            <p className="text-gray-500 text-sm text-center">
              Our skilled professionals provide guidance, suggest solutions, and give accurate estimates for your project.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition">
            <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full text-xl mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Book & Schedule</h3>
            <p className="text-gray-500 text-sm text-center">
              Confirm your service, agree on milestones, and schedule appointments at your convenience.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition">
            <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full text-xl mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2">Track & Complete</h3>
            <p className="text-gray-500 text-sm text-center">
              Monitor progress, communicate with professionals, and complete your project with confidence and satisfaction.
            </p>
          </div>

        </div>
      </section>
 


      {/* Portfolio / Projects Preview */}

      <RecentProjects />


      {/* <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Recent Projects</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="1.jpg" alt="Project 1" className="rounded-lg shadow-md" />
          <img src="2.jpg" alt="Project 2" className="rounded-lg shadow-md" />
          <img src="3.jpg" alt="Project 3" className="rounded-lg shadow-md" />
        </div>
      </section> */}


      {/* Testimonials Section */}
      <section id="testimonials" className="bg-green-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah K.",
              role: "Home Owner",
              text: "Abujas connected me with a skilled carpenter who fixed my kitchen cabinets in no time. Professional and affordable!",
            },
            {
              name: "David M.",
              role: "Construction Manager",
              text: "Reliable electricians, always on time. I trust Abujas for all my site needs.",
            },
            {
              name: "Emily R.",
              role: "Property Manager",
              text: "The plumbing team was excellent — quick response and high-quality work. Highly recommend!",
            },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 shadow-md p-6 rounded-xl hover:shadow-lg transition"
            >
              <p className="text-gray-700 mb-4 italic">
                “{testimonial.text}”
              </p>
              <h4 className="font-semibold text-green-700">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <WhyChooseUs />


      {/* CONTACT */}
      <section className="py-16 bg-green-50" id="#contact">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Center content and limit max width */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
              
              {/* Left Column - Info */}
              <div className="lg:w-1/2 w-full space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Talk</h2>
                  {/* Limit text width */}
                  <p className="text-gray-600 leading-relaxed max-w-xs">
                    Have a big idea or brand to develop and need help? Reach out — we'd love to hear about your project.
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Email</h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href="mailto:info@abujas.com"
                      className="text-green-600 hover:text-green-800 font-medium transition-colors duration-200"
                    >
                      info@abujas.com
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Socials</h3>
                  <div className="flex space-x-4">
                    {/* Facebook */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33c-3.5 0-4.25 2.14-4.25 5.13v1.82H9v4.09h3.75v10.87h5.03v-10.87H22l-.23-4.09z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.146-3.233 1.659-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.163c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    {/* TikTok */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition-colors duration-200"
                      aria-label="TikTok"
                    >
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.53.02C13.84 0 15.14.01 16.44 0a12.64 12.64 0 0 1 2.93.7c1.4.66 2.49 1.83 3.12 3.25a10.5 10.5 0 0 1 1.31 5.8c.06 1.18-.07 2.36-.38 3.49-.12.44-.01.83.29 1.09a.87.87 0 0 1 .29.79c-.07.98-.45 1.85-1.02 2.58-.63.8-1.43 1.41-2.33 1.82a6.9 6.9 0 0 1-2.55.43c-1.53.07-3.07.03-4.6.03h-4.45c-.45 0-.45-.01-.45-.45v-7.78c0-.45 0-.45.45-.45a14.53 14.53 0 0 0 5.18-.6c.64-.23 1.2-.65 1.73-1.06.19-.15.3-.39.24-.63a.58.58 0 0 0-.32-.35c-.69-.35-1.45-.59-2.25-.7a.59.59 0 0 1-.49-.57c-.02-.37-.02-.73-.02-1.1 0-.06 0-.12.02-.18.03-1.38.47-2.74 1.25-3.87a.6.6 0 0 0 .16-.48.56.56 0 0 0-.31-.49 12.37 12.37 0 0 0-1.98-.84.52.52 0 0 0-.63.1c-.2.27-.38.56-.52.86a.59.59 0 0 0 .11.62c.18.15.37.29.57.41ZM9.8 18.83a4.13 4.13 0 0 0 3.94-3.29 3.51 3.51 0 0 0 .22-1.61v-.26a4.16 4.16 0 0 0-4.16 4.16Z" />
                      </svg>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition-colors duration-200"
                      aria-label="WhatsApp"
                    >
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-1.758-.148-1.93.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.443.883.892-3.397-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-17.447A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.128 1.588 5.9L.057 24l6.305-1.641a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:w-1/2 w-full max-w-md">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2.5 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 bg-green-50 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Trusted Partners
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {[
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
            "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
          ].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Partner logo"
              className="h-12 mx-auto grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* FOOTER WITH GRADIENT */}
      <footer className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold mb-4">Abujas</h2>
            <p className="text-green-100 text-sm">
              Crafting Comfort, Creating Trust. Abujas Construction & Services Company Ltd delivers quality construction, furniture, and interior solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-white/80 transition">Home</a></li>
              <li><a href="#about" className="hover:text-white/80 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-white/80 transition">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-white/80 transition">How It Works</a></li>
              <li><a href="#contact" className="hover:text-white/80 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white/80 transition">Furniture Solutions</a></li>
              <li><a href="#" className="hover:text-white/80 transition">Construction Works</a></li>
              <li><a href="#" className="hover:text-white/80 transition">Interior Design</a></li>
              <li><a href="#" className="hover:text-white/80 transition">Maintenance & Repairs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-green-100 text-sm mb-2">123 Abujas Street, Kampala, Uganda</p>
            <p className="text-green-100 text-sm mb-2">+256 700 123 456</p>
            <p className="text-green-100 text-sm">info@abujas.com</p>
          </div>
          
        </div>

        <div className="border-t border-green-600 mt-12 pt-6 text-center text-green-100 text-sm">
          &copy; {new Date().getFullYear()} Abujas Construction & Services Company Ltd. All rights reserved.
        </div>
      </footer>

      
    </section>
  );
}
