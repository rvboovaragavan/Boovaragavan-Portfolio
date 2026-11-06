import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { Github, Calendar, Layers, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Computer Vision',
    'Software & AI',
    'System Security',
    'Embedded & IoT'
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Ambient White Spread at Top (Seamless blend with Page 3) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      {/* Ambient White Spread at Bottom (Seamless blend with Page 5) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-t from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <SectionHeader
            badge="03 // ENGINEERING PORTFOLIO"
            title="Featured Technical Projects"
            subtitle="Real-world hardware, IoT, and software systems built with microcontrollers, computer vision, and Python architectures."
          />

          {/* Category Filter with High-Contrast White Styling */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 md:mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-extrabold shadow-[0_0_20px_rgba(255,255,255,0.35)] scale-105'
                    : 'bg-white/[0.06] text-white border border-white/20 hover:bg-white/[0.14] hover:border-white/35'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid - High Contrast Glassmorphic Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.09] via-white/[0.03] to-black border border-white/20 overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(251,191,36,0.15)] hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"
            >
              <div>
                {/* Clean Meta Header Bar (Keeps Infographic 100% Unobstructed) */}
                <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-extrabold bg-white text-black shadow-md">
                      Project #{String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-black/60 text-slate-300 border border-white/10">
                      <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-400" />
                      <span>{project.date}</span>
                    </div>
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* High-Resolution Infographic Showcase - 100% Legible & Unobstructed */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/9] w-full overflow-hidden bg-[#07070b] border-b border-white/[0.08] cursor-pointer group/img flex items-center justify-center p-2 sm:p-3"
                  title="Click to view full architecture and details"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover/img:scale-[1.02]"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle expand cue on hover */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-black shadow-xl">
                      Click to Expand Project
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white mb-2 sm:mb-3 group-hover:text-amber-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-base text-slate-200 leading-relaxed mb-5 sm:mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Key Features Bullet Points */}
                  <div className="mb-5 sm:mb-6 space-y-2 sm:space-y-2.5">
                    <p className="text-[11px] sm:text-xs uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      Key Capabilities:
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-200">
                          <span className="text-amber-400 font-bold mt-0.5">•</span>
                          <span className="leading-relaxed font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills - Crisp High Contrast */}
                  <div className="pt-4 sm:pt-5 border-t border-white/[0.08]">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2 sm:mb-2.5">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      <span>Tech Stack:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg text-[11px] sm:text-xs font-medium bg-white/[0.08] text-white border border-white/15"
                        >
                          {t}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-medium bg-white/[0.05] text-slate-300 border border-white/10">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions - Full-Width on Mobile for Thumb Ease */}
              <div className="px-5 sm:px-8 pb-5 sm:pb-8 pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 border-t border-white/[0.08] mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold bg-white text-black hover:bg-amber-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.4)] transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] active:scale-95 cursor-pointer"
                >
                  <span>View Details & Specs</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.18] border border-white/20 hover:border-white/40 transition-all active:scale-95"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                ) : (
                  <div
                    className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-[11px] font-medium text-slate-300 bg-white/[0.05] border border-white/10"
                    title="Configurable in src/data/projects.ts"
                  >
                    <AlertCircle className="w-3.5 h-3.5 text-amber-300" />
                    <span>Repo Coming Soon</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Detailed Project View */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
