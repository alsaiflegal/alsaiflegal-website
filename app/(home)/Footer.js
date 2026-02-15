import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logos/logo_and_name_horizontal.png"
              width={300}
              height={100}
              alt="Alsaif Legal"
              className="w-64 h-auto opacity-90 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h6 className="text-xl font-bold text-gold mb-2">تواصل معنا</h6>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <a href="mailto:info@alsaiflegal.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
                  info@alsaiflegal.com
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <a href="tel:+966577508919" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg" dir="ltr">
                  +966 57 750 8919
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h6 className="text-xl font-bold text-gold mb-2">تابعنا</h6>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <a href="https://x.com/alsaif_legal" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
                  alsaif_legal
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path d="M12 1.96a5.88 5.88 0 0 1 5.882 5.882c0 .618 .008 1.174 .03 1.678l.008 .21l.084 -.115q .46 -.627 1.102 -1.29l.187 -.19a1 1 0 0 1 1.414 1.415c-2.637 2.637 -2.51 3.795 .76 5.527l.048 .025a.98 .98 0 0 1 .46 .636l.004 .022l.003 .013l.006 .043l.006 .032v.009l.003 .025l.001 .051l.002 .026l-.001 .009v.025l-.003 .042l-.002 .034l-.002 .015l-.002 .02l-.004 .016l-.01 .06l-.007 .026l-.006 .02l-.016 .06l-.013 .029l-.005 .013l-.024 .062a1 1 0 0 1 -.197 .28l-.03 .025l-.016 .014l-.043 .039l-.013 .007l-.018 .015l-.051 .033l-.02 .014l-.008 .003l-.014 .01a1 1 0 0 1 -.098 .049l-.013 .003l-.146 .066c-.576 .255 -.81 .365 -1.008 .474l-.053 .03c-.27 .155 -.398 .277 -.558 .525c-.156 .245 -.293 .516 -.715 1.41a1 1 0 0 1 -.904 .573c-1.067 0 -1.798 .25 -2.879 .868l-.426 .246c-.176 .102 -.311 .178 -.447 .25c-.794 .423 -1.464 .636 -2.248 .636s-1.454 -.213 -2.248 -.636a15 15 0 0 1 -.447 -.25l-.426 -.246c-1.081 -.618 -1.812 -.868 -2.879 -.868a1 1 0 0 1 -.904 -.573c-.422 -.894 -.559 -1.165 -.715 -1.41a1.4 1.4 0 0 0 -.558 -.525c-.228 -.13 -.47 -.243 -1.227 -.577l.02 .007l-.013 -.003a1 1 0 0 1 -.098 -.05l-.014 -.009l-.028 -.017l-.051 -.033l-.018 -.015l-.013 -.007l-.043 -.039l-.012 -.01l-.004 -.004l-.03 -.025a1 1 0 0 1 -.197 -.28l-.024 -.062l-.005 -.013l-.013 -.028l-.016 -.061l-.005 -.012l-.008 -.035l-.01 -.059l-.004 -.016l-.002 -.02l-.002 -.015l-.002 -.035l-.004 -.041l.001 -.025l-.001 -.01l.002 -.025l.001 -.05l.003 -.026v-.01l.006 -.03l.006 -.044l.004 -.014l.002 -.021a.98 .98 0 0 1 .461 -.636l.048 -.025l.204 -.11c3.003 -1.635 3.132 -2.785 .72 -5.25l-.164 -.167a1 1 0 0 1 1.414 -1.414q .764 .763 1.289 1.479l.083 .115l.01 -.21q .025 -.628 .028 -1.374l.001 -.304a5.88 5.88 0 0 1 5.882 -5.882" />
                  </svg>
                </div>
                <a href="https://snapchat.com/t/LvW3zUtv" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
                  alsaif_legal
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} شركة إبراهيم بن عبدالعزيز السيف للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
