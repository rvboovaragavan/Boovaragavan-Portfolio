import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { aboutMeSummary } from '../data/profile';
import { Cpu, Code2, Zap, Sparkles, Award } from 'lucide-react';

export const About: React.FC = () => {
  const iconMap = [
    <Cpu className="w-5 h-5 text-black" />,
    <Code2 className="w-5 h-5 text-black" />,
    <Zap className="w-5 h-5 text-black" />,
    <Sparkles className="w-5 h-5 text-black" />
  ];

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-black">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Ambient White Spread at Top (Seamless blend with Page 1) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      {/* Ambient White Spread at Bottom (Seamless blend with Page 3) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-t from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="01 // BACKGROUND & PHILOSOPHY"
          title="Bridging Physical Systems & Modern Software"
          subtitle="A multidisciplinary engineer driven by curiosity, hardware-software integration, and continuous skill refinement."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
            <p className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black border border-white/20 backdrop-blur-xl shadow-2xl relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent">
              I am an <strong className="text-white font-extrabold underline decoration-amber-400/50 underline-offset-4">Electronics and Communication Engineering</strong> student at <strong className="text-white font-extrabold">Sathyabama Institute of Science and Technology</strong> with a strong focus on software development, embedded systems, hardware prototyping, and industrial laser technology.
            </p>

            <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black border border-white/20 backdrop-blur-xl shadow-2xl space-y-3.5 sm:space-y-4 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent">
              <p>
                I have hands-on experience with <span className="text-amber-300 font-bold">Raspberry Pi</span>, <span className="text-amber-300 font-bold">Arduino</span>, <span className="text-amber-300 font-bold">ESP32</span>, and <span className="text-amber-300 font-bold">NodeMCU</span>, along with programming expertise in <span className="text-amber-300 font-bold">Java, Python, and SQL</span>.
              </p>

              <p>
                My projects span computer vision, automation, IoT-based environmental monitoring, and AI-assisted data verification. Through my software engineering and industrial repair internships, I have gained real-world exposure to production software development, laser source servicing, optical fiber splicing, and field troubleshooting.
              </p>
            </div>

            {/* Academic Credential Card (Elevated High-Contrast Spotlight Card) */}
            <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/[0.09] via-white/[0.04] to-black border border-white/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 shadow-2xl backdrop-blur-xl hover:border-amber-400/40 transition-all group relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-white/30 flex items-center justify-center p-2 sm:p-2.5 flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform">
                <img src="/logos/sathyabama.png" alt="Sathyabama Institute of Science and Technology" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h4 className="text-sm sm:text-lg font-bold text-white tracking-tight">
                    Sathyabama Institute of Science and Technology
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-white text-black shadow-md">
                    Chennai, India
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  B.E. Electronics and Communication Engineering (2023 – 2027)
                </p>
                <div className="mt-2.5 sm:mt-3 inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-amber-400/15 text-amber-300 border border-amber-400/40 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  <span>CGPA: 7.8 / 10 (Till 6th Semester)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Engineering Pillars */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-amber-300 font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Core Engineering Disciplines
            </h3>

            {aboutMeSummary.corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black border border-white/20 hover:border-amber-400/50 transition-all duration-300 shadow-2xl hover:shadow-[0_15px_40px_rgba(251,191,36,0.1)] hover:-translate-y-1 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white text-black shadow-lg flex items-center justify-center group-hover:bg-amber-300 group-hover:scale-105 transition-all flex-shrink-0">
                    {iconMap[idx]}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-0 mt-2 sm:mt-0 sm:pl-14 font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
