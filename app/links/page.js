"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LinktreePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    {
      id: 1,
      title: "واتساب",
      subtitle: "تواصل معنا عبر الواتساب",
      icon: "💬",
      url: "https://wa.me/966505778919",
      color: "gold",
    },
    {
      id: 2,
      title: "الاتصال المباشر",
      subtitle: "اتصل بنا مباشرة",
      icon: "📞",
      url: "tel:+966505778919",
      color: "blue",
    },
    {
      id: 3,
      title: "الموقع الإلكتروني",
      subtitle: "زر موقعنا الرسمي",
      icon: "🌐",
      url: "https://www.alsaiflegal.com",
      color: "gold",
    },
    {
      id: 4,
      title: "الإيميل",
      subtitle: "راسلنا عبر البريد الإلكتروني",
      icon: "✉️",
      url: "mailto:info@alsaiflegal.com",
      color: "blue",
    },
    {
      id: 5,
      title: "سناب شات",
      subtitle: "شاهد لحظاتنا اليومية",
      icon: "👻",
      url: "https://snapchat.com/t/MiUFEfZH",
      color: "gold",
    },
    {
      id: 6,
      title: "تويتر (X)",
      subtitle: "آخر الأخبار والتحديثات",
      icon: "𝕏",
      url: "https://x.com/alsaif_legal",
      color: "blue",
    },
    {
      id: 7,
      title: "مكتب الرس",
      subtitle: "شارع الجريف الرس",
      icon: "📍",
      url: "https://maps.app.goo.gl/zQnc5kJenQ2X1Jev7?g_st=ipc",
      color: "gold",
    },
  ];

  return (
    <div
      className="min-h-screen bg-midnight relative overflow-hidden"
      dir="rtl"
    >
      {/* Decorative Background Elements */}
      <div className="absolute -top-30 -left-30 w-120 h-120 bg-gold opacity-10 rounded-full blur-3xl"></div>
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/20 opacity-5 rounded-full blur-3xl"></div> */}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div
          className={`flex flex-col justify-center items-center text-center mb-12 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
        >
          {/* Firm Name */}
          <div className="mb-3 mt-9">
            <Image
              src="/images/logos/logo_and_name_horizontal_white.png"
              alt="logo"
              className="filter invert-0 sepia-100 hue-rotate-180 saturate-500 object-cover object-right"
              width={400}
              height={250}
            />
          </div>

          {/* Tagline */}
          <p className="text-platinum text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            خبرة قانونية متميزة <span className="text-gold mx-2">|</span>{" "}
            استشارات موثوقة <span className="text-gold mx-2">|</span> حلول
            قانونية شاملة
          </p>

          {/* Decorative Line */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"></div>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold"></div>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-8">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              className={`
                block w-full group
                transition-all duration-700
                ${mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }
              `}
              style={{
                transitionDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <div
                className={`
                relative overflow-hidden
                bg-gradient-to-br from-[#5A6BAF]/10 to-midnight
                border-2 ${link.color === "gold"
                    ? "border-gold/30"
                    : "border-[#5A6BAF]/30"
                  }
                rounded-2xl p-5 sm:p-6
                transition-all duration-300
                hover:scale-[1.02] hover:shadow-2xl
                ${link.color === "gold"
                    ? "hover:shadow-gold/20"
                    : "hover:shadow-[#5A6BAF]/20"
                  }
                hover:border-${link.color}
                backdrop-blur-sm
              `}
              >
                {/* Hover Glow Effect */}
                <div
                  className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-r ${link.color === "gold"
                      ? "from-gold/5 to-transparent"
                      : "from-[#5A6BAF]/5 to-transparent"
                    }
                  transition-opacity duration-300
                `}
                ></div>

                {/* Content */}
                <div className="relative flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className={`
                    flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14
                    rounded-xl
                    bg-gradient-to-br ${link.color === "gold"
                        ? "from-gold/20 to-gold/5"
                        : "from-[#5A6BAF]/20 to-[#5A6BAF]/5"
                      }
                    flex items-center justify-center
                    text-2xl sm:text-3xl
                    transition-transform duration-300
                    group-hover:scale-110 group-hover:rotate-6
                  `}
                  >
                    {link.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-grow text-right">
                    <h3
                      className={`
                      text-lg sm:text-xl font-bold mb-1
                      ${link.color === "gold" ? "text-gold" : "text-[#5A6BAF]"}
                      group-hover:text-ivory
                      transition-colors duration-300
                    `}
                    >
                      {link.title}
                    </h3>
                    <p className="text-platinum text-sm sm:text-base">
                      {link.subtitle}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`
                    flex-shrink-0 w-8 h-8
                    rounded-full
                    ${link.color === "gold" ? "bg-gold/10" : "bg-[#5A6BAF]/10"}
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:bg-${link.color}
                    group-hover:-translate-x-1
                  `}
                  >
                    <svg
                      className={`w-4 h-4 ${link.color === "gold" ? "text-gold" : "text-[#5A6BAF]"
                        } group-hover:text-midnight transition-colors duration-300`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`
                  absolute bottom-0 right-0 h-1 w-0
                  ${link.color === "gold" ? "bg-gold" : "bg-[#5A6BAF]"}
                  transition-all duration-500
                  group-hover:w-full
                `}
                ></div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          h1 {
            font-size: 1.75rem;
            line-height: 1.2;
          }
        }
      `}</style>
    </div>
  );
}
