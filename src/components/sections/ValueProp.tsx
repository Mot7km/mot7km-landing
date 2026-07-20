"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ValueProp() {
  const { t } = useTranslation();

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Immersive Background Orbs - repositioned for better coverage */}
      <div className="absolute top-1/2 right-0 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-primary/5 blur-[80px] sm:blur-[100px] lg:blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-accent/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 max-w-xl w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4 sm:mb-6">
                <Sparkles size={16} className="w-4 h-4" />
                <span>{t("value.badge") || "How Mot7km Works"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                {t("value.title1")} <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
                  {t("value.title2")}
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 sm:mb-10 leading-relaxed max-w-lg">
                {t("value.desc")}
              </p>
            </motion.div>
          </div>

          {/* Ultra-Premium Visual Content (Abstract Glass Dashboard) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex-1 relative w-full perspective-[1000px]"
          >
            {/* Glass Panel - responsive sizing */}
            <div className="relative w-full bg-surface/40 backdrop-blur-2xl rounded-2xl sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/10 p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 overflow-hidden transform-style-3d min-h-[400px]">
              
              {/* Internal Glow - adjusted sizes */}
              <div className="absolute -top-20 sm:-top-32 -right-20 sm:-right-32 w-40 sm:w-64 h-40 sm:h-64 bg-primary/30 blur-[40px] sm:blur-[60px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-20 sm:-bottom-32 -left-20 sm:-left-32 w-40 sm:w-64 h-40 sm:h-64 bg-accent/30 blur-[40px] sm:blur-[60px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-4 h-full justify-center">
                
                {/* Point 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-card/60 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex items-start gap-4 hover:bg-card/80 transition-colors hover:border-primary/30 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0 shadow-[0_0_15px_rgba(22,131,199,0.3)] group-hover:scale-110 transition-transform">
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8a16.36 16.36 0 0 0-4.32-3.13"/><path d="M18.88 4.88a16.36 16.36 0 0 0-13.76 0"/><path d="M2.12 8a16.36 16.36 0 0 0 4.32 3.13"/><path d="M12 20h.01"/><path d="M2 2l20 20"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{t("value.points.p1.title")}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{t("value.points.p1.desc")}</p>
                  </div>
                </motion.div>

                {/* Point 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-card/60 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex items-start gap-4 hover:bg-card/80 transition-colors hover:border-secondary/30 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary flex-shrink-0 shadow-[0_0_15px_rgba(15,118,110,0.3)] group-hover:scale-110 transition-transform">
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-secondary transition-colors">{t("value.points.p2.title")}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{t("value.points.p2.desc")}</p>
                  </div>
                </motion.div>

                {/* Point 3 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="bg-card/60 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex items-start gap-4 hover:bg-card/80 transition-colors hover:border-success/30 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-success/20 border border-success/30 flex items-center justify-center text-success flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-success transition-colors">{t("value.points.p3.title")}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{t("value.points.p3.desc")}</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}