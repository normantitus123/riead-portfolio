import SectionHeader from "../components/SectionHeader";
import SectionLayout from "../components/SectionLayout";
import SkillTag from "../components/SkillTag";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

export default function Skills() {
  const leftSkills = [
    { name: "HTML-5", percent: 90, icon: SiHtml5, color: "#E34F26" },
    { name: "Tailwind CSS", percent: 80, icon: SiTailwindcss, color: "#38BDF8" },
    { name: "React", percent: 60, icon: SiReact, color: "#61DAFB" },
    { name: "Adobe Photoshop", percent: 85, icon: SiAdobephotoshop, color: "#31A8FF" },
  ];

  const rightSkills = [
    { name: "CSS-3", percent: 80, icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", percent: 60, icon: SiJavascript, color: "#F7DF1E" },
    { name: "Figma", percent: 90, icon: SiFigma, color: "#F24E1E" },
    { name: "Adobe Illustrator", percent: 90, icon: SiAdobeillustrator, color: "#FF9A00" },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen text-white scroll-mt-[96px]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(11,29,58,0.85), rgba(7,20,43,0.9)), url('/skills-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionLayout className="pb-[221px]">
        <SectionHeader title="My" highlight="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-10">
            {leftSkills.map((skill, i) => (
              <SkillTag key={i} {...skill} />
            ))}
          </div>

          <div className="space-y-10">
            {rightSkills.map((skill, i) => (
              <SkillTag key={i} {...skill} />
            ))}
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}