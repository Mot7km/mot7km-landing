"use client";

import { useState, useEffect } from "react";
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
  Smartphone,
  Briefcase,
  Monitor,
  Printer
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ValueProp() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  
  const [activePersona, setActivePersona] = useState<string>("owner");
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [step2ViewMode, setStep2ViewMode] = useState<"pos" | "qr">("pos");

  // Auto-advance stepper every 6 seconds if not paused
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const personas = [
    { id: "owner", labelKey: "value.personas.owner", icon: Briefcase },
    { id: "cashier", labelKey: "value.personas.cashier", icon: Monitor },
    { id: "manager", labelKey: "value.personas.manager", icon: Smartphone },
    { id: "customer", labelKey: "value.personas.customer", icon: QrCode }
  ];

  const stepsData = [
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

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 md:py-32 lg:py-36 bg-background relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/10 blur-[140px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-10 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-accent/10 blur-[130px] rounded-full pointer-events-none -translate-x-1/3" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
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

          {/* Persona Switcher Segmented Pills (Clean SVG Icons, no Emojis) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl sm:rounded-full bg-surface/80 border border-white/10 backdrop-blur-2xl shadow-xl gap-1 max-w-full"
          >
            {personas.map((p) => {
              const Icon = p.icon;
              const isSelected = activePersona === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setActivePersona(p.id);
                    // Match step view for persona
                    if (p.id === "owner") setActiveStep(0);
                    else if (p.id === "cashier") setActiveStep(1);
                    else if (p.id === "customer") setActiveStep(1);
                    else if (p.id === "manager") setActiveStep(2);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                      : "text-text-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  <span>{t(p.labelKey)}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Main 2-Column Grid */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 md:mb-24"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          {/* Left Column: Interactive Stepper */}
          <div className="lg:col-span-5 flex flex-col gap-6 relative">
            
            {/* Connected Vertical Timeline Line (Desktop) */}
            <div className="hidden lg:block absolute left-8 rtl:left-auto rtl:right-8 top-12 bottom-12 w-0.5 bg-white/10 -z-0">
              <motion.div
                className="w-full bg-gradient-to-b from-primary via-accent to-emerald-400"
                animate={{ 
                  height: activeStep === 0 ? "33%" : activeStep === 1 ? "66%" : "100%" 
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            {stepsData.map((step, idx) => {
              const isActive = activeStep === idx;
              const StepIcon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveStep(idx)}
                  className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-500 border ${
                    isActive
                      ? "bg-surface/90 backdrop-blur-2xl border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.4)] scale-[1.02]"
                      : "bg-surface/30 backdrop-blur-md border-white/5 hover:border-white/10 hover:bg-surface/50 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    
                    {/* Step Number & Icon Circle */}
                    <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl font-black text-base flex-shrink-0 transition-transform duration-500 ${
                      isActive 
                        ? `${step.accentBg} text-white shadow-lg scale-110` 
                        : "bg-surface/80 border border-white/10 text-text-secondary"
                    }`}>
                      {isActive ? <StepIcon size={22} /> : step.stepNum}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${step.themeColor}`}>
                          {t(step.badgeKey)}
                        </span>
                        <span className="text-xs font-mono text-text-secondary/60">
                          {step.engineeringTag}
                        </span>
                      </div>

                      <h3 className={`text-base sm:text-lg font-bold mb-2 transition-colors ${
                        isActive ? "text-white" : "text-text-primary"
                      }`}>
                        {t(step.titleKey)}
                      </h3>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                        {t(step.descKey)}
                      </p>

                      {/* Highlight Tag */}
                      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                        <CheckCircle2 size={13} />
                        <span>{t(step.highlightKey)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Progress Bar for step */}
                  {isActive && (
                    <motion.div
                      layoutId="stepActiveIndicator"
                      className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic 3D Visual Stage */}
          <div className="lg:col-span-7 relative perspective-[1200px]">
            
            {/* Outer Glass Stage Container */}
            <div className="relative w-full bg-surface/40 backdrop-blur-3xl rounded-3xl sm:rounded-[2.5rem] border border-white/10 p-6 sm:p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.5)] overflow-hidden min-h-[460px] flex flex-col justify-between">
              
              {/* Top Bar of Mockup */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-text-secondary/70 font-mono ml-2 rtl:mr-2">
                    mot7km-engine // step-0{activeStep + 1}.preview
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    SYSTEM ONLINE
                  </span>
                </div>
              </div>

              {/* Animated Stage Display based on activeStep */}
              <div className="relative flex-1 flex items-center justify-center my-4">
                <AnimatePresence mode="wait">
                  
                  {/* STEP 0: Menu Builder & Onboarding Mockup */}
                  {activeStep === 0 && (
                    <motion.div
                      key="stage-0"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col gap-4"
                    >
                      <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-primary/20 text-primary border border-primary/30">
                              <Store size={20} />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-white">{t("value.mockup.branchName")}</h4>
                              <p className="text-xs text-text-secondary">{t("value.mockup.menuSubtitle")}</p>
                            </div>
                          </div>
                          <span className="text-xs font-bold px-3 py-1 rounded-lg bg-primary/20 text-primary border border-primary/30">
                            {t("value.mockup.autoImport")}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {[
                            { name: t("value.mockup.item1"), price: "75 EGP" },
                            { name: t("value.mockup.item2"), price: "45 EGP" },
                            { name: t("value.mockup.item3"), price: "55 EGP" }
                          ].map((item, i) => (
                            <div key={i} className="p-3 bg-surface/60 border border-white/5 rounded-xl flex flex-col justify-between hover:border-primary/40 transition-colors">
                              <span className="text-xs font-bold text-white mb-1">{item.name}</span>
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="text-primary font-extrabold">{item.price}</span>
                                <span className="text-emerald-400 font-medium">{t("value.mockup.available")}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs font-medium text-emerald-400">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 size={16} />
                          {t("value.mockup.setupSuccess")}
                        </span>
                        <span className="font-mono text-[11px]">0.04s</span>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 1: Offline POS & Smart QR Menu */}
                  {activeStep === 1 && (
                    <motion.div
                      key="stage-1"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col gap-4"
                    >
                      {/* Interactive View Switcher (SVG Icons) */}
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <button
                          onClick={() => setStep2ViewMode("pos")}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            step2ViewMode === "pos"
                              ? "bg-secondary text-white shadow-md"
                              : "bg-surface/50 text-text-secondary hover:text-white"
                          }`}
                        >
                          <Monitor size={14} />
                          <span>{t("value.mockup.posToggle")}</span>
                        </button>
                        <button
                          onClick={() => setStep2ViewMode("qr")}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            step2ViewMode === "qr"
                              ? "bg-primary text-white shadow-md"
                              : "bg-surface/50 text-text-secondary hover:text-white"
                          }`}
                        >
                          <QrCode size={14} />
                          <span>{t("value.mockup.qrToggle")}</span>
                        </button>
                      </div>

                      {step2ViewMode === "pos" ? (
                        /* POS View */
                        <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col justify-between">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-white flex items-center gap-1.5">
                              <ShoppingBag size={15} className="text-secondary" />
                              {t("value.mockup.posTitle")}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-secondary/20 text-secondary border border-secondary/30">
                              {t("value.mockup.synced")}
                            </span>
                          </div>

                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-xs text-text-secondary">
                              <span>{t("value.mockup.orderSample")}</span>
                              <span className="font-bold text-white">220 EGP</span>
                            </div>
                            <div className="flex justify-between text-xs text-text-secondary">
                              <span>{t("value.mockup.kitchenPrinter")}</span>
                              <span className="text-emerald-400 font-bold flex items-center gap-1">
                                <Printer size={13} />
                                {t("value.mockup.printed")}
                              </span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium flex items-center gap-2">
                            <WifiOff size={14} className="flex-shrink-0" />
                            <span>{t("value.mockup.offlineEngine")}</span>
                          </div>
                        </div>
                      ) : (
                        /* QR Menu View */
                        <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col justify-between">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-white flex items-center gap-1.5">
                              <QrCode size={15} className="text-primary" />
                              {t("value.mockup.qrTitle")}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                              {t("value.mockup.noApp")}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 bg-surface/50 p-3 rounded-xl border border-white/5 mb-3">
                            <div className="w-10 h-10 bg-white p-1 rounded-lg flex items-center justify-center flex-shrink-0">
                              <QrCode size={32} className="text-black" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white">{t("value.mockup.scanOrder")}</p>
                              <p className="text-[11px] text-text-secondary">{t("value.mockup.feedbackSupport")}</p>
                            </div>
                          </div>

                          <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold text-center flex items-center justify-center gap-1.5">
                            <Zap size={13} />
                            <span>{t("value.mockup.fastResponse")}</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* STEP 2: Live Cloud Intelligence */}
                  {activeStep === 2 && (
                    <motion.div
                      key="stage-2"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col gap-4"
                    >
                      <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                              {t("value.mockup.todaySales")}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                              14,850 <span className="text-sm font-normal text-primary">EGP</span>
                            </h3>
                          </div>
                          <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            <TrendingUp size={24} />
                          </div>
                        </div>

                        {/* Simulated Revenue Bar Chart */}
                        <div className="flex items-end gap-2 h-24 pt-4 border-t border-white/10">
                          {[40, 65, 80, 55, 90, 100, 75, 85].map((val, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                              <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: `${val}%` }}
                                transition={{ duration: 0.6, delay: i * 0.05 }}
                                className="w-full bg-gradient-to-t from-primary to-emerald-400 rounded-t-sm"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3.5 bg-card/60 border border-white/10 rounded-xl text-xs font-medium text-white">
                        <span className="flex items-center gap-2">
                          <ShieldCheck size={16} className="text-emerald-400" />
                          {t("value.mockup.shiftAudit")}
                        </span>
                        <span className="text-emerald-400 font-bold">{t("value.mockup.auditMatch")}</span>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Bottom Engineering Badges */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 mt-4">
                <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-surface/50 border border-white/5 text-[11px] font-bold text-text-secondary">
                  <Zap size={14} className="text-primary" />
                  <span>Zero Latency</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-surface/50 border border-white/5 text-[11px] font-bold text-text-secondary">
                  <WifiOff size={14} className="text-secondary" />
                  <span>Offline First</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-surface/50 border border-white/5 text-[11px] font-bold text-text-secondary">
                  <Cloud size={14} className="text-emerald-400" />
                  <span>Cloud Sync</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Trust & Capability Guarantees Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-surface/40 border border-white/10 backdrop-blur-2xl shadow-xl"
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