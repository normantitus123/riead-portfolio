export default function Footer() {
  return (
    <footer className="relative w-full h-[110px] bg-transparent mt-24">

      {/* COPYRIGHT TEXT */}
      <p
        className="
          absolute
          left-[359px]
          bottom-[24px]
          w-[380px]
          h-[24px]
          text-[16px]
          leading-[24px]
          font-semibold
          text-white
        "
        style={{ fontFamily: "Montserrat" }}
      >
         Copywrite 2024 All Rights Reserved By RIEAD.
      </p>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          absolute
          right-[60px]
          bottom-[16px]
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
        {/* ARROW ICON */}
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

    </footer>
  );
}