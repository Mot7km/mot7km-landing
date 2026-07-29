"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Search, 
  BookOpen, 
  Store, 
  QrCode, 
  WifiOff, 
  ShieldCheck, 
  Printer, 
  Layers, 
  ChevronRight,
  ArrowRight
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function DocsPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [search, setSearch] = useState("");

  const categories = [
    {
      icon: Store,
      title: isRtl ? "إعداد الكاشير و نقاط البيع POS" : "POS & Cashier Setup",
      desc: isRtl ? "خطوات ربط أجهزة الكاشير، فتح الوردية، وطباعة الفواتير" : "Setting up terminals, shift open/close, & printers",
      articlesCount: 12,
    },
    {
      icon: QrCode,
      title: isRtl ? "إدارة المنيو الإلكتروني QR" : "QR Digital Menu & Tables",
      desc: isRtl ? "رفع المنتجات، الصور، تعديل الأسعار، وتوليد كود الطاولات" : "Product catalog, pricing, high-res images, & QR codes",
      articlesCount: 8,
    },
    {
      icon: WifiOff,
      title: isRtl ? "تقنية العمل بدون إنترنت Offline POS" : "100% Offline Resilience Engine",
      desc: isRtl ? "كيف يعمل الكاشير عند انقطاع الشبكة وكيفية المزامنة الآلية" : "How local storage & background syncing work during outages",
      articlesCount: 5,
    },
    {
      icon: ShieldCheck,
      title: isRtl ? "الفوترة الإلكترونية (الزكاة والدخل ZATCA)" : "ZATCA E-Invoicing Phase 2",
      desc: isRtl ? "ربط فواتير المطعم بالجهات الضريبية وإصدار رمز QR المشفر" : "Tax compliance, encrypted QR generation, & audit logs",
      articlesCount: 6,
    },
    {
      icon: Printer,
      title: isRtl ? "إدارة الطابعات وشاشات المطبخ KDS" : "Printers & Kitchen Display KDS",
      desc: isRtl ? "توصيل طابعات المطبخ الحرارية وإدارة أوامر الطاولات" : "Thermal printer LAN routing & KDS order status screens",
      articlesCount: 9,
    },
    {
      icon: Layers,
      title: isRtl ? "المخزون وتكاليف الوجبات Recipe Costing" : "Inventory & Recipe Costing Audit",
      desc: isRtl ? "ربط جرامات البن والمكونات بالطلبات لحساب الهدر لحظياً" : "Gram-level deduction, wastage tracking, & supplier POs",
      articlesCount: 10,
    },
  ];

  const popularArticles = [
    isRtl ? "كيف تقوم بفتح وإغلاق وردية الكاشير وحساب العجز والزيادة؟" : "How to open and close a POS cashier shift?",
    isRtl ? "طريقة ربط طابعة المطبخ الحرارية عبر شبكة الواي فاي LAN" : "How to connect a thermal KDS printer via LAN Wi-Fi?",
    isRtl ? "تعديل أسعار الوجبات وإضافة نكهات جديدة بالمنيو" : "Updating menu item prices and adding flavor modifiers",
    isRtl ? "خطوات تفعيل الربط التلقائي مع هيئة الزكاة والدخل ZATCA" : "Activating automatic ZATCA Phase 2 compliance integration",
  ];

  return (
    <main className="min-h-screen bg-background text-text-primary overflow-hidden flex flex-col relative">
      {/* Background Lighting Halos */}
      <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top_center,rgba(var(--primary-rgb),0.12),transparent_75%)] pointer-events-none -z-10" />
      <div className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] opacity-40 pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-[30%] -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] opacity-30 pointer-events-none -z-10 animate-pulse animation-delay-2000" />

      {/* Hero Header */}
      <PageHero
        badge={isRtl ? "مركز التوثيق والمساعدة" : "Help Center & Documentation"}
        title={isRtl ? "كيف يمكننا مساعدتك في استخدام" : "How Can We Help You Master"}
        gradientTitle={isRtl ? "متحكم؟" : "Mot7km POS?"}
        description={
          isRtl
            ? "ابحث في مئات المقالات التعليمية والشروحات المصورة لإدارة الكاشير، المنيو، المخزون، والتقارير."
            : "Search through step-by-step operational guides, video tutorials, and POS troubleshooting."
        }
      />

      <div className="flex-1 pb-24 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto w-full z-10">
        
        {/* Large Interactive Search Bar */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative p-2 rounded-2xl bg-white/95 dark:bg-[#0c1626]/95 border border-slate-200/90 dark:border-white/15 shadow-xl flex items-center focus-within:border-primary transition-all">
            <Search size={22} className="ml-3 rtl:ml-0 rtl:mr-3 text-slate-400 shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={isRtl ? "ابحث عن موضوع (مثلاً: ربط الطابعة، فتح الوردية، إضافة منتج)..." : "Search articles (e.g. Printer setup, shift close, QR menu)..."}
              className="w-full bg-transparent border-none outline-none text-sm sm:text-base text-slate-900 dark:text-white px-3 py-3 placeholder:text-slate-400 font-medium"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 text-center sm:text-start">
            {isRtl ? "تصفح حسب القسم" : "Browse by Topic"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-8 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                      </div>
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">
                        {cat.articlesCount} {isRtl ? "مقال" : "articles"}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-extrabold text-primary group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                    <span>{isRtl ? "عرض جميع المقالات" : "Read all guides"}</span>
                    <ArrowRight size={14} className="rtl:rotate-180" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Popular Articles Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/95 dark:bg-[#0c1626]/95 border border-slate-200/90 dark:border-white/15 shadow-xl">
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <BookOpen size={20} className="text-primary" />
            <span>{isRtl ? "المقالات الأكثر قراءة وتصفحاً" : "Most Popular Operational Guides"}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularArticles.map((art, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 hover:border-primary/40 transition-colors flex items-center justify-between cursor-pointer group"
              >
                <span className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                  {art}
                </span>
                <ChevronRight size={16} className="text-slate-400 group-hover:text-primary rtl:rotate-180 shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
