"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ArrowRight, 
  Languages, 
  ChevronDown,
  Check,
  Coffee,
  Gamepad2,
  GlassWater,
  UtensilsCrossed,
  Sparkles,
  MonitorDot,
  Store,
  Smartphone,
  QrCode,
  ShieldCheck,
  BookOpen,
  Users,
  Briefcase,
  Mail,
  HelpCircle,
  Clock
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"product" | "solutions" | "resources" | "company" | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const isRtl = language === "ar";
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalScroll > 0 ? window.scrollY / totalScroll : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const closeMenus = () => {
      setIsLangMenuOpen(false);
      setActiveDropdown(null);
    };
    window.addEventListener("click", closeMenus);
    return () => window.removeEventListener("click", closeMenus);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
    setIsLangMenuOpen(false);
  };

  // 1. PRODUCT MEGA MENU DATA
  const productList = [
    {
      id: "web",
      title: isRtl ? "لوحة التحكم السحابية 360°" : "360° Cloud Dashboard",
      desc: isRtl ? "متابعة المبيعات، المخزون، والتقارير المالية لحظة بلحظة" : "Real-time analytics & multi-branch audit",
      icon: MonitorDot,
      href: "/features/web",
    },
    {
      id: "pos",
      title: isRtl ? "نظام كاشير POS السريع" : "Fast POS Terminal Engine",
      desc: isRtl ? "محرك كاشير فائق السرعة يعمل 100% بدون إنترنت" : "Ultra-fast 100% offline cashier engine",
      icon: Store,
      href: "/features/pos",
    },
    {
      id: "mobile",
      title: isRtl ? "تطبيق الموبايل للإدارة" : "Manager Mobile App",
      desc: isRtl ? "إشعارات حية ومتابعة الورديات والمبيعات من جوالك" : "Real-time mobile alerts & shift audit",
      icon: Smartphone,
      href: "/features/mobile",
    },
    {
      id: "qr",
      title: isRtl ? "منيو QR التفاعلي" : "App-less Interactive QR Menu",
      desc: isRtl ? "طلب مباشر ودفع إلكتروني من الطاولة بدون تطبيق" : "Direct table ordering & online pay",
      icon: QrCode,
      href: "/features/qr",
    },
  ];

  // 2. SOLUTIONS MEGA MENU DATA
  const solutionsList = [
    { 
      id: "cafe", 
      title: t("footer.solutionCafe"), 
      desc: isRtl ? "سرعة تسجيل الطلبات ومتابعة استهلاك البن" : "Fast POS with ingredient tracking",
      icon: Coffee, 
      iconStyle: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      href: "/solutions/cafe" 
    },
    { 
      id: "gaming", 
      title: t("footer.solutionGaming"), 
      desc: isRtl ? "طلب مباشر عبر الـ QR من طاولة اللعب" : "Direct table QR ordering",
      icon: Gamepad2, 
      iconStyle: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      href: "/solutions/gaming" 
    },
    { 
      id: "juice", 
      title: t("footer.solutionJuice"), 
      desc: isRtl ? "تخصيص سريع للنكهات والمكونات بنقرة واحدة" : "Flavors & toppings modifiers",
      icon: GlassWater, 
      iconStyle: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
      href: "/solutions/juice" 
    },
    { 
      id: "restaurant", 
      title: t("footer.solutionRestaurant"), 
      desc: isRtl ? "إدارة شاشات المطبخ KDS والورديات" : "Kitchen displays & table management",
      icon: UtensilsCrossed, 
      iconStyle: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      href: "/solutions/restaurant" 
    },
  ];

  // 3. RESOURCES DROPDOWN DATA
  const resourcesList = [
    { id: "docs", title: isRtl ? "مركز المساعدة والتوثيق" : "Help Center & Docs", desc: isRtl ? "أدلة تشغيل النظام والشروحات المصورة" : "Operational guides & tutorials", icon: HelpCircle, href: "/docs" },
    { id: "blog", title: isRtl ? "المدونة والنشرات" : "Blog & Articles", desc: isRtl ? "مقالات ونظرات حول تقنيات المطاعم" : "Food tech insights & best practices", icon: BookOpen, href: "/blog" },
    { id: "changelog", title: isRtl ? "سجل التحديثات" : "Product Changelog", desc: isRtl ? "تتبع الإصدارات الجديدة والتحسينات" : "New releases & speed updates", icon: Clock, href: "/changelog" },
    { id: "integrations", title: isRtl ? "التكاملات والربط" : "Integrations & Ecosystem", desc: isRtl ? "هيئة الزكاة ZATCA، مدى، والتطبيقات" : "ZATCA, mada, & delivery apps", icon: ShieldCheck, href: "/integrations" },
  ];

  // 4. COMPANY DROPDOWN DATA
  const companyList = [
    { id: "about", title: isRtl ? "من نحن" : "About Mot7km", desc: isRtl ? "قصة ومهمة منصة متحكم السحابية" : "Our mission to revolutionize POS", icon: Users, href: "/about" },
    { id: "careers", title: isRtl ? "الوظائف والتطوير" : "Careers", desc: isRtl ? "انضم لفريق العمل وساهم في المستقبل" : "Join our engineering & sales team", icon: Briefcase, href: "/careers" },
    { id: "contact", title: isRtl ? "تواصل معنا" : "Contact Us", desc: isRtl ? "الدعم الفني واستفسارات المبيعات" : "24/7 support & sales inquiries", icon: Mail, href: "/contact" },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 pointer-events-none transition-all duration-300">
      
      <div className="container mx-auto flex items-center justify-between pointer-events-auto relative">
        
        {/* 1. OUTSIDE LEFT (RTL: RIGHT): BRAND LOGO & NAME */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group py-1">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/30 blur-md rounded-full group-hover:bg-primary/50 transition-all duration-500 scale-125" />
            <img
              src="/assets/logo/mot7km_logo%20(2).png"
              alt="Mot7km Logo"
              className="h-8 sm:h-9 w-auto relative z-10 group-hover:rotate-12 transition-transform duration-300"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              Mot7km
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>
        </Link>

        {/* 2. CENTER: FLOATING PILL NAVBAR (Containing Menu Links Only) */}
        <nav 
          className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 shadow-lg dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-surface/90 backdrop-blur-2xl relative"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {/* HOME LINK */}
          <Link
            href="/"
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold transition-colors ${
              pathname === "/"
                ? "text-primary dark:text-primary-light bg-primary/10"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {isRtl ? "الرئيسية" : "Home"}
          </Link>

          {/* PRODUCT DROPDOWN */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("product")}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveDropdown(activeDropdown === "product" ? null : "product");
                setIsLangMenuOpen(false);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold transition-colors cursor-pointer ${
                activeDropdown === "product" || pathname.startsWith("/features")
                  ? "text-primary dark:text-primary-light bg-primary/10"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>{isRtl ? "المنتج" : "Product"}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "product" ? "rotate-180 text-primary" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "product" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-[500px] bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/10 rounded-2xl shadow-xl p-3 z-50"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {productList.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all group"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                            <Icon size={18} />
                          </div>
                          <div>
                            <h5 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium leading-snug line-clamp-2 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SOLUTIONS DROPDOWN */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("solutions")}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveDropdown(activeDropdown === "solutions" ? null : "solutions");
                setIsLangMenuOpen(false);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold transition-colors cursor-pointer ${
                activeDropdown === "solutions" || pathname.startsWith("/solutions")
                  ? "text-primary dark:text-primary-light bg-primary/10"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>{t("nav.solutions")}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "solutions" ? "rotate-180 text-primary" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "solutions" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-[460px] bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/10 rounded-2xl shadow-xl p-3 z-50"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {solutionsList.map((sol) => {
                      const Icon = sol.icon;
                      return (
                        <Link
                          key={sol.id}
                          href={sol.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all group"
                        >
                          <div className={`p-2 rounded-lg border shrink-0 ${sol.iconStyle}`}>
                            <Icon size={16} />
                          </div>
                          <div>
                            <h5 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                              {sol.title}
                            </h5>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight line-clamp-1 mt-0.5">
                              {sol.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* PRICING DIRECT LINK */}
          <Link
            href="/#pricing"
            className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold text-text-secondary hover:text-text-primary transition-colors"
          >
            {t("pricing.title1")}
          </Link>

          {/* RESOURCES DROPDOWN */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("resources")}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveDropdown(activeDropdown === "resources" ? null : "resources");
                setIsLangMenuOpen(false);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold transition-colors cursor-pointer ${
                activeDropdown === "resources" ? "text-primary dark:text-primary-light bg-primary/10" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>{isRtl ? "الموارد" : "Resources"}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "resources" ? "rotate-180 text-primary" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-[250px] bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/10 rounded-2xl shadow-xl p-2 z-50"
                >
                  {resourcesList.map((res) => {
                    const Icon = res.icon;
                    return (
                      <Link
                        key={res.id}
                        href={res.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors group"
                      >
                        <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0">
                          <Icon size={15} />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {res.title}
                          </h5>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* COMPANY DROPDOWN */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("company")}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveDropdown(activeDropdown === "company" ? null : "company");
                setIsLangMenuOpen(false);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold transition-colors cursor-pointer ${
                activeDropdown === "company" ? "text-primary dark:text-primary-light bg-primary/10" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>{isRtl ? "الشركة" : "Company"}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "company" ? "rotate-180 text-primary" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-[230px] bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/10 rounded-2xl shadow-xl p-2 z-50"
                >
                  {companyList.map((comp) => {
                    const Icon = comp.icon;
                    return (
                      <Link
                        key={comp.id}
                        href={comp.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors group"
                      >
                        <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0">
                          <Icon size={15} />
                        </div>
                        <div>
                          <h5 className="text-xs font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {comp.title}
                          </h5>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* 3. OUTSIDE RIGHT (RTL: LEFT): THEME, LANG & CTA BUTTON */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center w-9 h-9 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {mounted && (
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-primary" />}
              </motion.div>
            )}
          </motion.button>

          {/* Language Selector */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsLangMenuOpen(!isLangMenuOpen);
                setActiveDropdown(null);
              }}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center w-9 h-9 cursor-pointer"
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
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-32 bg-surface/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 rounded-2xl shadow-xl py-1.5 z-50 overflow-hidden"
                >
                  <button
                    onClick={() => toggleLanguage("ar")}
                    className={`w-full text-start px-4 py-2 text-xs font-bold transition-colors flex items-center justify-between hover:bg-primary/5 dark:hover:bg-white/10 cursor-pointer ${
                      language === "ar" ? "text-primary" : "text-text-primary"
                    }`}
                  >
                    <span>العربية</span>
                    {language === "ar" && <Check size={14} className="text-primary" />}
                  </button>
                  <button
                    onClick={() => toggleLanguage("en")}
                    className={`w-full text-start px-4 py-2 text-xs font-bold transition-colors flex items-center justify-between hover:bg-primary/5 dark:hover:bg-white/10 cursor-pointer ${
                      language === "en" ? "text-primary" : "text-text-primary"
                    }`}
                  >
                    <span>English</span>
                    {language === "en" && <Check size={14} className="text-primary" />}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Prominent High-Converting SaaS Demo CTA Button */}
          <Link
            href="/demo"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-200% animate-gradient text-white font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(22,131,199,0.4)] hover:shadow-[0_0_30px_rgba(22,131,199,0.7)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{isRtl ? "اطلب عرضاً تجريبياً" : "Request Demo"}</span>
            <ArrowRight size={15} className="rtl:rotate-180" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary rounded-full hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md pointer-events-auto z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden pointer-events-auto absolute top-20 left-4 right-4 bg-surface/95 backdrop-blur-3xl border border-black/10 dark:border-white/15 rounded-3xl p-5 flex flex-col gap-4 shadow-2xl z-50 overflow-y-auto max-h-[85vh]"
            >
              {/* Product Links */}
              <div>
                <span className="text-[11px] font-black text-primary uppercase tracking-wider block mb-2 px-1">
                  {isRtl ? "إمكانيات المحرك السحابي" : "SaaS Capabilities"}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {productList.map((p) => (
                    <Link
                      key={p.id}
                      href={p.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-3 rounded-2xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-xs font-black text-slate-900 dark:text-white"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>

              <hr className="border-black/10 dark:border-white/10" />

              {/* Direct Links */}
              <div className="flex flex-col gap-2">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm font-bold text-text-primary">
                  {isRtl ? "الرئيسية" : "Home"}
                </Link>
                <Link href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm font-bold text-text-primary">
                  {t("pricing.title1")}
                </Link>
                <Link href="/docs" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm font-bold text-text-primary">
                  {isRtl ? "مركز المساعدة والتوثيق" : "Documentation"}
                </Link>
                <Link href="/changelog" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm font-bold text-text-primary">
                  {isRtl ? "سجل التحديثات" : "Changelog"}
                </Link>
                <Link href="/integrations" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm font-bold text-text-primary">
                  {isRtl ? "التكاملات والربط" : "Integrations"}
                </Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm font-bold text-text-primary">
                  {isRtl ? "من نحن" : "About"}
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm font-bold text-text-primary">
                  {isRtl ? "تواصل معنا" : "Contact"}
                </Link>
              </div>

              <hr className="border-black/10 dark:border-white/10" />

              {/* Mobile Primary CTA */}
              <Link
                href="/demo"
                className="w-full text-center py-3.5 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-extrabold text-sm shadow-md cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isRtl ? "اطلب عرضاً تجريبياً" : "Request Live Demo"}
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  );
}