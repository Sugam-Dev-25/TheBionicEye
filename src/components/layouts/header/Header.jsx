import { useState } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";

import companyLogo from "../../../assets/CompanyLogo.png";

const navigation = [
  { name: "Solutions", href: "#solutions" },
  { name: "Support", href: "#support" },
  { name: "Regulation", href: "#regulation" },
  { name: "Sectors", href: "#sectors" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Shop", href: "#shop" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-[1400px] -translate-x-1/2 sm:top-4 sm:w-[calc(100%-40px)] lg:top-[17px] lg:w-[91%]">
      {/* Main Header */}
      <div className="relative flex min-h-[66px] items-center justify-between gap-3 rounded-[11px] border border-white/30 bg-white/15 px-3 backdrop-blur-[3px] sm:min-h-[70px] sm:px-4 lg:min-h-[78px] lg:pl-5 lg:pr-[14px]">
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          aria-label="The Bionic Eye home"
          className="flex w-[75px] shrink-0 items-center sm:w-[90px] lg:w-[105px]"
        >
          <img
            src={companyLogo}
            alt="The Bionic Eye"
            className="block h-auto max-h-[50px] w-full object-contain object-left"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex lg:gap-[30px] xl:gap-[36px]"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="whitespace-nowrap text-[16px] font-normal text-white/90 transition-colors duration-200 hover:text-orange-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden h-[44px] shrink-0 items-center gap-[14px] rounded-[9px] bg-[#ff650b] pl-[17px] pr-[7px] text-[13px] font-medium uppercase text-white transition-colors duration-200 hover:bg-[#ed5600] lg:inline-flex"
        >
          <span>Get in touch</span>

          <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white text-[#ff650b]">
            <ArrowUpRight size={16} weight="regular" />
          </span>
        </a>

        {/* Mobile / Tablet Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="inline-flex h-[36px] items-center gap-1.5 rounded-[8px] bg-[#ff650b] px-2 text-[9px] font-semibold uppercase text-white transition-colors hover:bg-[#ed5600] sm:h-[38px] sm:gap-2 sm:px-3 sm:text-[10px]"
          >
            <span>Get in touch</span>

            <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full bg-white text-[#ff650b]">
              <ArrowUpRight size={17} />
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-lg border border-white/20 text-white transition-colors hover:bg-white/10 sm:h-[38px] sm:w-[38px]"
          >
            {menuOpen ? (
              <X size={23} weight="regular" />
            ) : (
              <List size={23} weight="regular" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`absolute left-0 right-0 top-[calc(100%+9px)] overflow-hidden flex flex-col gap-2 rounded-xl border border-white/25 bg-[#2b343d]/90 px-3 shadow-xl backdrop-blur-sm transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 py-3 opacity-100"
            : "invisible pointer-events-none -translate-y-2 py-0 opacity-0"
        }`}
      >
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3.5 text-sm text-white transition-colors hover:bg-white/15 hover:text-orange-400"
          >
            <span>{item.name}</span>

            <ArrowUpRight size={17} />
          </a>
        ))}

        <a
          href="#contact"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
          className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#ff650b] px-4 text-sm font-semibold uppercase text-white transition-colors hover:bg-[#ed5600]"
        >
          Get in touch
          <ArrowUpRight size={18} />
        </a>
      </nav>
    </header>
  );
}

export default Header;