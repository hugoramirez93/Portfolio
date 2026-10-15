export const personalInfo = {
  name: 'Hugo Ramírez',
  shortName: 'Hugo',
  initials: 'HR',
  role: 'Technical Support Specialist',
  roleLevel: 'L1 / L2',
  roleFocus: 'Enterprise SaaS & CPQ',
  tagline:
    'I keep enterprise SaaS products running — diagnosing, reproducing and resolving production issues before they reach the customer again.',
  email: 'hugoo.ramirez493@gmail.com',
  phone: '+57 322 596 3903',
  location: 'Cali, Colombia',
  timezone: 'GMT-5 (aligns with US Eastern & Central)',
  workMode: 'Remote · Open to relocation & US / EU hours',
  availability: 'Open to new opportunities',
  summary:
    'Technical Support Specialist with 4+ years of experience delivering L1/L2 support for enterprise SaaS platforms and custom product-configuration (CPQ) systems. Skilled in advanced troubleshooting, system log analysis, root-cause analysis (RCA) and incident management across cloud environments. I consistently sustain a 94% CSAT and a sub-10-minute first-response SLA while resolving 20+ cases per day, and I have documented 30+ incident investigations and RCAs, partnering with Engineering to ship permanent fixes for 15+ enterprise accounts across the US, Canada and LATAM.',
  summaryTail:
    'Bilingual (English C1 / Spanish native) and currently completing a Bachelor\u2019s degree in Systems Engineering.',
  languages: [
    { name: 'Spanish', level: 'Native', value: 100 },
    { name: 'English', level: 'C1 — Professional', value: 88 },
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/hugo-ramirezr',
    github: 'https://github.com/hugoramirez93',
    portfolio: 'https://portfolio-nine-phi.vercel.app',
  },
  resumeUrl: '/resume.pdf',
  cvUrl: '/cv.html',
}

/** Headline numbers recruiters and hiring managers scan for first. */
export const stats = [
  { value: 4, suffix: '+', label: 'Years in technical support', sub: 'SaaS & CPQ platforms' },
  { value: 94, suffix: '%', label: 'CSAT sustained', sub: 'Across enterprise accounts' },
  { value: 10, prefix: '<', label: 'Minute first-response SLA', sub: 'Consistently met' },
  { value: 20, suffix: '+', label: 'Cases resolved daily', sub: 'L1 & L2 volume' },
  { value: 30, suffix: '+', label: 'Incidents & RCAs documented', sub: 'Root-cause driven' },
  { value: 15, suffix: '+', label: 'Enterprise accounts supported', sub: 'US · Canada · LATAM' },
]

/** Grouped core competencies, mirroring the CV. */
export const competencies = [
  {
    group: 'Support Engineering',
    icon: 'LifeBuoy',
    items: [
      'L1 / L2 Technical Support',
      'Incident Management',
      'Escalation Handling',
      'Root-Cause Analysis',
      'SLA & KPI Management',
      'Customer Success',
    ],
  },
  {
    group: 'Debugging & Observability',
    icon: 'SearchCode',
    items: [
      'Application & System Log Analysis',
      'Error Telemetry',
      'API / SSO (OIDC) Authentication Troubleshooting',
      'Production Issue Reproduction',
    ],
  },
  {
    group: 'Cloud & Systems',
    icon: 'Server',
    items: [
      'Cloud Environments',
      'Windows & Linux Servers',
      'Networking',
      'SSL / TLS Certificates',
      'Databases & SQL',
    ],
  },
  {
    group: 'Tools & Platforms',
    icon: 'Wrench',
    items: [
      'Salesforce',
      'Jira',
      'Genesys Cloud',
      'Citrix',
      'Slack',
      'Microsoft Teams',
      'Google Workspace',
    ],
  },
  {
    group: 'Development Background',
    icon: 'Code2',
    items: ['JavaScript', 'React', 'Node.js', 'REST APIs', 'HTML', 'CSS'],
  },
]

/** Tools shown in the scrolling strip — quick visual proof of stack familiarity. */
export const toolMarquee = [
  'Salesforce',
  'Jira',
  'Genesys Cloud',
  'Zendesk',
  'Citrix',
  'Postman',
  'SQL',
  'Keycloak',
  'OIDC / SSO',
  'Windows Server',
  'Linux',
  'Cloud Environments',
  'Log Analysis',
  'REST APIs',
  'Microsoft Teams',
  'Slack',
  'Google Workspace',
  'React',
  'Node.js',
]

