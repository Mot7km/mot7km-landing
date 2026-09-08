"use client";

import { useState, useMemo, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { getUseCases, type UseCase } from "@/data/useCases";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle } from "lucide-react";
import SegmentedTabbar from "@/components/ui/SegmentedTabbar";
import { useInView } from "react-intersection-observer";

// Use case IDs (indices)
const USE_CASE_ORDER = [0, 1, 2, 3]; // adjust to match your data length

export default function UseCases() {
  const { t, i18n } = useTranslation();
  const cases = getUseCases(t);
  const isRtl = i18n.language === "ar";

  // Unified state for active tab and mobile view step
  const [activeTab, setActiveTab] = useState(0);
  const [mobileView, setMobileView] = useState<"text" | "visual" | "both">("text");

  const tabs = useMemo(
    () =>
      cases.map((uc: UseCase, index: number) => {
        const Icon = uc.icon;
        return {
          id: index,
          title: uc.title,          // same for desktop & mobile
          icon: <Icon size={18} />,
          activeColorClass: uc.color,
        };
      }),
    [cases]
  );

  // Unified scroll handler for tabs
  const scrollToTab = (id: number) => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 1024;
      const trackId = isMobile ? `track-mobile-${id}-text` : `track-desktop-${id}`;
      const el = document.getElementById(trackId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveTab(id);
  };

  const currentCase = cases[activeTab] || cases[0];
  const ActiveIcon = currentCase.icon;

  return (
    <section id="use-cases" className="relative py-20 sm:py-28 md:py-36 bg-background">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 dark:bg-primary/15 blur-[160px] rounded-full" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[140px] rounded-full transition-all duration-1000 opacity-25"
          style={{ background: currentCase.glowColor }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
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
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            {t("useCases.desc")}
          </motion.p>
        </div>

        {/* GALLERY CONTAINER – same structure as Features */}
        <div className="grid grid-cols-1 relative">
          {/* Layer 1: Invisible scroll tracks */}
          <div className="col-start-1 row-start-1 z-0">
            {USE_CASE_ORDER.map((id) => (
              <Fragment key={id}>
                {/* Desktop: one track per use case (both text & visual) */}
                <div className="hidden lg:block">
                  <Track
                    id={`track-desktop-${id}`}
                    onActive={() => { setActiveTab(id); setMobileView("both"); }}
                  />
                </div>

                {/* Mobile: two tracks per use case (text → visual) */}
                <div className="block lg:hidden">
                  <Track
                    id={`track-mobile-${id}-text`}
                    onActive={() => { setActiveTab(id); setMobileView("text"); }}
                  />
                  <Track
                    id={`track-mobile-${id}-visual`}
                    onActive={() => { setActiveTab(id); setMobileView("visual"); }}
                  />
                </div>
              </Fragment>
            ))}
          </div>

          {/* Layer 2: Sticky UI (tab bar + content) */}
          <div className="col-start-1 row-start-1 z-10 pointer-events-none">
            <div className="sticky top-0 h-[100dvh] w-full flex flex-col pointer-events-auto pt-16 lg:pt-20">
              {/* TAB BAR – always at the top, using SegmentedTabbar */}
              <div className="flex-shrink-0 w-full px-4 pb-4 bg-background/80 backdrop-blur-sm z-20">
                <div className="max-w-2xl mx-auto">
                  <SegmentedTabbar
                    tabs={tabs}
                    activeTab={activeTab}
                    onChange={scrollToTab}
                    layoutId="useCaseTab"
                  />
                </div>
              </div>

              {/* CONTENT – fills remaining height, centered */}
              <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeTab}-${mobileView}`}
                      initial={{ opacity: 0, y: 30, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative rounded-[2.5rem] bg-white/95 dark:bg-[#0c1626]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/15 p-6 sm:p-10 md:p-14 shadow-xl dark:shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] overflow-hidden transform-gpu w-full"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* TEXT SECTION */}
                        <div
                          className={`${
                            mobileView === "visual" ? "hidden lg:flex" : "flex"
                          } lg:col-span-6 flex-col items-center lg:items-start text-center lg:text-start order-2 lg:order-1 w-full`}
                        >
                          <UseCaseText
                            useCase={currentCase}
                            ActiveIcon={ActiveIcon}
                            isRtl={isRtl}
                            t={t}
                            id={activeTab}
                          />
                        </div>

                        {/* VISUAL SECTION */}
                        <div
                          className={`${
                            mobileView === "text" ? "hidden lg:flex" : "flex"
                          } lg:col-span-6 relative order-1 lg:order-2 perspective-1000 flex justify-center w-full`}
                        >
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
    </section>
  );
}

/* ==========================================
   SUB-COMPONENTS (unchanged)
========================================== */

// Scroll track listener with active callback
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

// Text block component
function UseCaseText({ useCase, ActiveIcon, isRtl, t, id }: any) {
  return (
    <div className="flex flex-col relative z-20 w-full max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 shadow-md shrink-0">
          <ActiveIcon size={20} className={useCase.color} />
        </span>
        <h3 className="text-2xl sm:text-4xl font-black leading-tight text-slate-900 dark:text-white">
          {useCase.title}
        </h3>
      </div>

      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg leading-relaxed mb-5 sm:mb-8 font-medium">
        {useCase.desc}
      </p>

      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/15 backdrop-blur-md mb-5 shadow-sm w-fit">
        <span className={`text-xl sm:text-2xl font-black ${useCase.color}`}>
          {useCase.metricValue}
        </span>
        <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300">
          {useCase.metricLabel}
        </span>
      </div>

      {useCase.roles && useCase.roles.length > 0 && (
        <div className="mb-6 w-full">
          <p className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
            {t("solutions.rolesTitle") || "المستفيدون من النظام"}
          </p>
          <div className="flex flex-wrap gap-2">
            {useCase.roles.map((role: string, idx: number) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 text-xs font-extrabold text-slate-800 dark:text-slate-200 shadow-sm"
              >
                <CheckCircle size={14} className={useCase.color} />
                <span>{role}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      <Link
        href={`/solutions/${id}`}
        className="relative overflow-hidden inline-flex items-center w-fit gap-2 px-5 py-2.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary text-white font-extrabold text-sm sm:text-base transition-all hover:scale-105 shadow-md group cursor-pointer"
      >
        <span className="relative z-10">{t("solutions.explore") || "اكتشف كافة ميزات الحل"}</span>
        {isRtl ? (
          <ArrowLeft size={16} className="relative z-10 rtl:rotate-180 transition-transform group-hover:-translate-x-1" />
        ) : (
          <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
        )}
      </Link>
    </div>
  );
}

// Visual block component
function UseCaseVisual({ useCase, ActiveIcon, t }: any) {
  return (
    <div className="relative w-full flex flex-col items-center justify-center max-w-2xl mx-auto group perspective-1000 mt-2 lg:mt-0">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 ${useCase.glowColor} blur-[70px] lg:blur-[90px] rounded-full pointer-events-none opacity-30 -z-10 transition-opacity duration-700 group-hover:opacity-50`}
      />

      <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[16/11] rounded-2xl md:rounded-3xl border border-slate-200 dark:border-white/15 shadow-2xl overflow-hidden group transform-gpu">
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/15 text-[11px] font-extrabold text-slate-800 dark:text-white shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{t("solutions.liveBadge") || "نظام موثوق ونشط"}</span>
        </div>

        <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/15 flex items-center justify-center shadow-md">
          <ActiveIcon size={20} className={useCase.color} />
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