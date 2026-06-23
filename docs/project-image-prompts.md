# Project Thumbnail Prompts — Product Photo Style

Use these prompts in **DALL-E 3**, **Midjourney v6**, or **Ideogram** to generate portfolio thumbnails.

## Global settings

| Tool | Recommended settings |
|------|---------------------|
| **Aspect ratio** | 1200×630 (Midjourney: `--ar 40:21`) |
| **Style** | Photorealistic product photography — not illustration, not 3D render, not abstract art |
| **Background** | Clean minimal studio: soft light gray (`#F0F2F5`) or off-white, no props, no plants, no hands |
| **Devices** | Silver MacBook Pro (laptop) + modern black Android phone, both angled slightly toward camera |
| **Lighting** | Soft diffused studio light, subtle natural shadows |
| **Avoid** | Floating UI, holographic effects, neon glow, fake dashboards, watermarks, text overlays, extra decorative assets |

## Workflow tip

1. Attach your existing screenshot from `public/projects/` as a **reference image** in the AI tool.
2. Paste the project prompt below.
3. Regenerate until the on-screen UI closely matches your real app.

---

### 1. AI Interview Prep — `ai-interview-prep.png`

```
Professional product photo, 1200x630. Silver MacBook Pro and black Android phone on a clean light gray studio desk. MacBook screen shows a light-themed interview prep dashboard: left sidebar navigation (Dashboard, Questions, Study Mode, Quiz, Flashcards), welcome message, four small stat cards in a row (questions completed, readiness score, study streak, topics explored), white and soft purple UI. Android phone shows the same app in mobile layout: hamburger menu, stacked stat cards, scrollable dashboard content. Photorealistic device mockup, soft studio lighting, minimal background, no extra objects, no artificial effects.
```

**Midjourney suffix:** `--ar 40:21 --style raw --v 6`

---

### 2. ArenaX — `arenax.png`

```
Professional product photo, 1200x630. MacBook Pro and Android phone on minimal off-white studio surface. MacBook displays dark-themed sports booking website: green accent headline "Book Your Dream Arena", subtitle about football turfs and badminton courts, green CTA buttons, minimalist football pitch line-art graphic on the right. Android shows mobile responsive version: stacked hero text, green buttons, compact pitch graphic, dark navy background. Realistic product photography, clean composition, no neon art, no floating elements.
```

---

### 3. SkillSphere — `skillsphere.png`

```
Professional product photo, 1200x630. MacBook and Android phone side by side on clean gray background. MacBook screen shows dark navy e-learning platform hero: purple gradient headline "Take Your Skills to the Next Level", learner count badge, Explore Courses button, stats row (learners, courses, instructors, rating). Phone shows mobile layout with centered hero, stacked stats, purple CTA button. Photorealistic, soft shadows, minimal studio setup, reflects real responsive web UI.
```

---

### 4. DigiTools — `digitools.png`

```
Professional product photo, 1200x630. MacBook Pro and Android on light minimal desk. MacBook shows clean white SaaS landing page: purple DigiTools logo, headline "Supercharge Your Digital Workflow", purple Explore Products button, light hero with tech imagery. Android shows same site mobile-responsive: stacked headline, full-width purple button, simplified navigation. Product photography style, natural lighting, no abstract gradients or fake UI chrome.
```

---

### 5. KeenKeepers — `keenkeepers.png`

```
Professional product photo, 1200x630. MacBook and Android phone on soft white studio background. MacBook displays relationship management web app: green KeenKeepers branding, "Friends to keep close" heading, four stat cards (total friends, on track, need attention), grid of friend profile cards with photos and status badges (On-Track, Overdue). Android shows single-column mobile layout with stacked friend cards. Photorealistic devices, clean minimal scene, no decorative assets.
```

---

### 6. English Janala — `english-janala.png`

```
Professional product photo, 1200x630. MacBook Pro and Android phone on clean light gray surface. MacBook shows vocabulary learning web app: blue and white UI, "Let's Learn Vocabularies" heading, lesson tab buttons, search bar, grid of vocabulary cards with Bengali pronunciation text. Android shows mobile view: lesson tabs wrapping, single-column vocab cards. Realistic product mockup, soft studio light, minimal background, educational app UI clearly visible on both screens.
```

---

### 7. Job Application Tracker — `job-application-tracker.png`

```
Professional product photo, 1200x630. MacBook and Android on minimal white-gray studio desk. MacBook shows job tracker dashboard: "Job Application Tracker" title, three stat cards (Total, Interview, Rejected), filter pills (All, Interview, Rejected), list of job cards with company name, role, salary, status tags. Android shows mobile responsive layout with stacked stats and scrollable job cards. Photorealistic, clean product shot, no kanban art or abstract dashboards.
```

---

### 8. Payoo — `payoo-app.png`

```
Professional product photo, 1200x630. MacBook Pro and Android phone on clean minimal background. Both screens show centered fintech login UI: Payoo logo with geometric bird icon, "Easy Pay | Secure Pay" tagline, white card with Mobile Number and 4 Digit Pin fields, purple Login button on light gray background. Phone shows same login form optimized for narrow screen. Photorealistic device mockup, soft lighting, no money visualization graphics or glassmorphism art.
```

---

### 9. GitHub Issues Tracker — `github-issue-tracker.png`

```
Professional product photo, 1200x630. MacBook and Android on light gray studio surface. Both devices show simple login page: GitHub octocat logo, "Github Issues Tracker" title, username and password fields, purple Sign In button, demo credentials section. MacBook shows centered card on wide viewport; Android shows same form full-width on mobile. Clean product photography, minimal background, realistic screens reflecting actual app UI.
```

---

### 10. TechWave — `techwave.png`

```
Professional product photo, 1200x630. MacBook Pro and Android phone on dark minimal studio surface (subtle dark gray, not black). MacBook displays dark purple podcast landing page: TechWave logo, gradient microphone icon in circle, sound wave lines, "Your daily dose of tech insights" tagline, Spotify and Subscribe buttons. Android shows mobile hero with centered microphone graphic and stacked CTA buttons. Photorealistic devices, soft rim lighting, no abstract purple art backgrounds separate from the actual website UI on screens.
```

---

## After generation

1. Save each file to `public/projects/` using the filename above (replace existing PNG).
2. Resize to exactly **1200×630**:
   ```bash
   sips -z 630 1200 public/projects/FILENAME.png
   ```
3. Compress if over ~300KB (`pngquant` or TinyPNG).
