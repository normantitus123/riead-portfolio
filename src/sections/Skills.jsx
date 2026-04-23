import SectionHeader from "../components/SectionHeader";
import SectionLayout from "../components/SectionLayout";
import SkillTag from "../components/SkillTag";

export default function Skills() {
  const leftSkills = [
    { name: "HTML-5", percent: 90, iconSrc: "/icons/Ellipse 3.png" },
    { name: "Tailwind CSS", percent: 80, iconSrc: "/icons/Ellipse 3-2.png" },
    { name: "React", percent: 60, iconSrc: "/icons/Ellipse 3-3.png" },
    { name: "Adobe Photoshop", percent: 85, iconSrc: "/icons/Ellipse 3-4.png" },
  ];

  const rightSkills = [
    { name: "CSS-3", percent: 80, iconSrc: "/icons/Ellipse 3-1.png" },
    { name: "JavaScript", percent: 60, iconSrc: "/icons/Ellipse 3-5.png" },
    { name: "Figma", percent: 90, iconSrc: "/icons/Ellipse 3-6.png" },
    { name: "Adobe Illustrator", percent: 90, iconSrc: "/icons/Ellipse 3-7.png" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="flex flex-col">
            {leftSkills.map((skill, i) => (
              <SkillTag key={i} {...skill} />
            ))}
          </div>

          <div className="flex flex-col">
            {rightSkills.map((skill, i) => (
              <SkillTag key={i} {...skill} />
            ))}
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
