"use client";

import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="project-detail-page">
      {/* Back link */}
      <Link href="/#projects" className="detail-back">
        ← Back to Projects
      </Link>

      {/* Hero banner */}
      <div className="detail-banner">
        <div className={`project-banner-gradient bg-gradient-to-r ${project.gradient}`} />
        <img
          src={`/projects/${project.slug}.png`}
          alt={project.title}
          className="detail-banner-img"
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <div className="detail-banner-overlay">
          <h1 className="detail-title">{project.title}</h1>
        </div>
      </div>

      <div className="detail-body">
        {/* Tech badges */}
        <div className="project-badges" style={{ marginBottom: "32px" }}>
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

        {/* Description */}
        <section className="detail-section">
          <h2>About the Project</h2>
          <p>{project.longDescription || project.description}</p>
        </section>

        {/* Challenges */}
        {project.challenges && (
          <section className="detail-section">
            <h2>⚡ Challenges Faced</h2>
            <ul className="detail-list">
              {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </section>
        )}

        {/* Future plans */}
        {project.improvements && (
          <section className="detail-section">
            <h2>🚀 Future Improvements</h2>
            <ul className="detail-list">
              {project.improvements.map((imp, i) => <li key={i}>{imp}</li>)}
            </ul>
          </section>
        )}

        {/* Links */}
        <div className="detail-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub (Client) ↗
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
