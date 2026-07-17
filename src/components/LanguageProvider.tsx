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
    "nav.pricing": "الأسعار",
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
    "feat.web.short": "ويب",
    "feat.web.desc": "مركز التحكم الرئيسي. إدارة المنتجات، التقارير المالية، الموظفين، والتحليلات العميقة للمبيعات.",
    "feat.mobile.title": "تطبيقات الإدارة (الموبايل)",
    "feat.mobile.short": "تطبيق",
    "feat.mobile.desc": "تطبيق خفيف وسريع لمراقبة المبيعات اليومية، وتلقي الإشعارات اللحظية أينما كنت.",
    "feat.pos.title": "نقاط البيع (POS)",
    "feat.pos.short": "كاشير",
    "feat.pos.desc": "نظام كاشير موثوق يعمل حتى في حالة انقطاع الإنترنت (Offline-first) لضمان عدم توقف مبيعاتك.",
    "feat.qr.title": "المنيو الرقمي (QR)",
    "feat.qr.short": "منيو",
    "feat.qr.desc": "تجربة تصفح سريعة للعملاء تشبه المتاجر الإلكترونية، بدون الحاجة لتحميل أي تطبيقات.",
    "feat.web.longDesc": "تحكم كامل في إيراداتك ومصروفاتك من خلال لوحة تحكم سحابية بتصميم عصري يبرز أهم المؤشرات. تتبع مبيعات الفروع، إدارة دقيقة للمخزون والورديات، وتحليل تفصيلي لأداء الموظفين بضغطة زر.",
    "feat.web.b1": "تقارير مالية حية ومفصلة",
    "feat.web.b2": "إدارة سلاسل الفروع مركزياً",
    "feat.web.b3": "نظام صلاحيات متدرج للموظفين",
    "feat.web.review": "لوحة التحكم أنقذتنا من الفوضى! بضغطة واحدة أرى مبيعات كل الفروع، وأتخذ قرارات سريعة بناءً على أرقام دقيقة.",
    "feat.web.reviewer": "أحمد خ. - مؤسس سلسلة مطاعم",
    
    "feat.pos.longDesc": "نظام نقاط بيع صمم لسرعة الأداء وعدم الانقطاع. يعمل حتى في أسوأ ظروف الإنترنت (Offline-first)، مع واجهة مريحة للكاشير تمنع أخطاء الطلبات وتسرع من خدمة العملاء.",
    "feat.pos.b1": "دعم العمل بدون إنترنت (Offline)",
    "feat.pos.b2": "ربط مباشر مع المطبخ (KDS)",
    "feat.pos.b3": "دعم أجهزة متعددة وتوافق تام",
    "feat.pos.review": "سرعة استجابة الكاشير ممتازة، ولم نعد نقلق أبداً إذا انقطع الإنترنت، النظام يحتفظ بكل شيء ويزامن تلقائياً.",
    "feat.pos.reviewer": "سارة م. - مديرة مقهى",

    "feat.mobile.longDesc": "لا داعي للتواجد في المطعم طوال الوقت. تطبيق المدير يضع كل التفاصيل بين يديك: مبيعات لحظية، إشعارات بالغاء الطلبات، ومتابعة لأداء الورديات مباشرة من هاتفك.",
    "feat.mobile.b1": "إشعارات حية ومباشرة",
    "feat.mobile.b2": "تتبع مبيعات جميع الفروع",
    "feat.mobile.b3": "واجهة سريعة وخفيفة جداً",
    "feat.mobile.review": "التطبيق يغنيني عن التواجد في الفروع. أستطيع معرفة ذروة المبيعات ومن هو الكاشير الأفضل أينما كنت.",
    "feat.mobile.reviewer": "خالد أ. - مستثمر",

    "feat.qr.longDesc": "المنيو الرقمي ليس مجرد قائمة طعام، بل أداة مبيعات ذكية. اعرض أطباقك بصور جذابة، وادفع العملاء لطلب المزيد عبر اقتراحات ذكية ومبيعات متقاطعة.",
    "feat.qr.b1": "صور عالية الدقة وتصميم احترافي",
    "feat.qr.b2": "تحديثات لحظية للأسعار والأصناف",
    "feat.qr.b3": "بدون تحميل أي تطبيقات إضافية",
    "feat.qr.review": "مبيعاتنا زادت بشكل ملحوظ لأن العميل أصبح يرى صور الأطباق ويطلب الإضافات بسهولة من هاتفه الخاص.",
    "feat.qr.reviewer": "محمد ع. - صاحب لاونج",

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
    
    // Categories
    "faq.cat.general": "عامة",
    "faq.cat.pricing": "الباقات والاشتراكات",
    "faq.cat.tech": "التقنية والتشغيل",

    // General
    "faq.q.g1": "هل نظام Mot7km مناسب لنشاطي التجاري؟",
    "faq.a.g1": "نعم، النظام مرن جداً ومصمم ليناسب مختلف الأنشطة مثل المطاعم، الكافيهات، محلات العصير، الصالونات، ومحلات التجزئة.",
    "faq.q.g2": "هل يمكنني تجربة النظام قبل الدفع؟",
    "faq.a.g2": "بالتأكيد، يمكنك البدء بالباقة المجانية (المنيو الرقمي) أو طلب نسخة تجريبية (Demo) لتجربة الكاشير ولوحة التحكم كاملة.",
    "faq.q.g3": "ما الفرق بين المنيو الرقمي ونظام الـ POS؟",
    "faq.a.g3": "المنيو الرقمي يتيح لعملائك استعراض منتجاتك عبر الـ QR. أما نظام الـ POS (الكاشير) فهو النظام الشامل الذي يستخدمه موظفوك لتسجيل الطلبات، وطباعة الفواتير، وإدارة المخزون.",

    // Pricing
    "faq.q.p1": "هل توجد رسوم تأسيس أو دفعات مخفية؟",
    "faq.a.p1": "لا توجد أي رسوم خفية أو رسوم تأسيس. أنت تدفع فقط قيمة الاشتراك الموضحة في الباقة سواء شهرياً أو سنوياً.",
    "faq.q.p2": "كيف يمكنني الترقية أو تغيير باقتي؟",
    "faq.a.p2": "يمكنك ترقية باقتك في أي وقت مباشرة من لوحة التحكم الخاصة بك بضغطة زر واحدة.",
    "faq.q.p3": "ماذا تعني إعلانات المنيو في الباقة المجانية؟",
    "faq.a.p3": "باقة المنيو المجانية مخصصة للتجربة، وسيظهر بها إعلانات صغيرة غير مزعجة للعميل. للتمتع بمنيو خالٍ من الإعلانات بهويتك الخاصة، يمكنك الترقية لباقة Starter.",

    // Tech
    "faq.q.t1": "هل يعمل نظام الكاشير (POS) إذا انقطع الإنترنت؟",
    "faq.a.t1": "نعم، نظامنا مبني بتقنية (Offline-first)، أي أن عمليات البيع والطباعة مستمرة حتى لو انقطع الإنترنت، وستتم مزامنة البيانات تلقائياً فور عودته.",
    "faq.q.t2": "هل أحتاج إلى شراء أجهزة كاشير غالية؟",
    "faq.a.t2": "لا، Mot7km يعمل كـ (Web و App) على معظم الأجهزة الذكية والأجهزة اللوحية (الآيباد، الأندرويد، اللابتوب)، مما يوفر عليك تكاليف الأجهزة.",
    "faq.q.t3": "هل بياناتي المالية ومعلومات عملائي آمنة؟",
    "faq.a.t3": "بياناتك مشفرة بالكامل ومحفوظة على خوادم سحابية عالمية عالية الأمان. لا يمكن لأحد الوصول إليها غيرك أنت والموظفين المخولين من قبلك.",

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
    "nav.pricing": "Pricing",
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
    "feat.web.short": "Web",
    "feat.web.desc": "The main control center. Manage products, financial reports, employees, and deep sales analytics.",
    "feat.mobile.title": "Management Apps (Mobile)",
    "feat.mobile.short": "App",
    "feat.mobile.desc": "A light and fast app to monitor daily sales and receive real-time alerts wherever you are.",
    "feat.pos.title": "Point of Sale (POS)",
    "feat.pos.short": "POS",
    "feat.pos.desc": "A reliable cashier system that works offline to ensure your sales never stop.",
    "feat.qr.title": "Digital Menu (QR)",
    "feat.qr.short": "Menu",
    "feat.qr.desc": "A fast browsing experience for customers similar to e-commerce, with no app downloads required.",
    "feat.web.longDesc": "Full control over your revenue and expenses through a modern cloud dashboard that highlights key metrics. Track branch sales, manage inventory, and analyze staff performance with one click.",
    "feat.web.b1": "Live & detailed financial reports",
    "feat.web.b2": "Centralized multi-branch management",
    "feat.web.b3": "Granular staff permissions",
    "feat.web.review": "The dashboard saved us from chaos! With one click I see sales across all branches and make fast, data-driven decisions.",
    "feat.web.reviewer": "Ahmed K. - Restaurant Chain Founder",
    
    "feat.pos.longDesc": "A Point of Sale system built for speed and reliability. It works even in the worst internet conditions (Offline-first), with an intuitive UI that reduces order errors and speeds up service.",
    "feat.pos.b1": "Works completely offline",
    "feat.pos.b2": "Direct Kitchen Display (KDS) sync",
    "feat.pos.b3": "Multi-device cross compatibility",
    "feat.pos.review": "The POS speed is incredible, and we never worry if the internet drops. The system keeps everything and syncs automatically.",
    "feat.pos.reviewer": "Sarah M. - Cafe Manager",

    "feat.mobile.longDesc": "No need to be at the restaurant all the time. The Manager App puts everything in your hands: live sales, order cancellations alerts, and shift tracking directly from your phone.",
    "feat.mobile.b1": "Instant live push notifications",
    "feat.mobile.b2": "Track sales across branches",
    "feat.mobile.b3": "Lightning fast and lightweight",
    "feat.mobile.review": "The app means I don't have to be physically present. I can see sales peaks and the best performing cashier wherever I am.",
    "feat.mobile.reviewer": "Khaled A. - Investor",

    "feat.qr.longDesc": "The digital menu isn't just a list; it's a smart sales tool. Showcase your dishes with stunning photos and drive higher order values with smart upselling suggestions.",
    "feat.qr.b1": "High-res images & premium layout",
    "feat.qr.b2": "Real-time menu updates & pricing",
    "feat.qr.b3": "No app downloads required",
    "feat.qr.review": "Our sales increased significantly because customers now see beautiful photos of dishes and easily add extras from their phones.",
    "feat.qr.reviewer": "Mohamed A. - Lounge Owner",

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
    
    // Categories
    "faq.cat.general": "General",
    "faq.cat.pricing": "Pricing & Billing",
    "faq.cat.tech": "Technical & Setup",

    // General
    "faq.q.g1": "Is Mot7km suitable for my business type?",
    "faq.a.g1": "Yes, our system is highly flexible and designed for cafes, restaurants, retail shops, salons, and juice bars.",
    "faq.q.g2": "Can I try the system before paying?",
    "faq.a.g2": "Absolutely! You can start with our Free Plan for the digital menu, or request a demo to try the full POS and dashboard.",
    "faq.q.g3": "What's the difference between the QR Menu and the POS?",
    "faq.a.g3": "The QR Menu allows customers to view your items. The POS is the comprehensive cashier system your staff uses to take orders, print receipts, and manage inventory.",

    // Pricing
    "faq.q.p1": "Are there any setup fees or hidden costs?",
    "faq.a.p1": "No hidden fees and no setup costs. You only pay the subscription fee for your chosen plan, either monthly or annually.",
    "faq.q.p2": "How can I upgrade my plan?",
    "faq.a.p2": "You can seamlessly upgrade your plan at any time directly from your admin dashboard with a single click.",
    "faq.q.p3": "What are the 'Ads' in the Free Plan menu?",
    "faq.a.p3": "The free plan is intended for trial and basic use. It will show small, non-intrusive ads to your customers. For an ad-free experience with your brand identity, upgrade to the Starter plan.",

    // Tech
    "faq.q.t1": "Does the POS work if the internet goes down?",
    "faq.a.t1": "Yes. Our POS uses an 'Offline-first' architecture. Sales and printing continue without interruption, and data syncs automatically when the connection is restored.",
    "faq.q.t2": "Do I need to buy expensive cashier hardware?",
    "faq.a.t2": "No, Mot7km is device-agnostic. It runs flawlessly on most smart devices, tablets (iPads, Android), and laptops, saving you from expensive hardware costs.",
    "faq.q.t3": "Is my financial and customer data secure?",
    "faq.a.t3": "Your data is fully encrypted and stored on highly secure global cloud servers. Only you and authorized staff can access it.",

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
  const [language, setLanguageState] = useState<Language>("en"); // Initial state before hydration

  useEffect(() => {
    // Check local storage or browser preference
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLanguage(savedLang);
    } else {
      // Auto-detect system language
      const sysLang = navigator.language.toLowerCase();
      if (sysLang.startsWith("ar")) {
        setLanguage("ar");
      } else {
        setLanguage("en");
      }
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
