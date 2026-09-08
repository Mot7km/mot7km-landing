"use client";

import SegmentedTabbar from "@/components/ui/SegmentedTabbar";
import { useState, useMemo, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, Quote, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { getFeaturesTabs, getFeaturesContent, type TabId } from "@/data/features";
import { useInView } from "react-intersection-observer";

const FEATURE_ORDER: TabId[] = ["web", "pos", "mobile", "qr"];

export default function Features() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState<TabId>("web");
  const [mobileView, setMobileView] = useState<"text" | "visual" | "both">("text");

  const tabs = useMemo(() => getFeaturesTabs(t), [t]);
  const contentMap = useMemo(() => getFeaturesContent(t), [t]);

  const scrollToTab = (id: TabId) => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 1024;
      const trackId = isMobile ? `track-mobile-${id}-text` : `track-desktop-${id}`;
      const el = document.getElementById(trackId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveTab(id);
  };

  return (
    <section id="features" className="bg-background relative">
      {/* HEADER – stays above the sticky gallery */}
      <div className="text-center max-w-3xl mx-auto px-4 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/90 dark:border-white/15 text-slate-800 dark:text-white text-xs font-extrabold mb-4 backdrop-blur-md uppercase tracking-widest">
          <Sparkles size={14} className="text-primary animate-pulse" />
          <span>{t("features.badge")}</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight"
        >
          {t("features.title1")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-emerald-400">
            {t("features.title2")}
          </span>
        </motion.h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
          {t("features.desc")}
        </p>
      </div>

      {/* GALLERY CONTAINER – full viewport height, sticky */}
      <div className="grid grid-cols-1 relative">
        {/* Layer 1: Invisible scroll tracks */}
        <div className="col-start-1 row-start-1 z-0">
          {FEATURE_ORDER.map((id) => (
            <Fragment key={id}>
              <div className="hidden lg:block">
                <Track
                  id={`track-desktop-${id}`}
                  onActive={() => { setActiveTab(id); setMobileView("both"); }}
                />
              </div>
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

        {/* Layer 2: Sticky UI – sits below navbar */}
        <div className="col-start-1 row-start-1 z-10 pointer-events-none">
          <div className="sticky top-0 h-[100dvh] w-full flex flex-col pointer-events-auto ">
            {/* TAB BAR */}
            <div className="flex-shrink-0 w-full px-4 pb-2 bg-background/80 backdrop-blur-sm z-20 pt-16 lg:pt-20">
              <div className="max-w-2xl mx-auto">
                <div className="hidden lg:block">
                  <SegmentedTabbar
                    tabs={tabs.map(t => ({ ...t, title: t.titleDesktop }))}
                    activeTab={activeTab}
                    onChange={scrollToTab}
                    layoutId="desktopFeatureTab"
                    sticky={false}
                  />
                </div>
                <div className="block lg:hidden">
                  <SegmentedTabbar
                    tabs={tabs.map(t => ({ ...t, title: t.titleMobile }))}
                    activeTab={activeTab}
                    onChange={scrollToTab}
                    layoutId="mobileFeatureTab"
                    sticky={false}
                  />
                </div>
              </div>
            </div>

            {/* CONTENT – fills remaining height, centered, with overflow hidden */}
            <div className="flex-1 w-full flex items-center justify-center overflow-hidden -mt-8">
              <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 flex-1 flex flex-col justify-center max-h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${mobileView}`}
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-h-full overflow-hidden"
                  >
                    {/* Text Section */}
                    <div className={`${mobileView === 'visual' ? 'hidden lg:flex' : 'flex'} w-full max-h-full overflow-y-auto`}>
                      <div className="w-full max-w-lg mx-auto py-2">
                        <FeatureText
                          content={contentMap[activeTab]}
                          icon={tabs.find(t => t.id === activeTab)?.icon}
                          activeTab={activeTab}
                          t={t}
                        />
                      </div>
                    </div>

                    {/* Visual Section */}
                    <div className={`${mobileView === 'text' ? 'hidden lg:flex' : 'flex'} w-full justify-center max-h-full`}>
                      <FeatureVisual content={contentMap[activeTab]} />
                    </div>
                  </motion.div>
                </AnimatePresence>
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

function Track({ id, onActive }: { id: string; onActive: () => void }) {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => { if (inView) onActive(); }
  });
  return <div id={id} ref={ref} className="h-[100dvh] w-full" aria-hidden="true" />;
}

function FeatureText({ content, icon, activeTab, t }: any) {
  return (
    <div className="flex flex-col relative z-20 w-full">
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 shadow-md shrink-0 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
          {icon}
        </span>
        <h3 className="text-2xl sm:text-3xl font-black leading-tight text-slate-900 dark:text-white">
          {content.title}
        </h3>
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-medium">
        {content.desc}
      </p>
      <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-7">
        {content.bullets.map((bullet: string, idx: number) => (
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + idx * 0.05 }}
            key={idx}
            className="flex items-start sm:items-center gap-3 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-emerald-500/10 text-emerald-600 shrink-0 mt-0.5 sm:mt-0">
              <CheckCircle2 size={14} className="sm:w-4 sm:h-4 w-3.5 h-3.5" />
            </div>
            <span>{bullet}</span>
          </motion.li>
        ))}
      </ul>
      <Link
        href={`/features/${activeTab}`}
        className="relative overflow-hidden inline-flex items-center w-fit gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary text-white font-extrabold text-sm sm:text-base transition-all hover:scale-105 shadow-md group cursor-pointer"
      >
        <span className="relative z-10">{t("features.learnMore")}</span>
        <ArrowRight size={16} className="relative z-10 rtl:rotate-180 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

function FeatureVisual({ content }: any) {
  return (
    <div className="pt-4 relative w-full flex flex-col items-center justify-center max-w-2xl mx-auto group perspective-1000">
      {/* Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 ${content.glowColor} blur-[70px] lg:blur-[90px] rounded-full pointer-events-none opacity-30 -z-10 transition-opacity duration-700 group-hover:opacity-50`} />

      <img
        src={content.image}
        alt={content.title}
        loading="lazy"
        className="w-auto max-w-full max-h-[35vh] sm:max-h-[40vh] lg:max-h-[50vh] object-contain rounded-2xl lg:rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-transform duration-700 hover:scale-[1.02] hover:shadow-primary/20"
      />

      {/* Review Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative z-30 w-[95%] sm:w-[90%] lg:w-[80%] max-w-sm -mt-4 sm:-mt-6 lg:-mt-8 bg-white/95 dark:bg-[#0c1626]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/15 rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl shrink-0"
      >
        <Quote className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-primary opacity-80 mb-1 lg:mb-2" />
        <p className="text-slate-800 dark:text-slate-100 text-xs sm:text-sm leading-relaxed mb-2 lg:mb-3 italic font-semibold line-clamp-3 sm:line-clamp-2 lg:line-clamp-none">
          {content.review}
        </p>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xs sm:text-sm shrink-0">
            {content.reviewer.charAt(0)}
          </div>
          <span className="text-slate-900 dark:text-white text-xs sm:text-sm font-extrabold truncate">
            {content.reviewer}
          </span>
        </div>
      </motion.div>
    </div>
  );
}