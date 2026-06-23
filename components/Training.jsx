import { professionalTraining } from "@/lib/data";
import SectionLine from "./SectionLine";

export default function Training() {
  return (
    <section className="training" id="training" data-dev-label="// Training.jsx">
      <div className="section-header">
        <p className="section-tag">Certifications</p>
        <h2 className="section-title">
          Professional <span className="highlight">Training</span>
        </h2>
        <SectionLine />
        <p className="section-desc">Courses and bootcamps that shaped my craft.</p>
      </div>

      <div className="training-grid">
        {professionalTraining.map((item) => (
          <article key={item.title} className="training-card glass-card">
            <div className="training-card-top">
              <span className="training-icon" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <h3 className="training-title">{item.title}</h3>
                <p className="training-provider">{item.provider}</p>
              </div>
            </div>
            <p className="training-desc">{item.description}</p>
            {item.certificateUrl ? (
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="training-cert-badge training-cert-badge--link"
              >
                Certificate ↗
              </a>
            ) : (
              <span className="training-cert-badge">Certificate</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
