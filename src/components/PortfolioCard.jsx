export default function PortfolioCard({
  image,
  title,
  link = "#",
}) {
  return (
    <div className="relative w-full h-[259px] rounded-[16px] overflow-hidden group cursor-pointer">
      
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00EEFF]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        
        {/* Title */}
        <h3 className="text-[28px] leading-[36px] font-bold text-white mb-4">
          {title}
        </h3>

        {/* External Link Icon */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[58px] h-[58px]"
        >
          <img
            src="/external-link.png"
            alt="Open project"
            className="w-full h-full"
          />
        </a>
      </div>
    </div>
  );
}