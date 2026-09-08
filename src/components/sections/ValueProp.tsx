"use client";

import { useState, useMemo, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Zap,
  WifiOff,
  Cloud,
  Sliders,
  QrCode,
  TrendingUp,
  ShieldCheck,
  Store,
  ShoppingBag,
  Clock,
  Headphones,
  Lock,
  Monitor,
  Printer,
  type LucideIcon
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import SegmentedTabbar from "@/components/ui/SegmentedTabbar";

interface StepData {
  id: string;
  icon: LucideIcon;
  color: string;
  themeColor: string;
  accentBg: string;
  badgeKey: string;
  stepNum: string;
  titleKey: string;
  descKey: string;
  highlightKey: string;
  engineeringTag: string;
}

const STEP_ORDER = [0, 1, 2];

export default function ValueProp() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const [activeStep, setActiveStep] = useState<number>(0);
  const [mobileView, setMobileView] = useState<"text" | "visual" | "both">("text");
  const [step2ViewMode, setStep2ViewMode] = useState<"pos" | "qr">("pos");

  const stepsData: StepData[] = [
    {
      id: "s1",
      icon: Sliders,
      color: "from-primary to-accent",
      themeColor: "text-primary border-primary/30 bg-primary/10",
      accentBg: "bg-primary",
      badgeKey: "value.steps.s1.badge",
      stepNum: "01",
      titleKey: "value.steps.s1.title",
      descKey: "value.steps.s1.desc",
      highlightKey: "value.steps.s1.highlight",
      engineeringTag: "Zero-Code Menu Builder"
    },
    {
      id: "s2",
      icon: QrCode,
      color: "from-secondary to-teal-400",
      themeColor: "text-secondary border-secondary/30 bg-secondary/10",
      accentBg: "bg-secondary",
      badgeKey: "value.steps.s2.badge",
      stepNum: "02",
      titleKey: "value.steps.s2.title",
      descKey: "value.steps.s2.desc",
      highlightKey: "value.steps.s2.highlight",
      engineeringTag: "Offline-First Engine"
    },
    {
      id: "s3",
      icon: TrendingUp,
      color: "from-emerald-400 to-primary",
      themeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      accentBg: "bg-emerald-500",
      badgeKey: "value.steps.s3.badge",
      stepNum: "03",
      titleKey: "value.steps.s3.title",
      descKey: "value.steps.s3.desc",
      highlightKey: "value.steps.s3.highlight",
      engineeringTag: "Real-Time Cloud Sync"
    }
  ];

  // Build tabs for SegmentedTabbar
  const tabs = useMemo(
    () =>
      stepsData.map((step, idx) => ({
        id: idx,
        title: t(step.badgeKey),
        icon: <step.icon size={18} />,
        activeColorClass: step.color.split(" ")[0].replace("from-", ""), // e.g. "primary"
      })),
    [stepsData, t]
  );

  const scrollToStep = (id: number) => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 1024;
      const trackId = isMobile ? `track-mobile-${id}-text` : `track-desktop-${id}`;
      const el = document.getElementById(trackId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveStep(id);
  };

  const currentStep = stepsData[activeStep] || stepsData[0];
  const ActiveIcon = currentStep.icon;

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 md:py-32 lg:py-36 bg-background relative"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background orbs (unchanged) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-10 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-accent/10 blur-[130px] rounded-full -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header (unchanged) */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-bold mb-4 shadow-sm"
          >
            <Sparkles size={16} />
            <span>{t("value.badge")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6 tracking-tight leading-tight"
          >
            {t("value.title1")} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
              {t("value.title2")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-8"
          >
            {t("value.desc")}
          </motion.p>
        </div>

        {/* ── GALLERY CONTAINER (same structure as Features) ── */}
        <div className="grid grid-cols-1 relative">
          {/* Layer 1: Invisible scroll tracks */}
          <div className="col-start-1 row-start-1 z-0">
            {STEP_ORDER.map((idx) => (
              <Fragment key={idx}>
                {/* Desktop: one track per step (both text & visual) */}
                <div className="hidden lg:block">
                  <Track
                    id={`track-desktop-${idx}`}
                    onActive={() => { setActiveStep(idx); setMobileView("both"); }}
                  />
                </div>

                {/* Mobile: two tracks per step (text → visual) */}
                <div className="block lg:hidden">
                  <Track
                    id={`track-mobile-${idx}-text`}
                    onActive={() => { setActiveStep(idx); setMobileView("text"); }}
                  />
                  <Track
                    id={`track-mobile-${idx}-visual`}
                    onActive={() => { setActiveStep(idx); setMobileView("visual"); }}
                  />
                </div>
              </Fragment>
            ))}
          </div>

          {/* Layer 2: Sticky UI (tab bar + content) */}
          <div className="col-start-1 row-start-1 z-10 pointer-events-none">
            <div className="sticky top-0 h-[100dvh] w-full flex flex-col pointer-events-auto pt-16 lg:pt-20">
              {/* TAB BAR – using SegmentedTabbar */}
              <div className="flex-shrink-0 w-full px-4 pb-4 bg-background/80 backdrop-blur-sm z-20">
                <div className="max-w-2xl mx-auto">
                  <SegmentedTabbar
                    tabs={tabs}
                    activeTab={activeStep}
                    onChange={scrollToStep}
                    layoutId="valuePropTab"
                  />
                </div>
              </div>

              {/* CONTENT – fills remaining height, centered */}
              <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeStep}-${mobileView}`}
                      initial={{ opacity: 0, y: 30, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative rounded-[2.5rem] bg-surface/40 backdrop-blur-3xl border border-white/10 p-6 sm:p-10 md:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.5)] overflow-hidden w-full"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        {/* TEXT SECTION */}
                        <div
                          className={`${
                            mobileView === "visual" ? "hidden lg:flex" : "flex"
                          } lg:col-span-5 flex-col items-center lg:items-start text-center lg:text-start order-2 lg:order-1 w-full`}
                        >
                          <StepText step={currentStep} t={t} />
                        </div>

                        {/* VISUAL SECTION */}
                        <div
                          className={`${
                            mobileView === "text" ? "hidden lg:flex" : "flex"
                          } lg:col-span-7 relative order-1 lg:order-2 perspective-1000 flex justify-center w-full`}
                        >
                          <StepVisual
                            step={currentStep}
                            stepIndex={activeStep}
                            step2ViewMode={step2ViewMode}
                            setStep2ViewMode={setStep2ViewMode}
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

        {/* Trust & Guarantees (unchanged, placed after gallery) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-surface/40 border border-white/10 backdrop-blur-2xl shadow-xl mt-16"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">{t("value.guarantees.setup")}</h4>
              <p className="text-[11px] text-text-secondary">{t("value.guarantees.setupSub")}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-secondary/10 text-secondary border border-secondary/20 flex-shrink-0">
              <WifiOff size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">{t("value.guarantees.offline")}</h4>
              <p className="text-[11px] text-text-secondary">{t("value.guarantees.offlineSub")}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
              <Lock size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">{t("value.guarantees.security")}</h4>
              <p className="text-[11px] text-text-secondary">{t("value.guarantees.securitySub")}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">
              <Headphones size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">{t("value.guarantees.support")}</h4>
              <p className="text-[11px] text-text-secondary">{t("value.guarantees.supportSub")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================
   SUB-COMPONENTS (unchanged, except Track is now shared)
========================================== */

// Scroll track listener – used for both desktop & mobile
function Track({ id, onActive }: { id: string; onActive: () => void }) {
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) onActive();
    },
  });
  return <div id={id} ref={ref} className="h-[100dvh] w-full" aria-hidden="true" />;
}

// Text block (exactly as before)
function StepText({ step, t }: { step: StepData; t: (key: string) => string }) {
  const Icon = step.icon;
  return (
    <div className="flex flex-col relative z-20 w-full max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${step.themeColor} shadow-md shrink-0`}>
          <Icon size={20} className={step.themeColor.split(" ")[0]} />
        </span>
        <h3 className="text-2xl sm:text-4xl font-black leading-tight text-slate-900 dark:text-white">
          {t(step.titleKey)}
        </h3>
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
        {t(step.descKey)}
      </p>
      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 w-fit mb-3">
        <CheckCircle2 size={14} />
        <span>{t(step.highlightKey)}</span>
      </div>
      <div className="text-xs font-mono text-text-secondary/60">
        {step.engineeringTag}
      </div>
    </div>
  );
}

