"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FeaturePageData } from "@/data/featurePages";
import { 
  Settings, PieChart, Users, Link2, 
  WifiOff, Printer, ShieldCheck, Zap, Smartphone,
  Bell, CheckCircle2, TrendingUp, Clock,
  Image as ImageIcon, Star, Search, MousePointerClick
} from "lucide-react";

const IconMap: Record<string, any> = {
  Settings, PieChart, Users, Link2,
  WifiOff, Printer, ShieldCheck, Zap, Smartphone,
  Bell, CheckCircle2, TrendingUp, Clock,
  ImageIcon, Star, Search, MousePointerClick
};

interface FeatureCapabilitiesProps {
  data: FeaturePageData;
}

export default function FeatureCapabilities({ data }: FeatureCapabilitiesProps) {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-surface/30 border-y border-white/5 relative z-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl text-white font-medium leading-relaxed"
          >
            {t(data.overviewKey)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {data.capabilities.map((cap, idx) => {
            const Icon = IconMap[cap.icon] || Settings;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-surface/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-surface/80 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:border-white/20"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-white/10 to-transparent border border-white/10 ${data.themeColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-colors">
                  {t(cap.titleKey)}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t(cap.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
