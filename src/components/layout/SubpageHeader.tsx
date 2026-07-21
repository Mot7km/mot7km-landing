"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Languages } from "lucide-react";

interface SubpageHeaderProps {
  backHref?: string;
  backLabel?: string;
}

export default function SubpageHeader({ backHref = "/", backLabel }: SubpageHeaderProps) {
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

  const defaultLabel = isRtl ? "العودة للرئيسية" : "Back to Home";

  return (
    <div className="sticky top-6 md:top-8 z-40 mb-8 md:mb-12 flex items-center justify-between gap-4 w-full">
      {/* Floating Back Button */}
      <Link 
        href={backHref}
        className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-surface/80 backdrop-blur-2xl border border-white/10 text-xs sm:text-sm font-bold text-text-secondary hover:text-white hover:border-white/20 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
      >
        {isRtl ? (
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-primary" />
        ) : (
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1 text-primary" />
        )}
        <span>{backLabel || defaultLabel}</span>
      </Link>

      {/* Floating Language Dropdown */}
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
  );
}
