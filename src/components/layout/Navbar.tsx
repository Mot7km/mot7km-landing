"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Moon, Sun, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      } else {
        setScrollProgress(0);
      }

      // Detect active section
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { id: "product", name: t("nav.product"), href: "#product" },
    { id: "features", name: t("nav.features"), href: "#features" },
    { id: "use-cases", name: t("nav.useCases"), href: "#use-cases" },
    { id: "how-it-works", name: t("nav.howItWorks"), href: "#how-it-works" },
    { id: "roadmap", name: t("nav.roadmap"), href: "#roadmap" },
    { id: "pricing", name: t("pricing.title1"), href: "#pricing" },
    { id: "faq", name: t("nav.faq"), href: "#faq" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto flex items-center justify-between transition-all duration-300 rounded-full border border-white/10 shadow-2xl bg-surface/80 backdrop-blur-xl max-w-6xl w-full relative overflow-hidden ${
          isScrolled ? "p-2" : "p-3"
        }`}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 pl-2">
          <img
            src="/assets/logo/mot7km_logo%20(2).png"
            alt="Mot7km Logo"
            className="h-8 w-auto"
          />
          <span className="font-bold text-lg tracking-tight text-white hidden md:block">
            Mot7km
          </span>
        </Link>

        {/* Center: Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id || (!activeSection && link.id === "product");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors z-10 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Controls & CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2 pr-1 shrink-0">
          {/* Theme Toggle – with cursor-pointer */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {mounted && (
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            )}
          </motion.button>

          {/* Language Toggle – with cursor-pointer */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-semibold text-white/60 hover:text-white transition-colors uppercase tracking-wider rounded-full hover:bg-white/5 cursor-pointer"
          >
            {language === "en" ? "AR" : "EN"}
          </motion.button>

          {/* Desktop CTA */}
          <Link
            href="#demo"
            className="hidden sm:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-light hover:to-accent text-white font-bold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(22,131,199,0.3)] hover:shadow-[0_0_25px_rgba(22,131,199,0.5)] hover:-translate-y-0.5 cursor-pointer"
          >
            {t("nav.cta")}
          </Link>

          {/* Compact mobile CTA */}
          <Link
            href="#demo"
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-primary to-primary-light text-white shadow-[0_0_12px_rgba(22,131,199,0.3)] cursor-pointer"
          >
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white rounded-full hover:bg-white/5 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-primary-light to-accent shadow-[0_0_10px_rgba(22,131,199,0.8)]"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden pointer-events-auto absolute top-20 left-4 right-4 bg-surface/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-2xl z-50"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <hr className="border-white/10" />
              <Link
                href="#demo"
                className="w-full text-center py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold transition-all shadow-[0_0_15px_rgba(22,131,199,0.3)] cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.cta")}
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}