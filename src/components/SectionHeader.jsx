function SectionTitle({ children }) {
  return (
    <h2 className="text-[36px] leading-[44px] font-bold text-center">
      {children}
    </h2>
  );
}
export default function SectionHeader({ title, highlight }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[80px]" />

      <h2 className="text-[36px] leading-[44px] font-bold text-center">
        <span className="text-white">{title} </span>
        <span className="text-teal-400">{highlight}</span>
      </h2>

      <div className="h-[80px]" />
    </div>
  );
}