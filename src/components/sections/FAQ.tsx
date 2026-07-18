"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, CreditCard, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 0, key: "general", icon: HelpCircle, title: t("faq.cat.general") },
    { id: 1, key: "pricing", icon: CreditCard, title: t("faq.cat.pricing") },
    { id: 2, key: "tech", icon: Settings, title: t("faq.cat.tech") },
  ];

  const faqs = {
    general: [
      { q: t("faq.q.g1"), a: t("faq.a.g1") },
      { q: t("faq.q.g2"), a: t("faq.a.g2") },
      { q: t("faq.q.g3"), a: t("faq.a.g3") },
    ],
    pricing: [
      { q: t("faq.q.p1"), a: t("faq.a.p1") },
      { q: t("faq.q.p2"), a: t("faq.a.p2") },
      { q: t("faq.q.p3"), a: t("faq.a.p3") },
    ],
    tech: [
      { q: t("faq.q.t1"), a: t("faq.a.t1") },
      { q: t("faq.q.t2"), a: t("faq.a.t2") },
      { q: t("faq.q.t3"), a: t("faq.a.t3") },
    ],
  };

  const currentFaqs = faqs[categories[activeCategory].key as keyof typeof faqs];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6"
          >
            {t("faq.title1")}{" "}
            <span className="text-gradient bg-accent-gradient">{t("faq.title2")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            {t("faq.desc")}
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(0); // open first question of new category
                }}
                className={`flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(22,131,199,0.3)] border-transparent scale-105"
                    : "bg-surface/50 text-text-muted hover:text-text-primary border border-border/50 hover:border-border hover:bg-surface"
                }`}
              >
                <Icon
                  size={18}
                  className={isActive ? "text-white" : "text-text-muted"}
                />
                {cat.title}
              </motion.button>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory} // forces re-render/animation on category change
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {currentFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-primary/40 bg-surface shadow-[0_0_30px_rgba(22,131,199,0.1)] sm:scale-[1.02] z-10 relative"
                        : "border-border/50 bg-surface/50 hover:border-border hover:bg-surface"
                    }`}
                  >
                    <button
                      className="w-full px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-start outline-none cursor-pointer"
                      onClick={() => toggleOpen(index)}
                    >
                      <span
                        className={`font-bold text-base sm:text-lg pr-4 transition-colors ${
                          isOpen ? "text-primary" : "text-text-primary"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          isOpen
                            ? "bg-primary/10 text-primary rotate-180"
                            : "bg-transparent text-text-muted"
                        }`}
                      >
                        <ChevronDown size={20} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}