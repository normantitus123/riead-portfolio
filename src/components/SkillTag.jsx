export default function SkillTag({ iconSrc, name, percent }) {
  return (
    <div className="h-[100px] flex items-center">
      <div className="flex items-center gap-5 w-full">
        <div
          className="w-[84px] h-[84px] rounded-full  border-white
                     flex items-center justify-center bg-[#1f242d] shrink-0"
        >
          <img
            src={iconSrc}
            alt={name}
            className="w-[84px] h-[84px] object-contain"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-[20px] font-bold">{name}</h4>
            <span className="text-[16px] font-semibold">{percent}%</span>
          </div>

          <div className="relative h-[20px] w-full bg-[#323946] rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{ width: `${percent}%`, backgroundColor: "#00EEFF" }}
            />

          </div>
        </div>
      </div>
    </div>
  );
}
