"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun, ArrowRight, User, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const isSignedIn = true;

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

  useEffect(() => {
    if (!isLangMenuOpen) return;
    const closeMenu = () => setIsLangMenuOpen(false);
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, [isLangMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const toggleLangMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLangMenuOpen(!isLangMenuOpen);
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
        className={`pointer-events-auto flex items-center justify-between transition-all duration-300 rounded-full border border-black/10 dark:border-white/10 shadow-lg bg-surface/85 backdrop-blur-xl max-w-6xl w-full relative ${
          isScrolled ? "p-2" : "p-3"
        }`}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 pl-2 group">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 blur-md rounded-full group-hover:bg-primary/30 dark:group-hover:bg-primary/40 transition-all duration-500 scale-125" />
            <img
              src="/assets/logo/mot7km_logo%20(2).png"
              alt="Mot7km Logo"
              className="h-8 w-auto relative z-10 group-hover:rotate-12 transition-transform duration-300"
            />
          </div>
          <span className="font-extrabold text-lg tracking-tight text-text-primary hidden md:block group-hover:translate-x-0.5 transition-transform duration-300">
            Mot7km
          </span>
        </Link>

        {/* Center: Nav Links */}
        <nav 
          className="hidden lg:flex items-center gap-1"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id || (!activeSection && link.id === "product");
            return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
                  isActive ? "text-primary dark:text-primary-light" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {hoveredLink === link.id && !isActive && (
                  <motion.div
                    layoutId="hoverNavIndicator"
                    className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full -z-20"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/90 dark:bg-primary/20 border border-primary/15 dark:border-primary/50 rounded-full shadow-sm shadow-primary/10 dark:shadow-[0_0_15px_rgba(22,131,199,0.4)] -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Controls & CTA */}
        <div className="flex items-center gap-2 pr-1 shrink-0">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="group p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center w-9 h-9 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {mounted && (
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {theme === "dark" ? <Sun size={16} className="group-hover:text-amber-400 transition-colors" /> : <Moon size={16} className="group-hover:text-blue-500 transition-colors" />}
              </motion.div>
            )}
          </motion.button>

          {/* Language Toggle Dropdown */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLangMenu}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center w-9 h-9 cursor-pointer"
              aria-label="Select Language"
            >
              <Languages size={18} />
            </motion.button>

            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-32 bg-surface/95 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-2xl shadow-xl py-1.5 z-50 overflow-hidden"
                >
                  <button
                    onClick={() => {
                      if (language !== "ar") toggleLanguage();
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full text-start px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer ${
                      language === "ar" ? "text-primary" : "text-text-secondary"
                    }`}
                  >
                    <span>العربية</span>
                  </button>
                  <button
                    onClick={() => {
                      if (language !== "en") toggleLanguage();
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full text-start px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer ${
                      language === "en" ? "text-primary" : "text-text-secondary"
                    }`}
                  >
                    <span>English</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop CTA or Profile Icon */}
          {isSignedIn ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/profile"
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text-secondary hover:text-text-primary transition-all duration-300 border border-black/10 dark:border-white/10 hover:border-primary cursor-pointer"
              >
                <User size={18} />
              </Link>
            </motion.div>
          ) : (
            <Link
              href="#demo"
              className="hidden sm:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-light hover:to-accent text-white font-bold text-sm transition-all duration-300 shadow-md shadow-primary/20 dark:shadow-[0_0_15px_rgba(22,131,199,0.4)] hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-[0_0_25px_rgba(22,131,199,0.6)] hover:-translate-y-0.5 cursor-pointer"
            >
              {t("nav.cta")}
            </Link>
          )}

          {/* Compact mobile CTA or Profile Icon */}
          {isSignedIn ? (
            <Link
              href="/profile"
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text-secondary hover:text-text-primary transition-all duration-300 border border-black/10 dark:border-white/10 hover:border-primary cursor-pointer"
            >
              <User size={16} />
            </Link>
          ) : (
            <Link
              href="#demo"
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-primary to-primary-light text-white shadow-md shadow-primary/20 dark:shadow-[0_0_12px_rgba(22,131,199,0.4)] cursor-pointer"
            >
              <ArrowRight size={16} />
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll Progress Line */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-0">
          <motion.div
            className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 h-[2px] bg-gradient-to-r rtl:bg-gradient-to-l from-primary via-primary-light to-accent shadow-[0_2px_10px_rgba(22,131,199,0.3)] dark:shadow-[0_0_15px_rgba(22,131,199,0.8)]"
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
              className="lg:hidden pointer-events-auto absolute top-20 left-4 right-4 bg-surface/95 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-3xl p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-2xl z-50"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl font-medium transition-all border ${
                          isActive
                            ? "bg-primary/5 dark:bg-primary/20 border-primary/15 dark:border-primary/50 shadow-sm shadow-primary/10 dark:shadow-[0_0_15px_rgba(22,131,199,0.4)] text-primary dark:text-primary-light"
                            : "border-transparent text-text-secondary hover:text-text-primary hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <hr className="border-black/10 dark:border-white/10" />
              {isSignedIn ? (
                <Link
                  href="/profile"
                  className="w-full flex items-center justify-center gap-3 py-3.5 sm:py-4 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text-primary font-medium transition-all border border-black/10 dark:border-white/10 hover:border-primary cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User size={18} />
                  <span>{t("nav.profile")}</span>
                </Link>
              ) : (
                <Link
                  href="#demo"
                  className="w-full text-center py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold transition-all shadow-md shadow-primary/20 dark:shadow-[0_0_15px_rgba(22,131,199,0.4)] cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.cta")}
                </Link>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}