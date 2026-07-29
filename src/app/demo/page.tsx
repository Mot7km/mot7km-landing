"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Users, 
  Zap,
  Star,
  ArrowRight
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import Footer from "@/components/layout/Footer";

export default function DemoPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const benefits = [
    {
      icon: Clock,
      title: isRtl ? "عرض حي سريع خلال 20 دقيقة" : "20-Min Personalized Demo",
      desc: isRtl ? "نستعرض معك الخصائص المطلوبة لنشاطك تحديداً بدون ضياع وقت" : "Tailored to your specific business requirements with zero fluff",
    },
    {
      icon: ShieldCheck,
      title: isRtl ? "تجربة مجانية كاملة 14 يوماً" : "14-Day Free Risk-Free Trial",
      desc: isRtl ? "بدون استخدام بطاقة ائتمان، إعداد فوري وتفعيل مجاني" : "No credit card required, instant setup and free onboarding",
    },
    {
      icon: Zap,
      title: isRtl ? "استشارات تحسين المبيعات" : "Revenue Optimization Advice",
      desc: isRtl ? "نصائح من خبراء التشغيل لزيادة سرعة الكاشير وتقليل الهدر" : "Operational insights to boost checkout speed and cut food waste",
    },
  ];

  const steps = [
    {
      step: "01",
      title: isRtl ? "احجز موعدك" : "Book Your Slot",
      desc: isRtl ? "قم بتعبئة النموذج وحدد الوقت الناسب لك" : "Fill the form and choose your convenient time",
    },
    {
      step: "02",
      title: isRtl ? "عرض حي تفاعلي" : "Interactive Live Demo",
      desc: isRtl ? "يقوم أحد خبراء النظام بشرح كافة الشاشات مباشرة" : "Our product specialist presents live system workflows",
    },
    {
      step: "03",
      title: isRtl ? "ابدأ التجربة المجانية" : "Start Free Trial",
      desc: isRtl ? "استلم بيانات حسابك وابدأ العمل فوراً" : "Get your account credentials and launch immediately",
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
        badge={isRtl ? "عرض حي مجاني" : "Free Live Demo"}
        title={isRtl ? "احجز عرضاً تبيينياً لمشروعك مع" : "Schedule a Live Personalized Demo for"}
        gradientTitle={isRtl ? "خبراء متحكم" : "Mot7km POS"}
        description={
          isRtl
            ? "شاهد كيف يساعد نظام متحكم السحابي أكثر من 1,200 مطعم وكافيه على مضاعفة سرعة الخدمة وتقليل الهدر وتتبع الأرباح لحظة بلحظة."
            : "See how Mot7km cloud POS helps 1,200+ outlets accelerate checkout speed, reduce waste, and audit live sales."
        }
      />

      <div className="flex-1 pb-24 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto w-full z-10">
        
        {/* Split Grid: Video Preview & Benefits (Left) vs Demo Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-24">
          
          {/* Left Column: Interactive Video Showcase + Benefits */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Interactive Demo Video Placeholder Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/15 shadow-2xl bg-slate-900 group cursor-pointer"
            >
              <img
                src="/mockups/web_dashboard.png"
                alt="Mot7km System Demo Preview"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_40px_rgba(22,131,199,0.7)] border-2 border-white/30 mb-4"
                >
                  <Play size={32} className="ml-1 rtl:mr-1 fill-white" />
                </motion.div>
                <span className="text-sm font-black tracking-wider uppercase bg-black/60 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                  {isRtl ? "معاينة سريعة للنظام (1:30 دقيقة)" : "Quick System Walkthrough (1:30 min)"}
                </span>
              </div>
            </motion.div>

            {/* Benefits List */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">
                {isRtl ? "ماذا ستحصل عليه في الجلسة التجريبية؟" : "What Will You Get in Your Session?"}
              </h3>
              
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-sm"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-slate-900 dark:text-white mb-1">
                        {b.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Column: High-converting Demo Form */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-4 text-center lg:text-start">
                <span className="text-xs font-black uppercase tracking-wider text-primary block mb-2">
                  {isRtl ? "احجز مقعدك الآن" : "Reserve Your Session"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {isRtl ? "اطلب العرض التجريبي المباشر" : "Book Your Personal Demo"}
                </h3>
              </div>

              <ContactForm type="demo" />
            </motion.div>
          </div>

        </div>

        {/* 3 Simple Steps Section */}
        <div className="py-16 border-t border-slate-200/80 dark:border-white/10 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
              {isRtl ? "3 خطوات بسيطة لبداية التحول الرقمي" : "3 Easy Steps to Digital Transformation"}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 font-medium text-base">
              {isRtl ? "من طلب العرض وحتى تفعيل الكاشير في مطعمك بنفس اليوم" : "From requesting a demo to running your live cashier in 1 day"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-8 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black text-primary/30 dark:text-primary/40 block mb-4">
                    {s.step}
                  </span>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">
                    {s.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
