import NavLayout from "./NavLayout";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <NavLayout>
        <div className="flex items-start gap-[600px]">
                  
          {/* Logo */}
          <div className="text-xl font-semibold text-white">
            RIEAD
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="text-gray-300 hover:text-teal-400">Home</a>
            <a href="#about" className="text-gray-300 hover:text-teal-400">About</a>
            <a href="#skills" className="text-gray-300 hover:text-teal-400">Skills</a>
            <a href="#services" className="text-gray-300 hover:text-teal-400">Services</a>
            <a href="#portfolio" className="text-gray-300 hover:text-teal-400">Portfolio</a>
            <a href="#contact" className="text-gray-300 hover:text-teal-400">Contact</a>
          </nav>

      </div>
      </NavLayout>
    </header>
  );
}