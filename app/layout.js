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

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${almarai.variable} ${rakkas.variable}`}
    >
      <head>
        <link
          rel="icon"
          href="/favicons/favicon-black.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicons/favicon-white.ico"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="font-main bg-offwhite">
        {children}
      </body>
    </html>
  );
}
