"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";

export default function Pricing() {
  const { t, language } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);

  const mainPlans = [
    {
      name: t("p1.name"),
      subtitle: t("p1.sub"),
      description: t("p1.desc"),
      price: "499",
      priceNote: t("plan.month"),
      popular: false,
      color: "bg-surface",
      border: "border-border",
      features: [t("p1.f1"), t("p1.f2"), t("p1.f3"), t("p1.f4"), t("p1.f5")],
      missing: [t("p1.m1"), t("p1.m2")],
    },
    {
      name: t("p3.name"),
      subtitle: t("p3.sub"),
      description: t("p3.desc"),
      price: "1,599",
      priceNote: t("plan.month"),
      popular: true,
      color: "bg-card",
      border: "border-primary",
      features: [t("p3.f1"), t("p3.f2"), t("p3.f3"), t("p3.f4"), t("p3.f5"), t("p3.f6")],
      missing: [t("p3.m1")],
    },
    {
      name: t("p5.name"),
      subtitle: t("p5.sub"),
      description: t("p5.desc"),
      price: "Custom",
      priceNote: t("plan.custom"),
      popular: false,
      color: "bg-surface",
      border: "border-border",
      features: [t("p5.f1"), t("p5.f2"), t("p5.f3"), t("p5.f4"), t("p5.f5")],
      missing: [],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight"
          >
            {t("pricing.title1")} <span className="text-gradient bg-primary-gradient">{t("pricing.title2")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            {t("pricing.desc")}
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <div className="flex items-center p-1 bg-surface rounded-full border border-border shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                !isAnnual 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {language === 'ar' ? 'شهري' : 'Monthly'}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                isAnnual 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {language === 'ar' ? 'سنوي' : 'Annually'}
            </button>
          </div>
          <div className="px-3 py-1 bg-success/10 border border-success/20 text-success text-xs font-bold rounded-full flex items-center gap-1 animate-pulse">
            <Sparkles size={12} />
            {language === 'ar' ? 'وفر 20%' : 'Save 20%'}
          </div>
        </motion.div>

        {/* Main Plans (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-[1200px] mb-16">
          {mainPlans.map((plan, i) => {
            const isCustom = plan.price === 'Custom';
            // Calculate annual price (mock math, e.g. 1599 -> 1299)
            let displayPrice = plan.price;
            if (isAnnual && !isCustom) {
              const numeric = parseInt(plan.price.replace(',', ''));
              displayPrice = Math.floor(numeric * 0.8).toLocaleString();
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, rotateY: plan.popular ? 0 : 2, rotateX: plan.popular ? 0 : -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                className={`relative flex flex-col rounded-[2rem] p-8 border ${plan.border} ${plan.color} ${
                  plan.popular 
                    ? 'shadow-[0_0_50px_rgba(22,131,199,0.15)] md:-translate-y-4 z-10' 
                    : 'shadow-sm hover:shadow-2xl hover:shadow-primary/5'
                } transition-shadow backdrop-blur-sm`}
                style={!plan.popular ? { transformStyle: "preserve-3d" } : undefined}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gradient text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(22,131,199,0.4)] whitespace-nowrap">
                    {t("plan.popular")}
                  </div>
                )}
                
                <div className="mb-6" style={!plan.popular ? { transform: "translateZ(30px)" } : undefined}>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                  <p className="text-text-secondary text-sm mb-6 min-h-[40px] leading-relaxed">{plan.description}</p>
                  
                  <div className="flex items-end gap-2 mb-2">
                    <span className={`font-black text-text-primary ${isCustom ? 'text-3xl' : 'text-5xl tracking-tight'}`}>
                      {displayPrice}
                    </span>
                    {!isCustom && (
                      <div className="flex flex-col pb-1">
                        {isAnnual && (
                          <span className="text-xs text-text-muted line-through mb-0.5">{plan.price}</span>
                        )}
                        <span className="text-text-muted text-sm font-medium">{plan.priceNote}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-6 opacity-50"></div>

                <div className="flex-1" style={!plan.popular ? { transform: "translateZ(20px)" } : undefined}>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-success/15 flex items-center justify-center text-success">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-text-secondary text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                    {plan.missing.map((feature, j) => (
                      <li key={`missing-${j}`} className="flex items-start gap-3 opacity-40 grayscale">
                        <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-error/15 flex items-center justify-center text-error">
                          <X size={14} strokeWidth={3} />
                        </div>
                        <span className="text-text-muted text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="#demo" passHref className="w-full mt-auto">
                  <button 
                    className={`w-full py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 group ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary-dark text-white shadow-[0_0_20px_rgba(22,131,199,0.3)] hover:shadow-[0_0_30px_rgba(22,131,199,0.5)] hover:-translate-y-1' 
                        : 'bg-surface hover:bg-white/5 text-text-primary border border-border hover:border-primary/50'
                    }`}
                    style={!plan.popular ? { transform: "translateZ(40px)" } : undefined}
                  >
                    {t("plan.choose")}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                  </button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Wide Banner for Free Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-surface to-surface/40 border border-border rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-primary/30 transition-colors shadow-xl shadow-black/5">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                {t("pf.name")}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                {language === 'ar' ? 'هل تبحث عن منيو إلكتروني فقط؟' : 'Just looking for a Digital Menu?'}
              </h3>
              <p className="text-text-secondary text-base md:text-lg mb-6 max-w-2xl">
                {t("pf.desc")} {language === 'ar' ? 'ابدأ مجاناً بخطوات بسيطة واعرض منتجاتك لعملائك بطريقة عصرية.' : 'Start for free in simple steps and showcase your products modernly.'}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {[t("pf.f1"), t("pf.f2")].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                    <Check size={16} className="text-success" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3 shrink-0 w-full md:w-auto mt-4 md:mt-0">
              <span className="text-4xl md:text-5xl font-black text-text-primary">{t("plan.free")}</span>
              <span className="text-xs text-text-muted mb-2 max-w-[200px] text-center">
                {language === 'ar' ? 'يتضمن إعلانات بسيطة وعدد محدود من المنتجات' : 'Includes basic ads and limited products'}
              </span>
              <Link href="#demo" passHref className="w-full">
                <button className="w-full md:w-auto px-8 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg">
                  {language === 'ar' ? 'ابدأ مجاناً الآن' : 'Start for Free Now'}
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
