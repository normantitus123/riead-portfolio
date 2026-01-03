import SectionHeader from "../components/SectionHeader";
export default function About() {
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
      <div className="min-h-screen flex">
        {/* LEFT SPACER */}
        <div className="w-[120px] shrink-0" />

        {/* CONTENT COLUMN */}
        <div className="max-w-[1100px] w-full pt-24 pb-[200px]">
          
          {/* Section Title */}
         <SectionHeader title="About" highlight="Me" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

              {/* LEFT PROFILE CARD — Group 11 */}
              <div className="relative w-[363px] bg-[#00EEFF] rounded-[10px] pb-10 px-6 text-center">

                <div className="h-[160px]" />

                {/* Profile Image */}
                <div className="absolute -top-[122px] left-1/2 -translate-x-1/2">
                  <div className="w-[244px] h-[244px] rounded-full border-[6px] border-[#323946] bg-white flex items-center justify-center">
                    <img
                      src="/Riead.jpg"
                      alt="MD Riead Mia"
                      className="w-[230px] h-[230px] rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <div>
                  <h3 className="text-[32px] leading-[39px] font-bold text-white">
                  MD RIEAD MIA
                </h3>

                  {/* Roles */}   
                  <div className="mt-4 text-[20px] leading-[36px] font-semibold text-[#323946]">
                  <p>Frontend Developer</p>
                  <p>Backend Developer</p>
                  <p>Graphic Designer</p>
                </div>
                </div>
              </div>
              {/* RIGHT CONTENT */}
<div className="md:col-span-2">

  {/* Tabs */}
<div className="relative flex gap-12 mb-10">

  {/* ACTIVE TAB */}
  <button className="relative text-[20px] font-bold text-teal-400">
    Education Qualification

    {/* underline */}
    <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-teal-400" />
  </button>

  {/* INACTIVE TABS */}
  <button className="text-[20px] font-bold text-white">
    Short Course
  </button>

  <button className="text-[20px] font-bold text-white">
    Experience
  </button>

  <button className="text-[20px] font-bold text-white">
    Details
  </button>
</div>

  {/* Education Content */}
  <div className="ml-[80px] space-y-[36px] text-sm">

    <div>
      <h4 className="font-semibold text-[20px] leading-[36px] text-teal-400">
        BSC in CSE
      </h4>
      <p>Institute : Uttara University, Dhaka</p>
      <p>Session : 2024 – 25</p>
      <p>Result : Running (1st Semester)</p>
    </div>

    <div>
      <h4 className="font-semibold text-[20px] leading-[36px] text-teal-400">
        Diploma in Computer Technology
      </h4>
      <p>Institute : Kurigram Polytechnic Institute, Kurigram</p>
      <p>Session : 2019 – 20</p>
      <p>Result : CGPA 3.83 out of 4.00</p>
    </div>

    <div>
      <h4 className="font-semibold text-[20px] leading-[36px] text-teal-400">
        Secondary School Certificate (SSC)
      </h4>
      <p>Institute : Adarsha High School, Dhaka</p>
      <p>Session : 2016 – 17</p>
      <p>Result : GPA 4.61 out of 5.00</p>
    </div>

  </div>
</div>
            </div>
          </div>
        </div>
    </section>
  );
}