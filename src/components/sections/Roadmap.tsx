"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Roadmap() {
  const { t } = useLanguage();

  const phases = [
    {
      id: "q1",
      status: "current",
      icon: <CheckCircle2 size={24} className="text-white" />,
      title: t("rm.q1.title"),
      desc: t("rm.q1.desc"),
      color: "bg-primary",
      dot: "bg-primary border-primary/30",
    },
    {
      id: "q2",
      status: "next",
      icon: <Clock size={24} className="text-white" />,
      title: t("rm.q2.title"),
      desc: t("rm.q2.desc"),
      color: "bg-secondary",
      dot: "bg-secondary border-secondary/30",
    },
    {
      id: "q3",
      status: "future",
      icon: <Clock size={24} className="text-text-muted" />,
      title: t("rm.q3.title"),
      desc: t("rm.q3.desc"),
      color: "bg-surface border border-border",
      textColor: "text-text-primary",
      dot: "bg-border border-border/10",
    },
    {
      id: "q4",
      status: "future",
      icon: <Sparkles size={24} className="text-text-muted" />,
      title: t("rm.q4.title"),
      desc: t("rm.q4.desc"),
      color: "bg-surface border border-border",
      textColor: "text-text-primary",
      dot: "bg-border border-border/10",
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
          >
            {t("roadmap.title1")} <span className="text-gradient bg-brand-gradient">{t("roadmap.title2")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            {t("roadmap.desc")}
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-1 bg-border -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div 
                key={phase.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 100 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 w-8 h-8 rounded-full border-4 -translate-x-1/2 z-10 ${phase.dot}`}></div>

                {/* Content Box */}
                <div className={`flex-1 w-full md:w-1/2 pl-20 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-16 text-start md:text-end" : "md:pl-16 text-start"
                }`}>
                  <div className={`p-6 rounded-3xl shadow-sm ${phase.color} ${phase.status !== 'future' ? 'text-white' : ''} transition-transform hover:-translate-y-1 duration-300`}>
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center ${phase.status === 'future' ? 'bg-card' : ''}`}>
                        {phase.icon}
                      </div>
                      <h3 className={`text-xl font-bold ${phase.textColor || 'text-white'}`}>{phase.title}</h3>
                    </div>
                    <p className={`leading-relaxed ${phase.status !== 'future' ? 'text-white/90' : 'text-text-secondary'}`}>
                      {phase.desc}
                    </p>
                  </div>
                </div>

                {/* Empty Space for alternate layout */}
                <div className="hidden md:block flex-1"></div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
