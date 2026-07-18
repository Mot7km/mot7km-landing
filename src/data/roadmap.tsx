// data/roadmap.ts
import { CheckCircle2, Clock, Sparkles, Rocket, type LucideIcon } from "lucide-react";

export interface RoadmapPhase {
  id: string;
  status: 'current' | 'next' | 'future';
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const getRoadmapPhases = (t: (key: string) => string): RoadmapPhase[] => [
  {
    id: "q1",
    status: "current",
    icon: CheckCircle2,
    title: t("rm.q1.title"),
    desc: t("rm.q1.desc"),
  },
  {
    id: "q2",
    status: "next",
    icon: Rocket,
    title: t("rm.q2.title"),
    desc: t("rm.q2.desc"),
  },
  {
    id: "q3",
    status: "future",
    icon: Clock,
    title: t("rm.q3.title"),
    desc: t("rm.q3.desc"),
  },
  {
    id: "q4",
    status: "future",
    icon: Sparkles,
    title: t("rm.q4.title"),
    desc: t("rm.q4.desc"),
  },
];

export const getPhaseStyles = (status: RoadmapPhase['status']) => {
  switch (status) {
    case 'current':
      return {
        color: "from-primary/20 to-primary/5",
        borderColor: "border-primary/30",
        iconColor: "text-primary",
        glow: "shadow-[0_0_30px_rgba(22,131,199,0.15)]",
        dot: "bg-primary border-primary/30 shadow-[0_0_15px_rgba(22,131,199,0.5)]",
        dotPing: true,
        statusLabel: "In Progress",
        labelColor: "text-primary",
      };
    case 'next':
      return {
        color: "from-secondary/20 to-secondary/5",
        borderColor: "border-secondary/30",
        iconColor: "text-secondary",
        glow: "shadow-[0_0_30px_rgba(15,118,110,0.15)]",
        dot: "bg-secondary border-secondary/30 shadow-[0_0_15px_rgba(15,118,110,0.5)]",
        dotPing: false,
        statusLabel: "Up Next",
        labelColor: "text-secondary",
      };
    case 'future':
    default:
      return {
        color: "from-surface/80 to-surface/40",
        borderColor: "border-white/5",
        iconColor: "text-text-muted",
        glow: "shadow-lg",
        dot: "bg-surface border-white/10",
        dotPing: false,
        statusLabel: "Planned",
        labelColor: "text-text-muted",
      };
  }
};