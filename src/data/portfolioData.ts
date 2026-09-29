export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  organization: string;
  description: string;
  extendedDescription: string;
  technologies: string[];
  keyHighlights: string[];
  architecturePoints: { title: string; detail: string }[];
  visualType: 'gis' | 'multifinance' | 'modernization' | 'rnd';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Proficient' | 'Working Knowledge';
  }[];
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "JUDAH DASUKI",
    title: "Full-stack Web Developer",
    tagline: "Engineer · Builder · Problem Solver",
    location: "Tangerang Selatan, Banten, Indonesia",
    email: "judahdasuki93@gmail.com",
    linkedin: "https://www.linkedin.com/in/judahdasuki/",
    status: "Available for selected opportunities",
    corePhilosophy: "Turning ideas into practical systems. Building maintainable software that solves real business problems.",
    subQuote: "Turning ideas into systems. One component at a time.",
    aboutBio: "Full-stack Web Developer focused on turning business requirements into practical, maintainable web systems. Experienced in designing and developing applications from the initial solution design through production, with hands-on experience across front-end, back-end, databases, testing, deployment, and automation. Have worked on internal applications and enterprise multifinance systems, including building systems from scratch, modernizing existing platforms, and improving development workflows through automation.",
    stats: [
      { value: "32+", label: "Enterprise Modules", desc: "Core multifinance operations" },
      { value: "3+", label: "Platforms Delivered", desc: "Enterprise & internal systems" },
      { value: "100%", label: "Full Lifecycle", desc: "Design to production deployment" },
      { value: "0", label: "Fluff Architecture", desc: "Built for operational reality" }
    ],
    principles: [
      {
        title: "STRUCTURE",
        subtitle: "Built with purpose.",
        detail: "Every schema, microservice, and component is architected around real business domain requirements."
      },
      {
        title: "SYSTEMS THINKING",
        subtitle: "Connecting components into a coherent whole.",
        detail: "Aligning frontend ergonomics with robust backend APIs and resilient database storage."
      },
      {
        title: "GROWTH",
        subtitle: "Always learning. Always improving.",
        detail: "Adopting modern stacks, performance testing with K6, and static security analysis with OWASP ZAP."
      },
      {
        title: "IMPACT",
        subtitle: "Solving real problems. Delivering value.",
        detail: "Eliminating manual bottlenecks and delivering software that teams rely on every day."
      }
    ]
  },

  projects: [
    {
      id: "si-mantap",
      number: "01",
      title: "SI MANTAP",
      subtitle: "Network Planning & Asset Management System",
      category: "GIS · INFRASTRUCTURE · OPERATIONS",
      period: "Aug 2022 – May 2023",
      organization: "Telkom Indonesia — Planning Engineering Deployment (PED)",
      description: "Internal system developed to digitalize network planning, infrastructure asset monitoring, project tracking, and budget estimation for telecommunication infrastructure.",
      extendedDescription: "Managed the application lifecycle end-to-end for the Planning Engineering Deployment division. Built a custom Leaflet-powered GIS route planning engine that automatically computes equipment requirements based on engineering rules, backed by an optimized dual-database architecture.",
      technologies: ["Laravel", "PHP", "JavaScript", "Leaflet", "Firebase Firestore", "MongoDB", "Docker", "Alibaba Cloud VPS"],
      keyHighlights: [
        "GIS-based Route Planning with automated hardware calculation",
        "Dual-database strategy (Firestore for geospatial coordinates + MongoDB for app data)",
        "End-to-end asset monitoring and project budget estimation",
        "Dockerized production deployment on Alibaba Cloud VPS",
        "Direct collaboration with PED Manager to translate field operations into code"
      ],
      architecturePoints: [
        { title: "Geospatial Engine", detail: "Interactive Leaflet map supporting multi-point fiber cable routing, terrain snapping, and distance calculations." },
        { title: "Dual-Database Strategy", detail: "Real-time coordinate rendering from Firestore separated from transactional metadata in MongoDB." },
        { title: "Production Hardening", detail: "Containerized deployment via Docker on Alibaba Cloud VPS with custom server firewall rules." }
      ],
      visualType: "gis"
    },
    {
      id: "ifinancing-v5",
      number: "02",
      title: "iFINANCING VERSION 5",
      subtitle: "Enterprise Core Multifinance System",
      category: "FINTECH · ENTERPRISE · MICROSERVICES",
      period: "Jul 2023 – Jan 2025",
      organization: "Clemont Finance Indonesia / PT. Inovasi Mitra Sejati",
      description: "Enterprise core multifinance system supporting mission-critical financing workflows from application, survey, appraisal, and approval through Go Live agreement.",
      extendedDescription: "Maintained and expanded an enterprise-grade core multifinance application based on a decoupled microservices architecture. Implemented UI features using Angular and backend APIs in .NET across approximately 32 operational business modules.",
      technologies: ["Angular", "TypeScript", "JavaScript", ".NET", "SQL Server", "Microservices", "Jenkins", "Docker"],
      keyHighlights: [
        "Spanned ~32 core operational modules across enterprise financing",
        "Microservices architecture cleanly decoupling UI, API, and database services",
        "Implemented critical Survey, Appraisal, Approval, Collection, and Accounting workflows",
        "Production release lifecycle via Jenkins pipelines and Dockerized containers",
        "Collaborated closely with Project Leaders, QA, and business analysts"
      ],
      architecturePoints: [
        { title: "Module Decoupling", detail: "Isolated microservice boundaries for Application, Appraisal, Finance, Collection, and Agreement." },
        { title: "Enterprise API Layer", detail: "High-throughput .NET RESTful APIs servicing Angular single-page modules with strict validation." },
        { title: "Database Integrity", detail: "Complex relational transaction management on Microsoft SQL Server with strict audit requirements." }
      ],
      visualType: "multifinance"
    },
    {
      id: "ifinancing-360",
      number: "03",
      title: "iFINANCING 360",
      subtitle: "Modern Multifinance Platform Rewrite",
      category: "MODERNIZATION · BLAZOR · ENTERPRISE ARCHITECTURE",
      period: "Jul 2023 – Jan 2025",
      organization: "PT. Inovasi Mitra Sejati",
      description: "A ground-up rewrite and architectural modernization of the core multifinance platform using a modern Microsoft .NET and Blazor ecosystem.",
      extendedDescription: "Contributed to the ground-up development of iFinancing 360 to replace legacy bottlenecks. Re-engineered database structures, backend APIs, and responsive UI components across PostgreSQL, SQL Server, and Oracle databases.",
      technologies: ["Blazor", ".NET", "C#", "PostgreSQL", "SQL Server", "Oracle", "Docker", "Jenkins", "GitHub"],
      keyHighlights: [
        "Ground-up rewrite of enterprise multifinance capabilities",
        "High-performance Blazor component library paired with modern .NET backend",
        "Multi-database support spanning PostgreSQL, SQL Server, and Oracle",
        "Clean architecture separating domain logic, data persistence, and UI presentation",
        "Continuous automated integration and deployment via Jenkins"
      ],
      architecturePoints: [
        { title: "Full-Stack Blazor", detail: "Shared C# models and validation logic across client components and backend service layers." },
        { title: "Polyglot Persistence", detail: "Coordinated database schemas across PostgreSQL, SQL Server, and legacy Oracle data stores." },
        { title: "Platform Modernization", detail: "Dramatically reduced architectural friction and improved developer velocity across the engineering team." }
      ],
      visualType: "modernization"
    },
    {
      id: "rnd-initiatives",
      number: "04",
      title: "RESEARCH & DEVELOPMENT",
      subtitle: "Engineering, Automation & Intelligence Initiatives",
      category: "AUTOMATION · SECURITY · TELEMETRY",
      period: "Jan 2025 – Present",
      organization: "PT. Inovasi Mitra Sejati",
      description: "Advanced R&D initiatives involving dynamic executive dashboards, AI-assisted phone collection analysis, static code security, load testing, and automated CI/CD.",
      extendedDescription: "Spearheaded research and development covering reusable UI components, multi-factor authentication, AI speech-to-text integration for customer sentiment analysis, performance benchmark testing, and automated test pipelines.",
      technologies: [".NET", "Blazor", "PostgreSQL", "Highcharts", "Twilio", "ElevenLabs", "SonarQube", "K6", "OWASP ZAP", "N8N", "Selenium", "Python", "Docker", "Jenkins", "Nginx"],
      keyHighlights: [
        "AI-Powered Phone Collection Analysis using Twilio, Speech-to-Text, and local models",
        "Multi-Factor Authentication (MFA) system supporting WhatsApp OTP, Email OTP, and TOTP",
        "Dynamic executive dashboard platform built with Highcharts and OpenXML reporting",
        "Automated security scans (OWASP ZAP), code analysis (SonarQube), and load tests (K6)",
        "Automated API testing pipelines with N8N and UI test automation with Selenium & Python"
      ],
      architecturePoints: [
        { title: "AI Speech Telemetry", detail: "Integrated Twilio WebRTC audio streams with Speech-to-Text and local AI models to classify sentiment." },
        { title: "Security & MFA Protocol", detail: "Designed time-based one-time password (TOTP) backend engine alongside multi-channel OTP fallback." },
        { title: "Automated QA Gate", detail: "Configured K6 stress testing scripts and OWASP ZAP vulnerability scanners before staging promotion." }
      ],
      visualType: "rnd"
    }
  ] as Project[],

  experience: [
    {
      company: "PT. Inovasi Mitra Sejati",
      role: "Full Stack Web Developer - Research and Engineer Division",
      period: "Jan 2025 – Present",
      location: "Jakarta / Remote",
      responsibilities: [
        "Developed and enhanced a microservices-based core multifinance platform, covering business features, reusable UI components, automation, security, testing, and production support.",
        "Developed a dynamic Dashboard System using Highcharts and maintained an enterprise reporting system with complex data and export requirements.",
        "Developed an AI powered Phone Collection Analysis system, integrating Twilio, Speech-to-Text, and a Local AI Model to analyze customer conversations, including sentiment and communication outcomes.",
        "Developed a Multi-Factor Authentication (MFA) system supporting WhatsApp OTP, Email OTP, and TOTP, including back-end implementation of the TOTP mechanism.",
        "Implemented SonarQube, K6, and OWASP ZAP for static code analysis, load testing, and security assessment across multiple application modules.",
        "Built API Testing automation using N8N and a UI Automation framework using Selenium and Python.",
        "Handled application deployment and production troubleshooting using Docker, including server setup, Jenkins, PostgreSQL, and application deployment from a VPS for Proof of Concept (PoC) projects.",
        "Collaborated with developers, QA engineers, and stakeholders across development, testing, deployment, and software quality improvement initiatives."
      ],
      techStack: [".NET", "Blazor", "C#", "PostgreSQL", "SQL", "Highcharts", "OpenXML", "Twilio WebRTC", "ElevenLabs", "Docker", "Jenkins", "Nginx", "Ubuntu Server", "SonarQube", "K6", "OWASP ZAP", "N8N", "Selenium", "Python"]
    },
    {
      company: "PT. Inovasi Mitra Sejati",
      role: "Full Stack Web Developer",
      period: "Jul 2023 – Jan 2025",
      location: "Jakarta, Indonesia",
      responsibilities: [
        "Developed and maintained an enterprise core multifinance platform based on microservices architecture, supporting business processes from Application through Agreement.",
        "Developed UI using Angular and Back-end APIs using .NET across approximately 32 modules, including Application, Survey, Appraisal, Approval, Collection, Finance, and Accounting.",
        "Contributed to the ground-up development of iFinancing 360, a complete rewrite of the multifinance platform using Blazor, .NET, PostgreSQL, SQL Server, and Oracle.",
        "Implemented database structures, Backend APIs, and UI components as part of the platform's full-scale rewrite.",
        "Participated in application deployment to production using Jenkins and Docker.",
        "Collaborated with Project Leaders, QA engineers, and other developers throughout feature development, testing, bug fixing, and release processes in an enterprise environment."
      ],
      techStack: ["Angular", "Blazor", "TypeScript", "JavaScript", ".NET", "PostgreSQL", "SQL Server", "Oracle", "Docker", "Jenkins", "GitHub"]
    },
    {
      company: "Telkom Indonesia Regional III (West Java)",
      role: "Full Stack Web Developer",
      period: "Jul 2022 – Jun 2023",
      location: "Bandung, West Java",
      responsibilities: [
        "Developed Si Mantap, an internal application for the Planning Engineering Deployment (PED) division to support network planning, asset monitoring, project tracking, and financial estimation.",
        "Managed the application life-cycle end-to-end, including requirements gathering, business process analysis, UI/UX design, database design (ERD), full-stack development, testing, deployment, and maintenance.",
        "Developed a GIS-based Route Planning feature using Leaflet, enabling users to draw network routes and automatically calculate recommended network equipment based on technical rules and specifications.",
        "Designed a dual-database approach using Firebase Firestore for coordinate data and MongoDB for application data based on different data access and rendering requirements.",
        "Developed core features including Asset Monitoring, Route Planning, Financial Management, Project Tracking, and Dashboard Monitoring.",
        "Deployed the application to an Alibaba Cloud VPS using Docker and handled production troubleshooting, including server firewall configuration.",
        "Worked directly with business stakeholders, including the PED Manager, to translate operational requirements into application features."
      ],
      techStack: ["Laravel", "PHP", "JavaScript", "Leaflet", "Firebase Firestore", "MongoDB", "Docker", "Alibaba Cloud VPS", "Figma"]
    }
  ] as Experience[],

  skills: [
    {
      title: "CORE STACK",
      description: "Primary engineering stack for production enterprise backend and frontend systems",
      skills: [
        { name: "C#", level: "Proficient" },
        { name: ".NET / .NET Core", level: "Proficient" },
        { name: "Blazor", level: "Proficient" },
        { name: "JavaScript", level: "Proficient" },
        { name: "TypeScript", level: "Proficient" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "SQL Server", level: "Proficient" },
        { name: "RESTful API", level: "Proficient" },
        { name: "Angular", level: "Working Knowledge" },
        { name: "HTML5", level: "Working Knowledge" },
        { name: "CSS3", level: "Working Knowledge" },
        { name: "Python", level: "Working Knowledge" },
        { name: "MongoDB", level: "Working Knowledge" }
      ]
    },
    {
      title: "SUPPORTING STACK",
      description: "Infrastructure, containerization, and secondary enterprise persistence",
      skills: [
        { name: "Docker", level: "Proficient" },
        { name: "Jenkins", level: "Working Knowledge" },
        { name: "Nginx", level: "Working Knowledge" },
        { name: "Oracle", level: "Working Knowledge" },
        { name: "Firebase Firestore", level: "Working Knowledge" },
        { name: "Git", level: "Working Knowledge" },
        { name: "GitHub", level: "Working Knowledge" }
      ]
    },
    {
      title: "ENGINEERING & TOOLS",
      description: "Testing automation, quality auditing, telemetry, and external integrations",
      skills: [
        { name: "K6", level: "Proficient" },
        { name: "SonarQube", level: "Proficient" },
        { name: "Selenium", level: "Working Knowledge" },
        { name: "OWASP ZAP", level: "Working Knowledge" },
        { name: "N8N", level: "Working Knowledge" },
        { name: "Highcharts", level: "Working Knowledge" },
        { name: "Leaflet", level: "Working Knowledge" },
        { name: "Twilio", level: "Working Knowledge" },
        { name: "ElevenLabs", level: "Working Knowledge" }
      ]
    }
  ] as SkillCategory[],

  process: [
    {
      number: "01",
      phase: "DISCOVERY",
      title: "UNDERSTAND",
      description: "Analyze business requirements, operational workflows, system constraints, and the real underlying problem before writing a single line of code.",
      deliverables: ["Stakeholder interview notes", "Business process flowcharts", "Data flow analysis", "Scope & constraint definitions"]
    },
    {
      number: "02",
      phase: "ARCHITECTURE",
      title: "DESIGN",
      description: "Translate operational requirements into clear system structures, database schemas (ERD), API specifications, and ergonomic UI workflows.",
      deliverables: ["Entity Relationship Diagrams (ERD)", "API contracts & OpenAPI specs", "UI/UX component mockups", "Storage & indexing strategies"]
    },
    {
      number: "03",
      phase: "IMPLEMENTATION",
      title: "BUILD",
      description: "Develop reliable frontend interfaces, robust backend APIs, database migrations, and modular service integrations with clean code standards.",
      deliverables: ["Clean C#/.NET REST services", "Modular Blazor / Angular components", "Optimized SQL queries & migrations", "Integration pipelines"]
    },
    {
      number: "04",
      phase: "VERIFICATION",
      title: "VALIDATE",
      description: "Rigorously test functionality, performance under load with K6, code health with SonarQube, and security posture with OWASP ZAP.",
      deliverables: ["K6 stress testing benchmarks", "SonarQube static code audits", "OWASP ZAP vulnerability reports", "Automated N8N & Selenium tests"]
    },
    {
      number: "05",
      phase: "RELEASE",
      title: "DEPLOY",
      description: "Containerize applications using Docker, automate builds with Jenkins, configure web servers and firewalls, and support production Go Live.",
      deliverables: ["Docker compose & container images", "Jenkins CI/CD deployment pipelines", "Nginx reverse proxy configurations", "Production cutover support"]
    },
    {
      number: "06",
      phase: "REFINEMENT",
      title: "IMPROVE",
      description: "Continuously monitor live telemetry, resolve edge cases, refactor technical debt, and automate repetitive workflows.",
      deliverables: ["Highcharts operational dashboards", "Refactored module boundaries", "Automated maintenance jobs", "Telemetry & audit log reviews"]
    }
  ] as ProcessStep[],

  education: {
    institution: "Telkom University",
    degree: "Diploma 3 of Application Software Engineering",
    period: "July 2020 – June 2023",
    note: "Application Software Engineering specialization with focus on software development lifecycle, database design, and web architecture."
  },

  languages: [
    { name: "Indonesian", level: "Native / Fluent" },
    { name: "English", level: "Proficient in Conversation & Technical Documentation" }
  ],

  certifications: [
    { title: "Belajar Fundamental Front-End Web Development", date: "Dec 2020", issuer: "Dicoding Indonesia" },
    { title: "Belajar Membuat Front-End Web untuk Pemula", date: "Dec 2020", issuer: "Dicoding Indonesia" },
    { title: "Belajar Dasar Pemrograman Web", date: "Dec 2020", issuer: "Dicoding Indonesia" }
  ]
};
