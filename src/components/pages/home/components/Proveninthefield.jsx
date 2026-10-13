function Badge({ children }) {
  return (
    <span className="shrink-0 whitespace-nowrap rounded-full bg-[#e1f5ec] px-2.5 py-[3px] text-[10px] font-medium text-[#1e6b52]">
      {children}
    </span>
  );
}

function ProvenInTheField() {
  return (
    <section
      id="proven"
      className="relative isolate w-full overflow-hidden bg-[#142a40] pb-[72px] pt-12 sm:pb-20 sm:pt-14 lg:pb-[100px] lg:pt-[80px]"
    >
      {/* Same width formula as Header */}
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1400px] sm:w-[calc(100%-40px)] lg:w-[calc(100%-64px)] xl:w-[calc(100%-80px)]">
        <div className="px-3 sm:px-4 lg:px-5">
          <h2 className="text-[30px] font-bold leading-tight tracking-tight text-white sm:text-[38px] lg:text-[44px]">
            Proven In The Field
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:mt-[44px] lg:grid-cols-2 lg:gap-[72px]">
            {/* Card 1: Factory facade */}
            <article className="flex flex-col justify-center rounded-[10px] bg-[#1e3550] px-[18px] py-6 lg:min-h-[170px]">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[17px] font-bold leading-tight text-white sm:text-[18px]">
                  Factory facade
                </h3>
                <Badge>Chemical-free RO water</Badge>
              </div>

              <p className="mt-4 flex flex-wrap items-baseline gap-x-3 text-white">
                <span className="text-[36px] font-bold leading-none sm:text-[40px]">
                  ~300
                </span>
                <span className="text-[13px] text-[#8fa0b3]">
                  <b className="font-bold">m²</b>per hour
                </span>
              </p>

              <p className="mt-3 pl-1 text-[13px] leading-snug text-[#8fa0b3]">
                Cleaned using reverse osmosis water only.
              </p>
            </article>

            {/* Card 2: Moss-covered roof */}
            <article className="flex flex-col justify-center rounded-[10px] bg-[#1e3550] px-[18px] py-6 lg:min-h-[170px]">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[17px] font-bold leading-tight text-white sm:text-[18px]">
                  Moss-covered roof
                </h3>
                <Badge>No chemicals</Badge>
              </div>

              <p className="mt-2 flex flex-wrap items-baseline gap-x-3 text-white">
                <span className="text-[36px] font-bold leading-none sm:text-[40px]">
                  ~550
                </span>
                <span className="text-[13px] text-[#8fa0b3]">
                  ten years of moss, cleared in about 3 hours
                </span>
              </p>

              <p className="mt-1 pl-1 text-[13px] leading-snug text-[#8fa0b3]">
                hours
              </p>

              {/* Progress bar */}
              <div
                className="mt-2 flex h-[13px] w-full overflow-hidden rounded-full bg-[#3b8be0]"
                role="img"
                aria-label="15 minutes set-up, about 3 hours cleaning"
              >
                <span className="h-full w-[27%] bg-[#c07a1b]" />
              </div>

              <div className="mt-2 flex items-center justify-between gap-3 px-1 text-[12px] text-[#8fa0b3] sm:text-[13px]">
                <span>15 min set-up</span>
                <span>about 3 hours cleaning</span>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Bottom white step (tablet + desktop) */}
      <div
        className="pointer-events-none absolute -bottom-px left-0 z-10 hidden h-[45px] w-full md:flex lg:h-[67px]"
        aria-hidden="true"
      >
        <div className="w-[44%]" />
        <svg
          viewBox="0 0 90 44"
          preserveAspectRatio="none"
          className="h-full w-[90px] shrink-0 overflow-visible fill-white lg:w-[130px]"
        >
          <path d="M0 46 C0 46 0 44 0 44 C22 44 28 39 40 29 L54 16 C64 7 73 0 90 0 V46 Z" />
        </svg>
        <div className="-ml-px flex-1 bg-white" />
      </div>

      {/* Mobile: simple white edge */}
      <div
        className="absolute -bottom-px left-0 z-10 h-[25px] w-full rounded-t-[24px] bg-white md:hidden"
        aria-hidden="true"
      />
    </section>
  );
}

export default ProvenInTheField;