"use client";
import { useEffect, useRef } from "react";

export default function Particles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const count = 30;
    const fragments = [];

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDuration = (Math.random() * 15 + 10) + "s";
      p.style.animationDelay = (Math.random() * -20) + "s";
      p.style.width = p.style.height = (Math.random() * 3 + 1) + "px";
      container.appendChild(p);
      fragments.push(p);
    }

    return () => fragments.forEach((p) => p.remove());
  }, []);

  return <div className="particles" ref={containerRef} aria-hidden="true" />;
}
