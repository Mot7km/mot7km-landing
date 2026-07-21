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
  title: "متحكم (Mot7km) - نظام سحابي لإدارة المطاعم والكافيهات | Smart Business Control",
  description: "منصة متحكم (Mot7km) هي نظام سحابي متكامل لإدارة المطاعم، الكافيهات، نقاط البيع الكاشير (POS)، المنيو الإلكتروني (QR)، ومتابعة المبيعات فورياً.",
  keywords: [
    "متحكم", "منصة متحكم", "نظام متحكم", "تطبيق متحكم", "برنامج متحكم", "متحكم مطاعم", "متحكم كاشير",
    "Mot7km", "mot7km.store", "نظام مطاعم", "restaurant pos", "QR menu", "ERP", 
    "نظام نقاط بيع", "إدارة المطاعم", "برنامج كاشير", "كاشير مطاعم", 
    "منيو الكتروني", "نظام سحابي للمطاعم", "إدارة الكافيهات", 
    "cloud pos", "digital menu", "restaurant management software"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/logo/mot7km_logo%20(2).png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/assets/logo/mot7km_logo%20(2).png",
  },
  openGraph: {
    title: "متحكم (Mot7km) - نظام إدارة المطاعم والكافيهات الذكي",
    description: "منصة متحكم (Mot7km) هي نظام سحابي متكامل لإدارة المطاعم والكافيهات ونقاط البيع السحابية (Cloud POS).",
    url: "https://mot7km.store",
    siteName: "متحكم (Mot7km)",
    images: [
      {
        url: "https://mot7km.store/assets/logo/mot7km_logo%20(2).png",
        width: 800,
        height: 800,
        alt: "لوحة تحكم منصة متحكم Mot7km",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "متحكم (Mot7km)",
    description: "نظام متكامل لإدارة مطعمك ونقاط البيع السحابية",
    images: ["https://mot7km.store/assets/logo/mot7km_logo%20(2).png"],
  },
};

import SplashScreen from "@/components/layout/SplashScreen";
import { ThemeProvider } from "@/config/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data to explicitly tell Google about the brand "متحكم / Mot7km"
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mot7km.store/#organization",
        "name": "متحكم",
        "alternateName": ["Mot7km", "منصة متحكم", "نظام متحكم"],
        "url": "https://mot7km.store",
        "logo": "https://mot7km.store/assets/logo/mot7km_logo%20(2).png",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61591358790071",
          "https://www.instagram.com/mot7km"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://mot7km.store/#application",
        "name": "متحكم - Mot7km",
        "alternateName": ["متحكم", "Mot7km", "تطبيق متحكم"],
        "operatingSystem": "Web, iOS, Android, Windows",
        "applicationCategory": "BusinessApplication",
        "description": "منصة متحكم (Mot7km) هي نظام سحابي متكامل لإدارة المطاعم والكافيهات والأعمال ونقاط البيع السحابية.",
        "url": "https://mot7km.store",
        "logo": "https://mot7km.store/assets/logo/mot7km_logo%20(2).png",
        "image": "https://mot7km.store/assets/logo/mot7km_logo%20(2).png",
        "author": {
          "@id": "https://mot7km.store/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "SAR"
        }
      }
    ]
  };

  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${roboto.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/assets/logo/mot7km_logo%20(2).png" />
        <link rel="apple-touch-icon" href="/assets/logo/mot7km_logo%20(2).png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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