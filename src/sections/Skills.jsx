export default function Skills() {
  const leftSkills = [
    { name: "Adobe Photoshop", percent: 85 },
    { name: "React", percent: 60 },
    { name: "Tailwind CSS", percent: 90 },
    { name: "HTML5", percent: 90 },
  ];

  const rightSkills = [
    { name: "Adobe Illustrator", percent: 80 },
    { name: "Figma", percent: 85 },
    { name: "JavaScript", percent: 80 },
    { name: "CSS3", percent: 80 },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title */}
        <h2 className="text-right text-3xl font-semibold mb-16">
          My <span className="text-teal-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left column */}
          <div className="space-y-8">
            {leftSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {rightSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">
          {skill.name}
        </span>
        <span className="text-sm text-gray-400">
          {skill.percent}%
        </span>
      </div>

      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-teal-400 rounded-full"
          style={{ width: `${skill.percent}%` }}
        />
      </div>
    </div>
  );
}
