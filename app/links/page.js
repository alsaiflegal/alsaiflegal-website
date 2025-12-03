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
      icon: "whatsapp",
      url: "https://wa.me/966505778919",
      color: "gold",
    },
    {
      id: 2,
      title: "الاتصال المباشر",
      subtitle: "اتصل بنا مباشرة",
      icon: "phone",
      url: "tel:+966505778919",
      color: "blue",
    },
    {
      id: 3,
      title: "الموقع الإلكتروني",
      subtitle: "زر موقعنا الرسمي",
      icon: "globe",
      url: "https://www.alsaiflegal.com",
      color: "gold",
    },
    {
      id: 4,
      title: "البريد الإلكتروني",
      subtitle: "راسلنا عبر البريد الإلكتروني",
      icon: "email",
      url: "mailto:info@alsaiflegal.com",
      color: "blue",
    },
    {
      id: 5,
      title: "سناب شات",
      subtitle: "شاهد لحظاتنا اليومية",
      icon: "snapchat",
      url: "https://snapchat.com/t/MiUFEfZH",
      color: "gold",
    },
    {
      id: 6,
      title: "تويتر (X)",
      subtitle: "آخر الأخبار والتحديثات",
      icon: "x",
      url: "https://x.com/alsaif_legal",
      color: "blue",
    },
    {
      id: 7,
      title: "مكتب الرس",
      subtitle: "شارع الجريف الرس",
      icon: "location",
      url: "https://maps.app.goo.gl/zQnc5kJenQ2X1Jev7?g_st=ipc",
      color: "gold",
    },
  ];

  const getIcon = (iconName) => {
    const icons = {
      whatsapp: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      phone: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      globe: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      email: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      snapchat: (
        <svg class="icon icon-tabler icons-tabler-filled icon-tabler-brand-snapchat w-7 h-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 1.96a5.88 5.88 0 0 1 5.882 5.882c0 .618 .008 1.174 .03 1.678l.008 .21l.084 -.115q .46 -.627 1.102 -1.29l.187 -.19a1 1 0 0 1 1.414 1.415c-2.637 2.637 -2.51 3.795 .76 5.527l.048 .025a.98 .98 0 0 1 .46 .636l.004 .022l.003 .013l.006 .043l.006 .032v.009l.003 .025l.001 .051l.002 .026l-.001 .009v.025l-.003 .042l-.002 .034l-.002 .015l-.002 .02l-.004 .016l-.01 .06l-.007 .026l-.006 .02l-.016 .06l-.013 .029l-.005 .013l-.024 .062a1 1 0 0 1 -.197 .28l-.03 .025l-.016 .014l-.043 .039l-.013 .007l-.018 .015l-.051 .033l-.02 .014l-.008 .003l-.014 .01a1 1 0 0 1 -.098 .049l-.013 .003l-.146 .066c-.576 .255 -.81 .365 -1.008 .474l-.053 .03c-.27 .155 -.398 .277 -.558 .525c-.156 .245 -.293 .516 -.715 1.41a1 1 0 0 1 -.904 .573c-1.067 0 -1.798 .25 -2.879 .868l-.426 .246c-.176 .102 -.311 .178 -.447 .25c-.794 .423 -1.464 .636 -2.248 .636s-1.454 -.213 -2.248 -.636a15 15 0 0 1 -.447 -.25l-.426 -.246c-1.081 -.618 -1.812 -.868 -2.879 -.868a1 1 0 0 1 -.904 -.573c-.422 -.894 -.559 -1.165 -.715 -1.41a1.4 1.4 0 0 0 -.558 -.525c-.228 -.13 -.47 -.243 -1.227 -.577l.02 .007l-.013 -.003a1 1 0 0 1 -.098 -.05l-.014 -.009l-.028 -.017l-.051 -.033l-.018 -.015l-.013 -.007l-.043 -.039l-.012 -.01l-.004 -.004l-.03 -.025a1 1 0 0 1 -.197 -.28l-.024 -.062l-.005 -.013l-.013 -.028l-.016 -.061l-.005 -.012l-.008 -.035l-.01 -.059l-.004 -.016l-.002 -.02l-.002 -.015l-.002 -.035l-.004 -.041l.001 -.025l-.001 -.01l.002 -.025l.001 -.05l.003 -.026v-.01l.006 -.03l.006 -.044l.004 -.014l.002 -.021a.98 .98 0 0 1 .461 -.636l.048 -.025l.204 -.11c3.003 -1.635 3.132 -2.785 .72 -5.25l-.164 -.167a1 1 0 0 1 1.414 -1.414q .764 .763 1.289 1.479l.083 .115l.01 -.21q .025 -.628 .028 -1.374l.001 -.304a5.88 5.88 0 0 1 5.882 -5.882" /></svg>
      ),
      x: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      location: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    };
    return icons[iconName] || icons.globe;
  };

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
                    ${link.color === "gold" ? "text-gold" : "text-[#5A6BAF]"}
                    transition-all duration-300
                    group-hover:scale-110 group-hover:rotate-3
                    group-hover:text-ivory
                  `}
                  >
                    {getIcon(link.icon)}
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
