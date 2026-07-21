"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ArrowRight, 
  MonitorPlay, 
  Smartphone, 
  Store, 
  QrCode, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  TrendingUp,
  CheckCircle2,
  Play,
  WifiOff,
  ShoppingBag,
  BarChart3
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMouseParallax } from "@/hooks/useMouseParallax";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const [activeTab, setActiveTab] = useState<"dashboard" | "pos" | "qr" | "offline">("dashboard");

  const {
    handleMouseMove,
    dashboardX,
    dashboardY,
    posX,
    posY,
    mobileX,
    mobileY,
  } = useMouseParallax();

  // Interactive Product Switcher Data
  const productShowcases = {
    dashboard: {
      title: isRTL ? "لوحة التحكم السحابية 360°" : "360° Cloud Dashboard",
      desc: isRTL ? "متابعة المبيعات فورياً، الأرباح، ونسبة استهلاك المخزون لحظة بلحظة" : "Real-time sales, profits, and inventory tracking in one screen",
      image: "/mockups/web_dashboard.png",
      tag: isRTL ? "تحليلات حية" : "Live Analytics",
      metric: "+34%",
      metricLabel: isRTL ? "نمو المبيعات" : "Sales Growth",
      color: "text-primary bg-primary/10 border-primary/20"
    },
    pos: {
      title: isRTL ? "نظام كاشير POS السريع" : "Ultra-Fast POS Terminal",
      desc: isRTL ? "تسجيل الطلبات وإصدار الفواتير الحرارية في أقل من 0.8 ثانية" : "Record orders & print thermal receipts in under 0.8 seconds",
      image: "/mockups/pos_terminal.png",
      tag: isRTL ? "طباعة فورية" : "Instant Print",
      metric: "< 0.8s",
      metricLabel: isRTL ? "زمن الفاتورة" : "Checkout Speed",
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
    },
    qr: {
      title: isRTL ? "منيو QR التفاعلي بدون تطبيق" : "App-less Interactive QR Menu",
      titleIcon: QrCode,
      desc: isRTL ? "طلب مباشر ودفع إلكتروني سريعين من طاولة العميل فورياً" : "Direct table ordering & online pay without downloading apps",
      image: "/assets/mockups/mobile_app_mockup.png",
      tag: isRTL ? "طلب الطاولة" : "QR Table Order",
      metric: "0%",
      metricLabel: isRTL ? "عمولات وسطاء" : "Third-Party Fees",
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    },
    offline: {
      title: isRTL ? "تقنية Offline-First 100%" : "100% Offline-First POS Engine",
      desc: isRTL ? "استمرار تسجيل الطلبات والطباعة حتى في حالة انقطاع الإنترنت التام" : "Uninterrupted POS checkout even during total internet outage",
      image: "/mockups/pos_terminal.png",
      tag: isRTL ? "دون انقطاع" : "Zero Outage",
      metric: "100%",
      metricLabel: isRTL ? "استمرارية العمل" : "Uptime Guarantee",
      color: "text-accent bg-accent/10 border-accent/20"
    }
  };

  const currentShowcase = productShowcases[activeTab];

  return (
    <section
      id="product"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Light & Dark Adaptive Lighting Ambient Halo Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-primary/10 dark:bg-primary/20 blur-[140px] rounded-[100%] pointer-events-none -z-10" />
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 dark:bg-indigo-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-[-10%] w-[600px] h-[600px] bg-accent/10 dark:bg-accent/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Responsive Grid Backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10" 
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mb-12 lg:mb-20">
          
          {/* Left Hero Content Block */}
          <div className="flex-1 text-center lg:text-start z-20">
            
            {/* Upgrade Senior UI/UX Glowing Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100/90 dark:bg-white/[0.06] backdrop-blur-md shadow-sm border border-slate-200/90 dark:border-white/15 mb-6 hover:border-primary/50 transition-all cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white flex items-center gap-1.5">
                <Sparkles size={14} className="text-primary animate-pulse" />
                <span>{isRTL ? "إصدار 2026: المحرك السحابي الأسرع للمطاعم والكافيهات" : "2026 Release: Fastest Cloud POS & QR Engine"}</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.12] mb-6 tracking-tight drop-shadow-sm"
            >
              {t("hero.title1")}{" "}
              <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-emerald-400">
                {t("hero.title2")}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              {t("hero.desc")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#pricing"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-200% animate-gradient text-white font-extrabold text-base sm:text-lg transition-all duration-300 shadow-[0_0_25px_rgba(22,131,199,0.4)] hover:shadow-[0_0_35px_rgba(22,131,199,0.6)] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>{t("hero.cta1")}</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: isRTL ? [0, -4, 0] : [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                >
                  <ArrowIcon size={20} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </motion.span>
              </Link>

              <Link
                href="#how-it-works"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-100/90 dark:bg-white/[0.06] backdrop-blur-md hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-extrabold text-base sm:text-lg transition-all border border-slate-200/80 dark:border-white/15 hover:border-primary/40 flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
              >
                <div className="p-1 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Play size={16} fill="currentColor" />
                </div>
                <span>{t("hero.cta2")}</span>
              </Link>
            </motion.div>

            {/* Interactive SaaS Capability Tabs (Live Showcase Switcher) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 sm:mt-12"
            >
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3 px-1 text-center lg:text-start">
                {isRTL ? "استكشف إمكانيات المحرك السحابي:" : "Explore Engine Capabilities:"}
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm font-bold">
                {[
                  { id: "dashboard", icon: MonitorPlay, label: isRTL ? "لوحة التحكم" : "Dashboard" },
                  { id: "pos", icon: Store, label: isRTL ? "كاشير POS" : "Fast POS" },
                  { id: "qr", icon: QrCode, label: isRTL ? "منيو QR" : "QR Menu" },
                  { id: "offline", icon: WifiOff, label: isRTL ? "بدون إنترنت" : "Offline POS" },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`relative flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-primary text-white border-primary shadow-md shadow-primary/25 scale-105"
                          : "bg-slate-100/80 hover:bg-slate-200/80 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-white/10"
                      }`}
                    >
                      <Icon size={16} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Right 3D Parallax Interactive Showcase Canvas + Floating Micro-Widgets */}
          <motion.div
            initial={{ y: 30, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="hidden sm:flex flex-1 relative w-full min-h-[460px] md:h-[540px] lg:h-[620px] justify-center items-center perspective-1000 transform-gpu"
          >
            {/* Ambient Lighting Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[480px] md:h-[480px] bg-primary/25 blur-[100px] rounded-full animate-pulse pointer-events-none" />

            {/* Main Interactive Showcase Mockup Card (Dynamic Content based on Active Tab) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{
                  x: dashboardX,
                  y: dashboardY,
                  rotateY: isRTL ? 8 : -8,
                  rotateX: 3,
                }}
                className="absolute left-0 lg:-left-12 top-4 w-[92%] md:w-[82%] rounded-[1.8rem] border border-slate-200/90 dark:border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.75)] overflow-hidden bg-white/95 dark:bg-[#0c1626]/95 backdrop-blur-2xl z-10 transition-all duration-300 transform-gpu"
              >
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={currentShowcase.image}
                    alt={currentShowcase.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover opacity-95 dark:opacity-90 transition-opacity"
                    priority
                  />
                  
                  {/* Top Floating Feature Header overlay */}
                  <div className="absolute top-3 left-4 right-4 flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 dark:bg-black/70 backdrop-blur-md text-white border border-white/10 z-20">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-md bg-primary text-white">
                        <Sparkles size={13} />
                      </div>
                      <div>
                        <h6 className="text-xs font-black">{currentShowcase.title}</h6>
                        <p className="text-[10px] text-slate-300 font-medium line-clamp-1">{currentShowcase.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {currentShowcase.metric} {currentShowcase.metricLabel}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* FLOATING GLASS MICRO-WIDGET 1: Live Order Status Card */}
            <motion.div
              style={{ x: posX, y: posY }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 lg:-right-4 top-10 p-3.5 rounded-2xl bg-white/95 dark:bg-[#0f192e]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-30 min-w-[210px] transform-gpu"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <ShoppingBag size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-900 dark:text-white">
                      {isRTL ? "طلب جديد #1042" : "New Order #1042"}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">
                    {isRTL ? "طاولة 4 • كافيه" : "Table 4 • Café"}
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-[11px] font-extrabold">
                <span className="text-slate-600 dark:text-slate-300">{isRTL ? "المجموع:" : "Total:"}</span>
                <span className="text-primary dark:text-primary-light">{isRTL ? "145.00 ج.م" : "145.00 EGP"}</span>
              </div>
            </motion.div>

            {/* FLOATING GLASS MICRO-WIDGET 2: Offline Resilience Card */}
            <motion.div
              style={{ x: mobileX, y: mobileY }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-4 lg:left-0 bottom-8 p-3 rounded-2xl bg-white/95 dark:bg-[#0f192e]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-30 min-w-[200px] transform-gpu"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  <WifiOff size={16} />
                </div>
                <div>
                  <span className="text-xs font-black text-slate-900 dark:text-white block">
                    {isRTL ? "⚡ 100% يعمل بدون إنترنت" : "⚡ 100% Offline POS"}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                    {isRTL ? "مزامنة سحابية تلقائية" : "Auto Cloud Syncing"}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* FLOATING GLASS MICRO-WIDGET 3: Realtime Sales Growth Spike */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-6 sm:right-12 bottom-4 p-3 rounded-2xl bg-white/95 dark:bg-[#0f192e]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-30 transform-gpu"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <BarChart3 size={15} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold block leading-none">
                    {isRTL ? "مبيعات اليوم" : "Today's Revenue"}
                  </span>
                  <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    +28.4% 📈
                  </span>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Trusted By Brands Section (Dual-Theme Adaptive Marquee Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 sm:pt-10 md:pt-12 border-t border-slate-200/80 dark:border-white/10 mt-8 sm:mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <p className="text-center sm:text-start text-xs sm:text-sm font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary" />
              <span>{t("hero.trusted")}</span>
            </p>

            {/* Micro Rating Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-extrabold text-slate-800 dark:text-slate-200">
              <span className="text-amber-400">★★★★★</span>
              <span>4.9/5 (1,200+ {isRTL ? "مطعم وكافيه" : "Outlets"})</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 opacity-90 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-3 font-black text-sm sm:text-base text-slate-800 dark:text-white hover:scale-105 transition-transform bg-slate-100/90 dark:bg-white/[0.04] px-4 py-2.5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/30 text-white font-bold text-xs">
                B
              </span>
              <span>Burger Hub</span>
            </div>

            <div className="flex items-center gap-3 font-black text-sm sm:text-base text-slate-800 dark:text-white hover:scale-105 transition-transform bg-slate-100/90 dark:bg-white/[0.04] px-4 py-2.5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center shadow-md shadow-secondary/30 text-white font-bold text-xs">
                C
              </span>
              <span>Cafe Latte</span>
            </div>

            <div className="flex items-center gap-3 font-black text-sm sm:text-base text-slate-800 dark:text-white hover:scale-105 transition-transform bg-slate-100/90 dark:bg-white/[0.04] px-4 py-2.5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center shadow-md shadow-accent/30 text-white font-bold text-xs">
                S
              </span>
              <span>Steak House</span>
            </div>

            <div className="flex items-center gap-3 font-black text-sm sm:text-base text-slate-800 dark:text-white hover:scale-105 transition-transform bg-slate-100/90 dark:bg-white/[0.04] px-4 py-2.5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center shadow-md shadow-emerald-500/30 text-white font-bold text-xs">
                J
              </span>
              <span>Juice Time</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}