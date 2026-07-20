"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, Quote, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { getFeaturesTabs, getFeaturesContent, type TabId } from "@/data/features";

export default function Features() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabId>("web");

  const tabs = useMemo(() => getFeaturesTabs(t), [t]);
  const contentMap = useMemo(() => getFeaturesContent(t), [t]);
  const currentContent = contentMap[activeTab];

  return (
    <section
      id="features"
      className="relative min-h-screen py-16 sm:py-24 md:py-32 bg-background"
    >
      {/* Background glows – decorative, clipped by their parent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] blur-[150px] rounded-full translate-y-1/3 -translate-x-1/3" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-white/10 text-white text-xs font-bold mb-6 backdrop-blur-md shadow-lg uppercase tracking-widest">
            <Sparkles size={14} className="text-primary" />
            <span>{t("features.badge")}</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4 sm:mb-6 tracking-tight"
          >
            {t("features.title1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-accent">
              {t("features.title2")}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            {t("features.desc")}
          </motion.p>
        </div>

        {/* Sticky Tab Bar */}
        <div className="sticky top-[72px] md:top-24 z-50 flex justify-center mb-10 sm:mb-14 md:mb-16 w-full py-3 md:py-0">
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-surface/80 md:bg-surface/50 backdrop-blur-2xl md:backdrop-blur-md border border-white/10 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] w-fit max-w-full mx-auto overflow-x-auto snap-x snap-mandatory hide-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 z-10 whitespace-nowrap shrink-0 snap-center cursor-pointer ${
                    isActive
                      ? "text-white gap-1.5 sm:gap-2"
                      : "text-text-muted hover:text-white hover:bg-white/5 gap-1.5 sm:gap-2"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureTab"
                      className="absolute inset-0 md:bg-primary/20 bg-gradient-to-r from-primary/30 to-primary/10 border md:border-primary/50 border-primary/40 rounded-full shadow-[0_0_20px_rgba(22,131,199,0.3)] md:shadow-[0_0_15px_rgba(22,131,199,0.3)] -z-10 backdrop-blur-md md:backdrop-blur-none"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive
                        ? "md:text-primary-light drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] md:drop-shadow-md text-primary-light"
                        : ""
                    }`}
                  >
                    {tab.icon}
                  </span>
                  <span className="relative z-10 hidden md:inline">
                    {tab.titleDesktop}
                  </span>
                  {isActive && (
                    <span className="relative z-10 md:hidden">
                      {tab.titleMobile}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start lg:items-center"
            >
              {/* Text Side */}
              <div className="flex flex-col relative z-20 order-1 lg:order-none">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <span
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${currentContent.gradient} border border-white/10 shadow-lg text-white shrink-0`}
                  >
                    {tabs.find((t) => t.id === activeTab)?.icon}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-sm pb-1">
                    {currentContent.title}
                  </h3>
                </div>

                <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                  {currentContent.desc}
                </p>

                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                  {currentContent.bullets.map((bullet: string, idx: number) => (
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      key={idx}
                      className="flex items-start sm:items-center gap-3 text-white/90 font-medium text-sm sm:text-base"
                    >
                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${currentContent.glowColor} text-white shrink-0 mt-0.5 sm:mt-0`}
                      >
                        <CheckCircle2 size={16} className={currentContent.accent} />
                      </div>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href={`/features/${activeTab}`}
                    aria-label={`${t("features.learnMore")} ${currentContent.title}`}
                    className={`relative overflow-hidden inline-flex items-center w-fit gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium transition-all hover:scale-105 group`}
                  >
                    <span className="relative z-10">
                      {t("features.learnMore")}
                      <span className="sr-only"> {currentContent.title}</span>
                    </span>
                    <ArrowRight size={18} className={`relative z-10 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 ${currentContent.accent}`} />
                    
                    <motion.div
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-0 w-1/2"
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Image & Review Side */}
              <div className="relative z-10 order-2 lg:order-none w-full">
                <div className={`relative w-full flex flex-col items-center ${activeTab === 'mobile' || activeTab === 'qr' ? 'mt-8 lg:mt-0' : ''}`}>
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${currentContent.glowColor} blur-[100px] rounded-full pointer-events-none opacity-50`}
                  />

                  {activeTab === 'mobile' || activeTab === 'qr' ? (
                    <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] aspect-[1/2.1] bg-[#0c0c0c] rounded-[2.5rem] sm:rounded-[3rem] border-[6px] sm:border-[8px] border-surface shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                      {/* Mobile Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 sm:h-6 bg-surface rounded-b-xl z-20" />
                      <Image
                        src={currentContent.image}
                        alt={currentContent.title}
                        fill
                        className="object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                        unoptimized
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                    </div>
                  ) : (
                    <div className="relative w-full bg-[#0c0c0c] rounded-xl sm:rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group flex flex-col">
                      {/* Browser Header */}
                      <div className="h-8 sm:h-10 bg-surface/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 gap-2 shrink-0 z-20 relative">
                        <div className="flex gap-1.5 sm:gap-2">
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 h-4 sm:h-5 w-1/3 bg-white/5 rounded-full" />
                      </div>
                      <div className="aspect-[4/3] sm:aspect-[16/10] relative">
                        <Image
                          src={currentContent.image}
                          alt={currentContent.title}
                          fill
                          className="object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                          unoptimized
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                      </div>
                    </div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -2 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className={`relative z-30 w-full max-w-sm sm:max-w-md lg:max-w-md ${(activeTab === 'mobile' || activeTab === 'qr') ? '-mt-16 sm:-mt-24 mx-auto' : '-mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16 mx-auto lg:mx-0 lg:ml-0'} bg-surface/60 backdrop-blur-3xl border border-white/20 rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10`}
                    style={{ boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.2)' }}
                  >
                    <Quote size={24} className={`${currentContent.accent} opacity-50 mb-2 sm:mb-3`} />
                    <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 italic drop-shadow-md">
                      {currentContent.review}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {currentContent.reviewer.charAt(0)}
                      </div>
                      <span className="text-text-secondary text-xs sm:text-sm font-bold">
                        {currentContent.reviewer}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}