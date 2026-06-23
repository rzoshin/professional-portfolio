"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import DevModeToggle from "./DevModeToggle";

const links = [
  "Home",
  "About",
  "Education",
  "Experience",
  "Training",
  "Achievements",
  "Skills",
  "Projects",
  "Contact",
];
const SECTION_IDS = links.map((l) => l.toLowerCase());

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (label) => {
    setMenuOpen(false);
    const id = label.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHome = () => {
    setMenuOpen(false);
    const el = document.getElementById("home");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <a className="nav-logo" onClick={scrollToHome} role="button" tabIndex={0}>
        <Logo />
      </a>

      <div className="navbar-right">
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {links.map((label) => {
            const id = label.toLowerCase();
            return (
              <li key={label}>
                <a
                  className={activeSection === id ? "nav-link--active" : ""}
                  onClick={() => handleNavClick(label)}
                  role="button"
                  tabIndex={0}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <DevModeToggle />
          <button
            className={`menu-toggle${menuOpen ? " active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
