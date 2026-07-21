"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ArrowUp, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  Star,
  Store
} from "lucide-react";
import { useTranslation } from "react-i18next";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-surface/60 border-t border-white/10 pt-20 sm:pt-28 md:pt-32 pb-8 overflow-hidden z-0">
      {/* Background Lighting Orbs & Mesh */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] opacity-[0.07] pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-transparent blur-[140px] rounded-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Masterpiece Premium SaaS Banner CTA */}
        <div className="relative mb-20 md:mb-28 p-8 sm:p-12 md:p-14 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#0c1626] via-[#09111e] to-[#0d1c30] border border-white/15 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden group">
          
          {/* Futuristic Ambient Orbs & Geometric Dot Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/25 transition-all duration-700" />
          
          {/* Subtle Grid SVG Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none" 
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            
            {/* Left Content Column */}
            <div className="max-w-2xl text-center lg:text-start flex flex-col items-center lg:items-start">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-extrabold mb-5 shadow-sm backdrop-blur-md">
                <Sparkles size={14} className="text-primary animate-pulse" />
                <span className="tracking-wider uppercase">Mot7km SaaS Platform v1.1</span>
              </div>

              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-[1.2]">
                {t("footer.ctaTitle").split("؟")[0]}
                <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-emerald-400">
                  {isRtl ? " في مكان واحد؟" : "?"}
                </span>
              </h3>
              
              <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {t("footer.ctaDesc")}
              </p>

              {/* Glassmorphic Trust Badge Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 backdrop-blur-md shadow-sm">
                  <CheckCircle2 size={16} />
                  <span>{t("footer.trustBadge1")}</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary-light backdrop-blur-md shadow-sm">
                  <Zap size={16} />
                  <span>{t("footer.trustBadge2")}</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 backdrop-blur-md shadow-sm">
                  <ShieldCheck size={16} />
                  <span>{t("footer.trustBadge3")}</span>
                </div>
              </div>

            </div>

            {/* Right Interactive Unified Email Form Container */}
            <div className="flex flex-col w-full lg:w-auto min-w-[300px] sm:min-w-[420px] max-w-full">
              
              {/* Single Integrated Pill Container */}
              <form onSubmit={handleSubscribe} className="relative p-2 rounded-2xl bg-surface/80 border border-white/20 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.4)] focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-300 flex items-center">
                <div className="pl-3 rtl:pl-0 rtl:pr-3 text-text-muted flex-shrink-0">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.emailPlaceholder")}
                  required
                  className="w-full bg-transparent border-none outline-none text-sm text-text-primary px-3 py-2.5 placeholder:text-text-muted flex-1"
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-primary text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(22,131,199,0.4)] transition-all hover:scale-[1.03] active:scale-95 cursor-pointer whitespace-nowrap flex-shrink-0"
                >
                  <span>{t("footer.subscribe")}</span>
                  <ArrowRight size={16} className="rtl:rotate-180" />
                </button>
              </form>

              {/* Social Proof & Rating Note */}
              <div className="flex items-center justify-between mt-4 px-2 text-xs text-text-secondary">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-2 rtl:space-x-reverse">
                    <div className="w-6 h-6 rounded-full bg-primary/30 border border-white/20 flex items-center justify-center text-[10px] font-bold text-white">
                      ☕
                    </div>
                    <div className="w-6 h-6 rounded-full bg-secondary/30 border border-white/20 flex items-center justify-center text-[10px] font-bold text-white">
                      🍕
                    </div>
                    <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-white/20 flex items-center justify-center text-[10px] font-bold text-white">
                      🧃
                    </div>
                  </div>
                  <span className="font-semibold text-text-secondary/90 ml-1 rtl:mr-1">
                    {isRtl ? "انضم لـ 500+ مطعم وكافيه" : "Join 500+ food businesses"}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star size={13} className="fill-amber-400" />
                  <span>4.9/5</span>
                </div>
              </div>

              <AnimatePresence>
                {subscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold text-center"
                  >
                    {t("footer.subSuccess")}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-start">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full group-hover:bg-primary/50 transition-colors" />
                <img 
                  src="/assets/logo/mot7km_logo%20(2).png" 
                  alt="Mot7km Logo" 
                  className="h-11 sm:h-12 w-auto relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="font-black text-2xl sm:text-3xl tracking-tight text-text-primary">
                Mot7km
              </span>
            </Link>
            
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              {t("footer.desc")}
            </p>

            {/* Live System Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{t("footer.statusOperational")}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61591358790071", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/mot7km", label: "Instagram" },
                { Icon: XIcon, href: "#", label: "X" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={item.label}
                  className="w-10 h-10 rounded-xl bg-surface/80 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <item.Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-bold text-text-primary mb-5 text-base tracking-wide uppercase text-xs text-primary">
              {t("footer.links")}
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { label: t("nav.howItWorks"), href: "#how-it-works" },
                { label: t("nav.features"), href: "#features" },
                { label: t("nav.pricing"), href: "#pricing" },
                { label: t("nav.faq"), href: "#faq" }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-bold text-text-primary mb-5 text-base tracking-wide uppercase text-xs text-primary">
              {t("footer.solutions")}
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { label: t("footer.solutionCafe"), href: "/solutions/cafe" },
                { label: t("footer.solutionGaming"), href: "/solutions/gaming" },
                { label: t("footer.solutionJuice"), href: "/solutions/juice" },
                { label: t("footer.solutionRestaurant"), href: "/solutions/restaurant" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-bold text-text-primary mb-5 text-base tracking-wide uppercase text-xs text-primary">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { label: t("footer.aboutUs"), href: "/about" },
                { label: t("footer.terms"), href: "/terms" },
                { label: t("footer.privacy"), href: "/privacy" },
                { label: t("footer.usage"), href: "/usage" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="font-bold text-text-primary mb-5 text-base tracking-wide uppercase text-xs text-primary">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              <li>
                <a href="#" className="flex items-center gap-2.5 text-text-secondary hover:text-primary transition-colors">
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  <span>{t("footer.address")}</span>
                </a>
              </li>
              <li>
                <a href="tel:+966501234567" className="flex items-center gap-2.5 text-text-secondary hover:text-primary transition-colors">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <span dir="ltr">+966 50 123 4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:mot7km@gmail.com" className="flex items-center gap-2.5 text-text-secondary hover:text-primary transition-colors">
                  <Mail size={16} className="text-primary flex-shrink-0" />
                  <span>mot7km@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Utility Bar with integrated watermark */}
        <div className="relative pt-8 border-t border-white/10">
          
          {/* Subtle Watermark Typography */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full flex justify-center -z-10 opacity-30">
            <h1 className="text-[16vw] md:text-[14vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent tracking-tighter translate-y-1/4">
              MOT7KM
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <p className="text-text-muted text-xs sm:text-sm font-medium">
              {t("footer.rights")}
            </p>

            <div className="flex items-center gap-4">
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface/80 border border-white/10 text-text-secondary hover:text-white hover:bg-primary/20 hover:border-primary/40 transition-all text-xs font-bold cursor-pointer"
              >
                <span>{t("footer.backToTop")}</span>
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}