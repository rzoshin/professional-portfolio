import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-header reveal">
        <p className="section-tag">What I Know</p>
        <h2 className="section-title">
          My <span className="highlight">Skills</span>
        </h2>
        <div className="section-line" />
        <p className="section-desc">
          Technologies I&apos;ve been honing through real projects.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <div key={i} className="skill-card reveal">
            <div className="skill-icon">{group.icon}</div>
            <div className="skill-category">{group.category}</div>

            {group.items.map((skill, j) => (
              <div key={j} className="skill-item">
                <div className="skill-meta">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    data-width={skill.level}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
