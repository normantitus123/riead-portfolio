export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Norman. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:your@email.com"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}

