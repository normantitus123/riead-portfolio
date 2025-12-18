export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="text-xl font-bold">
          Norman
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>
          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>
          <a href="#portfolio" className="hover:text-blue-600 transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
