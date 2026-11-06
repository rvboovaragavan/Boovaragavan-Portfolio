import { WebDevLearningArea, WebDevStep } from '../types';

export const aiWebDevIntro = {
  title: "AI-Assisted Web Development & Prompt Engineering",
  subtitle: "Exploring the future of website development through AI-powered workflows.",
  description: "I have recently started learning AI-assisted website development. I explore how AI tools can support the complete website development process, from understanding client requirements and planning to UI design, coding and deployment.",
  learningNotice: "Recently Acquired Skill Track: Actively exploring, testing, and mastering modern AI-assisted engineering methodologies.",
  workflowTagline: "How modern AI tools streamline the end-to-end web product development lifecycle:"
};

export const aiWorkflowSteps: WebDevStep[] = [
  {
    step: 1,
    title: "Client Requirements",
    description: "Structuring raw client briefs, identifying feature constraints, audience persona, and functional deliverables.",
    tools: ["Prompt Engineering", "Requirement Elicitation", "Specifications"]
  },
  {
    step: 2,
    title: "Project Planning",
    description: "Generating component architecture diagrams, user journey maps, file schemas, and task roadmaps.",
    tools: ["System Architecture", "Wireframing", "Task Breakdown"]
  },
  {
    step: 3,
    title: "Prompt Engineering",
    description: "Crafting precise, context-rich multi-shot prompts to guide AI models towards production-grade TypeScript & CSS.",
    tools: ["Structured Context", "Role Prompting", "Constraint Definition"]
  },
  {
    step: 4,
    title: "AI-Assisted UI Design",
    description: "Rapidly iterating color palettes, responsive design systems, accessible components, and modern typography.",
    tools: ["Figma", "Tailwind CSS", "Design Tokens"]
  },
  {
    step: 5,
    title: "Development & Coding",
    description: "Writing clean, modular React and TypeScript components, integrating APIs, and managing state gracefully.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Vite"]
  },
  {
    step: 6,
    title: "Testing & Validation",
    description: "Rigorous cross-browser responsiveness checks, accessibility audits, form validation, and error-state testing.",
    tools: ["Lighthouse", "Responsive DevTools", "TypeScript Linting"]
  },
  {
    step: 7,
    title: "Deployment & Delivery",
    description: "Configuring CI/CD pipelines, custom domains, HTTPS certificates, and zero-downtime static hosting.",
    tools: ["Vercel", "Netlify", "GitHub Pages", "DNS Setup"]
  }
];

export const learningAreas: WebDevLearningArea[] = [
  {
    title: "Client Requirement Gathering",
    description: "Transforming unstructured business goals into precise, actionable technical specifications.",
    icon: "Target"
  },
  {
    title: "Project Architecture & Planning",
    description: "Designing scalable modular code structures, state flows, and responsive layouts before coding.",
    icon: "Layout"
  },
  {
    title: "Prompt Engineering & Context Design",
    description: "Leveraging structured prompts and system personas to generate reliable, high-fidelity code.",
    icon: "Sparkles"
  },
  {
    title: "AI-Assisted Website Design",
    description: "Generating modern UI mockups, harmonious palettes, and accessible layout hierarchies.",
    icon: "Palette"
  },
  {
    title: "Landing Page Development",
    description: "Building fast, high-converting hero sections, feature grids, and engaging product showcases.",
    icon: "Layers"
  },
  {
    title: "Website Enquiry & Query Sections",
    description: "Engineering contact forms with client-side validation, clean error states, and mailto fallbacks.",
    icon: "MessageSquare"
  },
  {
    title: "Frontend Development Workflows",
    description: "Modern component architectures with Vite, Tailwind CSS, TypeScript, and version control.",
    icon: "Code"
  },
  {
    title: "AI-Assisted Coding & Refactoring",
    description: "Accelerating repetitive boilerplate while manually auditing logic, types, and edge cases.",
    icon: "Cpu"
  },
  {
    title: "Website Deployment & Publishing",
    description: "Publishing production web apps with custom DNS, SSL certificates, and optimized build assets.",
    icon: "Globe"
  }
];

// Configurable slots for future web projects and live deployment links
export const upcomingWebProjects = [
  {
    id: "portfolio-v1",
    title: "Personal Engineering Portfolio",
    description: "This portfolio website built with React, Vite, TypeScript, and Tailwind CSS using modern AI-assisted engineering workflows.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    status: "Live & Deployed",
    liveUrl: "#", // will be updated
    githubUrl: "https://github.com/rvboovaragavan"
  },
  {
    id: "client-landing-page",
    title: "Upcoming Client Showcase / SaaS Landing Page",
    description: "A high-performance modern landing page template with responsive hero, feature tiers, and validated query workflow.",
    tech: ["React", "Tailwind CSS", "Lucide Icons"],
    status: "In Development",
    liveUrl: null, // configurable when deployed
    githubUrl: null
  }
];
