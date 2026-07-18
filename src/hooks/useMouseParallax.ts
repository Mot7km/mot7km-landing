import { useMotionValue, useTransform } from "framer-motion";
import { useCallback, useRef, useEffect } from "react";

type ParallaxConfig = {
  /** Movement range in pixels for each layer */
  intensities?: {
    dashboard?: number; // default 30
    pos?: number;       // default 40
    mobile?: number;    // default 50
  };
  /** Enable/disable throttling (default true) */
  throttle?: boolean;
};

export const useMouseParallax = (config: ParallaxConfig = {}) => {
  const {
    intensities = {},
    throttle = true,
  } = config;

  const { dashboard = 30, pos = 40, mobile = 50 } = intensities;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // For throttling
  const rafId = useRef<number | null>(null);
  const pendingX = useRef<number>(0);
  const pendingY = useRef<number>(0);

  // The actual handler – computes relative position and schedules update
  const updateMouse = useCallback((x: number, y: number) => {
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    // Skip touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    if (!throttle) {
      updateMouse(x, y);
      return;
    }

    // Store latest values
    pendingX.current = x;
    pendingY.current = y;

    // Schedule a single animation frame update
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(() => {
        updateMouse(pendingX.current, pendingY.current);
        rafId.current = null;
      });
    }
  }, [updateMouse, throttle]);

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, []);

  // Parallax transforms – using the configured intensities
  const dashboardX = useTransform(mouseX, [-0.5, 0.5], [dashboard, -dashboard]);
  const dashboardY = useTransform(mouseY, [-0.5, 0.5], [dashboard, -dashboard]);

  const posX = useTransform(mouseX, [-0.5, 0.5], [-pos, pos]);
  const posY = useTransform(mouseY, [-0.5, 0.5], [-pos, pos]);

  const mobileX = useTransform(mouseX, [-0.5, 0.5], [mobile, -mobile]);
  const mobileY = useTransform(mouseY, [-0.5, 0.5], [mobile, -mobile]);

  return {
    mouseX,
    mouseY,
    handleMouseMove,
    dashboardX,
    dashboardY,
    posX,
    posY,
    mobileX,
    mobileY,
  };
};