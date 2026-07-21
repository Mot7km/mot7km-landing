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
  LayoutGrid,
  Zap,
  CheckCircle2,
  Layers,
  Activity,
  ShieldCheck,
  MapPin
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSolutionCard, setHoveredSolutionCard] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const isRtl = language === "ar";
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

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

  // Close menus when clicking outside
  useEffect(() => {
    const closeMenus = () => {
      setIsLangMenuOpen(false);
      setIsSolutionsOpen(false);
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

  const solutionsList = [
    { 
      id: "cafe", 
      title: t("footer.solutionCafe"), 
      desc: isRtl ? "سرعة تسجيل الطلبات ومتابعة استهلاك البن والمخزون" : "Fast POS & order management with ingredient tracking",
      icon: Coffee, 
      iconStyle: "bg-amber-500/10 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20 group-hover/item:border-amber-500/40 shadow-amber-500/10",
      badge: isRtl ? "الكافيهات" : "Fast POS",
      badgeStyle: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
      tags: isRtl ? ["كاشير سريع", "تتبع البن"] : ["Fast POS", "Coffee Tracking"],
      href: "/solutions/cafe" 
    },
    { 
      id: "gaming", 
      title: t("footer.solutionGaming"), 
      desc: isRtl ? "طلب مباشر عبر الـ QR من طاولة اللعب لعدم قطع الجيم" : "Direct table QR ordering for uninterrupted play",
      icon: Gamepad2, 
      iconStyle: "bg-purple-500/10 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/20 group-hover/item:border-purple-500/40 shadow-purple-500/10",
      badge: isRtl ? "طلب الطاولة" : "QR Table",
      badgeStyle: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
      tags: isRtl ? ["طلب الطاولات", "QR سريع"] : ["Table Orders", "Quick QR"],
      href: "/solutions/gaming" 
    },
    { 
      id: "juice", 
      title: t("footer.solutionJuice"), 
      desc: isRtl ? "تخصيص سريع للنكهات والمكونات بنقرة واحدة" : "Quick customization screen for flavors & toppings",
      icon: GlassWater, 
      iconStyle: "bg-pink-500/10 dark:bg-pink-500/15 text-pink-600 dark:text-pink-400 border-pink-500/20 group-hover/item:border-pink-500/40 shadow-pink-500/10",
      badge: isRtl ? "النكهات" : "Modifiers",
      badgeStyle: "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20",
      tags: isRtl ? ["تعديل النكهات", "إضافات سريعة"] : ["Flavor Customization", "Quick Addons"],
      href: "/solutions/juice" 
    },
    { 
      id: "restaurant", 
      title: t("footer.solutionRestaurant"), 
      desc: isRtl ? "إدارة شاشات المطبخ، الورديات، الطاولات والـ KDS" : "Kitchen displays, shift audit & table management",
      icon: UtensilsCrossed, 
      iconStyle: "bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 group-hover/item:border-emerald-500/40 shadow-emerald-500/10",
      badge: isRtl ? "إدارة كاملة" : "Full Suite",
      badgeStyle: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
      tags: isRtl ? ["شاشات KDS", "إدارة الورديات"] : ["KDS Displays", "Shift Audit"],
      href: "/solutions/restaurant" 
    },
  ];

  // Dynamic Spotlight Data for Live Hover Preview
  const spotlightDetails: Record<string, {
    title: string;
    sub: string;
    metric: string;
    metricText: string;
    bullets: string[];
    cta: string;
    href: string;
  }> = {
    cafe: {
      title: isRtl ? "كاشير الكافيهات وتتبع البن" : "Café POS & Coffee Audit",
      sub: isRtl ? "إدارة دقيقة لمكونات الجرامات وسرعة الفاتورة" : "Gram-accurate coffee inventory & fast checkout",
      metric: "< 0.8s",
      metricText: isRtl ? "زمن طباعة الفاتورة" : "Print Speed",
      bullets: [
        isRtl ? "تتبع استهلاك حبوب البن بالجرام" : "Gram Coffee Inventory Audit",
        isRtl ? "دعم الطابعات الحرارية والدرج" : "Thermal Printer & Cash Drawer",
        isRtl ? "ربط مع الشاشات السحابية" : "Cloud Display Sync"
      ],
      cta: isRtl ? "عرض حل الكافيهات" : "Explore Café POS",
      href: "/solutions/cafe"
    },
    gaming: {
      title: isRtl ? "منيو طاولة اللعب الرقمي" : "Gaming Table QR Ordering",
      sub: isRtl ? "طلب مباشر من الطاولة دون قطع اللعب" : "Seamless in-game QR table service",
      metric: "0% App",
      metricText: isRtl ? "بدون تطبيق أو تسجيل" : "App-less Instant QR",
      bullets: [
        isRtl ? "مسح QR مخصص لكل طاولة بلايستيشن" : "Table-specific PlayStation QR",
        isRtl ? "دفع إلكتروني مباشر وتنبيه الكاشير" : "Instant Online Pay & Cashier Alert",
        isRtl ? "حساب وقت الجلسات والطلبات" : "Session Time & Order Tracking"
      ],
      cta: isRtl ? "عرض حل Gaming" : "Explore Gaming Suite",
      href: "/solutions/gaming"
    },
    juice: {
      title: isRtl ? "شاشة النكهات والإضافات" : "Custom Flavors & Modifiers",
      sub: isRtl ? "تخصيص المكونات والتحكم في الحجم بنقرة" : "One-click modifier & size customization",
      metric: "+35%",
      metricText: isRtl ? "زيادة المبيعات الجانبية" : "Upsell Revenue Boost",
      bullets: [
        isRtl ? "تخصيص حجم ومكونات العصير" : "Multi-size & Topping Modifiers",
        isRtl ? "سرعة إنجاز الطلب في الزحام" : "Peak Hour Speed Automation",
        isRtl ? "خصم المكونات تلقائياً" : "Real-time Ingredient Deduction"
      ],
      cta: isRtl ? "عرض حل العصائر" : "Explore Juice Suite",
      href: "/solutions/juice"
    },
    restaurant: {
      title: isRtl ? "منظومة المطاعم و KDS" : "Full Restaurant & KDS Suite",
      sub: isRtl ? "ربط الصالة، المطبخ، والورديات لحظياً" : "Unified Dining, Kitchen & Shift Ops",
      metric: "100%",
      metricText: isRtl ? "دقة ورديات الصندوق" : "Cashier Shift Accuracy",
      bullets: [
        isRtl ? "شاشات المطبخ الذكية (KDS)" : "Smart Kitchen Display System",
        isRtl ? "تقارير الورديات والفرق النقدية" : "Shift Audit & Cash Register",
        isRtl ? "إدارة الطاولات والحجوزات" : "Table Layout & Reservation"
      ],
      cta: isRtl ? "عرض حل المطاعم" : "Explore Restaurant POS",
      href: "/solutions/restaurant"
    }
  };

  const currentSpotlightKey = hoveredSolutionCard && spotlightDetails[hoveredSolutionCard] 
    ? hoveredSolutionCard 
    : "cafe";
  const activeSpotlight = spotlightDetails[currentSpotlightKey];

  const navLinks = [
    { id: "features", name: t("nav.features"), href: "#features" },
    { id: "use-cases", name: t("nav.useCases"), href: "#use-cases" },
    { id: "how-it-works", name: t("nav.howItWorks"), href: "#how-it-works" },
    { id: "roadmap", name: t("nav.roadmap"), href: "#roadmap" },
    { id: "pricing", name: t("pricing.title1"), href: "#pricing" },
    { id: "faq", name: t("nav.faq"), href: "#faq" },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300">
      
      {/* Light & Dark Adaptive Floating Navbar Shell */}
      <div
        className={`pointer-events-auto flex items-center justify-between transition-all duration-300 rounded-full border border-black/10 dark:border-white/10 shadow-lg dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-surface/90 backdrop-blur-2xl max-w-7xl w-full relative ${
          isScrolled ? "py-2 px-4 sm:px-6" : "py-2.5 px-5 sm:px-8"
        }`}
      >
        
        {/* Left: Brand Logo + System Live Status Indicator */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/30 blur-md rounded-full group-hover:bg-primary/50 transition-all duration-500 scale-125" />
            <img
              src="/assets/logo/mot7km_logo%20(2).png"
              alt="Mot7km Logo"
              className="h-8 sm:h-9 w-auto relative z-10 group-hover:rotate-12 transition-transform duration-300"
            />
          </div>
          
          <div className="flex items-center gap-1.5">
            <span className="font-black text-lg sm:text-xl tracking-tight text-text-primary group-hover:text-primary transition-colors">
              Mot7km
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>
        </Link>

        {/* Center: Desktop Nav Links + Hand-Crafted Adaptive Mega Menu */}
        <nav 
          className="hidden lg:flex items-center gap-1.5"
          onMouseLeave={() => {
            setHoveredLink(null);
            setHoveredSolutionCard(null);
          }}
        >
          {/* Solutions Mega Dropdown Menu */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsSolutionsOpen(!isSolutionsOpen);
                setIsLangMenuOpen(false);
              }}
              onMouseEnter={() => setHoveredLink("solutions")}
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 cursor-pointer ${
                isSolutionsOpen ? "text-primary dark:text-primary-light" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>{t("nav.solutions")}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isSolutionsOpen ? "rotate-180 text-primary" : ""}`} />
            </button>

            {/* Hand-Crafted Mega Dropdown Canvas (Ultra-Sleek & Interactive Glass Canvas) */}
            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute left-0 rtl:left-auto rtl:right-0 mt-3 w-[580px] sm:w-[650px] bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-3xl border border-slate-200/90 dark:border-white/10 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.75)] p-3.5 sm:p-4 z-50 overflow-hidden"
                >
                  {/* Dropdown Top Bar */}
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200/60 dark:border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="p-1 rounded-md bg-primary/10 border border-primary/20 text-primary">
                        <LayoutGrid size={13} />
                      </div>
                      <span className="text-[11px] font-black text-slate-800 dark:text-slate-200 tracking-wide">
                        {isRtl ? "حلول متخصصة حسب النشاط" : "Industry Solutions"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {isRtl ? "مظومة سحابية حية" : "Live SaaS Engine"}
                      </span>
                    </div>
                  </div>

                  {/* Main Grid: 2 Columns Solutions + 1 Column Interactive SaaS Spotlight */}
                  <div className="grid grid-cols-12 gap-2.5 mb-2">
                    
                    {/* Left 8 Cols: 2x2 Solutions Grid with Dynamic Hover Backdrop */}
                    <div className="col-span-8 grid grid-cols-2 gap-2 relative">
                      {solutionsList.map((sol) => {
                        const Icon = sol.icon;
                        const isCurrentPage = pathname === sol.href;
                        const isCardHovered = hoveredSolutionCard === sol.id;

                        return (
                          <Link
                            key={sol.id}
                            href={sol.href}
                            onMouseEnter={() => setHoveredSolutionCard(sol.id)}
                            onClick={() => setIsSolutionsOpen(false)}
                            className="group/item relative flex flex-col justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50/80 hover:bg-white dark:bg-white/[0.03] dark:hover:bg-white/[0.07] border border-slate-200/80 dark:border-white/[0.08] hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 -translate-y-0 hover:-translate-y-0.5 z-10"
                          >
                            {/* Dynamic Smooth Hover Backdrop */}
                            {isCardHovered && (
                              <motion.div
                                layoutId="hoverSolutionCard"
                                className="absolute inset-0 bg-primary/5 dark:bg-white/[0.06] border border-primary/40 dark:border-primary/40 rounded-xl -z-10"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                              />
                            )}

                            <div>
                              {/* Top Bar inside Card: Icon + Badge + Active Page Pill */}
                              <div className="flex items-center justify-between gap-1 mb-1.5">
                                <div className={`p-1.5 rounded-lg border flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110 ${sol.iconStyle}`}>
                                  <Icon size={15} />
                                </div>
                                <div className="flex items-center gap-1">
                                  {isCurrentPage && (
                                    <span className="text-[8px] font-black px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 animate-pulse flex items-center gap-0.5">
                                      <MapPin size={9} />
                                      {isRtl ? "أنت هنا" : "Current"}
                                    </span>
                                  )}
                                  <span className={`text-[8.5px] font-extrabold px-1.5 py-0.5 rounded-md border shrink-0 ${sol.badgeStyle}`}>
                                    {sol.badge}
                                  </span>
                                </div>
                              </div>

                              {/* Title */}
                              <h5 className="text-xs font-extrabold text-slate-900 dark:text-white group-hover/item:text-primary dark:group-hover/item:text-primary-light transition-colors mb-0.5 truncate">
                                {sol.title}
                              </h5>
                              
                              {/* Description */}
                              <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight line-clamp-1 font-medium mb-2">
                                {sol.desc}
                              </p>
                            </div>

                            {/* Tags + Action Bar */}
                            <div className="pt-1.5 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                {sol.tags.slice(0, 2).map((tag, idx) => (
                                  <span key={idx} className="text-[8px] font-bold px-1 py-0.2 rounded bg-slate-200/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-300/40 dark:border-white/5">
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center gap-0.5 text-[10px] font-extrabold text-primary opacity-80 group-hover/item:opacity-100 group-hover/item:text-primary-dark dark:group-hover/item:text-primary-light transition-all shrink-0">
                                <span>{isRtl ? "عرض" : "View"}</span>
                                <ArrowRight size={11} className="group-hover/item:translate-x-0.5 rtl:group-hover/item:-translate-x-0.5 transition-transform" />
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Right 4 Cols: Interactive SaaS Spotlight Card (Changes dynamically on Hover) */}
                    <div className="col-span-4 p-3 rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 dark:from-primary/20 dark:via-accent/10 dark:to-emerald-500/10 border border-primary/20 dark:border-primary/30 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group/spotlight">
                      {/* Ambient backdrop glow */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-xl group-hover/spotlight:bg-primary/30 transition-all duration-500" />

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSpotlightKey}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.15 }}
                          className="relative z-10 flex flex-col justify-between h-full"
                        >
                          <div>
                            <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider mb-1.5 text-primary dark:text-primary-light">
                              <span className="flex items-center gap-1">
                                <Sparkles size={11} className="animate-pulse flex-shrink-0" />
                                {isRtl ? "معاينة الحل" : "Live Preview"}
                              </span>
                              <span className="px-1.5 py-0.2 rounded bg-primary/15 font-black text-primary">
                                {activeSpotlight.metric}
                              </span>
                            </div>

                            <h4 className="text-xs font-black text-slate-900 dark:text-white mb-0.5 leading-tight truncate">
                              {activeSpotlight.title}
                            </h4>

                            <p className="text-[9.5px] text-slate-600 dark:text-slate-400 font-medium mb-2 leading-tight line-clamp-2">
                              {activeSpotlight.sub}
                            </p>

                            <ul className="space-y-1 text-[9.5px] text-slate-700 dark:text-slate-300 font-semibold mb-2.5">
                              {activeSpotlight.bullets.map((b, idx) => (
                                <li key={idx} className="flex items-center gap-1">
                                  <CheckCircle2 size={10} className="text-emerald-500 flex-shrink-0" />
                                  <span className="truncate">{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Link
                            href={activeSpotlight.href}
                            onClick={() => setIsSolutionsOpen(false)}
                            className="relative z-10 w-full text-center py-1.5 px-2 rounded-lg bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary text-white font-extrabold text-[10.5px] transition-all duration-300 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 flex items-center justify-center gap-1 cursor-pointer group/cta"
                          >
                            <span>{activeSpotlight.cta}</span>
                            <ArrowRight size={11} className="rtl:rotate-180 group-hover/cta:translate-x-0.5 rtl:group-hover/cta:-translate-x-0.5 transition-transform" />
                          </Link>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                  </div>

                  {/* Dropdown Bottom Bar: Micro Trust Metrics Bar */}
                  <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                        <strong className="text-slate-900 dark:text-white font-extrabold">+1,200</strong> {isRtl ? "نشاط نشط" : "Active Outlets"}
                      </span>
                      <span className="hidden sm:inline-block text-slate-300 dark:text-slate-700">•</span>
                      <span className="flex items-center gap-1">
                        <Zap size={11} className="text-amber-500" />
                        <strong className="text-slate-900 dark:text-white font-extrabold">&lt; 0.8s</strong> {isRtl ? "زمن الطلب" : "Speed"}
                      </span>
                    </div>
                    <a 
                      href="#use-cases" 
                      onClick={() => setIsSolutionsOpen(false)}
                      className="font-extrabold text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors flex items-center gap-1 group/bottom shrink-0"
                    >
                      <span>{isRtl ? "قارن الحلول" : "Compare"}</span>
                      <ArrowRight size={11} className="rtl:rotate-180 group-hover/bottom:translate-x-0.5 rtl:group-hover/bottom:-translate-x-0.5 transition-transform" />
                    </a>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Standard Navigation Links */}
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 z-10 ${
                  isActive ? "text-primary dark:text-primary-light" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {hoveredLink === link.id && !isActive && (
                  <motion.div
                    layoutId="hoverNavIndicator"
                    className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-20"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary/10 dark:bg-primary/15 border border-primary/30 dark:border-primary/40 rounded-full shadow-sm dark:shadow-[0_0_15px_rgba(22,131,199,0.3)] -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Theme Toggle, Clean Languages Button & Shimmer CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Theme Toggle Button */}
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

          {/* Clean Restored Languages Dropdown Button */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsLangMenuOpen(!isLangMenuOpen);
                setIsSolutionsOpen(false);
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
                      language === "ar" ? "text-primary" : "text-text-primary dark:text-text-primary"
                    }`}
                  >
                    <span>العربية</span>
                    {language === "ar" && <Check size={14} className="text-primary" />}
                  </button>
                  <button
                    onClick={() => toggleLanguage("en")}
                    className={`w-full text-start px-4 py-2 text-xs font-bold transition-colors flex items-center justify-between hover:bg-primary/5 dark:hover:bg-white/10 cursor-pointer ${
                      language === "en" ? "text-primary" : "text-text-primary dark:text-text-primary"
                    }`}
                  >
                    <span>English</span>
                    {language === "en" && <Check size={14} className="text-primary" />}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Shimmer CTA Button */}
          <Link
            href="#pricing"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-200% animate-gradient text-white font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(22,131,199,0.4)] hover:shadow-[0_0_30px_rgba(22,131,199,0.7)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{t("nav.cta")}</span>
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

        {/* Scroll Progress Thread Rim */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-0">
          <motion.div
            className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 h-[2px] bg-gradient-to-r rtl:bg-gradient-to-l from-primary via-accent to-emerald-400 shadow-[0_0_15px_rgba(22,131,199,0.9)]"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

      </div>

      {/* Luxury Glass Mobile Menu Drawer */}
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
              className="lg:hidden pointer-events-auto absolute top-20 left-4 right-4 bg-surface/95 backdrop-blur-3xl border border-black/10 dark:border-white/15 rounded-3xl p-5 flex flex-col gap-4 shadow-2xl z-50 overflow-hidden"
            >
              {/* Solutions Mobile Grid */}
              <div>
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                    <LayoutGrid size={14} className="text-primary" />
                    {t("nav.solutions")}
                  </span>
                  <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    SaaS Engine
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {solutionsList.map((sol) => {
                    const Icon = sol.icon;
                    return (
                      <Link
                        key={sol.id}
                        href={sol.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex flex-col justify-between p-3 rounded-2xl bg-slate-50/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-xs font-bold text-slate-900 dark:text-white hover:border-primary/40 active:scale-95 transition-all shadow-sm"
                      >
                        <div className="flex items-center justify-between gap-1 mb-2">
                          <div className={`p-2 rounded-xl border flex-shrink-0 ${sol.iconStyle}`}>
                            <Icon size={16} />
                          </div>
                          <span className={`text-[8px] font-extrabold px-1.5 py-0.5 rounded-full border shrink-0 ${sol.badgeStyle}`}>
                            {sol.badge}
                          </span>
                        </div>
                        <span className="truncate text-xs font-extrabold">{sol.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <hr className="border-black/10 dark:border-white/10" />

              <ul className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                          isActive
                            ? "bg-primary/10 dark:bg-primary/20 border-primary/30 dark:border-primary/40 text-primary dark:text-primary-light shadow-sm"
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

              <Link
                href="#pricing"
                className="w-full text-center py-3.5 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(22,131,199,0.4)] cursor-pointer"
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