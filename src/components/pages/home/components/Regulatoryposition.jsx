const steps = [
  {
    number: "01",
    title: "Specific Category",
    description:
      "Cleaning at height next to structures needs an Operational Authorisation from the CAA.",
    // Set to true to keep the blue outline on by default
    active: false,
  },
  {
    number: "02",
    title: "Granted through UK SORA",
    description: "This has been the route since April 2025",
    active: false,
  },
  {
    number: "03",
    title: "Held by the operator",
    description: "The client holds it, not the supplier",
    active: false,
  },
];

function RegulatoryPosition() {
  return (
    <section
      id="regulation"
      className="w-full bg-white py-12 sm:py-14 lg:py-[64px]"
    >
      {/* Same width formula as Header */}
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1400px] sm:w-[calc(100%-40px)] lg:w-[calc(100%-64px)] xl:w-[calc(100%-80px)]">
        <div className="px-3 sm:px-4 lg:px-5">
          <h2 className="text-[30px] font-bold leading-tight tracking-tight text-[#14293d] sm:text-[38px] lg:text-[44px]">
            Regulatory Position
          </h2>

          {/* Cards */}
          <ol className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-3 lg:mt-[46px] lg:gap-[23px]">
            {steps.map((step) => (
              <li
                key={step.number}
                className={`group rounded-[10px] border bg-[#fcfbf9] px-4 pb-6 pt-[18px] transition-colors duration-300 hover:border-[#4a90d9] md:min-h-[150px] lg:min-h-[167px] ${
                  step.active
                    ? "border-[#4a90d9]"
                    : "border-transparent border-t-4 border-t-[#0b0b0b]"
                }`}
              >
                <span className="ml-[3px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#fde8df] text-[12px] font-bold text-[#111827]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-[22px] font-bold leading-[26px] text-[#0b1038]">
                  {step.title}
                </h3>

                <p className="mt-2 text-[16px] leading-5 text-[#6b7280]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          {/* Note */}
          <div className="mt-6 rounded-[14px] bg-[#cde1f9] px-5 py-4 text-center text-[14px] leading-[1.7] text-[#2a5db0] sm:px-8 lg:mt-[30px] lg:text-[15px]">
            <p>
              The Bionic Eye supports clients in gaining their own, drawing on
              our UK SORA authorisation for cleaning with our own PowerWash
              system (obtained January 2026) and on every application we have
              supported since.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegulatoryPosition;