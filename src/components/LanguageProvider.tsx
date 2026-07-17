"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple dictionary for the landing page
const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navbar
    "nav.product": "المنتج",
    "nav.features": "المميزات",
    "nav.useCases": "استخدامات النظام",
    "nav.howItWorks": "آلية العمل",
    "nav.roadmap": "خارطة الطريق",
    "nav.faq": "الأسئلة الشائعة",
    "nav.demo": "اطلب عرضاً",
    "nav.language": "English",
    
    // Hero
    "hero.badge": "النظام الأذكى لإدارة المطاعم والكافيهات",
    "hero.title1": "تحكم ذكي ومطلق",
    "hero.title2": "بمطعمك في مكان واحد",
    "hero.desc": "نظام تشغيل متكامل السحابي (SaaS) مصمم خصيصاً للمقاهي، المطاعم، محلات العصير، وبلايستيشن كافيه. إدارة المبيعات، الفروع، والموظفين بكل سهولة.",
    "hero.cta1": "ابدأ تجربتك المجانية",
    "hero.cta2": "شاهد النظام",
    "hero.stat1": "لوحة تحكم شاملة",
    "hero.stat2": "تطبيقات إدارية",
    
    // Features
    "features.title1": "نظام واحد،",
    "features.title2": "متعدد الواجهات",
    "features.desc": "لم نقم ببناء تطبيق واحد، بل نظام تشغيل متكامل يوفر الواجهة المناسبة للشخص المناسب، في الوقت المناسب.",
    "feat.web.title": "لوحة تحكم الإدارة (الويب)",
    "feat.web.desc": "مركز التحكم الرئيسي. إدارة المنتجات، التقارير المالية، الموظفين، والتحليلات العميقة للمبيعات.",
    "feat.mobile.title": "تطبيقات الإدارة (الموبايل)",
    "feat.mobile.desc": "تطبيق خفيف وسريع لمراقبة المبيعات اليومية، وتلقي الإشعارات اللحظية أينما كنت.",
    "feat.pos.title": "نقاط البيع (POS)",
    "feat.pos.desc": "نظام كاشير موثوق يعمل حتى في حالة انقطاع الإنترنت (Offline-first) لضمان عدم توقف مبيعاتك.",
    "feat.qr.title": "المنيو الرقمي (QR)",
    "feat.qr.desc": "تجربة تصفح سريعة للعملاء تشبه المتاجر الإلكترونية، بدون الحاجة لتحميل أي تطبيقات.",

    // Use Cases
    "useCases.title1": "مصمم خصيصاً",
    "useCases.title2": "لنشاطك التجاري",
    "useCases.desc": "نظام مرن يتكيف مع طريقة عملك سواء كنت تدير مقهى صغير أو سلسلة مطاعم.",
    "uc.cafe.title": "المقاهي والكافيهات",
    "uc.cafe.desc": "سرعة في تسجيل الطلبات، منيو رقمي تفاعلي، وتتبع لحركة المخزون.",
    "uc.restaurant.title": "المطاعم",
    "uc.restaurant.desc": "إدارة الطاولات، نظام كيتشن، وإدارة تفصيلية للورديات والموظفين.",
    "uc.juice.title": "محلات العصير والآيسكريم",
    "uc.juice.desc": "شاشة طلبات سريعة، وإدارة إضافات ونكهات متعددة بسهولة.",
    "uc.gaming.title": "بلايستيشن كافيه",
    "uc.gaming.desc": "منيو رقمي للطلبات المباشرة من الطاولة لتجربة لعب غير منقطعة.",

    // Value Prop
    "value.title1": "إجابات فورية",
    "value.title2": "لأهم أسئلة عملك",
    "value.desc": "حول إدارة عملك التقليدية إلى عملية حديثة مبنية على البيانات. نظام Mot7km يجيب على أسئلتك اللحظية بدقة متناهية.",
    "val.q1": "كم كانت مبيعاتي اليوم؟",
    "val.q2": "ما هي المنتجات الأكثر مبيعاً؟",
    "val.q3": "كيف هو أداء كل فرع؟",
    "val.q4": "ماذا يفعل الموظفون الآن؟",
    "val.stat.sales": "مبيعات اليوم",
    "val.stat.top": "الأكثر مبيعاً",
    "val.stat.topItem": "موهيتو توت",
    "val.stat.customers": "العملاء اليوم",
    
    // Roadmap
    "roadmap.title1": "خارطة الطريق",
    "roadmap.title2": "والتطوير المستمر",
    "roadmap.desc": "تعرف على مراحل تطور النظام والميزات القادمة لضمان بقاء عملك في المقدمة.",
    "rm.q1.title": "المنيو الذكي (الآن)",
    "rm.q1.desc": "منيو رقمي متكامل مع لوحة تحكم، تقييمات، وتطبيق للإدارة السريعة.",
    "rm.q2.title": "نقاط البيع والتطبيقات (قريباً)",
    "rm.q2.desc": "كاشير يعمل بدون إنترنت (Offline-first) مع تطبيقات للموظفين لضبط الحضور والمبيعات.",
    "rm.q3.title": "إدارة العمليات المتقدمة",
    "rm.q3.desc": "تتبع دقيق للمصروفات، إدارة مخزون مبسطة، وتطبيقات خاصة لمدراء الفروع.",
    "rm.q4.title": "تحليلات الذكاء الاصطناعي",
    "rm.q4.desc": "توقعات المبيعات، تحليل أداء الموظفين، وتقارير استباقية مبنية على الذكاء الاصطناعي.",

    // Pricing
    "pricing.title1": "باقات",
    "pricing.title2": "تناسب حجم عملك",
    "pricing.desc": "ابدأ مجاناً وقم بترقية باقتك متى ما احتجت لمميزات أقوى وإدارة أعمق.",
    "plan.popular": "الأكثر طلباً",
    "plan.choose": "اختر الباقة",
    "plan.free": "مجاناً",
    "plan.month": "جنيه / شهر",
    "plan.custom": "تواصل معنا",

    // Free Plan
    "pf.name": "الباقة المجانية",
    "pf.sub": "Free QR Menu",
    "pf.desc": "لتجربة النظام بشكل مبدئي بخصائص محدودة.",
    "pf.f1": "منيو رقمي (QR Menu)",
    "pf.f2": "لوحة تحكم وتطبيق الجوال للمالك",
    "pf.f3": "بحث في المنيو",
    "pf.m1": "إعلانات داخل المنيو",
    "pf.m2": "عدد محدود من المنتجات (مثال: 50)",
    "pf.m3": "بدون نقاط بيع أو إحصائيات",

    // Starter Plan
    "p1.name": "Starter",
    "p1.sub": "Smart QR Menu",
    "p1.desc": "مثالي لبناء هوية رقمية احترافية بدون إعلانات.",
    "p1.f1": "منيو رقمي (QR Menu) بدون إعلانات",
    "p1.f2": "إضافة تصنيفات ومنتجات غير محدودة",
    "p1.f3": "بحث متقدم وتخصيص هوية العلامة التجارية (Basic Branding)",
    "p1.f4": "لوحة تحكم وتطبيق الجوال للمالك",
    "p1.f5": "دعم فرع واحد (1 Branch)",
    "p1.m1": "بدون نقاط بيع (POS)",
    "p1.m2": "بدون تقارير مبيعات متقدمة",

    // Business Plan
    "p2.name": "Business",
    "p2.sub": "Control & Tracking",
    "p2.desc": "للأنشطة التي تحتاج تتبع مبيعات ومصروفات يومية.",
    "p2.f1": "كل مميزات باقة Starter",
    "p2.f2": "تتبع المبيعات وإصدار تقارير يومية/شهرية",
    "p2.f3": "تتبع المصروفات الأساسية",
    "p2.f4": "نظرة عامة سريعة عبر تطبيق الجوال",
    "p2.f5": "دعم فرع واحد (1 Branch)",
    "p2.m1": "كاشير متكامل (Offline POS)",
    "p2.m2": "إدارة ورديات الموظفين",

    // Pro Plan
    "p3.name": "Pro",
    "p3.sub": "Full POS & Staff",
    "p3.desc": "نظام كاشير متكامل لإدارة العمليات اليومية.",
    "p3.f1": "كل مميزات باقة Business",
    "p3.f2": "نظام كاشير (Full POS) يعمل بدون إنترنت",
    "p3.f3": "إدارة الموظفين والورديات (Shift Management)",
    "p3.f4": "تطبيق خاص لمدير الفرع",
    "p3.f5": "تقارير متقدمة",
    "p3.f6": "دعم فرع أو فرعين (حسب التغليف)",
    "p3.m1": "صلاحيات مركزية متقدمة",

    // Premium Plan
    "p4.name": "Premium / Multi-Branch",
    "p4.sub": "Advanced Analytics",
    "p4.desc": "للسلاسل والمطاعم متعددة الفروع التي تحتاج إدارة مركزية.",
    "p4.f1": "كل مميزات باقة Pro",
    "p4.f2": "دعم فروع متعددة (Multi-Branch)",
    "p4.f3": "إدارة مركزية لجميع الفروع",
    "p4.f4": "تحليلات متقدمة للأداء بين الفروع",
    "p4.f5": "نظام صلاحيات متقدم ومفصل للموظفين",

    // Enterprise Plan
    "p5.name": "Enterprise",
    "p5.sub": "Custom Solutions",
    "p5.desc": "للشركات الكبرى التي تحتاج حلولاً وتكاملات مخصصة.",
    "p5.f1": "دعم عدد كبير من الفروع",
    "p5.f2": "تدريب مخصص (Custom Onboarding)",
    "p5.f3": "دعم فني مخصص (Dedicated Support & SLA)",
    "p5.f4": "مساعدة في نقل البيانات (Migration)",
    "p5.f5": "تكاملات مخصصة مستقبلاً (Custom Integrations)",

    // FAQ
    "faq.title1": "الأسئلة",
    "faq.title2": "الشائعة",
    "faq.desc": "كل ما تود معرفته عن نظام Mot7km وكيف يمكنه خدمة نشاطك.",
    "faq.q1": "هل يمكنني الترقية من الباقة المجانية أو Starter لاحقاً؟",
    "faq.a1": "بالتأكيد، يمكنك البدء بالباقة المجانية أو باقة Starter للحصول على منيو رقمي، وعندما يتوسع عملك وتحتاج إلى نظام كاشير وإدارة، يمكنك الترقية إلى باقة Business أو Pro في أي وقت بضغطة زر.",
    "faq.q2": "ماذا تعني إعلانات المنيو في الباقة المجانية؟",
    "faq.a2": "الباقة المجانية مخصصة للتجربة، وسيتم عرض إعلانات صغيرة غير مزعجة للعملاء عند تصفحهم للمنيو الخاص بك. للتمتع بمنيو خالٍ من الإعلانات تماماً وبمظهر احترافي لعلامتك التجارية، ننصحك بالترقية لباقة Starter.",
    "faq.q3": "هل يعمل نظام الكاشير (POS) إذا انقطع الإنترنت؟",
    "faq.a3": "نعم، في باقة Pro فما فوق، نظام الكاشير مصمم بتقنية (Offline-first)، مما يعني أن عمليات البيع والطباعة ستستمر بشكل طبيعي حتى عند انقطاع الإنترنت، وسيقوم النظام بمزامنة البيانات تلقائياً فور عودة الاتصال.",
    "faq.q4": "هل أحتاج إلى شراء أجهزة خاصة لعمل النظام؟",
    "faq.a4": "لا، Mot7km هو نظام سحابي مرن، يمكنك استخدام لوحة التحكم من أي متصفح ويب (كمبيوتر، لابتوب، آيباد). وتطبيقات الكاشير والإدارة ستعمل على الأجهزة الذكية المتوفرة لديك دون الحاجة لأجهزة مخصصة ومكلفة.",

    // Footer
    "footer.desc": "نظام تشغيل متكامل السحابي (SaaS) مصمم خصيصاً للمقاهي والمطاعم لإدارة العمليات بكل سهولة وذكاء.",
    "footer.links": "الروابط السريعة",
    "footer.legal": "قانوني",
    "footer.contact": "تواصل معنا",
    "footer.address": "مصر، القاهرة",
    "footer.rights": "© 2026 Mot7km. جميع الحقوق محفوظة.",
    "footer.made": "صنع بكل ❤ لقطاع المطاعم",
  },
  en: {
    // Navbar
    "nav.product": "Product",
    "nav.features": "Features",
    "nav.useCases": "Use Cases",
    "nav.howItWorks": "How It Works",
    "nav.roadmap": "Roadmap",
    "nav.faq": "FAQ",
    "nav.demo": "Request a Demo",
    "nav.language": "عربي",
    
    // Hero
    "hero.badge": "The Smartest Management System for F&B",
    "hero.title1": "Absolute & Smart Control",
    "hero.title2": "Over Your Restaurant",
    "hero.desc": "A complete cloud operating system (SaaS) tailored for cafes, restaurants, juice shops, and gaming lounges. Manage sales, branches, and staff effortlessly.",
    "hero.cta1": "Start Free Trial",
    "hero.cta2": "Watch Demo",
    "hero.stat1": "Comprehensive Dashboard",
    "hero.stat2": "Management Apps",
    
    // Features
    "features.title1": "One System,",
    "features.title2": "Multiple Surfaces",
    "features.desc": "We didn't just build one app; we built an operating system that provides the right interface for the right person at the right time.",
    "feat.web.title": "Admin Dashboard (Web)",
    "feat.web.desc": "The main control center. Manage products, financial reports, employees, and deep sales analytics.",
    "feat.mobile.title": "Management Apps (Mobile)",
    "feat.mobile.desc": "A light and fast app to monitor daily sales and receive real-time alerts wherever you are.",
    "feat.pos.title": "Point of Sale (POS)",
    "feat.pos.desc": "A reliable cashier system that works offline to ensure your sales never stop.",
    "feat.qr.title": "Digital Menu (QR)",
    "feat.qr.desc": "A fast browsing experience for customers similar to e-commerce, with no app downloads required.",

    // Use Cases
    "useCases.title1": "Tailored for",
    "useCases.title2": "Your Business",
    "useCases.desc": "A flexible system that adapts to how you work, whether you run a small cafe or a restaurant chain.",
    "uc.cafe.title": "Cafes & Coffee Shops",
    "uc.cafe.desc": "Fast order processing, interactive QR menu, and precise inventory tracking.",
    "uc.restaurant.title": "Restaurants",
    "uc.restaurant.desc": "Table management, kitchen display system, and detailed shift/staff management.",
    "uc.juice.title": "Juice & Ice Cream",
    "uc.juice.desc": "Quick ordering interface and easy management of multiple add-ons and flavors.",
    "uc.gaming.title": "Gaming Lounges",
    "uc.gaming.desc": "Direct-to-table QR ordering for an uninterrupted gaming experience.",

    // Value Prop
    "value.title1": "Instant Answers",
    "value.title2": "to Your Biggest Questions",
    "value.desc": "Transform your traditional management into a modern, data-driven operation. Mot7km answers your real-time questions with extreme accuracy.",
    "val.q1": "How much did I sell today?",
    "val.q2": "What are the top selling items?",
    "val.q3": "How is each branch performing?",
    "val.q4": "What are the staff doing now?",
    "val.stat.sales": "Today's Sales",
    "val.stat.top": "Top Selling",
    "val.stat.topItem": "Berry Mojito",
    "val.stat.customers": "Customers Today",

    // Roadmap
    "roadmap.title1": "Roadmap &",
    "roadmap.title2": "Continuous Evolution",
    "roadmap.desc": "Explore our development stages and upcoming features ensuring your business stays ahead.",
    "rm.q1.title": "Smart Menu (Now)",
    "rm.q1.desc": "Complete digital menu with dashboard, reviews, and quick management mobile app.",
    "rm.q2.title": "POS & Apps (Soon)",
    "rm.q2.desc": "Offline-first cashier and staff apps for attendance and sales tracking.",
    "rm.q3.title": "Advanced Operations",
    "rm.q3.desc": "Precise expense tracking, simplified inventory, and branch manager apps.",
    "rm.q4.title": "AI Analytics",
    "rm.q4.desc": "Sales forecasting, staff performance analysis, and AI-driven proactive reports.",
    
    // Pricing
    "pricing.title1": "Plans",
    "pricing.title2": "That Fit Your Size",
    "pricing.desc": "Start for free and upgrade whenever you need more power and deeper management.",
    "plan.popular": "Most Popular",
    "plan.choose": "Choose Plan",
    "plan.free": "Free",
    "plan.month": "EGP / Month",
    "plan.custom": "Contact Us",
    
    // Free Plan
    "pf.name": "Free Plan",
    "pf.sub": "Free QR Menu",
    "pf.desc": "Try out the basic menu experience.",
    "pf.f1": "Digital QR Menu",
    "pf.f2": "Owner Dashboard & Mobile App",
    "pf.f3": "Menu Search",
    "pf.m1": "Contains Ads in Menu",
    "pf.m2": "Limited Number of Items (e.g. 50)",
    "pf.m3": "No POS or Analytics",

    // Starter Plan
    "p1.name": "Starter",
    "p1.sub": "Smart QR Menu",
    "p1.desc": "Perfect for a professional digital identity.",
    "p1.f1": "Ad-free Digital QR Menu",
    "p1.f2": "Unlimited Categories & Products",
    "p1.f3": "Advanced Search & Basic Branding",
    "p1.f4": "Owner Dashboard & Mobile App",
    "p1.f5": "Supports 1 Branch",
    "p1.m1": "No POS System",
    "p1.m2": "No Advanced Sales Reports",

    // Business Plan
    "p2.name": "Business",
    "p2.sub": "Control & Tracking",
    "p2.desc": "For businesses needing sales and expense tracking.",
    "p2.f1": "All Starter Features",
    "p2.f2": "Sales Tracking & Daily/Monthly Reports",
    "p2.f3": "Basic Expense Tracking",
    "p2.f4": "Quick Overview via Mobile App",
    "p2.f5": "Supports 1 Branch",
    "p2.m1": "No Offline POS",
    "p2.m2": "No Shift Management",

    // Pro Plan
    "p3.name": "Pro",
    "p3.sub": "Full POS & Staff",
    "p3.desc": "Complete POS system for daily operations.",
    "p3.f1": "All Business Features",
    "p3.f2": "Offline-first Full POS System",
    "p3.f3": "Staff & Shift Management",
    "p3.f4": "Dedicated Branch Manager App",
    "p3.f5": "Advanced Reporting",
    "p3.f6": "Supports 1 or 2 Branches",
    "p3.m1": "No Advanced Central Permissions",

    // Premium Plan
    "p4.name": "Premium / Multi-Branch",
    "p4.sub": "Advanced Analytics",
    "p4.desc": "For chains needing centralized management.",
    "p4.f1": "All Pro Features",
    "p4.f2": "Multi-Branch Support",
    "p4.f3": "Centralized Management for all branches",
    "p4.f4": "Advanced Cross-branch Analytics",
    "p4.f5": "Advanced & Granular Staff Permissions",

    // Enterprise Plan
    "p5.name": "Enterprise",
    "p5.sub": "Custom Solutions",
    "p5.desc": "For large businesses needing custom integrations.",
    "p5.f1": "Large Number of Branches",
    "p5.f2": "Custom Onboarding",
    "p5.f3": "Dedicated Support & SLA",
    "p5.f4": "Data Migration Assistance",
    "p5.f5": "Future Custom Integrations",

    // FAQ
    "faq.title1": "Frequently Asked",
    "faq.title2": "Questions",
    "faq.desc": "Everything you need to know about Mot7km and how it can serve your business.",
    "faq.q1": "Can I upgrade from Free or Starter later?",
    "faq.a1": "Absolutely. You can start with the Free or Starter plan to get your digital menu up and running. When your business grows and you need a POS and deeper management, you can upgrade to Business or Pro anytime with a single click.",
    "faq.q2": "What does 'Ads in Menu' mean for the Free Plan?",
    "faq.a2": "The Free plan is meant for trial and basic use, so it includes small, non-intrusive ads displayed to your customers while browsing the menu. For a completely ad-free, professional, and branded experience, we recommend upgrading to the Starter plan.",
    "faq.q3": "Does the POS system work if the internet goes down?",
    "faq.a3": "Yes. On the Pro plan and above, our POS system is built with an 'Offline-first' architecture. Sales and printing operations will continue normally even during an outage, and data will automatically sync once the connection is restored.",
    "faq.q4": "Do I need to buy special hardware?",
    "faq.a4": "No, Mot7km is a flexible cloud system. You can use the admin dashboard from any web browser (PC, Laptop, iPad). The POS and management apps will work on standard smart devices you already own, without needing expensive proprietary hardware.",

    // Footer
    "footer.desc": "A complete cloud operating system (SaaS) tailored for cafes and restaurants to manage operations effortlessly and smartly.",
    "footer.links": "Quick Links",
    "footer.legal": "Legal",
    "footer.contact": "Contact Us",
    "footer.address": "Cairo, Egypt",
    "footer.rights": "© 2026 Mot7km. All rights reserved.",
    "footer.made": "Made with ❤ for the F&B industry",
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en"); // Set default to 'en' since user asked for it

  useEffect(() => {
    // Check local storage or browser preference
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
