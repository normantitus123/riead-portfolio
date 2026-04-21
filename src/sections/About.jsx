import SectionHeader from "../components/SectionHeader";
import SectionLayout from "../components/SectionLayout";

export default function About() {
  const educationItems = [
    {
      title: "BSC in CSE",
      institute: "Uttara University, Dhaka",
      session: "2024 - 25",
      result: "Running (1st Semester)",
    },
    {
      title: "Diploma In Computer Technology",
      institute: "Kurigram Polytechnic Institute, Kurigram",
      session: "2019 - 20",
      result: "CGPA 3.83 out of 4.00",
    },
    {
      title: "Secondary School Certificate (SSC)",
      institute: "Adarsha High School, Dhaka",
      session: "2016 - 17",
      result: "GPA 4.61 out of 5.00",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen text-white scroll-mt-[96px]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(11,29,58,0.85), rgba(7,20,43,0.9)), url('/about-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionLayout>
        <SectionHeader title="About" highlight="Me" />
        <div className="grid grid-cols-1 items-start gap-[8px] md:grid-cols-[320px_120px_752px]">
          <AboutCard />
          <div className="hidden md:block" />
          <AboutDetails educationItems={educationItems} />          
        </div>
      </SectionLayout>
    </section>
  );
}
function AboutCard() {
  return (
    <div className="justify-self-center md:justify-self-start">
      <div className="relative h-[475px] w-[363px]">
        <div className="absolute left-0 top-[120px] h-[355px] w-[363px] rounded-[10px] bg-[#00EEFF]" />

        <div className="absolute left-[60px] top-0 h-[240px] w-[244px] overflow-hidden rounded-full border-[10px] border-[#323946] bg-white">
          <img
            src="/Riead.jpg"
            alt="MD Riead Mia"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <h3 className="absolute left-1/2 top-[275px] w-[248px] -translate-x-1/2 text-center text-[32px] leading-[39px] font-bold text-white">
          MD RIEAD MIA
        </h3>

        <div className="absolute left-1/2 top-[323px] w-[207px] -translate-x-1/2 text-center text-[20px] leading-[36px] font-semibold text-[#323946]">
          <p>Frontend Developer</p>
          <p>Backend Developer</p>
          <p>Graphic Designer</p>
        </div>
      </div>
    </div>
  );
}

function AboutDetails({ educationItems }) {
  return (
    <div className="max-w-[752px] pt-[16px]">
            <div className="mb-[24px] flex flex-wrap items-center gap-x-[20px] gap-y-[12px] md:flex-nowrap">
              <button className="relative flex w-[268px] items-center justify-center px-[10px] text-center text-[20px] leading-[36px] font-bold text-[#00EEFF]">
                Education Qualification
                <span className="absolute -bottom-[6px] left-1/2 h-[2px] w-[244px] -translate-x-1/2 bg-[#00EEFF]" />
              </button>

              <button className="w-[137px] text-center text-[20px] leading-[36px] font-bold text-white">
                Short Course
              </button>

              <button className="w-[137px] text-center text-[20px] leading-[36px] font-bold text-white">
                Experience
              </button>

              <button className="w-[137px] text-center text-[20px] leading-[36px] font-bold text-white">
                Details
              </button>
            </div>
            <div className="h-18" />
            <div className="flex flex-col gap-[20px]">
              {educationItems.map((item) => (
                <div key={item.title} className="min-h-[74px]">
                  <h4 className="text-[16px] leading-[24px] font-semibold text-[#00EEFF]">
                    {item.title}
                  </h4>

                  <div className="mt-[2px] space-y-[1px] text-[13px] leading-[18px] text-white">
                    <p>Institute : {item.institute}</p>
                    <p>Session : {item.session}</p>
                    <p>Result : {item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  );
}
