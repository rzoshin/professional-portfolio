"use client";

import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === params.slug);
  const prev = projects[index - 1] || null;
  const next = projects[index + 1] || null;

  return (
    <main className="pd-root">
      {/* Ambient blobs */}
      <div className="pd-blob pd-blob-1" />
      <div className="pd-blob pd-blob-2" />

      {/* Top nav bar */}
      <div className="pd-topbar">
        <Link href="/#projects" className="pd-back">
          <span className="pd-back-arrow">←</span>
          <span>All Projects</span>
        </Link>
        <div className="pd-topbar-right">
          {prev && (
            <Link href={`/projects/${prev.slug}`} className="pd-sibling">
              ← {prev.title}
            </Link>
          )}
          {next && (
            <Link href={`/projects/${next.slug}`} className="pd-sibling">
              {next.title} →
            </Link>
          )}
        </div>
      </div>

      {/* Hero */}
      <section className="pd-hero">
        <div className="pd-hero-inner">
          <div className="pd-hero-text">
            <p className="pd-label">Project</p>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-short-desc">{project.description}</p>

            <div className="pd-badges">
              {project.badges.map((badge, i) => (
                <span key={i} className={`project-badge badge-${badge.style}`}>
                  {badge.icon && (
                    <img
                      src={badge.icon}
                      alt=""
                      className={`badge-icon${badge.style === "next" ? " badge-icon--invert" : ""}`}
                    />
                  )}
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="pd-cta">
              {project.live && project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo ↗
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  GitHub ↗
                </a>
              )}
            </div>
          </div>

          <div className="pd-hero-visual">
            <div className="pd-visual-frame">
              <div className={`pd-visual-gradient bg-gradient-to-br ${project.gradient}`} />
              <img
                src={`/projects/${project.slug}.png`}
                alt={project.title}
                className="pd-visual-img"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className="pd-visual-shine" />
            </div>
          </div>
        </div>
      </section>

      <div className="pd-divider" />

      {/* Content */}
      <section className="pd-content">
        <div className="pd-card pd-card--wide">
          <div className="pd-card-tag">Overview</div>
          <h2 className="pd-card-title">About the Project</h2>
          <p className="pd-card-body">{project.longDescription || project.description}</p>
        </div>

        <div className="pd-two-col">
          {project.challenges && (
            <div className="pd-card">
              <div className="pd-card-tag pd-tag--amber">Challenges</div>
              <h2 className="pd-card-title">⚡ What Was Hard</h2>
              <ul className="pd-list">
                {project.challenges.map((c, i) => (
                  <li key={i} className="pd-list-item">
                    <span className="pd-list-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.improvements && (
            <div className="pd-card">
              <div className="pd-card-tag pd-tag--green">Roadmap</div>
              <h2 className="pd-card-title">🚀 What is Next</h2>
              <ul className="pd-list">
                {project.improvements.map((imp, i) => (
                  <li key={i} className="pd-list-item">
                    <span className="pd-list-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="pd-links-banner">
          <div className="pd-links-text">
            <p className="pd-label" style={{ marginBottom: "6px" }}>Ready to explore?</p>
            <h3 className="pd-links-heading">Check it out live or dive into the code</h3>
          </div>
          <div className="pd-links-btns">
            {project.live && project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo ↗
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project nav footer */}
      <div className="pd-nav-footer">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className="pd-nav-card pd-nav-card--prev">
            <span className="pd-nav-dir">← Previous</span>
            <span className="pd-nav-name">{prev.title}</span>
          </Link>
        ) : <div />}
        <Link href="/#projects" className="pd-nav-home">All Projects</Link>
        {next ? (
          <Link href={`/projects/${next.slug}`} className="pd-nav-card pd-nav-card--next">
            <span className="pd-nav-dir">Next →</span>
            <span className="pd-nav-name">{next.title}</span>
          </Link>
        ) : <div />}
      </div>
    </main>
  );
}
