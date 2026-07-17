"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pf.name"),
      subtitle: t("pf.sub"),
      description: t("pf.desc"),
      price: t("plan.free"),
      priceNote: "",
      popular: false,
      color: "bg-surface",
      border: "border-border",
      features: [t("pf.f1"), t("pf.f2"), t("pf.f3")],
      missing: [t("pf.m1"), t("pf.m2"), t("pf.m3")],
    },
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
      name: t("p2.name"),
      subtitle: t("p2.sub"),
      description: t("p2.desc"),
      price: "1,599",
      priceNote: t("plan.month"),
      popular: true,
      color: "bg-card",
      border: "border-primary",
      features: [t("p2.f1"), t("p2.f2"), t("p2.f3"), t("p2.f4"), t("p2.f5")],
      missing: [t("p2.m1"), t("p2.m2")],
    },
    {
      name: t("p3.name"),
      subtitle: t("p3.sub"),
      description: t("p3.desc"),
      price: "2,999",
      priceNote: t("plan.month"),
      popular: false,
      color: "bg-surface",
      border: "border-border",
      features: [t("p3.f1"), t("p3.f2"), t("p3.f3"), t("p3.f4"), t("p3.f5"), t("p3.f6")],
      missing: [t("p3.m1")],
    },
    {
      name: t("p4.name"),
      subtitle: t("p4.sub"),
      description: t("p4.desc"),
      price: "4,999",
      priceNote: t("plan.month"),
      popular: false,
      color: "bg-surface",
      border: "border-border",
      features: [t("p4.f1"), t("p4.f2"), t("p4.f3"), t("p4.f4"), t("p4.f5")],
      missing: [],
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
    <section id="pricing" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
          >
            {t("pricing.title1")} <span className="text-gradient bg-primary-gradient">{t("pricing.title2")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            {t("pricing.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-[1200px]">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, rotateY: plan.popular ? 0 : 3, rotateX: plan.popular ? 0 : -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className={`relative flex flex-col rounded-3xl p-8 border ${plan.border} ${plan.color} ${plan.popular ? 'shadow-[0_0_40px_rgba(22,131,199,0.2)] md:-translate-y-4 z-10' : 'shadow-sm hover:shadow-2xl hover:shadow-primary/5'} transition-shadow`}
              style={!plan.popular ? { transformStyle: "preserve-3d" } : undefined}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gradient text-white px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(22,131,199,0.5)]">
                  {t("plan.popular")}
                </div>
              )}
              
              <div className="mb-6 text-center" style={!plan.popular ? { transform: "translateZ(30px)" } : undefined}>
                <h3 className="text-2xl font-bold text-text-primary mb-1">{plan.name}</h3>
                <p className="text-sm text-text-muted mb-4">{plan.subtitle}</p>
                <p className="text-text-secondary text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`font-bold text-text-primary ${plan.price === 'Custom' ? 'text-3xl' : 'text-4xl'}`}>{plan.price}</span>
                  <span className="text-text-muted font-medium">{plan.priceNote}</span>
                </div>
              </div>

              <div className="w-full h-px bg-border my-6"></div>

              <div className="flex-1" style={!plan.popular ? { transform: "translateZ(20px)" } : undefined}>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center text-success">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.missing.map((feature, j) => (
                    <li key={`missing-${j}`} className="flex items-start gap-3 opacity-50">
                      <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-error/10 flex items-center justify-center text-error">
                        <X size={14} strokeWidth={3} />
                      </div>
                      <span className="text-text-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all mt-auto ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary-dark text-white shadow-[0_0_20px_rgba(22,131,199,0.4)] hover:shadow-[0_0_30px_rgba(22,131,199,0.6)] hover:-translate-y-1' 
                    : 'bg-transparent hover:bg-surface text-text-primary border-2 border-border hover:border-text-muted'
                }`}
                style={!plan.popular ? { transform: "translateZ(40px)" } : undefined}
              >
                {t("plan.choose")}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
