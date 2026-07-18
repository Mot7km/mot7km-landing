"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getRoadmapPhases, type RoadmapPhase, getPhaseStyles } from "@/data/roadmap";


export default function Roadmap() {
  const { t } = useLanguage();
  const phases = getRoadmapPhases(t);

  return (
    <section id="roadmap" className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/5 text-text-secondary text-sm font-bold mb-6 backdrop-blur-md">
            <Rocket size={16} className="text-accent" />
            <span>The Future of Mot7km</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 tracking-tight"
          >
            {t("roadmap.title1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">{t("roadmap.title2")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto"
          >
            {t("roadmap.desc")}
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Track – left on mobile, centered on tablet+ */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-8 md:left-1/2 w-1 -translate-x-1/2 rounded-full bg-surface border-x border-white/5">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary via-secondary to-transparent blur-[2px]" />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary via-secondary to-transparent" />
          </div>

          <div className="space-y-10 sm:space-y-16">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              const styles = getPhaseStyles(phase.status);
              const isEven = i % 2 === 0;

              return (
                <motion.div 
                  key={phase.id}
                  initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, type: "spring", bounce: 0.3 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 group ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot – left on mobile, centered on tablet+ */}
                  <div className={`absolute left-6 sm:left-8 md:left-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 -translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-150 ${styles.dot}`}>
                    {styles.dotPing && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-primary opacity-50" />
                    )}
                  </div>

                  {/* Glassmorphic Card – full width on mobile, half on tablet+ */}
                  <div className={`flex-1 w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0 text-start ${
                    isEven ? "md:pr-20 md:text-end" : "md:pl-20"
                  }`}>
                    <div className={`relative p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] backdrop-blur-xl bg-gradient-to-br ${styles.color} border ${styles.borderColor} ${styles.glow} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
                      
                      <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, white, transparent)' }} />
                      
                      {/* Icon + Title – always left on mobile, reversed on even desktop */}
                      <div className={`relative z-10 flex items-center gap-5 mb-5 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className={`w-14 h-14 rounded-2xl bg-card border border-white/5 shadow-inner flex items-center justify-center flex-shrink-0 ${styles.iconColor}`}>
                          <Icon size={28} strokeWidth={2} />
                        </div>
                        <div>
                          <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${styles.labelColor}`}>
                            {styles.statusLabel}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-text-primary">{phase.title}</h3>
                        </div>
                      </div>
                      
                      <p className={`text-base sm:text-lg leading-relaxed relative z-10 ${phase.status !== 'future' ? 'text-text-primary/90' : 'text-text-secondary'}`}>
                        {phase.desc}
                      </p>
                    </div>
                  </div>

                  {/* Empty spacer for alternating layout on desktop */}
                  <div className="hidden md:block flex-1"></div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}