import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Java", level: "OOP, Data Structures & Core Logic", highlight: true },
      { name: "Python", level: "Automation, Scripting & OpenCV", highlight: true },
      { name: "SQL", level: "Querying, Schema & Relational Models" }
    ]
  },
  {
    id: "database",
    title: "Database Management",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: "Relational Tables, Indexing & CRUD Operations", highlight: true }
    ]
  },
  {
    id: "embedded",
    title: "Embedded Systems & IoT",
    iconName: "Cpu",
    skills: [
      { name: "Raspberry Pi", level: "Linux OS, GPIO, Computer Vision Prototyping", highlight: true },
      { name: "ESP32", level: "Wi-Fi / BLE, Sensor Integration & PWM Actuation", highlight: true },
      { name: "Arduino", level: "Microcontroller C/C++, Serial I/O, Sensors" },
      { name: "NodeMCU", level: "IoT Wireless Telemetry & Web Dashboarding" }
    ]
  },
  {
    id: "laser-tech",
    title: "Industrial Laser Technology",
    iconName: "Zap",
    skills: [
      { name: "Laser Source Servicing", level: "IPG & Maxphotonics Diagnostics", highlight: true },
      { name: "Optical Fiber Splicing", level: "Precision Core Alignment & Fusion", highlight: true },
      { name: "Fiber Cleaving", level: "High-precision Optical Cleavers", highlight: true },
      { name: "Power Testing", level: "Laser Optical Power Measurement" },
      { name: "Fiber Cable Replacement", level: "High-power Fiber Routing & QBH Setup" },
      { name: "Laser Source Troubleshooting", level: "Alarm Inspection & Diode Module Testing" }
    ]
  },
  {
    id: "dev-tools",
    title: "Development Tools",
    iconName: "Terminal",
    skills: [
      { name: "Git", level: "Version Control, Branching & Collab" },
      { name: "VS Code", level: "Primary Code & Python/Web Environment" },
      { name: "TinkerCad", level: "Circuit Simulation & Rapid Prototyping" }
    ]
  },
  {
    id: "design-tools",
    title: "Design & Media Tools",
    iconName: "Palette",
    skills: [
      { name: "Figma", level: "UI/UX Layouts, Wireframing & Prototyping" },
      { name: "Canva", level: "Technical Posters, Brochures & Branding" }
    ]
  },
  {
    id: "ai-tools",
    title: "AI & Emerging Tools",
    iconName: "Bot",
    skills: [
      { name: "Claude", level: "Prompt Engineering & Architecture Design", highlight: true },
      { name: "AI-Assisted Dev Tools", level: "GitHub Copilot, Rapid Prototyping", highlight: true },
      { name: "Prompt Engineering", level: "Structured Context & Iterative Refinement" }
    ]
  },
  {
    id: "soft-skills",
    title: "Professional & Soft Skills",
    iconName: "Users",
    skills: [
      { name: "Critical Thinking", level: "Analytical Root Cause Analysis" },
      { name: "Leadership", level: "Student Ambassador & Organizing Lead" },
      { name: "Problem-Solving", level: "Hardware-Software Debugging" },
      { name: "Teamwork", level: "Multi-disciplinary Collaboration" },
      { name: "Communication", level: "Technical Documentation & Presenting" }
    ]
  }
];
