"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MonitorPlay, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMouseParallax } from "@/hooks/useMouseParallax";

export default function Hero() {
  const { t, i18n } = useTranslation(); // i18n instance gives us language
  const language = i18n.language;
  const ArrowIcon = language === "en" ? ArrowRight : ArrowLeft;

  const {
    handleMouseMove,
    dashboardX,
    dashboardY,
    posX,
    posY,
    mobileX,
    mobileY,
  } = useMouseParallax();

  return (
    <section
      id="product"
      className="relative pt-30 pb-16 sm:pt-32 sm:pb-20 md:pt-48 md:pb-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background decorations – unchanged */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-primary/15 blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen" />
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-40 right-[-10%] w-[600px] h-[600px] bg-accent/15 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-12 lg:gap-12 mb-8 sm:mb-12 lg:mb-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-start z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm shadow-sm border border-border mb-4 sm:mb-6 hover:bg-surface transition-colors cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-sm font-medium text-text-secondary">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.15] mb-4 sm:mb-6 tracking-tight drop-shadow-sm"
            >
              {t("hero.title1")} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-accent">
                {t("hero.title2")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
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
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-bold text-base sm:text-lg transition-all shadow-[0_0_30px_rgba(22,131,199,0.3)] hover:shadow-[0_0_40px_rgba(22,131,199,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <span>{t("hero.cta1")}</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: language === "en" ? [0, 5, 0] : [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                >
                  <ArrowIcon size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Link>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-surface/50 backdrop-blur-md hover:bg-surface text-text-primary font-bold text-base sm:text-lg transition-all border border-white/10 hover:border-white/20 flex items-center justify-center gap-2"
              >
                <span>{t("hero.cta2")}</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 text-text-muted text-sm font-medium"
            >
              <div className="flex items-center gap-2 bg-surface/30 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/5 shadow-inner">
                <MonitorPlay size={18} className="text-secondary" />
                <span>{t("hero.stat1")}</span>
              </div>
              <div className="flex items-center gap-2 bg-surface/30 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/5 shadow-inner">
                <Smartphone size={18} className="text-accent" />
                <span>{t("hero.stat2")}</span>
              </div>
            </motion.div>
          </div>

          {/* 3D Mockups – hidden on small screens */}
          <motion.div
            initial={{ y: 30, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="hidden sm:flex flex-1 relative w-full min-h-[400px] md:h-[500px] lg:h-[600px] justify-center items-center perspective-1000"
          >
            {/* Glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-primary/20 blur-[80px] rounded-full animate-pulse pointer-events-none" />

            {/* Web Dashboard */}
            <motion.div
              style={{
                x: dashboardX,
                y: dashboardY,
                rotateY: language === "ar" ? 15 : -15,
                rotateX: 5,
              }}
              className="absolute left-0 lg:-left-20 top-10 w-[85%] md:w-[75%] rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden bg-surface/80 backdrop-blur-xl z-10"
            >
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="/mockups/web_dashboard.png"
                  alt="Dashboard"
                  fill
                  className="object-cover opacity-80 mix-blend-lighten"
                  unoptimized
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent mix-blend-overlay" />
              </div>
            </motion.div>

            {/* POS Terminal */}
            <motion.div
              style={{
                x: posX,
                y: posY,
                rotateY: language === "ar" ? -10 : 10,
                rotateX: -5,
              }}
              className="absolute right-0 lg:-right-10 top-32 w-[60%] md:w-[50%] rounded-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden bg-surface backdrop-blur-2xl z-20"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/mockups/pos_terminal.png"
                  alt="POS Terminal"
                  fill
                  className="object-cover opacity-90"
                  unoptimized
                  priority
                />
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
              </div>
            </motion.div>

            {/* Mobile App */}
            <motion.div
              style={{ x: mobileX, y: mobileY }}
              className="absolute sm:left-[12%] lg:left-[26%] sm:bottom-4 md:bottom-10 lg:bottom-16 w-[75%] max-w-[280px] sm:max-w-none sm:w-[76%] md:w-[62%] z-30 drop-shadow-[0_25px_60px_rgba(22,131,199,0.55)] mx-auto"
            >
              <div className="relative w-full aspect-[1/2] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/11]">
                <Image
                  src="/assets/mockups/mobile_app_mockup.png"
                  alt="Mot7km Mobile App"
                  fill
                  className="object-contain scale-[1.1] sm:scale-125 md:scale-135"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-6 sm:pt-8 md:pt-12 border-t border-white/5 mt-8 sm:mt-10 md:mt-16"
        >
          <p className="text-center text-sm font-bold text-text-muted mb-6 sm:mb-8 uppercase tracking-[0.2em]">
            {language === "ar"
              ? "موثوق من قبل أكثر من +100 علامة تجارية"
              : "Trusted by over 100+ brands"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-2 font-black text-base md:text-xl text-white hover:scale-105 transition-transform">
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/50 text-white">
                B
              </span>
              Burger Hub
            </div>
            <div className="flex items-center gap-2 font-black text-base md:text-xl text-white hover:scale-105 transition-transform">
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/50 text-white">
                C
              </span>
              Cafe Latte
            </div>
            <div className="flex items-center gap-2 font-black text-base md:text-xl text-white hover:scale-105 transition-transform">
              <span className="w-8 h-8 md:w-10 md:h-10 rotate-45 bg-accent flex items-center justify-center shadow-lg shadow-accent/50 text-white">
                <span className="-rotate-45">S</span>
              </span>
              Steak House
            </div>
            <div className="flex items-center gap-2 font-black text-base md:text-xl text-white hover:scale-105 transition-transform">
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-success flex items-center justify-center border-2 border-white/20 shadow-lg shadow-success/50 text-white">
                J
              </span>
              Juice Time
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}