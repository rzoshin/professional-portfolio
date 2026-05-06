import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-header reveal">
        <p className="section-tag">Get To Know Me</p>
        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        {/* Image side */}
        <div className="reveal-left">
          <div className="about-image-wrapper">
            <div className="about-image-placeholder"><Image src={'/profile.png'} alt="Profile Image" fill sizes=""/></div>
            <div className="about-float-card">
              <div className="float-num">6+</div>
              <div className="float-label">Months Learning</div>
            </div>
            <div className="about-float-card">
              <div className="float-num">10+</div>
              <div className="float-label">Projects Built</div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="reveal-right">
          <h3>
            A passionate developer based in{" "}
            <span style={{ color: "var(--primary)" }}>{personalInfo.location}</span>
          </h3>
          <p style={{ marginTop: "16px" }}>{personalInfo.bio}</p>
          <p>
            Currently enrolled in Programming Hero's web development track,
            building real-world projects with React, Next.js, and modern tooling.
          </p>

          <div className="about-meta">
            <div className="meta-item">
              <div className="meta-label">Name</div>
              <div className="meta-value">{personalInfo.name}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Email</div>
              <div className="meta-value">{personalInfo.email}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Location</div>
              <div className="meta-value">{personalInfo.location}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Availability</div>
              <div className="meta-value available">{personalInfo.availability}</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub ↗
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
