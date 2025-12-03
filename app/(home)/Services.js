"use client";

export default function ServicesBento() {

  // Service Icons Component
  const ServiceIcon = ({ type }) => {
    const icons = {
      litigation: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      consultation: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      company: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      investment: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      inheritance: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      restructure: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
        </svg>
      ),
      ip: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      realestate: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      merger: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      labor: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      insurance: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      banking: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      contracts: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    };
    return icons[type] || icons.consultation;
  };

  const services = [
    {
      icon: "litigation",
      title: "التقاضي والمرافعات",
      description: "تمثيل قانوني متميز أمام المحاكم والهيئات القضائية بكافة درجاتها"
    },
    {
      icon: "consultation",
      title: "الاستشارات القانونية",
      description: "استشارات قانونية شاملة ومتخصصة في مختلف المجالات"
    },
    {
      icon: "company",
      title: "الشركات التجارية",
      description: "تأسيس وإدارة الشركات وتقديم الاستشارات القانونية المتعلقة بها"
    },
    {
      icon: "investment",
      title: "الاستثمار الأجنبي",
      description: "مساعدة المستثمرين الأجانب في تأسيس وإدارة أعمالهم في المملكة"
    },
    {
      icon: "inheritance",
      title: "قضايا الأحوال الشخصية",
      description: "التعامل مع قضايا الأسرة والميراث والوصايا"
    },
    {
      icon: "restructure",
      title: "إعادة الهيكلة والإفلاس",
      description: "مساعدة الشركات في إعادة الهيكلة المالية والإدارية"
    },
    {
      icon: "ip",
      title: "الملكية الفكرية",
      description: "حماية حقوق الملكية الفكرية والعلامات التجارية"
    },
    {
      icon: "realestate",
      title: "العقارات والإنشاءات",
      description: "الاستشارات القانونية المتعلقة بالعقارات ومشاريع البناء"
    },
    {
      icon: "merger",
      title: "الاندماج والاستحواذ",
      description: "تقديم المشورة في عمليات الاندماج والاستحواذ"
    },
    {
      icon: "labor",
      title: "قانون العمل",
      description: "استشارات في علاقات العمل وحل النزاعات العمالية"
    },
    {
      icon: "insurance",
      title: "التأمين",
      description: "الاستشارات القانونية المتعلقة بعقود التأمين والمطالبات"
    },
    {
      icon: "banking",
      title: "الخدمات المصرفية والمالية",
      description: "استشارات في المعاملات المصرفية والتمويل"
    },
    {
      icon: "contracts",
      title: "صياغة العقود",
      description: "إعداد ومراجعة العقود التجارية والقانونية"
    }
  ];

  return (
    <section
      className="w-full py-32 bg-white"
      dir="rtl"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 animate-[fadeInUp_1s_ease-out_forwards]">
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6 tracking-tight">
            مجالات العمل والخدمات
          </h2>
          <p className="text-lg md:text-xl text-navy/70 font-light max-w-2xl mx-auto">
            خدمات قانونية متكاملة تعكس خبرتنا الواسعة
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full mt-8"></div>
        </div>

        {/* Uniform Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-gold/50 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 rounded-xl bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                <div className="text-navy group-hover:text-white transition-colors duration-500">
                  <ServiceIcon type={service.icon} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-navy/70 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
