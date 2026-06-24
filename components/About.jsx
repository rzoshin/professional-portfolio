import { PiGraduationCap } from "react-icons/pi";
import { BsBriefcase } from "react-icons/bs";
import { TbMicroscope } from "react-icons/tb";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import SectionLine from "./SectionLine";
import { personalInfo, socialLinks } from "@/lib/data";

const INFO_ICONS = {
  education: PiGraduationCap,
  focus: BsBriefcase,
  research: TbMicroscope,
  interests: HiOutlineLightningBolt,
};

const ABOUT_SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

const aboutSocialLinks = socialLinks.filter((link) =>
  ["github", "linkedin", "email"].includes(link.id)
);

export default function About() {
  return (
    <section className="about" id="about" data-dev-label="// About.jsx">
      <div className="section-header">
        <p className="section-tag">Get To Know Me</p>
        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>
        <SectionLine />
      </div>

      <div className="about-card glass-card">
        <div className="about-card-inner">
          <div className="about-col about-col--identity">
            <h2 className="about-name">{personalInfo.name}</h2>
            <p className="about-role">{personalInfo.role}</p>
            <span className="about-badge about-badge--available">
              {personalInfo.availability}
            </span>

            <div className="about-location-pill">
              <HiOutlineMapPin className="about-location-icon" aria-hidden="true" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="about-stats-grid">
              {personalInfo.aboutStats.map((stat) => (
                <div key={stat.label} className="about-stat-cell">
                  <div className="about-stat-value">{stat.value}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-socials">
              {aboutSocialLinks.map((link) => {
                const Icon = ABOUT_SOCIAL_ICONS[link.id];
                const isEmail = link.id === "email";
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target={isEmail ? "_self" : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="about-social-btn"
                    aria-label={link.label}
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="about-col about-col--content">
            <div className="about-bio">
              {personalInfo.bioParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="about-info-grid">
              {personalInfo.aboutInfo.map((item) => {
                const Icon = INFO_ICONS[item.icon];
                return (
                  <div key={item.title} className="about-info-card glass-card">
                    <div className="about-info-icon-wrap">
                      {Icon && <Icon className="about-info-icon" />}
                    </div>
                    <div className="about-info-title">{item.title}</div>
                    <div className="about-info-value">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
