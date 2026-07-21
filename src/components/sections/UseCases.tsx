"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { getUseCases, type UseCase } from "@/data/useCases";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle } from "lucide-react";
import SegmentedTabbar from "@/components/ui/SegmentedTabbar";

export default function UseCases() {
  const { t, i18n } = useTranslation();
  const [activeCase, setActiveCase] = useState(0);
  const cases = getUseCases(t);
  const isRtl = i18n.language === "ar";

  const currentCase = cases[activeCase] || cases[0];
  const ActiveIcon = currentCase.icon;

  return (
    <section id="use-cases" className="relative py-20 sm:py-28 md:py-36 bg-background overflow-hidden">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 dark:bg-primary/15 blur-[160px] rounded-full" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[140px] rounded-full transition-all duration-1000 opacity-25"
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/90 dark:border-white/15 text-slate-800 dark:text-white text-xs font-extrabold mb-6 backdrop-blur-md shadow-sm uppercase tracking-widest"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span>{t("nav.useCases")}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight drop-shadow-sm"
          >
            {t("useCases.title1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-emerald-400">{t("useCases.title2")}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            {t("useCases.desc")}
          </motion.p>
        </div>

        {/* Reusable Sticky Tab Bar */}
        <SegmentedTabbar
          tabs={cases.map((uc: UseCase, index: number) => {
            const Icon = uc.icon;
            return {
              id: index,
              title: uc.title,
              icon: <Icon size={18} />,
              activeColorClass: uc.color
            };
          })}
          activeTab={activeCase}
          onChange={(id) => setActiveCase(id as number)}
          layoutId="activeUseCaseTab"
        />

        {/* Dynamic Interactive Stage (SaaS Stage Showcase) */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative rounded-[2.5rem] bg-white/95 dark:bg-[#0c1626]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/15 p-6 sm:p-10 md:p-14 shadow-xl dark:shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] overflow-hidden transform-gpu"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                {/* Left Side: Content & Action */}
                <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-start order-2 lg:order-1">
                  
                  {/* KPI Metric Pill */}
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/15 backdrop-blur-md mb-6 shadow-sm">
                    <span className={`text-xl sm:text-2xl font-black ${currentCase.color}`}>
                      {currentCase.metricValue}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300">
                      {currentCase.metricLabel}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                    {currentCase.title}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-medium">
                    {currentCase.desc}
                  </p>

                  {/* Target Roles */}
                  {currentCase.roles && currentCase.roles.length > 0 && (
                    <div className="mb-10 w-full">
                      <p className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                        {t("solutions.rolesTitle") || "المستفيدون من النظام"}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {currentCase.roles.map((role: string, idx: number) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 text-xs font-extrabold text-slate-800 dark:text-slate-200 shadow-sm"
                          >
                            <CheckCircle size={14} className={currentCase.color} />
                            <span>{role}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Link Button to Solutions Page */}
                  <Link
                    href={`/solutions/${currentCase.id}`}
                    className="relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary text-white font-extrabold text-base transition-all duration-300 hover:scale-105 group shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 cursor-pointer"
                  >
                    <span className="relative z-10">{t("solutions.explore") || "اكتشف كافة ميزات الحل"}</span>
                    {isRtl ? (
                      <ArrowLeft size={18} className="relative z-10 transition-transform group-hover:-translate-x-1" />
                    ) : (
                      <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                    )}
                    <motion.div
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0 w-1/2"
                    />
                  </Link>

                </div>

                {/* Right Side: 3D Layered Glass Stage */}
                <div className="lg:col-span-6 relative order-1 lg:order-2 perspective-1000 flex justify-center">
                  <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[16/11] rounded-2xl md:rounded-3xl border border-slate-200 dark:border-white/15 shadow-2xl overflow-hidden group transform-gpu">
                    
                    {/* Live Operational Status Indicator */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/15 text-[11px] font-extrabold text-slate-800 dark:text-white shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>{isRtl ? "نظام موثوق ونشط" : "LIVE SYSTEM"}</span>
                    </div>

                    {/* Mode Icon Badge */}
                    <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/15 flex items-center justify-center shadow-md">
                      <ActiveIcon size={20} className={currentCase.color} />
                    </div>

                    <Image
                      src={currentCase.image}
                      alt={currentCase.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
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