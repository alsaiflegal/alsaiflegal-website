"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-offwhite p-2">
      <div className="relative h-full w-full overflow-hidden rounded-2xl group">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg.png"
            alt="Background"
            fill
            className="object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
            priority
            quality={90}
          />
          {/* Multi-layered Premium Gradient Overlay */}
          {/* Base dark overlay */}
          <div className="absolute inset-0 bg-navy/30"></div>
          {/* Gradient from bottom to top */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/40 to-navy/20"></div>
          {/* Gradient from right to left (for RTL) */}
          <div className="absolute inset-0 bg-gradient-to-l from-navy/60 via-navy/30 to-transparent"></div>
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-navy/20"></div>
          {/* Premium grain texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]"></div>
        </div>

        {/* Content Container */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 h-full flex items-center justify-end">
          <div className="max-w-[1600px] mx-auto px-4 md:px-12 lg:px-20 mr-0 text-right w-full md:w-auto">
            {/* Logo */}
            <div
              className="mb-6 md:mb-8 animate-[fadeInScale_1.4s_ease-out_forwards] inline-block opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              <Image
                src="/images/logos/logo_and_name_horizontal_black.png"
                alt="logo"
                width={800}
                height={800}
                className="w-64 sm:w-80 md:w-[30rem] lg:w-[40rem] 2xl:w-[50rem] h-auto drop-shadow-2xl brightness-0 invert"
              />
            </div>
            {/* Slogan */}
            <h2
              className="text-gold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-semibold mb-8 md:mb-10 mr-2 leading-relaxed animate-[fadeInUp_1.2s_ease-out_forwards] opacity-0 max-w-xl md:max-w-3xl ml-auto drop-shadow-lg"
              style={{ animationDelay: "0.6s", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              ريادة قانونية تُصان بها الحقوق
            </h2>
            {/* CTA Button */}
            {/* <div
              className="relative group/hero animate-[fadeInUp_1.2s_ease-out_forwards] inline-block opacity-0"
              style={{ animationDelay: "0.9s" }}
            >
              <button
                data-cal-namespace="30min"
                data-cal-link="alsaif-legal-k7e91v/30min"
                data-cal-config='{"layout":"month_view"}'
                className="relative inline-block bg-gradient-to-br from-gold to-gold-light text-white px-6 md:px-8 py-3 md:py-3.5 rounded-2xl font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-0 group-hover/hero:opacity-100 transition-opacity duration-700 ease-in-out"></span>
                <span className="absolute inset-0 -translate-x-full group-hover/hero:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                <span className="relative z-10 group-hover/hero:text-white transition-colors duration-500 ease-in-out font-bold tracking-wide text-base md:text-lg">
                  احجز استشارة قانونية
                </span>
                <span className="absolute inset-0 rounded-2xl border-2 border-navy opacity-0 group-hover/hero:opacity-100 scale-105 transition-all duration-700 ease-out"></span>
              </button>
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-[fadeInUp_1.2s_ease-out_1.2s_forwards] opacity-0">
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <span className="text-white/70 text-sm font-medium tracking-wide group-hover:text-gold transition-colors duration-300">اكتشف المزيد</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-gold/50 transition-colors duration-300">
              <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-bounce group-hover:bg-gold transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
