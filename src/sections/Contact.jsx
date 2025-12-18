export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left content */}
        <div>
          {/* Logo */}
          <div className="mb-6 text-xl font-semibold text-teal-400">
            RIEAD
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
            I’m a professional web developer. I have developed many
            websites and completed projects with full client satisfaction.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 text-gray-400">
            {["🌐", "✉️", "in", "f"].map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center border border-slate-700 rounded-full hover:border-teal-400 hover:text-teal-400 transition cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div>
          <h2 className="text-right text-3xl font-semibold mb-10">
            Contact <span className="text-teal-400">Me</span>
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <input
              type="text"
              placeholder="First Name"
              className="bg-slate-800 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-400"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="bg-slate-800 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-slate-800 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-400"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="bg-slate-800 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="md:col-span-2 bg-slate-800 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-400"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="md:col-span-2 bg-slate-800 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-400 resize-none"
            />

            <button
              type="submit"
              className="w-fit mt-4 px-8 py-3 bg-teal-400 text-slate-900 rounded-md text-sm font-medium hover:bg-teal-300 transition"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
