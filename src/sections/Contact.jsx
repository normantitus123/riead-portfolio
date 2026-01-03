import SectionHeader from "../components/SectionHeader";
import SectionLayout from "../components/SectionLayout";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen text-white scroll-mt-[96px]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(11,29,58,0.85), rgba(7,20,43,0.9)), url('/contact-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionLayout>
        {/* Section Title */}
        <SectionHeader title="My" highlight="Contact" />

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24">

          {/* LEFT INFO */}
          <div className="max-w-[460px] space-y-8">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-wide">
              RIEAD
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              I am professional Web designer. I have designed more than 50 web
              templates for my clients. You can hire me for design your personal,
              business or other website template. You can trust me. I completed
              your work with full satisfaction.
            </p>

            {/* Social / Contact Icons */}
            <div className="flex gap-6 text-xl text-white">
              <span>📞</span>
              <span>✉️</span>
              <span>in</span>
              <span>📍</span>
              <span>f</span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <ContactForm />
        </div>
      </SectionLayout>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function ContactForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">

      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />

      <Input placeholder="Phone" />
      <Input placeholder="Subject" />

      <div className="md:col-span-2">
        <Input placeholder="Email" />
      </div>

      <div className="md:col-span-2">
        <Textarea placeholder="Message" />
      </div>

      {/* SUBMIT */}
      <div className="md:col-span-2 flex justify-center mt-[24px]">
        <button
          className="
            w-[288px] h-[35px]
            rounded-[20px]
            bg-[#00EEFF]
            text-[#323946]
            font-bold
          "
        >
          Submit
        </button>
      </div>
    </form>
  );
}

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="
        h-[53px]
        rounded-[8px]
        bg-[rgba(31,36,45,0.8)]
        px-[10px]
        text-[14px]
        leading-[33px]
        font-medium
        text-white
        outline-none
        placeholder:text-[14px]
        placeholder:font-medium
        placeholder:text-gray-300
      "
    />
  );
}

function Textarea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      className="
        h-[117px]
        rounded-[8px]
        bg-[rgba(31,36,45,0.8)]
        px-[16px] py-[12px]
        text-[14px]
        font-normal
        text-white
        outline-none
        resize-none
        placeholder:text-[14px]
        placeholder:font-normal
        placeholder:text-gray-300
      "
    />
  );
}