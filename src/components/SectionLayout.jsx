export default function SectionLayout({ children, className = "" }) {
  return (
    <div className={`flex ${className}`}>
      {/* LEFT SPACER */}
      <div className="w-[120px] shrink-0" />

      {/* CONTENT COLUMN */}
      <div className="max-w-[1100px] w-full pt-24">
        {children}
        <div className="h-[221px]" />
      </div>
    </div>
  );
}