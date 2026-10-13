// Images from the assets folder (change file names/extensions to match yours)
import droneSetImg from "../../../../assets/supply-drone-set.jpg";
import trainingImg from "../../../../assets/supply-training.jpg";
import partsImg from "../../../../assets/supply-parts.jpg";
import whiteLabelImg from "../../../../assets/supply-white-label.jpg";

const supplies = [
  {
    title: "Drone, Pressure System and Nozzle Set",
    description:
      "The drone, pressure system and nozzle set specified against your surfaces.",
    image: droneSetImg,
    alt: "Drone cleaning a metal clad building",
  },
  {
    title: "Training & Documentation Support",
    description:
      "The drone, pressure system and nozzle set specified against your surfaces.",
    image: trainingImg,
    alt: "Two people watching a drone clean a building",
  },
  {
    title: "Parts & Repairs",
    description:
      "Enhanced warranty includes priority maintenance and loan equipment if parts are delayed",
    image: partsImg,
    alt: "Drone on the ground ready for maintenance",
  },
  {
    title: "White Label Services",
    description:
      "We also offer white label services, arranged in advance, giving clients additional capacity.",
    image: whiteLabelImg,
    alt: "Drone cleaning a stone building facade",
  },
];

function WhatWeSupply() {
  return (
    <div className="w-full bg-white lg:pt-[35px]">
      <section
        id="supply"
        className="relative isolate w-full overflow-hidden bg-[#142a40] pb-14 pt-[72px] sm:pb-16 sm:pt-20 lg:pb-[85px] lg:pt-[102px]"
      >
        {/* Same width formula as Header */}
        <div className="mx-auto w-[calc(100%-24px)] max-w-[1400px] sm:w-[calc(100%-40px)] lg:w-[calc(100%-64px)] xl:w-[calc(100%-80px)]">
          <div className="px-3 sm:px-4 lg:px-5">
            <h2 className="text-[32px] font-bold leading-tight tracking-tight text-white sm:text-[38px] lg:text-[44px]">
              What We Supply
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-[42px] lg:grid-cols-4 lg:gap-[22px]">
              {supplies.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col overflow-hidden rounded-[20px] bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-[228/134] w-full object-cover object-center"
                  />

                  <div className="flex flex-1 flex-col px-[14px] pb-5 pt-[14px] lg:pb-[22px]">
                    <h3 className="text-[22px] font-bold leading-[26px] text-[#0b1038]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[16px] leading-5 text-[#6b7280]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Top white step (tablet + desktop): white stays lower on the left, navy rises on the right */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 hidden h-[44px] w-full md:flex"
          aria-hidden="true"
        >
          <div className="w-[48%] bg-white" />
          <svg
            viewBox="0 0 90 44"
            preserveAspectRatio="none"
            className="-ml-px h-full w-[90px] shrink-0 fill-white lg:w-[110px]"
          >
            <path d="M0 0 V44 C22 44 28 39 40 29 L54 16 C64 7 73 0 90 0 Z" />
          </svg>
        </div>

        {/* Mobile: simple white edge */}
        <div
          className="absolute left-0 top-0 z-10 h-[24px] w-full rounded-b-[24px] bg-white md:hidden"
          aria-hidden="true"
        />
      </section>
    </div>
  );
}

export default WhatWeSupply;