export const experience = [
  {
    company: 'Revalize / Configure One',
    role: 'Technical Support Specialist (Tier 1 & Tier 2)',
    period: 'Feb 2025 – Present',
    meta: 'Remote',
    context: 'Enterprise CPQ SaaS platform for complex product configuration',
    current: true,
    highlights: [
      'Resolve 20+ daily L1/L2 cases on an enterprise CPQ SaaS platform, sustaining a 94% CSAT and a sub-10-minute first-response SLA.',
      'Investigate and document 30+ incidents and RCAs, tracing root causes through system logs, error telemetry and cloud-environment diagnostics.',
      'Support 15+ enterprise accounts (Avianca / Lifemiles, Altabix, Escapadas, Sicas Lite, Invetso and others) across the US, Canada and LATAM.',
      'Partner with Engineering and Product to ship permanent fixes and reduce repeat escalations on authentication, configuration and integration issues.',
      'Author customer-facing incident reports and knowledge-base articles, improving first-contact resolution and long-term platform stability.',
    ],
    tags: ['CPQ', 'Log Analysis', 'RCA', 'SQL', 'SSO / OIDC', 'Salesforce'],
  },
  {
    company: 'BluePixel',
    role: 'Technical Support & Project Coordination (Junior PM)',
    period: 'Mar 2024 – Nov 2024',
    meta: 'Remote',
    context: 'Technical Support / Client Solutions',
    current: false,
    highlights: [
      'Coordinated cross-functional teams to deliver client solutions in fast-paced technical environments.',
      'Managed project timelines, client communication and task prioritization for high-profile accounts including Lifemiles–Avianca and Altabix.',
      'Supported technical teams with issue tracking, follow-up and resolution workflows, bridging clients and development teams.',
      'Kept clients and development teams aligned with clear, timely communication on open issues.',
    ],
    tags: ['Issue Tracking', 'Client Communication', 'Coordination'],
  },
  {
    company: 'Teleperformance LATAM',
    role: 'Bilingual Customer & Technical Support Specialist',
    period: 'Mar 2021 – Nov 2023',
    meta: 'Remote · US & Canada markets',
    context: 'Uber Eats & VRBO',
    current: false,
    highlights: [
      'Handled high-volume technical and customer support across chat, phone and email, resolving 20+ daily cases.',
      'Troubleshot account access, billing discrepancies, payment-gateway issues, refunds, failed transactions and account restrictions.',
      'Managed password resets and security-related cases while maintaining strong customer satisfaction.',
      'Maintained performance KPIs in fast-paced, high-demand support environments.',
    ],
    tags: ['Billing', 'Account Access', 'Security', 'KPIs'],
  },
]

/**
 * Selected incident investigations (RCA). This is the section that proves
 * technical depth for a support engineering role — problem → action → result.
 */
export const incidentCases = [
  {
    id: 'tls-signin-outage',
    code: 'INC-001',
    severity: 'Critical',
    category: 'Infrastructure · TLS',
    title: 'Production sign-in outage',
    subtitle: 'Expired server certificate',
    problem:
      'A production login outage traced to an expired TLS certificate on the application server — while the public site still presented a valid, separately renewed certificate.',
    action:
      'Isolated the mismatch to the application-server certificate and guided the customer through installing the correct certificate and private key.',
    result: 'Restored access in ~31 hours.',
    impact: 'Proposed safeguards to prevent recurrence.',
    tags: ['SSL / TLS', 'Log Analysis', 'Root Cause', 'Customer Guidance'],
    icon: 'ShieldOff',
  },
  {
    id: 'dynamics-quote-failure',
    code: 'INC-002',
    severity: 'High',
    category: 'Integration · Data',
    title: 'Quote-creation failure',
    subtitle: 'Dynamics CRM integration',
    problem:
      'A two-phase failure in which a recent environment change and legacy account data each independently blocked quote creation.',
    action:
      'Isolated a missing account reference value, restored the affected records and supported defensive integration changes to handle incomplete data gracefully.',
    result: 'Quote creation restored across affected accounts.',
    impact: 'Integration hardened against incomplete data.',
    tags: ['Dynamics CRM', 'Data Integrity', 'SQL', 'Integration'],
    icon: 'Link2',
  },
  {
    id: 'keycloak-sso-upgrade',
    code: 'INC-003',
    severity: 'High',
    category: 'Identity · SSO',
    title: 'SSO authentication upgrade',
    subtitle: 'Keycloak 26 migration',
    problem:
      'First-login and account-linking failures surfaced for users immediately after a Keycloak 26 upgrade.',
    action:
      'Corrected OIDC scopes and Identity-Provider mappers, then documented the fix so it could be rolled out safely to production.',
    result: 'Authentication restored for affected users.',
    impact: 'Fix documented for safe, repeatable rollout.',
    tags: ['Keycloak', 'OIDC', 'SSO', 'Documentation'],
    icon: 'KeyRound',
  },
]

/**
 * Education & certifications, ordered newest → oldest so the timeline reads
 * top-down. `verify` holds the public Coursera credential link when available.
 */
