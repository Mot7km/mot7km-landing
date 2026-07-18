"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface SectionDividerProps {
  titleKey?: string;
}

export default function SectionDivider({ titleKey }: SectionDividerProps) {
  const { t } = useTranslation();
  const text = titleKey ? t(titleKey) : null;

  return (
    <div className="w-full flex items-center justify-center py-6 md:py-8 overflow-hidden relative bg-transparent">
      <div className="w-full flex items-center justify-center gap-3 md:gap-5 relative z-10 px-4 md:px-0">
        
        {/* Left Line */}
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-primary/20 to-primary/50 relative overflow-hidden rounded-full">
          {/* Continuous Laser Pulse (Center to Edge, Edge to Center) */}
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(22,131,199,1)]"
          />
        </div>

        {/* Left Glowing Circle */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-4 h-4 rounded-full border-[2.5px] border-primary bg-transparent shadow-[0_0_15px_rgba(22,131,199,0.8)] flex-shrink-0"
        />

        {/* Title (Optional) */}
        {text && (
          <motion.h3
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary px-4 tracking-wide whitespace-nowrap sm:whitespace-nowrap drop-shadow-lg flex-shrink-0"
          >
            {text}
          </motion.h3>
        )}

        {/* Right Glowing Circle */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-4 h-4 rounded-full border-[2.5px] border-accent bg-transparent shadow-[0_0_15px_rgba(6,182,212,0.8)] flex-shrink-0"
        />

        {/* Right Line */}
        <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-accent/20 to-accent/50 relative overflow-hidden rounded-full">
          {/* Continuous Laser Pulse (Center to Edge, Edge to Center) */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_15px_rgba(6,182,212,1)]"
          />
        </div>

      </div>
    </div>
  );
}