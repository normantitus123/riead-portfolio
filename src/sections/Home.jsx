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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[72px]">

          {/* LEFT */}
          <div className="max-w-[520px]">
            <h1 className="text-[52px] leading-[63px] font-semibold">
              MD RIEAD MIA
            </h1>

            <h2 className="text-[32px] leading-[39px] font-semibold mt-2">
              And I&apos;m a <span className="text-teal-400">Developer</span>
            </h2>

            <p className="mt-6 text-[16px] leading-[26px] font-semibold">
              I&apos;m professional web developer with strong skill in HTML, 
              CSS, JavaScript, Tailwind, JQuery etc. I have working in this 
              field almost 3 years and all projects are complited successfully 
              with 100% client satisfiction.
            </p>

            <div className="mt-8 ">
              <div className="flex gap-4 h-[40px] items-center mb-[32px]">
                {[Facebook, Linkedin, Mail, Github].map((Icon, i) => (
                  <a
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-teal-400
                               flex items-center justify-center text-teal-400
                               hover:bg-teal-400 hover:text-slate-900 transition"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <div className="flex gap-6">
                <a className="w-[172px] h-[38px] rounded-full bg-teal-400
                              flex items-center justify-center text-slate-900 font-semibold">
                  Download CV
                </a>
                <a className="w-[139px] h-[38px] rounded-full bg-teal-400
                              flex items-center justify-center text-slate-900 font-semibold">
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <img
              src="/profile.png"
              alt="MD Riead Mia"
              className="w-[500px] h-[608px] object-cover"
            />
          </div>

        </div>
      </SectionLayout>
    </section>
  );
}