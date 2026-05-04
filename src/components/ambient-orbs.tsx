"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type VantaEffect = {
  destroy: () => void;
};

declare global {
  interface Window {
    THREE?: unknown;
    VANTA?: {
      FOG: (options: Record<string, unknown>) => VantaEffect;
    };
  }
}

export function AmbientOrbs() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<VantaEffect | null>(null);
  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);

  useEffect(() => {
    if (
      !threeReady ||
      !vantaReady ||
      !window.THREE ||
      !window.VANTA?.FOG ||
      !containerRef.current ||
      effectRef.current
    ) {
      return;
    }

    try {
      effectRef.current =
        window.VANTA.FOG({
          el: containerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x7d7c7c,
          midtoneColor: 0x575757,
          lowlightColor: 0x282828,
          baseColor: 0x000000,
          blurFactor: 0.5,
          speed: 0.0,
          zoom: 0.2,
        }) ?? null;
    } catch {
      effectRef.current = null;
    }

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, [threeReady, vantaReady]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeReady(true)}
      />
      {threeReady && (
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"
          strategy="afterInteractive"
          onLoad={() => setVantaReady(true)}
        />
      )}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      />
    </>
  );
}
