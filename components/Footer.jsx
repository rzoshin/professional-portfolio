import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import Logo from "./Logo";
import { personalInfo, socialLinks } from "@/lib/data";

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
  facebook: FaFacebook,
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Logo />
          <p className="site-footer-tagline">{personalInfo.role}</p>
        </div>

        <div className="site-footer-socials">
          {socialLinks.map((link) => {
            const Icon = SOCIAL_ICONS[link.id];
            const isEmail = link.id === "email";
            return (
              <a
                key={link.id}
                href={link.href}
                target={isEmail ? "_self" : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="site-footer-social-btn"
                aria-label={link.label}
              >
                {Icon && <Icon size={18} />}
              </a>
            );
          })}
        </div>

        <div className="site-footer-bottom">
          <p>
            © 2026{" "}
            <span className="highlight">{personalInfo.name}</span>. All rights
            reserved.
          </p>
          <p className="site-footer-credit">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
