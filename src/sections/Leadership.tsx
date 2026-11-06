import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { leadershipData } from '../data/leadership';
import { Users2, Calendar, Award, CheckCircle2 } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Ambient White Spread at Top (Seamless blend with Page 6) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      {/* Ambient White Spread at Bottom (Seamless blend with Page 8) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-t from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="06 // COMMUNITY & LEADERSHIP"
          title="Positions of Responsibility"
          subtitle="Empowering technical peers, driving global developer awareness, and organizing large-scale student workshops."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {leadershipData.map((pos) => (
            <div
              key={pos.id}
              className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black border border-white/20 shadow-2xl backdrop-blur-xl hover:border-amber-400/50 hover:shadow-[0_15px_40px_rgba(251,191,36,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:-translate-y-1"
            >
              <div>
                {/* Header with HD Organization Logo in Solid White Box */}
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                  {pos.logoUrl ? (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white border border-white/30 flex items-center justify-center p-2 sm:p-2.5 overflow-hidden flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform">
                      <img src={pos.logoUrl} alt={pos.organization} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white text-black flex items-center justify-center p-2.5 shadow-md">
                      <Users2 className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/[0.08] text-white border border-white/15 shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{pos.date}</span>
                  </div>
                </div>

                {pos.impactBadge && (
                  <div className="mb-2 text-[10px] sm:text-[11px] text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{pos.impactBadge}</span>
                  </div>
                )}

                <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white mb-1 group-hover:text-amber-200 transition-colors">
                  {pos.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-200 mb-4 sm:mb-6">
                  {pos.organization}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2.5 sm:space-y-3">
                  {pos.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-normal">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-3.5 sm:pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-slate-200 font-semibold">Leadership Impact Validated</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
