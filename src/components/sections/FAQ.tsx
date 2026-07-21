"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  HelpCircle, 
  CreditCard, 
  ShieldCheck, 
  Monitor, 
  QrCode, 
  Sparkles 
} from "lucide-react";
import { useTranslation } from "react-i18next";
import SegmentedTabbar from "@/components/ui/SegmentedTabbar";

export default function FAQ() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 0, key: "general", icon: HelpCircle, title: t("faq.cat.general") },
    { id: 1, key: "pos", icon: Monitor, title: t("faq.cat.pos") },
    { id: 2, key: "pricing", icon: CreditCard, title: t("faq.cat.pricing") },
    { id: 3, key: "qr", icon: QrCode, title: t("faq.cat.qr") },
    { id: 4, key: "tech", icon: ShieldCheck, title: t("faq.cat.tech") },
  ];

  const faqs = {
    general: [
      { q: t("faq.q.g1"), a: t("faq.a.g1") },
      { q: t("faq.q.g2"), a: t("faq.a.g2") },
      { q: t("faq.q.g3"), a: t("faq.a.g3") },
      { q: t("faq.q.g4"), a: t("faq.a.g4") },
    ],
    pos: [
      { q: t("faq.q.pos1"), a: t("faq.a.pos1") },
      { q: t("faq.q.pos2"), a: t("faq.a.pos2") },
      { q: t("faq.q.pos3"), a: t("faq.a.pos3") },
      { q: t("faq.q.pos4"), a: t("faq.a.pos4") },
    ],
    pricing: [
      { q: t("faq.q.p1"), a: t("faq.a.p1") },
      { q: t("faq.q.p2"), a: t("faq.a.p2") },
      { q: t("faq.q.p3"), a: t("faq.a.p3") },
      { q: t("faq.q.p4"), a: t("faq.a.p4") },
    ],
    qr: [
      { q: t("faq.q.qr1"), a: t("faq.a.qr1") },
      { q: t("faq.q.qr2"), a: t("faq.a.qr2") },
      { q: t("faq.q.qr3"), a: t("faq.a.qr3") },
      { q: t("faq.q.qr4"), a: t("faq.a.qr4") },
    ],
    tech: [
      { q: t("faq.q.t1"), a: t("faq.a.t1") },
      { q: t("faq.q.t2"), a: t("faq.a.t2") },
      { q: t("faq.q.t3"), a: t("faq.a.t3") },
      { q: t("faq.q.t4"), a: t("faq.a.t4") },
    ],
  };

  const currentCategoryKey = categories[activeCategory]?.key as keyof typeof faqs;
  const currentFaqs = faqs[currentCategoryKey] || [];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-bold mb-4 shadow-sm"
          >
            <Sparkles size={16} />
            <span>{t("faq.badge") || "الأسئلة الشائعة"}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tight"
          >
            {t("faq.title1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
              {t("faq.title2")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed"
          >
            {t("faq.desc")}
          </motion.p>
        </div>

        {/* Category Tab Bar using Reusable SegmentedTabbar */}
        <SegmentedTabbar
          sticky={false}
          tabs={categories.map((cat) => {
            const Icon = cat.icon;
            return {
              id: cat.id,
              title: cat.title,
              icon: <Icon size={18} />
            };
          })}
          activeTab={activeCategory}
          onChange={(id) => {
            setActiveCategory(id as number);
            setOpenIndex(0);
          }}
          layoutId="activeFaqCategoryTab"
        />

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory} // forces re-render/animation on category change
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
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
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-primary/40 bg-surface/90 shadow-[0_10px_30px_rgba(0,0,0,0.3)] sm:scale-[1.01] z-10 relative"
                        : "border-white/10 bg-surface/40 hover:border-white/20 hover:bg-surface/60"
                    }`}
                  >
                    <button
                      className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-start outline-none cursor-pointer"
                      onClick={() => toggleOpen(index)}
                    >
                      <span
                        className={`font-bold text-sm sm:text-base md:text-lg pr-4 rtl:pr-0 rtl:pl-4 transition-colors ${
                          isOpen ? "text-primary" : "text-text-primary"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          isOpen
                            ? "bg-primary/20 text-primary rotate-180"
                            : "bg-surface/80 border border-white/10 text-text-secondary"
                        }`}
                      >
                        <ChevronDown size={18} />
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
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed border-t border-white/5 pt-4">
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