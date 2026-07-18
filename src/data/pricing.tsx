// data/pricing.ts
export interface PricingPlan {
  name: string;
  subtitle: string;
  description: string;
  price: string;           // e.g. "499" or "Custom"
  priceNote: string;
  popular: boolean;
  color: string;           // Tailwind bg-gradient classes
  border: string;          // Tailwind border classes
  glow: string;            // Tailwind shadow classes
  features: string[];
  missing: string[];
}

export const getPricingPlans = (t: (key: string) => string): PricingPlan[] => [
  {
    name: t("p1.name"),
    subtitle: t("p1.sub"),
    description: t("p1.desc"),
    price: "499",
    priceNote: t("plan.month"),
    popular: false,
    color: "from-surface/80 to-surface/30",
    border: "border-white/10",
    glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
    features: [t("p1.f1"), t("p1.f2"), t("p1.f3"), t("p1.f4"), t("p1.f5")],
    missing: [t("p1.m1"), t("p1.m2")],
  },
  {
    name: t("p3.name"),
    subtitle: t("p3.sub"),
    description: t("p3.desc"),
    price: "1,599",
    priceNote: t("plan.month"),
    popular: true,
    color: "from-primary/20 via-primary/10 to-surface/40",
    border: "border-primary/50",
    glow: "shadow-[0_0_50px_rgba(22,131,199,0.2)] hover:shadow-[0_0_70px_rgba(22,131,199,0.3)]",
    features: [t("p3.f1"), t("p3.f2"), t("p3.f3"), t("p3.f4"), t("p3.f5"), t("p3.f6")],
    missing: [t("p3.m1")],
  },
  {
    name: t("p5.name"),
    subtitle: t("p5.sub"),
    description: t("p5.desc"),
    price: "Custom",
    priceNote: t("plan.custom"),
    popular: false,
    color: "from-surface/80 to-surface/30",
    border: "border-white/10",
    glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
    features: [t("p5.f1"), t("p5.f2"), t("p5.f3"), t("p5.f4"), t("p5.f5")],
    missing: [],
  },
];