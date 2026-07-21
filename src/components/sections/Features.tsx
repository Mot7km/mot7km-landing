"use client";

import SegmentedTabbar from "@/components/ui/SegmentedTabbar";
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
      className="relative min-h-screen py-16 sm:py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background glows – decorative, clipped by their parent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/10 dark:bg-primary/15 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 dark:bg-indigo-600/15 blur-[150px] rounded-full translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/90 dark:border-white/15 text-slate-800 dark:text-white text-xs font-extrabold mb-6 backdrop-blur-md shadow-sm uppercase tracking-widest">
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span>{t("features.badge")}</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight drop-shadow-sm"
          >
            {t("features.title1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-emerald-400">
              {t("features.title2")}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            {t("features.desc")}
          </motion.p>
        </div>

        {/* Reusable Sticky Tab Bar */}
        <SegmentedTabbar
          tabs={tabs.map((tab) => ({
            id: tab.id,
            title: tab.titleDesktop,
            titleMobile: tab.titleMobile,
            icon: tab.icon
          }))}
          activeTab={activeTab}
          onChange={setActiveTab}
          layoutId="activeFeatureTab"
        />

        {/* Content Showcase Grid */}
        <div className="max-w-7xl mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start lg:items-center transform-gpu"
            >
              {/* Text Side */}
              <div className="flex flex-col relative z-20 order-1 lg:order-none">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <span
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light border border-primary/20 shadow-md shrink-0"
                  >
                    {tabs.find((t) => t.id === activeTab)?.icon}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-slate-900 dark:text-white drop-shadow-sm pb-1">
                    {currentContent.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg font-medium">
                  {currentContent.desc}
                </p>

                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                  {currentContent.bullets.map((bullet: string, idx: number) => (
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + idx * 0.08 }}
                      key={idx}
                      className="flex items-start sm:items-center gap-3 text-slate-800 dark:text-slate-200 font-extrabold text-sm sm:text-base"
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5 sm:mt-0"
                      >
                        <CheckCircle2 size={16} />
                      </div>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href={`/features/${activeTab}`}
                    aria-label={`${t("features.learnMore")} ${currentContent.title}`}
                    className="relative overflow-hidden inline-flex items-center w-fit gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary text-white font-extrabold text-sm sm:text-base transition-all hover:scale-105 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 group cursor-pointer"
                  >
                    <span className="relative z-10">
                      {t("features.learnMore")}
                      <span className="sr-only"> {currentContent.title}</span>
                    </span>
                    <ArrowRight size={18} className="relative z-10 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    
                    <motion.div
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0 w-1/2"
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Image & Review Side */}
              <div className="relative z-10 order-2 lg:order-none w-full">
                <div className={`relative w-full flex flex-col items-center ${activeTab === 'mobile' || activeTab === 'qr' ? 'mt-8 lg:mt-0' : ''}`}>
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${currentContent.glowColor} blur-[110px] rounded-full pointer-events-none opacity-40`}
                  />

                  {activeTab === 'mobile' || activeTab === 'qr' ? (
                    <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] aspect-[1/2.1] bg-slate-900 dark:bg-[#0c0c0c] rounded-[2.5rem] sm:rounded-[3rem] border-[6px] sm:border-[8px] border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group transform-gpu">
                      {/* Mobile Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 sm:h-6 bg-slate-800 dark:bg-black rounded-b-xl z-20" />
                      <Image
                        src={currentContent.image}
                        alt={currentContent.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover object-top opacity-95 group-hover:scale-105 transition-all duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                    </div>
                  ) : (
                    <div className="relative w-full bg-slate-900 dark:bg-[#0c0c0c] rounded-xl sm:rounded-2xl border border-slate-300 dark:border-white/15 shadow-2xl overflow-hidden group flex flex-col transform-gpu">
                      {/* Browser Header */}
                      <div className="h-8 sm:h-10 bg-slate-800/90 dark:bg-[#151c2e]/90 backdrop-blur-md border-b border-slate-700 dark:border-white/10 flex items-center px-4 gap-2 shrink-0 z-20 relative">
                        <div className="flex gap-1.5 sm:gap-2">
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 h-4 sm:h-5 w-1/3 bg-white/10 rounded-full" />
                      </div>
                      <div className="aspect-[4/3] sm:aspect-[16/10] relative">
                        <Image
                          src={currentContent.image}
                          alt={currentContent.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover object-top opacity-95 group-hover:scale-105 transition-all duration-500"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none z-10" />
                      </div>
                    </div>
                  )}

                  {/* Customer Review Glass Card (Dual Theme Adaptive) */}
                  <motion.div
                    initial={{ opacity: 0, y: 25, rotate: -1 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className={`relative z-30 w-full max-w-sm sm:max-w-md lg:max-w-md ${(activeTab === 'mobile' || activeTab === 'qr') ? '-mt-16 sm:-mt-24 mx-auto' : '-mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16 mx-auto lg:mx-0 lg:ml-0'} bg-white/95 dark:bg-[#0c1626]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/15 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]`}
                  >
                    <Quote size={22} className="text-primary opacity-80 mb-2 sm:mb-3" />
                    <p className="text-slate-800 dark:text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 italic font-semibold">
                      {currentContent.review}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary dark:text-primary-light border border-primary/20 flex items-center justify-center font-black text-sm sm:text-base">
                        {currentContent.reviewer.charAt(0)}
                      </div>
                      <span className="text-slate-900 dark:text-white text-xs sm:text-sm font-extrabold">
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