import { ProjectType } from "@/type";
import {
  alumConnect,
  cinemoodThumbnail,
  elvaBookshop,
  foodRecommendationThumbnail,
  plantDoctor,
  qrCampusThumbnail,
  foodRecommendationDetail,
  foodRecommendationDetail1,
  foodRecommendationDetail2,
  foodRecommendationDetail3,
  qrCampusDetail,
  qrCampusDetail1,
  qrCampusDetail2,
  dummyImage,
  vizballThumbnail,
  clientExpressThumbnail,
  mamikeuThumbnail,
  vizballForum,
  vizballAdmin,
  clientExpressDashboard,
  clientExpressChat,
  clientExpressCustomize,
  clientExpressAnalytics,
} from "./images";

// Helper function to generate URL-friendly slugs
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim();
};

export const projects: ProjectType[] = [
  // FEATURED PROJECTS — shown first, as larger highlight cards
  {
    title: "Vizball",
    slug: generateSlug("Vizball"),
    image: vizballThumbnail,
    images: [vizballForum, vizballAdmin],
    featured: true,
    category: "Client work · Production",
    description:
      "Bilingual federation website for Vizball, a Cameroonian team sport: news, forum, shop, club map and admin dashboard, on a custom Express + Bun + SQLite backend.",
    detailedDescription:
      "Vizball Play Pro is the official bilingual (French/English) website for Vizball, a team sport created in Cameroon. It brings the federation's news, community forum, equipment shop, club locator map, event calendar, governance documents and video tutorials into one site, with an admin dashboard to run it all. I took over an app that had been prototyped on Base44, a no-code backend platform. Once its SDK was removed, data persistence, login and file uploads all stopped working. I replaced that layer with a custom Express + Bun + SQLite backend, then shipped the site to production through roughly six weeks of client feedback.",
    role: "Full-stack developer, working directly with the client: backend rebuild, frontend features, translation, SEO and production deployment.",
    timeline: "July – August 2026 · 6 weeks",
    status: "Live in production",
    highlights: [
      { value: "15", label: "REST modules" },
      { value: "~535", label: "FR/EN UI strings" },
      { value: "13", label: "releases in 6 weeks" },
      { value: "~16.5k", label: "lines of JS/TS" },
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Express.js",
      "Bun",
      "SQLite",
      "JWT",
      "Nginx",
      "Groq API",
      "Leaflet",
    ],
    stack: [
      {
        layer: "Frontend",
        tech: "React 18, Vite 6, React Router 6, Tailwind CSS, shadcn/ui",
        detail: "15 pages, bilingual UI with ~535 translation keys, custom typography",
      },
      {
        layer: "Backend",
        tech: "Express 4 on Bun, TypeScript",
        detail: "15 REST route modules, one per resource",
      },
      {
        layer: "Data",
        tech: "SQLite via bun:sqlite",
        detail: "Schema, migrations and automatic seeding on first run",
      },
      {
        layer: "Auth & security",
        tech: "JWT, bcrypt, role-based access",
        detail: "Admin and forum login, env-based secrets, per-IP rate limiting",
      },
      {
        layer: "AI",
        tech: "Groq API (Llama 3.3 70B)",
        detail: "On-demand translation of articles, forum posts and events",
      },
      {
        layer: "Hosting",
        tech: "Ubuntu VPS, Nginx, systemd, HTTPS",
        detail: "Reverse proxy, process supervision, backups, deployment guide",
      },
    ],
    features: [
      "News and articles managed from the admin dashboard",
      "Community forum with user registration and login",
      "Equipment shop with product pages, ratings and a browser-side cart",
      "Interactive club locator map built on Leaflet",
      "Events calendar for tournaments and federation events",
      "Video tutorials by category and skill level, plus a field diagram",
      "One-click AI translation of articles, forum posts and events (FR ⇄ EN)",
      "Admin dashboard for content, products, clubs, events, gallery, messages and forum moderation",
      "SEO tooling: per-page meta tags, generated sitemap and a pre-launch gate",
    ],
    challenges: [
      {
        title: "Replacing a removed no-code backend",
        description:
          "With the Base44 SDK gone, nothing saved, nobody could log in and uploads failed. I wrote a new Express + Bun backend with one route file per resource, and a fetch-based API client that mirrors those routes one to one, so the frontend needed few changes.",
      },
      {
        title: "Keeping hosting simple and cheap",
        description:
          "The client runs one small VPS. SQLite through Bun's built-in driver means there is no database server to run; the database creates and seeds itself on first start.",
      },
      {
        title: "Translating user content without blowing the budget",
        description:
          "Interface text uses a static dictionary, but articles and forum posts are written by people. A translate button backed by a Groq-hosted Llama model accepts only known content types and languages, caps input length, and limits each IP to 20 requests per 10 minutes.",
      },
      {
        title: "Securing a public deployment",
        description:
          "The API listens only on localhost; Nginx handles HTTPS and proxies /api and /uploads. Secrets live in environment variables, passwords are hashed with bcrypt, and only ports 22, 80 and 443 are open. I documented it all in a step-by-step deployment and backup guide.",
      },
      {
        title: "Iterating on client feedback",
        description:
          "Several release rounds were driven by client review: spacing, type sizes, heading weights, navbar overflow at large breakpoints and chat widget theming. I also moved the site to a custom typeface and made the chat widget follow the visitor's light or dark setting.",
      },
    ],
    outcome:
      "The site went from a broken prototype to a production-ready, self-hosted app in about six weeks. It runs on one VPS with no paid backend services beyond optional AI translation.",
    learnings: [
      "Owning the backend pays off: moving off a no-code platform removed a single point of failure and gave the client full control of their data.",
      "Simple infrastructure is a feature: SQLite, systemd and Nginx kept hosting costs and maintenance low for a small federation.",
      "Guardrails come first with AI features: allow-lists, length caps and rate limits kept translation safe to expose publicly.",
      "Short feedback loops build trust: frequent, small releases let the client see and steer progress.",
    ],
    demoLink: "https://vizball.org",
    demoLabel: "Visit Live Site",
  },
  {
    title: "Client Express",
    slug: generateSlug("Client Express"),
    image: clientExpressThumbnail,
    images: [
      clientExpressDashboard,
      clientExpressChat,
      clientExpressCustomize,
      clientExpressAnalytics,
    ],
    featured: true,
    category: "SaaS · Solo build",
    description:
      "A bilingual SaaS that turns a business's documents into an embeddable AI support chatbot that answers only from that content.",
    detailedDescription:
      "Client Express is a SaaS platform that turns a business's own documents into an AI customer-support chatbot it can embed on any website. Owners upload PDFs, Word files or URLs, and the bot answers visitors only from that content, in text or voice, in English or French. It targets a market most chatbot tools ignore: French-speaking customers who pay by mobile money.",
    role: "Solo full-stack developer: product design, frontend, backend, AI pipeline, Python microservices and deployment.",
    timeline: "January – October 2026 · ~100 commits",
    status: "Live in production",
    highlights: [
      { value: "14", label: "LLMs, switchable per bot" },
      { value: "42", label: "Vitest test files" },
      { value: "EN/FR", label: "UI, text and voice" },
      { value: "1 tag", label: "to embed the widget" },
    ],
    problem:
      "Small businesses answer the same customer questions every day, but generic AI chatbots invent answers they cannot back up. A wrong price or policy from a bot costs more trust than no bot at all. Client Express uses retrieval-augmented generation (RAG): the bot retrieves the relevant passages from the business's own documents and is instructed to answer only from them. When nothing relevant is found, it says so instead of guessing.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "ChromaDB",
      "Python",
      "LangChain",
      "RAG",
      "Docker",
      "Vitest",
    ],
    stack: [
      {
        layer: "App",
        tech: "Next.js 16, TypeScript, PostgreSQL",
        detail: "Dashboard, public REST API with OpenAPI 3.1 spec, billing",
      },
      {
        layer: "Retrieval",
        tech: "ChromaDB, hybrid semantic + keyword search",
        detail: "Reciprocal Rank Fusion, query rewriting, relevance thresholds",
      },
      {
        layer: "Models",
        tech: "Gemini, Mistral, Groq, OpenRouter",
        detail: "14 LLMs behind one model registry",
      },
      {
        layer: "Documents",
        tech: "Python microservices, Tesseract OCR, OpenCV",
        detail: "pypdf → pdfplumber → PyMuPDF fallback chain",
      },
      {
        layer: "Voice",
        tech: "Whisper, neural TTS",
        detail: "Speech-to-text and text-to-speech in the widget",
      },
      {
        layer: "Payments & hosting",
        tech: "CamPay, CinetPay, Docker, Railway, VPS",
        detail: "Mobile Money subscriptions with webhook confirmation",
      },
    ],
    features: [
      "Knowledge upload: PDF, DOCX, TXT, HTML, Markdown and URLs, with OCR for scanned PDFs and live training progress over SSE",
      "Grounded answers that refuse to guess when no source passage is relevant",
      "Embeddable widget: one script tag adds a branded chat bubble to any site",
      "Real token-by-token streaming over server-sent events",
      "Voice input and output with Whisper and neural voices",
      "Lead capture inside the chat, once per session",
      "Analytics: conversation logs, usage stats and automatic topic grouping",
      "Developer API with API keys and an interactive reference page",
      "Custom domains verified through a DNS TXT record",
      "Subscription plans paid by Mobile Money (CamPay, CinetPay)",
    ],
    challenges: [
      {
        title: "Retrieval that holds up in real conversations",
        description:
          "Pure vector search missed exact terms like product codes, so I merged semantic and keyword results with Reciprocal Rank Fusion. An LLM step rewrites follow-ups such as \"what about pricing?\" into standalone queries before search. When no passage clears the relevance threshold, the bot points to the closest real document sections instead of guessing.",
      },
      {
        title: "Real token streaming",
        description:
          "I replaced a simulated typewriter effect with true streaming over SSE. Answers were sometimes cut off silently, so I bypassed LangChain for Gemini to read the real finish reason and added end-of-stream markers on both sides. Incomplete answers now show a retry button.",
      },
      {
        title: "An embed bug only real customers saw",
        description:
          "The widget worked on my own dashboard but broke on every customer site. Cross-origin testing with Playwright found the cause: the script took its base URL from the host page instead of its own script tag. The same pass fixed an infinite render loop and storage calls that browsers block in third-party iframes.",
      },
      {
        title: "Security hardening",
        description:
          "I closed IDOR gaps where conversation routes lacked ownership checks, encrypted stored API keys with AES-256-GCM, added rate limiting and input sanitization, and fixed an auth redirect loop caused by sessions for deleted users.",
      },
      {
        title: "Robust document extraction",
        description:
          "A Python service tries pypdf, then pdfplumber, then PyMuPDF. Scanned pages fall back to Tesseract OCR with automatic rotation correction and OpenCV preprocessing.",
      },
    ],
    outcome:
      "Client Express runs in production with Docker-packaged services, deployed on Railway and a Hostinger VPS. The product's own marketing site uses a Client Express chatbot for support.",
    learnings: [
      "Test the way customers use it: same-origin testing hid the widget bug for several rounds; only a true cross-origin setup exposed it.",
      "RAG quality is mostly retrieval: exact-term misses and vague follow-ups were solved by hybrid search and query rewriting, not a bigger model.",
      "Ownership checks belong on every route: an audit found IDOR gaps that normal use never triggered.",
    ],
    demoLink: "https://clientexpress.vizball.org",
    demoLabel: "Visit Live Site",
    githubLink: "https://github.com/Drax0001/Client-Express",
  },
  {
    title: "MAMIKEU",
    slug: generateSlug("MAMIKEU"),
    image: mamikeuThumbnail,
    featured: true,
    category: "Client work · NGO",
    description:
      "Bilingual institutional website for a Cameroonian NGO, built to win institutional funders. Next.js 16, Payload CMS, WCAG 2.2 AA.",
    detailedDescription:
      "A bilingual institutional website for the Association des Enfants de Marie Mikeu (MAMIKEU), a rural NGO in Dschang–Fokoué, Cameroon, working with vulnerable families across education, health, agriculture and environment, and entrepreneurship. The site exists to convince institutional funders rather than to collect donations; it takes no payments. It had to answer four questions in the first few seconds: who are you, what do you do, who do you help, and how can I contribute. French and English content sit side by side in the CMS, with no string hardcoded in either language.",
    role: "Design direction, content model, full build, accessibility, testing and deployment — solo.",
    timeline: "4 – 16 September 2026 · 52 commits",
    status: "Feature-complete · awaiting client photography and final copy",
    highlights: [
      { value: "74", label: "pre-rendered pages" },
      { value: "303", label: "unit + E2E tests" },
      { value: "AA", label: "WCAG 2.2, enforced in tokens" },
      { value: "33", label: "decision records" },
    ],
    problem:
      "Late in the build, the client corrected the audience: the site exists to attract NGOs and funders, not to be read by the rural population it serves. Three constraints had been built for a reader on an entry-level phone over 2G. Rather than quietly reversing them, I logged the premise change as its own decision record and relaxed exactly three constraints — animation, typography and the JavaScript budget — each re-measured before and after. Reduced motion, no-JavaScript readability and AA contrast did not move.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Payload CMS",
      "SQLite",
      "Tailwind CSS",
      "GSAP",
      "Bun",
      "Vitest",
      "Playwright",
    ],
    stack: [
      {
        layer: "Framework",
        tech: "Next.js 16.3 (App Router, Cache Components), React 19",
      },
      {
        layer: "CMS",
        tech: "Payload 3.88 mounted in the same app",
        detail: "Read through its local API; 11 collections and 7 globals",
      },
      {
        layer: "Database",
        tech: "SQLite via @payloadcms/db-sqlite",
        detail: "One host, one process, one file to back up",
      },
      {
        layer: "Styling & motion",
        tech: "Tailwind 4, CSS, GSAP 3.15 + ScrollTrigger",
        detail: "GSAP only for scroll-linked effects, only where pages move",
      },
      {
        layer: "Validation",
        tech: "Zod at every trust boundary",
        detail: "Same schema server-side and client-side",
      },
      {
        layer: "Testing",
        tech: "Vitest (84), Playwright (219, desktop + mobile)",
        detail: "Tests encode the design rules, not just behaviour",
      },
    ],
    features: [
      "Fully bilingual: every interface string and every content field in French and English",
      "Four programmes presented as full-width numbered chapters instead of generic icon cards",
      "Project archive with filters and story-driven project pages with a reading-position rail",
      "Draggable before/after photo curtain, keyboard-operable, with a no-JavaScript fallback",
      "News, downloadable reports and an impact and transparency page",
      "French-native admin, with an editor's guide written for first-time CMS users",
      "Half-filled CMS produces a shorter page, never a broken one",
      "Consent and permission tracked as fields on photographs and partner logos",
    ],
    challenges: [
      {
        title: "Serving a licensed typeface without redistributing it",
        description:
          "The client chose Palatino Linotype, which can't legally be converted and served. Hand-written @font-face rules resolve local('Palatino Linotype') first, so Windows and macOS visitors download zero bytes; everyone else gets a subset of TeX Gyre Pagella, a metric-compatible twin under a licence that permits it.",
      },
      {
        title: "A budget test that reported half the payload",
        description:
          "The JavaScript budget test summed compressed sizes inside async handlers and read the total after a fixed wait, so the homepage measured 67 KB while shipping 141 KB. Every response is now awaited, the test fails if no scripts were seen, and router prefetches are blocked so pages aren't charged for their neighbours.",
      },
      {
        title: "An entrance animation that cost four seconds of LCP",
        description:
          "Scroll-reveal elements start invisible, so the browser recorded no Largest Contentful Paint until JavaScript ran: 6.7 s on throttled mobile. The first row of every list now skips the reveal, bringing LCP to 3.0 s, pinned by a DOM-level regression test.",
      },
      {
        title: "The no-JavaScript test that passed on a blank page",
        description:
          "The first check read computed opacity, which is 1 even inside a display: none ancestor — so it passed while pages shipped their whole <main> inside React's hidden streaming container. The test now walks up from <main> for hidden ancestors across nine paths, with JavaScript disabled and under reduced motion.",
      },
    ],
    outcome:
      "Largest Contentful Paint lands between 2.55 s and 3.07 s across all six page kinds on throttled mobile, with zero layout shift. The build is feature-complete and runs as a self-contained preview — the build seeds its own SQLite file, so a reviewer gets the full site and admin from a git push, with no third-party services. Nothing was invented to fill the gaps: missing facts hide their section, and placeholders say plainly what's still owed.",
    learnings: [
      "A decision that rests on a fact about the audience has to name that fact, so it can fall when the fact does.",
      "A design rule nobody can fail is a suggestion: the tests encode the design system, from icon imports to overflow at every width.",
      "Measurements need testing too: a budget test that under-reports is worse than none, because it signs things off.",
    ],
    demoLink: "https://mamikeu.vercel.app",
    demoLabel: "View Demo",
  },

  // OTHER PROJECTS
  {
    title: "AlumConnect",
    slug: generateSlug("AlumConnect"),
    description:
      "Alumni Mentorship Platform for the University of Buea (Unofficial)",
    detailedDescription:
      "AlumConnect is a comprehensive alumni mentorship platform designed to bridge the gap between current students and alumni of the University of Buea. The platform facilitates meaningful connections through structured mentorship programs, networking events, and career guidance sessions. Built with modern web technologies, it features user authentication, profile management, event scheduling, and real-time messaging capabilities.",
    image: alumConnect,
    images: [dummyImage, dummyImage, dummyImage], // Placeholder images - replace with actual project images later
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    features: [
      "Event Management",
      "Responsive design",
      "Easy to use",
      "User Authentication",
      "Profile Management",
      "Real-time Messaging",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Drax0001/AlumConnect",
  },
  {
    title: "Food Recommendation App",
    slug: generateSlug("Food Recommendation App"),
    description:
      "Food recommendation mobile application based on age, allergies and dietary  restrictions",
    detailedDescription:
      "A personalized food recommendation mobile application that takes into account user preferences, age, allergies, and dietary restrictions to suggest suitable meals. The app uses intelligent algorithms to analyze user data and provide customized meal plans, nutritional information, and recipe suggestions. Features include meal planning, grocery list generation, and integration with popular food delivery services.",
    image: foodRecommendationThumbnail,
    images: [
      foodRecommendationDetail,
      foodRecommendationDetail1,
      foodRecommendationDetail2,
      foodRecommendationDetail3,
    ],
    technologies: ["React Native", "Expo", "Redux Toolkit"],
    features: [
      "Food Recommendation",
      "Meal Planning",
      "Allergy Management",
      "Nutritional Analysis",
      "Grocery Lists",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Drax0001/Food-Recommendation",
  },
  {
    title: "QR Campus",
    slug: generateSlug("QR Campus"),
    description:
      "QR Generation and recognition mobile app for course registration",
    detailedDescription:
      "QR Campus is a mobile application designed to streamline the course registration process at universities through QR code technology. Students can generate unique QR codes for course enrollment, while administrators can scan these codes for quick registration processing. The app integrates with existing university systems and provides real-time updates on course availability, schedule conflicts, and registration status.",
    image: qrCampusThumbnail,
    images: [qrCampusDetail, qrCampusDetail1, qrCampusDetail2],
    technologies: ["React Native", "Express.js", "PostgreSQL"],
    features: [
      "QR Code generation",
      "Access to mobile native APIs",
      "QR Code Recognition",
      "Course Management",
      "Real-time Updates",
      "Schedule Conflict Detection",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Drax0001/QR-Campus",
  },
  {
    title: "Cinemood",
    slug: generateSlug("Cinemood"),
    description: "Web application for movie recommendations based on user mood",
    detailedDescription:
      "Cinemood is an innovative web application that recommends movies based on the user's current mood and preferences. Using AI-powered sentiment analysis and machine learning algorithms, the app analyzes user input to suggest the perfect movie for any emotional state. Features include mood tracking, personalized watchlists, movie reviews, and integration with popular streaming platforms for seamless viewing experiences.",
    image: cinemoodThumbnail,
    images: [dummyImage, dummyImage, dummyImage], // Placeholder images - replace with actual project images later
    technologies: ["Next.js", "TypeScript", "AI"],
    features: [
      "Movie recommendation",
      "API",
      "AI integration",
      "Mood Analysis",
      "Personalized Watchlists",
      "Streaming Integration",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Drax0001/Cinemood",
  },
];