// Visual block (exactly as before, with its internal toggles)
function StepVisual({
  step,
  stepIndex,
  step2ViewMode,
  setStep2ViewMode,
  t,
}: {
  step: StepData;
  stepIndex: number;
  step2ViewMode: "pos" | "qr";
  setStep2ViewMode: (mode: "pos" | "qr") => void;
  t: (key: string) => string;
}) {
  return (
    <div className="relative w-full group perspective-1000">
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-r ${step.color} blur-[90px] rounded-full pointer-events-none opacity-30 -z-10 transition-opacity duration-700 group-hover:opacity-50`} />

      <div className="relative w-full bg-surface/40 backdrop-blur-3xl rounded-3xl border border-white/10 p-4 sm:p-6 shadow-xl min-h-[380px] flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-[10px] text-text-secondary/70 font-mono ml-1">
              step-0{stepIndex + 1}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/30 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            ONLINE
          </span>
        </div>

        <div className="relative flex-1 flex items-center justify-center my-2">
          <AnimatePresence mode="wait">
            {stepIndex === 0 && (
              <motion.div
                key="stage-0"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col gap-3"
              >
                <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-primary/20 text-primary border border-primary/30">
                        <Store size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{t("value.mockup.branchName")}</h4>
                        <p className="text-[10px] text-text-secondary">{t("value.mockup.menuSubtitle")}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-primary/20 text-primary border border-primary/30">
                      {t("value.mockup.autoImport")}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: t("value.mockup.item1"), price: "75 EGP" },
                      { name: t("value.mockup.item2"), price: "45 EGP" },
                      { name: t("value.mockup.item3"), price: "55 EGP" }
                    ].map((item, i) => (
                      <div key={i} className="p-2 bg-surface/60 border border-white/5 rounded-lg flex flex-col">
                        <span className="text-[11px] font-bold text-white">{item.name}</span>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-primary font-extrabold">{item.price}</span>
                          <span className="text-emerald-400 font-medium">{t("value.mockup.available")}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-[11px] font-medium text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    {t("value.mockup.setupSuccess")}
                  </span>
                  <span className="font-mono text-[10px]">0.04s</span>
                </div>
              </motion.div>
            )}

            {stepIndex === 1 && (
              <motion.div
                key="stage-1"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col gap-3"
              >
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <button
                    onClick={() => setStep2ViewMode("pos")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                      step2ViewMode === "pos"
                        ? "bg-secondary text-white shadow-md"
                        : "bg-surface/50 text-text-secondary hover:text-white"
                    }`}
                  >
                    <Monitor size={12} />
                    <span>{t("value.mockup.posToggle")}</span>
                  </button>
                  <button
                    onClick={() => setStep2ViewMode("qr")}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                      step2ViewMode === "qr"
                        ? "bg-primary text-white shadow-md"
                        : "bg-surface/50 text-text-secondary hover:text-white"
                    }`}
                  >
                    <QrCode size={12} />
                    <span>{t("value.mockup.qrToggle")}</span>
                  </button>
                </div>

                {step2ViewMode === "pos" ? (
                  <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-xl flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white flex items-center gap-1">
                        <ShoppingBag size={13} className="text-secondary" />
                        {t("value.mockup.posTitle")}
                      </span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-secondary/20 text-secondary border border-secondary/30">
                        {t("value.mockup.synced")}
                      </span>
                    </div>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex justify-between text-[11px] text-text-secondary">
                        <span>{t("value.mockup.orderSample")}</span>
                        <span className="font-bold text-white">220 EGP</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-text-secondary">
                        <span>{t("value.mockup.kitchenPrinter")}</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <Printer size={11} />
                          {t("value.mockup.printed")}
                        </span>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-medium flex items-center gap-1.5">
                      <WifiOff size={12} className="flex-shrink-0" />
                      <span>{t("value.mockup.offlineEngine")}</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-xl flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white flex items-center gap-1">
                        <QrCode size={13} className="text-primary" />
                        {t("value.mockup.qrTitle")}
                      </span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                        {t("value.mockup.noApp")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-surface/50 p-2 rounded-lg border border-white/5 mb-2">
                      <div className="w-8 h-8 bg-white p-0.5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <QrCode size={24} className="text-black" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">{t("value.mockup.scanOrder")}</p>
                        <p className="text-[10px] text-text-secondary">{t("value.mockup.feedbackSupport")}</p>
                      </div>
                    </div>
                    <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold text-center flex items-center justify-center gap-1.5">
                      <Zap size={12} />
                      <span>{t("value.mockup.fastResponse")}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {stepIndex === 2 && (
              <motion.div
                key="stage-2"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col gap-3"
              >
                <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                        {t("value.mockup.todaySales")}
                      </span>
                      <h3 className="text-lg font-black text-white mt-0.5">
                        14,850 <span className="text-sm font-normal text-primary">EGP</span>
                      </h3>
                    </div>
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <TrendingUp size={18} />
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-16 pt-3 border-t border-white/10">
                    {[40, 65, 80, 55, 90, 100, 75, 85].map((val, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${val}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.05 }}
                          className="w-full bg-gradient-to-t from-primary to-emerald-400 rounded-t-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-card/60 border border-white/10 rounded-lg text-[11px] font-medium text-white">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    {t("value.mockup.shiftAudit")}
                  </span>
                  <span className="text-emerald-400 font-bold">{t("value.mockup.auditMatch")}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-3 gap-1.5 pt-3 border-t border-white/10 mt-3">
          <div className="flex items-center justify-center gap-1 p-1.5 rounded-lg bg-surface/50 border border-white/5 text-[10px] font-bold text-text-secondary">
            <Zap size={12} className="text-primary" />
            <span>Zero Latency</span>
          </div>
          <div className="flex items-center justify-center gap-1 p-1.5 rounded-lg bg-surface/50 border border-white/5 text-[10px] font-bold text-text-secondary">
            <WifiOff size={12} className="text-secondary" />
            <span>Offline First</span>
          </div>
          <div className="flex items-center justify-center gap-1 p-1.5 rounded-lg bg-surface/50 border border-white/5 text-[10px] font-bold text-text-secondary">
            <Cloud size={12} className="text-emerald-400" />
            <span>Cloud Sync</span>
          </div>
        </div>
      </div>
    </div>
  );
}