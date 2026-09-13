"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { getUseCases, type UseCase } from "@/data/useCases";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Use case IDs (indices)
const USE_CASE_ORDER = [0, 1, 2, 3];

export default function UseCases() {
  const { t, i18n } = useTranslation();
  const cases = getUseCases(t);
  const isRtl = i18n.language === "ar";

  const [activeTab, setActiveTab] = useState(0);

  const tabs = useMemo(
    () =>
      cases.map((uc: UseCase, index: number) => {
        const Icon = uc.icon;
        return {
          id: index,
          title: uc.title,
          subtitle: uc.metricLabel || uc.desc,
          icon: <Icon size={18} />,
          activeColorClass: uc.color,
        };
      }),
    [cases]
  );

  const scrollToTab = (id: number) => {
    if (typeof window !== "undefined") {
      const el = document.getElementById(`track-${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveTab(id);
  };

  const currentCase = cases[activeTab] || cases[0];
  const ActiveIcon = currentCase.icon;

  return (
    <section id="use-cases" className="relative bg-background">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 dark:bg-primary/15 blur-[160px] rounded-full" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[140px] rounded-full transition-all duration-1000 opacity-25"
          style={{ background: currentCase.glowColor }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-16 sm:pt-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/90 dark:border-white/15 text-slate-800 dark:text-white text-xs font-extrabold mb-4 backdrop-blur-md shadow-sm uppercase tracking-widest"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span>{t("nav.useCases")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4 leading-tight drop-shadow-sm"
          >
            {t("useCases.title1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-emerald-400">
              {t("useCases.title2")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            {t("useCases.desc")}
          </motion.p>
        </div>

        {/* GALLERY CONTAINER */}
        <div className="grid grid-cols-1 relative">
          {/* Layer 1: Invisible scroll tracks for gallery snap effect */}
          <div className="col-start-1 row-start-1 z-0">
            {USE_CASE_ORDER.map((id) => (
              <Track
                key={id}
                id={`track-${id}`}
                onActive={() => setActiveTab(id)}
              />
            ))}
          </div>

          {/* Layer 2: Sticky UI */}
          <div className="col-start-1 row-start-1 z-10 pointer-events-none">
            <div className="sticky top-0 h-[100dvh] w-full flex flex-col pointer-events-auto">
              {/* MOBILE COMPACT TAB BAR (< lg) */}
              <div className="lg:hidden shrink-0 w-full px-2 pt-3 pb-2 bg-background/80 backdrop-blur-md z-20">
                <div className="flex items-center justify-center gap-1.5 max-w-md mx-auto">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={String(tab.id)}
                        onClick={() => scrollToTab(tab.id)}
                        className={`relative flex items-center transition-all duration-300 rounded-full cursor-pointer ${
                          isActive
                            ? "px-3 py-1.5 bg-gradient-to-r from-primary to-accent text-white shadow-md shadow-primary/30 gap-1.5"
                            : "p-2 bg-white/90 dark:bg-[#0c1626]/90 text-slate-600 dark:text-slate-300 border border-slate-200/90 dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/5"
                        }`}
                      >
                        <span className="shrink-0">{tab.icon}</span>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            className="text-[11px] font-black truncate max-w-[100px]"
                          >
                            {tab.title}
                          </motion.span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CONTENT AREA — vertically centered, natural height */}
              <div className="flex-1 min-h-0 overflow-y-auto lg:overflow-hidden px-4 sm:px-6 py-3 lg:py-6 flex flex-col">
                <div className="w-full max-w-7xl mx-auto my-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                    {/* DESKTOP SIDEBAR TIMELINE */}
                    <div className="hidden lg:flex lg:col-span-4 flex-col relative p-6 rounded-[2rem] bg-white/80 dark:bg-[#0c1626]/80 backdrop-blur-3xl border border-slate-200/90 dark:border-white/15 shadow-xl">
                      {/* Progress line — aligned to icon centers (p-6 = 24px, button p-4 = 16px, icon 44px → center at 62px) */}
                      <div className="absolute top-[62px] bottom-[62px] left-[61px] w-0.5 bg-slate-200 dark:bg-white/10 rounded-full">
                        <motion.div
                          className="w-full bg-gradient-to-b from-primary via-accent to-emerald-400 rounded-full"
                          initial={false}
                          animate={{
                            height: `${(activeTab / Math.max(tabs.length - 1, 1)) * 100}%`,
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      </div>

                      <div className="space-y-3 relative z-10">
                        {tabs.map((tab, idx) => {
                          const isActive = activeTab === tab.id;
                          const isCompleted = activeTab > idx;

                          return (
                            <button
                              key={String(tab.id)}
                              onClick={() => scrollToTab(tab.id)}
                              className={`group w-full text-start flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                                isActive
                                  ? "bg-gradient-to-r from-primary/15 to-accent/10 dark:from-primary/25 dark:to-accent/15 border border-primary/30 shadow-lg shadow-primary/10"
                                  : "hover:bg-slate-100/80 dark:hover:bg-white/5 border border-transparent"
                              }`}
                            >
                              <div
                                className={`relative flex items-center justify-center w-11 h-11 rounded-xl font-black text-sm shrink-0 transition-all shadow-md ${
                                  isActive
                                    ? "bg-gradient-to-tr from-primary to-accent text-white scale-110 shadow-primary/40 ring-4 ring-primary/20"
                                    : isCompleted
                                    ? "bg-primary/20 text-primary border border-primary/40"
                                    : "bg-slate-100 dark:bg-white/5 text-slate-400 border border-slate-200 dark:border-white/10"
                                }`}
                              >
                                {tab.icon}
                              </div>

                              <div className="flex flex-col flex-1 min-w-0">
                                <span
                                  className={`text-[10px] font-extrabold uppercase tracking-widest mb-0.5 ${
                                    isActive
                                      ? "text-primary dark:text-accent"
                                      : "text-slate-400 dark:text-slate-500"
                                  }`}
                                >
                                  Phase 0{idx + 1}
                                </span>
                                <span
                                  className={`text-sm font-black truncate transition-colors ${
                                    isActive
                                      ? "text-slate-900 dark:text-white"
                                      : "text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                                  }`}
                                >
                                  {tab.title}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* MAIN FEATURE CARD — sizes to content, no forced stretch */}
                    <div className="lg:col-span-8">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, y: 20, scale: 0.99 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.99 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="relative rounded-2xl sm:rounded-[2rem] bg-white/95 dark:bg-[#0c1626]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/15 p-5 sm:p-7 lg:p-8 shadow-xl dark:shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)]"
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                            {/* TEXT */}
                            <div className="lg:col-span-6 order-2 lg:order-1 w-full">
                              <UseCaseText
                                useCase={currentCase}
                                ActiveIcon={ActiveIcon}
                                isRtl={isRtl}
                                t={t}
                                id={activeTab}
                              />
                            </div>

                            {/* VISUAL */}
                            <div className="lg:col-span-6 order-1 lg:order-2 w-full">
                              <UseCaseVisual
                                useCase={currentCase}
                                ActiveIcon={ActiveIcon}
                                t={t}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
    SUB-COMPONENTS
========================================== */

function Track({
  id,
  onActive,
}: {
  id: string;
  onActive: () => void;
}) {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) onActive();
    },
  });
  return <div id={id} ref={ref} className="h-[100dvh] w-full" aria-hidden="true" />;
}

