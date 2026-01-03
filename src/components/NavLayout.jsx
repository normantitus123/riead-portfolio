export default function NavLayout({ children }) {
  return (
    <div className="flex h-16 items-center">
      {/* LEFT SPACER (same rail) */}
      <div className="w-[120px] shrink-0" />

      {/* NAV CONTENT */}
      <div className="max-w-[1100px] w-full px-6">
        {children}
      </div>
    </div>
  );
}