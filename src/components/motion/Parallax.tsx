"use client";

import { useEffect, useRef, type ReactNode } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

function isParallaxDisabled() {
  return (
    window.matchMedia(MOBILE_QUERY).matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function Parallax({ children, speed = 0.15, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mobileMedia = window.matchMedia(MOBILE_QUERY);
    const reducedMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    let raf = 0;

    const reset = () => {
      el.style.transform = "";
    };

    const onScroll = () => {
      if (isParallaxDisabled()) {
        reset();
        return;
      }

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (window.innerHeight / 2 - center) * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    const onBreakpointChange = () => {
      if (isParallaxDisabled()) reset();
      else onScroll();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    mobileMedia.addEventListener("change", onBreakpointChange);
    reducedMedia.addEventListener("change", onBreakpointChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      mobileMedia.removeEventListener("change", onBreakpointChange);
      reducedMedia.removeEventListener("change", onBreakpointChange);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-parallax ${className}`}>
      {children}
    </div>
  );
}
