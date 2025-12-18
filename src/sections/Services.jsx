export default function Services() {
  const services = [
    {
      title: "Web Design",
      description:
        "I am professional web designer. I have designed more than 50 website templates for my clients. Clean and modern design is my priority.",
      active: false,
      icon: "🌐",
    },
    {
      title: "Web Development",
      description:
        "I am professional web developer. I have developed many websites using modern technologies. I focus on performance and clean code.",
      active: false,
      icon: "</>",
    },
    {
      title: "Graphic Design",
      description:
        "I am professional graphic designer. I have designed logos, banners, and posters with creative and clean visual concepts.",
      active: false,
      icon: "🎨",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title */}
        <h2 className="text-right text-3xl font-semibold mb-16">
          My <span className="text-teal-400">Services</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div
      className={`rounded-xl p-8 text-center border transition
        ${
          service.active
            ? "border-teal-400"
            : "border-slate-700"
        }
      `}
    >
      {/* Icon */}
      <div className="text-4xl text-teal-400 mb-6">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-4">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-8">
        {service.description}
      </p>

      {/* Button */}
      <button
        className={`px-6 py-2 rounded-md text-sm font-medium transition
          ${
            service.active
              ? "bg-teal-400 text-slate-900"
              : "bg-slate-700 text-white hover:bg-slate-600"
          }
        `}
      >
        Hire Me
      </button>
    </div>
  );
}
