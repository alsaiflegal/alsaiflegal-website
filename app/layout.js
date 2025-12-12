import "./globals.css";
import { Almarai, Rakkas } from "next/font/google";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
});

const rakkas = Rakkas({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rakkas",
});

export const metadata = {
  metadataBase: new URL('https://alsaiflegal.com'),
  title: {
    default: 'شركة إبراهيم بن عبدالعزيز السيف للمحاماة | Alsaif Legal',
    template: '%s | شركة إبراهيم بن عبدالعزيز السيف للمحاماة'
  },
  description: 'شركة إبراهيم بن عبدالعزيز السيف للمحاماة تقدم خدمات قانونية متكاملة في المملكة العربية السعودية، تشمل الاستشارات القانونية، التقاضي، تأسيس الشركات، والتحكيم التجاري.',
  keywords: ['محامي', 'مستشار قانوني', 'السعودية', 'الرياض', 'شركات', 'قضايا عمالية', 'استثمار أجنبي', 'قانون', 'محاماة'],
  authors: [{ name: 'Alsaif Legal' }],
  creator: 'Alsaif Legal',
  publisher: 'Alsaif Legal',
  openGraph: {
    title: 'شركة إبراهيم بن عبدالعزيز السيف للمحاماة | Alsaif Legal',
    description: 'خدمات قانونية متكاملة في المملكة العربية السعودية',
    url: 'https://alsaiflegal.com',
    siteName: 'شركة إبراهيم بن عبدالعزيز السيف للمحاماة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/logos/logo_and_name_horizontal_black.png',
        width: 1200,
        height: 630,
        alt: 'Alsaif Legal Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة إبراهيم بن عبدالعزيز السيف للمحاماة | Alsaif Legal',
    description: 'خدمات قانونية متكاملة في المملكة العربية السعودية',
    images: ['/images/logos/logo_and_name_horizontal_black.png'],
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-black.ico', media: '(prefers-color-scheme: light)' },
      { url: '/favicons/favicon-white.ico', media: '(prefers-color-scheme: dark)' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#0a192f',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${almarai.variable} ${rakkas.variable}`}
    >
      <body className="font-main bg-offwhite">
        {children}
      </body>
    </html>
  );
}
