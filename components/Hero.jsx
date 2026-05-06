"use client";
import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const [text, setText] = useState("");
  const [tagIdx, setTagIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const taglines = personalInfo.taglines;
    const current = taglines[tagIdx];
    const delay = deleting ? 50 : charIdx === current.length ? 1800 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setText(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (deleting && charIdx > 0) {
        setText(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else {
        setDeleting(false);
        setTagIdx((t) => (t + 1) % taglines.length);
        setCharIdx(0);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, charIdx, deleting, tagIdx]);

  return (
    <section className="hero" id="home">
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-greeting">👋 Welcome to my world</p>

        <h1 className="hero-title">
          I&apos;m{" "}
          <span className="highlight">{personalInfo.name}</span>
        </h1>

        <p className="hero-subtitle">{personalInfo.role}</p>

        <div className="typewriter-wrap">
          <span>{text}</span>
          <span className="cursor-blink">|</span>
        </div>

        <div className="hero-btns">
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work →
          </a>
          <a
            href="#about"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Me
          </a>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-mouse" />
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
