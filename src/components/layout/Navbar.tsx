"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
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
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
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
      <div className={`pointer-events-auto flex items-center justify-between transition-all duration-300 rounded-full border border-white/10 shadow-2xl bg-[#0B0F19]/80 backdrop-blur-xl max-w-6xl w-full ${isScrolled ? 'p-2' : 'p-3'}`}>
        
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
        <div className="flex items-center gap-2 pr-1 shrink-0">
          <div className="hidden sm:flex items-center gap-1 mr-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button 
              onClick={toggleLanguage}
              className="px-3 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider rounded-full hover:bg-white/5"
            >
              {language === "en" ? "AR" : "EN"}
            </button>
          </div>

          <Link
            href="#demo"
            className="hidden sm:flex px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)]"
          >
            Start free trial
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white rounded-full hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto absolute top-20 left-4 right-4 bg-[#0B0F19]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                      isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
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
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between py-2 border-b border-white/10 px-4">
              <span className="text-white/60 text-sm">Theme</span>
              <button onClick={toggleTheme} className="text-white p-2 bg-white/5 rounded-full">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-white/10 px-4">
              <span className="text-white/60 text-sm">Language</span>
              <button onClick={toggleLanguage} className="text-white font-medium uppercase px-4 py-2 bg-white/5 rounded-full">
                {language === "en" ? "AR" : "EN"}
              </button>
            </div>
            <Link
              href="#demo"
              className="w-full text-center py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)] mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start free trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
