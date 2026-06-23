import { experience } from "@/lib/data";
import SectionLine from "./SectionLine";

export default function Experience() {
  return (
    <section className="experience" id="experience" data-dev-label="// Experience.jsx">
      <div className="section-header">
        <p className="section-tag">Work Experience</p>
        <h2 className="section-title">
          My <span className="highlight">Experience</span>
        </h2>
        <SectionLine />
        <p className="section-desc">Roles where I&apos;ve built and shipped real products.</p>
      </div>

      <div className="exp-list">
        {experience.map((item) => (
          <article key={item.title} className="exp-card glass-card">
            <div className="exp-header">
              <div className="exp-title-wrap">
                <span className="exp-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="exp-title">{item.title}</h3>
              </div>
              <span className="exp-date-badge">{item.period}</span>
            </div>
            <p className="exp-company">{item.company}</p>
            <ul className="exp-bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="exp-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="exp-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