function UseCaseText({ useCase, ActiveIcon, isRtl, t, id }: any) {
  return (
    <div className="flex flex-col relative z-20 w-full max-w-lg mx-auto">
      <div className="flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-3 sm:mb-4">
        <span className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 shadow-md shrink-0">
          <ActiveIcon size={18} className={useCase.color} />
        </span>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight text-slate-900 dark:text-white">
          {useCase.title}
        </h3>
      </div>

      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-5 font-medium">
        {useCase.desc}
      </p>

      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/15 backdrop-blur-md mb-3 sm:mb-4 shadow-sm mx-auto lg:mx-0 w-fit">
        <span className={`text-base sm:text-lg lg:text-xl font-black ${useCase.color}`}>
          {useCase.metricValue}
        </span>
        <span className="text-[11px] sm:text-xs lg:text-sm font-bold text-slate-600 dark:text-slate-300">
          {useCase.metricLabel}
        </span>
      </div>

      {useCase.roles && useCase.roles.length > 0 && (
        <div className="mb-4 w-full">
          <p className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            {t("solutions.rolesTitle") || "المستفيدون من النظام"}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
            {useCase.roles.map((role: string, idx: number) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 text-[11px] sm:text-xs font-extrabold text-slate-800 dark:text-slate-200 shadow-sm"
              >
                <CheckCircle size={12} className={useCase.color} />
                <span>{role}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      <Link
        href={`/solutions/${id}`}
        className="relative overflow-hidden inline-flex items-center mx-auto lg:mx-0 w-fit gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary text-white font-extrabold text-xs sm:text-sm transition-all hover:scale-105 shadow-md group cursor-pointer"
      >
        <span className="relative z-10">
          {t("solutions.explore") || "اكتشف كافة ميزات الحل"}
        </span>
        {isRtl ? (
          <ArrowLeft
            size={16}
            className="relative z-10 rtl:rotate-180 transition-transform group-hover:-translate-x-1"
          />
        ) : (
          <ArrowRight
            size={16}
            className="relative z-10 transition-transform group-hover:translate-x-1"
          />
        )}
      </Link>
    </div>
  );
}

function UseCaseVisual({ useCase, ActiveIcon, t }: any) {
  return (
    <div className="relative w-full flex flex-col items-center justify-center max-w-lg mx-auto group perspective-1000">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 ${useCase.glowColor} blur-[60px] lg:blur-[80px] rounded-full pointer-events-none opacity-30 -z-10 transition-opacity duration-700 group-hover:opacity-50`}
      />

      <div className="relative w-full aspect-[16/10] max-h-[220px] sm:max-h-[300px] lg:max-h-[380px] rounded-2xl md:rounded-3xl border border-slate-200 dark:border-white/15 shadow-2xl overflow-hidden group transform-gpu">
        <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/15 text-[11px] font-extrabold text-slate-800 dark:text-white shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{t("solutions.liveBadge") || "نظام موثوق ونشط"}</span>
        </div>

        <div className="absolute top-3 right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/15 flex items-center justify-center shadow-md">
          <ActiveIcon size={16} className={useCase.color} />
        </div>

        <Image
          src={useCase.image}
          alt={useCase.title}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>
    </div>
  );
}