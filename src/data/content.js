// Edit everything in this file to update the site's content.
// No need to touch component files for text/data changes.

export const profile = {
  name: "Amit Rawat",
  role: "Backend-Focused Full Stack Engineer",
  tagline:
    "Software Engineer with 3.2+ years building backend systems and distributed architecture — APIs, data layers, and the infrastructure underneath products people actually rely on.",
  location: "Gurgaon, India",
  email: "amitrawat9810@gmail.com",
  phone: "+91 82870 52861",
  github: "https://github.com/asr9810",
  linkedin: "https://linkedin.com/in/amitrawat9810",
  resumeUrl: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "I started in Mechanical Engineering, then moved into software because I liked the same thing in both: figuring out how a system holds together under load, and where it breaks first.",
    "Today I work mostly on the backend — API design, data modeling, caching, and the infrastructure that keeps a service fast as usage grows. I'm comfortable across the stack, but the backend is where I do my best work.",
  ],
};

// Each group pairs a skillicons.dev icon strip with the full text list,
// since not every listed skill (DSA, Agile, PM2) has its own icon.
export const skills = [
  {
    category: "core & architecture",
    icons: ["js", "ts"],
    items: [
      "JavaScript",
      "TypeScript",
      "System Design",
      "Database Design",
      "DSA",
      "Software Architecture",
    ],
  },
  {
    category: "frontend",
    icons: ["react", "next", "redux", "html", "css", "sass"],
    items: ["React.js", "Next.js", "Redux", "Webpack", "HTML5", "CSS3", "SASS"],
  },
  {
    category: "backend",
    icons: ["nodejs", "express", "socketio"],
    items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "Microservices"],
  },
  {
    category: "database",
    icons: ["postgres", "mongodb", "mysql", "redis"],
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Sequelize", "Mongoose"],
  },
  {
    category: "message queues",
    icons: ["kafka", "rabbitmq"],
    items: ["Apache Kafka", "RabbitMQ"],
  },
  {
    category: "devops & tools",
    icons: ["docker", "git", "nginx", "postman", "aws"],
    items: ["Docker", "Git", "PM2", "NGINX", "Postman", "Agile", "AWS (EC2, S3)"],
  },
];

export const projects = [
  {
    id: "eddal-dms",
    name: "Dealer Management System",
    role: "Full-Stack Developer — Eddal, for Escorts Kubota",
    logos: [
      { src: "https://www.escortskubota.com/_next/image?url=%2Flogo.png&w=1920&q=75", alt: "Escorts Kubota" },
    ],
    description:
      "Production ERP platform managing Escorts Kubota's entire dealer network — Finance, Material, Purchase, Sales, Admin, and Member modules, architected and built end to end.",
    highlights: [
      "800+ secure REST APIs serving 6,000+ dealers and 2,200+ member registrations across 7 business modules",
      "Metadata-driven form framework — cut new form dev time by 40%, improved data-entry accuracy by 30%",
      "Redis caching on high-traffic modules — 25% faster data retrieval",
      "Reusable Node.js–PostgreSQL boilerplate — 30% faster project setup, plus security audits that raised maintainability by 40%",
      "Docker + AWS (EC2, S3) CI/CD across 3+ environments — 35% faster deployments",
    ],
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    links: { live: null, code: null },
    note: "Proprietary — production system, code not public",
  },
  {
    id: "eddal-loan",
    name: "Loan & Finance Assistance Platform",
    role: "Full-Stack Developer — Eddal, for Escorts Kubota",
    logos: [
      { src: "https://www.escortskubota.com/_next/image?url=%2Flogo.png&w=1920&q=75", alt: "Escorts Kubota" },
    ],
    description:
      "A secure loan management system inside Eddal handling finance assistance, EMI scheduling, and repayment tracking for the dealer association's members.",
    highlights: [
      "EMI scheduling and repayment tracking for 2,200+ association members",
      "Automated invoice & receipt generation with 100% financial accuracy",
      "Email/SMS EMI reminders and overdue notices via a reusable notification service",
      "300+ automated monthly emails for reminders, overdue notices, and promotional campaigns",
    ],
    stack: ["Node.js", "Express.js", "PostgreSQL", "Email/SMS integration"],
    links: { live: null, code: null },
    note: "Proprietary — production system, code not public",
  },
  {
    id: "vivektravel",
    name: "Vivek Travels",
    role: "Full-Stack Developer — Car & Tour Booking Portal",
    logos: [{ src: "/logos/vivektravels-logo.png", alt: "Vivek Travels" }],
    description:
      "A React-based travel booking platform showcasing 1,400+ fleet vehicles with searchable catalogues, service discovery, and inquiry workflows — built solo, front end only.",
    highlights: [
      "1,400+ fleet vehicles (cars and buses) across a searchable catalogue",
      "500+ monthly user interactions in real-world use",
      "Fully responsive, mobile-first UI with a 90+ Lighthouse Performance Score",
    ],
    stack: ["React.js"],
    links: { live: "https://vivektravel.com", code: null },
    note: null,
  },
  // Add a 4th project here as you build more — a public repo with visible
  // code is the highest-value addition, since the Eddal work can't be shown.
];

export const experience = [
  {
    company: "Integral Infogen Technologies (IITPL)",
    role: "Software Engineer",
    period: "Aug 2023 — Present",
    summary:
      "Architecting backend services and REST APIs for Eddal, a production ERP and dealer management platform for Escorts Kubota's 6,000+ dealer network.",
  },
];
