import { ReactNode } from "react";

export type FeatureId = 'web' | 'pos' | 'mobile' | 'qr';

export interface DeepDive {
  titleKey: string;
  descKey: string;
  image: string;
  imagePosition: 'left' | 'right';
}

export interface Capability {
  icon: string; // We'll map this string to a component in the UI
  titleKey: string;
  descKey: string;
}

export interface FeaturePageData {
  id: FeatureId;
  themeColor: string;
  glowColor: string;
  hero: {
    badgeKey: string;
    titleKey: string;
    subtitleKey: string;
    image: string;
    frameType: 'browser' | 'mobile';
  };
  overviewKey: string;
  personas: string[];
  capabilities: Capability[];
  deepDives: DeepDive[];
}

export const featuresData: Record<FeatureId, FeaturePageData> = {
  web: {
    id: "web",
    themeColor: "text-primary",
    glowColor: "bg-primary/20",
    hero: {
      badgeKey: "featurePages.web.hero.badge",
      titleKey: "featurePages.web.hero.title",
      subtitleKey: "featurePages.web.hero.subtitle",
      image: "/mockups/web_dashboard.png",
      frameType: "browser"
    },
    overviewKey: "featurePages.web.overview",
    personas: ["owner", "manager"],
    capabilities: [
      { icon: "Settings", titleKey: "featurePages.web.cap1.title", descKey: "featurePages.web.cap1.desc" },
      { icon: "PieChart", titleKey: "featurePages.web.cap2.title", descKey: "featurePages.web.cap2.desc" },
      { icon: "Users", titleKey: "featurePages.web.cap3.title", descKey: "featurePages.web.cap3.desc" },
      { icon: "Link2", titleKey: "featurePages.web.cap4.title", descKey: "featurePages.web.cap4.desc" },
    ],
    deepDives: [
      {
        titleKey: "featurePages.web.dd1.title",
        descKey: "featurePages.web.dd1.desc",
        image: "/mockups/web_analytics.png",
        imagePosition: "right"
      },
      {
        titleKey: "featurePages.web.dd2.title",
        descKey: "featurePages.web.dd2.desc",
        image: "/mockups/web_menu.png",
        imagePosition: "left"
      }
    ]
  },
  pos: {
    id: "pos",
    themeColor: "text-accent",
    glowColor: "bg-accent/20",
    hero: {
      badgeKey: "featurePages.pos.hero.badge",
      titleKey: "featurePages.pos.hero.title",
      subtitleKey: "featurePages.pos.hero.subtitle",
      image: "/mockups/pos_terminal.png",
      frameType: "browser"
    },
    overviewKey: "featurePages.pos.overview",
    personas: ["cashier", "manager"],
    capabilities: [
      { icon: "WifiOff", titleKey: "featurePages.pos.cap1.title", descKey: "featurePages.pos.cap1.desc" },
      { icon: "Printer", titleKey: "featurePages.pos.cap2.title", descKey: "featurePages.pos.cap2.desc" },
      { icon: "ShieldCheck", titleKey: "featurePages.pos.cap3.title", descKey: "featurePages.pos.cap3.desc" },
      { icon: "Smartphone", titleKey: "featurePages.pos.cap4.title", descKey: "featurePages.pos.cap4.desc" },
    ],
    deepDives: [
      {
        titleKey: "featurePages.pos.dd1.title",
        descKey: "featurePages.pos.dd1.desc",
        image: "/mockups/pos_offline.png",
        imagePosition: "right"
      },
      {
        titleKey: "featurePages.pos.dd2.title",
        descKey: "featurePages.pos.dd2.desc",
        image: "/mockups/pos_shift.png",
        imagePosition: "left"
      }
    ]
  },
  mobile: {
    id: "mobile",
    themeColor: "text-secondary",
    glowColor: "bg-secondary/20",
    hero: {
      badgeKey: "featurePages.mobile.hero.badge",
      titleKey: "featurePages.mobile.hero.title",
      subtitleKey: "featurePages.mobile.hero.subtitle",
      image: "/mockups/mobile_app.png",
      frameType: "mobile"
    },
    overviewKey: "featurePages.mobile.overview",
    personas: ["owner", "manager", "worker"],
    capabilities: [
      { icon: "Bell", titleKey: "featurePages.mobile.cap1.title", descKey: "featurePages.mobile.cap1.desc" },
      { icon: "TrendingUp", titleKey: "featurePages.mobile.cap2.title", descKey: "featurePages.mobile.cap2.desc" },
      { icon: "Clock", titleKey: "featurePages.mobile.cap3.title", descKey: "featurePages.mobile.cap3.desc" },
      { icon: "CheckCircle2", titleKey: "featurePages.mobile.cap4.title", descKey: "featurePages.mobile.cap4.desc" },
    ],
    deepDives: [
      {
        titleKey: "featurePages.mobile.dd1.title",
        descKey: "featurePages.mobile.dd1.desc",
        image: "/mockups/mobile_alerts.png",
        imagePosition: "right"
      },
      {
        titleKey: "featurePages.mobile.dd2.title",
        descKey: "featurePages.mobile.dd2.desc",
        image: "/mockups/mobile_tasks.png",
        imagePosition: "left"
      }
    ]
  },
  qr: {
    id: "qr",
    themeColor: "text-success",
    glowColor: "bg-success/20",
    hero: {
      badgeKey: "featurePages.qr.hero.badge",
      titleKey: "featurePages.qr.hero.title",
      subtitleKey: "featurePages.qr.hero.subtitle",
      image: "/mockups/qr_menu.png",
      frameType: "mobile"
    },
    overviewKey: "featurePages.qr.overview",
    personas: ["customer"],
    capabilities: [
      { icon: "ImageIcon", titleKey: "featurePages.qr.cap1.title", descKey: "featurePages.qr.cap1.desc" },
      { icon: "Star", titleKey: "featurePages.qr.cap2.title", descKey: "featurePages.qr.cap2.desc" },
      { icon: "Search", titleKey: "featurePages.qr.cap3.title", descKey: "featurePages.qr.cap3.desc" },
      { icon: "MousePointerClick", titleKey: "featurePages.qr.cap4.title", descKey: "featurePages.qr.cap4.desc" },
    ],
    deepDives: [
      {
        titleKey: "featurePages.qr.dd1.title",
        descKey: "featurePages.qr.dd1.desc",
        image: "/mockups/qr_details.png",
        imagePosition: "right"
      },
      {
        titleKey: "featurePages.qr.dd2.title",
        descKey: "featurePages.qr.dd2.desc",
        image: "/mockups/qr_feedback.png",
        imagePosition: "left"
      }
    ]
  }
};
