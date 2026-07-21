"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { SolutionPageData } from "@/data/solutionPages";
import { 
  ArrowRight, ArrowLeft, Zap, Coffee, QrCode, 
  PieChart, UtensilsCrossed, Users, ShieldCheck, 
  Printer, CupSoda, Star, Clock, Gamepad2, Bell, CheckCircle2, Languages 
} from "lucide-react";

const IconMap: Record<string, any> = {
  Zap, Coffee, QrCode, PieChart, UtensilsCrossed, 
  Users, ShieldCheck, Printer, CupSoda, Star, Clock, Gamepad2, Bell
};

interface SolutionContentProps {
  data: SolutionPageData;
}

export default function SolutionContent({ data }: SolutionContentProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLangMenuOpen) return;
    const closeMenu = () => setIsLangMenuOpen(false);
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, [isLangMenuOpen]);

  const changeLang = (newLang: string) => {
    i18n.changeLanguage(newLang);
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`;
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="relative pt-8 pb-24 md:pt-12 md:pb-36 bg-background">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] blur-[160px] rounded-full opacity-25 ${data.glowColor}`} />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Sticky Floating Action Bar (Back + Language Switcher Dropdown) */}
        <div className="sticky top-6 md:top-8 z-40 mb-8 md:mb-12 flex items-center justify-between gap-4">
          <Link 
            href="/#use-cases" 
            className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-surface/80 backdrop-blur-2xl border border-white/10 text-xs sm:text-sm font-bold text-text-secondary hover:text-white hover:border-white/20 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
          >
            {isRtl ? (
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-primary" />
            ) : (
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1 text-primary" />
            )}
            <span>{t("solutions.back") || "العودة لحالات الاستخدام"}</span>
          </Link>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLangMenuOpen(!isLangMenuOpen);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-surface/80 backdrop-blur-2xl border border-white/10 text-xs sm:text-sm font-bold text-text-secondary hover:text-white hover:border-white/20 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <Languages size={16} className="text-primary" />
              <span>{isRtl ? "العربية" : "English"}</span>
            </button>

            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-32 bg-surface/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl py-1.5 z-50 overflow-hidden"
                >
                  <button
                    onClick={() => {
                      if (i18n.language !== "ar") changeLang("ar");
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full text-start px-4 py-2 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 hover:bg-white/5 cursor-pointer ${
                      isRtl ? "text-primary font-bold" : "text-text-secondary"
                    }`}
                  >
                    <span>العربية</span>
                  </button>
                  <button
                    onClick={() => {
                      if (i18n.language !== "en") changeLang("en");
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full text-start px-4 py-2 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 hover:bg-white/5 cursor-pointer ${
                      !isRtl ? "text-primary font-bold" : "text-text-secondary"
                    }`}
                  >
                    <span>English</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Solution Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          
          <div className="lg:col-span-6 text-center lg:text-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-white/10 text-white text-xs font-bold mb-6 backdrop-blur-md shadow-md tracking-widest ${data.themeColor}`}
            >
              <span>{t(data.hero.badgeKey)}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              {t(data.hero.titleKey)}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10"
            >
              {t(data.hero.subtitleKey)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/#demo"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-background font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                {t("nav.cta")}
              </Link>
              <Link
                href="/#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface border border-white/10 text-white font-bold text-base transition-all duration-300 hover:bg-white/5"
              >
                {t("nav.pricing")}
              </Link>
            </motion.div>
          </div>

          {/* Hero Image Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[16/11] rounded-3xl bg-[#0c0c0c] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden group">
              <Image
                src={data.hero.image}
                alt={t(data.hero.titleKey)}
                fill
                className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-700"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 md:mb-28 max-w-5xl mx-auto">
          {data.metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-surface/40 backdrop-blur-md border border-white/10 text-center shadow-lg"
            >
              <span className={`text-4xl sm:text-5xl font-black mb-3 block ${data.themeColor}`}>
                {m.value}
              </span>
              <span className="text-sm sm:text-base font-bold text-white/90">
                {t(m.labelKey)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {isRtl ? "المزايا الفنية والتطبيقية للنشاط" : "Key Solution Features"}
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              {t(data.overviewKey)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.benefits.map((b, idx) => {
              const Icon = IconMap[b.icon] || Zap;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-surface/50 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${data.themeColor} group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t(b.titleKey)}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {t(b.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
