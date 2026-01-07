"use client";
import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    window.lenis = lenis;

    const scrollToHash = () => {
      const hash = window.location.hash;

      if (!hash) {
        return;
      }

      requestAnimationFrame(() => {
        const target = document.querySelector(hash) as HTMLElement | null;

        if (!target) {
          return;
        }

        const header = document.querySelector("header");
        const offset = header?.getBoundingClientRect().height ?? 0;

        lenis.scrollTo(target, { offset: -offset });
      });
    };

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (typeof window !== "undefined" && window.location.hash) {
      setTimeout(scrollToHash, 100);
    }

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      window.lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
