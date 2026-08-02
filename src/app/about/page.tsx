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
  CheckCircle2,
  Code2,
  Server,
  Globe,
  Quote,
  Mail
} from "lucide-react";
import Footer from "@/components/layout/Footer";
import SubpageHeader from "@/components/layout/SubpageHeader";

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

      <div className="flex-1 pt-4 pb-24 px-4 sm:px-6 md:px-8 relative z-10 w-full max-w-[1400px] mx-auto">
        
        {/* Navigation */}
        <SubpageHeader backHref="/" backLabel={t("notFound.goHome")} />

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
            <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-center relative z-10 gap-y-8 md:gap-0">
              {['offline', 'qr', 'sync', 'platform'].map((stat, i) => (
                <div key={stat} className="flex flex-col items-center justify-center text-center px-4 w-full relative">
                  {/* Explicit separator for desktop to fix RTL divide-x bug */}
                  {i !== 0 && (
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 rtl:left-auto rtl:right-0 w-px h-20 bg-white/10" />
                  )}
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{t(`about.stats.${stat}.value`)}</div>
                  <div className="text-sm md:text-base text-white/60 font-medium uppercase tracking-wider max-w-[200px] leading-snug">{t(`about.stats.${stat}.label`)}</div>
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
              <div className="relative z-10 flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-black/10 dark:border-white/10 text-xs font-bold text-text-secondary mb-8 shadow-sm">
                  <Store size={14} /> {t("about.whatWeDo.features.owners.badge")}
                </div>
                <h3 className="text-3xl sm:text-4xl font-black mb-6 text-text-primary">{t(`about.whatWeDo.features.owners.title`)}</h3>
                <p className="text-lg text-text-secondary leading-relaxed max-w-lg mb-8">
                  {t(`about.whatWeDo.features.owners.desc`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {Array.isArray(t("about.whatWeDo.features.owners.subFeatures", { returnObjects: true })) && (t("about.whatWeDo.features.owners.subFeatures", { returnObjects: true }) as string[]).map((feature, i) => (
                    <span key={i} className="px-4 py-1.5 bg-background border border-black/5 dark:border-white/10 rounded-full text-xs font-bold text-text-primary shadow-sm hover:border-primary/30 transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative z-10 mt-auto pt-6 border-t border-black/5 dark:border-white/10">
                <Link href="/features#owners" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors group/btn">
                  {t("about.whatWeDo.learnMore")} 
                  <ArrowLeft className="w-4 h-4 rotate-180 rtl:rotate-0 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
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
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-black/10 dark:border-white/10 text-xs font-bold text-primary mb-8 shadow-sm">
                  <Users size={14} /> {t("about.whatWeDo.features.customers.badge")}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-6 text-text-primary">{t(`about.whatWeDo.features.customers.title`)}</h3>
                <p className="text-base text-text-secondary leading-relaxed mb-8">
                  {t(`about.whatWeDo.features.customers.desc`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {Array.isArray(t("about.whatWeDo.features.customers.subFeatures", { returnObjects: true })) && (t("about.whatWeDo.features.customers.subFeatures", { returnObjects: true }) as string[]).map((feature, i) => (
                    <span key={i} className="px-4 py-1.5 bg-background border border-black/5 dark:border-white/10 rounded-full text-xs font-bold text-text-primary shadow-sm hover:border-primary/30 transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/10">
                <Link href="/features#customers" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors group/btn">
                  {t("about.whatWeDo.learnMore")} 
                  <ArrowLeft className="w-4 h-4 rotate-180 rtl:rotate-0 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
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
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-black/10 dark:border-white/10 text-xs font-bold text-text-secondary mb-8 shadow-sm">
                  <Smartphone size={14} /> {t("about.whatWeDo.features.managers.badge")}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-text-primary">{t(`about.whatWeDo.features.managers.title`)}</h3>
                <p className="text-base text-text-secondary leading-relaxed mb-8">
                  {t(`about.whatWeDo.features.managers.desc`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {Array.isArray(t("about.whatWeDo.features.managers.subFeatures", { returnObjects: true })) && (t("about.whatWeDo.features.managers.subFeatures", { returnObjects: true }) as string[]).map((feature, i) => (
                    <span key={i} className="px-4 py-1.5 bg-background border border-black/5 dark:border-white/10 rounded-full text-xs font-bold text-text-primary shadow-sm hover:border-primary/30 transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/10">
                <Link href="/features#managers" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors group/btn">
                  {t("about.whatWeDo.learnMore")} 
                  <ArrowLeft className="w-4 h-4 rotate-180 rtl:rotate-0 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
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
              <div className="relative z-10 flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-black/10 dark:border-white/10 text-xs font-bold text-text-secondary mb-8 shadow-sm">
                  <MonitorSmartphone size={14} /> {t("about.whatWeDo.features.staff.badge")}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-text-primary">{t(`about.whatWeDo.features.staff.title`)}</h3>
                <p className="text-base text-text-secondary leading-relaxed max-w-lg mb-8">
                  {t(`about.whatWeDo.features.staff.desc`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {Array.isArray(t("about.whatWeDo.features.staff.subFeatures", { returnObjects: true })) && (t("about.whatWeDo.features.staff.subFeatures", { returnObjects: true }) as string[]).map((feature, i) => (
                    <span key={i} className="px-4 py-1.5 bg-background border border-black/5 dark:border-white/10 rounded-full text-xs font-bold text-text-primary shadow-sm hover:border-primary/30 transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative z-10 mt-auto pt-6 border-t border-black/5 dark:border-white/10">
                <Link href="/features#staff" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors group/btn">
                  {t("about.whatWeDo.learnMore")} 
                  <ArrowLeft className="w-4 h-4 rotate-180 rtl:rotate-0 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
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

        {/* 7. Leadership & Founders - World-Class UI/UX Edition */}
        <section className="mb-32 md:mb-40 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 uppercase tracking-widest backdrop-blur-md">
              <Users size={14} />
              <span>{t("about.team.title")}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-primary mb-6">
              {t("about.team.subtitle")}
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-normal">
              {t("about.team.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "ibrahim",
                icon: <Code2 className="w-5 h-5 text-primary" />,
                badge: "CTO & Mobile / Desktop",
                gradient: "from-primary/20 via-accent/10 to-transparent",
                borderHover: "hover:border-primary/50",
                avatarGradient: "from-primary to-accent",
                ringColor: "ring-primary/30",
                socials: { linkedin: "#", github: "#", mail: "mailto:ibrahim@mot7km.store" }
              },
              {
                id: "amr",
                icon: <Server className="w-5 h-5 text-accent" />,
                badge: "Backend Lead & Infra",
                gradient: "from-accent/20 via-primary/10 to-transparent",
                borderHover: "hover:border-accent/50",
                avatarGradient: "from-accent to-emerald-500",
                ringColor: "ring-accent/30",
                socials: { linkedin: "#", github: "#", mail: "mailto:amr@mot7km.store" }
              },
              {
                id: "ahmed",
                icon: <Globe className="w-5 h-5 text-blue-500" />,
                badge: "Web Lead & UX",
                gradient: "from-blue-500/20 via-primary/10 to-transparent",
                borderHover: "hover:border-blue-500/50",
                avatarGradient: "from-blue-500 to-indigo-600",
                ringColor: "ring-blue-500/30",
                socials: { linkedin: "#", github: "#", mail: "mailto:ahmed@mot7km.store" }
              }
            ].map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`bg-surface/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-500 group ${member.borderHover} hover:-translate-y-2.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.15)]`}
              >
                {/* Background Ambient Blur */}
                <div className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl ${member.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Top Row: Avatar & Specialization Badge */}
                  <div className="flex items-start justify-between mb-8">
                    {/* Founder Avatar Monogram with Role Overlay */}
                    <div className="relative group/avatar">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.avatarGradient} p-0.5 shadow-lg group-hover/avatar:scale-105 transition-transform duration-300 ring-4 ${member.ringColor}`}>
                        <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center font-black text-2xl tracking-wider text-text-primary shadow-inner">
                          {t(`about.team.members.${member.id}.initials`)}
                        </div>
                      </div>
                      {/* Overlaid Badge Icon */}
                      <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-surface border border-black/10 dark:border-white/15 shadow-md text-text-primary backdrop-blur-md">
                        {member.icon}
                      </div>
                    </div>

                    <span className="px-3.5 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-black/5 dark:border-white/10 text-[11px] font-bold text-text-secondary uppercase tracking-wider shadow-sm">
                      {member.badge}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-2xl sm:text-3xl font-black text-text-primary mb-1 tracking-tight group-hover:text-primary transition-colors">
                    {t(`about.team.members.${member.id}.name`)}
                  </h3>
                  <div className="text-primary font-bold text-sm sm:text-base mb-6 tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>{t(`about.team.members.${member.id}.role`)}</span>
                  </div>

                  {/* Personal Engineering Philosophy Quote */}
                  <div className="mb-6 p-4 rounded-2xl bg-background/60 border border-black/5 dark:border-white/5 relative overflow-hidden backdrop-blur-sm">
                    <Quote className="w-8 h-8 text-primary/10 absolute -top-1 -right-1 rtl:-left-1 rtl:right-auto" />
                    <p className="text-xs sm:text-sm font-medium text-text-secondary italic leading-relaxed relative z-10">
                      "{t(`about.team.members.${member.id}.quote`)}"
                    </p>
                  </div>

                  {/* Bio Description */}
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal mb-8 opacity-90 flex-1">
                    {t(`about.team.members.${member.id}.bio`)}
                  </p>

                  {/* Expertise / Skills Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {Array.isArray(t(`about.team.members.${member.id}.skills`, { returnObjects: true })) && 
                      (t(`about.team.members.${member.id}.skills`, { returnObjects: true }) as string[]).map((skill, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 bg-background/80 border border-black/5 dark:border-white/10 rounded-lg text-xs font-semibold text-text-primary shadow-xs">
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Footer Bar: Social Links & Status */}
                <div className="relative z-10 pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-background border border-black/5 dark:border-white/10 text-text-secondary hover:text-primary hover:border-primary/30 transition-all hover:scale-110 shadow-xs" title="LinkedIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                      </svg>
                    </a>
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-background border border-black/5 dark:border-white/10 text-text-secondary hover:text-primary hover:border-primary/30 transition-all hover:scale-110 shadow-xs" title="GitHub">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                      </svg>
                    </a>
                    <a href={member.socials.mail} className="p-2 rounded-xl bg-background border border-black/5 dark:border-white/10 text-text-secondary hover:text-primary hover:border-primary/30 transition-all hover:scale-110 shadow-xs" title="Email">
                      <Mail size={16} />
                    </a>
                  </div>

                  <span className="text-[11px] font-bold text-text-secondary/60 uppercase tracking-widest">
                    Mot7km Founder
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 8. Final CTA - Massive Glowing Action Block */}
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
