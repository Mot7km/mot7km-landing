"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
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
  HeartHandshake
} from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen max-w-screen bg-background text-text-primary overflow-x-hidden flex flex-col">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-40 -left-64 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-20 animate-blob pointer-events-none -z-10" />
      <div className="absolute top-40 -right-64 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-20 animate-blob animation-delay-2000 pointer-events-none -z-10" />
      
      <div className="flex-1 pt-12 pb-20 px-4 md:px-8 relative z-10">
        
        {/* Back Button */}
        <div className="max-w-6xl mx-auto mb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-medium px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
          >
            <ArrowLeft size={20} className="rtl:rotate-180" />
            <span>{t("notFound.goHome")}</span>
          </Link>
        </div>

        {/* 1. Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6 leading-tight">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-medium">
              {t("about.hero.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* 2. Our Story */}
        <section className="max-w-6xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h4 className="text-primary font-bold tracking-wider uppercase text-sm">{t("about.story.title")}</h4>
              <h2 className="text-3xl md:text-4xl font-bold">{t("about.story.subtitle")}</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t("about.story.content")}
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-3xl bg-surface/50 backdrop-blur-xl border border-black/5 dark:border-white/5 overflow-hidden flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-full h-full border border-primary/20 rounded-2xl flex items-center justify-center bg-background/50 backdrop-blur-md shadow-2xl">
                 <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent opacity-80">
                   MOT7KM
                 </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. Mission & Vision */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface/60 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-primary w-7 h-7" />
              </div>
              <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">{t("about.mission.title")}</h4>
              <h3 className="text-2xl font-bold mb-4">{t("about.mission.subtitle")}</h3>
              <p className="text-text-secondary leading-relaxed">
                {t("about.mission.content")}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface/60 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 group md:translate-y-8"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-accent font-bold tracking-wider uppercase text-sm mb-2">{t("about.vision.title")}</h4>
              <h3 className="text-2xl font-bold mb-4">{t("about.vision.subtitle")}</h3>
              <p className="text-text-secondary leading-relaxed">
                {t("about.vision.content")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. What We Do (Platform Capabilities) */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">{t("about.whatWeDo.title")}</h4>
            <h2 className="text-3xl md:text-5xl font-bold">{t("about.whatWeDo.subtitle")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "owners", icon: <Store className="w-6 h-6" /> },
              { id: "managers", icon: <Smartphone className="w-6 h-6" /> },
              { id: "staff", icon: <MonitorSmartphone className="w-6 h-6" /> },
              { id: "customers", icon: <Users className="w-6 h-6" /> }
            ].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface/40 backdrop-blur-lg border border-black/5 dark:border-white/5 p-6 rounded-3xl hover:bg-surface/80 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-text-primary group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{t(`about.whatWeDo.features.${item.id}.title`)}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`about.whatWeDo.features.${item.id}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Core Values */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">{t("about.values.title")}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "simplicity", icon: <Zap className="w-8 h-8" /> },
              { id: "reliability", icon: <ShieldCheck className="w-8 h-8" /> },
              { id: "innovation", icon: <Lightbulb className="w-8 h-8" /> },
              { id: "success", icon: <HeartHandshake className="w-8 h-8" /> }
            ].map((val, i) => (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary mb-2 shadow-inner">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold">{t(`about.values.items.${val.id}.title`)}</h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                  {t(`about.values.items.${val.id}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. Final CTA */}
        <section className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] bg-gradient-to-r from-primary to-accent p-[2px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative bg-background/95 backdrop-blur-3xl rounded-[2.4rem] p-12 md:p-20 text-center flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t("about.cta.title")}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
                <Link href="#" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                  {t("about.cta.primary")}
                </Link>
                <Link href="#" className="w-full sm:w-auto px-8 py-4 bg-transparent text-text-primary font-bold rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
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
