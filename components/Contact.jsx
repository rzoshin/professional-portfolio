"use client";
import { personalInfo } from "@/lib/data";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to your email service here (e.g. EmailJS, Formspree)
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="section-header reveal">
        <p className="section-tag">Get In Touch</p>
        <h2 className="section-title">
          Contact <span className="highlight">Me</span>
        </h2>
        <div className="section-line" />
        <p className="section-desc">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="contact-grid">
        {/* Info cards */}
        <div className="contact-info reveal-left">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <div>
              <div className="contact-label">Email</div>
              <a href={`mailto:${personalInfo.email}`} className="contact-value">
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <div>
              <div className="contact-label">Phone</div>
              <a href={`tel:${personalInfo.phone}`} className="contact-value">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {personalInfo.whatsapp && (
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <div>
                <div className="contact-label">WhatsApp</div>
                <a
                  href={`https://wa.me/${personalInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  {personalInfo.whatsapp}
                </a>
              </div>
            </div>
          )}

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-value">{personalInfo.location}</div>
            </div>
          </div>

          <div className="contact-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn social-btn--primary">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div className="contact-form-wrap reveal-right">
          {sent ? (
            <div className="contact-success">
              <div className="success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
              <button className="btn btn-outline" onClick={() => setSent(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
