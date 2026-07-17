"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MonitorDot, Smartphone, QrCode, Store, Sparkles, CheckCircle2, Quote } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";

type TabId = "web" | "pos" | "mobile" | "qr";

export default function Features() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabId>("web");

  const tabs = [
    { id: "web" as TabId, icon: <MonitorDot size={20} />, titleDesktop: t("feat.web.title"), titleMobile: t("feat.web.short") },
    { id: "pos" as TabId, icon: <Store size={20} />, titleDesktop: t("feat.pos.title"), titleMobile: t("feat.pos.short") },
    { id: "mobile" as TabId, icon: <Smartphone size={20} />, titleDesktop: t("feat.mobile.title"), titleMobile: t("feat.mobile.short") },
    { id: "qr" as TabId, icon: <QrCode size={20} />, titleDesktop: t("feat.qr.title"), titleMobile: t("feat.qr.short") },
  ];

  const contentMap: Record<TabId, any> = {
    web: {
      title: t("feat.web.title"),
      desc: t("feat.web.longDesc"),
      bullets: [t("feat.web.b1"), t("feat.web.b2"), t("feat.web.b3")],
      review: t("feat.web.review"),
      reviewer: t("feat.web.reviewer"),
      image: "/mockups/web_dashboard.png",
      glowColor: "bg-primary/20",
      accent: "text-primary",
      gradient: "from-primary/20 to-transparent",
    },
    pos: {
      title: t("feat.pos.title"),
      desc: t("feat.pos.longDesc"),
      bullets: [t("feat.pos.b1"), t("feat.pos.b2"), t("feat.pos.b3")],
      review: t("feat.pos.review"),
      reviewer: t("feat.pos.reviewer"),
      image: "/mockups/pos_terminal.png",
      glowColor: "bg-accent/20",
      accent: "text-accent",
      gradient: "from-accent/20 to-transparent",
    },
    mobile: {
      title: t("feat.mobile.title"),
      desc: t("feat.mobile.longDesc"),
      bullets: [t("feat.mobile.b1"), t("feat.mobile.b2"), t("feat.mobile.b3")],
      review: t("feat.mobile.review"),
      reviewer: t("feat.mobile.reviewer"),
      image: "/mockups/mobile_app.png",
      glowColor: "bg-secondary/20",
      accent: "text-secondary",
      gradient: "from-secondary/20 to-transparent",
    },
    qr: {
      title: t("feat.qr.title"),
      desc: t("feat.qr.longDesc"),
      bullets: [t("feat.qr.b1"), t("feat.qr.b2"), t("feat.qr.b3")],
      review: t("feat.qr.review"),
      reviewer: t("feat.qr.reviewer"),
      image: "/mockups/qr_menu.png",
      glowColor: "bg-success/20",
      accent: "text-success",
      gradient: "from-success/20 to-transparent",
    },
  };

  const currentContent = contentMap[activeTab];

  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 bg-background relative">
      {/* Immersive Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full translate-y-1/3 -translate-x-1/3" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-white/10 text-white text-xs font-bold mb-6 backdrop-blur-md shadow-lg uppercase tracking-widest">
            <Sparkles size={14} className="text-primary" />
            <span>{language === 'ar' ? 'تعمق في المزايا' : 'Deep Dive'}</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 tracking-tight"
          >
            {t("features.title1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-accent">{t("features.title2")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            {t("features.desc")}
          </motion.p>
        </div>

        {/* Interactive Tabs Menu */}
        <div className="sticky top-[72px] md:top-24 z-40 flex justify-center mb-12 sm:mb-16 w-full overflow-hidden py-3 md:py-0 bg-background/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-y md:border-transparent border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] md:shadow-none pointer-events-none">
          <div className="pointer-events-auto flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-surface/80 md:bg-surface/50 backdrop-blur-2xl md:backdrop-blur-md border border-white/10 rounded-full md:rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] w-full md:w-auto max-w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full md:rounded-full text-xs md:text-sm font-bold transition-all duration-300 z-10 whitespace-nowrap shrink-0 snap-center ${
                    isActive ? "text-white" : "text-text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureTab"
                      className="absolute inset-0 md:bg-primary/20 bg-gradient-to-r from-primary/30 to-primary/10 border md:border-primary/50 border-primary/40 rounded-full md:rounded-full shadow-[0_0_20px_rgba(22,131,199,0.3)] md:shadow-[0_0_15px_rgba(22,131,199,0.3)] -z-10 backdrop-blur-md md:backdrop-blur-none"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className={isActive ? "md:text-primary-light drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] md:drop-shadow-md text-primary-light" : ""}>{tab.icon}</span>
                  <span className="md:hidden">{tab.titleMobile}</span>
                  <span className="hidden md:inline">{tab.titleDesktop}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              
              {/* Text & Details Side */}
              <div className="flex flex-col relative z-20">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${currentContent.gradient} border border-white/10 mb-8 shadow-lg`}>
                  {tabs.find(t => t.id === activeTab)?.icon}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight drop-shadow-sm">
                  {currentContent.title}
                </h3>
                
                <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
                  {currentContent.desc}
                </p>
                
                <ul className="space-y-4 mb-12">
                  {currentContent.bullets.map((bullet: string, idx: number) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      key={idx} 
                      className="flex items-center gap-3 text-white/90 font-medium"
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${currentContent.glowColor} text-white`}>
                        <CheckCircle2 size={16} className={currentContent.accent} />
                      </div>
                      {bullet}
                    </motion.li>
                  ))}
                </ul>

              </div>

              {/* Image & Review Side */}
              <div className="relative z-10 w-full aspect-[4/3] sm:aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
                {/* Huge glowing backplate */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${currentContent.glowColor} blur-[100px] rounded-full pointer-events-none opacity-50`} />
                
                {/* Main Mockup Image Container */}
                <div className="relative w-full h-full max-h-[400px] md:max-h-[500px] bg-surface/30 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                  <Image 
                    src={currentContent.image}
                    alt={currentContent.title}
                    fill
                    className="object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>

                {/* Overlapping Review Card — static on mobile, absolute on md+ */}
                <motion.div 
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="relative mt-6 md:mt-0 md:absolute md:bottom-12 md:-left-12 max-w-sm bg-surface/90 backdrop-blur-3xl border border-white/20 rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl z-30"
                >
                  <Quote size={28} className={`${currentContent.accent} opacity-50 mb-3`} />
                  <p className="text-white text-sm md:text-base leading-relaxed mb-4 italic drop-shadow-md">
                    "{currentContent.review}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center text-white font-bold">
                      {currentContent.reviewer.charAt(0)}
                    </div>
                    <span className="text-text-secondary text-sm font-bold">{currentContent.reviewer}</span>
                  </div>
                </motion.div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
