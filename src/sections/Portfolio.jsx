export default function Projects() {
  const projects = [
    { title: "Web Design", active: true },
    { title: "Dashboard UI", active: false },
    { title: "Landing Page", active: false },
    { title: "Workspace Setup", active: false },
    { title: "Creative Desk", active: false },
    { title: "Developer Tools", active: false },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title */}
        <h2 className="text-right text-3xl font-semibold mb-16">
          My <span className="text-teal-400">Portfolio</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <PortfolioItem
              key={index}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function PortfolioItem({ project }) {
  return (
    <div
      className={`relative h-48 md:h-56 rounded-xl overflow-hidden cursor-pointer group
        ${
          project.active
            ? "ring-2 ring-teal-400"
            : ""
        }
      `}
    >
      {/* Image placeholder */}
      <div className="absolute inset-0 bg-slate-700 flex items-center justify-center text-gray-400">
        Image
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center
          ${
            project.active
              ? "bg-teal-400/80"
              : "bg-black/50 opacity-0 group-hover:opacity-100"
          }
          transition
        `}
      >
        <span className="text-lg font-semibold text-white">
          {project.title}
        </span>
      </div>
    </div>
  );
}
