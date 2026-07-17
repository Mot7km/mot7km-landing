"use client";

import { motion, Variants } from "framer-motion";
import { MonitorDot, Smartphone, QrCode, Store, BarChart3, Users, Settings } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

export default function Features() {
  const { t, language } = useLanguage();

  return (
    <section id="features" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
          >
            {t("features.title1")} <span className="text-gradient bg-brand-gradient">{t("features.title2")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary"
          >
            {t("features.desc")}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto] md:grid-rows-[minmax(250px,_auto)_minmax(250px,_auto)] gap-6"
        >
          {/* Main Web Dashboard - Bento Large */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 bg-surface rounded-[2rem] p-8 md:p-10 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group flex flex-col relative overflow-hidden"
          >
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 blur-[50px] rounded-full group-hover:bg-primary/20 transition-colors"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
              <MonitorDot size={32} />
            </div>
            <h3 className="text-3xl font-bold text-text-primary mb-4 z-10">{t("feat.web.title")}</h3>
            <p className="text-text-secondary text-lg leading-relaxed z-10 max-w-md">
              {t("feat.web.desc")}
            </p>

            <div className="mt-auto pt-10 z-10 hidden sm:flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="flex-1 h-2 rounded bg-primary/20 overflow-hidden"><div className="w-2/3 h-full bg-primary rounded"></div></div>
              <div className="flex-1 h-2 rounded bg-primary/10 overflow-hidden"><div className="w-1/2 h-full bg-primary/50 rounded"></div></div>
            </div>
          </motion.div>

          {/* POS System - Bento Tall */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-2 bg-surface rounded-[2rem] p-8 border border-border hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 group flex flex-col relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
              <Store size={28} />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3 z-10">{t("feat.pos.title")}</h3>
            <p className="text-text-secondary leading-relaxed z-10 flex-1">
              {t("feat.pos.desc")}
            </p>
            <div className="mt-8 relative h-32 w-full bg-card rounded-xl border border-border flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 w-full h-8 bg-surface border-b border-border flex items-center px-3 gap-2">
                 <div className="w-2 h-2 rounded-full bg-border"></div>
                 <div className="w-2 h-2 rounded-full bg-border"></div>
              </div>
              <Store className="text-accent/20" size={48} />
            </div>
          </motion.div>

          {/* Mobile App - Bento Small 1 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-1 bg-surface rounded-[2rem] p-8 border border-border hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Smartphone size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">{t("feat.mobile.title")}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {t("feat.mobile.desc")}
            </p>
          </motion.div>

          {/* QR Menu - Bento Small 2 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-1 bg-surface rounded-[2rem] p-8 border border-border hover:border-success/30 hover:shadow-xl hover:shadow-success/10 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center group-hover:rotate-[-12deg] transition-transform duration-300">
                <QrCode size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">{t("feat.qr.title")}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {t("feat.qr.desc")}
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
