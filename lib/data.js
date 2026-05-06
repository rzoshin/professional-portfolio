// ============================================================
// EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
// ============================================================

export const personalInfo = {
  name: "Raiyan Zannat",
  role: "Front End Developer",
  taglines: [
    "I build beautiful web experiences",
    "I craft scalable applications",
    "I turn ideas into reality",
    "I love clean code & great UX",
  ],
  bio: "A passionate Front End Developer focused on creating beautiful, functional, and user-centered digital experiences. I believe design is about solving problems and creating intuitive, enjoyable experiences for users.",
  location: "Rangpur, Bangladesh",
  email: "raiyan435jgcc@gmail.com",
  availability: "Open to Work",
  github: "https://github.com/rzoshin",
  linkedin: "www.linkedin.com/in/raiyan-zannat",
  facebook: "https://web.facebook.com/rzoshin435/",
};

export const education = [
  {
    degree: "B.S. Computer Science",
    institution: "Rajshahi University of Engineering & Technology",
    period: "2020 – 2025",
    description:
      "Graduated with honors. Specialized in software engineering and human-computer interaction. Led multiple award-winning hackathon projects.",
    gpa: "3.66 / 4.0",
  },
  {
    degree: "AI Powered Full Stack Web Development",
    institution: "Programming Hero",
    period: "2025 – 2026",
    description:
      "Intensive bootcamp covering React, Node.js, Next.js, Express.js, MongoDB, and modern deployment practices. Built 10+ production-grade projects.",
    gpa: null,
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React / Next.js", level: 88 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js / Express", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 88 },
      { name: "React Router", level: 72 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    items: [
      { name: "Git / GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Vercel / Netlify", level: 85 },
    ],
  },
];

const devicon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

export const projects = [
  {
    title: "SkillSphere",
    slug: "skillsphere",
    description:
      "A full-stack e-learning platform with Google auth, course management, and a modern dashboard. Built with Next.js and MongoDB.",
    badges: [
      { label: "Next.js",      icon: devicon("nextjs"),      style: "next" },
      { label: "React",        icon: devicon("react"),       style: "react" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Hero UI",      icon: "",                     style: "heroui" },
      { label: "Better Auth",  icon: "",                     style: "betterauth" },
      { label: "Google Auth",  icon: devicon("google"),      style: "googleauth" },
      { label: "MongoDB",      icon: devicon("mongodb"),     style: "mongo" },
    ],
    github: "https://github.com/rzoshin/SkillSphere.git",
    live: "https://skill-sphere-amber.vercel.app",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    title: "DigiTools",
    slug: "digitools",
    description:
      "A SaaS digital tools storefront with product browsing, cart management, and toast notifications. Built with React and Context API.",
    badges: [
      { label: "React.js",       icon: devicon("react"),       style: "react" },
      { label: "Tailwind CSS",   icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI",       icon: "",                     style: "daisy" },
      { label: "Context API",    icon: "",                     style: "context" },
      { label: "React Toastify", icon: "",                     style: "toastify" },
    ],
    github: "https://github.com/rzoshin/Digitools-Platform.git",
    live: "https://shop-digitools.netlify.app",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "KeenKeepers",
    slug: "keenkeepers",
    description:
      "A relationship tracker app to log interactions, visualize timelines, and stay consistently connected with the people who matter.",
    badges: [
      { label: "React.js",       icon: devicon("react"),        style: "react" },
      { label: "Tailwind CSS",   icon: devicon("tailwindcss"),  style: "tailwind" },
      { label: "Daisy UI",       icon: "",                      style: "daisy" },
      { label: "React Toastify", icon: "",                      style: "toastify" },
      { label: "React Router",   icon: devicon("reactrouter"),  style: "reactrouter" },
      { label: "Recharts",       icon: "",                      style: "recharts" },
    ],
    github: "https://github.com/rzoshin/Keen-Keeper.git",
    live: "https://endearing-pastelito-90f818.netlify.app",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "English Janala",
    slug: "english-janala",
    description:
      "A vocabulary learning app with structured lessons and pronunciation support to help users build English skills.",
    badges: [
      { label: "HTML5",        icon: devicon("html5"),       style: "html5" },
      { label: "CSS3",         icon: devicon("css3"),        style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI",     icon: "",                     style: "daisy" },
    ],
    github: "https://github.com/rzoshin/english-janala-vocab-app.git",
    live: "https://rzoshin.github.io/english-janala-vocab-app/",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Github Issues Tracker",
    slug: "github-issue-tracker",
    description:
      "Browse and track GitHub issues for any public repository in real time using the GitHub REST API.",
    badges: [
      { label: "HTML5",        icon: devicon("html5"),       style: "html5" },
      { label: "CSS3",         icon: devicon("css3"),        style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI",     icon: "",                     style: "daisy" },
    ],
    github: "https://github.com/rzoshin/github-issue-tracker.git",
    live: "https://github-issue-tracker-app.netlify.app",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Job Application Tracker",
    slug: "job-application-tracker",
    description:
      "A personal job hunt dashboard to log, filter, and manage job applications with status tracking.",
    badges: [
      { label: "HTML5",        icon: devicon("html5"),       style: "html5" },
      { label: "CSS3",         icon: devicon("css3"),        style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI",     icon: "",                     style: "daisy" },
    ],
    github: "https://github.com/rzoshin/job-application-tracker.git",
    live: "https://rzoshin.github.io/job-application-tracker/",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Payoo",
    slug: "payoo-app",
    description:
      "A mobile-first money transfer app UI with a clean financial dashboard and smooth, intuitive interactions.",
    badges: [
      { label: "HTML5",        icon: devicon("html5"),       style: "html5" },
      { label: "CSS3",         icon: devicon("css3"),        style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI",     icon: "",                     style: "daisy" },
    ],
    github: "https://github.com/rzoshin/Payoo-Money-Transfer-App.git",
    live: "https://rzoshin.github.io/Payoo-Money-Transfer-App/",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "TechWave",
    slug: "techwave",
    description:
      "A responsive tech landing page with product showcases, animated sections, and a modern component-based layout.",
    badges: [
      { label: "HTML5",        icon: devicon("html5"),       style: "html5" },
      { label: "CSS3",         icon: devicon("css3"),        style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI",     icon: "",                     style: "daisy" },
    ],
    github: "https://github.com/rzoshin/TechWave.git",
    live: "https://rzoshin.github.io/TechWave/",
    gradient: "from-sky-500 to-blue-600",
  },
];