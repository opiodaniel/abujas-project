import { Hammer, BadgeDollarSign, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import RecentProjects from "../components/RecentProjects";
import WhyChooseUs from "../components/WhyChooseUs";
import TeamSection from "../components/TeamSection";
// import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa"; // FontAwesome
import { SiTiktok } from "react-icons/si"; 

export default function Home() {

  const whatsappNumber = "+256791880099";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello Abujas Construction, I'd like to discuss a project.`;

  return (
    <section className="text-gray-900 font-sans">
      <Navbar />

      {/* HERO - Updated to Red */}
      <section id="hero" className="relative bg-red-900 text-white py-10 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-red-500 rounded-full opacity-20" />
        <div className="absolute -left-20 bottom-0 w-80 h-80 bg-red-700 rounded-full opacity-20" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Crafting Comfort. <br /> Building Trust.
            </h1>
            <p className="text-lg mb-6 text-red-100">
              Abujas Construction and Services Company Ltd provides professional construction, carpentry, 
              interior design, and maintenance services — and connects you to vetted electricians, plumbers, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="hire"
                className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition shadow"
              >
                Book a Service
              </Link>

              <Link
                to="/furniture"
                className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition shadow"
              >
                Shop Furniture
              </Link>
            </div>

            <p className="text-red-100 text-sm mt-6">
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

      {/* ABOUT STRIP - Updated to Red */}
      <div id="about" className="bg-red-800 px-6 md:px-12 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Build, Renovate, or Maintain with Confidence
            </h2>
            <p className="text-red-100 mt-2 text-sm md:text-base">
              Whether it’s a bespoke furniture piece, a full-scale construction project, or routine maintenance, 
              Abujas ensures quality, reliability, and a seamless experience every step of the way.
            </p>
          </div>
          <div className="shrink-0">
            <a href="#how-it-works" className="bg-white text-red-700 hover:bg-red-100 font-bold py-2 px-4 rounded-full text-sm transition shadow-md hover:shadow-lg">
              Learn How Abujas Works
            </a>
          </div>
        </div>
      </div>

      {/* FEATURE CARDS - Updated Icons & Text */}
      <div className="bg-gray-50 py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <Hammer className="text-white" />
            </div>
            <h3 className="text-lg font-bold">Comprehensive Construction Works</h3>
            <p className="text-gray-500 text-sm">
              Small, medium, and large-scale projects including roofing, masonry, building works, architectural planning, and renovations.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <BadgeDollarSign className="text-white" />
            </div>
            <h3 className="text-lg font-bold">Furniture Solutions</h3>
            <p className="text-gray-500 text-sm">
              Quality furniture for home and office: cupboards, beds, sofas, tables, office desks, shelves, and custom-made pieces.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
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
      <section className="bg-red-50 py-12 px-6 shadow-inner">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-red-700">320+</p>
            <p className="text-sm mt-1">Registered Professionals</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-600">1,200+</p>
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

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-red-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">How Abujas Works</h2>
          <p className="text-gray-600 mt-2">
            A simple, transparent process to get your projects done efficiently.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Select a Service", desc: "Choose from furniture, interior design, construction, or maintenance services that suit your needs." },
            { step: "2", title: "Get Expert Consultation", desc: "Our skilled professionals provide guidance, suggest solutions, and give accurate estimates for your project." },
            { step: "3", title: "Book & Schedule", desc: "Confirm your service, agree on milestones, and schedule appointments at your convenience." },
            { step: "4", title: "Track & Complete", desc: "Monitor progress, communicate with professionals, and complete your project with confidence and satisfaction." },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transform hover:scale-105 transition">
              <div className="w-12 h-12 flex items-center justify-center bg-red-600 text-white rounded-full text-xl mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <RecentProjects />

      {/* Testimonials */}
      <section id="testimonials" className="bg-red-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah K.", role: "Home Owner", text: "Abujas connected me with a skilled carpenter who fixed my kitchen cabinets in no time. Professional and affordable!" },
            { name: "David M.", role: "Construction Manager", text: "Reliable electricians, always on time. I trust Abujas for all my site needs." },
            { name: "Emily R.", role: "Property Manager", text: "The plumbing team was excellent — quick response and high-quality work. Highly recommend!" },
          ].map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-50 shadow-md p-6 rounded-xl hover:shadow-lg transition">
              <p className="text-gray-700 mb-4 italic">“{testimonial.text}”</p>
              <h4 className="font-semibold text-red-700">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <TeamSection />

      {/* CONTACT */}
      <section className="py-16 bg-red-50" id="contact">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
              <div className="lg:w-1/2 w-full space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Talk</h2>
                  <p className="text-gray-600 leading-relaxed max-w-xs">
                    Have a big idea or brand to develop and need help? Reach out — we'd love to hear about your project.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Email</h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href="mailto:info@abujas.com" className="text-red-600 hover:text-red-800 font-medium transition-colors duration-200">
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
                      className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="text-white w-5 h-5" />
                    </a>

                    {/* TikTok */}
                    {/* TikTok */}
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                      aria-label="TikTok"
                    >
                      <SiTiktok className="text-white w-5 h-5" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-white w-5 h-5" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center hover:opacity-90 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-white w-5 h-5" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                    aria-label="Chat on WhatsApp"
                  >
                    <FaWhatsapp className="text-white w-5 h-5" />
                  </a>                  
                </div>
              </div>

              </div>

              <div className="lg:w-1/2 w-full max-w-md">
                <form className="space-y-4">
                  <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                  <input type="text" placeholder="Subject" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                  <textarea placeholder="Your message" rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"></textarea>
                  <button type="submit" className="w-full bg-red-700 text-white py-2.5 px-6 rounded-lg font-medium hover:bg-red-700 transition">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-16 bg-red-50 px-6">
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
            <img key={idx} src={logo} alt="Partner logo" className="h-12 mx-auto grayscale hover:grayscale-0 transition" />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-red-900 via-red-700 to-red-600 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Abujas</h2>
            <p className="text-red-100 text-sm">
              Crafting Comfort, Creating Trust. Abujas Construction & Services Company Ltd delivers quality construction, furniture, and interior solutions.
            </p>
          </div>
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
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white/80 transition">Furniture Solutions</a></li>
              <li><a href="#" className="hover:text-white/80 transition">Construction Works</a></li>
              <li><a href="#" className="hover:text-white/80 transition">Interior Design</a></li>
              <li><a href="#" className="hover:text-white/80 transition">Maintenance & Repairs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-red-100 text-sm mb-2">123 Abujas Street, Kampala, Uganda</p>
            <p className="text-red-100 text-sm mb-2">+256 781 218 116</p>
            <p className="text-red-100 text-sm">info@abujas.com</p>
          </div>
        </div>
        <div className="border-t border-red-600 mt-12 pt-6 text-center text-red-100 text-sm">
          &copy; {new Date().getFullYear()} Abujas Construction & Services Company Ltd. All rights reserved.
        </div>
      </footer>
    </section>
  );
}
