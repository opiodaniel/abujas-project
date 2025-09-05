import { useState } from 'react';

const RecentProjects = () => {
  interface Project {
    id: number;
    title: string;
    image: string;
    category: "completed" | "ongoing";
    description: string;
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'completed' | 'ongoing'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'TV Wall & Entertainment Unit',
      image: '1.jpg',
      category: 'completed',
      description: 'Custom media wall with integrated shelving and concealed cable management in warm wood veneer.',
    },
    {
      id: 2,
      title: 'Wall Paneling & Mirror Console (Living Room)',
      image: '2.jpg',
      category: 'ongoing',
      description: 'Geometric wall panels with a mirror console and plants—finishes and styling in progress.',
    },
    {
      id: 3,
      title: 'Curved Lounge Chair — Custom Carpentry',
      image: '3.jpg',
      category: 'completed',
      description: 'Hand-crafted bent-wood chair upholstered in teal velvet; sculptural form with smooth edge profiling.',
    },
    {
      id: 4,
      title: 'Cupboard Installation',
      image: '4.jpg',
      category: 'ongoing',
      description: 'L-shaped cabinetry install; hardware fitting and countertop templating currently underway.',
    },
    {
      id: 5,
      title: 'Residential Living Room Makeover',
      image: '5.jpg',
      category: 'completed',
      description: 'Warm ambient lighting, blinds, accent furniture, and natural textures for a cozy family space.',
    },
    {
      id: 6,
      title: 'Bathroom Vanity & Shelving Fabrication',
      image: '6.jpg',
      category: 'ongoing',
      description: 'Workshop build of white vanity units with drawers; sanding and finishing in progress.',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-5 px-6 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
        <p className="text-gray-600">Explore our completed and ongoing initiatives</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-10 flex-wrap gap-3">
        {['all', 'completed', 'ongoing'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter as any)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-all duration-300 shadow-sm
              ${
                activeFilter === filter
                  ? 'bg-red-700 text-white shadow-red-200'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-700'
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
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 aspect-video cursor-pointer"
            onClick={() => openModal(project)}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient: Only at bottom (safe, never hides image) */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

            {/* Content: Always visible on mobile, enhanced on desktop hover */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(project);
                }}
                className="inline-flex items-center gap-1.5 bg-red-700 hover:bg-red-800 px-3 py-1.5 rounded text-xs font-medium cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Project</span>
              </button>
            </div>

            {/* Status Badge */}
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
              <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors duration-200">
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