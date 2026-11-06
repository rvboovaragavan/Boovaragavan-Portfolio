# Boovaragavan R V — Personal Developer Portfolio

A developer portfolio website designed for **Boovaragavan R V**, representing his background as an **Electronics & Communication Engineering student**, **Software Developer**, **Embedded Systems & IoT Enthusiast**, and **AI-Assisted Web Development Learner**.

Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Lucide React**.

---

## 🚀 Live Preview & Local Development

The development server is running locally:
- **Local URL:** [http://localhost:3000](http://localhost:3000)
- **Network URL:** Accessible to your phone/tablet on your local Wi-Fi.

### Running Locally:
```bash
# Install dependencies (already installed)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Folder Structure

```
Portfolio/
├── public/
│   ├── favicon.svg          # Portfolio monogram favicon
│   ├── profile.png          # High-resolution formal portrait
│   ├── resume.pdf           # Real downloadable resume PDF
│   └── projects/
│       └── anpr/            # Real project scan and sample images
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Responsive navbar with scroll-spy & mobile menu
│   │   ├── Footer.tsx        # Dynamic footer with quote & quick links
│   │   ├── SectionHeader.tsx # Styled mono tag badges & headers
│   │   ├── ThemeToggle.tsx   # Light / Dark mode toggle (Light default)
│   │   └── ProjectModal.tsx  # Detailed specs, architecture & screenshots modal
│   ├── data/                 # ⭐ Central Config: Edit your content here!
│   │   ├── profile.ts        # Name, bio, email, phone, social links, rotating roles
│   │   ├── projects.ts       # All 4 projects, specs, features, GitHub repo URLs
│   │   ├── skills.ts         # Categorized skills (Software, Embedded, Laser, AI)
│   │   ├── experience.ts     # Software & Industrial Laser Internships
│   │   ├── aiWebDev.ts       # AI workflow steps, learning areas, upcoming apps
│   │   ├── certifications.ts # Google, HackerRank, NPTEL credentials & links
│   │   ├── leadership.ts     # Google & Microsoft Ambassador, ISTE roles
│   │   └── education.ts      # Sathyabama Institute of Science & Technology, GHSS
│   ├── sections/
│   │   ├── Hero.tsx          # Dynamic typewriter/rotating role hero section
│   │   ├── About.tsx         # Professional biography & engineering pillars
│   │   ├── Skills.tsx        # Filterable categorized skill cards
│   │   ├── Projects.tsx      # Project cards with "View Details" & "Repo" logic
│   │   ├── Experience.tsx    # Timeline highlighting industrial laser tech
│   │   ├── AiWebDev.tsx      # Interactive 7-stage AI development pipeline
│   │   ├── Certifications.tsx# Formal credentials & verification slots
│   │   ├── Leadership.tsx    # Student ambassador & organizing roles
│   │   ├── Education.tsx     # Academic timeline & CGPA metrics
│   │   └── Contact.tsx       # Validated form with mailto fallback & clipboard
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces for all data structures
│   ├── App.tsx               # Main page layout assembly
│   ├── index.css             # Tailwind base & custom scrollbar/grid styling
│   └── main.tsx              # React DOM root entrypoint
├── index.html                # SEO meta tags, OpenGraph data, fonts
├── tailwind.config.js        # Design tokens, color palette, custom font stack
├── tsconfig.json             # TypeScript compiler settings
└── vite.config.ts            # Vite bundler configuration
```

---

## ⚙️ How to Update and Customize Your Portfolio

### 1. Adding GitHub Repository Links
Open `src/data/projects.ts`. Each project has a `githubUrl` field:
```typescript
// Replace null with your repository URL:
githubUrl: "https://github.com/rvboovaragavan/your-repo-name",
```
When `githubUrl` is `null`, the card automatically displays a clean **"Repository Link Coming Soon"** badge so recruiters never see broken links. When you add the link, it automatically switches to a live **"Repo"** button.

### 2. Adding a New Project
In `src/data/projects.ts`, simply add a new object to `projectsData`:
```typescript
{
  id: "my-new-project",
  title: "Title Here",
  date: "Month Year",
  category: "Embedded & IoT", // or "Software & AI", "Computer Vision", "System Security"
  description: "Short card description",
  fullDescription: "Detailed modal description",
  technologies: ["Tech 1", "Tech 2"],
  keyFeatures: ["Feature 1", "Feature 2"],
  image: "/path-to-image.jpg",
  githubUrl: null,
  status: "Completed"
}
```

### 3. Replacing Your Profile Photo
1. Save your new photo as `profile.png`.
2. Replace `public/profile.png`.
3. If using a different file name, update `profileImage` in `src/data/profile.ts`.

### 4. Replacing the Resume PDF
1. Save your new resume PDF as `resume.pdf`.
2. Replace `public/resume.pdf`.
The **Download Resume** buttons in the Hero section, Navbar, and Mobile menu will automatically serve your new PDF.

### 5. Adding Certificate Verification URLs or Images
Open `src/data/certifications.ts`:
```typescript
{
  id: "google-uiux",
  title: "Google UI/UX Design Specialization",
  issuer: "Google",
  credentialUrl: "https://coursera.org/verify/YOUR_ID", // Add your link here
  image: "/certificates/google-uiux.png", // Optional preview image
  ...
}
```

---

## 🌐 How to Deploy for Free

### Option A: Deploy to Vercel (Recommended — 2 Minutes)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/rvboovaragavan/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
3. Click **"Add New"** > **"Project"** and select your `portfolio` repository.
4. Leave build settings as default (Framework: Vite; Build command: `npm run build`; Output dir: `dist`).
5. Click **Deploy**. Your portfolio will be live at `https://your-portfolio.vercel.app` with instant global SSL!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com).
2. Drag and drop the `dist/` folder into Netlify Drop, or connect your GitHub repository.
3. Live instantly.
