"use client";
import { useEffect } from "react";

const TITLES = [
  "Raiyan Zannat | Full Stack Developer",
  "Open to Work 🚀",
  "Let's Build Something",
  "Available for Hire ✓",
];

export default function TabTitleAnimator() {
  useEffect(() => {
    let index = 0;
    document.title = TITLES[0];

    const interval = setInterval(() => {
      index = (index + 1) % TITLES.length;
      document.title = TITLES[index];
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return null;
}
