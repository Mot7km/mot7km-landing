"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { FeaturePageData } from "@/data/featurePages";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface FeatureHeroProps {
  data: FeaturePageData;
}

export default function FeatureHero({ data }: FeatureHeroProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[150px] rounded-full pointer-events-none opacity-20" />
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] blur-[120px] rounded-full pointer-events-none opacity-30 ${data.glowColor}`} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Back Link */}
        <Link href="/#features" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8 md:mb-12 font-medium">
          {isRtl ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          <span>{isRtl ? "العودة للمميزات" : "Back to Features"}</span>
        </Link>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-white/10 text-white text-xs font-bold mb-6 backdrop-blur-md shadow-lg tracking-widest ${data.themeColor}`}
            >
              <span>{t(data.hero.badgeKey)}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-6 leading-[1.1] drop-shadow-sm pb-2"
            >
              {t(data.hero.titleKey)}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              {t(data.hero.subtitleKey)}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="#demo"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-background font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                {t("nav.cta")}
              </Link>
              <Link
                href="/#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface border border-white/10 text-white font-bold text-base transition-all duration-300 hover:bg-white/5 hover:border-white/20"
              >
                {t("nav.pricing")}
              </Link>
            </motion.div>
          </div>

          {/* Hero Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end perspective-1000"
          >
            <div className={`relative ${data.hero.frameType === 'mobile' ? 'w-[280px] sm:w-[320px] aspect-[1/2.1]' : 'w-full max-w-2xl aspect-[16/10]'} rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out`}>
              
              {data.hero.frameType === 'mobile' ? (
                <div className="absolute inset-0 bg-[#0c0c0c] rounded-[3rem] border-[8px] border-surface/50 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-surface/50 rounded-b-2xl z-20 backdrop-blur-md" />
                  <Image src={data.hero.image} alt="Feature Mockup" fill className="object-cover object-top" unoptimized priority />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none z-30" />
                </div>
              ) : (
                <div className="absolute inset-0 bg-[#0c0c0c] rounded-2xl border border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
                  <div className="h-8 bg-surface/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 gap-2 shrink-0 z-20 relative">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                  </div>
                  <div className="relative flex-1">
                    <Image src={data.hero.image} alt="Feature Mockup" fill className="object-cover object-top" unoptimized priority />
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-30" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
