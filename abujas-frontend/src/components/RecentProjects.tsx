import React, { useState } from 'react';

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Eco-Friendly Housing',
      image: '1.jpg',
      category: 'completed',
      description: 'A sustainable residential complex built with eco-friendly materials and solar energy systems. Completed in 2024.',
    },
    {
      id: 2,
      title: 'Urban Park Renovation',
      image: '2.jpg',
      category: 'ongoing',
      description: 'Modernizing public green spaces with accessible pathways, native plants, and community seating areas. Expected completion: Q3 2025.',
    },
    {
      id: 3,
      title: 'Community Center',
      image: '3.jpg',
      category: 'completed',
      description: 'A multi-purpose facility for local events, meetings, and recreational activities. Fully equipped with modern amenities.',
    },
    {
      id: 4,
      title: 'Green Energy Initiative',
      image: '4.jpg',
      category: 'ongoing',
      description: 'Installing solar panels and energy-efficient systems across municipal buildings to reduce carbon footprint.',
    },
    {
      id: 5,
      title: 'Sustainable School',
      image: '5.jpg',
      category: 'completed',
      description: 'An eco-conscious educational facility with natural lighting, rainwater harvesting, and green classrooms.',
    },
    {
      id: 6,
      title: 'Water Conservation Project',
      image: '6.jpg',
      category: 'ongoing',
      description: 'Implementing smart irrigation and water recycling systems for urban and agricultural use.',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
        <p className="text-gray-600">Explore our completed and ongoing initiatives</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-10 flex-wrap gap-3">
        {['all', 'completed', 'ongoing'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-all duration-300 shadow-sm
              ${
                activeFilter === filter
                  ? 'bg-green-600 text-white shadow-green-200'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-700'
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 aspect-video"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center p-6">
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center text-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <button
                  onClick={() => openModal(project)}
                  className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Project</span>
                </button>
              </div>
            </div>
            <div
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white capitalize min-w-max
                ${project.category === 'completed' ? 'bg-green-600' : 'bg-yellow-500'}
              `}
            >
              {project.category}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 p-6 relative">
            {/* Improved Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900 hover:scale-105 transition-all duration-200 focus:outline-none"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
            <p className="text-gray-600 mt-2">{selectedProject.description}</p>
            <div className="mt-4 space-x-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                Contact Us
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecentProjects;