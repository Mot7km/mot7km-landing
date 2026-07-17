import type { Metadata } from "next";
import { Cairo, Roboto } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mot7km - Smart Business Control | تحكم ذكي بأعمالك",
  description: "A comprehensive SaaS platform to digitize operations, monitor performance remotely, and elevate the customer experience for any modern business.",
};

import SplashScreen from "@/components/layout/SplashScreen";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cairo.variable} ${roboto.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-text-primary overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <SplashScreen />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

