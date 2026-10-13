import { ArrowUpRight } from "@phosphor-icons/react";

const BANNER_VIDEO =
  "https://res.cloudinary.com/dwzox8zra/video/upload/v1791886335/TheBionicEye_wv1epu.mp4";

// Cloudinary makes a still frame from the same video (used while loading
// and for people who have reduced motion turned on)
const BANNER_POSTER =
  "https://res.cloudinary.com/dwzox8zra/video/upload/v1791886335/TheBionicEye_wv1epu.jpg";

function HeroBanner() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[620px] w-full overflow-hidden bg-[#101820] sm:min-h-[560px] md:min-h-[580px] lg:min-h-[600px]"
    >
      {/* Poster image (shows before the video loads, or if motion is reduced) */}
      <img
        src={BANNER_POSTER}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-40 h-full w-full object-cover object-[65%_center] md:object-[70%_center]"
      />

      {/* Background Video (full width) */}
      <video
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[65%_center] motion-reduce:hidden md:object-[70%_center]"
        src={BANNER_VIDEO}
        poster={BANNER_POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Dark Overlay (left to right) */}
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-r from-black/90 via-[#071522]/60 to-transparent"
        aria-hidden="true"
      />

      {/* Mobile Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/30 to-black/20 md:hidden"
        aria-hidden="true"
      />

      {/* Hero Content: same width as Header */}
      <div className="relative mx-auto flex w-[calc(100%-24px)] max-w-[1400px] flex-col justify-end gap-6 pb-16 pt-28 sm:w-[calc(100%-40px)] md:flex-row md:items-end md:justify-between md:gap-8 md:pb-16 lg:w-[calc(100%-64px)] lg:pb-[72px] xl:w-[calc(100%-80px)]">
        {/* Inner padding matches header (px-3 / sm:px-4 / lg:px-5) plus logo offset */}
        <div className="flex w-full flex-col justify-end gap-6 px-3 sm:px-4 md:flex-row md:items-end md:justify-between md:gap-8 lg:px-5">
          {/* Left Content */}
          <div className="w-full max-w-[560px] text-white">
            <h1 className="mb-4 text-[30px] font-bold leading-[1.1] tracking-tight sm:text-[36px] md:text-[40px] lg:text-[46px] xl:text-[50px]">
              Facade and structure
              <br className="hidden sm:block" /> cleaning without access
              <br className="hidden sm:block" /> equipment.
            </h1>

            <p className="max-w-[480px] text-[16px] font-normal leading-[1.7] text-white/90">
              Drone cleaning removes the requirement for scaffolding, cradles,
              powered access or rope teams across a substantial proportion of
              facade, glazing, cladding and roof maintenance. The work is
              carried out from ground level, and setup is measured in minutes
              rather than days.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="group inline-flex min-h-[44px] w-fit shrink-0 items-center justify-center gap-3 rounded-[8px] bg-[#ff650b] pl-5 pr-[8px] text-[12px] font-medium uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ed5600] md:mb-4 lg:mb-6"
          >
            <span>Discuss a requirement</span>
            <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white text-[#ff650b] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} weight="regular" />
            </span>
          </a>
        </div>
      </div>

      {/* Bottom white step (tablet + desktop, full width) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-10 hidden h-[44px] w-full md:flex lg:h-[50px]"
        aria-hidden="true"
      >
        <div className="w-[48%]" />
        <svg
          viewBox="0 0 90 44"
          preserveAspectRatio="none"
          className="h-full w-[90px] shrink-0 fill-white"
        >
          <path d="M0 44 C22 44 28 39 40 29 L54 16 C64 7 73 0 90 0 V44 Z" />
        </svg>
        <div className="-ml-px flex-1 bg-white" />
      </div>

      {/* Mobile: simple white edge */}
      <div
        className="absolute bottom-0 left-0 z-10 h-[24px] w-full rounded-t-[24px] bg-white md:hidden"
        aria-hidden="true"
      />
    </section>
  );
}

export default HeroBanner;