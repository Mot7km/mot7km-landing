"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Sparkles, Zap, ChevronDown, ShieldCheck, Clock, Layers, Calculator } from "lucide-react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { getPricingPlans, getComparisonCategories, type PricingPlan } from "@/data/pricing";

export default function Pricing() {
  const { t, i18n } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(true);
  const [branches, setBranches] = useState(2);
  const [showComparison, setShowComparison] = useState(false);

  const isRtl = i18n.language === "ar";
  const plans = getPricingPlans(t);
  const comparisonCategories = getComparisonCategories(isRtl);

  // Dynamic ROI calculation metrics
  const hoursSavedPerMonth = branches * 12;
  const annualSavingsRiyal = branches * 6400;

  // Recommended plan based on branches count
  const recommendedPlanId = branches === 1 ? "starter" : branches <= 5 ? "pro" : "enterprise";

  // Helper to compute discounted price
  const getDisplayPrice = (plan: PricingPlan) => {
    if (plan.price === 'Custom') return plan.price;
    const numeric = parseInt(plan.price.replace(',', ''));
    if (isAnnual) {
      return Math.floor(numeric * 0.8).toLocaleString();
    }
    return plan.price;
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/15 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 dark:bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/90 dark:border-white/15 text-slate-800 dark:text-white text-xs font-extrabold mb-6 backdrop-blur-md shadow-sm uppercase tracking-widest">
            <Zap size={14} className="text-primary animate-pulse" />
            <span>{t("pricing.badge")}</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-sm"
          >
            {t("pricing.title1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-emerald-400">{t("pricing.title2")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            {t("pricing.desc")}
          </motion.p>
        </div>

        {/* Interactive ROI & Branch Calculator Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16 bg-white/90 dark:bg-[#0c1626]/90 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shrink-0">
              <Calculator size={20} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                {isRtl ? "حاسبة التوفير والعائد السنوي المتوقع" : "Interactive ROI & Branch Savings Calculator"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                {isRtl ? "حدد عدد الفروع أو الأجهزة للاستكشاف التلقائي للباقة والتوفير" : "Select your branch count to calculate monthly time and money saved"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Slider Column */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex justify-between items-center text-sm font-extrabold">
                <span className="text-slate-800 dark:text-slate-200">
                  {isRtl ? "عدد الفروع / النقاط النشطة:" : "Number of Branches / POS:"}
                </span>
                <span className="text-xl font-black text-primary px-3 py-1 bg-primary/10 rounded-xl border border-primary/20">
                  {branches} {isRtl ? "فروع / أجهزة" : "branches"}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={15}
                value={branches}
                onChange={(e) => setBranches(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>1 فرع</span>
                <span>5 فروع</span>
                <span>10 فروع</span>
                <span>15+ فرع</span>
              </div>
            </div>

            {/* Metrics Output Column */}
            <div className="md:col-span-5 grid grid-cols-2 gap-3 bg-slate-100/90 dark:bg-white/[0.04] p-4 rounded-2xl border border-slate-200/80 dark:border-white/10">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1">
                  <Clock size={13} className="text-primary" />
                  {isRtl ? "توفير وقت شهري" : "Monthly Time Saved"}
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {hoursSavedPerMonth} {isRtl ? "ساعة" : "hrs"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1">
                  <Sparkles size={13} className="text-emerald-500" />
                  {isRtl ? "توفير سنوي متوقع" : "Est. Annual ROI"}
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  +{annualSavingsRiyal.toLocaleString()} {isRtl ? "ج.م" : "EGP"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          <div className="relative flex items-center p-1.5 bg-slate-100 dark:bg-[#090d16] rounded-full border border-slate-200 dark:border-white/15 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                !isAnnual ? 'text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {!isAnnual && (
                <motion.div layoutId="billingToggle" className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full shadow-md shadow-primary/25 -z-10" transition={{ type: "spring", stiffness: 350, damping: 28 }} />
              )}
              {t("pricing.monthly")}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                isAnnual ? 'text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {isAnnual && (
                <motion.div layoutId="billingToggle" className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full shadow-md shadow-primary/25 -z-10" transition={{ type: "spring", stiffness: 350, damping: 28 }} />
              )}
              {t("pricing.annually")}
            </button>
          </div>
          <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold rounded-full flex items-center gap-1.5 shadow-sm animate-pulse">
            <Sparkles size={14} />
            {t("pricing.save")}
          </div>
        </motion.div>

        {/* Main Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20 items-center">
          {plans.map((plan, i) => {
            const isCustom = plan.price === 'Custom';
            const displayPrice = getDisplayPrice(plan);
            const originalPrice = isCustom ? null : parseInt(plan.price.replace(',', ''));
            const isAutoRecommended = plan.id === recommendedPlanId;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative flex flex-col rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 transition-all duration-300 ${plan.color} ${plan.glow} transform-gpu ${
                  plan.popular || isAutoRecommended ? 'lg:-translate-y-6 z-20 lg:scale-105 shadow-xl shadow-primary/20 dark:shadow-[0_0_50px_rgba(22,131,199,0.3)] ring-2 ring-primary' : 'hover:-translate-y-2 z-10 shadow-md hover:shadow-xl'
                }`}
              >
                {(plan.popular || isAutoRecommended) && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-1.5 rounded-full text-xs sm:text-sm font-extrabold shadow-md shadow-primary/30 whitespace-nowrap z-30 tracking-wide">
                    {isAutoRecommended ? (isRtl ? "🎯 الباقة المرشحة لفروعك" : "🎯 Recommended For You") : t("plan.popular")}
                  </div>
                )}
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm min-h-[40px] leading-relaxed font-medium mt-1">{plan.description}</p>
                  
                  <div className="flex items-end gap-2 mt-4">
                    <span className={`font-black text-slate-900 dark:text-white ${isCustom ? 'text-3xl sm:text-4xl' : 'text-5xl sm:text-6xl tracking-tighter'}`}>
                      {displayPrice}
                    </span>
                    {!isCustom && (
                      <div className="flex flex-col pb-2">
                        {isAnnual && originalPrice && (
                          <span className="text-xs text-slate-400 dark:text-slate-500 line-through font-bold mb-0.5">{originalPrice.toLocaleString()}</span>
                        )}
                        <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-bold">{plan.priceNote}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full h-px bg-slate-200 dark:bg-white/10 my-6"></div>

                <div className="flex-1 relative z-10">
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-slate-900 dark:text-slate-100 text-sm leading-relaxed font-extrabold">{feature}</span>
                      </li>
                    ))}
                    {plan.missing.map((feature, j) => (
                      <li key={`missing-${j}`} className="flex items-start gap-3 opacity-60">
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-400 dark:text-slate-500">
                          <X size={14} strokeWidth={2} />
                        </div>
                        <span className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed line-through font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="#demo" passHref className="w-full mt-auto relative z-10">
                  <button 
                    className={`w-full py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                      plan.popular || isAutoRecommended
                        ? 'bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary text-white shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5' 
                        : 'bg-slate-900 hover:bg-black text-white dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border dark:border-white/15'
                    }`}
                  >
                    {t("plan.choose")}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                  </button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Micro Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-4xl mx-auto mb-16 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-extrabold">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100/90 dark:bg-white/[0.04] rounded-full border border-slate-200/80 dark:border-white/10 shadow-sm">
            <Zap size={16} className="text-amber-500 shrink-0" />
            <span>{isRtl ? "تفعيل فوري خلال 5 دقائق" : "Instant 5-Min Setup"}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100/90 dark:bg-white/[0.04] rounded-full border border-slate-200/80 dark:border-white/10 shadow-sm">
            <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
            <span>{isRtl ? "ضمان تجربة بدون مخاطر 14 يوماً" : "14-Day Money Back Guarantee"}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100/90 dark:bg-white/[0.04] rounded-full border border-slate-200/80 dark:border-white/10 shadow-sm">
            <Layers size={16} className="text-primary shrink-0" />
            <span>{isRtl ? "صفر عمولات خفية على المبيعات" : "0% Sales Commission Fee"}</span>
          </div>
        </div>

        {/* Expandable Feature Comparison Matrix Toggle */}
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white font-extrabold text-sm sm:text-base transition-all shadow-md cursor-pointer"
          >
            <span>{showComparison ? (isRtl ? "إخفاء جدول المقارنة الشامل" : "Hide Detailed Comparison Table") : (isRtl ? "عرض جدول المقارنة الشامل للميزات" : "Show Full Feature Comparison Matrix")}</span>
            <ChevronDown size={18} className={`transition-transform duration-300 ${showComparison ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {showComparison && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden mt-8 text-start"
              >
                <div className="bg-white/95 dark:bg-[#0c1626]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/15 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl overflow-x-auto">
                  <table className="w-full text-sm text-slate-800 dark:text-slate-200 border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-black text-base">
                        <th className="py-4 px-4 text-start w-1/3">{isRtl ? "الميزة / الإمكانية" : "Feature / Capability"}</th>
                        <th className="py-4 px-4 text-center w-1/5">{t("p1.name")}</th>
                        <th className="py-4 px-4 text-center w-1/5 text-primary">{t("p3.name")}</th>
                        <th className="py-4 px-4 text-center w-1/5">{t("p5.name")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonCategories.map((cat, catIdx) => (
                        <tr key={catIdx} className="contents">
                          <td colSpan={4} className="py-4 px-4 bg-slate-100/90 dark:bg-white/[0.04] font-black text-slate-900 dark:text-white text-sm rounded-lg mt-4">
                            {cat.category}
                          </td>
                          {cat.items.map((item, itemIdx) => (
                            <tr key={itemIdx} className="border-b border-slate-100 dark:border-white/5 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                              <td className="py-3.5 px-4 font-bold text-slate-700 dark:text-slate-300">{item.name}</td>
                              <td className="py-3.5 px-4 text-center font-bold">
                                {typeof item.starter === "boolean" ? (
                                  item.starter ? <Check size={18} className="text-emerald-500 mx-auto" /> : <X size={18} className="text-slate-300 dark:text-slate-600 mx-auto" />
                                ) : (
                                  <span className="text-slate-800 dark:text-slate-200">{item.starter}</span>
                                )}
                              </td>
                              <td className="py-3.5 px-4 text-center font-extrabold text-primary bg-primary/5 dark:bg-primary/10 rounded-lg">
                                {typeof item.pro === "boolean" ? (
                                  item.pro ? <Check size={18} className="text-emerald-500 mx-auto" /> : <X size={18} className="text-slate-300 dark:text-slate-600 mx-auto" />
                                ) : (
                                  <span>{item.pro}</span>
                                )}
                              </td>
                              <td className="py-3.5 px-4 text-center font-bold">
                                {typeof item.enterprise === "boolean" ? (
                                  item.enterprise ? <Check size={18} className="text-emerald-500 mx-auto" /> : <X size={18} className="text-slate-300 dark:text-slate-600 mx-auto" />
                                ) : (
                                  <span className="text-slate-800 dark:text-slate-200">{item.enterprise}</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Free Plan Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-white/95 dark:bg-[#0c1626]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/15 rounded-2xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-xl dark:shadow-2xl overflow-hidden group transform-gpu">
            
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            {/* Left content */}
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-white text-[11px] sm:text-xs font-extrabold mb-4 sm:mb-6 uppercase tracking-widest shadow-sm">
                <Sparkles size={14} className="text-primary animate-pulse" />
                {t("pf.name")}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 sm:mb-4">
                {t("pf.heading")}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl leading-relaxed font-medium">
                {t("pf.desc")}
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6">
                {[t("pf.f1"), t("pf.f2")].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-extrabold bg-slate-100/90 dark:bg-white/5 px-3.5 sm:px-4 py-2 rounded-full border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
                    <Check size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right block (price + CTA) */}
            <div className="flex flex-col items-center gap-4 shrink-0 w-full md:w-auto mt-4 md:mt-0 relative z-10">
              <div className="text-center">
                <span className="block text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white drop-shadow-sm">
                  {t("plan.free")}
                </span>
                <span className="block text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold mt-1 sm:mt-2 max-w-[200px] mx-auto">
                  {t("pf.freeNote")}
                </span>
              </div>
              <Link href="#demo" passHref className="w-full md:w-auto">
                <button className="w-full md:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-black text-sm sm:text-base transition-all shadow-lg hover:shadow-xl cursor-pointer">
                  {t("pf.cta")}
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}