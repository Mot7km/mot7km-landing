"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation(); // uses your i18n instance

  return (
    <footer className="bg-surface border-t border-border pt-10 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          
          {/* Brand & description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img 
                src="/assets/logo/mot7km_logo%20(2).png" 
                alt="Mot7km Logo" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-2xl tracking-tight text-text-primary">
                Mot7km
              </span>
            </Link>
            <p className="text-text-secondary mb-6 leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-text-primary mb-6">{t("footer.links")}</h4>
            <ul className="space-y-4">
              {[t("nav.howItWorks"), t("nav.features"), t("nav.faq")].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / policies */}
          <div>
            <h4 className="font-bold text-text-primary mb-6">{t("footer.legal")}</h4>
            <ul className="space-y-4">
              {[t("footer.terms"), t("footer.privacy"), t("footer.usage")].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold text-text-primary mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4 text-text-secondary">
              <li>{t("footer.address")}</li>
              <li className="flex items-center gap-2">
                <span dir="ltr">+966 50 123 4567</span>
              </li>
              <li>support@mot7km.com</li>
            </ul>
          </div>

        </div>

        <div className="w-full h-px bg-border mb-8"></div>
        
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-text-muted text-sm gap-4 text-center md:text-start">
          <p>{t("footer.rights")}</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              {t("footer.made")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}