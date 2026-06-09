// ============================================================
// EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
// ============================================================

export const personalInfo = {
  name: "Raiyan Zannat",
  role: "Full Stack Developer",
  taglines: [
    "I build beautiful web experiences",
    "I craft scalable applications",
    "I turn ideas into reality",
    "I love clean code & great UX",
  ],
  bio: "A passionate Full Stack Developer focused on creating beautiful, functional, and user-centered digital experiences. I believe design is about solving problems and creating intuitive, enjoyable experiences for users.",
  location: "Rangpur, Bangladesh",
  email: "raiyan435jgcc@gmail.com",
  availability: "Open to Work",
  github: "https://github.com/rzoshin",
  linkedin: "https://www.linkedin.com/in/raiyan-zannat/",
  facebook: "https://web.facebook.com/rzoshin435/",
  phone: "+8801713-078749",
  whatsapp: "8801713078749"
  
};

export const education = [
  {
    degree: "M.Sc in Computer Science",
    institution: "Rajshahi University of Engineering & Technology",
    period: "2025 – Present",
    description:
      "Completed first semester with highest CGPA. Specialized in Advanced Machine Learning, Deep Learning, Arithmetic Analysis and Combinatorial Optimization.",
    cgpa: "4.00 / 4.0",
  },
  {
    degree: "B.Sc in Computer Science",
    institution: "Rajshahi University of Engineering & Technology",
    period: "2020 – 2025",
    description:
      "Graduated with honors. Specialized in software engineering, database, object-oriented programming, data structure and algorithm.",
    cgpa: "3.66 / 4.0",
  },
  {
    degree: "AI Powered Full Stack Web Development",
    institution: "Programming Hero",
    period: "2025 – 2026",
    description:
      "Intensive bootcamp covering React, Node.js, Next.js, Express.js, MongoDB, and modern deployment practices. Built 10+ production-grade projects.",
    cgpa: null,
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "HTML / CSS", level: 100 },
      { name: "JavaScript", level: 90 },
      { name: "React / Next.js", level: 88 },
      { name: "Tailwind CSS", level: 100 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js / Express", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 88 },
      { name: "Better Auth", level: 72 },
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
    title: "AI Interview Prep",
    slug: "ai-interview-prep",
    description:
      "An AI-powered MERN interview preparation platform that transforms interview questions into personalized learning experiences with AI explanations, quizzes, flashcards, mock interviews, progress tracking, and smart learning roadmaps.",
    longDescription:
      "AI Interview Prep is a production-grade learning platform designed to help students and developers master technical interviews. Users can explore categorized interview questions, receive AI-generated explanations in both Bangla and English, practice through quizzes and flashcards, participate in AI-powered mock interviews, and track their progress through detailed analytics. The platform includes PDF-based question ingestion, knowledge graphs, personalized learning paths, authentication, role-based administration, and real-time AI assistance powered by modern LLMs.",
    badges: [
      { label: "Next.js 15", icon: devicon("nextjs"), style: "next" },
      { label: "TypeScript", icon: devicon("typescript"), style: "typescript" },
      { label: "React", icon: devicon("react"), style: "react" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Shadcn UI", icon: "", style: "shadcn" },
      { label: "MongoDB", icon: devicon("mongodb"), style: "mongo" },
      { label: "Mongoose", icon: "", style: "mongoose" },
      { label: "OpenAI", icon: "", style: "openai" },
      { label: "Redis", icon: "", style: "redis" },
      { label: "Vercel", icon: "", style: "vercel" },
    ],
    challenges: [
      "Designing a scalable AI answer generation pipeline while minimizing API costs.",
      "Building a flexible PDF parsing system capable of extracting topics and interview questions automatically.",
      "Implementing streaming AI responses with proper caching and rate limiting.",
      "Creating an adaptive progress tracking and mastery scoring system.",
      "Generating meaningful relationships between technologies for the interactive knowledge graph.",
    ],
    improvements: [
      "Add voice-based AI mock interviews with speech recognition.",
      "Introduce company-specific interview preparation tracks.",
      "Support collaborative study groups and peer mock interviews.",
      "Add AI-generated coding challenges with automated evaluation.",
      "Expand knowledge graph visualization with deeper learning recommendations.",
    ],
    github: "https://github.com/rzoshin/ai-interview-prep",
    live: "https://ai-interview-prep-ruddy.vercel.app",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-600",
  },

  {
    title: "ArenaX",
    slug: "arenax",
    description:
      "A full-stack sports-facility booking platform with Google auth, facility management, and includes booking management features. Built with Next.js and MongoDB. Protected routes ensure only authenticated users can book facilities, while admins have access to a dashboard for managing bookings and facilities.",
    longDescription:
      "ArenaX is a production-ready sports venue booking platform built to eliminate the friction of phone-based reservations in Bangladesh. Sports enthusiasts can browse football turfs, badminton courts, and swimming lanes, check real-time availability, and confirm bookings instantly through a clean, responsive interface. Facility owners get a dedicated dashboard to list venues, manage schedules, and track bookings without needing any technical expertise. The platform features Google OAuth via Better Auth, JWT-secured protected routes, a fully custom dark/light theme system built with CSS variable tokens, animated hero sections with Framer Motion, and a mobile-first layout that works seamlessly across all devices.",
    badges: [
      { label: "Next.js", icon: devicon("nextjs"), style: "next" },
      { label: "React", icon: devicon("react"), style: "react" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Hero UI", icon: "", style: "heroui" },
      { label: "Better Auth", icon: "", style: "betterauth" },
      { label: "Google Auth", icon: devicon("google"), style: "googleauth" },
      { label: "MongoDB", icon: devicon("mongodb"), style: "mongo" },
    ],
    challenges: [
      "Building a theme system using CSS custom properties that worked consistently across all HeroUI and custom components in both dark and light modes.",
      "Implementing server-side search and filtering with MongoDB $regex while keeping query performance acceptable at scale.",
      "Designing a booking conflict detection system to prevent double-bookings for the same time slot.",
      "Handling Better Auth session management across protected client and server routes in Next.js App Router.",
      "Creating a fully animated hero section with a custom football pitch SVG that remained responsive on all screen sizes.",
    ],
    improvements: [
      "Add real-time slot availability updates using WebSockets or Server-Sent Events.",
      "Introduce a payment gateway integration for online booking deposits.",
      "Build a rating and review system for facilities after a completed booking.",
      "Add calendar-based booking views for facility owners to manage schedules visually.",
      "Implement push notifications for booking confirmations and reminders.",
    ],
    github: "https://github.com/rzoshin/arenax-client.git",
    live: "https://arenax-client.vercel.app",
    gradient: "from-green-500 to-emerald-600",
  },

  {
    title: "SkillSphere",
    slug: "skillsphere",
    description:
      "A full-stack e-learning platform with Google auth, course management, and a modern dashboard. Built with Next.js and MongoDB.",
    longDescription:
      "SkillSphere is a full-stack e-learning platform that makes online education accessible without complicated sign-ups or barriers. Students can browse a structured course catalog, enroll instantly using their Google account, and access learning content through a clean, responsive dashboard. Instructors can publish and manage courses while the platform enforces protected routes to ensure only enrolled or authenticated users can access paid content. Built with Next.js App Router, Better Auth, and MongoDB, SkillSphere handles session management, role-based access control, and a fully responsive UI using HeroUI and Tailwind CSS — delivering a consistent learning experience across mobile and desktop.",
    badges: [
      { label: "Next.js", icon: devicon("nextjs"), style: "next" },
      { label: "React", icon: devicon("react"), style: "react" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Hero UI", icon: "", style: "heroui" },
      { label: "Better Auth", icon: "", style: "betterauth" },
      { label: "Google Auth", icon: devicon("google"), style: "googleauth" },
      { label: "MongoDB", icon: devicon("mongodb"), style: "mongo" },
    ],
    challenges: [
      "Resolving production auth cookie issues caused by the __Secure- prefix in Better Auth when deploying to Vercel.",
      "Fixing Next.js 15 async searchParams breaking changes that affected course filtering and search functionality.",
      "Eliminating hydration mismatches caused by theme and session state differences between server and client renders.",
      "Handling session race conditions during page load where protected content briefly flashed before auth resolved.",
      "Building a responsive navbar drawer that worked smoothly across all breakpoints without layout shifts.",
    ],
    improvements: [
      "Add video lesson support with progress tracking per lecture.",
      "Introduce a certificate generation system upon course completion.",
      "Build an instructor analytics dashboard with enrollment and engagement metrics.",
      "Add a course review and rating system visible to prospective students.",
      "Implement a discussion forum or comment section per lesson for community learning.",
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
    longDescription:
      "DigiTools is a SaaS digital tools storefront built as a single-page application using React 19, Vite, Tailwind CSS v4, and DaisyUI. Shoppers can browse a curated catalog of digital products, add items to a persistent cart, and receive instant toast notifications on every action — making the purchasing flow fast and reassuring. The cart state is managed globally using React Context API with lifted state for seamless checkout reset behavior. A friendly custom 404 page with canvas-based firefly animations ensures users who land on broken URLs stay engaged rather than bouncing. The project demonstrates clean state management, component composition, and a polished storefront UI without a backend dependency.",
    badges: [
      { label: "React.js", icon: devicon("react"), style: "react" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI", icon: "", style: "daisy" },
      { label: "Context API", icon: "", style: "context" },
      { label: "React Toastify", icon: "", style: "toastify" },
    ],
    challenges: [
      "Lifting selectedIds state to the correct level to allow checkout to reset the cart without prop drilling issues.",
      "Fixing ToastContainer placement so notifications rendered correctly without overlapping UI elements.",
      "Resolving a use(promise) incompatibility with client components in React 19, replaced with useEffect and useState.",
      "Managing cart persistence across navigation without a backend or localStorage dependency.",
      "Ensuring Tailwind CSS v4 utility classes worked correctly with DaisyUI component overrides.",
    ],
    improvements: [
      "Add a backend with Node.js and MongoDB to support real user accounts and order history.",
      "Integrate a payment gateway for actual SaaS product purchases.",
      "Build an admin dashboard for product management and sales analytics.",
      "Add product search, filtering by category, and sorting by price or popularity.",
      "Implement wishlist functionality so users can save tools for later.",
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
    longDescription:
      "KeenKeepers is a personal relationship management app built to help users stay intentionally connected with the people who matter most in their lives. Users can log interactions with friends, family, and colleagues, track how recently they connected with each person, and visualize relationship timelines through Recharts-powered charts. The app uses React Router v7 for multi-page navigation, a custom useChartData hook for data aggregation, and a canvas-based firefly animation system on the custom 404 error page. KeenKeepers is designed with a warm, human-centered UI that feels personal rather than productivity-tool cold — encouraging emotional awareness alongside digital organization.",
    badges: [
      { label: "React.js", icon: devicon("react"), style: "react" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI", icon: "", style: "daisy" },
      { label: "React Toastify", icon: "", style: "toastify" },
      { label: "React Router", icon: devicon("reactrouter"), style: "reactrouter" },
      { label: "Recharts", icon: "", style: "recharts" },
    ],
    challenges: [
      "Fixing a critical routing bug caused by incorrect context destructuring inside the useChartData hook that broke chart rendering.",
      "Building a canvas-based animated firefly system for the custom 404 page that performed smoothly without memory leaks.",
      "Designing chart data aggregation logic that correctly grouped and sorted interaction logs by time period.",
      "Ensuring React Router v7 nested routes worked correctly without layout shift or re-mount issues.",
      "Creating a UI that felt warm and personal rather than cold and transactional for a sensitive use case.",
    ],
    improvements: [
      "Add a backend with user authentication so relationship data persists across devices.",
      "Introduce recurring reminder notifications to prompt users to reconnect with neglected contacts.",
      "Build an AI-powered suggestion engine that recommends who to reach out to based on interaction history.",
      "Add tagging and categorization for contacts (close friends, colleagues, family).",
      "Export interaction history and relationship reports as PDF summaries.",
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
    longDescription:
      "English Janala is a vocabulary learning web app designed to help Bangla-speaking users build their English skills through structured, lesson-based content. Users progress through organized vocabulary sets, hear correct pronunciations via the Web Speech API, and reinforce learning through repetition and visual feedback. The app is built with pure HTML, CSS, Tailwind CSS, and DaisyUI — no framework dependency — making it lightweight, fast-loading, and accessible even on low-end devices. It reflects a practical approach to language learning: structured, distraction-free, and immediately usable without sign-ups or installations.",
    badges: [
      { label: "HTML5", icon: devicon("html5"), style: "html5" },
      { label: "CSS3", icon: devicon("css3"), style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI", icon: "", style: "daisy" },
    ],
    challenges: [
      "Structuring lesson data in a way that was easy to extend without a backend or CMS.",
      "Implementing the Web Speech API for pronunciation in a cross-browser compatible way.",
      "Designing a lesson progression system using only vanilla JavaScript without a framework.",
      "Keeping the UI clean and distraction-free while still being visually engaging for learners.",
      "Ensuring the app loaded fast and worked well on low-end mobile devices common in Bangladesh.",
    ],
    improvements: [
      "Migrate to React for dynamic lesson rendering and easier state management.",
      "Add a spaced repetition system (SRS) to optimize vocabulary retention.",
      "Introduce user accounts and progress tracking across sessions.",
      "Add Bangla definitions and example sentences alongside English vocabulary.",
      "Build a quiz mode with multiple choice and fill-in-the-blank exercises.",
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
    longDescription:
      "GitHub Issues Tracker is a developer utility app that lets users browse and monitor issues for any public GitHub repository in real time. Users enter a repository name, and the app fetches live issue data from the GitHub REST API — displaying issue titles, labels, status, authors, and creation dates in a clean, scannable layout. The project demonstrates real-world API integration skills: handling async fetch requests, managing loading and error states, paginating large result sets, and presenting structured API data in a readable UI — all without a framework, using only HTML, Tailwind CSS, and vanilla JavaScript.",
    badges: [
      { label: "HTML5", icon: devicon("html5"), style: "html5" },
      { label: "CSS3", icon: devicon("css3"), style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI", icon: "", style: "daisy" },
    ],
    challenges: [
      "Handling GitHub API rate limiting gracefully with informative user feedback.",
      "Paginating large issue lists without a framework's built-in state management.",
      "Displaying varied issue label colors dynamically from the API response data.",
      "Managing loading, empty, and error states cleanly in vanilla JavaScript.",
      "Keeping the UI responsive and readable when issue titles or descriptions were very long.",
    ],
    improvements: [
      "Add filtering by issue state (open, closed), label, and assignee.",
      "Introduce GitHub OAuth so users can browse private repositories.",
      "Add the ability to comment on or close issues directly from the app.",
      "Build a saved repositories list so users can quickly revisit tracked repos.",
      "Migrate to React for cleaner component-based state and rendering management.",
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
    longDescription:
      "Job Application Tracker is a personal productivity tool built to bring order to the chaos of job hunting. Users can log every application they submit — including company name, role, date applied, and current status — and filter their list by status to see what's pending, interviewing, or closed. The app uses localStorage for persistence so data survives page refreshes without needing a backend. Built with HTML, Tailwind CSS, and DaisyUI, it demonstrates clean CRUD UI patterns, local state persistence, and practical UX thinking — designed to solve a real problem that the developer was personally experiencing during their own job search.",
    badges: [
      { label: "HTML5", icon: devicon("html5"), style: "html5" },
      { label: "CSS3", icon: devicon("css3"), style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI", icon: "", style: "daisy" },
    ],
    challenges: [
      "Designing a localStorage sync system that reliably persisted and retrieved structured application data.",
      "Building dynamic filter and sort functionality without a framework or state management library.",
      "Keeping the UI clean and usable when the application list grew large.",
      "Handling edge cases like duplicate entries and empty form submissions gracefully.",
      "Making the status update flow intuitive so tracking felt effortless rather than tedious.",
    ],
    improvements: [
      "Migrate to React with a proper backend for multi-device sync and user accounts.",
      "Add deadline reminders and follow-up prompts for applications with no response.",
      "Integrate with LinkedIn or job board APIs to auto-fill application details.",
      "Build analytics showing application success rates, response rates, and pipeline stage distribution.",
      "Add note-taking and document attachment per application for interview prep.",
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
    longDescription:
      "Payoo is a mobile-first money transfer app UI concept designed to demonstrate clean financial dashboard design and smooth, intuitive user interactions. The project focuses entirely on the frontend experience — a polished interface for sending money, viewing recent transactions, checking balances, and navigating between app sections. Built with HTML, Tailwind CSS, and DaisyUI, Payoo prioritizes visual clarity, touch-friendly tap targets, and a design language that feels trustworthy and modern for a fintech context. It reflects strong UI sensibility and an understanding of how design decisions impact user trust in financial applications.",
    badges: [
      { label: "HTML5", icon: devicon("html5"), style: "html5" },
      { label: "CSS3", icon: devicon("css3"), style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI", icon: "", style: "daisy" },
    ],
    challenges: [
      "Designing a mobile-first layout that felt native and touch-friendly without using a mobile framework.",
      "Building a financial dashboard UI that communicated trust and clarity through typography and spacing choices.",
      "Creating smooth micro-interactions and transitions using only CSS without JavaScript animation libraries.",
      "Maintaining visual consistency across different screen sizes from small phones to tablet viewports.",
      "Balancing information density on the dashboard without making it feel cluttered or overwhelming.",
    ],
    improvements: [
      "Connect to a Node.js backend with real user authentication and transaction history.",
      "Integrate a real payment processing API for actual money transfer simulation.",
      "Add biometric authentication UI (fingerprint/face ID prompt simulation).",
      "Build a full transaction history page with filtering by date, amount, and recipient.",
      "Migrate to React Native or a PWA for a true mobile app experience.",
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
    longDescription:
      "TechWave is a responsive tech product landing page built to demonstrate frontend layout skills, component-based structure, and modern visual design. The page includes a hero section, product showcase panels, feature highlights, animated content sections, and a footer — all built with HTML, Tailwind CSS, and DaisyUI. TechWave reflects an understanding of how to translate a marketing design into a clean, maintainable HTML/CSS structure with smooth scroll behavior, consistent spacing, and a visual hierarchy that guides the user naturally from headline to call-to-action. It serves as a strong demonstration of pure frontend craft without framework overhead.",
    badges: [
      { label: "HTML5", icon: devicon("html5"), style: "html5" },
      { label: "CSS3", icon: devicon("css3"), style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI", icon: "", style: "daisy" },
    ],
    challenges: [
      "Building a visually rich landing page layout that remained clean and well-structured in raw HTML without a component framework.",
      "Implementing CSS animations for section reveals and hero transitions without JavaScript libraries.",
      "Maintaining consistent visual rhythm and spacing across a multi-section long-form landing page.",
      "Making the product showcase section responsive across mobile, tablet, and desktop breakpoints.",
      "Achieving a modern, premium design feel using only Tailwind utility classes and DaisyUI components.",
    ],
    improvements: [
      "Migrate to Next.js for better SEO, performance, and component reusability.",
      "Add real product data and connect to a CMS for content management.",
      "Introduce scroll-triggered animations using Framer Motion or Intersection Observer API.",
      "Add a working contact form with email delivery via a backend API.",
      "Implement dark mode support with a toggle and system preference detection.",
    ],
    github: "https://github.com/rzoshin/TechWave.git",
    live: "https://rzoshin.github.io/TechWave/",
    gradient: "from-sky-500 to-blue-600",
  },
];