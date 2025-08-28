import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const BookServicePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const services = [
    'Carpentry',
    'Construction',
    'Interior Design',
    'Furniture Customization',
    'Electrical',
    'Plumbing',
    'Maintenance & Repairs',
    'Welding',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll contact you shortly about your ${formData.service} request.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const whatsappNumber = "+256791880099";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello Abujas Construction, I'd like to book a service: ${formData.service || 'General Inquiry'}. My name is ${formData.name || 'a client'}.`;

  return (
    <>
      <Navbar />

      {/* COMPACT HERO - Updated to Red */}
      <section id="hero" className="relative bg-red-900 text-white py-8 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-red-700 rounded-full opacity-20" />
        <div className="absolute -left-16 bottom-0 w-64 h-64 bg-red-800 rounded-full opacity-20" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              Book a Service
            </h1>
            <p className="text-sm md:text-base mb-4 text-red-100 max-w-md mx-auto md:mx-0">
              Tell us about your project, and we’ll connect you with the right expert.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/hire"
                className="bg-white text-red-900 text-sm px-5 py-2 rounded-lg font-semibold hover:bg-red-50 transition shadow"
              >
                Book a Service
              </Link>
              <Link
                to="/furniture"
                className="bg-red-800 text-white text-sm px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition shadow"
              >
                Shop Furniture
              </Link>
            </div>
            <p className="text-red-100 text-xs mt-3">
              Carpentry · Construction · Electrical · Plumbing · Welding · More
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 mt-6 md:mt-0 flex justify-center">
            <img
              src="/images/hero-service.jpg"
              alt="Abujas construction and carpentry service"
              className="max-w-full h-auto rounded-lg shadow-lg w-48 md:w-64"
            />
          </div>
        </div>
      </section>

      {/* COMPACT ABOUT STRIP - Red */}
      <div id="about" className="bg-red-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-white">
              From Inquiry to Completion
            </h2>
            <p className="text-red-100 text-xs md:text-sm">
              We make booking professional services simple, fast, and reliable.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="bg-white text-red-800 text-xs font-bold py-1.5 px-3 rounded-full hover:bg-red-100 transition shadow-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* TWO-COLUMN SERVICE FORM */}
      <section id="contact" className="py-12 px-6 bg-red-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left: Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src="img_8.pn"
              alt="Book a construction or carpentry service"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Form */}
          <div className="lg:w-1/2 w-full bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Project</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Phone & Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="e.g. +256781234567"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-900 font-semibold mb-2">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  >
                    <option value="">Choose a service</option>
                    {services.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  placeholder="Describe your project, timeline, and any specific needs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-red-900 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
                >
                  Submit Request
                </button>
              </div>
            </form>

            {/* WhatsApp Alternative */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm mb-3">Or connect directly:</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-1.758-.148-1.93.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.443.883.892-3.397-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-17.447A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.128 1.588 5.9L.057 24l6.305-1.641a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span>Message Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookServicePage;