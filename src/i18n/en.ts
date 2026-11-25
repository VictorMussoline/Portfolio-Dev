export const en = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    badge: "Victor Mussoline",
    titleStart: "Building scalable ",
    titleHighlight1: "Web & Mobile",
    titleMid: " applications with ",
    titleHighlight2: "React Native & Python",
    titleEnd: ".",
    subtitle: "Full-Stack Developer specialized in cross-platform development, software architecture and AI-assisted engineering.",
    btnProjects: "View Projects",
    btnContact: "Get in Touch",
    btnCV: "Download CV",
  },
  metrics: {
    items: [
      {
        value: "2+",
        label: "Store Apps",
        description: "Google Play & App Store published"
      },
      {
        value: "Full-Stack",
        label: "Mobile & Cloud",
        description: "React Native, Web, Java 21 & GCP"
      },
      {
        value: "C1",
        label: "Advanced English",
        description: "DET Score 130 · Global Fluency"
      },
      {
        value: "100%",
        label: "Production-Ready",
        description: "Scalable architectures, Docker & APIs"
      }
    ]
  },
  about: {
    title: "About Me",
    p1: "Full-Stack Developer pursuing a degree in Information Systems. I combine hands-on IT operations experience (TechForge) with a deep architectural mindset to build scalable, high-performance software integrated with modern cloud infrastructure (Supabase/Vercel) and artificial intelligence.",
    tags: ["🎓 Information Systems", "⚡ Operations & Architecture", "🤖 AI Engineering"],
    roleBadge: "Full-Stack Engineer",
  },
  whatIBuild: {
    title: "What I Build",
    items: [
      {
        title: "Mobile Apps",
        description: "Engineering native and cross-platform applications (iOS/Android) with React Native, focusing on high performance, fluid animations, and complex state management to ensure consistency across all devices."
      },
      {
        title: "Responsive Dashboards",
        description: "Development of ultra-fast web interfaces with Vite, React, and Tailwind CSS, prioritizing reusable component architecture, accessibility, and instant page loads."
      },
      {
        title: "REST APIs",
        description: "Modeling and implementing scalable backend architectures (Python/Node.js), focusing on security (authentication, rate limiting), request efficiency, and database robustness (relational and non-relational)."
      },
      {
        title: "AI-powered Workflows",
        description: "Strategic integration of AI agents to automate complex business logic, manage data, and accelerate internal workflows, optimizing development cycles and delivery precision."
      },
      {
        title: "Cloud Integrations",
        description: "Deployment of modern cloud infrastructures with Supabase and Vercel, combining relational PostgreSQL modeling, secure authentication, and serverless routines."
      },
      {
        title: "Software Architecture",
        description: "Design of decoupled and maintainable systems applying software engineering best practices, clean code, and architectural patterns ready for production scale."
      }
    ]
  },
  timeline: {
    title: "Career Journey",
    items: [
      {
        year: "2021",
        role: "Computer Technician",
        description: "Solid foundation in hardware, networking, infrastructure, and technical support.",
        tags: ["Hardware", "Support", "Infrastructure"]
      },
      {
        year: "2025",
        role: "TechWise",
        description: "Full-Stack software development, client applications, and relational database architectures.",
        tags: ["Full-Stack", "Web Apps", "Databases"]
      },
      {
        year: "2026",
        role: "PsicoSistemoLogia",
        description: "Specialized system development, cross-platform engineering, and AI integration.",
        tags: ["React Native", "Python", "AI Integration"]
      },
      {
        year: "Present",
        role: "Next Opportunity 🚀",
        description: "Ready to deliver high-impact scalable Web & Mobile applications in your team.",
        tags: ["Web & Mobile", "Scalable Systems", "Immediate Availability"]
      }
    ]
  },
  github: {
    title: "GitHub Stats",
  },
  projects: {
    title: "Featured Projects",
    titleBeforeHighlight: "",
    titleHighlight: "Featured",
    titleAfterHighlight: "Projects",
    allTitle: "All Projects",
    allTitleHighlight: "All",
    allTitleRest: "Projects",
    featuredBadge: "Featured",
    clickForDetails: "Click to view details",
    categories: {
      all: "All",
      mobile: "Mobile",
      backend: "Backend & Cloud",
      web: "Web & Dashboards"
    },
    modal: {
      close: "Close",
      overview: "Overview",
      features: "Key Features",
      technologies: "Tech & Architecture",
      viewLive: "Visit Application",
      viewStore: "View on Play Store",
      viewAppStore: "View on App Store",
      viewCode: "View Code",
      closedSource: "Proprietary Code",
      gallery: "Project Gallery"
    },
    featured: [
      {
        id: "velo-servicos-gerais",
        category: "mobile",
        name: "Velo: Serviços Gerais",
        description: "Velo is a full-featured general services marketplace app built end-to-end from scratch by me. The platform connects customers looking for everyday services—such as home repairs, maintenance, cleaning, electrical work, and technical assistance—with qualified local professionals, offering quote requests, order management, direct communication, and end-to-end service tracking in one place.",
        cardSummary: "Full-featured mobile marketplace connecting customers with general service professionals, quotes, and order tracking.",
        topics: ["React Native", "TypeScript", "Expo", "iOS & Android"],
        features: [
          "Fast matching between customers and general service providers by category and location",
          "End-to-end in-app quote requests, proposals, and service hiring flow",
          "Professional profiles featuring service catalogs, ratings, and completed job history",
          "Real-time tracking of service requests, bookings, and order status",
          "Built entirely from scratch and published on both Google Play and the App Store"
        ],
        homepage: "https://play.google.com/store/apps/details?id=com.victormussoline.appvelo&pcampaignid=web_share",
        appStoreUrl: "https://apps.apple.com/br/app/velo-servi%C3%A7os-gerais/id6810832850",
        images: [
          "/projects/velo-app/1.jpg",
          "/projects/velo-app/2.jpg",
          "/projects/velo-app/3.jpg"
        ],
        featured: true,
        isPlayStore: true,
        demoLabel: "Google Play",
        appStoreLabel: "App Store"
      },
      {
        id: "velo-api",
        category: "backend",
        name: "Velo API: Core Backend & Marketplace",
        description: "Robust and scalable RESTful API built with Java 21 and Spring Boot 3 powering the entire Velo ecosystem. Orchestrates geospatial service matching between clients and providers, handles Pix payments and subscriptions through Asaas and RevenueCat, powers in-app chat with Firebase FCM push notifications, and enforces security via Spring Security, JWT, and social authentication. The entire API and cloud infrastructure were configured by me to run on Google Cloud Platform (GCP) in the most optimized way possible, balancing high performance, scalability, and cost efficiency.",
        cardSummary: "Java 21 & Spring Boot 3 RESTful API optimized on Google Cloud, powering geospatial matching, Pix/subscriptions, push-enabled chat, and social auth.",
        topics: [
          "Java 21",
          "Spring Boot 3",
          "Google Cloud (GCP)",
          "PostgreSQL",
          "Docker",
          "Spring Security & JWT",
          "Firebase FCM",
          "Asaas & RevenueCat"
        ],
        features: [
          "Geospatial matching engine connecting customers and service providers by proximity and category",
          "Full Pix payment and subscription billing integration with Asaas and RevenueCat",
          "In-app messaging backed by real-time push notifications via Firebase FCM",
          "Hardened authentication and authorization with Spring Security, JWT, and social login",
          "Infrastructure and deployment configured on Google Cloud Platform (GCP), optimized for performance, scalability, and cost efficiency",
          "Containerized architecture with Docker and relational persistence on PostgreSQL"
        ],
        images: [
          "/projects/velo-api/architecture.svg"
        ],
        featured: true
      },
      {
        id: "velo-dashboard",
        category: "web",
        name: "Velo Dashboard: Admin Panel & Analytics",
        description: "Executive and administrative dashboard built to manage the entire Velo ecosystem in real time. The platform centralizes operational and financial telemetry with interactive charts, full user, provider, and customer management (featuring rankings, live availability, and document verification), in-app credit and coin sales synchronized with Google Play and Apple App Store via RevenueCat, partner store management with renewal cycles, report moderation, and a dedicated Conversion Analytics module with end-to-end funnel tracking and drop-off diagnostics.",
        cardSummary: "Executive admin dashboard for the Velo ecosystem with real-time telemetry, user management, RevenueCat credit sales, partners, moderation, and funnel analytics.",
        topics: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "RevenueCat",
          "Funnel Analytics",
          "REST API"
        ],
        features: [
          "Real-time executive dashboard with financial and operational KPIs, partner billing alerts, and interactive charts (area, bar, and line views)",
          "Centralized management of users, providers (live availability, job rankings, star ratings, and service coverage areas), and customers with advanced filters",
          "Credits & Sales module featuring standardized coin bundles synced with Google Play and App Store via RevenueCat and a full transaction log",
          "Partner Companies management for proximity-based in-app banners, 90-day billing cycle tracking, quick renewals, and overdue notifications",
          "Security & Audit center for document verification and report moderation with status workflows (pending, under review, and resolved)",
          "Conversion & Funnel Analytics tracking the full journey (demand → contact → acceptance → completion) with automated drop-off diagnostics"
        ],
        images: [
          "/projects/dashboard/1.png",
          "/projects/dashboard/2.png",
          "/projects/dashboard/3.png",
          "/projects/dashboard/4.png",
          "/projects/dashboard/5.png",
          "/projects/dashboard/6.png",
          "/projects/dashboard/7.png",
          "/projects/dashboard/8.png"
        ],
        featured: true
      },
      {
        id: "arami-psl-jornadas",
        category: "mobile",
        name: "Arami: PSL Jornadas",
        description: "Arami is the official PsicoSistemoLogia platform for tracking your Restorative Journey. Developed to support your personal development process, Arami brings together structured journeys, restorative practices, exclusive content, and a welcoming community in a single app. Each stage of the journey has been planned to respect your pace and provide a meaningful experience of learning, reflection, and growth.",
        cardSummary: "Mobile restorative-journey platform with guided progress, multimedia content, and a supportive community.",
        topics: ["React Native", "TypeScript", "Expo", "Redux Toolkit"],
        features: [
          "Guided journeys with step-by-step progress tracking",
          "Integrated multimedia player for restorative practices and meditations",
          "Supportive in-app community for mutual experience exchange",
          "Offline-first architecture with periodic background synchronization",
          "Responsive mobile UI built with Expo for iOS & Android"
        ],
        homepage: "https://play.google.com/store/apps/details?id=com.psl.arami&hl=en-US&ah=87IIPeiH48M02EUUQ433IxROB6Q",
        appStoreUrl: "https://apps.apple.com/br/app/arami-psl-jornadas/id6791764558",
        featured: true,
        isPlayStore: true,
        demoLabel: "Google Play",
        appStoreLabel: "App Store",
        images: [
          "/projects/aramiapp-1.png",
          "/projects/aramiapp-2.png",
          "/projects/aramiapp-3.png"
        ]
      },
      {
        id: "dashboard-arami",
        category: "web",
        name: "Dashboard Arami",
        description: "Administrative dashboard for operational control, user engagement metrics, and system monitoring for the Arami platform.",
        cardSummary: "Operations dashboard with real-time metrics, user management, and journey tracking.",
        topics: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
        features: [
          "Real-time analytics and user engagement dashboard",
          "User administration, role management, and active journey tracking",
          "Interactive retention and activity charts powered by Recharts",
          "Content management, notifications, and publication workflow"
        ],
        images: [
          "/projects/aramidash-1.png",
          "/projects/aramidash-2.png",
          "/projects/aramidash-3.png"
        ],
        featured: false
      },
      {
        id: "fincontrol",
        category: "web",
        name: "FinControl",
        description: "Full financial management dashboard featuring real-time analytics charts, income/expense tracking, cash flow, and visual reports.",
        cardSummary: "Complete financial management with live charts, smart cash flow, and visual reporting.",
        topics: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
        features: [
          "Smart cash flow tracking with automated transaction categorization",
          "Real-time authentication and database powered by Supabase",
          "Visual charts and detailed budget forecasting",
          "Responsive glassmorphic dark mode user interface"
        ],
        html_url: "https://github.com/VictorMussoline/FinControl",
        homepage: "https://fincontrol-open-app.vercel.app",
        images: [
          "/projects/fincontrol-1.png",
          "/projects/fincontrol-2.png",
          "/projects/fincontrol-3.png"
        ],
        featured: false
      },
      {
        id: "techforge",
        category: "web",
        name: "TechForge",
        description: "Institutional website & IT services showcase for TechForge, built with futuristic UI design, live monitoring highlights, and cloud solutions.",
        cardSummary: "Institutional website with futuristic visuals, service showcase, and a premium digital presence.",
        topics: ["React", "TypeScript", "Vite", "Framer Motion", "CSS3"],
        features: [
          "Futuristic user interface with smooth Framer Motion micro-interactions",
          "Structured service catalog for IT and cloud infrastructure solutions",
          "SEO-optimized architecture with high Google Lighthouse scores",
          "Fully responsive and accessible layout across all screens"
        ],
        html_url: "https://github.com/VictorMussoline/TechForge-Site",
        homepage: "https://site-techforge.vercel.app",
        images: [
          "/projects/techforge-1.png",
          "/projects/techforge-2.png",
          "/projects/techforge-3.png"
        ],
        featured: false
      },
      {
        id: "portfolio-dev",
        category: "web",
        name: "My Portfolio",
        description: "High-performance Portfolio Web application with glassmorphic design, full internationalization (i18n), Apple-style animations, and PWA support.",
        cardSummary: "Premium portfolio with glassmorphism, i18n, smooth motion, and installable PWA behavior.",
        topics: ["React", "TypeScript", "Vite", "Framer Motion", "PWA"],
        features: [
          "Glassmorphic dark mode design with interactive particle and cursor effects",
          "Full bilingual internationalization support (PT/EN)",
          "Installable Progressive Web App (PWA)",
          "Production-grade web performance and accessibility"
        ],
        homepage: "https://victormussoline.vercel.app",
        images: [
          "/projects/portfolio-1.png",
          "/projects/portfolio-2.png",
          "/projects/portfolio-3.png"
        ],
        featured: false
      },
      {
        id: "imersao-dev-alura",
        category: "web",
        name: "Bootcamp Dev Alura IA",
        description: "Interactive web projects built during Alura's Dev Immersion, featuring mini-games, calculators, and programming logic tools.",
        cardSummary: "Interactive mini-project collection and logic challenges built for hands-on learning.",
        topics: ["JavaScript", "HTML5", "CSS3", "Logic Programming"],
        features: [
          "Interactive collection of mini-apps and programming logic challenges",
          "Modular code structure and clean architecture",
          "Intuitive UI designed for interactive learning"
        ],
        html_url: "https://github.com/VictorMussoline/Imersao-Dev-Alura",
        homepage: "https://victormussoline.github.io/imersao-dev-alura-10/",
        images: [
          "/projects/alura-1.png",
          "/projects/alura-2.png",
          "/projects/alura-3.png"
        ],
        featured: false
      }
    ],
    demo: "Live Demo",
    viewAll: "View all projects!",
    backToHome: "Back to Home",
  },
  features: {
    title: "Why work with me",
    list: [
      {
        title: "Full-Stack Development",
        text: "Creation of complete applications (Web and Mobile), connecting modern interfaces to robust backends natively."
      },
      {
        title: "Certified Advanced English (C1)",
        text: "Proven solid fluency (DET Score 130), ready to collaborate in global teams, meetings, and international documentation."
      },
      {
        title: "Relational Architecture & APIs",
        text: "Consistent and secure data modeling with Supabase and PostgreSQL, focused on integrity and fast responses."
      },
      {
        title: "High-Performance Interfaces",
        text: "Ultra-fast and fluid screens built with Vite, TypeScript, and Tailwind CSS, prioritizing user experience (UX/UI)."
      },
      {
        title: "Mobile Development",
        text: "Creation of smartphone applications (focusing on React Native), expanding the product's reach beyond the browser."
      },
      {
        title: "Refactoring & Scalability",
        text: "Ability to evolve legacy stacks into modern architectures, optimizing costs, performance, and code maintenance."
      }
    ]
  },
  contact: {
    title: "Let's talk?",
    subtitle: "Open to new opportunities and interesting projects.",
    copyEmail: "Email copied successfully!",
    copyEmailFail: "Failed to copy email.",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    formSubmit: "Send Message",
    formSending: "Sending...",
    formSuccess: "Message sent successfully!",
  },
  footer: {
    rights: "All rights reserved.",
  }
};
