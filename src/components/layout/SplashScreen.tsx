"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const { i18n } = useTranslation();
  const language = i18n.language;

  const words = language === 'ar' 
    ? ["كاشير سحابي...", "منيو رقمي ذكي...", "إدارة كاملة...", "مُتَحَكِّم"]
    : ["Cloud POS...", "Smart QR Menu...", "Full Management...", "Mot7km"];

  useEffect(() => {
    // Prevent scrolling while splash is visible
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  useEffect(() => {
    // Word sequence timing
    if (currentWord < words.length - 1) {
      const timer = setTimeout(() => {
        setCurrentWord(prev => prev + 1);
      }, 700); // 700ms per word for rapid feeling
      return () => clearTimeout(timer);
    } else {
      // After the last word (Mot7km) shows, wait a bit then hide splash
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentWord, words.length]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background before:absolute before:inset-0 before:bg-brand-gradient before:opacity-5 before:pointer-events-none"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="mb-8"
          >
            <img 
              src="/assets/logo/mot7km_logo%20(2).png" 
              alt="Mot7km Logo" 
              className="h-28 w-auto drop-shadow-[0_0_25px_rgba(22,131,199,0.3)]"
            />
          </motion.div>

          {/* Animated Words */}
          <div className="h-16 flex items-center justify-center overflow-hidden w-full px-4">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentWord}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-center font-bold tracking-tight transition-colors duration-300 ${
                  currentWord === words.length - 1 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-5xl md:text-7xl drop-shadow-lg' 
                    : 'text-text-secondary text-2xl md:text-4xl'
                }`}
              >
                {words[currentWord]}
              </motion.h2>
            </AnimatePresence>
          </div>
          
          {/* Subtle loading bar at the bottom */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: (words.length * 0.7 + 1.5), ease: "linear" }}
            className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_15px_rgba(22,131,199,0.8)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}