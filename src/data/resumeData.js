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
      "Software Developer specializing in distributed multi-agent systems, AWS serverless cloud architecture, and full-stack enterprise platforms. Proven track record architecting deterministic financial copilots, cloud-native ML anomaly detection, and secure microservices with Python, FastAPI, AWS, Spring Boot, and React.",
    positioning:
      "Full-stack software developer building dependable multi-agent AI systems, serverless cloud platforms, and robust enterprise architectures."
  },

  skills: {
    categories: [
      {
        id: "multi_agent_ai",
        name: "AI & Multi-Agent Systems",
        description: "Adaptive orchestrators, Model Context Protocol, and statistical machine learning",
        items: [
          { name: "Multi-Agent Orchestration", role: "Constructing dynamic NetworkX DAG wave schedulers with concurrent asyncio waves and SHA-256 input-hash caching." },
          { name: "Model Context Protocol (MCP)", role: "Implementing official MCP standard (Python SDK 2.x) with deterministic tools and forward-deployed connector mocks." },
          { name: "Z-Score Statistical ML", role: "Real-time anomaly detection algorithm (z > 2.5) trained on 5,760 baseline telemetry records for crowd flow control." },
          { name: "Forensic Loop Detection", role: "NetworkX directed graph cycle isolation to uncover circular trading rings with exact transaction citations." }
        ]
      },
      {
        id: "cloud_serverless",
        name: "Cloud & Serverless Infrastructure",
        description: "AWS serverless compute, event telemetry, partitioned data lakes, and SQL engines",
        items: [
          { name: "AWS Lambda", role: "Serverless compute functions in Python 3.12 for real-time telemetry processing, ML evaluation, and cold starts <500ms." },
          { name: "Amazon API Gateway", role: "Production REST API management with CORS, 5 specialized endpoints, and low-latency payload ingestion." },
          { name: "Amazon S3", role: "Encrypted data lake storage (SSE-S3 AES-256) partitioned by gate and timestamp for cost-optimized analytics." },
          { name: "Amazon Athena", role: "Serverless SQL analytics engine querying multi-gigabyte crowd data lakes with sub-second execution times." },
          { name: "AWS Glue & CloudWatch", role: "Automated ETL database catalogs, centralized logging, custom error alarms, and SNS email triggers." }
        ]
      },
      {
        id: "languages",
        name: "Programming Languages",
        description: "Core languages used for backend architectures, algorithms, and distributed systems",
        items: [
          { name: "Python", role: "Primary language for multi-agent DAGs, FastAPI microservices, AWS Lambda, Pytest suites, and machine learning." },
          { name: "Java", role: "Enterprise backend development with Spring Boot, object-oriented domain models, and role-based access control." },
          { name: "JavaScript / TypeScript", role: "Type-safe frontend development, real-time dashboards, SSE event consumption, and tooling." }
        ]
      },
      {
        id: "backend",
        name: "Backend Frameworks & APIs",
        description: "High-throughput asynchronous servers, enterprise services, and secure auth",
        items: [
          { name: "FastAPI", role: "High-performance Python web framework used for real-time SSE streams, MCP tool endpoints, and JWT security." },
          { name: "SpringBoot", role: "Enterprise Java framework powering order lifecycle, transactional integrity, and role-based endpoints." },
          { name: "NodeJS", role: "JavaScript runtime for building scalable server-side tools and application services." }
        ]
      },
      {
        id: "frontend",
        name: "Frontend Architecture",
        description: "Modern, responsive client architecture and component engineering",
        items: [
          { name: "React 19 / ReactJS", role: "Core UI library for single-page applications, SSE Agent Theatres, and officer cockpits." },
          { name: "HTML5 & CSS3", role: "Semantic web standards, modern pure dark-mode architecture, and responsive layout grids." }
        ]
      },
      {
        id: "databases",
        name: "Databases & Storage",
        description: "Relational data modeling, partitioned data lakes, and ACID compliance",
        items: [
          { name: "PostgreSQL", role: "Advanced relational database powering order lifecycle, inventory tracking, and supplier analytics." },
          { name: "MySQL", role: "Relational database used for campus management schemas, student records, and structured academic data." }
        ]
      },
      {
        id: "tools",
        name: "Testing & Workflow",
        description: "Automated verification, version control, API testing, and edge webhooks",
        items: [
          { name: "Pytest", role: "Comprehensive 54-test automated test suite covering zero-disbursal routes, DAG concurrency, and citation rules." },
          { name: "Github", role: "Source code management, CI/CD pipelines, version control, and open-source contribution." },
          { name: "Postman", role: "API contract testing, endpoint debugging, payload verification, and authentication header validation." },
          { name: "n8n", role: "Edge webhook triggers and workflow automation for intake events and alerts." }
        ]
      }
    ]
  },

  projects: [
    {
      id: "verifin",
      title: "VERIFIN",
      subtitle: "Adaptive Multi-Agent Financial Intelligence System",
      tagline: "Forward-deployed multi-agent copilot evaluating MSME credit risk with deterministic DAG orchestration, input-hash caching, and a mathematically verified zero-disbursal guarantee.",
      featured: true,
      technologies: ["Python", "FastAPI", "NetworkX", "Model Context Protocol (MCP)", "React 19", "TypeScript", "Pytest", "SSE", "n8n"],
      problem:
        "Evaluating Indian MSME credit applications is bottlenecked by manual multi-document triangulation, hidden circular trading fraud, unverified LLM hallucinations, and operational risks of accidental fund disbursal.",
      solution:
        "Engineered an adaptive multi-agent copilot that executes financial formulas deterministically in pure Python, schedules 11 specialized stage agents across concurrent waves in a NetworkX DAG, validates GST vs bank records through a Trust Gate, detects circular trading rings, and guarantees zero disbursal by design.",
      keyFeatures: [
        "Code Computes, Models Explain: Financial metrics (DSCR, turnover gap, loan sizing) are computed deterministically; models explain findings but never execute arithmetic",
        "Adaptive Parallel Agent Workflow: NetworkX DAG wave scheduler with asyncio.gather; SHA-256 input-hash caching recomputes only 7 affected stages while caching 4 at 0ms",
        "Zero Disbursal Guarantee: Fund release APIs are physically absent from codebase; verified by automated route scanning tests (test_zero_disbursal.py)",
        "Deterministic Trust Gate (A/B/C): Triangulates GST filings vs bank deposits, protecting honest cash merchants (Grade B) while flagging fraud (Grade C)",
        "Forensic Circular Flow Detection: NetworkX cycle detection isolates directed trading rings (e.g., Sharma → Verma → Gupta → Sharma) with exact transaction citations",
        "Model Context Protocol (MCP): Official Python SDK 2.x standard with 10 deterministic tools and 5 forward-deployed connectors (GST, Bureau, KYC, CBS, DocStore)",
        "One-Page CAM Memo with Citation Validator: Every statement is programmatically verified against source document pages or transaction IDs"
      ],
      myContribution:
        "Architected the full system end-to-end: built the NetworkX DAG wave orchestrator and SHA-256 caching engine, implemented deterministic financial underwriting algorithms, authored the 54-test automated pytest verification suite, and engineered the live SSE streaming Agent Theatre.",
      architecture: [
        { layer: "Client & Edge", desc: "React 19 + TypeScript Cockpit + Agent Theatre (Live SSE) + n8n Edge Webhook" },
        { layer: "Orchestrator Core", desc: "NetworkX Dynamic DAG Wave Scheduler + SHA-256 Input-Hash Cache" },
        { layer: "Pipeline Agents", desc: "11 Specialized Concurrent Agents (Intake, Trust Gate, DSCR, Policy, CAM)" },
        { layer: "MCP Standard Layer", desc: "10 Forward-Deployed Tools (GST, CIBIL Bureau, KYC, Core Banking, DocStore)" }
      ],
      flow: ["Intake & Bureau (Wave 0)", "Trust Gate Triangulation (Wave 1)", "DSCR & Fraud Loops (Wave 2)", "Structuring & Policy (Waves 3-5)", "CAM & Citation Validator (Wave 6)", "Human Officer Sign-Off (Wave 8)"],
      github: "https://github.com/Gunal1509",
      status: "Production Ready · 54 Pytests Passed"
    },
    {
      id: "crowd-flow",
      title: "CAMPUS CROWD FLOW & SAFETY",
      subtitle: "Cloud-Native Serverless Anomaly Prediction Platform (AWS)",
      tagline: "Fully serverless cloud platform deployed on AWS monitoring real-time campus crowd density across 8 gates, detecting overcrowding anomalies via statistical ML.",
      featured: true,
      technologies: ["AWS Lambda", "Amazon API Gateway", "Amazon S3", "Amazon Athena", "AWS Glue", "CloudWatch", "Python 3.12", "React", "Z-Score ML"],
      problem:
        "High-attendance campus events face severe overcrowding risks, potential stampedes, delayed bottleneck detection, and lack of real-time crowd redirection insight for venue safety teams.",
      solution:
        "Architected an enterprise AWS serverless infrastructure with real-time gate occupancy telemetry, statistical Z-score ML anomaly detection, an Amazon Athena SQL data lake analytics engine, and an AI-driven safety assistant for real-time crowd diversion.",
      keyFeatures: [
        "Real-Time Gate Occupancy Telemetry: Monitored live density classification (Normal, Peak, Critical) across 8 entry points (Gates A through H)",
        "Statistical Z-Score ML Anomaly Detection: Trained on 5,760 baseline records across 30 days; automatically flags critical surges when z > 2.5",
        "High-Throughput REST API: 5 specialized endpoints deployed on Amazon API Gateway with CORS and low-latency payload ingestion",
        "Amazon Athena SQL Analytics: Serverless querying across partitioned S3 data lake with sub-second execution at <$0.01/month storage cost",
        "Keyword-Driven AI Safety Assistant: Delivers dynamic crowd redirection advice and safe gate recommendations in real-time",
        "Enterprise Security & Encryption: IAM least-privilege LabRole enforcement, SSE-S3 AES-256 encryption at rest, and TLS in transit",
        "Centralized Observability: CloudWatch monitoring dashboards, error alarms, and automated Amazon SNS email notifications"
      ],
      myContribution:
        "Lead Developer: Designed and deployed the entire AWS cloud architecture, engineered 5 Python 3.12 Lambda functions for telemetry ingestion and ML scoring, configured API Gateway endpoints, managed IAM policies, configured AWS Glue ETL crawlers, and built the React operator dashboard.",
      architecture: [
        { layer: "Edge & UI", desc: "React Dashboard with Live Density Classification & AI Safety Assistant" },
        { layer: "API Management", desc: "Amazon API Gateway (5 Endpoints, CORS Enabled, Prod Stage)" },
        { layer: "Serverless Compute", desc: "5 AWS Lambda Functions (Python 3.12) executing Z-Score ML Anomaly Detection" },
        { layer: "Data Lake & SQL", desc: "Amazon S3 (SSE-S3 AES-256) + AWS Glue Catalog + Amazon Athena SQL Engine" }
      ],
      flow: ["Gate Telemetry Ingestion", "Amazon API Gateway", "AWS Lambda (Python 3.12)", "Z-Score ML (z > 2.5)", "S3 Data Lake & Athena SQL", "Live Operator Dashboard & SNS"],
      github: "https://github.com/Gunal1509/CAMPUS-EVENT-CROWD-FLOW-SAFETY-PREDICTION-SYSTEM",
      status: "Production Ready · AWS Serverless"
    },
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
      highlights: "Coursework in Data Structures, Algorithms, Software Engineering, Object-Oriented Programming (Java), and Distributed Systems."
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
      title: "Deterministic Invariants & Zero-Disbursal Safety",
      desc: "Code computes financial metrics, while models explain findings. Critical ledger releases and automated disbursals are physically excluded to guarantee human control."
    },
    {
      title: "Adaptive Parallel DAG Scheduling with Hash Caching",
      desc: "Architecting concurrent wave workflows in NetworkX with SHA-256 input-hash caching, recomputing only affected graph nodes while preserving cached results at 0ms compute."
    },
    {
      title: "Cloud-Native Serverless & Statistical Anomaly Detection",
      desc: "Deploying high-throughput event telemetry on AWS Lambda and API Gateway, coupled with statistical Z-score algorithms and sub-second Athena SQL data lake queries."
    },
    {
      title: "Strict Evidence Citation & Audit Verification",
      desc: "Enforcing programmatic sentence-level validation against verifiable database records, transaction hashes, or document pages before synthesis."
    }
  ]
};
