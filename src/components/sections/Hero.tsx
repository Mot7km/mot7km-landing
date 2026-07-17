"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MonitorPlay, Smartphone } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { t, language } = useLanguage();
  const ArrowIcon = language === "en" ? ArrowRight : ArrowLeft;

  return (
    <section id="product" className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background Decorative Elements - Enhanced Aurora */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-primary/15 blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen" />
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-40 right-[-10%] w-[600px] h-[600px] bg-accent/15 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8 mb-20">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm shadow-sm border border-border mb-6 hover:bg-surface transition-colors cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span className="text-sm font-medium text-text-secondary">{t("hero.badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.15] mb-6 tracking-tight"
            >
              {t("hero.title1")} <br className="hidden md:block" />
              <span className="text-gradient bg-brand-gradient">{t("hero.title2")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#demo"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(22,131,199,0.4)] hover:shadow-[0_0_30px_rgba(22,131,199,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <span>{t("hero.cta1")}</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: language === 'en' ? [0, 5, 0] : [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                >
                  <ArrowIcon size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Link>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent hover:bg-surface text-text-primary font-bold text-lg transition-all border-2 border-border hover:border-text-muted flex items-center justify-center gap-2"
              >
                <span>{t("hero.cta2")}</span>
              </Link>
            </motion.div>

            {/* Quick Stats/Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 text-text-muted text-sm font-medium"
            >
              <div className="flex items-center gap-2 bg-surface/50 px-4 py-2 rounded-lg border border-border/50">
                <MonitorPlay size={18} className="text-secondary" />
                <span>{t("hero.stat1")}</span>
              </div>
              <div className="flex items-center gap-2 bg-surface/50 px-4 py-2 rounded-lg border border-border/50">
                <Smartphone size={18} className="text-accent" />
                <span>{t("hero.stat2")}</span>
              </div>
            </motion.div>
          </div>

          {/* Mobile App Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex-1 relative w-full max-w-2xl mt-10 lg:mt-0 flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full drop-shadow-[0_20px_50px_rgba(22,131,199,0.3)]"
            >
              <img 
                src="/assets/mockups/mobile app mockup.svg" 
                alt="Mot7km Mobile App Mockup" 
                className="w-full h-auto object-contain scale-110 md:scale-125 origin-center lg:origin-left"
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Social Proof / Trusted By Band */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-10 border-t border-border mt-10"
        >
          <p className="text-center text-sm font-medium text-text-muted mb-6 uppercase tracking-widest">
            {language === 'ar' ? "موثوق من قبل أكثر من +100 علامة تجارية" : "Trusted by over 100+ brands"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Dummy Logos made with Tailwind components */}
            <div className="flex items-center gap-2 font-bold text-xl text-text-primary"><span className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">B</span>Burger Hub</div>
            <div className="flex items-center gap-2 font-bold text-xl text-text-primary"><span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">C</span>Cafe Latte</div>
            <div className="flex items-center gap-2 font-bold text-xl text-text-primary"><span className="w-8 h-8 rotate-45 bg-accent/20 flex items-center justify-center"><span className="-rotate-45">S</span></span>Steak House</div>
            <div className="flex items-center gap-2 font-bold text-xl text-text-primary"><span className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center border-2 border-success/50">J</span>Juice Time</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
