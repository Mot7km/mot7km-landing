import { Coffee, UtensilsCrossed, CupSoda, Gamepad2 } from "lucide-react";

export interface UseCase {
  id: string;
  icon: any; // Lucide icon component
  title: string;
  desc: string;
  color: string;      // Tailwind text color
  glowColor: string;  // CSS rgba or hex for background glow
  bg: string;         // Tailwind bg-* class
  border: string;     // Tailwind border-* class
  image: string;
}

export const getUseCases = (t: (key: string) => string): UseCase[] => [
  {
    id: "cafe",
    icon: Coffee,
    title: t("uc.cafe.title"),
    desc: t("uc.cafe.desc"),
    color: "text-primary",
    glowColor: "rgba(22, 131, 199, 0.4)",
    bg: "bg-primary/20",
    border: "border-primary/20",
    image: "/mockups/pos_terminal.png",
  },
  {
    id: "restaurant",
    icon: UtensilsCrossed,
    title: t("uc.restaurant.title"),
    desc: t("uc.restaurant.desc"),
    color: "text-secondary",
    glowColor: "rgba(15, 118, 110, 0.4)",
    bg: "bg-secondary/20",
    border: "border-secondary/20",
    image: "/mockups/web_dashboard.png",
  },
  {
    id: "juice",
    icon: CupSoda,
    title: t("uc.juice.title"),
    desc: t("uc.juice.desc"),
    color: "text-accent",
    glowColor: "rgba(6, 182, 212, 0.4)",
    bg: "bg-accent/20",
    border: "border-accent/20",
    image: "/mockups/mobile_app.png",
  },
  {
    id: "gaming",
    icon: Gamepad2,
    title: t("uc.gaming.title"),
    desc: t("uc.gaming.desc"),
    color: "text-success",
    glowColor: "rgba(16, 185, 129, 0.4)",
    bg: "bg-success/20",
    border: "border-success/20",
    image: "/mockups/qr_menu.png",
  },
];