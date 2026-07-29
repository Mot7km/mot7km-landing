"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  Layers, 
  Printer, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function IntegrationsPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [tab, setTab] = useState<"all" | "zatca" | "payment" | "delivery" | "hardware">("all");

  const integrations = [
    {
      id: "zatca",
      category: "zatca",
      name: isRtl ? "هيئة الزكاة والضريبة والجمارك (ZATCA)" : "ZATCA E-Invoicing Phase 2",
      desc: isRtl ? "ربط تلقائي مباشر مع المرحلة الثانية لإصدار الفواتير الضريبية المبسطة ورمز QR المشفر" : "Automatic integration with Phase 2 e-invoicing for simplified tax invoices and encrypted QR codes.",
      badge: isRtl ? "ربط حكومي معتمد" : "Government Approved",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      icon: ShieldCheck,
    },
    {
      id: "mada",
      category: "payment",
      name: isRtl ? "شبكة مدى (mada) و Apple Pay" : "mada Network & Apple Pay",
      desc: isRtl ? "قبول جميع مدفوعات البطاقات البنكية، الدفع اللاتلامسي NFC، و Apple Pay عبر أجهزة POS" : "Accept all bank cards, contactless NFC payments, and Apple Pay on your POS terminal.",
      badge: isRtl ? "دفع إلكتروني" : "E-Payment",
      badgeColor: "bg-primary/10 text-primary border-primary/20",
      icon: CreditCard,
    },
    {
      id: "hungerstation",
      category: "delivery",
      name: isRtl ? "تطبيقات التوصيل (HungerStation / Jahez / ToYou)" : "Delivery Apps Integration",
      desc: isRtl ? "تجميع طلبات تطبيقات التوصيل بشاشة واحدة وتحويلها تلقائياً إلى طابعة المطبخ بدون أدوات يدويّة" : "Aggregate delivery app orders onto one screen with automatic KDS printer routing.",
      badge: isRtl ? "تكامل التوصيل" : "Delivery Sync",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      icon: Truck,
    },
    {
      id: "epson",
      category: "hardware",
      name: isRtl ? "طابعات إبسون و Star Micronics الحرارية" : "Epson & Star Thermal Printers",
      desc: isRtl ? "تعريف سريع عبر شبكة LAN أو البلوتوث لطباعة فواتير المطبخ والكاشير بسرعة فائقة" : "Instant LAN & Bluetooth thermal printer setup for kitchen orders and receipts.",
      badge: isRtl ? "طابعات حرارية" : "Thermal Hardware",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      icon: Printer,
    },
    {
      id: "accounting",
      category: "zatca",
      name: isRtl ? "برامج المحاسبة (Qoyod / QuickBooks)" : "Accounting Software Sync",
      desc: isRtl ? "تصدير اليومية والمبيعات تلقائياً إلى دفتر الحسابات بنهاية كل وردية كاشير" : "Auto-export daily sales ledger and revenue journal entries to your accounting books.",
      badge: isRtl ? "قيود محاسبية" : "Ledger Sync",
      badgeColor: "bg-accent/10 text-accent border-accent/20",
      icon: Layers,
    },
  ];

  const filteredIntegrations = integrations.filter((item) => tab === "all" || item.category === tab);

  return (
    <main className="min-h-screen bg-background text-text-primary overflow-hidden flex flex-col relative">
      {/* Background Lighting Halos */}
      <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top_center,rgba(var(--primary-rgb),0.12),transparent_75%)] pointer-events-none -z-10" />
      <div className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] opacity-40 pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-[30%] -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] opacity-30 pointer-events-none -z-10 animate-pulse animation-delay-2000" />

      {/* Hero Header */}
      <PageHero
        badge={isRtl ? "التكاملات والربط" : "Integrations & Ecosystem"}
        title={isRtl ? "اربط مطعمك مع كافة الأنظمة" : "Seamlessly Connect Your Outlet with"}
        gradientTitle={isRtl ? "في مكان واحد" : "Top Ecosystems"}
        description={
          isRtl
            ? "نظام متحكم يربط سلسًا مع هيئة الزكاة، تطبيقات الدفع ومدفوعات مدى، تطبيقات التوصيل، والطابعات الحرارية."
            : "Mot7km connects out-of-the-box with ZATCA tax, mada payments, delivery apps, and thermal KDS printers."
        }
      />

      <div className="flex-1 pb-24 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto w-full z-10">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {[
            { id: "all", labelAr: "كافة التكاملات", labelEn: "All Integrations" },
            { id: "zatca", labelAr: "الزكاة والمحاسبة", labelEn: "ZATCA & Accounting" },
            { id: "payment", labelAr: "أجهزة الدفع", labelEn: "Payments & mada" },
            { id: "delivery", labelAr: "تطبيقات التوصيل", labelEn: "Delivery Apps" },
            { id: "hardware", labelAr: "الطابعات والأجهزة", labelEn: "Hardware Printers" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setTab(cat.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                tab === cat.id
                  ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                  : "bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
              }`}
            >
              {isRtl ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredIntegrations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                      <Icon size={26} />
                    </div>
                    <span className={`text-xs font-black px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    {isRtl ? "جاهز للتفعيل الفوري" : "Ready for Instant Sync"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partner Callout Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-extrabold mb-4 backdrop-blur-md uppercase tracking-wider">
            <Sparkles size={14} />
            <span>{isRtl ? "انضم لشبكة الشركاء" : "Partner Program"}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black mb-4">
            {isRtl ? "هل تقدم حلاً أو تطبيقاً وترغب بالربط معنا؟" : "Want to Integrate Your Service with Mot7km?"}
          </h3>

          <p className="text-white/90 text-sm sm:text-base font-medium max-w-xl leading-relaxed mb-8">
            {isRtl
              ? "نوفر REST API و Webhooks مخصصة لشركاء التقنية ومطوري التطبيقات لتوفير أفضل تجربة لمطاعم المنطقة."
              : "We provide full REST API and Webhooks access for tech partners and delivery platforms."}
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black text-sm hover:bg-slate-100 hover:scale-105 transition-all shadow-lg cursor-pointer"
          >
            {isRtl ? "تواصل مع فريق الشراكات" : "Contact Partnerships Team"}
          </Link>
        </div>

      </div>

      <Footer />
    </main>
  );
}
