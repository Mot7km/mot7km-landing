"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, ShieldCheck, Wrench, LucideIcon } from "lucide-react";

export interface TimelineItemProps {
  version: string;
  date: string;
  title: string;
  description: string;
  type: "feature" | "improvement" | "fix";
  changes: string[];
  index: number;
}

const typeMap: Record<TimelineItemProps["type"], { labelAr: string; labelEn: string; color: string; icon: LucideIcon }> = {
  feature: {
    labelAr: "ميزة جديدة",
    labelEn: "New Feature",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    icon: Sparkles,
  },
  improvement: {
    labelAr: "تحسينات",
    labelEn: "Improvement",
    color: "bg-primary/10 text-primary border-primary/20",
    icon: Zap,
  },
  fix: {
    labelAr: "إصلاحات",
    labelEn: "Bug Fix",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    icon: Wrench,
  },
};

export default function TimelineItem({
  version,
  date,
  title,
  description,
  type,
  changes,
  index,
}: TimelineItemProps) {
  const typeConfig = typeMap[type] || typeMap.feature;
  const TypeIcon = typeConfig.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-6 sm:pl-10 rtl:pl-0 rtl:pr-6 rtl:sm:pr-10 border-l-2 rtl:border-l-0 rtl:border-r-2 border-slate-200 dark:border-white/10 pb-12 last:pb-0"
    >
      {/* Timeline Dot Indicator */}
      <div className="absolute top-0 -left-[9px] rtl:-left-auto rtl:-right-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-md shadow-primary/30" />

      <div className="bg-white/95 dark:bg-[#0c1626]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 rounded-3xl p-6 sm:p-8 shadow-lg dark:shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-black px-3 py-1 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm">
              v{version}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border text-xs font-black uppercase tracking-wider ${typeConfig.color}`}>
              <TypeIcon size={14} />
              <span>{typeConfig.labelAr}</span>
            </span>
          </div>

          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
            {date}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2">
          {title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-medium">
          {description}
        </p>

        {changes && changes.length > 0 && (
          <ul className="space-y-2.5 pt-4 border-t border-slate-200/60 dark:border-white/10">
            {changes.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
