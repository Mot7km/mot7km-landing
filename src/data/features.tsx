import { ReactNode } from "react";
import { MonitorDot, Smartphone, QrCode, Store } from "lucide-react";

export type TabId = "web" | "pos" | "mobile" | "qr";

export interface TabItem {
  id: TabId;
  icon: ReactNode;
  titleDesktop: string;
  titleMobile: string;
}

export interface FeatureContent {
  title: string;
  desc: string;
  bullets: string[];
  review: string;
  reviewer: string;
  image: string;
  glowColor: string;
  accent: string;
  gradient: string;
}

export type ContentMap = Record<TabId, FeatureContent>;

// Factory function to get tabs with translations
export const getFeaturesTabs = (t: (key: string) => string): TabItem[] => [
  {
    id: "web",
    icon: <MonitorDot size={20} />,
    titleDesktop: t("feat.web.title"),
    titleMobile: t("feat.web.short"),
  },
  {
    id: "pos",
    icon: <Store size={20} />,
    titleDesktop: t("feat.pos.title"),
    titleMobile: t("feat.pos.short"),
  },
  {
    id: "mobile",
    icon: <Smartphone size={20} />,
    titleDesktop: t("feat.mobile.title"),
    titleMobile: t("feat.mobile.short"),
  },
  {
    id: "qr",
    icon: <QrCode size={20} />,
    titleDesktop: t("feat.qr.title"),
    titleMobile: t("feat.qr.short"),
  },
];

// Factory function to get content map with translations
export const getFeaturesContent = (t: (key: string) => string): ContentMap => ({
  web: {
    title: t("feat.web.title"),
    desc: t("feat.web.longDesc"),
    bullets: [t("feat.web.b1"), t("feat.web.b2"), t("feat.web.b3")],
    review: t("feat.web.review"),
    reviewer: t("feat.web.reviewer"),
    image: "/mockups/web_dashboard.png",
    glowColor: "bg-primary/20",
    accent: "text-primary",
    gradient: "from-primary/20 to-transparent",
  },
  pos: {
    title: t("feat.pos.title"),
    desc: t("feat.pos.longDesc"),
    bullets: [t("feat.pos.b1"), t("feat.pos.b2"), t("feat.pos.b3")],
    review: t("feat.pos.review"),
    reviewer: t("feat.pos.reviewer"),
    image: "/mockups/pos_terminal.png",
    glowColor: "bg-accent/20",
    accent: "text-accent",
    gradient: "from-accent/20 to-transparent",
  },
  mobile: {
    title: t("feat.mobile.title"),
    desc: t("feat.mobile.longDesc"),
    bullets: [t("feat.mobile.b1"), t("feat.mobile.b2"), t("feat.mobile.b3")],
    review: t("feat.mobile.review"),
    reviewer: t("feat.mobile.reviewer"),
    image: "/mockups/mobile_app.png",
    glowColor: "bg-secondary/20",
    accent: "text-secondary",
    gradient: "from-secondary/20 to-transparent",
  },
  qr: {
    title: t("feat.qr.title"),
    desc: t("feat.qr.longDesc"),
    bullets: [t("feat.qr.b1"), t("feat.qr.b2"), t("feat.qr.b3")],
    review: t("feat.qr.review"),
    reviewer: t("feat.qr.reviewer"),
    image: "/mockups/qr_menu.png",
    glowColor: "bg-success/20",
    accent: "text-success",
    gradient: "from-success/20 to-transparent",
  },
});