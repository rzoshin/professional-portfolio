"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const THEMES = ["dark", "light", "hacker"];
const ICONS = { dark: "🌙", light: "☀️", hacker: "💻" };
const LABELS = { dark: "Dark", light: "Light", hacker: "Hacker" };

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Theme toggle" type="button">
        <span className="theme-dot" />
      </button>
    );
  }

  const current = theme || "dark";
  const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${LABELS[next]} theme`}
      type="button"
    >
      <span className="theme-dot" />
      <span>{ICONS[current]}</span>
    </button>
  );
}
