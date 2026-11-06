import { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  {
    id: "google-uiux",
    title: "Google UI/UX Design Specialization",
    issuer: "Google",
    date: "Certified",
    logoUrl: "/logos/google.svg",
    credentialUrl: null, // Configurable: paste verification URL here when ready
    image: null, // Configurable: add path to certificate screenshot e.g. "/certificates/google-uiux.png"
    skillsLearned: ["User Empathy", "Wireframing", "Prototyping", "Figma", "Usability Testing"]
  },
  {
    id: "google-genai",
    title: "Google Generative AI Fundamentals",
    issuer: "Google Cloud",
    date: "Certified",
    logoUrl: "/logos/google.svg",
    credentialUrl: null, // Configurable
    image: null,
    skillsLearned: ["Large Language Models", "Prompt Design", "Responsible AI", "Model Tuning Principles"]
  },
  {
    id: "microsoft-azure",
    title: "Microsoft Learn: AI & Cloud Development",
    issuer: "Microsoft",
    date: "Certified",
    logoUrl: "/logos/microsoft.svg",
    credentialUrl: null, // Configurable
    image: null,
    skillsLearned: ["Azure AI Services", "GitHub Copilot", "Cloud Computing Foundations", "AI Pair Programming"]
  },
  {
    id: "hackerrank-java",
    title: "Java (Basic) Skill Certificate",
    issuer: "HackerRank",
    date: "Certified",
    logoUrl: "/logos/hackerrank.png",
    credentialUrl: null, // Configurable
    image: null,
    skillsLearned: ["Object-Oriented Programming", "Java Collections", "Exception Handling", "Data Types"]
  },
  {
    id: "nptel-iot",
    title: "Introduction to Internet of Things",
    issuer: "NPTEL (IIT Kharagpur / SWAYAM)",
    date: "Certified",
    logoUrl: "/logos/swayam.png",
    credentialUrl: null, // Configurable
    image: null,
    skillsLearned: ["IoT Architecture", "Sensors & Actuators", "Wireless Protocols", "Cloud Telemetry", "Raspberry Pi & Arduino"]
  },
  {
    id: "nptel-sensors",
    title: "Sensor Technologies: Physics, Fabrication and Circuits",
    issuer: "NPTEL (IIT / SWAYAM)",
    date: "Certified",
    logoUrl: "/logos/swayam.png",
    credentialUrl: null, // Configurable
    image: null,
    skillsLearned: ["Sensor Physics", "Signal Conditioning", "Fabrication Methods", "Transducer Circuitry"]
  }
];
