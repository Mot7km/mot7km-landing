"use client";

import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, CupSoda, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function UseCases() {
  const { t } = useLanguage();

  const cases = [
    {
      id: "cafe",
      icon: <Coffee size={32} />,
      title: t("uc.cafe.title"),
      desc: t("uc.cafe.desc"),
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20 hover:border-primary/50",
    },
    {
      id: "restaurant",
      icon: <UtensilsCrossed size={32} />,
      title: t("uc.restaurant.title"),
      desc: t("uc.restaurant.desc"),
      color: "text-secondary",
      bg: "bg-secondary/10",
      border: "border-secondary/20 hover:border-secondary/50",
    },
    {
      id: "juice",
      icon: <CupSoda size={32} />,
      title: t("uc.juice.title"),
      desc: t("uc.juice.desc"),
      color: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/20 hover:border-accent/50",
    },
    {
      id: "gaming",
      icon: <Gamepad2 size={32} />,
      title: t("uc.gaming.title"),
      desc: t("uc.gaming.desc"),
      color: "text-success",
      bg: "bg-success/10",
      border: "border-success/20 hover:border-success/50",
    },
  ];

  return (
    <section id="use-cases" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
          >
            {t("useCases.title1")} <span className="text-gradient bg-secondary-gradient">{t("useCases.title2")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            {t("useCases.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto perspective-[1000px]">
          {cases.map((uc, i) => (
            <motion.div
              key={uc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className={`p-8 rounded-3xl bg-surface border ${uc.border} shadow-sm hover:shadow-2xl hover:shadow-${uc.color.split('-')[1]}/10 transition-shadow group cursor-default`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-start gap-6" style={{ transform: "translateZ(30px)" }}>
                <div className={`w-16 h-16 rounded-2xl ${uc.bg} ${uc.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-inner`}>
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3">{uc.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
