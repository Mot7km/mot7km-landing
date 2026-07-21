export type SolutionId = 'cafe' | 'restaurant' | 'juice' | 'gaming';

export interface SolutionPageData {
  id: SolutionId;
  themeColor: string;
  glowColor: string;
  hero: {
    badgeKey: string;
    titleKey: string;
    subtitleKey: string;
    image: string;
  };
  metrics: {
    value: string;
    labelKey: string;
  }[];
  overviewKey: string;
  benefits: {
    titleKey: string;
    descKey: string;
    icon: string;
  }[];
  rolesKeys: string[];
}

export const solutionsData: Record<SolutionId, SolutionPageData> = {
  cafe: {
    id: "cafe",
    themeColor: "text-primary",
    glowColor: "bg-primary/20",
    hero: {
      badgeKey: "solutions.cafe.badge",
      titleKey: "solutions.cafe.title",
      subtitleKey: "solutions.cafe.subtitle",
      image: "/mockups/pos_terminal.png"
    },
    metrics: [
      { value: "3x", labelKey: "solutions.cafe.m1" },
      { value: "0%", labelKey: "solutions.cafe.m2" },
      { value: "+35%", labelKey: "solutions.cafe.m3" }
    ],
    overviewKey: "solutions.cafe.overview",
    benefits: [
      { icon: "Zap", titleKey: "solutions.cafe.b1.title", descKey: "solutions.cafe.b1.desc" },
      { icon: "Coffee", titleKey: "solutions.cafe.b2.title", descKey: "solutions.cafe.b2.desc" },
      { icon: "QrCode", titleKey: "solutions.cafe.b3.title", descKey: "solutions.cafe.b3.desc" },
      { icon: "PieChart", titleKey: "solutions.cafe.b4.title", descKey: "solutions.cafe.b4.desc" }
    ],
    rolesKeys: ["owner", "manager", "cashier", "barista", "customer"]
  },
  restaurant: {
    id: "restaurant",
    themeColor: "text-secondary",
    glowColor: "bg-secondary/20",
    hero: {
      badgeKey: "solutions.restaurant.badge",
      titleKey: "solutions.restaurant.title",
      subtitleKey: "solutions.restaurant.subtitle",
      image: "/mockups/web_dashboard.png"
    },
    metrics: [
      { value: "100%", labelKey: "solutions.restaurant.m1" },
      { value: "-50%", labelKey: "solutions.restaurant.m2" },
      { value: "24/7", labelKey: "solutions.restaurant.m3" }
    ],
    overviewKey: "solutions.restaurant.overview",
    benefits: [
      { icon: "UtensilsCrossed", titleKey: "solutions.restaurant.b1.title", descKey: "solutions.restaurant.b1.desc" },
      { icon: "Users", titleKey: "solutions.restaurant.b2.title", descKey: "solutions.restaurant.b2.desc" },
      { icon: "ShieldCheck", titleKey: "solutions.restaurant.b3.title", descKey: "solutions.restaurant.b3.desc" },
      { icon: "Printer", titleKey: "solutions.restaurant.b4.title", descKey: "solutions.restaurant.b4.desc" }
    ],
    rolesKeys: ["owner", "manager", "cashier", "chef", "customer"]
  },
  juice: {
    id: "juice",
    themeColor: "text-accent",
    glowColor: "bg-accent/20",
    hero: {
      badgeKey: "solutions.juice.badge",
      titleKey: "solutions.juice.title",
      subtitleKey: "solutions.juice.subtitle",
      image: "/mockups/mobile_app.png"
    },
    metrics: [
      { value: "⚡ 2s", labelKey: "solutions.juice.m1" },
      { value: "+40%", labelKey: "solutions.juice.m2" },
      { value: "100%", labelKey: "solutions.juice.m3" }
    ],
    overviewKey: "solutions.juice.overview",
    benefits: [
      { icon: "CupSoda", titleKey: "solutions.juice.b1.title", descKey: "solutions.juice.b1.desc" },
      { icon: "Zap", titleKey: "solutions.juice.b2.title", descKey: "solutions.juice.b2.desc" },
      { icon: "Star", titleKey: "solutions.juice.b3.title", descKey: "solutions.juice.b3.desc" },
      { icon: "Clock", titleKey: "solutions.juice.b4.title", descKey: "solutions.juice.b4.desc" }
    ],
    rolesKeys: ["owner", "cashier", "customer"]
  },
  gaming: {
    id: "gaming",
    themeColor: "text-success",
    glowColor: "bg-success/20",
    hero: {
      badgeKey: "solutions.gaming.badge",
      titleKey: "solutions.gaming.title",
      subtitleKey: "solutions.gaming.subtitle",
      image: "/mockups/qr_menu.png"
    },
    metrics: [
      { value: "+60%", labelKey: "solutions.gaming.m1" },
      { value: "0 min", labelKey: "solutions.gaming.m2" },
      { value: "100%", labelKey: "solutions.gaming.m3" }
    ],
    overviewKey: "solutions.gaming.overview",
    benefits: [
      { icon: "Gamepad2", titleKey: "solutions.gaming.b1.title", descKey: "solutions.gaming.b1.desc" },
      { icon: "QrCode", titleKey: "solutions.gaming.b2.title", descKey: "solutions.gaming.b2.desc" },
      { icon: "Bell", titleKey: "solutions.gaming.b3.title", descKey: "solutions.gaming.b3.desc" },
      { icon: "PieChart", titleKey: "solutions.gaming.b4.title", descKey: "solutions.gaming.b4.desc" }
    ],
    rolesKeys: ["owner", "manager", "customer"]
  }
};
