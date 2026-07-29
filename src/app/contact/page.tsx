"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const contactInfo = [
    {
      icon: Mail,
      title: isRtl ? "البريد الإلكتروني" : "Email Us",
      value: "support@mot7km.store",
      sub: isRtl ? "رد سريع خلال 4 ساعات" : "Average response in 4 hrs",
      href: "mailto:support@mot7km.store",
    },
    {
      icon: Phone,
      title: isRtl ? "المبيعات والدعم" : "Phone & WhatsApp",
      value: "+966 50 123 4567",
      sub: isRtl ? "الأحد - الخميس (9am - 9pm)" : "Sun - Thu (9am - 9pm)",
      href: "tel:+966501234567",
    },
    {
      icon: MapPin,
      title: isRtl ? "المقر الرئيسي" : "Head Office",
      value: isRtl ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      sub: isRtl ? "طريق الملك فهد، برج الأعمال" : "King Fahd Road, Business Tower",
      href: "#",
    },
  ];

  const faqs = [
    {
      q: isRtl ? "كم من الوقت يستغرق تركيب وتشغيل النظام في المطعم؟" : "How long does setup & installation take?",
      a: isRtl ? "يستغرق الإعداد والتطبيق الفعلي في مطعمك أقل من 5 دقائق، ويمكن الاستمرار فوراً في الكاشير والمنيو." : "Complete setup takes under 5 minutes. You can start cashiering right away.",
    },
    {
      q: isRtl ? "هل يحتاج النظام أجهزة كاشير خاصة أم يعمل على أجهزتي؟" : "Does Mot7km work on existing hardware?",
      a: isRtl ? "يعمل على أي جهاز (آيباد، أندرويد، ويندوز، طابعات حرارية) بدون الحاجة لشراء أجهزة مكلفة." : "Yes! It runs on iPad, Android, Windows, and standard thermal printers.",
    },
    {
      q: isRtl ? "ماذا يحدث عند انقطاع إنترنت المطعم؟" : "What happens if internet goes down?",
      a: isRtl ? "النظام يعمل 100% بدون إنترنت (Offline-First) ويستمر بتسجيل الفواتير والطباعة ثم يزامن تلقائياً." : "100% Offline-First engine ensures uninterrupted orders and thermal printing.",
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
        badge={isRtl ? "تواصل معنا" : "Contact Us"}
        title={isRtl ? "نحن هنا لمساعدتك في نمو" : "We are here to help grow your"}
        gradientTitle={isRtl ? "مشروعك التجاري" : "Business"}
        description={
          isRtl
            ? "هل لديك استفسار عن النظام، الأسعار، أو ترغب في دعم فني؟ فريق متحكم متواجد 24/7 لمساعدتك."
            : "Have a question about Mot7km POS, pricing, or need technical support? Our team is available 24/7."
        }
      />

      <div className="flex-1 pb-24 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto w-full z-10">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={i}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1">
                  {info.title}
                </h3>
                <p className="text-base font-extrabold text-primary mb-2">
                  {info.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {info.sub}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Split Section: Contact Form + Quick FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          <div className="lg:col-span-6">
            <div className="mb-6">
              <span className="text-xs font-black uppercase tracking-wider text-primary block mb-2">
                {isRtl ? "راسلنا مباشرة" : "Send a Message"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {isRtl ? "أرسل رسالتك وسنرد فوراً" : "Get in Touch With Our Team"}
              </h3>
            </div>
            <ContactForm type="contact" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="mb-6">
              <span className="text-xs font-black uppercase tracking-wider text-primary block mb-2">
                {isRtl ? "إجابات سريعة" : "Quick Answers"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {isRtl ? "الأسئلة الأكثر شيوعاً" : "Frequently Asked Questions"}
              </h3>
            </div>

            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-sm"
              >
                <h4 className="text-base font-black text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <MessageSquare size={16} className="text-primary shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