export const education = [
  {
    degree: "Bachelor's Degree in Systems Engineering",
    institution: 'Fundación Universitaria San Mateo',
    year: 'Expected Dec 2027',
    status: 'in-progress',
    type: 'Degree',
  },
  {
    degree: 'Full Stack Development Bootcamp',
    institution: 'Talento Tech',
    year: 'Feb 2025 – Aug 2025',
    status: 'completed',
    type: 'Bootcamp',
  },
  {
    degree: 'Technical Diploma in Software Development',
    institution: 'PONAO',
    year: 'Completed',
    status: 'completed',
    type: 'Diploma',
  },
  {
    degree: 'JavaScript Basics',
    institution: 'University of California, Davis · Coursera',
    year: 'Sep 2023',
    status: 'completed',
    type: 'Certification',
    verify: 'https://coursera.org/verify/8EEUACPPH6WC',
  },
  {
    degree: 'Version Control',
    institution: 'Meta · Coursera',
    year: 'Feb 2023',
    status: 'completed',
    type: 'Certification',
    verify: 'https://coursera.org/verify/T8WE3VM4U2ZV',
  },
  {
    degree: 'HTML and CSS in depth',
    institution: 'Meta · Coursera',
    year: 'Feb 2023',
    status: 'completed',
    type: 'Certification',
    verify: 'https://coursera.org/verify/CMMCYZZTJ929',
  },
  {
    degree: 'Programming with JavaScript',
    institution: 'Meta · Coursera',
    year: 'Jan 2023',
    status: 'completed',
    type: 'Certification',
    verify: 'https://coursera.org/verify/3BD7PWL647ZW',
  },
  {
    degree: 'Introduction to Front-End Development',
    institution: 'Meta · Coursera',
    year: 'Dec 2022',
    status: 'completed',
    type: 'Certification',
    verify: 'https://coursera.org/verify/KM9LX7U2RXZT',
  },
  {
    degree: 'Meta Front-End Developer Professional Certificate',
    institution: 'Coursera',
    year: 'Completed',
    status: 'completed',
    type: 'Professional Certificate',
  },
  {
    degree: 'Front-End Development',
    institution: 'Udemy',
    year: 'Completed',
    status: 'completed',
    type: 'Certification',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Landingpage Arte',
    summary: 'Art-gallery e-commerce with cart, Stripe checkout and admin panel.',
    description:
      'An art gallery e-commerce platform with shopping cart, Stripe payments and an admin panel. Full-stack, built with Node.js, Express and SQLite.',
    tags: ['JavaScript', 'Node.js', 'Express', 'SQLite', 'Stripe'],
    image: '/projects/landingpage-arte.webp',
    github: 'https://github.com/hugoramirez93/Landingpage-arte',
    link: 'https://landingpage-arte.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Artiefy Backend',
    summary: 'REST API with authentication and Prisma-managed database.',
    description:
      'A REST API for an online store built with Next.js, TypeScript and Prisma, featuring authentication and a SQLite database.',
    tags: ['TypeScript', 'Next.js', 'Prisma', 'SQLite'],
    image: '/projects/artiefy-backend.webp',
    github: 'https://github.com/hugoramirez93/Artiefy-Backedn',
    link: 'https://artiefy-backedn.vercel.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Gallery Store',
    summary: 'Full-stack storefront with JWT auth and Stripe payments.',
    description:
      'An art gallery e-commerce platform with JWT authentication, Stripe payments and an admin panel. Full-stack with Node.js and Express.',
    tags: ['JavaScript', 'Node.js', 'Express', 'Stripe', 'JWT'],
    image: '/projects/gallery-store.webp',
    github: 'https://github.com/hugoramirez93/Gallery-store',
    link: null,
    featured: true,
  },
  {
    id: 4,
    title: 'Netflix Clone',
    summary: 'Responsive streaming UI replica built with React and Vite.',
    description:
      'A Netflix interface replica built with React and Vite, featuring a responsive movie catalog layout.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    image: '/projects/netflix-clone.webp',
    github: 'https://github.com/hugoramirez93/Netflix-Clone',
    link: null,
    featured: false,
  },
  {
    id: 5,
    title: 'Weather App',
    summary: 'Live weather data consumed from a public REST API.',
    description:
      'A web application that fetches real-time weather data, displaying temperature, humidity and current conditions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    image: '/projects/weather-app.webp',
    github: 'https://github.com/hugoramirez93/Weather-App',
    link: null,
    featured: false,
  },
  {
    id: 6,
    title: 'Pokédex',
    summary: 'Interactive Pokédex with search and type filters via PokeAPI.',
    description:
      'An interactive Pokédex showcasing the first 151 Pokémon using the PokeAPI, with type filters and search functionality.',
    tags: ['JavaScript', 'CSS', 'HTML', 'REST API'],
    image: '/projects/pokedex.webp',
    github: 'https://github.com/hugoramirez93/Pok-dex',
    link: null,
    featured: false,
  },
  {
    id: 7,
    title: 'Angular Steam',
    summary: 'Steam interface replica demonstrating Angular and TypeScript.',
    description:
      'A Steam interface replica built with Angular and TypeScript, demonstrating proficiency in the Angular framework.',
    tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    image: '/projects/angular-steam.webp',
    github: 'https://github.com/hugoramirez93/Angular-Steam',
    link: null,
    featured: false,
  },
  {
    id: 8,
    title: 'React Expense Tracker',
    summary: 'State-driven budgeting app with reusable components.',
    description:
      'An expense tracking application built with React and Vite, featuring state management and reusable components.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    image: '/projects/react-expense-tracker.webp',
    github: 'https://github.com/hugoramirez93/React-expense-tracker',
    link: null,
    featured: false,
  },
]
