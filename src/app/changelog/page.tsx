"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Sparkles, Zap, Wrench, Filter } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import TimelineItem, { TimelineItemProps } from "@/components/ui/TimelineItem";
import Footer from "@/components/layout/Footer";

export default function ChangelogPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [filter, setFilter] = useState<"all" | "feature" | "improvement" | "fix">("all");

  const changelogData: Omit<TimelineItemProps, "index">[] = [
    {
      version: "2.4.0",
      date: isRtl ? "24 يوليو 2026" : "July 24, 2026",
      title: isRtl ? "إعادة إطلاق المحرك السحابي للـ POS بتقنية Offline-First 2.0" : "Offline-First Engine 2.0 & ZATCA Phase 2 Sync",
      description: isRtl
        ? "تحديث شامل لمحرك الكاشير للعمل بشكل كامل 100% بدون إنترنت مع مزامنة فورية خلفية عند استعادة الاتصال."
        : "Complete POS engine overhaul to support 100% offline resilience and instant background syncing with ZATCA server.",
      type: "feature",
      changes: isRtl
        ? [
            "دعم حفظ 50,000 فاتورة محلياً على جهاز الكاشير في حالة انقطاع الإنترنت التام.",
            "تسريع طباعة الفواتير الحرارية لتصل إلى أقل من 0.8 ثانية بالفاتورة.",
            "تحسين المزامنة التلقائية مع الهيئة العامة للزكاة والدخل (ZATCA Phase 2).",
          ]
        : [
            "Store up to 50,000 offline thermal invoices locally.",
            "Accelerated print speeds down to < 0.8s per bill.",
            "ZATCA Phase 2 compliance and background automatic sync.",
          ],
    },
    {
      version: "2.3.1",
      date: isRtl ? "10 يوليو 2026" : "July 10, 2026",
      title: isRtl ? "منيو QR التفاعلي: دعم الطلب المباشر ودفع الطاولة" : "App-less Interactive QR Menu Table Order & Pay",
      description: isRtl
        ? "إمكانية إرسال الطلبات مباشرة من طاولة العميل إلى شاشة المطبخ KDS ودفع الحساب أونلاين دون تحميل أي تطبيق."
        : "Direct table ordering sent straight to Kitchen KDS displays with instant Apple Pay and card checkout without app download.",
      type: "feature",
      changes: isRtl
        ? [
            "توليد رموز QR مخصصة لكل طاولة أو جلسة لعب.",
            "إضافة صور المأكولات والمشروبات بدقة عالية وتخصيص المكونات والإضافات.",
            "دعم خيارات الدفع الإلكتروني المباشر (Apple Pay / mada).",
          ]
        : [
            "Unique QR code generation per table/session.",
            "High-res item images and toppings customization.",
            "Direct online payments (Apple Pay / mada).",
          ],
    },
    {
      version: "2.2.0",
      date: isRtl ? "15 يونيو 2026" : "June 15, 2026",
      title: isRtl ? "حساب هدر الطعام وتكلفة المكونات (Recipe Costing)" : "Gram-level Recipe Costing & Inventory Audit",
      description: isRtl
        ? "متابعة دقيقة لاستخدام الجرامات من البن والمكونات وخصمها تلقائياً عند بيع كل كلاسيك أو وجبة."
        : "Accurate gram-level ingredient deduction upon each sale to monitor waste and track exact meal gross margin.",
      type: "improvement",
      changes: isRtl
        ? [
            "حساب تكلفة الكوب أو الوجبة تلقائياً بالجرام.",
            "تنبيهات فورية عند وصول مخزون أي عنصر للحد الأدنى.",
            "تقارير الهدر وتحديد الانحراف المعياري بين المخزون الفعلي والمسجل.",
          ]
        : [
            "Automatic meal/drink cost per gram calculation.",
            "Low stock instant alerts for managers.",
            "Waste reports matching physical vs recorded inventory.",
          ],
    },
    {
      version: "2.1.2",
      date: isRtl ? "01 مايو 2026" : "May 01, 2026",
      title: isRtl ? "إصلاحات تحسين السرعة واستقرار الطابعات الحرارية" : "Thermal Printer Drivers & Stability Fixes",
      description: isRtl
        ? "تحسين الاتصال الشبكي بطابعات المطبخ والكاشير (Epson / Star Micronics) وحل مشكلة قطع الورق."
        : "Enhanced LAN & Bluetooth connection stability for Epson and Star Micronics kitchen printers with auto-cutter fix.",
      type: "fix",
      changes: isRtl
        ? [
            "معالجة تأخير الاستجابة في الطابعات المربوطة بالشبكة المحلية LAN.",
            "إصلاح خلل تجزئة الفواتير الكبيرة للطاولات.",
          ]
        : [
            "Resolved delay in LAN network printers.",
            "Fixed large order table split invoice bug.",
          ],
    },
  ];

  const filteredData = changelogData.filter((item) => filter === "all" || item.type === filter);

  return (
    <main className="min-h-screen bg-background text-text-primary overflow-hidden flex flex-col relative">
      {/* Background Lighting Halos */}
      <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top_center,rgba(var(--primary-rgb),0.12),transparent_75%)] pointer-events-none -z-10" />
      <div className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] opacity-40 pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-[30%] -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] opacity-30 pointer-events-none -z-10 animate-pulse animation-delay-2000" />

      {/* Hero Header */}
      <PageHero
        badge={isRtl ? "سجل التحديثات" : "Product Changelog"}
        title={isRtl ? "ما الجديد في منصة" : "What's New in"}
        gradientTitle={isRtl ? "متحكم؟" : "Mot7km POS"}
        description={
          isRtl
            ? "نتابع تطوير النظام يومياً لإضافة ميزات جديدة، زيادة سرعة الكاشير، وتعزيز الأمان لتلبية كافة تطلعاتكم."
            : "Continuous updates, new features, speed improvements, and fixes shipped to keep your restaurant ahead."
        }
      />

      <div className="flex-1 pb-24 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto w-full z-10">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <span className="text-xs font-black uppercase text-slate-500 dark:text-slate-400 flex items-center gap-1.5 ml-2 rtl:ml-0 rtl:mr-2">
            <Filter size={14} />
            {isRtl ? "تصفية التحديثات:" : "Filter Updates:"}
          </span>

          {[
            { id: "all", labelAr: "الكل", labelEn: "All" },
            { id: "feature", labelAr: "ميزات جديدة", labelEn: "Features" },
            { id: "improvement", labelAr: "تحسينات", labelEn: "Improvements" },
            { id: "fix", labelAr: "إصلاحات", labelEn: "Fixes" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === cat.id
                  ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                  : "bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
              }`}
            >
              {isRtl ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {filteredData.map((item, idx) => (
            <TimelineItem key={item.version} {...item} index={idx} />
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
