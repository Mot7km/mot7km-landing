"use client";

import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { 
  ArrowLeft, 
  Target, 
  Eye, 
  Store, 
  Smartphone, 
  MonitorSmartphone, 
  Users,
  Zap,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Sparkles,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function AboutUs() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main className="min-h-screen bg-background text-text-primary overflow-hidden flex flex-col relative" ref={containerRef}>
      
      {/* Advanced Ambient Background */}
      <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top_center,rgba(var(--primary-rgb),0.08),transparent_80%)] pointer-events-none -z-10" />
      <div className="absolute top-[20%] -left-64 w-[600px] h-[600px] bg-primary/20 rounded-full mix-blend-multiply filter blur-[150px] opacity-50 animate-pulse pointer-events-none -z-10" />
      <div className="absolute top-[30%] -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse animation-delay-2000 pointer-events-none -z-10" />

      <div className="flex-1 pt-8 pb-24 px-4 sm:px-6 md:px-8 relative z-10 w-full max-w-[1400px] mx-auto">
        
        {/* Navigation */}
        <div className="mb-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-medium px-5 py-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 backdrop-blur-md border border-transparent hover:border-black/10 dark:hover:border-white/10"
          >
            <ArrowLeft size={18} className="rtl:rotate-180" />
            <span className="text-sm tracking-wide">{t("notFound.goHome")}</span>
          </Link>
        </div>

        {/* 1. Hero Section - Ultra Premium */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32 mt-12 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/30 rounded-full blur-[120px] -z-10 opacity-50"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-5xl flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-primary/20 text-primary text-sm font-bold mb-8 backdrop-blur-xl shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] uppercase tracking-widest">
              <Sparkles size={16} />
              <span>{t("about.hero.subtitle")}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-text-primary tracking-tighter mb-8 leading-[1.05]">
              {t("about.hero.title").split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent inline-block">{t("about.hero.title").split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-medium max-w-3xl leading-relaxed opacity-90">
              {t("about.hero.desc")}
            </p>
          </motion.div>
        </div>

        {/* 2. Key Stats Strip */}
        <section className="mb-32 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-black/90 dark:bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-50" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10 divide-x divide-white/10 rtl:divide-x-reverse">
              {['offline', 'qr', 'sync', 'platform'].map((stat, i) => (
                <div key={stat} className="flex flex-col items-center text-center px-4">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{t(`about.stats.${stat}.value`)}</div>
                  <div className="text-sm md:text-base text-white/60 font-medium uppercase tracking-wider">{t(`about.stats.${stat}.label`)}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 3. The Journey (Problem vs Solution) */}
        <section className="mb-32 md:mb-40 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t("about.story.title")}</h4>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text-primary">{t("about.story.subtitle")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Problem Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors duration-500" />
              <div className="w-14 h-14 bg-red-500/20 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-text-primary tracking-tight">{t("about.story.problem.title")}</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t("about.story.problem.content")}
              </p>
            </motion.div>

            {/* Solution Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-500/5 dark:bg-green-500/10 border border-green-500/20 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 group relative overflow-hidden md:mt-12"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 transition-colors duration-500" />
              <div className="w-14 h-14 bg-green-500/20 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-text-primary tracking-tight">{t("about.story.solution.title")}</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t("about.story.solution.content")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. Mission & Vision */}
        <section className="mb-32 md:mb-40 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              style={{ y: y1 }}
              className="hidden md:flex flex-col space-y-8"
            >
              <div className="w-full h-80 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[3rem] backdrop-blur-3xl border border-white/20 p-8 flex items-end">
                <h2 className="text-6xl font-black text-white/50 uppercase tracking-tighter mix-blend-overlay">Mission</h2>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-16 md:pl-12 rtl:md:pl-0 rtl:md:pr-12"
            >
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl"><Target size={24} /></div>
                  <h4 className="text-primary font-bold tracking-widest uppercase text-sm">{t("about.mission.title")}</h4>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">{t("about.mission.subtitle")}</h3>
                <p className="text-xl text-text-secondary leading-relaxed border-l-4 border-primary/30 pl-6 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6">
                  {t("about.mission.content")}
                </p>
              </div>

              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/10 text-accent rounded-xl"><Eye size={24} /></div>
                  <h4 className="text-accent font-bold tracking-widest uppercase text-sm">{t("about.vision.title")}</h4>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">{t("about.vision.subtitle")}</h3>
                <p className="text-xl text-text-secondary leading-relaxed border-l-4 border-accent/30 pl-6 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6">
                  {t("about.vision.content")}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. What We Do - Advanced Bento Box */}
        <section className="mb-32 md:mb-40">
          <div className="text-center mb-20">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t("about.whatWeDo.title")}</h4>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text-primary">{t("about.whatWeDo.subtitle")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
            
            {/* Owners - Huge Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-surface/50 backdrop-blur-xl border border-black/5 dark:border-white/10 p-10 sm:p-12 rounded-[2.5rem] hover:bg-surface/80 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-700" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-black/10 dark:border-white/10 text-xs font-bold text-text-secondary mb-8 shadow-sm">
                  <Store size={14} /> {t("about.whatWeDo.features.owners.badge")}
                </div>
                <h3 className="text-3xl sm:text-4xl font-black mb-6 text-text-primary">{t(`about.whatWeDo.features.owners.title`)}</h3>
                <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                  {t(`about.whatWeDo.features.owners.desc`)}
                </p>
              </div>
            </motion.div>

            {/* Customers - Tall Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-xl border border-black/5 dark:border-white/10 p-10 sm:p-12 rounded-[2.5rem] hover:border-primary/40 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-black/10 dark:border-white/10 text-xs font-bold text-primary mb-8 shadow-sm">
                  <Users size={14} /> {t("about.whatWeDo.features.customers.badge")}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-6 text-text-primary">{t(`about.whatWeDo.features.customers.title`)}</h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t(`about.whatWeDo.features.customers.desc`)}
                </p>
              </div>
            </motion.div>

            {/* Managers - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 bg-surface/50 backdrop-blur-xl border border-black/5 dark:border-white/10 p-10 sm:p-12 rounded-[2.5rem] hover:bg-surface/80 hover:border-primary/30 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-black/10 dark:border-white/10 text-xs font-bold text-text-secondary mb-8 shadow-sm">
                  <Smartphone size={14} /> {t("about.whatWeDo.features.managers.badge")}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-text-primary">{t(`about.whatWeDo.features.managers.title`)}</h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  {t(`about.whatWeDo.features.managers.desc`)}
                </p>
              </div>
            </motion.div>

            {/* Staff - Wide Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-7 bg-surface/50 backdrop-blur-xl border border-black/5 dark:border-white/10 p-10 sm:p-12 rounded-[2.5rem] hover:bg-surface/80 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-accent/20 transition-all duration-700" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-black/10 dark:border-white/10 text-xs font-bold text-text-secondary mb-8 shadow-sm">
                  <MonitorSmartphone size={14} /> {t("about.whatWeDo.features.staff.badge")}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-text-primary">{t(`about.whatWeDo.features.staff.title`)}</h3>
                <p className="text-base text-text-secondary leading-relaxed max-w-lg">
                  {t(`about.whatWeDo.features.staff.desc`)}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. DNA / Core Values */}
        <section className="mb-32 md:mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text-primary">
              {t("about.values.title")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "simplicity", icon: <Zap className="w-8 h-8" /> },
              { id: "reliability", icon: <ShieldCheck className="w-8 h-8" /> },
              { id: "innovation", icon: <Lightbulb className="w-8 h-8" /> },
              { id: "success", icon: <HeartHandshake className="w-8 h-8" /> }
            ].map((val, i) => (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background/40 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 sm:p-10 flex flex-col hover:-translate-y-2 hover:bg-surface/60 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-surface border border-black/5 dark:border-white/10 flex items-center justify-center text-text-primary mb-8 group-hover:text-primary group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  {val.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-text-primary">{t(`about.values.items.${val.id}.title`)}</h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  {t(`about.values.items.${val.id}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. Final CTA - Massive Glowing Action Block */}
        <section className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary background-animate opacity-100" />
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
            
            <div className="relative bg-black/40 dark:bg-black/60 backdrop-blur-sm p-12 sm:p-16 md:p-24 text-center flex flex-col items-center border border-white/20 rounded-[3rem]">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white tracking-tight drop-shadow-lg">
                {t("about.cta.title")}
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-medium mb-12 max-w-2xl">
                {t("about.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-lg">
                <Link href="#" className="w-full sm:w-auto px-10 py-5 bg-white text-primary font-black rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl text-center text-lg">
                  {t("about.cta.primary")}
                </Link>
                <Link href="#" className="w-full sm:w-auto px-10 py-5 bg-black/20 text-white font-bold rounded-2xl border border-white/30 hover:bg-black/40 hover:border-white/50 transition-all text-center text-lg backdrop-blur-md">
                  {t("about.cta.secondary")}
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
