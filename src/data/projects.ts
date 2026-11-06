import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "anpr-raspberry-pi",
    title: "Automated Number Plate Recognition using Raspberry Pi",
    date: "September 2024",
    category: "Computer Vision",
    description: "Designed a system to automatically detect college bus arrival and departure using number plate recognition.",
    fullDescription: "A smart edge computing vision system developed using Raspberry Pi and OpenCV to automate institutional vehicle authentication. The system detects incoming college buses at entry and exit gates, reads license plate alphanumeric characters in real time, and logs transit timestamps directly to structured Excel sheets, drastically eliminating manual log errors and gate bottlenecks.",
    technologies: ["Python", "OpenCV", "Excel Automation", "Raspberry Pi", "Camera Module", "Edge Computing"],
    keyFeatures: [
      "Captures live images using an optical camera module connected to Raspberry Pi.",
      "Identifies bus license plate numbers using computer vision filtering and OCR recognition.",
      "Records precise vehicle entry and exit timestamps.",
      "Automatically stores organized bus transit logs in an Excel sheet.",
      "Reduces manual bookkeeping and gate congestion for campus security staff and administration."
    ],
    architecture: [
      "Camera Sensor Trigger → Frame Capture on Raspberry Pi",
      "Preprocessing (Grayscale, Bilateral Filter, Canny Edge Detection)",
      "Contour Extraction & License Plate Region-of-Interest Localization",
      "Character Segmentation & Optical Character Recognition (OCR)",
      "Automated Logging to Local & Network Excel/CSV Spreadsheet"
    ],
    hardwareSpecs: [
      "Raspberry Pi 4 Model B / Pi Camera Module",
      "Local MicroSD Storage & USB Peripherals",
      "Passive Infrared / Magnetic Gate Trigger Simulation",
      "Serial / Network Communication Interface"
    ],
    image: "/images/Automated Number Plate Recognition Demo.png",
    screenshots: [
      "/images/Automated Number Plate Recognition Demo.png",
      "/projects/anpr/scan_preview.jpg",
      "/projects/anpr/sample_valid.jpg"
    ],
    githubUrl: null, // Configurable: replace null with repo link when ready
    demoUrl: null,
    status: "Completed"
  },
  {
    id: "smart-vehicle-plate-auth",
    title: "Smart Vehicle Plate Authentication and Owner Alert System",
    date: "May 2026",
    category: "Computer Vision",
    description: "AI-powered web application that detects vehicle license plates from images or live webcam feeds, verifies them against registered databases, and triggers instant OTP security alerts to owners for flagged or stolen vehicles.",
    fullDescription: "An AI-powered web application that automatically detects and reads vehicle license plates from static images or a live webcam feed, then instantly verifies them against a registered vehicle database. If a stolen, flagged, or unregistered plate is detected, the system triggers an OTP-based security alert directly to the vehicle owner's mobile phone, protecting campus and facility gates against unauthorized entry.",
    technologies: ["Python", "OpenCV", "Tesseract OCR", "Streamlit / Web UI", "Twilio / SMS Gateway", "SQLite / SQL", "REST APIs"],
    keyFeatures: [
      "Dual input processing: real-time live webcam video stream or high-resolution image uploads.",
      "Automated license plate localization using computer vision edge detection and contour extraction.",
      "High-precision optical character recognition (OCR) for alphanumeric vehicle registration numbers.",
      "Instant database verification against authorized, unregistered, and stolen/flagged vehicle registries.",
      "Automated OTP-based security alert protocol dispatching SMS verification triggers to the registered owner's mobile phone.",
      "Real-time visual threat classification for Valid, Electric, Unregistered, and Flagged/Stolen plates.",
      "Interactive web-based security monitoring dashboard with timestamped incident evidence logs."
    ],
    architecture: [
      "Live Webcam Feed / Image Ingestion Web Interface",
      "Computer Vision Pipeline (Grayscale, Bilateral Filter, Canny Edge Detection & Contour Filtering)",
      "License Plate Region-of-Interest (ROI) Localization & Character Segmentation",
      "Optical Character Recognition (OCR) Engine for Alphanumeric Text Extraction",
      "Vehicle Registry Lookup & Threat Status Evaluation Logic",
      "Automated Alert Dispatcher (Twilio / SMS Gateway Triggering OTP Verification to Owner Mobile)",
      "Security Audit Log & Web Dashboard Visualization"
    ],
    hardwareSpecs: [
      "High-Definition Optical Webcam / Surveillance Camera Sensor Interface",
      "Cloud / Local Python Web Application Server",
      "Twilio / Cloud SMS Gateway API Integration",
      "Relational Database (SQLite / MySQL) for Vehicle Registry"
    ],
    image: "/images/Smart Vehicle Plate Authentication System.png",
    screenshots: [
      "/images/Smart Vehicle Plate Authentication System.png",
      "/projects/vehicle-alert/dashboard_preview.svg",
      "/projects/vehicle-alert/sample_stolen.jpg",
      "/projects/vehicle-alert/sample_unregistered.jpg",
      "/projects/vehicle-alert/sample_valid.jpg"
    ],
    githubUrl: "https://github.com/rvboovaragavan/Smart-Number-Plate-Authentication",
    demoUrl: null,
    status: "Completed"
  },
  {
    id: "health-chatbot",
    title: "Health Chatbot for Disease Awareness",
    date: "October 2025",
    category: "Software & AI",
    description: "Built a health-oriented chatbot using Twilio to deliver disease information and awareness through automated responses.",
    fullDescription: "An automated public healthcare awareness system developed in Python with conversational interfaces and REST APIs. The bot enables accessible, round-the-clock symptom and disease information lookup, making critical healthcare prevention protocols simple and reachable for users without requiring specialized technical knowledge.",
    technologies: ["Python", "FastAPI", "Dialogflow", "React", "SQLite / Supabase", "Twilio API", "REST APIs"],
    keyFeatures: [
      "Automated, responsive chatbot conversation engine.",
      "Intuitive and frictionless conversational user interaction.",
      "Instant lookup of common symptoms, preventive care, and disease awareness data.",
      "Promotes proactive public health literacy and reliable first-line disease information.",
      "Easily deployable across standard SMS and WhatsApp messaging channels via Twilio."
    ],
    architecture: [
      "Incoming Message Webhook via Twilio API",
      "Request Payload Parser & Intent Recognition Engine in Python",
      "Medical Knowledge Base & Disease Awareness Lookup Table",
      "Formatted Response Dispatcher with Preventive Advisory",
      "Session Context Management & Fallback Guidance"
    ],
    hardwareSpecs: [
      "Cloud / Server-hosted Python Runtime",
      "Twilio Messaging Gateway",
      "Secure Webhook Endpoints"
    ],
    image: "/images/Health Chatbot Disease Awareness Interface.png",
    screenshots: [
      "/images/Health Chatbot Disease Awareness Interface.png"
    ],
    githubUrl: "https://github.com/rvboovaragavan/Smart_Health_Assistant_Multilingual",
    demoUrl: null,
    status: "Completed"
  },
  {
    id: "vote-guard",
    title: "VOTE GUARD – Smart Voter Verification",
    date: "January 2026",
    category: "System Security",
    description: "Developed an AI-assisted voter verification system to detect ghost and inconsistent voter records.",
    fullDescription: "A comprehensive dual-layer verification platform combining machine learning similarity algorithms with physical RFID embedded verification. The system analyses large voter registries using RapidFuzz string distance and rule-based risk engines to flag fraudulent, ghost, or duplicated entries, while an ESP32 microcontroller with RC522 RFID reader simulates physical card authentication at polling booths.",
    technologies: ["Python", "Streamlit", "Pandas", "RapidFuzz", "ESP32", "RC522 RFID", "Arduino IDE"],
    keyFeatures: [
      "Rule-based algorithmic risk analysis across electoral datasets.",
      "Tri-tier risk classification: Low, Medium, and High risk voter scoring.",
      "Interactive Streamlit web dashboard for election supervisors and polling agents.",
      "Comprehensive filtering, audit searching, and instant downloadable CSV/PDF reports.",
      "Fuzzy string matching & RapidFuzz similarity algorithms to pinpoint suspicious duplicates and phonetic anomalies.",
      "Physical ESP32 & RC522 RFID hardware verification prototype for instant booth-side identity checks."
    ],
    architecture: [
      "Electoral Roll Dataset Ingestion (Pandas Pipeline)",
      "RapidFuzz Phonetic & Fuzzy String Distance Computation",
      "Risk Score Calculation & Anomaly Detection Rules Engine",
      "Interactive Streamlit Analytical Dashboard with Real-time Filtering",
      "Hardware Integration: ESP32 + RC522 RFID Serial Handshake to Polling Database"
    ],
    hardwareSpecs: [
      "ESP32 Wi-Fi / Bluetooth Microcontroller",
      "RC522 13.56MHz RFID Reader Module & Transponder Cards",
      "Serial Communication UART Protocol",
      "I2C LCD Status Display Interface"
    ],
    image: "/images/Vote Guard_ Smart Voter Verification Dashboard.png",
    screenshots: [
      "/images/Vote Guard_ Smart Voter Verification Dashboard.png"
    ],
    githubUrl: "https://github.com/rvboovaragavan/VoteGuard",
    demoUrl: null,
    status: "Completed"
  },
  {
    id: "adaptive-indoor-air-quality",
    title: "Adaptive Indoor Air Quality Control System",
    date: "April 2026",
    category: "Embedded & IoT",
    description: "Developed an intelligent indoor air quality monitoring and adaptive ventilation control system using embedded systems.",
    fullDescription: "An autonomous IoT environmental regulation system that continuously monitors indoor ambient variables (temperature, humidity, harmful gases) and adaptively adjusts ventilation systems in real time. Powered by ESP32 and NodeMCU controllers interfaced with MQ135 and DHT11 sensors, the system streams environmental telemetry to a live analytical dashboard with threshold-triggered acoustic and cloud alerts.",
    technologies: ["Python", "Arduino IDE", "ESP32", "NodeMCU", "MQ135 Gas Sensor", "DHT11", "IoT", "Serial Communication"],
    keyFeatures: [
      "Real-time continuous temperature monitoring and logging.",
      "Precision relative humidity measurement.",
      "Harmful gas, smoke, and air pollutant detection via calibrated MQ135 sensor.",
      "Adaptive fan speed and automatic ventilation actuator control based on dynamic air quality thresholds.",
      "Live responsive dashboard with interactive graphical trend visualizations.",
      "Immediate alert notifications when pollutant thresholds are exceeded.",
      "Remote telemetry monitoring via cloud IoT platforms.",
      "Robust serial communication, fail-safe fallbacks, and local continuous data logging."
    ],
    architecture: [
      "Sensor Data Acquisition (DHT11 Temp/Humidity + MQ135 Gas Level)",
      "Analog-to-Digital Conversion & Calibration in ESP32 / NodeMCU Firmware",
      "Adaptive Feedback Loop: Threshold Comparison & PWM Fan Relay Control",
      "Telemetry Transmission via Wi-Fi / MQTT / Serial Protocol",
      "Live Dashboard Visualization, Alert Engine, and Historical Logging"
    ],
    hardwareSpecs: [
      "ESP32-WROOM-32 / NodeMCU ESP8266 Dev Boards",
      "MQ-135 Air Quality & Hazardous Gas Sensor",
      "DHT-11 Digital Temperature & Humidity Sensor",
      "5V Relay Module & DC Brushless Ventilation Fan",
      "0.96 inch I2C OLED / Serial Monitor Diagnostics"
    ],
    image: "/images/Adaptive Indoor Air Quality Dashboard.png",
    screenshots: [
      "/images/Adaptive Indoor Air Quality Dashboard.png"
    ],
    githubUrl: null, // Configurable: replace null with repo link when ready
    demoUrl: null,
    status: "Completed"
  }
];
