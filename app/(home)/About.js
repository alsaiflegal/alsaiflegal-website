import React from 'react';

export default function About() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-offwhite via-ivory to-offwhite" dir="rtl" id="about">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20 animate-[fadeInUp_1s_ease-out_forwards]">
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6 tracking-tight">
            عن الشركة
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full"></div>
          <p className="mt-8 text-lg md:text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed font-light">
            نحن شركة قانونية متخصصة في تقديم الخدمات الشرعية والقانونية، وصياغة العقود، وخدمات الشركات المحلية والدولية. نقدم خدمات التقاضي والتحكيم، ونمثل عملاءنا أمام جميع الجهات القضائية وفقاً للشريعة الإسلامية والأنظمة السعودية.
          </p>
        </div>

        {/* Standard Grid - Uniform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* بماذا نتميز */}
          <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-gold/50 flex flex-col items-center text-center animate-[fadeInUp_1s_ease-out_0.2s_forwards] opacity-0 overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
              <svg className="w-10 h-10 text-gold group-hover:text-white group-hover:rotate-12 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">بماذا نتميز</h3>
            <p className="text-navy/70 leading-relaxed">
              نتميز بخبرة قانونية واسعة وفريق محترف يضم محامين محليين ودوليين يمتلكون معرفة عميقة بالقوانين المحلية والدولية، مما يمنحنا القدرة على تلبية احتياجات عملائنا بكفاءة واحترافية عالية.
            </p>
          </div>

          {/* أسلوب عملنا */}
          <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-gold/50 flex flex-col items-center text-center animate-[fadeInUp_1s_ease-out_0.4s_forwards] opacity-0 overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
              <svg className="w-10 h-10 text-gold group-hover:text-white group-hover:rotate-12 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="relative z-10 text-2xl font-bold text-navy mb-4">أسلوب عملنا</h3>
            <p className="relative z-10 text-navy/80 leading-relaxed">
              نركز على بناء شراكات استراتيجية طويلة الأمد مع عملائنا، ونحول احتياجاتهم إلى حلول قانونية دقيقة وفعّالة. نضمن الشفافية الكاملة، وسلاسة سير العمل، والاعتماد على أفضل الممارسات القانونية المعترف بها دولياً.
            </p>
          </div>

          {/* قيمنا */}
          <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-gold/50 flex flex-col items-center text-center animate-[fadeInUp_1s_ease-out_0.6s_forwards] opacity-0 md:col-span-2 lg:col-span-1 overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
              <svg className="w-10 h-10 text-gold group-hover:text-white group-hover:rotate-12 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="relative z-10 text-2xl font-bold text-navy mb-4">قيمنا</h3>
            <p className="relative z-10 text-navy/80 leading-relaxed">
              قيمنا الأساسية تشمل: الخبرة والكفاءة المهنية، أولوية مصالح العملاء، دعم رؤية المملكة 2030، المهنية والنزاهة، التطوير المستمر، السرية التامة وحماية البيانات، الاستدامة، والمرونة في مواكبة التطورات القانونية والتشريعية.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}