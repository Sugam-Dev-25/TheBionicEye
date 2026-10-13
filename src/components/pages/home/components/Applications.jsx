import { ArrowUpRight, Buildings } from "@phosphor-icons/react";

// Replace with your drone + glass building image
const VIEW_MORE_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85";

const applications = [
  {
    title: "Facades and curtain walling",
    description:
      "Commercial and residential buildings, including glass curtain walls.",
    href: "#facades",
    iconBg: "bg-[#e3ecf8]",
    iconColor: "text-[#1d4f91]",
  },
  {
    title: "Heritage and listed structures",
    description:
      "Standoff control and an RO water option for sensitive surfaces.",
    href: "#heritage",
    iconBg: "bg-[#fbe9cf]",
    iconColor: "text-[#a8782d]",
  },
  {
    title: "Graffiti removal",
    description:
      "Clean high surfaces without scaffold. Best shown with before and after.",
    href: "#graffiti",
    iconBg: "bg-[#f8e3dc]",
    iconColor: "text-[#b4553d]",
  },
  {
    title: "Solar farms and rooftop arrays",
    description: "Ground-mounted and rooftop solar installations.",
    href: "#solar",
    iconBg: "bg-[#e3ecf8]",
    iconColor: "text-[#2f6b3a]",
  },
  {
    title: "Wind turbine towers",
    description: "Tower surfaces at height, matched to the 60 m+ reach.",
    href: "#wind",
    iconBg: "bg-[#dcf2e8]",
    iconColor: "text-[#1f8a5f]",
  },
  {
    title: "Silos, tanks and cladding",
    description: "Large industrial surfaces that are hard to reach.",
    href: "#silos",
    iconBg: "bg-[#eeebe0]",
    iconColor: "text-[#6f6a55]",
  },
  {
    title: "Surface coating and treatment",
    description: "Protective coatings applied from the air.",
    href: "#coating",
    iconBg: "border border-dashed border-[#4b5563] bg-white",
    iconColor: "text-[#f3d58a]",
  },
];

function Applications() {
  return (
    <section
      id="applications"
      className="w-full bg-[#f4f5f8] py-12 sm:py-14 lg:py-[64px]"
    >
      {/* Same width formula as Header */}
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1400px] sm:w-[calc(100%-40px)] lg:w-[calc(100%-64px)] xl:w-[calc(100%-80px)]">
        <div className="px-3 sm:px-4 lg:px-5">
          <h2 className="text-[32px] font-bold leading-tight tracking-tight text-[#0b1038] sm:text-[38px] lg:text-[44px]">
            Applications
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-[62px] lg:grid-cols-4 lg:gap-[26px]">
            {applications.map((item) => (
              <article
                key={item.title}
                className="flex min-h-[200px] flex-col rounded-[10px] border-t-4 border-[#2d3158] bg-white px-4 pb-5 pt-[18px] lg:min-h-[228px]"
              >
                <span
                  className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[6px] ${item.iconBg} ${item.iconColor}`}
                  aria-hidden="true"
                >
                  <Buildings size={18} weight="regular" />
                </span>

                <h3 className="mt-5 text-[22px] font-bold leading-[26px] text-[#0b1038]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[16px] leading-5 text-[#6b7280]">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className="group mt-auto inline-flex w-fit items-center gap-2 pt-3 text-[12px] font-medium uppercase tracking-wide text-[#ff650b] transition-colors duration-200 hover:text-[#ed5600]"
                >
                  <span>View application</span>
                  <ArrowUpRight
                    size={15}
                    weight="regular"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </article>
            ))}

            {/* View more image card */}
            <a
              href="#applications"
              aria-label="View more applications"
              className="group relative isolate flex min-h-[200px] items-center justify-center overflow-hidden rounded-[10px] bg-[#1a2a6c] lg:min-h-[228px]"
            >
              <img
                src={VIEW_MORE_IMAGE}
                alt=""
                className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 -z-10 bg-[#1b2370]/70"
                aria-hidden="true"
              />

              <span className="inline-flex min-h-[42px] items-center gap-3 rounded-[8px] bg-[#ff650b] pl-5 pr-[7px] text-[12px] font-medium uppercase tracking-wide text-white transition-colors duration-300 group-hover:bg-[#ed5600]">
                <span>View more</span>
                <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white text-[#ff650b] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} weight="regular" />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;