import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Zap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Ambient White Spread at Top (Seamless blend with Page 4) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      {/* Ambient White Spread at Bottom (Seamless blend with Page 6) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-t from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="04 // INDUSTRY INTERNSHIPS"
          title="Practical Engineering Experience"
          subtitle="Real-world internships covering both full-stack software development and specialized industrial fiber laser servicing."
        />

        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className={`group p-5 sm:p-9 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black border transition-all duration-300 shadow-2xl backdrop-blur-xl relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent ${
                exp.highlight
                  ? 'border-amber-400/50 shadow-[0_0_40px_rgba(251,191,36,0.15)]'
                  : 'border-white/20 hover:border-amber-400/40'
              }`}
            >
              {/* Highlight Badge for Industrial Laser */}
              {exp.highlight && (
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-amber-400/15 text-amber-300 border border-amber-400/35 mb-4 sm:mb-6 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  <span>Featured Industrial Experience • High-Power Fiber Optics</span>
                </div>
              )}

              {/* Role & Company Header with Solid White Square Badge */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-5 pb-5 sm:pb-6 border-b border-white/[0.08]">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white text-black flex items-center justify-center shadow-xl group-hover:bg-amber-300 group-hover:scale-105 transition-all flex-shrink-0">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm sm:text-base font-bold text-slate-200 mt-0.5 sm:mt-1 flex items-center gap-2">
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                  <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-white font-semibold shadow-sm text-[11px] sm:text-xs">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-white font-semibold shadow-sm text-[11px] sm:text-xs">
                    <MapPin className="w-3.5 h-3.5 text-slate-300" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities List - High Contrast Clear Reading */}
              <div className="py-5 sm:py-8">
                <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold mb-4 sm:mb-5 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  Key Responsibilities & Operational Scope
                </h4>
                <ul className="grid grid-cols-1 gap-2.5 sm:gap-3.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 sm:gap-3.5 text-xs sm:text-base text-slate-100 leading-relaxed font-normal"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags - Crisp Chips */}
              <div className="pt-4 sm:pt-5 border-t border-white/[0.08] flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-xs font-semibold text-slate-300 mr-2">
                  Domains & Tools:
                </span>
                {exp.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg text-[11px] sm:text-xs font-semibold bg-white/[0.08] text-white border border-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
