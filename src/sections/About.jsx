export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-center text-3xl font-semibold mb-16">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* LEFT PROFILE CARD */}
          <div className="relative bg-teal-500 rounded-xl pt-20 pb-8 px-6 text-center">
            
            {/* Profile Image */}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2">
              <div className="w-28 h-28 rounded-full bg-gray-300 border-4 border-slate-900" />
            </div>

            <h3 className="text-xl font-bold mt-6">
              MD RIEAD MIA
            </h3>

            <p className="text-sm mt-2">Frontend Developer</p>
            <p className="text-sm">Backend Developer</p>
            <p className="text-sm">Graphic Designer</p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-2">
            
            {/* Tabs */}
            <div className="flex gap-8 border-b border-slate-700 pb-3 mb-8 text-sm">
              <button className="text-teal-400 font-medium border-b-2 border-teal-400 pb-2">
                Education Qualification
              </button>
              <button className="text-gray-400 hover:text-white">
                Short Course
              </button>
              <button className="text-gray-400 hover:text-white">
                Experience
              </button>
              <button className="text-gray-400 hover:text-white">
                Details
              </button>
            </div>

            {/* Education Content */}
            <div className="space-y-6 text-sm">
              
              <div>
                <h4 className="font-semibold text-teal-400">
                  BSC in CSE
                </h4>
                <p>Institute: Uttara University, Dhaka</p>
                <p>Session: 2020 – 25</p>
                <p>Result: Running (1st Semester)</p>
              </div>

              <div>
                <h4 className="font-semibold text-teal-400">
                  Diploma in Computer Technology
                </h4>
                <p>Institute: Kurigram Polytechnic Institute</p>
                <p>Session: 2019 – 20</p>
                <p>Result: CGPA 3.83 out of 4.00</p>
              </div>

              <div>
                <h4 className="font-semibold text-teal-400">
                  Secondary School Certificate (SSC)
                </h4>
                <p>Institute: Adarsha High School, Dhaka</p>
                <p>Session: 2016 – 17</p>
                <p>Result: GPA 4.61 out of 5.00</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
