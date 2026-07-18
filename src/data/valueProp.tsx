// data/valueProp.ts
import { TrendingUp, PieChart, LineChart, Users } from "lucide-react";

export interface ValueItem {
  key: string;        // translated question text
  icon: any;          // Lucide icon component
  color: string;      // Tailwind text color
  bg: string;         // Tailwind bg-* class
  border: string;     // Tailwind border-* class
}

export const getValueItems = (t: (key: string) => string): ValueItem[] => [
  {
    key: t("val.q1"),
    icon: TrendingUp,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    key: t("val.q2"),
    icon: PieChart,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  {
    key: t("val.q3"),
    icon: LineChart,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    key: t("val.q4"),
    icon: Users,
    color: "text-success",
    bg: "bg-success/10",
    border: "border-success/20",
  },
];

// Chart bar heights (percentage)
export const chartHeights: number[] = [40, 60, 30, 80, 50, 100, 70];

// Static stats (displayed in the dashboard mockup)
export const statsData = {
  sales: "12,450",
  salesChange: "+14.5%",
  customers: "142",
};

// Top item translation key (passed to t in the component)
export const topItemKey = "val.stat.topItem";