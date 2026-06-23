import { TbMathSymbols } from "react-icons/tb";
import { MdSpellcheck } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { achievements } from "@/lib/data";
import SectionLine from "./SectionLine";

const ACHIEVEMENT_ICONS = {
  tbMath: TbMathSymbols,
  mdSpellcheck: MdSpellcheck,
  giCamping: GiCampingTent,
};

export default function Achievements() {
  return (
    <section className="achievements" id="achievements" data-dev-label="// Achievements.jsx">
      <div className="section-header">
        <p className="section-tag">Milestones</p>
        <h2 className="section-title">
          Achievements & <span className="highlight">Activities</span>
        </h2>
        <SectionLine />
        <p className="section-desc">
          Beyond the code — competitions, recognition, and global experiences
        </p>
      </div>

      <div className="achievements-grid">
        {achievements.map((item) => {
          const Icon = ACHIEVEMENT_ICONS[item.icon];
          return (
            <article
              key={item.title}
              className="achievement-card glass-card"
              style={{ "--badge-color": `var(--badge-${item.badgeColor})` }}
            >
              <div className="achievement-card-top">
                <div className={`achievement-icon-wrap achievement-icon-wrap--${item.iconBg}`}>
                  {Icon && <Icon className="achievement-card-icon" aria-hidden="true" />}
                </div>
                <span className="achievement-year-pill">{item.year}</span>
              </div>

              <span className="achievement-badge-pill">{item.badge}</span>
              <h3 className="achievement-card-title">{item.title}</h3>
              <p className="achievement-card-desc">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
