import { THEME } from "./theme";

export const DATA = {
  // ── Personal ──────────────────────────────────────────────
  name: "Pham Quoc Khanh",
  title: "Backend Engineer",
  location: "Ha Noi, Viet Nam",
  email: "khanhpq578@gmail.com",
  phone: "0969 878 183",
  bio: "Backend Engineer with 4+ years of experience designing, building, and operating production systems. Specialized in Node.js (NestJS), event-driven architecture, and high-concurrency systems serving tens of thousands of users.",

  // ── Hero badges ───────────────────────────────────────────
  badges: [
    "⬡ NestJS",
    "🐳 Docker",
    "☸ Kubernetes",
    "📨 Kafka",
    "🔴 Redis",
    "🔍 Elasticsearch",
    "☁ AWS / GCP",
  ],

  // ── About stats — animated count-up on scroll ─────────────
  stats: [
    { target: 4, suffix: "+", label: "Years Experience" },
    { target: 20, suffix: "+", label: "Projects Shipped" },
    { target: 100, suffix: "k", label: "Users Served" },
    { target: 999, suffix: "+", label: "Coffees Consumed" },
  ],

  // ── Work experience ───────────────────────────────────────
  journey: [
    {
      period: "Jul 2022 – Present",
      role: "Backend Engineer",
      company: "Lisod",
      location: "Ha Noi, Viet Nam",
      type: "Full-time",
      summary:
        "Design, build, and operate backend systems for products serving ~100k users. Own the full stack from architecture and infrastructure to CI/CD pipelines and production monitoring.",
      highlights: [
        {
          label: "System Design",
          text: "Designed scalable NestJS backends with event-driven architecture using Kafka & RabbitMQ. Structured services for horizontal scaling and fault tolerance.",
        },
        {
          label: "Search",
          text: "Built Elasticsearch-powered search systems with full-text search, fuzzy matching, and multi-filter querying across large datasets.",
        },
        {
          label: "Real-time",
          text: "Implemented WebSocket APIs for real-time features: live chat, push notifications, and activity feeds at scale.",
        },
        {
          label: "Performance",
          text: "Eliminated N+1 queries, optimized async processing flows, and implemented multi-layer Redis caching strategies to reduce latency.",
        },
        {
          label: "Infrastructure",
          text: "Deployed and managed services on Kubernetes (AWS EKS). Configured Nginx reverse proxy, Cloudflare CDN, and load balancing.",
        },
        {
          label: "CI/CD",
          text: "Built GitLab CI/CD pipelines with automated testing, Docker image builds, and zero-downtime deployments to staging and production.",
        },
        {
          label: "Monitoring",
          text: "Set up full observability stack: ELK (Elasticsearch + Logstash + Kibana), APM, uptime alerting, and automated incident notifications via n8n + Slack.",
        },
        {
          label: "Database",
          text: "Managed schemas and queries with Prisma ORM across MySQL, PostgreSQL, and MongoDB. Focused on indexing strategy and query optimization.",
        },
      ],
      tech: [
        "NestJS",
        "Kafka",
        "RabbitMQ",
        "Redis",
        "Elasticsearch",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "AWS EKS",
        "Docker",
        "Kubernetes",
        "GitLab CI/CD",
        "ELK Stack",
        "Prisma",
      ],
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      name: "Matching App",
      sub: "Social Media Platform for Dating",
      role: "Backend & Infrastructure Engineer",
      color: THEME.cyan,
      emoji: "💘",
      tech: [
        "NestJS",
        "Prisma",
        "React Native",
        "Kafka",
        "Redis",
        "Elasticsearch",
        "MySQL",
        "Linode",
      ],
      points: [
        "Designed high-concurrency backend serving tens of thousands of concurrent users",
        "Built event-driven real-time chat & notification system with Kafka",
        "Implemented advanced search & recommendation with Elasticsearch",
        "Set up load-balanced production infrastructure on Linode",
        "Integrated Redis caching for feed ranking and session management",
      ],
    },
    {
      name: "Job Crawler",
      sub: "Distributed Job Data Crawling Platform",
      role: "Backend & System Engineer",
      color: THEME.yellow,
      emoji: "🕷️",
      tech: [
        "NestJS",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "RabbitMQ",
        "Redis",
        "Elasticsearch",
        "GCP",
      ],
      points: [
        "Built distributed crawler with parallel processing across multiple worker nodes",
        "Designed async data pipelines via RabbitMQ for reliable job ingestion",
        "Indexed millions of job records into Elasticsearch for full-text search",
        "Monitored system health and set up alerting for crawler failures",
        "Used Python scripts for data extraction and transformation layer",
      ],
    },
    {
      name: "Nester",
      sub: "Social Networking Platform (X-like)",
      role: "Backend & Infrastructure Engineer",
      color: THEME.pink,
      emoji: "🐦",
      tech: [
        "Matrix Synapse",
        "NextJS",
        "NestJS",
        "Redis",
        "Elasticsearch",
        "AWS EKS",
      ],
      points: [
        "Customized Matrix Synapse as the core messaging infrastructure",
        "Deployed microservices on Kubernetes (AWS EKS) with autoscaling policies",
        "Built post feed, follow graph, and trending topics with Redis & Elasticsearch",
        "Configured production monitoring, alerting, and log aggregation",
      ],
    },
    {
      name: "SaaS Platform",
      sub: "Web Launching & Automation Platform",
      role: "Backend & Infrastructure Engineer",
      color: THEME.white,
      emoji: "🚀",
      tech: ["NestJS", "Prisma", "Redis", "Ansible", "Bull Queue", "SSE"],
      points: [
        "Automated environment provisioning with Ansible & Ansible Galaxy",
        "Built site-launch API using Server-Sent Events (SSE) for live streaming progress",
        "Implemented background job processing with Redis Bull Queue",
        "Designed multi-tenant SaaS architecture with isolated environments",
      ],
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  skillCards: [
    {
      title: "⬡ Backend",
      bg: THEME.black,
      dark: true,
      tags: [
        "Node.js",
        "NestJS",
        "RESTful API",
        "WebSocket",
        "GraphQL",
        "High-concurrency",
        "Async processing",
        "Microservices",
      ],
    },
    {
      title: "📨 Event-Driven",
      bg: THEME.white,
      tags: [
        "Kafka",
        "RabbitMQ",
        "Bull Queue",
        "Pub/Sub",
        "Server-Sent Events",
        "Event-driven arch",
      ],
    },
    {
      title: "🗄 Data & Databases",
      bg: THEME.white,
      tags: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "Prisma ORM",
        "Query optimization",
        "Indexing",
        "BigQuery",
      ],
    },
    {
      title: "☁ Cloud & DevOps",
      bg: THEME.black,
      dark: true,
      tags: [
        "AWS (EKS, EC2, S3, RDS)",
        "GCP",
        "Linode",
        "Docker",
        "Kubernetes",
        "Nginx",
        "Cloudflare",
        "Linux",
      ],
    },
    {
      title: "🔁 CI/CD & Infra",
      bg: THEME.yellow,
      tags: [
        "GitLab CI/CD",
        "GitHub Actions",
        "Ansible",
        "Ansible Galaxy",
        "Infrastructure as Code",
        "Auto-deploy",
      ],
    },
    {
      title: "📊 Monitoring & Ops",
      bg: THEME.cyan,
      tags: [
        "ELK Stack",
        "APM",
        "Kibana",
        "Logstash",
        "Uptime monitoring",
        "Alerting",
        "n8n",
        "Slack integration",
      ],
    },
    {
      title: "🖥 Frontend",
      bg: THEME.white,
      tags: ["ReactJS", "NextJS", "React Native", "Vite", "Laravel (legacy)"],
    },
    {
      title: "⚡ Performance",
      bg: THEME.pink,
      dark: true,
      tags: [
        "N+1 elimination",
        "Redis caching",
        "Batch processing",
        "Background jobs",
        "Horizontal scaling",
        "Load balancing",
      ],
    },
  ],

  // ── Education ─────────────────────────────────────────────
  education: {
    degree: "Engineer of Information Technology",
    school: "Hanoi University of Civil Engineering",
    year: "2017 – 2022",
    location: "Ha Noi, Viet Nam",
  },

  // ── Languages ─────────────────────────────────────────────
  languages: [
    { name: "Vietnamese", dots: 3 },
    { name: "English", dots: 1 },
  ],

  // ── Social ────────────────────────────────────────────────
  social: [
    {
      label: "LinkedIn",
      icon: "💼",
      bg: THEME.cyan,
      url: "https://www.linkedin.com/in/kh%C3%A1nh-ph%E1%BA%A1m-qu%E1%BB%91c-199873303",
    },
    {
      label: "GitHub",
      icon: "🐙",
      bg: THEME.yellow,
      url: "https://github.com/khanhpq578",
    },
    {
      label: "Email",
      icon: "✉️",
      bg: THEME.pink,
      url: "mailto:khanhpq578@gmail.com",
      white: true,
    },
  ],
};
