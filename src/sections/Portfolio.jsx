import SectionHeader from "../components/SectionHeader";
import SectionLayout from "../components/SectionLayout";
import PortfolioCard from "../components/PortfolioCard";

export default function Portfolio() {
  const projects = [
    { title: "Web Design", image: "/portfolio/portfolio1.jpg" },
    { title: "Dashboard UI", image: "/portfolio/portfolio2.jpg" },
    { title: "Landing Page", image: "/portfolio/portfolio3.jpg" },
    { title: "Workspace Setup", image: "/portfolio/portfolio4.jpg" },
    { title: "Creative Desk", image: "/portfolio/portfolio5.jpg" },
    { title: "Developer Tools", image: "/portfolio/portfolio6.jpg" },
  ];

  return (
    <section
      id="portfolio"
      className="relative min-h-screen text-white scroll-mt-[96px]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(11,29,58,0.85), rgba(7,20,43,0.9)), url('/portfolio-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionLayout>
        <SectionHeader title="My" highlight="Portfolio" />

        {/* 2 rows × 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>
      </SectionLayout>
    </section>
  );
}