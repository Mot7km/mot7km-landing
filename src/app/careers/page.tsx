"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  Users, 
  Zap, 
  Heart, 
  ArrowRight 
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function CareersPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const perks = [
    {
      icon: Zap,
      title: isRtl ? "بيئة عمل مرنة وهجين" : "Flexible & Hybrid Work",
      desc: isRtl ? "إمكانية العمل عن بُعد أو من مكاتبنا الرئيسية مع إجازات مرنة" : "Remote-friendly environment with flexible hours and PTO.",
    },
    {
      icon: Heart,
      title: isRtl ? "تأمين صحي ومميزات شاملة" : "Full Medical & Health Benefits",
      desc: isRtl ? "تغطية طبية شاملة لك ولدائرتك العائلية ومكافآت أداء سنوية" : "Comprehensive health coverage and annual performance bonuses.",
    },
    {
      icon: Users,
      title: isRtl ? "نمو وظيفي وتدريب مستمر" : "Growth & Training Budget",
      desc: isRtl ? "ميزانية خاصة للمؤتمرات والكتب والدورات لتطوير مهاراتك" : "Personal learning stipends for courses, books, & conferences.",
    },
  ];

  const jobs = [
    {
      title: isRtl ? "مهندس حلول سحابيةSenior Full-Stack Engineer (Next.js & Node)" : "Senior Full-Stack Engineer (Next.js & Node)",
      department: isRtl ? "الهندسة والبرمجيات" : "Engineering",
      location: isRtl ? "الرياض / عن بُعد" : "Riyadh / Remote",
      type: isRtl ? "دوام كامل" : "Full-Time",
    },
    {
      title: isRtl ? "مدير مبيعات حلول الـ POS للمطاعم" : "Enterprise POS Sales Executive",
      department: isRtl ? "المبيعات والنمو" : "Sales & Growth",
      location: isRtl ? "الرياض، السعودية" : "Riyadh, KSA",
      type: isRtl ? "دوام كامل" : "Full-Time",
    },
    {
      title: isRtl ? "أخصائي دعم فني وتشغيل ميداني" : "Field POS Technical Support Specialist",
      department: isRtl ? "نجاح العملاء" : "Customer Success",
      location: isRtl ? "جدة / الرياض" : "Jeddah / Riyadh",
      type: isRtl ? "دوام كامل" : "Full-Time",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-text-primary overflow-hidden flex flex-col relative">
      {/* Background Lighting Halos */}
      <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top_center,rgba(var(--primary-rgb),0.12),transparent_75%)] pointer-events-none -z-10" />
      <div className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] opacity-40 pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-[30%] -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] opacity-30 pointer-events-none -z-10 animate-pulse animation-delay-2000" />

      {/* Hero Header */}
      <PageHero
        badge={isRtl ? "انضم لفريقنا" : "Join Our Team"}
        title={isRtl ? "ساهم في صياغة مستقبل تقنيات" : "Build the Future of Cloud POS with"}
        gradientTitle={isRtl ? "المطاعم والكافيهات" : "Mot7km"}
        description={
          isRtl
            ? "نبحث عن العقول المبدعة والمهندسين الشغوفين للانضمام إلى فريق متحكم وبناء تقنيات تخدم آلاف المطاعم يومياً."
            : "We are hiring passionate engineers, product designers, and sales leaders to shape food tech."
        }
      />

      <div className="flex-1 pb-24 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto w-full z-10">
        
        {/* Culture / Perks Grid */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-8 text-center sm:text-start">
            {isRtl ? "لماذا العمل في متحكم؟" : "Why Work at Mot7km?"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-lg"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>

                  <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                    {p.title}
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Open Positions List */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-8 text-center sm:text-start">
            {isRtl ? "الوظائف المتاحة حالياً" : "Open Positions"}
          </h3>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-md hover:border-primary/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {job.department}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin size={12} />
                      {job.location}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {job.title}
                  </h4>
                </div>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-black text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 font-bold text-xs sm:text-sm transition-all shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{isRtl ? "قدم الآن" : "Apply Now"}</span>
                  <ArrowRight size={14} className="rtl:rotate-180" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
