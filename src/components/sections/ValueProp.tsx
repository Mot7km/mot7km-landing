"use client";

import { motion } from "framer-motion";
import { TrendingUp, PieChart, Users, LineChart, Sparkles } from "lucide-react";
import { useLanguage } from "@/config/LanguageProvider";

export default function ValueProp() {
  const { t } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Immersive Background Orbs - repositioned for better coverage */}
      <div className="absolute top-1/2 right-0 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-primary/5 blur-[80px] sm:blur-[100px] lg:blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-accent/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 max-w-xl w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4 sm:mb-6">
                <Sparkles size={16} className="w-4 h-4" />
                <span>{t("value.badge") || "How Mot7km Works"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                {t("value.title1")} <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
                  {t("value.title2")}
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 sm:mb-10 leading-relaxed max-w-lg">
                {t("value.desc")}
              </p>
            </motion.div>
          </div>

          {/* Ultra-Premium Visual Content (Abstract Glass Dashboard) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex-1 relative w-full perspective-[1000px]"
          >
            {/* Glass Panel - responsive sizing */}
            <div className="relative w-full aspect-square sm:aspect-[4/3] bg-surface/40 backdrop-blur-2xl rounded-2xl sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/10 p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 overflow-hidden transform-style-3d">
              
              {/* Internal Glow - adjusted sizes */}
              <div className="absolute -top-20 sm:-top-32 -right-20 sm:-right-32 w-40 sm:w-64 h-40 sm:h-64 bg-primary/30 blur-[40px] sm:blur-[60px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-20 sm:-bottom-32 -left-20 sm:-left-32 w-40 sm:w-64 h-40 sm:h-64 bg-accent/30 blur-[40px] sm:blur-[60px] rounded-full pointer-events-none" />

              {/* Header Metric */}
              <div className="relative z-10 flex items-center justify-between bg-card/60 backdrop-blur-md border border-white/5 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl shadow-sm">
                <div>
                  <h4 className="text-text-muted text-[10px] sm:text-xs md:text-sm font-bold mb-0.5 sm:mb-1 uppercase tracking-wider">
                    {t("val.stat.sales")}
                  </h4>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
                    12,450
                  </div>
                </div>
                <div className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-success/10 border border-success/20 text-success text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <TrendingUp size={16} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
                  +14.5%
                </div>
              </div>

              {/* Abstract Animated Bar Chart - responsive spacing */}
              <div className="relative z-10 flex-1 flex items-end justify-between gap-2 sm:gap-3 mt-2 sm:mt-4">
                {[40, 60, 30, 80, 50, 100, 70].map((height, i) => (
                  <div
                    key={i}
                    className="w-full flex flex-col justify-end items-center gap-1 sm:gap-2 h-full group"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.1,
                        type: "spring",
                        bounce: 0.4,
                      }}
                      className={`w-full rounded-t-md sm:rounded-t-xl transition-all duration-300 relative overflow-hidden ${
                        i === 5
                          ? "bg-gradient-to-t from-primary/80 to-primary shadow-[0_0_20px_rgba(22,131,199,0.4)]"
                          : "bg-primary/20 group-hover:bg-primary/40"
                      }`}
                    >
                      {i === 5 && (
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-50" />
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Bottom Bento Boxes - responsive grid */}
              <div className="relative z-10 grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-1 sm:mt-2">
                <div className="bg-card/60 backdrop-blur-md border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex items-center gap-3 sm:gap-4 hover:bg-card/80 transition-colors">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full border-4 border-secondary/20" />
                    <div className="absolute inset-0 rounded-full border-4 border-secondary border-r-transparent animate-spin-slow shadow-[0_0_10px_rgba(15,118,110,0.5)]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-wider">
                      {t("val.stat.top")}
                    </div>
                    <div className="font-extrabold text-text-primary text-sm sm:text-base md:text-lg mt-0.5 truncate">
                      {t("val.stat.topItem")}
                    </div>
                  </div>
                </div>

                <div className="bg-card/60 backdrop-blur-md border border-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex items-center gap-3 sm:gap-4 hover:bg-card/80 transition-colors">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <Users size={20} className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-wider">
                      {t("val.stat.customers")}
                    </div>
                    <div className="font-extrabold text-text-primary text-base sm:text-lg md:text-xl mt-0.5">
                      142
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}