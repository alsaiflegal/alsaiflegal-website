"use client";

import { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle Cal
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "theme": "light", "cssVarsPerTheme": { "light": { "cal-brand": "#2e3af4" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })()
  }, [])


  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#about", label: "عن الشركة" },
    { href: "#services", label: "الخدمات" },
    { href: "#blog", label: "المدونة" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();

    // If it's the blogs link, just navigate normally
    if (href === "/blogs") {
      router.push(href);
      setIsMenuOpen(false);
      return;
    }

    // If we're not on the home page and it's an anchor link, redirect to home with anchor
    if (pathname !== "/" && href.startsWith("#")) {
      router.push(`/${href}`);
      setIsMenuOpen(false);
      return;
    }

    // If we're on the home page, scroll to the element
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 pt-6 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      {/* Enhanced Liquid Glass Container */}
      <div
        className={
          "max-w-7xl mx-auto bg-offwhite/95 backdrop-blur-xl rounded-full shadow-xl hover:shadow-2xl border border-gold/10 transition-all duration-300"
        }
      >
        <nav className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-xl lg:text-2xl font-bold text-navy hover:text-gold transition-all duration-300 drop-shadow-sm hover:scale-105"
              >
                <Image
                  src="/images/logos/logo_and_name_horizontal_black.png"
                  alt="logo"
                  className="filter invert-0 sepia-100 hue-rotate-180 saturate-500"
                  width={210}
                  height={200}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-12">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-navy hover:text-gold transition-all duration-300 text-lg font-bold relative group drop-shadow-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block relative group/nav">
              <button
                data-cal-namespace="30min"
                data-cal-link="alsaif-legal-k7e91v/30min"
                data-cal-config='{"layout":"month_view"}'
                className="relative inline-block bg-gradient-to-br from-navy to-navy-light text-white px-8 py-3 rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                {/* Animated gradient overlay */}
                <span className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-gold opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500"></span>

                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover/nav:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>

                {/* Button text */}
                <span className="relative z-10 group-hover/nav:text-navy transition-colors duration-300 font-bold tracking-wide">
                  احجز استشارة
                </span>

                {/* Decorative border */}
                <span className="absolute inset-0 rounded-full border-2 border-gold opacity-0 group-hover/nav:opacity-100 scale-105 transition-all duration-500"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 text-navy focus:outline-none hover:cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block w-6 h-0.5 bg-navy mb-1.5 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-navy mb-1.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-offwhite/95 backdrop-blur-2xl z-40 lg:hidden transition-all duration-500 ${isMenuOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-8 left-8 w-14 h-14 flex items-center justify-center text-navy hover:text-gold transition-all duration-300 hover:cursor-pointer"
          aria-label="Close menu"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center h-full px-8">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center space-y-8 mb-12">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-navy text-3xl font-bold hover:text-gold transition-all duration-300 transform drop-shadow-lg cursor-pointer ${isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
                  }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 70}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile CTA Button  */}
          <div className="relative group/mobile">
            <button
              data-cal-namespace="30min"
              data-cal-link="alsaif-legal-k7e91v/30min"
              data-cal-config='{"layout":"month_view"}'
              className="relative inline-block bg-gradient-to-br from-navy to-navy-light text-white px-8 py-3 rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Animated gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-gold opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-500"></span>

              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover/mobile:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>

              {/* Button text */}
              <span className="relative z-10 group-hover/mobile:text-navy transition-colors duration-300 font-bold tracking-wide">
                احجز استشارة
              </span>

              {/* Decorative border */}
              <span className="absolute inset-0 rounded-full border-2 border-gold opacity-0 group-hover/mobile:opacity-100 scale-105 transition-all duration-500"></span>
            </button>
          </div>

          {/* Decorative Glass Element */}
          <div
            className={`mt-16 w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full transition-all duration-500 transform shadow-lg ${isMenuOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            style={{
              transitionDelay: isMenuOpen
                ? `${(navLinks.length + 1) * 70}ms`
                : "0ms",
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}
