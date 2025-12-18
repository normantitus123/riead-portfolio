export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            MD RIEAD MIA
          </h1>

          <h2 className="text-xl md:text-2xl mb-6">
            And I’m a{" "}
            <span className="text-teal-400 font-semibold">
              Developer
            </span>
          </h2>

          <p className="text-gray-300 max-w-md mb-8 text-sm leading-relaxed">
            I’m a professional web developer with strong skills in HTML,
            CSS, JavaScript and React. I have completed many projects
            successfully with 100% client satisfaction.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-teal-400 text-slate-900 rounded-md text-sm font-medium hover:bg-teal-300 transition"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-teal-400 text-teal-400 rounded-md text-sm font-medium hover:bg-teal-400 hover:text-slate-900 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social icons (placeholders) */}
          <div className="flex gap-4">
            {["F", "L", "G", "T"].map((item, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center border border-teal-400 rounded-full text-sm text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

{/* Right image */}
<div className="flex justify-center md:justify-end">
  <div className="relative w-72 h-80">

    {/* Glow */}
    <div className="absolute inset-0 bg-teal-400 blur-3xl opacity-30" />

    {/* Hexagon image */}
    <div className="relative w-full h-full hexagon overflow-hidden bg-slate-800">
      <img
        src="/profile.png"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>


      </div>
    </section>
  );
}
