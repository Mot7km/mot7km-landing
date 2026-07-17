"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkles, Zap } from "lucide-react";
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
      color: "from-surface/80 to-surface/30",
      border: "border-white/10",
      glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
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
      color: "from-primary/20 via-primary/10 to-surface/40",
      border: "border-primary/50",
      glow: "shadow-[0_0_50px_rgba(22,131,199,0.2)] hover:shadow-[0_0_70px_rgba(22,131,199,0.3)]",
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
      color: "from-surface/80 to-surface/30",
      border: "border-white/10",
      glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
      features: [t("p5.f1"), t("p5.f2"), t("p5.f3"), t("p5.f4"), t("p5.f5")],
      missing: [],
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      {/* Immersive Background Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/5 text-text-secondary text-sm font-bold mb-6 backdrop-blur-md shadow-lg">
            <Zap size={16} className="text-primary" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 tracking-tight"
          >
            {t("pricing.title1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">{t("pricing.title2")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            {t("pricing.desc")}
          </motion.p>
        </div>

        {/* Animated Billing Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <div className="relative flex items-center p-1.5 bg-surface/50 backdrop-blur-xl rounded-full border border-white/10 shadow-inner">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-text-muted hover:text-text-primary'}`}
            >
              {!isAnnual && (
                <motion.div layoutId="billingToggle" className="absolute inset-0 bg-primary rounded-full shadow-[0_0_15px_rgba(22,131,199,0.5)] -z-10" />
              )}
              {language === 'ar' ? 'شهري' : 'Monthly'}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 ${isAnnual ? 'text-white' : 'text-text-muted hover:text-text-primary'}`}
            >
              {isAnnual && (
                <motion.div layoutId="billingToggle" className="absolute inset-0 bg-primary rounded-full shadow-[0_0_15px_rgba(22,131,199,0.5)] -z-10" />
              )}
              {language === 'ar' ? 'سنوي' : 'Annually'}
            </button>
          </div>
          <div className="px-4 py-1.5 bg-gradient-to-r from-success/20 to-success/10 border border-success/30 text-success text-xs font-bold rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,197,94,0.2)] animate-pulse">
            <Sparkles size={14} />
            {language === 'ar' ? 'وفر 20% سنوياً' : 'Save 20% Annually'}
          </div>
        </motion.div>

        {/* Main Plans (3 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20 items-center">
          {mainPlans.map((plan, i) => {
            const isCustom = plan.price === 'Custom';
            let displayPrice = plan.price;
            if (isAnnual && !isCustom) {
              const numeric = parseInt(plan.price.replace(',', ''));
              displayPrice = Math.floor(numeric * 0.8).toLocaleString();
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                className={`relative flex flex-col rounded-[2.5rem] p-8 md:p-10 border backdrop-blur-2xl transition-all duration-500 bg-gradient-to-b ${plan.color} ${plan.border} ${plan.glow} ${
                  plan.popular ? 'lg:-translate-y-6 z-20 scale-105' : 'hover:-translate-y-2 z-10'
                }`}
              >
                {/* Internal subtle highlight */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, white, transparent)' }} />

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(22,131,199,0.5)] whitespace-nowrap z-30">
                    {t("plan.popular")}
                  </div>
                )}
                
                <div className="mb-8 relative z-10">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                  <p className="text-text-secondary text-sm mb-6 min-h-[40px] leading-relaxed">{plan.description}</p>
                  
                  <div className="flex items-end gap-2 mb-2">
                    <span className={`font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 ${isCustom ? 'text-4xl' : 'text-6xl tracking-tighter'}`}>
                      {displayPrice}
                    </span>
                    {!isCustom && (
                      <div className="flex flex-col pb-2">
                        {isAnnual && (
                          <span className="text-xs text-text-muted line-through mb-0.5">{plan.price}</span>
                        )}
                        <span className="text-text-muted text-sm font-medium">{plan.priceNote}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>

                <div className="flex-1 relative z-10">
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-text-primary/90 text-sm leading-relaxed font-medium">{feature}</span>
                      </li>
                    ))}
                    {plan.missing.map((feature, j) => (
                      <li key={`missing-${j}`} className="flex items-start gap-3 opacity-40">
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                          <X size={14} strokeWidth={2} />
                        </div>
                        <span className="text-text-muted text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="#demo" passHref className="w-full mt-auto relative z-10">
                  <button 
                    className={`w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 group ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_10px_20px_-10px_rgba(22,131,199,0.6)] hover:shadow-[0_15px_30px_-10px_rgba(22,131,199,0.8)] hover:-translate-y-1' 
                        : 'bg-surface/50 hover:bg-white/10 text-text-primary border border-white/10 hover:border-white/30 backdrop-blur-md'
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

        {/* Ultra-Premium Free Plan Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-surface/80 to-surface/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 hover:border-white/20 transition-all duration-500 shadow-2xl overflow-hidden group">
            
            {/* Animated Background Highlight inside banner */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold mb-6 uppercase tracking-widest shadow-inner">
                <Sparkles size={14} className="text-primary" />
                {t("pf.name")}
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-4">
                {language === 'ar' ? 'هل تبحث عن منيو إلكتروني فقط؟' : 'Just looking for a Digital Menu?'}
              </h3>
              <p className="text-text-secondary text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
                {t("pf.desc")} {language === 'ar' ? 'ابدأ مجاناً بخطوات بسيطة واعرض منتجاتك لعملائك بطريقة عصرية تليق بعلامتك التجارية.' : 'Start for free in simple steps and showcase your products modernly.'}
              </p>
              
              <div className="flex flex-wrap gap-6">
                {[t("pf.f1"), t("pf.f2")].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-text-primary/90 font-bold bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md">
                    <Check size={16} className="text-success" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 shrink-0 w-full md:w-auto mt-4 md:mt-0 relative z-10">
              <div className="text-center">
                <span className="block text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-lg">{t("plan.free")}</span>
                <span className="block text-sm text-text-muted mt-2 max-w-[200px] mx-auto">
                  {language === 'ar' ? 'مدى الحياة، متضمن إعلانات بسيطة' : 'Free forever, includes basic ads'}
                </span>
              </div>
              <Link href="#demo" passHref className="w-full">
                <button className="w-full md:w-auto px-10 py-4 rounded-2xl bg-white text-black font-extrabold text-base hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
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
