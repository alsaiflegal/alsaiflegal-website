"use client";

export default function OfficeLocation() {
  return (
    <section dir="rtl" className="relative w-full h-screen" id="location">
      {/* Full-Screen Map */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.788273351645!2d43.5241024!3d25.876444999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1583cb478c41af03%3A0xa3386ae1b97d47a3!2z2LTYsdmD2Kkg2KXYqNix2KfZh9mK2YUg2KjZhiDYudio2K/Yp9mE2LnYstmK2LIg2KfZhNiz2YrZgSDZhNmE2YXYrdin2YXYp9ipINmI2KfZhNin2LPYqti02KfYsdin2Kog2KfZhNmC2KfZhtmI2YbZitip!5e0!3m2!1sar!2ssa!4v1764542811552!5m2!1sar!2ssa"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="موقع شركة إبراهيم بن عبدالعزيز السيف للمحاماة"
        ></iframe>
      </div>

      {/* Floating Contact Info Card */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-end">
          <div className="pointer-events-auto w-full max-w-md animate-[fadeInUp_1s_ease-out_0.3s_forwards] opacity-0">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-gold/20 hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-1">

              {/* Title */}
              <h3 className="text-3xl font-bold text-navy mb-8 relative">
                <span className="relative z-10">مكتب الرس</span>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gold/10 rounded-full -z-0"></div>
              </h3>

              {/* Contact Details */}
              <div className="space-y-6 text-navy/80">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-sm text-navy/60 mb-1 font-medium">العنوان</p>
                    <p className="text-lg font-semibold text-navy">شارع الجريف، سابقاً، طريق الملك سلمان، الرس</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-sm text-navy/60 mb-1 font-medium">الهاتف</p>
                    <a href="tel:+966577508919" className="text-lg font-semibold text-navy hover:text-gold transition-colors duration-300" dir="ltr">
                      +966 57 750 8919
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-sm text-navy/60 mb-1 font-medium">البريد الإلكتروني</p>
                    <a href="mailto:info@alsaiflegal.com" className="text-lg font-semibold text-navy hover:text-gold transition-colors duration-300">
                      info@alsaiflegal.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://maps.app.goo.gl/zQnc5kJenQ2X1Jev7?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-3 bg-gradient-to-r from-navy to-navy-light text-white px-8 py-4 rounded-2xl font-semibold hover:from-gold hover:to-gold-light transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group/btn"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span>احصل على الاتجاهات</span>
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
