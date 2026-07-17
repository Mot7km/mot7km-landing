"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Sparkles, Rocket } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Roadmap() {
  const { t } = useLanguage();

  const phases = [
    {
      id: "q1",
      status: "current",
      icon: CheckCircle2,
      title: t("rm.q1.title"),
      desc: t("rm.q1.desc"),
      color: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30",
      iconColor: "text-primary",
      glow: "shadow-[0_0_30px_rgba(22,131,199,0.15)]",
      dot: "bg-primary border-primary/30 shadow-[0_0_15px_rgba(22,131,199,0.5)]",
    },
    {
      id: "q2",
      status: "next",
      icon: Rocket,
      title: t("rm.q2.title"),
      desc: t("rm.q2.desc"),
      color: "from-secondary/20 to-secondary/5",
      borderColor: "border-secondary/30",
      iconColor: "text-secondary",
      glow: "shadow-[0_0_30px_rgba(15,118,110,0.15)]",
      dot: "bg-secondary border-secondary/30 shadow-[0_0_15px_rgba(15,118,110,0.5)]",
    },
    {
      id: "q3",
      status: "future",
      icon: Clock,
      title: t("rm.q3.title"),
      desc: t("rm.q3.desc"),
      color: "from-surface/80 to-surface/40",
      borderColor: "border-white/5",
      iconColor: "text-text-muted",
      glow: "shadow-lg",
      dot: "bg-surface border-white/10",
    },
    {
      id: "q4",
      status: "future",
      icon: Sparkles,
      title: t("rm.q4.title"),
      desc: t("rm.q4.desc"),
      color: "from-surface/80 to-surface/40",
      borderColor: "border-white/5",
      iconColor: "text-text-muted",
      glow: "shadow-lg",
      dot: "bg-surface border-white/10",
    },
  ];

  return (
    <section id="roadmap" className="py-32 bg-background relative overflow-hidden">
      {/* Immersive Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/5 text-text-secondary text-sm font-bold mb-6 backdrop-blur-md">
            <Rocket size={16} className="text-accent" />
            <span>The Future of Mot7km</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 tracking-tight"
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
          {/* Illuminated Vertical Track */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-1 -translate-x-1/2 rounded-full bg-surface border-x border-white/5">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary via-secondary to-transparent blur-[2px]" />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary via-secondary to-transparent" />
          </div>

          <div className="space-y-16">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <motion.div 
                  key={phase.id}
                  initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, type: "spring", bounce: 0.3 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 group ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full border-4 -translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-150 ${phase.dot}`}>
                    {phase.status === 'current' && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-primary opacity-50" />
                    )}
                  </div>

                  {/* Glassmorphic Content Card */}
                  <div className={`flex-1 w-full md:w-1/2 pl-20 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-20 text-start md:text-end" : "md:pl-20 text-start"
                  }`}>
                    <div className={`relative p-8 rounded-[2rem] backdrop-blur-xl bg-gradient-to-br ${phase.color} border ${phase.borderColor} ${phase.glow} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
                      
                      {/* Subtle Internal Highlight */}
                      <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, white, transparent)' }} />
                      
                      <div className={`relative z-10 flex items-center gap-5 mb-5 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className={`w-14 h-14 rounded-2xl bg-card border border-white/5 shadow-inner flex items-center justify-center flex-shrink-0 ${phase.iconColor}`}>
                          <Icon size={28} strokeWidth={2} />
                        </div>
                        <div>
                          <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${phase.status === 'current' ? 'text-primary' : phase.status === 'next' ? 'text-secondary' : 'text-text-muted'}`}>
                            {phase.status === 'current' ? 'In Progress' : phase.status === 'next' ? 'Up Next' : 'Planned'}
                          </div>
                          <h3 className="text-2xl font-bold text-text-primary">{phase.title}</h3>
                        </div>
                      </div>
                      
                      <p className={`text-lg leading-relaxed relative z-10 ${phase.status !== 'future' ? 'text-text-primary/90' : 'text-text-secondary'}`}>
                        {phase.desc}
                      </p>
                    </div>
                  </div>

                  {/* Empty Space for alternate layout */}
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
