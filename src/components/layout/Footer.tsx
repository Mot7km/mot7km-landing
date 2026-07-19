"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
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
  const { t } = useTranslation();

  return (
    <footer className="relative bg-surface/50 border-t border-white/5 pt-20 sm:pt-32 pb-6 overflow-hidden z-0">
      {/* Premium Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-[0.05] pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Ultra-Modern Floating CTA */}
        <div className="relative mb-24 p-10 md:p-14 rounded-[2.5rem] bg-surface/40 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-start">
              <h3 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-4 tracking-tight">
                {t("footer.ctaTitle")}
              </h3>
              <p className="text-text-secondary text-base md:text-lg">
                {t("footer.ctaDesc")}
              </p>
            </div>
            <div className="flex w-full lg:w-auto flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder={t("footer.emailPlaceholder")}
                className="w-full sm:w-72 bg-background/80 border border-white/10 rounded-full px-6 py-4 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted"
              />
              <button className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(var(--color-primary),0.8)]">
                {t("footer.subscribe")}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-colors" />
                <img 
                  src="/assets/logo/mot7km_logo%20(2).png" 
                  alt="Mot7km Logo" 
                  className="h-12 w-auto relative z-10 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-extrabold text-3xl tracking-tighter text-text-primary">
                Mot7km
              </span>
            </Link>
            <p className="text-text-secondary mb-8 leading-relaxed max-w-sm">
              {t("footer.desc")}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[XIcon, Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-sm">
                  <Icon width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-4">
            <h4 className="font-bold text-text-primary mb-6 text-lg">{t("footer.links")}</h4>
            <ul className="space-y-4">
              {[t("nav.howItWorks"), t("nav.features"), t("nav.faq")].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group font-medium">
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4" />
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-text-primary mb-6 text-lg">{t("footer.company")}</h4>
            <ul className="space-y-4">
              {[t("footer.aboutUs"), t("footer.careers"), t("footer.blog")].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group font-medium">
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4" />
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-text-primary mb-6 text-lg">{t("footer.support")}</h4>
            <ul className="space-y-4">
              {[t("footer.helpCenter"), t("footer.contactSupport"), t("footer.systemStatus")].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group font-medium">
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4" />
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info - Interactive Pills */}
          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="font-bold text-text-primary mb-6 text-lg text-center lg:text-start">{t("footer.contact")}</h4>
            <ul className="flex flex-col gap-4 items-center lg:items-start">
              <li className="w-full max-w-xs">
                <a href="#" className="flex items-center gap-4 p-3 rounded-2xl bg-surface border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <div className="bg-background rounded-xl p-2.5 text-text-secondary group-hover:text-primary group-hover:scale-110 transition-all shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <span className="text-text-primary font-medium text-sm">{t("footer.address")}</span>
                </a>
              </li>
              <li className="w-full max-w-xs">
                <a href="tel:+966501234567" className="flex items-center gap-4 p-3 rounded-2xl bg-surface border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <div className="bg-background rounded-xl p-2.5 text-text-secondary group-hover:text-primary group-hover:scale-110 transition-all shadow-sm">
                    <Phone size={18} />
                  </div>
                  <span dir="ltr" className="text-text-primary font-medium text-sm">+966 50 123 4567</span>
                </a>
              </li>
              <li className="w-full max-w-xs">
                <a href="mailto:support@mot7km.com" className="flex items-center gap-4 p-3 rounded-2xl bg-surface border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <div className="bg-background rounded-xl p-2.5 text-text-secondary group-hover:text-primary group-hover:scale-110 transition-all shadow-sm">
                    <Mail size={18} />
                  </div>
                  <span className="text-text-primary font-medium text-sm">support@mot7km.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with integrated watermark */}
        <div className="relative flex flex-col items-center justify-center mt-8 pt-8 border-t border-white/5">
          {/* Massive Background Typography (Absolute to avoid pushing content) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full flex justify-center -z-10 opacity-40">
            <h1 className="text-[16vw] md:text-[14vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent tracking-tighter translate-y-1/4">
              MOT7KM
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-4">
            <p className="text-text-muted text-sm font-medium tracking-wide">
              {t("footer.rights")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-text-muted font-medium">
              <a href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("footer.usage")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}