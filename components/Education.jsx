import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="section-header reveal">
        <p className="section-tag">My Background</p>
        <h2 className="section-title">
          My <span className="highlight">Education</span>
        </h2>
        <div className="section-line" />
        <p className="section-desc">Where I&apos;ve learned and grown.</p>
      </div>

      <div className="edu-timeline">
        {education.map((edu, i) => (
          <div key={i} className="edu-item reveal">
            <div className="edu-dot">🎓</div>
            <div className="edu-body">
              <div className="edu-period">{edu.period}</div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-institution">{edu.institution}</div>
              <p className="edu-desc">{edu.description}</p>
              {edu.gpa && <div className="edu-gpa">GPA: {edu.gpa}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
