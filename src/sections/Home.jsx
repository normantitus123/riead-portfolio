import { Facebook, Linkedin, Mail, Github } from "lucide-react";
import SectionLayout from "../components/SectionLayout";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(11,29,58,0.85), rgba(7,20,43,0.9)), url('/home-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <SectionLayout>
        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] items-center gap-[48px] lg:gap-[72px]">


          {/* LEFT */}
          <div className="max-w-[520px] pt-[24px]">
            <h1 className="text-[44px] leading-[54px] lg:text-[52px] lg:leading-[63px] font-semibold tracking-[0.01em]">
              MD RIEAD MIA
            </h1>

            <h2 className="mt-3 text-[28px] leading-[36px] lg:text-[32px] lg:leading-[39px] font-semibold">
              And I&apos;m a <span className="text-teal-400">Developer</span>
            </h2>

            <p className="mt-6 max-w-[500px] text-[16px] leading-[28px] font-medium text-white/85">
              I&apos;m professional web developer with strong skill in HTML, 
              CSS, JavaScript, Tailwind, JQuery etc. I have working in this 
              field almost 3 years and all projects are complited successfully 
              with 100% client satisfiction.
            </p>

            <div className="h-[32px]" />

            <div className="flex flex-col">
              <div className="flex gap-4 h-[40px] items-center">
                {[Facebook, Linkedin, Mail, Github].map((Icon, i) => (
                  <a
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00EEFF] text-[#00EEFF] transition duration-200 hover:bg-[#00EEFF] hover:text-[#1F242D]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <div className="h-[32px]" />
              
              <div className="flex flex-wrap gap-6">
                <a
                  href="#contact"
                   className="flex h-[42px] w-[172px] items-center justify-center rounded-full bg-[#00EEFF] text-[15px] font-semibold text-[#1F242D] shadow-[0_0_18px_rgba(0,238,255,0.28)]"
                  >
                Download CV
                </a>
                <a
                  href="#portfolio"
                  className="flex h-[42px] w-[139px] items-center justify-center rounded-full border border-[#00EEFF] text-[15px] font-semibold text-[#00EEFF] transition duration-200 hover:bg-[#00EEFF] hover:text-[#1F242D]"
                >
                Portfolio
              </a>
            </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/profile.png"
              alt="MD Riead Mia"
              className="w-[320px] sm:w-[380px] lg:w-[500px] h-auto object-contain drop-shadow-[0_0_30px_rgba(0,238,255,0.18)]"
            />
          </div>

        </div>
      </SectionLayout>
    </section>
  );
}