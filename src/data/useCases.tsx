import { Coffee, UtensilsCrossed, CupSoda, Gamepad2, Users } from "lucide-react";

export interface UseCase {
  id: string;
  icon: any; // Lucide icon component
  title: string;
  desc: string;
  roles: string[];
  color: string;      // Tailwind text color
  glowColor: string;  // CSS rgba or hex for background glow
  bg: string;         // Tailwind bg-* class
  border: string;     // Tailwind border-* class
  image: string;
  metricValue: string;
  metricLabel: string;
}

export const getUseCases = (t: (key: string, options?: any) => any): UseCase[] => [
  {
    id: "cafe",
    icon: Coffee,
    title: t("uc.cafe.title"),
    desc: t("uc.cafe.desc"),
    roles: Array.isArray(t("uc.cafe.roles", { returnObjects: true })) ? t("uc.cafe.roles", { returnObjects: true }) : [],
    color: "text-primary",
    glowColor: "rgba(22, 131, 199, 0.4)",
    bg: "bg-primary/20",
    border: "border-primary/20",
    image: "/mockups/pos_terminal.png",
    metricValue: "⚡ 3s",
    metricLabel: t("uc.cafe.metricLabel")
  },
  {
    id: "restaurant",
    icon: UtensilsCrossed,
    title: t("uc.restaurant.title"),
    desc: t("uc.restaurant.desc"),
    roles: Array.isArray(t("uc.restaurant.roles", { returnObjects: true })) ? t("uc.restaurant.roles", { returnObjects: true }) : [],
    color: "text-secondary",
    glowColor: "rgba(15, 118, 110, 0.4)",
    bg: "bg-secondary/20",
    border: "border-secondary/20",
    image: "/mockups/web_dashboard.png",
    metricValue: "100%",
    metricLabel: t("uc.restaurant.metricLabel")
  },
  {
    id: "juice",
    icon: CupSoda,
    title: t("uc.juice.title"),
    desc: t("uc.juice.desc"),
    roles: Array.isArray(t("uc.juice.roles", { returnObjects: true })) ? t("uc.juice.roles", { returnObjects: true }) : [],
    color: "text-accent",
    glowColor: "rgba(6, 182, 212, 0.4)",
    bg: "bg-accent/20",
    border: "border-accent/20",
    image: "/mockups/mobile_app.png",
    metricValue: "+40%",
    metricLabel: t("uc.juice.metricLabel")
  },
  {
    id: "gaming",
    icon: Gamepad2,
    title: t("uc.gaming.title"),
    desc: t("uc.gaming.desc"),
    roles: Array.isArray(t("uc.gaming.roles", { returnObjects: true })) ? t("uc.gaming.roles", { returnObjects: true }) : [],
    color: "text-success",
    glowColor: "rgba(16, 185, 129, 0.4)",
    bg: "bg-success/20",
    border: "border-success/20",
    image: "/mockups/qr_menu.png",
    metricValue: "0 min",
    metricLabel: t("uc.gaming.metricLabel")
  },
];