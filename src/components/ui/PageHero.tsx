"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SubpageHeader from "@/components/layout/SubpageHeader";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  gradientTitle?: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  description,
  gradientTitle,
}: PageHeroProps) {
  return (
    <div className="relative pt-8 sm:pt-12 pb-10 md:pb-14 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto z-10">

      <div className="flex flex-col items-center text-center mt-6 md:mt-10 relative">
        {/* Ambient Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[250px] bg-primary/20 dark:bg-primary/25 rounded-full blur-[120px] -z-10 pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl flex flex-col items-center"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/90 dark:border-white/15 text-primary text-xs sm:text-sm font-extrabold mb-6 backdrop-blur-md shadow-sm uppercase tracking-wider">
              <Sparkles size={14} className="animate-pulse text-primary" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.15]">
            {title}{" "}
            {gradientTitle && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-emerald-400 inline-block">
                {gradientTitle}
              </span>
            )}
          </h1>

          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 max-w-2xl">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
