"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link id="favicon" rel="icon" href="/favicons/favicon-light.ico"/>
        <title>شركة إبراهيم بن عبدالعزيز السيف</title>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
