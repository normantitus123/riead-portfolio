import { useState } from "react";
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
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
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="
        w-[350px]
        h-[500px]
        bg-[rgba(31,36,45,0.92)]
        border border-cyan-400/20
        rounded-[16px]
        px-[22px]
        pt-[32px]
        pb-[28px]
        text-center
        grid
        justify-items-center
        gap-y-[18px]
      "
      style={{
        outline: isActive ? "2px solid #00EEFF" : "none",
      }}
    >
      <div className="h-full grid justify-items-center gap-y-[18px]">
        <div className="h-[32px]" />
          <div className="w-[94px] h-[94px]">
           <Icon className="w-full h-full text-[#00EEFF]" strokeWidth={1.8} />
         </div>

         <h3 className="text-[21px] leading-[28px] font-semibold text-white">
           {service.title}
         </h3>

         <p className="max-w-[260px] text-[14px] leading-[22px] font-normal text-slate-300">
           {service.description}
         </p>

          <div className="mt-auto pt-[14px]">
            <button
              className={`
                w-[288px] h-[35px]
                rounded-[20px]
                text-[16px] font-bold
                flex items-center justify-center
                ${
                  isActive
                    ? "bg-[#00EEFF] text-[#323946]"
                    : "bg-white text-[#323946]"
                }
              `}
            >
              Hire Me
            </button>
        </div>
      </div>
    </div>
  );
}