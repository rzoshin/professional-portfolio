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
  phone: "+880 1713078749",       // ← replace with your real number
  whatsapp: "880 1713078749",     // ← replace with your real number (no +, no spaces)
  availability: "Open to Work",
  github: "https://github.com/rzoshin",
  linkedin: "https://www.linkedin.com/in/raiyan-zannat",
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
    longDescription:
      "SkillSphere is a full-stack e-learning platform designed to make quality education accessible. It features Google OAuth authentication via Better Auth, a course browsing and management system, a personalized student dashboard, and a clean, responsive UI built with Hero UI and Tailwind CSS. The backend uses Next.js API routes connected to MongoDB for persistent data storage.",
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
    challenges: [
      "Integrating Better Auth with Google OAuth required careful session handling across server and client components in Next.js App Router.",
      "Designing a flexible course schema in MongoDB that supports nested lessons and progress tracking without over-fetching data.",
      "Ensuring the dashboard remained responsive across all screen sizes while keeping Hero UI component styles consistent.",
      "Managing Tailwind v4 responsive prefix reliability issues during development — some utility classes behaved unexpectedly on mobile breakpoints.",
    ],
    improvements: [
      "Add video lesson streaming with progress tracking and resume functionality.",
      "Implement a payment gateway (SSLCommerz or Stripe) for premium course purchases.",
      "Build an instructor dashboard for uploading and managing course content.",
      "Add real-time notifications using WebSockets for enrollment confirmations and announcements.",
    ],
  },
  {
    title: "DigiTools",
    slug: "digitools",
    description:
      "A SaaS digital tools storefront with product browsing, cart management, and toast notifications. Built with React and Context API.",
    longDescription:
      "DigiTools is a SaaS-style digital products storefront where users can browse tools, add them to a cart, and complete a checkout flow. State is managed globally using React Context API, making cart data available across all pages. React Toastify provides real-time feedback on user actions. The UI is styled with Tailwind CSS and DaisyUI for a polished, professional look.",
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
    challenges: [
      "Cart state wasn't persisting on page refresh — solved by syncing Context state with localStorage.",
      "Checkout flow was resetting cart prematurely before order confirmation; required careful state sequencing.",
      "React Toastify was firing duplicate notifications due to StrictMode's double render in development.",
      "Ensuring the cart UI updated instantly without triggering unnecessary re-renders across unrelated components.",
    ],
    improvements: [
      "Add user authentication so users can save their cart and order history.",
      "Integrate a real payment gateway for actual transactions.",
      "Add product filtering and search functionality.",
      "Build an admin panel for managing product listings.",
    ],
  },
  {
    title: "KeenKeepers",
    slug: "keenkeepers",
    description:
      "A relationship tracker app to log interactions, visualize timelines, and stay consistently connected with the people who matter.",
    longDescription:
      "KeenKeepers is a personal relationship management app that helps you stay meaningfully connected with friends and family. Users can log interactions, set reminders, and visualize connection timelines using Recharts. The app uses React Router v7 for navigation and DaisyUI for a friendly, approachable UI.",
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
    challenges: [
      "A routing/context conflict in the useChartData hook caused chart data to be undefined on direct page loads — fixed by lifting context higher in the component tree.",
      "Recharts required careful responsive container configuration to avoid layout overflow on mobile screens.",
      "Designing an animated error page with an HTML5 canvas firefly system and SVG forest silhouette was technically complex but rewarding.",
      "Balancing data normalization for interaction logs while keeping reads fast for the timeline visualization.",
    ],
    improvements: [
      "Add cloud sync so relationship data persists across devices.",
      "Implement smart reminders via email or push notifications.",
      "Add a contact import feature from phone contacts or Google Contacts.",
      "Build analytics showing your most and least contacted people over time.",
    ],
  },
  {
    title: "English Janala",
    slug: "english-janala",
    description:
      "A vocabulary learning app with structured lessons and pronunciation support to help users build English skills.",
    longDescription:
      "English Janala is a structured vocabulary learning application aimed at Bengali-speaking learners. It presents words in categorized lessons with pronunciation audio support using the Web Speech API. The interface is clean and distraction-free, built entirely with HTML, CSS, Tailwind, and DaisyUI — no heavy frameworks needed.",
    badges: [
      { label: "HTML5",        icon: devicon("html5"),       style: "html5" },
      { label: "CSS3",         icon: devicon("css3"),        style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI",     icon: "",                     style: "daisy" },
    ],
    github: "https://github.com/rzoshin/english-janala-vocab-app.git",
    live: "https://rzoshin.github.io/english-janala-vocab-app/",
    gradient: "from-green-500 to-emerald-600",
    challenges: [
      "Web Speech API pronunciation quality varies significantly across browsers, requiring fallback handling.",
      "Organizing lesson content in a maintainable JSON structure while keeping the UI dynamically driven.",
      "Ensuring the app felt smooth and native-like without any JavaScript framework.",
    ],
    improvements: [
      "Add spaced repetition (SRS) to improve long-term vocabulary retention.",
      "Include Bengali translations alongside English definitions.",
      "Add progress tracking and lesson completion badges.",
      "Build a quiz mode to test learned words.",
    ],
  },
  {
    title: "Github Issues Tracker",
    slug: "github-issue-tracker",
    description:
      "Browse and track GitHub issues for any public repository in real time using the GitHub REST API.",
    longDescription:
      "GitHub Issues Tracker lets you search any public GitHub repository and browse its open issues in real time. It consumes the GitHub REST API, handles pagination, and displays issue metadata like labels, assignees, and creation dates. Built purely with HTML, Tailwind, and vanilla JavaScript.",
    badges: [
      { label: "HTML5",        icon: devicon("html5"),       style: "html5" },
      { label: "CSS3",         icon: devicon("css3"),        style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI",     icon: "",                     style: "daisy" },
    ],
    github: "https://github.com/rzoshin/github-issue-tracker.git",
    live: "https://github-issue-tracker-app.netlify.app",
    gradient: "from-amber-500 to-orange-600",
    challenges: [
      "GitHub's unauthenticated API has a 60 requests/hour rate limit — implemented caching to minimize unnecessary calls.",
      "Handling pagination cleanly without a framework required careful DOM manipulation.",
      "Gracefully managing API errors (private repos, typos, non-existent repos) with user-friendly messages.",
    ],
    improvements: [
      "Add GitHub OAuth so users get a higher API rate limit (5000 req/hr).",
      "Support filtering by label, assignee, and milestone.",
      "Add the ability to bookmark repositories for quick access later.",
    ],
  },
  {
    title: "Job Application Tracker",
    slug: "job-application-tracker",
    description:
      "A personal job hunt dashboard to log, filter, and manage job applications with status tracking.",
    longDescription:
      "Job Application Tracker is a personal productivity tool for managing the job hunt process. Users can add applications with company name, role, date, and status (Applied, Interview, Offer, Rejected), filter by status, and see an overview of their pipeline. All data is stored in localStorage for persistence without a backend.",
    badges: [
      { label: "HTML5",        icon: devicon("html5"),       style: "html5" },
      { label: "CSS3",         icon: devicon("css3"),        style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI",     icon: "",                     style: "daisy" },
    ],
    github: "https://github.com/rzoshin/job-application-tracker.git",
    live: "https://rzoshin.github.io/job-application-tracker/",
    gradient: "from-rose-500 to-pink-600",
    challenges: [
      "Keeping localStorage data in sync with the UI after edits or deletions without a reactive state system.",
      "Designing a clean filter UI that didn't clutter the dashboard on smaller screens.",
      "Validating form inputs on the client side without a form library.",
    ],
    improvements: [
      "Add cloud sync via Firebase so data persists across devices.",
      "Include deadline reminders and follow-up notifications.",
      "Add charts to visualize application status distribution over time.",
      "Export data as CSV for personal records.",
    ],
  },
  {
    title: "Payoo",
    slug: "payoo-app",
    description:
      "A mobile-first money transfer app UI with a clean financial dashboard and smooth, intuitive interactions.",
    longDescription:
      "Payoo is a mobile-first UI concept for a digital money transfer application. It features a financial dashboard with balance overview, recent transactions, and quick-send actions. The focus was on clean design, smooth micro-interactions, and a layout optimized for small screens first. Built with HTML, Tailwind, and DaisyUI.",
    badges: [
      { label: "HTML5",        icon: devicon("html5"),       style: "html5" },
      { label: "CSS3",         icon: devicon("css3"),        style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI",     icon: "",                     style: "daisy" },
    ],
    github: "https://github.com/rzoshin/Payoo-Money-Transfer-App.git",
    live: "https://rzoshin.github.io/Payoo-Money-Transfer-App/",
    gradient: "from-violet-500 to-purple-600",
    challenges: [
      "Achieving a native app feel in the browser required careful use of CSS transitions and touch-friendly tap targets.",
      "Designing a dashboard layout that scaled well from 320px mobile to larger screens without breaking the financial data hierarchy.",
      "Keeping the UI lightweight and fast without JavaScript frameworks.",
    ],
    improvements: [
      "Connect to a real backend with user authentication and actual transaction logic.",
      "Add biometric or PIN authentication UI for security.",
      "Implement dark/light theme toggle.",
      "Build animated balance transfer flow with step-by-step confirmation.",
    ],
  },
  {
    title: "TechWave",
    slug: "techwave",
    description:
      "A responsive tech landing page with product showcases, animated sections, and a modern component-based layout.",
    longDescription:
      "TechWave is a fully responsive tech product landing page featuring animated hero sections, product feature showcases, testimonials, and a call-to-action footer. The page was built to practice real-world landing page structure and CSS animation techniques, using Tailwind and DaisyUI for a polished result.",
    badges: [
      { label: "HTML5",        icon: devicon("html5"),       style: "html5" },
      { label: "CSS3",         icon: devicon("css3"),        style: "css3" },
      { label: "Tailwind CSS", icon: devicon("tailwindcss"), style: "tailwind" },
      { label: "Daisy UI",     icon: "",                     style: "daisy" },
    ],
    github: "https://github.com/rzoshin/TechWave.git",
    live: "https://rzoshin.github.io/TechWave/",
    gradient: "from-sky-500 to-blue-600",
    challenges: [
      "Coordinating multiple scroll-triggered CSS animations without JavaScript animation libraries.",
      "Keeping the page performant with several large hero images and gradient sections.",
      "Making the component-based section layout feel cohesive across very different content blocks.",
    ],
    improvements: [
      "Rebuild with React for reusable components and easier content management.",
      "Add a CMS integration so non-technical users can update product content.",
      "Implement lazy loading for images to improve Lighthouse performance score.",
    ],
  },
];
