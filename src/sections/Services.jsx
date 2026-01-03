import SectionHeader from "../components/SectionHeader";
import SectionLayout from "../components/SectionLayout";
import { Globe, Code2, Paintbrush } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Design",
      description:
        "I am professional web designer. I have designed more than 50 website templates for my clients. Clean and modern design is my priority.",
      active: false,
      icon: Globe,
    },
    {
      title: "Web Development",
      description:
        "I am professional web developer. I have developed many websites using modern technologies. I focus on performance and clean code.",
      active: false,
      icon: Code2,
    },
    {
      title: "Graphic Design",
      description:
        "I am professional graphic designer. I have designed logos, banners, and posters with creative and clean visual concepts.",
      active: false,
      icon: Paintbrush,
    },
  ];

  return (
    <section
      id="services"
      className="relative text-white scroll-mt-[96px]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(11,29,58,0.85), rgba(7,20,43,0.9)), url('/services-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionLayout>
        {/* Section Title */}
        <SectionHeader title="My" highlight="Services" />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] items-start">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </SectionLayout>
    </section>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className="
        w-[385px] h-[484px]
        bg-[rgba(31,36,45,0.8)]
        rounded-[16px]
        flex flex-col items-center
        pt-[56px]
        px-[18px]
      "
      style={{
        outline: service.active ? "2px solid #00EEFF" : "none",
      }}
    >
      {/* ICON */}
      <div className="mb-[28px]">
        <Icon size={48} className="text-teal-400" />
      </div>

      {/* TITLE */}
      <h3 className="text-[26px] leading-[36px] font-bold text-teal-400 text-center mb-[15px]">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[16px] leading-[24px] font-medium text-white text-center px-[14px]">
        {service.description}
      </p>

      {/* PUSH BUTTON TO BOTTOM */}
      <div className="mt-auto pb-[32px]">
        <button
          className={`
            w-[288px] h-[35px]
            rounded-[20px]
            text-[16px] font-bold
            flex items-center justify-center
            ${
              service.active
                ? "bg-[#00EEFF] text-[#323946]"
                : "bg-white text-[#323946]"
            }
          `}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}