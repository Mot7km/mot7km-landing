"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { getUseCases, type UseCase } from "@/data/useCases";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle } from "lucide-react";

export default function UseCases() {
  const { t, i18n } = useTranslation();
  const [activeCase, setActiveCase] = useState(0);
  const cases = getUseCases(t);
  const isRtl = i18n.language === "ar";

  const currentCase = cases[activeCase] || cases[0];
  const ActiveIcon = currentCase.icon;

  return (
    <section id="use-cases" className="relative py-20 sm:py-28 md:py-36 bg-background">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 blur-[160px] rounded-full" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[140px] rounded-full transition-all duration-1000 opacity-20"
          style={{ background: currentCase.glowColor }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-white/10 text-white text-xs font-bold mb-6 backdrop-blur-md shadow-md tracking-widest"
          >
            <Sparkles size={14} className="text-primary" />
            <span>{t("nav.useCases")}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            {t("useCases.title1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">{t("useCases.title2")}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto font-medium"
          >
            {t("useCases.desc")}
          </motion.p>
        </div>

        {/* Sticky Tab Bar matching Features section style */}
        <div className="sticky top-[72px] md:top-24 z-40 flex justify-center mb-10 sm:mb-14 md:mb-16 w-full py-3 md:py-0">
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-surface/80 md:bg-surface/50 backdrop-blur-2xl md:backdrop-blur-md border border-white/10 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] w-fit max-w-full mx-auto overflow-x-auto snap-x snap-mandatory hide-scrollbar">
            {cases.map((uc: UseCase, index: number) => {
              const isActive = activeCase === index;
              const Icon = uc.icon;

              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveCase(index)}
                  className={`relative flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 z-10 whitespace-nowrap shrink-0 snap-center cursor-pointer ${
                    isActive
                      ? "text-white gap-1.5 sm:gap-2"
                      : "text-text-muted hover:text-white hover:bg-white/5 gap-1.5 sm:gap-2"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeUseCaseTab"
                      className="absolute inset-0 md:bg-primary/20 bg-gradient-to-r from-primary/30 to-primary/10 border md:border-primary/50 border-primary/40 rounded-full shadow-[0_0_20px_rgba(22,131,199,0.3)] md:shadow-[0_0_15px_rgba(22,131,199,0.3)] -z-10 backdrop-blur-md md:backdrop-blur-none"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? `${uc.color} drop-shadow-md` : ""}`}>
                    <Icon size={18} />
                  </span>
                  <span className="relative z-10">
                    {uc.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Stage (SaaS Stage Showcase) */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-[2.5rem] bg-surface/40 backdrop-blur-3xl border border-white/10 p-6 sm:p-10 md:p-14 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
              style={{ boxShadow: `0 30px 90px -20px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.15)` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                {/* Left Side: Content & Action */}
                <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-start order-2 lg:order-1">
                  
                  {/* KPI Metric Pill */}
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-inner">
                    <span className={`text-xl sm:text-2xl font-extrabold ${currentCase.color}`}>
                      {currentCase.metricValue}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-text-secondary">
                      {currentCase.metricLabel}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                    {currentCase.title}
                  </h3>

                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 font-medium">
                    {currentCase.desc}
                  </p>

                  {/* Target Roles */}
                  {currentCase.roles && currentCase.roles.length > 0 && (
                    <div className="mb-10 w-full">
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">
                        {t("solutions.rolesTitle") || "المستفيدون من النظام"}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {currentCase.roles.map((role: string, idx: number) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface/80 border border-white/10 text-xs font-bold text-white/90 shadow-sm"
                          >
                            <CheckCircle size={12} className={currentCase.color} />
                            <span>{role}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Link Button to Solutions Page */}
                  <Link
                    href={`/solutions/${currentCase.id}`}
                    className="relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-bold text-base transition-all duration-300 hover:scale-105 group shadow-xl"
                  >
                    <span className="relative z-10">{t("solutions.explore") || "اكتشف كافة ميزات الحل"}</span>
                    {isRtl ? (
                      <ArrowLeft size={18} className={`relative z-10 transition-transform group-hover:-translate-x-1 ${currentCase.color}`} />
                    ) : (
                      <ArrowRight size={18} className={`relative z-10 transition-transform group-hover:translate-x-1 ${currentCase.color}`} />
                    )}
                    <motion.div
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 z-0 w-1/2"
                    />
                  </Link>

                </div>

                {/* Right Side: 3D Layered Glass Stage */}
                <div className="lg:col-span-6 relative order-1 lg:order-2 perspective-1000 flex justify-center">
                  <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[16/11] rounded-2xl md:rounded-3xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden group">
                    
                    {/* Live Operational Status Indicator */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>{isRtl ? "نظام موثوق ونشط" : "LIVE SYSTEM"}</span>
                    </div>

                    {/* Mode Icon Badge */}
                    <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                      <ActiveIcon size={20} className={currentCase.color} />
                    </div>

                    <Image
                      src={currentCase.image}
                      alt={currentCase.title}
                      fill
                      className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                      priority
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}