const PORTFOLIO_DATA = {
  name: "Subhash Kumar",
  initials: "SK",

  tagline:
    "I build high-performance backend systems and AI-powered SaaS products that scale, perform, and deliver real business impact.",

  about:
    "Backend-focused full-stack developer specializing in scalable SaaS applications, real-time systems, and AI-driven features. Experienced in designing high-performance APIs, optimizing databases, and building production-ready architectures. I enjoy solving complex system problems, improving performance, and building products that handle real users at scale.",

  email: "subhashpanday58@gmail.com",
  github: "github.com/Subhash91134857",
  linkedin: "linkedin.com/in/subhash-dev91",
  location: "Bihar, India",

  roles: [
    "Backend-Focused Full Stack Developer",
    "SaaS System Builder",
    "API & Performance Engineer",
    "Problem Solver",
  ],

  traits: [
    "Scalable System Thinking",
    "Performance Optimization",
    "Ownership Mindset",
    "Continuous Learner",
  ],

  skills: [
    { name: "Node.js / Express", level: 90, color: "#68D391" },
    { name: "React.js", level: 80, color: "#61DAFB" },
    { name: "JavaScript", level: 88, color: "#F7DF1E" },
    { name: "Java (DSA)", level: 85, color: "#ED8936" },
    { name: "MongoDB / PostgreSQL / Redis", level: 88, color: "#FC8181" },
    { name: "Docker", level: 78, color: "#0db7ed" },
    { name: "AWS EC2", level: 72, color: "#FF9900" },
    { name: "Azure Speech (STT/TTS)", level: 80, color: "#0078D4" },
  ],

  projects: [
    {
      title: "AI Roleplay Simulation Platform",
      desc: "SaaS-based training platform with real-time chat and voice simulations using Azure STT/TTS and avatars. Improved user engagement and created realistic training experiences.",
      tech: ["React", "Node.js", "Azure Speech", "WebSockets"],
      color: "#4A90D9",
      icon: "◈",
      live: "#",
      repo: "#",
    },
    {
      title: "Salon ERP System",
      desc: "Full-stack ERP system with modular architecture, Dockerized backend, Redis session management, and optimized PostgreSQL queries for high performance.",
      tech: ["React", "Express", "PostgreSQL", "Redis", "Docker"],
      color: "#48BB78",
      icon: "◎",
      live: "#",
      repo: "#",
    },
    {
      title: "Digital Lending & KYC Platform",
      desc: "Built scalable backend services for loan workflows, onboarding, and KYC verification with third-party integrations, supporting 1000+ users.",
      tech: ["Node.js", "Express", "MongoDB", "Third-party APIs"],
      color: "#F6AD55",
      icon: "◌",
      live: "#",
      repo: "#",
    },
    {
      title: "School Management System",
      desc: "Designed backend architecture with REST APIs, JWT/OAuth authentication, and integrations for scalable school operations.",
      tech: ["Express", "MongoDB", "Redis"],
      color: "#B794F4",
      icon: "◉",
      live: "#",
      repo: "#",
    },
  ],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Datatobiz",
      period: "Jul 2025 – Mar 2026",
      desc: "Built AI-powered roleplay simulations with real-time chat & voice features. Optimized APIs reducing latency by 20–30% and improved system scalability. Collaborated with AI and product teams to ship faster features.",
    },
    {
      role: "Associate Software Developer",
      company: "TheMagiicians",
      period: "Sept 2023 – Jan 2025",
      desc: "Developed backend systems for lending and KYC workflows. Integrated third-party APIs and improved performance by 15–25% in critical services.",
    },
  ],

  stats: [
    { label: "Experience", value: "1.5+ Years" },
    { label: "DSA Problems", value: "500+" },
    { label: "Systems Built", value: "10+" },
    { label: "API Optimization", value: "30%" },
  ],

  nav: ["home", "about", "skills", "projects", "experience", "contact"],

  year: 2026,
};

export default PORTFOLIO_DATA;
