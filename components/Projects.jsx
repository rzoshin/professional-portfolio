"use client";

import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header reveal">
        <p className="section-tag">What I&apos;ve Built</p>
        <h2 className="section-title">
          My <span className="highlight">Projects</span>
        </h2>
        <div className="section-line" />
        <p className="section-desc">
          A selection of real-world projects I&apos;ve designed, built, and
          shipped.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card reveal">
            {/* Banner */}
            <div className="project-banner">
              <div
                className={`project-banner-gradient bg-gradient-to-r ${project.gradient}`}
              />
              <img
                src={`/projects/${project.slug}.png`}
                alt={`${project.title} screenshot`}
                className="project-snapshot"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Tech badges */}
              <div className="project-badges">
                {project.badges.map((badge, j) => (
                  <span
                    key={j}
                    className={`project-badge badge-${badge.style}`}
                  >
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

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link code"
                >
                  GitHub ↗
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
