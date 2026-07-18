import type { Metadata } from "next";
import { Cairo, Roboto } from "next/font/google";
import "./globals.css";
import I18nProvider from '@/components/providers/I18nProvider';

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
import { ThemeProvider } from "@/config/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${cairo.variable} ${roboto.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-text-primary overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider>
            <SplashScreen />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}