"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, UtensilsCrossed, CupSoda, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";

export default function UseCases() {
  const { t } = useLanguage();
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: "cafe",
      icon: Coffee,
      title: t("uc.cafe.title"),
      desc: t("uc.cafe.desc"),
      color: "text-primary",
      glowColor: "rgba(22, 131, 199, 0.4)", // Primary
      bg: "bg-primary/20",
      border: "border-primary/20",
      image: "/mockups/pos_terminal.png", // Café needs POS
    },
    {
      id: "restaurant",
      icon: UtensilsCrossed,
      title: t("uc.restaurant.title"),
      desc: t("uc.restaurant.desc"),
      color: "text-secondary",
      glowColor: "rgba(15, 118, 110, 0.4)", // Secondary
      bg: "bg-secondary/20",
      border: "border-secondary/20",
      image: "/mockups/web_dashboard.png", // Restaurants need full admin tracking
    },
    {
      id: "juice",
      icon: CupSoda,
      title: t("uc.juice.title"),
      desc: t("uc.juice.desc"),
      color: "text-accent",
      glowColor: "rgba(6, 182, 212, 0.4)", // Accent
      bg: "bg-accent/20",
      border: "border-accent/20",
      image: "/mockups/mobile_app.png", // Fast mobile tracking
    },
    {
      id: "gaming",
      icon: Gamepad2,
      title: t("uc.gaming.title"),
      desc: t("uc.gaming.desc"),
      color: "text-success",
      glowColor: "rgba(16, 185, 129, 0.4)", // Success
      bg: "bg-success/20",
      border: "border-success/20",
      image: "/mockups/qr_menu.png", // Gaming lounges order directly from tables via QR
    },
  ];

  return (
    <section id="use-cases" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6"
          >
            {t("useCases.title1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t("useCases.title2")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            {t("useCases.desc")}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-7xl mx-auto items-stretch">
          
          {/* Left: Interactive Minimalist Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center gap-2">
            {cases.map((uc, index) => {
              const isActive = activeCase === index;
              const Icon = uc.icon;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveCase(index)}
                  className="relative w-full text-start group outline-none"
                >
                  {/* Active Pill Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-surface/80 backdrop-blur-md border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-3xl"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  <div className={`relative z-10 p-5 md:p-6 flex items-center gap-5 transition-all duration-300 rounded-3xl ${
                    isActive ? "" : "hover:bg-surface/30"
                  }`}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isActive 
                        ? `${uc.bg} ${uc.color} shadow-lg scale-110` 
                        : 'bg-transparent text-text-muted border border-border/50 group-hover:border-white/10 group-hover:text-text-secondary'
                    }`}>
                      <Icon size={26} strokeWidth={isActive ? 2 : 1.5} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold transition-colors duration-300 mb-1 ${
                        isActive ? 'text-white drop-shadow-md' : 'text-text-muted group-hover:text-text-secondary'
                      }`}>
                        {uc.title}
                      </h4>
                      {isActive && (
                        <motion.div 
                          layoutId="activeTabIndicator"
                          className={`h-0.5 w-12 rounded-full ${uc.bg.replace('/20', '')}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Ultra-Premium Visual Display */}
          <div className="w-full lg:w-2/3 min-h-[500px] md:min-h-[600px] relative perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95, rotateY: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95, rotateY: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-surface/30 backdrop-blur-2xl border border-white/5 shadow-2xl flex flex-col items-center justify-center p-8 md:p-12"
              >
                {/* Immersive Glowing Mesh Background */}
                <div 
                  className="absolute inset-0 opacity-40 transition-all duration-1000 mix-blend-screen pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${cases[activeCase].glowColor} 0%, transparent 60%)`
                  }}
                />
                
                {/* Concentric Glass Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 shadow-[inset_0_0_40px_rgba(255,255,255,0.02)] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 w-full h-full">
                  
                  {/* Floating Contextual UI Mockup */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0, scale: 0.9 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                    className="relative flex-1 w-full max-w-[320px] lg:max-w-none h-64 lg:h-full rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group"
                  >
                    <Image 
                      src={cases[activeCase].image} 
                      alt={cases[activeCase].title} 
                      fill 
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                      unoptimized 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    
                    {/* Small Overlay Icon identifying the mode */}
                    <div className={`absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg`}>
                        {(() => {
                          const ActiveIcon = cases[activeCase].icon;
                          return <ActiveIcon size={24} className={cases[activeCase].color} strokeWidth={2} />;
                        })()}
                    </div>
                  </motion.div>
                  
                  {/* Text Details */}
                  <div className="flex-1 text-center lg:text-start flex flex-col justify-center">
                    <motion.h3 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-3xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-sm"
                    >
                      {cases[activeCase].title}
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium"
                    >
                      {cases[activeCase].desc}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
