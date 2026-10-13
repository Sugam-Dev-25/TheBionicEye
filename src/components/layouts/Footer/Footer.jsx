import { MapPin, PhoneCall } from "@phosphor-icons/react";

// Adjust this path to match where your Footer file lives
import companyLogo from "../../../assets/CompanyLogo.png";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    lines: [
      "The Bionic Eye, Bionic House, Hall Farm,",
      "Berry Lane, Chorleywood, WD3 5EX, UK",
    ],
  },
  {
    icon: PhoneCall,
    label: "Email",
    lines: ["info@thebioniceye.co.uk."],
    href: "mailto:info@thebioniceye.co.uk",
  },
  {
    icon: PhoneCall,
    label: "Phone",
    lines: ["+44 1753 655886"],
    href: "tel:+441753655886",
  },
];

const brands = [
  { name: "FarmingByDrone", href: "#" },
  { name: "PowerWash", href: "#" },
  { name: "CleaningByDrone", href: "#" },
];

const notices = [
  "The Operational Authorisation is held by the operator and not the supplier. The Bionic Eye assists clients in attaining their own.",
  "CAA approved since 2014. UK SORA authorisation held for cleaning operations with the PowerWash system since January 2026.",
  "The Bionic Eye Ltd. Registered in England and Wales, company number 09053005. Registered office: 22 Wycombe End, Beaconsfield HP9 1NB.",
];

function Footer() {
  return (
    <footer
      id="footer"
      className="relative isolate w-full overflow-hidden bg-[#142a40] text-[#98a3af]"
    >
      {/* Content: same width formula as Header */}
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1400px] pb-20 pt-14 sm:w-[calc(100%-40px)] md:pb-24 lg:w-[calc(100%-64px)] lg:pb-[150px] lg:pt-[90px] xl:w-[calc(100%-80px)]">
        <div className="px-3 sm:px-4 lg:px-5">
          {/* Top grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)_minmax(0,0.48fr)] lg:gap-x-8">
            {/* Brand */}
            <div className="md:col-span-2 lg:col-span-1">
              <a
                href="/"
                aria-label="The Bionic Eye home"
                className="inline-block w-[220px] sm:w-[260px] lg:w-[300px] xl:w-[330px]"
              >
                <img
                  src={companyLogo}
                  alt="The Bionic Eye"
                  className="block h-auto w-full object-contain object-left"
                />
              </a>

              <p className="mt-6 max-w-[440px] text-[14px] leading-[2] sm:text-[15px] lg:mt-8 lg:text-[15px] xl:text-[16px]">
                We have been at the forefront of the Drone Industry for over ten
                years. With our customers, we&apos;ve designed and built the
                very best, most capable, and fit-for-purpose drones. Our can-do
                attitude means that we will help you create it.
              </p>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-[24px] font-normal leading-tight text-white sm:text-[26px] lg:text-[28px] xl:text-[32px]">
                Address
              </h2>

              <ul className="mt-6 space-y-5 lg:mt-8 lg:space-y-5">
                {contactItems.map(({ icon: Icon, label, lines, href }) => {
                  const text = lines.map((line, index) => (
                    <span key={line} className="block">
                      {line}
                      {index < lines.length - 1 && null}
                    </span>
                  ));

                  return (
                    <li key={label} className="flex items-center gap-4">
                      <span
                        className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#ff650b] text-white lg:h-[54px] lg:w-[54px]"
                        aria-hidden="true"
                      >
                        <Icon size={24} weight="regular" />
                      </span>

                      {href ? (
                        <a
                          href={href}
                          aria-label={label}
                          className="break-words text-[14px] leading-[1.8] transition-colors duration-200 hover:text-white sm:text-[15px] xl:text-[16px]"
                        >
                          {text}
                        </a>
                      ) : (
                        <address className="break-words text-[14px] not-italic leading-[1.8] sm:text-[15px] xl:text-[16px]">
                          {text}
                        </address>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Specialist brands */}
            <div>
              <h2 className="text-[24px] font-normal leading-tight text-white sm:text-[26px] lg:text-[28px] xl:text-[32px]">
                Specialist brands
              </h2>

              <ul className="mt-6 space-y-5 lg:mt-8 lg:space-y-6">
                {brands.map((brand) => (
                  <li key={brand.name}>
                    <a
                      href={brand.href}
                      className="text-[14px] transition-colors duration-200 hover:text-[#ff650b] sm:text-[15px] xl:text-[16px]"
                    >
                      {brand.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div
            className="mt-12 h-px w-full bg-[#3b4f63] lg:mt-[56px]"
            aria-hidden="true"
          />

          {/* Notices */}
          <ul className="mt-8 space-y-4 lg:mt-[44px] lg:space-y-[22px]">
            {notices.map((notice) => (
              <li
                key={notice}
                className="flex items-start gap-3 text-[13px] leading-[1.7] sm:text-[14px] lg:items-center lg:text-[15px] xl:text-[16px]"
              >
                <span
                  className="mt-[7px] h-[9px] w-[9px] shrink-0 rounded-full bg-[#ff650b] lg:mt-0"
                  aria-hidden="true"
                />
                <span>{notice}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom white step (tablet + desktop) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-10 hidden h-[44px] w-full md:flex lg:h-[66px]"
        aria-hidden="true"
      >
        <div className="w-[44%]" />
        <svg
          viewBox="0 0 90 44"
          preserveAspectRatio="none"
          className="h-full w-[90px] shrink-0 fill-white lg:w-[130px]"
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
    </footer>
  );
}

export default Footer;