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
      <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-white/90 dark:bg-[#090d16]/80 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] w-fit max-w-full mx-auto overflow-x-auto snap-x snap-mandatory hide-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const displayMobileTitle = tab.titleMobile || tab.title;
          const hasIcon = Boolean(tab.icon);

          return (
            <button
              key={String(tab.id)}
              onClick={() => onChange(tab.id)}
              className={`relative flex items-center px-3.5 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 z-10 whitespace-nowrap shrink-0 snap-center cursor-pointer ${
                isActive
                  ? "text-white gap-1.5 sm:gap-2"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5 gap-1.5 sm:gap-2"
              }`}
            >
              {/* Active Glowing Pill Background with Smooth Layout Animation */}
              {isActive && (
                <motion.div
                  layoutId={layoutId}
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent border border-primary/40 rounded-full shadow-md shadow-primary/25 -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              
              {/* Icon */}
              {tab.icon && (
                <span
                  className={`relative z-10 transition-colors ${
                    isActive
                      ? "text-white drop-shadow-sm"
                      : "text-primary dark:text-primary-light"
                  }`}
                >
                  {tab.icon}
                </span>
              )}

              {/* Desktop Title (Always shown on md: screens and above) */}
              <span className="relative z-10 hidden md:inline">
                {tab.title}
              </span>

              {/* Mobile Title */}
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
