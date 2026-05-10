"use client";
import { useState, useEffect } from "react";

const links = ["Home", "About", "Education", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (label) => {
    setMenuOpen(false);
    const id = label.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <a className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Portfolio.
      </a>

      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        {links.map((label) => (
          <li key={label}>
            <a onClick={() => handleNavClick(label)}>{label}</a>
          </li>
        ))}
      </ul>

      <button
        className={`menu-toggle${menuOpen ? " active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
