"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

const SKILL_CHIPS = ["React", "Next.js", "Node.js", "MongoDB"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const roles = personalInfo.heroRoles;
    const current = roles[roleIdx];
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
        setRoleIdx((r) => (r + 1) % roles.length);
        setCharIdx(0);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, charIdx, deleting, roleIdx]);

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home" data-dev-label="// Hero.jsx">
      <div className="hero-mesh" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I&apos;m</p>

          <h1 className="hero-title">
            <span className="highlight">{personalInfo.name}</span>
          </h1>

          <div className="typewriter-wrap">
            <span>{text}</span>
            <span className="cursor-blink">|</span>
          </div>

          <div className="hero-btns">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={scrollToProjects}
            >
              View My Work →
            </a>
            <a href="/resume.pdf" download className="btn btn-ghost">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-ring">
            <Image
              src="/profile.png"
              alt={personalInfo.name}
              width={400}
              height={400}
              priority
              className="hero-photo"
            />
          </div>
          {SKILL_CHIPS.map((skill, i) => (
            <span
              key={skill}
              className={`hero-skill-chip hero-skill-chip--${i + 1}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll-arrow"
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
      >
        <span className="hero-scroll-arrow-icon">↓</span>
        <span className="hero-scroll-arrow-label">Scroll</span>
      </a>
    </section>
  );
}
