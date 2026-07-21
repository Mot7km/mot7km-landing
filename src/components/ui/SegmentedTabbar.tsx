"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TabItem<T = string | number> {
  id: T;
  title: string;
  titleMobile?: string;
  icon?: React.ReactNode;
  activeColorClass?: string;
}

interface SegmentedTabbarProps<T = string | number> {
  tabs: TabItem<T>[];
  activeTab: T;
  onChange: (id: T) => void;
  layoutId?: string;
  sticky?: boolean;
  stickyTopClass?: string;
  className?: string;
}

export default function SegmentedTabbar<T = string | number>({
  tabs,
  activeTab,
  onChange,
  layoutId = "segmentedTabActive",
  sticky = true,
  stickyTopClass = "top-[72px] md:top-24",
  className = ""
}: SegmentedTabbarProps<T>) {
  return (
    <div className={`${sticky ? `sticky ${stickyTopClass} z-40` : "relative z-10"} flex justify-center mb-10 sm:mb-14 md:mb-16 w-full py-3 md:py-0 ${className}`}>
      <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-surface/80 md:bg-surface/50 backdrop-blur-2xl md:backdrop-blur-md border border-white/10 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] w-fit max-w-full mx-auto overflow-x-auto snap-x snap-mandatory hide-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const displayMobileTitle = tab.titleMobile || tab.title;
          const hasIcon = Boolean(tab.icon);

          return (
            <button
              key={String(tab.id)}
              onClick={() => onChange(tab.id)}
              className={`relative flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 z-10 whitespace-nowrap shrink-0 snap-center cursor-pointer ${
                isActive
                  ? "text-white gap-1.5 sm:gap-2"
                  : "text-text-muted hover:text-white hover:bg-white/5 gap-1.5 sm:gap-2"
              }`}
            >
              {/* Active Glowing Pill Background with Smooth Layout Animation */}
              {isActive && (
                <motion.div
                  layoutId={layoutId}
                  className="absolute inset-0 md:bg-primary/20 bg-gradient-to-r from-primary/30 to-primary/10 border md:border-primary/50 border-primary/40 rounded-full shadow-[0_0_20px_rgba(22,131,199,0.3)] md:shadow-[0_0_15px_rgba(22,131,199,0.3)] -z-10 backdrop-blur-md md:backdrop-blur-none"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Icon */}
              {tab.icon && (
                <span
                  className={`relative z-10 ${
                    isActive
                      ? tab.activeColorClass || "text-primary-light drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] md:drop-shadow-md"
                      : ""
                  }`}
                >
                  {tab.icon}
                </span>
              )}

              {/* Desktop Title (Always shown on md: screens and above) */}
              <span className="relative z-10 hidden md:inline">
                {tab.title}
              </span>

              {/* Mobile Title (If item has icon: shown ONLY when tab is active on mobile. If no icon: shown always on mobile) */}
              <span className={`relative z-10 md:hidden ${hasIcon ? (isActive ? "inline" : "hidden") : "inline"}`}>
                {displayMobileTitle}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
