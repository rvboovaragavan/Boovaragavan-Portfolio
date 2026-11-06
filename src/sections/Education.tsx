import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { educationData } from '../data/education';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Ambient White Spread at Top (Seamless blend with Page 7) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      {/* Ambient White Spread at Bottom (Seamless blend with Page 9) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-t from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="07 // ACADEMIC RECORD"
          title="Educational Background"
          subtitle="Formal engineering education and pre-engineering academic milestones."
        />

        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="group p-5 sm:p-9 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/[0.09] via-white/[0.04] to-black border border-white/20 shadow-2xl backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-5 pb-4 sm:pb-5 border-b border-white/[0.08]">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  {edu.logoUrl ? (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white border border-white/30 flex items-center justify-center p-2 sm:p-2.5 overflow-hidden flex-shrink-0 mt-1 shadow-[0_0_25px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform">
                      <img src={edu.logoUrl} alt={edu.institution} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white text-black flex items-center justify-center p-2.5 shadow-md mt-1">
                      <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-xs sm:text-base font-bold text-amber-300 mt-0.5 sm:mt-1">
                      {edu.field}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5 sm:mt-1">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs">
                  <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-white font-semibold shadow-sm text-[11px] sm:text-xs">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-white font-semibold shadow-sm text-[11px] sm:text-xs">
                    <MapPin className="w-3.5 h-3.5 text-slate-300" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Grade / CGPA Pill */}
              <div className="py-4 sm:py-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  Performance Metric:
                </span>
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-black bg-amber-400/15 text-amber-300 border border-amber-400/40 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  <span>{edu.grade}</span>
                </span>
              </div>

              {/* Coursework & details */}
              {edu.details && (
                <div className="pt-2 space-y-2">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100 font-medium">
                      <BookOpen className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
