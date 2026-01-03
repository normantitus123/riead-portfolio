export default function SkillTag({ icon: Icon, name, percent, color }) {
  return (
    <div className="flex items-center gap-6">

      {/* ICON */}
      <div
        className="w-[100px] h-[100px] rounded-full border-[5px] border-white
                   flex items-center justify-center bg-[#1f242d] shrink-0"
      >
        <Icon size={48} color={color} />
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-[20px] font-bold">{name}</h4>
          <span className="text-[16px] font-semibold">{percent}%</span>
        </div>

        <div className="relative h-[23px] w-full bg-[#323946] rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full rounded-full"
            style={{ width: `${percent}%`, backgroundColor: "#00EEFF" }}
          />
        </div>
      </div>
    </div>
  );
}