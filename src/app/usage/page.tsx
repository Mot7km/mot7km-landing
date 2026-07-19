"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function AcceptableUsePolicy() {
  const { t } = useTranslation();

  const sections = Array.from({ length: 6 }, (_, i) => ({
    title: t(`usage.sections.s${i + 1}.title`),
    content: t(`usage.sections.s${i + 1}.content`),
  }));

  return (
    <main className="min-h-screen max-w-screen bg-background text-text-primary overflow-x-hidden flex flex-col">
      <div className="flex-1 pt-12 pb-20 px-4 md:px-8 relative z-10">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-medium px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
          >
            <ArrowLeft size={20} className="rtl:rotate-180" />
            <span>{t("notFound.goHome")}</span>
          </Link>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
        <div className="absolute top-40 -left-64 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-20 animate-blob pointer-events-none -z-10" />
        <div className="absolute top-40 -right-64 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-20 animate-blob animation-delay-2000 pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6 leading-tight">
              {t("usage.title")}
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-4">
              {t("usage.desc")}
            </p>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
              <p className="text-text-secondary/80 text-sm font-medium">
                {t("usage.lastUpdated")}
              </p>
            </div>
          </motion.div>

          <div className="space-y-8 bg-surface/50 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-3xl p-6 md:p-12 shadow-2xl shadow-black/5 dark:shadow-white/5 relative">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                className="group"
              >
                <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">
                  {section.title}
                </h2>
                <div className="pl-4 border-l-2 border-primary/20 rtl:pl-0 rtl:pr-4 rtl:border-l-0 rtl:border-r-2 group-hover:border-primary transition-colors duration-300">
                  <p className="text-text-secondary leading-relaxed md:text-lg">
                    {section.content}
                  </p>
                </div>
                {index < sections.length - 1 && (
                  <div className="mt-8 border-b border-black/5 dark:border-white/5 w-full transition-colors group-hover:border-primary/20" />
                )}
              </motion.section>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
