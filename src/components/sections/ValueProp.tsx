"use client";

import { motion } from "framer-motion";
import { TrendingUp, PieChart, Users, LineChart } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ValueProp() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                {t("value.title1")} <br/>
                <span className="text-gradient bg-accent-gradient">{t("value.title2")}</span>
              </h2>
              <p className="text-lg text-text-secondary mb-10 leading-relaxed">
                {t("value.desc")}
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { q: t("val.q1"), icon: <TrendingUp className="text-primary" /> },
                { q: t("val.q2"), icon: <PieChart className="text-secondary" /> },
                { q: t("val.q3"), icon: <LineChart className="text-accent" /> },
                { q: t("val.q4"), icon: <Users className="text-success" /> },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-lg font-medium text-text-primary">{item.q}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Content (Abstract Chart/Dashboard) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 relative w-full"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-surface rounded-3xl shadow-xl border border-border p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-text-muted text-sm font-medium mb-1">{t("val.stat.sales")}</h4>
                  <div className="text-3xl font-bold text-text-primary">12,450</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium flex items-center gap-1">
                  <TrendingUp size={16} />
                  +14.5%
                </div>
              </div>

              {/* Abstract Bar Chart */}
              <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 mt-8">
                {[40, 60, 30, 80, 50, 90, 70].map((height, i) => (
                  <div key={i} className="w-full flex flex-col justify-end items-center gap-2 h-full">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className={`w-full rounded-t-sm md:rounded-t-md ${i === 5 ? 'bg-primary' : 'bg-primary/20'}`}
                    ></motion.div>
                  </div>
                ))}
              </div>
              
              {/* Abstract Pie Chart / Stats */}
              <div className="h-24 flex gap-4 mt-4">
                <div className="flex-1 bg-card rounded-xl p-4 flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full border-4 border-secondary border-r-transparent animate-spin-slow"></div>
                   <div>
                     <div className="text-xs text-text-muted">{t("val.stat.top")}</div>
                     <div className="font-bold text-text-primary">{t("val.stat.topItem")}</div>
                   </div>
                </div>
                <div className="flex-1 bg-card rounded-xl p-4 flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                     <Users size={24} />
                   </div>
                   <div>
                     <div className="text-xs text-text-muted">{t("val.stat.customers")}</div>
                     <div className="font-bold text-text-primary">142</div>
                   </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
