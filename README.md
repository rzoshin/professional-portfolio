# 🚀 Raiyan Zannat — Portfolio

A modern, performant personal portfolio website built with **Next.js 14** and **Tailwind CSS**, featuring smooth scroll animations, a typewriter effect, animated skill bars, a custom cursor, and floating particles.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com)

---

## ✨ Features

- **Typewriter Effect** — Rotating taglines in the hero section
- **Scroll Reveal Animations** — Elements animate into view using `IntersectionObserver`
- **Animated Skill Bars** — Progress bars fill on scroll
- **Custom Cursor** — Smooth lag cursor with hover scaling (desktop only)
- **Floating Particles** — Ambient background particle system
- **Fully Responsive** — Mobile-first, works on all screen sizes
- **Dark Theme** — Deep dark UI with gradient accents
- **Optimized Fonts** — Google Fonts loaded via `next/font` (zero layout shift)
- **SEO Ready** — Metadata, Open Graph tags via Next.js `metadata` API
- **Performance** — Automatic code splitting, image optimization, compression

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.jsx        # Root layout — fonts, metadata
│   ├── page.jsx          # Main page — assembles all sections
│   └── globals.css       # Global styles & design system
├── components/
│   ├── Navbar.jsx        # Sticky nav with scroll + mobile menu
│   ├── Hero.jsx          # Hero section with typewriter
│   ├── About.jsx         # About section with floating stats
│   ├── Education.jsx     # Timeline-style education section
│   ├── Skills.jsx        # Skill cards with animated bars
│   ├── Projects.jsx      # Project cards with links
│   ├── ClientShell.jsx   # Client-only features wrapper
│   ├── Cursor.jsx        # Custom cursor (desktop)
│   ├── Particles.jsx     # Background particle system
│   ├── BackToTop.jsx     # Back-to-top button
│   └── useScrollReveal.js# Scroll animation hook
├── lib/
│   └── data.js           # ✏️ All portfolio content (edit this!)
├── jsconfig.json         # Path aliases (@/*)
└── next.config.js        # Next.js config with optimizations
```

---

## 🛠️ Tech Stack

| Tech | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org) | Framework — SSG, routing, optimization |
| [React 18](https://react.dev) | UI component model |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | Zero-CLS font loading |
| [Vercel](https://vercel.com) | Deployment & hosting |

---

## ⚡ Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/rzoshin/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Customization

All your personal content lives in one file — **`lib/data.js`**. No need to touch component files.

```js
// lib/data.js

export const personalInfo = {
  name: "Raiyan Zannat",
  role: "Full Stack Developer",
  bio: "Your bio here...",
  github: "https://github.com/rzoshin",
  // ...
};

export const education = [ /* your education */ ];
export const skills = [ /* your skills */ ];
export const projects = [ /* your projects */ ];
```

---

## 🚀 Deployment

### Vercel (Recommended — Free)

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Click **Deploy**

Your portfolio will be live in under a minute with a `*.vercel.app` URL. You can also connect a custom domain.

### Other Platforms

```bash
npm run build   # Create production build
npm start       # Run production server locally
```

---

## 📸 Sections

| Section | Description |
|---|---|
| **Hero** | Name, role, typewriter taglines, CTA buttons |
| **About** | Bio, location, availability, social links |
| **Education** | Timeline of academic & course background |
| **Skills** | Animated skill bars grouped by category |
| **Projects** | Cards with description, tags, GitHub & live links |

---

## 📬 Connect

- GitHub: [@rzoshin](https://github.com/rzoshin)
- LinkedIn: [Raiyan Zannat](https://linkedin.com/in/rzoshin)

---

<p align="center">Built with ❤️ by <strong>Raiyan Zannat</strong> using Next.js</p>
