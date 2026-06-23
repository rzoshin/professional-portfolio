"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-dev-mode";

export default function DevModeToggle() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) === "true";
    setActive(stored);
    document.body.classList.toggle("dev-mode", stored);
  }, []);

  const toggle = () => {
    const next = !active;
    setActive(next);
    localStorage.setItem(STORAGE_KEY, String(next));
    document.body.classList.toggle("dev-mode", next);
  };

  return (
    <button
      className={`dev-mode-toggle${active ? " active" : ""}`}
      onClick={toggle}
      aria-label="Toggle dev mode"
      aria-pressed={active}
      type="button"
    >
      &lt;/&gt; <span className="dev-label">DEV MODE</span>
    </button>
  );
}
