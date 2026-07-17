"use client";

import { motion } from "framer-motion";
import { TrendingUp, PieChart, Users, LineChart, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ValueProp() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-32 bg-background relative overflow-hidden">
      {/* Immersive Background Orbs */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
                <Sparkles size={16} />
                <span>How Mot7km Works</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight">
                {t("value.title1")} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">{t("value.title2")}</span>
              </h2>
              <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
                {t("value.desc")}
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                { q: t("val.q1"), icon: TrendingUp, color: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
                { q: t("val.q2"), icon: PieChart, color: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/20" },
                { q: t("val.q3"), icon: LineChart, color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
                { q: t("val.q4"), icon: Users, color: "text-success", bg: "bg-success/10", border: "border-success/20" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group flex items-center gap-5 p-4 rounded-2xl bg-surface/50 backdrop-blur-sm border border-border/50 hover:bg-surface hover:border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={item.color} size={24} strokeWidth={2} />
                    </div>
                    <span className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">{item.q}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Ultra-Premium Visual Content (Abstract Glass Dashboard) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex-1 relative w-full perspective-[1000px]"
          >
            {/* The Main Glass Panel */}
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-surface/40 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/10 p-6 md:p-8 flex flex-col gap-6 overflow-hidden transform-style-3d">
              
              {/* Internal Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/30 blur-[60px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/30 blur-[60px] rounded-full pointer-events-none" />

              {/* Header Metric */}
              <div className="relative z-10 flex items-center justify-between bg-card/60 backdrop-blur-md border border-white/5 p-5 rounded-2xl shadow-sm">
                <div>
                  <h4 className="text-text-muted text-sm font-bold mb-1 uppercase tracking-wider">{t("val.stat.sales")}</h4>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">12,450</div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-success/10 border border-success/20 text-success text-sm font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <TrendingUp size={18} strokeWidth={2.5} />
                  +14.5%
                </div>
              </div>

              {/* Abstract Animated Bar Chart */}
              <div className="relative z-10 flex-1 flex items-end justify-between gap-3 mt-4">
                {[40, 60, 30, 80, 50, 100, 70].map((height, i) => (
                  <div key={i} className="w-full flex flex-col justify-end items-center gap-2 h-full group">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, type: "spring", bounce: 0.4 }}
                      className={`w-full rounded-t-xl transition-all duration-300 relative overflow-hidden ${
                        i === 5 
                          ? 'bg-gradient-to-t from-primary/80 to-primary shadow-[0_0_20px_rgba(22,131,199,0.4)]' 
                          : 'bg-primary/20 group-hover:bg-primary/40'
                      }`}
                    >
                      {i === 5 && (
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-50" />
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>
              
              {/* Bottom Bento Boxes */}
              <div className="relative z-10 grid grid-cols-2 gap-4 mt-2">
                <div className="bg-card/60 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:bg-card/80 transition-colors">
                   <div className="relative w-12 h-12 flex-shrink-0">
                     <div className="absolute inset-0 rounded-full border-4 border-secondary/20"></div>
                     <div className="absolute inset-0 rounded-full border-4 border-secondary border-r-transparent animate-spin-slow shadow-[0_0_10px_rgba(15,118,110,0.5)]"></div>
                   </div>
                   <div>
                     <div className="text-xs font-bold text-text-muted uppercase tracking-wider">{t("val.stat.top")}</div>
                     <div className="font-extrabold text-text-primary mt-1">{t("val.stat.topItem")}</div>
                   </div>
                </div>
                
                <div className="bg-card/60 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:bg-card/80 transition-colors">
                   <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                     <Users size={24} strokeWidth={2} />
                   </div>
                   <div>
                     <div className="text-xs font-bold text-text-muted uppercase tracking-wider">{t("val.stat.customers")}</div>
                     <div className="font-extrabold text-text-primary text-xl mt-1">142</div>
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
