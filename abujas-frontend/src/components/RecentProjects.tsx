import { useState } from "react";

const RecentProjects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Eco-Friendly Housing",
      image: "1.jpg",
      category: "completed",
    },
    {
      id: 2,
      title: "Urban Park Renovation",
      image: "2.jpg",
      category: "ongoing",
    },
    {
      id: 3,
      title: "Community Center",
      image: "3.jpg",
      category: "completed",
    },
    {
      id: 4,
      title: "Green Energy Initiative",
      image: "4.jpg",
      category: "ongoing",
    },
    {
      id: 5,
      title: "Sustainable School",
      image: "5.jpg",
      category: "completed",
    },
    {
      id: 6,
      title: "Water Conservation Project",
      image: "6.jpg",
      category: "ongoing",
    },
    {
      id: 7,
      title: "Modern Office Space",
      image: "https://via.placeholder.com/400x300?text=Project+7",
      category: "completed",
    },
    {
      id: 8,
      title: "Smart City Infrastructure",
      image: "https://via.placeholder.com/400x300?text=Project+8",
      category: "ongoing",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
        <p className="text-gray-600 mt-2">Explore our completed and ongoing initiatives</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-8 space-x-2">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            activeFilter === "all"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("completed")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            activeFilter === "completed"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setActiveFilter("ongoing")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            activeFilter === "ongoing"
              ? "bg-yellow-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Ongoing
        </button>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Status Badge */}
              <div
                className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold text-white capitalize ${
                  project.category === 'completed'
                    ? 'bg-green-600'
                    : 'bg-yellow-500'
                }`}
              >
                {project.category}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {project.category === 'completed'
                  ? 'Completed • 2024'
                  : 'In Progress • Expected 2025'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found for this category.</p>
        </div>
      )}
    </section>
  );
};

export default RecentProjects;