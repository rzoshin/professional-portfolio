"use client";

import { contactLinks, personalInfo } from "@/lib/data";
import SectionLine from "./SectionLine";
import { useCallback, useEffect, useState } from "react";
import { HiOutlineMapPin, HiOutlineBolt } from "react-icons/hi2";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaWhatsapp,
  FaCopy,
  FaExternalLinkAlt,
} from "react-icons/fa";

const CONTACT_ICONS = {
  email: FaEnvelope,
  linkedin: FaLinkedin,
  github: FaGithub,
  portfolio: FaGlobe,
  whatsapp: FaWhatsapp,
};

export default function Contact() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setToast("Email copied to clipboard!");
    } catch {
      setToast("Could not copy email");
    }
  }, []);

  return (
    <section className="contact" id="contact" data-dev-label="// Contact.jsx">
      <div className="section-header">
        <p className="section-tag">Get In Touch</p>
        <h2 className="section-title">
          Contact <span className="highlight">Me</span>
        </h2>
        <SectionLine />
        <p className="section-desc">
          Have a project in mind or want to collaborate? Reach out through any
          channel below.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-intro glass-card">
          <div className="contact-intro-header">
            <span className="contact-intro-dot" aria-hidden="true" />
            <h3 className="contact-intro-title">Let&apos;s Connect</h3>
          </div>

          <blockquote className="contact-intro-quote">
            Whether you have a project in mind, want to collaborate, or just want
            to say hello — I&apos;m always open to meaningful conversations.
          </blockquote>

          <div className="contact-intro-chips">
            <span className="contact-intro-chip contact-intro-chip--available">
              {personalInfo.availability}
            </span>
            <span className="contact-intro-chip">
              <HiOutlineMapPin className="contact-intro-chip-icon" aria-hidden="true" />
              {personalInfo.location}
            </span>
            <span className="contact-intro-chip">
              <HiOutlineBolt className="contact-intro-chip-icon" aria-hidden="true" />
              Usually replies within 24h
            </span>
          </div>

          <div className="contact-intro-cta">
            <p className="contact-intro-cta-label">Ready to start?</p>
            <p className="contact-intro-cta-email">{personalInfo.email}</p>
            <button
              type="button"
              className="contact-intro-cta-btn"
              onClick={handleCopy}
            >
              Copy email
            </button>
          </div>
        </div>

        <div className="contact-links-grid">
          {contactLinks.map((link) => {
            const Icon = CONTACT_ICONS[link.iconKey];
            const isEmail = link.id === "email";
            const primaryAction = link.actions.find(
              (a) => a.type === "visit" || a.type === "open"
            );

            return (
              <article key={link.id} className="contact-link-card glass-card">
                <div className="contact-link-card-top">
                  <div className="contact-link-icon-wrap">
                    {Icon && <Icon className="contact-link-card-icon" aria-hidden="true" />}
                  </div>
                  {isEmail ? (
                    <div className="contact-link-email-actions">
                      <button
                        type="button"
                        className="contact-link-icon-btn"
                        onClick={handleCopy}
                        aria-label="Copy email"
                      >
                        <FaCopy size={14} />
                      </button>
                      <a
                        href={link.href}
                        className="contact-link-icon-btn"
                        aria-label="Open email"
                      >
                        <FaExternalLinkAlt size={13} />
                      </a>
                    </div>
                  ) : (
                    <a
                      href={primaryAction?.href || link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link-arrow"
                      aria-label={`Open ${link.label}`}
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>

                <span className="contact-link-label">{link.label}</span>
                <p className="contact-link-value">{link.value}</p>

                {!isEmail && primaryAction && (
                  <a
                    href={primaryAction.href || link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-footer-action"
                  >
                    {primaryAction.label} →
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {toast && (
        <div className="contact-toast" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </section>
  );
}
