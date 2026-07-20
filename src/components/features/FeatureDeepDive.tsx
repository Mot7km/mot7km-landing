"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FeaturePageData } from "@/data/featurePages";
import { CheckCircle2 } from "lucide-react";

interface FeatureDeepDiveProps {
  data: FeaturePageData;
}

export default function FeatureDeepDive({ data }: FeatureDeepDiveProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {data.deepDives.map((dive, idx) => {
          const isImageLeft = dive.imagePosition === "left";
          
          return (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32 last:mb-0 ${isImageLeft ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: isRtl ? (isImageLeft ? -40 : 40) : (isImageLeft ? 40 : -40) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 text-center lg:text-start"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-white/10 to-transparent border border-white/10 ${data.themeColor} mx-auto lg:mx-0`}>
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  {t(dive.titleKey)}
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                  {t(dive.descKey)}
                </p>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: isRtl ? (isImageLeft ? 40 : -40) : (isImageLeft ? -40 : 40) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 relative perspective-1000"
              >
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ${data.glowColor} blur-[120px] rounded-full pointer-events-none opacity-40`} />
                
                <div className="relative aspect-[4/3] bg-[#0c0c0c] rounded-2xl border border-white/10 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                  <Image 
                    src={dive.image} 
                    alt={t(dive.titleKey)} 
                    fill 
                    className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" 
                    unoptimized 
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-30" />
                </div>
              </motion.div>

            </div>
          );
        })}
        
      </div>
    </section>
  );
}
