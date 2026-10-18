export const RESUME_DATA = {
  personal: {
    name: "GUNAL S",
    role: "Software Developer",
    location: "Puducherry, India",
    email: "sivagunal15@gmail.com",
    phone: "+91 9500856348",
    github: "https://github.com/Gunal1509",
    githubHandle: "Gunal1509",
    linkedin: "https://linkedin.com/in/Gunal-s",
    linkedinHandle: "Gunal-s",
    leetcode: "https://leetcode.com/u/Gunal_15/",
    leetcodeHandle: "Gunal_15",
    codeforces: "https://codeforces.com/profile/Gunal_S15",
    codeforcesHandle: "Gunal_S15",
    summary:
      "Passionate Software Developer with hands-on experience in web application development through projects, self-learning, and competitive programming. Strong problem-solving skills and a continuous learning mindset, committed to building quality software and contributing to organizational success.",
    positioning:
      "Full-stack software developer building dependable web applications, AI-enabled systems, and robust backend architectures with React, Spring Boot, and FastAPI."
  },

  skills: {
    categories: [
      {
        id: "languages",
        name: "Programming Languages",
        description: "Core languages used for systems, competitive programming, and application backends",
        items: [
          { name: "Java", role: "Primary language for enterprise backend services (Spring Boot), OOP design, and robust API development." },
          { name: "Python", role: "Used for AI/ML models, FastAPI REST APIs, machine learning data pipelines, and automation." }
        ]
      },
      {
        id: "frontend",
        name: "Frontend Technologies",
        description: "Modern, responsive client architecture and component engineering",
        items: [
          { name: "ReactJS", role: "Core UI library for single-page applications, custom state management, JWT auth flows, and dashboards." },
          { name: "HTML", role: "Semantic web standards, accessibility, and structured document hierarchy." },
          { name: "CSS", role: "Custom layouts, responsive design, modern dark-mode themes, and component styling." }
        ]
      },
      {
        id: "backend",
        name: "Backend Technologies & Frameworks",
        description: "Server architecture, API design, security, and enterprise services",
        items: [
          { name: "FastAPI", role: "High-performance Python web framework used with JWT authentication for secure asynchronous APIs." },
          { name: "SpringBoot", role: "Enterprise Java framework for secure RESTful APIs, role-based authorization, and business logic." },
          { name: "NodeJS", role: "JavaScript runtime for building scalable server-side tools and application services." }
        ]
      },
      {
        id: "databases",
        name: "Databases",
        description: "Relational data modeling, ACID compliance, and query performance",
        items: [
          { name: "MySQL", role: "Relational database used for campus management schemas, student records, and structured academic data." },
          { name: "PostgreSQL", role: "Advanced relational database powering order lifecycle, inventory tracking, and supplier analytics." }
        ]
      },
      {
        id: "tools",
        name: "Tools & Workflow",
        description: "Version control, API testing, debugging, and continuous integration",
        items: [
          { name: "Github", role: "Source code management, version control, branching workflows, and open-source contribution." },
          { name: "Postman", role: "API contract testing, endpoint debugging, payload verification, and authentication header validation." }
        ]
      },
      {
        id: "soft_skills",
        name: "Soft Skills",
        description: "Execution, leadership, and team collaboration",
        items: [
          { name: "Team Collaboration", role: "Collaborating in multidisciplinary teams during 24-hour hackathons and internship sprints." },
          { name: "Leadership", role: "Leading technical direction, project scoping, and architecture design under tight deadlines." }
        ]
      }
    ]
  },

  projects: [
    {
      id: "synaptiq",
      title: "SYNAPTIQ",
      subtitle: "Full-Stack AI Campus Assistance Platform",
      tagline: "AI-powered campus assistant integrating real-time intelligence with academic administrative modules.",
      featured: true,
      technologies: ["React.js", "FastAPI", "MySQL", "JWT", "Axios", "AI Chatbot", "Python"],
      problem:
        "College campuses struggle with fragmented communication channels, delayed student query resolution, and manual academic file distribution.",
      solution:
        "Engineered an integrated campus platform that couples an interactive AI chatbot for student queries with file management and academic modules.",
      keyFeatures: [
        "Interactive AI chatbot delivering contextual responses for student queries",
        "Secure document and academic file upload infrastructure",
        "JWT-based authentication protecting student and staff endpoints",
        "Responsive, dynamic client dashboard built using React.js and Axios"
      ],
      myContribution:
        "Architected the full-stack system: built secure FastAPI endpoints with JWT verification, designed the MySQL database schema for academic data, and implemented client state and Axios API communication.",
      architecture: [
        { layer: "Client Interface", desc: "React.js SPA + Axios HTTP Client" },
        { layer: "Security Gateway", desc: "FastAPI REST API + JWT Authentication" },
        { layer: "AI Pipeline", desc: "Natural Language Chatbot & Query Classifier" },
        { layer: "Storage Engine", desc: "MySQL Relational Database + File System" }
      ],
      flow: ["React Client (Axios)", "FastAPI Gateway (JWT)", "AI Query Engine", "MySQL Database", "Structured Response"],
      github: "https://github.com/Gunal1509/SynaptiQ-smart-AI-campus",
      status: "Production Ready"
    },
    {
      id: "synqra",
      title: "SYNQRA",
      subtitle: "Supply Chain & Order Management System",
      tagline: "Full-stack AI-enabled supply chain platform with ML-driven supplier risk prediction and role-based management.",
      featured: true,
      technologies: ["React.js", "Spring Boot", "PostgreSQL", "Python ML", "JWT", "RESTful APIs", "Java"],
      problem:
        "Supply chains suffer from opaque supplier reliability, delayed risk identification, and disconnected order/shipment tracking workflows.",
      solution:
        "Built an end-to-end management platform uniting supplier tracking, order processing, and shipment workflows with an integrated Python machine learning model for supplier reliability and risk prediction.",
      keyFeatures: [
        "ML-based supplier reliability and risk prediction model",
        "Complete lifecycle management: suppliers, orders, shipments, and inventory",
        "Role-based authorization and protected routes with JWT security",
        "Administrative dashboard with real-time analytics, user management, and event notifications",
        "Comprehensive RESTful CRUD operations with clean transactional boundaries"
      ],
      myContribution:
        "Developed full-stack architecture connecting React.js frontend with Spring Boot backend services, designed PostgreSQL entity models, and integrated Python machine learning algorithms for risk forecasting.",
      architecture: [
        { layer: "Frontend Layer", desc: "React.js Dashboard with Protected Routes" },
        { layer: "Backend Core", desc: "Spring Boot Microservice + Role-Based Access Control" },
        { layer: "Intelligence Engine", desc: "Python-based Machine Learning Risk Predictor" },
        { layer: "Data Layer", desc: "PostgreSQL with ACID Transactional Safety" }
      ],
      flow: ["React Frontend", "Spring Boot REST Core", "Python ML Risk Engine", "PostgreSQL Database", "Operational Dashboard"],
      github: "https://github.com/Gunal1509",
      status: "Production Ready"
    }
  ],

  experience: [
    {
      id: "uptoskill",
      company: "Uptoskills",
      role: "Web Development Intern",
      period: "16 March 2026 – 16 June 2026",
      location: "New Delhi / Remote",
      verificationRef: "US-EXP-2026-H2543AA",
      verificationContact: "verify@uptoskills.in",
      signatory: "Shivam Agarwal (Authorized Signatory)",
      responsibilities: [
        "Developed responsive, high-performance web applications using HTML, CSS, JavaScript, and React.js.",
        "Collaborated across UI development, API integration, database operations, and rigorous debugging.",
        "Demonstrated strong analytical thinking, dedication, and professional attitude toward growth and development.",
        "Engineered reliable web interfaces ensuring cross-browser compatibility and maintainable frontend architecture."
      ],
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "REST APIs", "Debugging"],
      outcome: "Successfully completed internship with official Experience Letter certification (Ref: US-EXP-2026-H2543AA), delivering verified web application features."
    }
  ],

  education: [
    {
      degree: "B.Tech, Information Technology",
      institution: "Sri Manakula Vinayagar Engineering College",
      location: "Puducherry, India",
      period: "2023 – 2027",
      metric: "GPA: 8.82",
      highlights: "Focus on Data Structures, Algorithms, Software Engineering, Object-Oriented Programming (Java), and Distributed Systems."
    },
    {
      degree: "Higher Secondary (Class XII)",
      institution: "Vivekanandha Higher Secondary School",
      location: "Puducherry, India",
      period: "2022 – 2023",
      metric: "Percentage: 92.33%",
      highlights: "Distinction in Mathematics, Physics, and Computer Science."
    }
  ],

  achievements: [
    {
      title: "1st Prize Winner — National Hackathon",
      detail: "Secured 1st Prize in a 24-hour national-level hackathon by conceptualizing, architecting, and developing an AI-based solution under intense time constraints.",
      badge: "National Level Winner",
      metric: "1st Prize",
      scope: "24-Hour Hackathon"
    },
    {
      title: "100+ Algorithmic Problems on LeetCode",
      detail: "Solved 100+ coding problems on LeetCode, consistently strengthening core algorithmic thinking, data structure optimization, and time-space complexity management.",
      badge: "LeetCode: Gunal_15",
      metric: "100+",
      scope: "Data Structures & Algorithms",
      link: "https://leetcode.com/u/Gunal_15/"
    },
    {
      title: "5 Hackathons Demonstrating Innovation",
      detail: "Active participant in 5 competitive hackathons, collaborating in multidisciplinary teams to ship production-ready prototypes and innovative technical solutions.",
      badge: "5+ Hackathons",
      metric: "5",
      scope: "Competitions Participated"
    }
  ],

  certifications: [
    {
      name: "Full-Stack Development: The Complete Guide",
      issuer: "Udemy",
      focus: "End-to-end full stack architecture, frontend-backend integration, databases, and deployment."
    },
    {
      name: "Python for Data Science",
      issuer: "NPTEL, Ministry of Education, Government of India",
      focus: "Statistical modeling, Python algorithms, data analysis, and predictive workflows."
    },
    {
      name: "React Crash Course",
      issuer: "Udemy",
      focus: "React hooks, component lifecycle, state management, and modern UI practices."
    }
  ],

  engineeringPrinciples: [
    {
      title: "Clean API Contract Design",
      desc: "Structuring RESTful endpoints with explicit request-response schemas, JWT authentication, and predictable error handling across FastAPI and Spring Boot."
    },
    {
      title: "Pragmatic Machine Learning Integration",
      desc: "Connecting Python-based predictive algorithms and AI chatbots directly to production web backends to deliver tangible, automated user outcomes."
    },
    {
      title: "Reliable Relational Data Modeling",
      desc: "Architecting normalized schemas in PostgreSQL and MySQL with strict referential integrity, indexes, and transactional consistency."
    },
    {
      title: "Component-Driven Frontend Architecture",
      desc: "Writing modular, performant React.js components with clean state separation, accessible semantic markup, and predictable Axios API layers."
    }
  ]
};
