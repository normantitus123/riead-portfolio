import SectionLayout from "../components/SectionLayout";

export default function Footer() {
  return (
    <footer className="relative w-full bg-transparent">
      <SectionLayout className="pt-0" spacerClassName="h-0">
        <div className="flex h-[80px] items-end justify-between  pb-[24px]">
          <p
            className="font-montserrat text-[16px] leading-[24px] font-semibold text-white"
          >
            Copywrite 2024 All Rights Reserved By RIEAD.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              w-[58px]
              h-[58px]
              border-[3px]
              border-[#00EEFF]
              rounded-[5px]
              flex
              items-center
              justify-center
              hover:bg-[#00EEFF]
              transition
              group
            "
          >
            <img
              src="/up-arrow-alt-solid-48.png"
              alt="Scroll to top"
              className="
                w-[48px]
                h-[48px]
                group-hover:invert
                transition
              "
            />
          </button>
        </div>
      </SectionLayout>
    </footer>
  );
}
