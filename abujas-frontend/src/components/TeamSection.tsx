import { useState } from 'react';

// Define TypeScript interfaces
interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  whatsapp?: string;
  instagram?: string;
  email?: string;
  phone?: string;
}

interface Manager {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  details: string;
  social: SocialLinks;
}

const TeamSection = () => {
  const [selectedManager, setSelectedManager] = useState<Manager | null>(null);

  const managers: Manager[] = [
    {
      id: 1,
      name: "Jaspher Abulu",
      role: "Project Director",
      image: "img_1.png",
      bio: "15+ years of experience in construction management and sustainable design.",
      details: "Jaspher leads our strategic projects with a focus on sustainable design and client satisfaction. He has managed over 50+ construction projects across East Africa.",
      social: {
        linkedin: "#",
        twitter: "#",
        whatsapp: "#",
      },
    },
    {
      id: 2,
      name: "Daniel Opio",
      role: "Operations Manager",
      image: "img_2.png",
      bio: "Oversees daily operations and ensures all projects stay on time and budget.",
      details: "Daniel ensures smooth day-to-day operations, resource allocation, and timeline management for all ongoing projects.",
      social: {
        linkedin: "#",
        twitter: "#",
        whatsapp: "#",
      },
    },
    {
      id: 3,
      name: "Bosco Bosco Ceaser",
      role: "Finance & Admin Lead",
      image: "img_4.png",
      bio: "Manages financial planning, budgets, and administrative operations.",
      details: "Bosco oversees all financial aspects including budgeting, cost control, and reporting, ensuring transparency and accountability.",
      social: {
        linkedin: "#",
        twitter: "#",
        whatsapp: "#",
      },
    },
    {
      id: 4,
      name: "Solomon Olwa",
      role: "Construction Supervisor",
      image: "img_3.png",
      bio: "On-site lead ensuring quality, safety, and adherence to design standards.",
      details: "Solomon is our field expert, ensuring every construction phase meets safety codes, quality benchmarks, and architectural plans.",
      social: {
        linkedin: "#",
        twitter: "#",
        whatsapp: "#",
      },
    },
  ];

  const openModal = (manager: Manager) => {
    setSelectedManager(manager);
  };

  const closeModal = () => {
    setSelectedManager(null);
  };

  return (
    <section id="team" className="py-5 px-6 bg-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
        <p className="text-gray-600">
          Meet the experienced professionals leading Abujas Construction and Services Company Ltd.
        </p>
      </div>

      {/* Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full px-4">
          {managers.map((manager) => (
            <div
              key={manager.id}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Image Container */}
              <div
                className="relative h-64 sm:h-72 lg:h-80 overflow-hidden cursor-pointer"
                onClick={() => openModal(manager)}
              >
                <img
                  src={manager.image}
                  alt={manager.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="w-full p-4 text-white text-sm text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {manager.bio}
                  </div>
                </div>

                {/* Social Icons on Hover */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                  {manager.social.linkedin && (
                    <a
                      href={manager.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {manager.social.twitter && (
                    <a
                      href={manager.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  )}
                  {manager.social.whatsapp && (
                    <a
                      href={manager.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-1.758-.148-1.93.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.443.883.892-3.397-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-17.447A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.128 1.588 5.9L.057 24l6.305-1.641a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{manager.name}</h3>
                <p className="text-red-700 font-medium text-sm">{manager.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedManager && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full mx-auto overflow-hidden shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedManager.image}
              alt={selectedManager.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">{selectedManager.name}</h3>
              <p className="text-red-700 font-medium mb-3">{selectedManager.role}</p>
              <p className="text-gray-600 mb-4">{selectedManager.details}</p>

              {/* Social Icons in Modal */}
              <div className="flex justify-center space-x-6 mb-4 text-xl">
                {selectedManager.social.linkedin && (
                  <a
                    href={selectedManager.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                )}
                {selectedManager.social.whatsapp && (
                  <a
                    href={selectedManager.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-700 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                )}
                {selectedManager.social.twitter && (
                  <a
                    href={selectedManager.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-700 transition-colors"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
              </div>

              <button
                onClick={closeModal}
                className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;