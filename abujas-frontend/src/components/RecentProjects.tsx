const RecentProjects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Eco-Friendly Housing",
      image: "1.jpg",
      status: "completed", // "completed" or "ongoing"
    },
    {
      id: 2,
      title: "Urban Park Renovation",
      image: "2.jpg",
      status: "ongoing",
    },
    {
      id: 3,
      title: "Community Center",
      image: "3.jpg",
      status: "completed",
    },
    {
      id: 4,
      title: "Green Energy Initiative",
      image: "4.jpg",
      status: "ongoing",
    },
    {
      id: 5,
      title: "Sustainable School",
      image: "5.jpg",
      status: "completed",
    },
    {
      id: 6,
      title: "Water Conservation Project",
      image: "6.jpg",
      status: "ongoing",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
        <p className="text-gray-600 mt-2">Explore our completed and ongoing initiatives</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Status Badge */}
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white capitalize ${
                  project.status === 'completed'
                    ? 'bg-green-600'
                    : 'bg-yellow-500'
                }`}
              >
                {project.status}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              
              {/* Optional: Add a short description or action */}
              <p className="text-gray-600 text-sm">
                {project.status === 'completed'
                  ? 'Completed in 2024'
                  : 'Expected completion: 2025'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;