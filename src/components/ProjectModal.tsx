import React, { useEffect, useState } from 'react';
import { X, Github, ExternalLink, Cpu, CheckCircle2, Layers, AlertCircle, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const allScreenshots = project.screenshots && project.screenshots.length > 0
    ? [project.image, ...project.screenshots.filter(s => s !== project.image)]
    : [project.image];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative bg-[#09090c] border border-white/20 rounded-2xl sm:rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.95)] max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 text-slate-100 flex flex-col relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent">
        
        {/* Modal Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/[0.08] bg-[#09090c]/95 backdrop-blur-md">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-bold rounded-full bg-white text-black shadow-md">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-200 font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/[0.08] border border-white/15">
              <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-400" />
              <span>{project.date}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 sm:mb-3">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Screenshots Gallery with Full Resolution View */}
          {allScreenshots.length > 0 && (
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-[#07070a] aspect-video flex items-center justify-center shadow-2xl p-2 sm:p-3">
                <img
                  src={activeImage || project.image}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <a
                  href={activeImage || project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-black/80 hover:bg-white hover:text-black text-white border border-white/30 backdrop-blur-md shadow-lg flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Open full resolution in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  <span>View Full Resolution</span>
                </a>
              </div>

              {allScreenshots.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {allScreenshots.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 bg-black transition-all cursor-pointer ${
                        activeImage === img
                          ? 'border-white ring-2 ring-white/40 scale-105'
                          : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain p-0.5" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/[0.08] text-white border border-white/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Key Features & Capabilities
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.05] border border-white/[0.09] text-sm text-slate-100 font-normal"
                >
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold border border-amber-400/40 shadow-sm">
                    ✓
                  </span>
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture / Process */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" />
                System Flow & Pipeline
              </h4>
              <div className="space-y-2">
                {project.architecture.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.05] border border-white/[0.09] text-xs sm:text-sm text-slate-100"
                  >
                    <span className="w-6 h-6 rounded-md bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs flex-shrink-0 border border-amber-400/40">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hardware Specifications */}
          {project.hardwareSpecs && project.hardwareSpecs.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" />
                Hardware & Embedded Environment
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.hardwareSpecs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.09] text-xs sm:text-sm text-slate-100 flex items-center gap-2.5 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 z-20 px-4 sm:px-6 py-3.5 sm:py-4 border-t border-white/[0.08] bg-[#09090c]/95 backdrop-blur-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-300 text-center sm:text-left">
            Project Status: <span className="font-bold text-amber-300">{project.status}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white text-black hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.35)] transition-all shadow-md active:scale-95"
              >
                <Github className="w-4 h-4 text-black" />
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            ) : (
              <div className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium bg-white/[0.06] text-slate-300 border border-white/15">
                <AlertCircle className="w-3.5 h-3.5 text-amber-300" />
                <span>Repository Link Coming Soon</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="w-full sm:w-auto text-center justify-center px-5 py-2 rounded-full text-xs font-bold bg-white/[0.08] hover:bg-white/[0.18] text-white border border-white/20 transition-all cursor-pointer active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
