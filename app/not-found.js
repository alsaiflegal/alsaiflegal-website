"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-navy via-navy-light to-navy flex items-center justify-center px-4 relative overflow-hidden" dir="rtl">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Logo */}
                <div className="mb-12 animate-[fadeInScale_1s_ease-out_forwards] opacity-0">
                    <Image
                        src="/images/logos/logo_and_name_horizontal_white.png"
                        alt="logo"
                        width={400}
                        height={400}
                        className="w-64 sm:w-80 md:w-96 h-auto mx-auto drop-shadow-2xl"
                    />
                </div>

                {/* 404 Number */}
                <div className="mb-8 animate-[fadeInUp_1s_ease-out_0.3s_forwards] opacity-0">
                    <h1 className="text-[150px] sm:text-[200px] md:text-[250px] font-bold text-gold leading-none drop-shadow-2xl">
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <div className="mb-6 animate-[fadeInUp_1s_ease-out_0.5s_forwards] opacity-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        الصفحة غير موجودة
                    </h2>
                    <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى موقع آخر
                    </p>
                </div>

                {/* Decorative Divider */}
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10 animate-[fadeInUp_1s_ease-out_0.7s_forwards] opacity-0"></div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeInUp_1s_ease-out_0.9s_forwards] opacity-0">
                    {/* Home Button */}
                    <Link
                        href="/"
                        className="group relative inline-block bg-gradient-to-br from-gold to-gold-light text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 w-full sm:w-auto"
                    >
                        {/* Animated gradient overlay */}
                        <span className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-white opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-in-out"></span>
                        {/* Shimmer effect */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                        {/* Button text */}
                        <span className="relative z-10 flex items-center justify-center gap-3 font-bold tracking-wide text-base md:text-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            العودة للرئيسية
                        </span>
                    </Link>

                    {/* Contact Button */}
                    <Link
                        href="/#contact"
                        className="group relative inline-block bg-white/10 backdrop-blur-sm text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 hover:border-gold/50 w-full sm:w-auto"
                    >
                        {/* Animated gradient overlay */}
                        <span className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        {/* Button text */}
                        <span className="relative z-10 flex items-center justify-center gap-3 font-bold tracking-wide text-base md:text-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            تواصل معنا
                        </span>
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 animate-[fadeInUp_1s_ease-out_1.1s_forwards] opacity-0">
                    <p className="text-white/60 mb-4 text-sm">أو يمكنك زيارة:</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/#about" className="text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium">
                            عن المكتب
                        </Link>
                        <span className="text-white/30">•</span>
                        <Link href="/#services" className="text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium">
                            الخدمات
                        </Link>
                        <span className="text-white/30">•</span>
                        <Link href="/#location" className="text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium">
                            الموقع
                        </Link>
                    </div>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-gold rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-10 w-2 h-2 bg-gold rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gold/50 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-gold/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
    );
}
