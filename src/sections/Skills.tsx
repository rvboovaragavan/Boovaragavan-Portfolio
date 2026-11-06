import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { skillCategories } from '../data/skills';
import { Code2, Database, Cpu, Zap, Terminal, Palette, Bot, Users, Check, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-black" />;
      case 'Database':
        return <Database className="w-5 h-5 text-black" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-black" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-black" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-black" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-black" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-black" />;
      case 'Users':
        return <Users className="w-5 h-5 text-black" />;
      default:
        return <Code2 className="w-5 h-5 text-black" />;
    }
  };

  const filterMap: Record<string, string[]> = {
    all: skillCategories.map(c => c.id),
    software: ['programming', 'database'],
    embedded: ['embedded'],
    laser: ['laser-tech'],
    tools: ['dev-tools', 'design-tools', 'ai-tools'],
    soft: ['soft-skills']
  };

  const filteredCategories = skillCategories.filter(cat => 
    filterMap[filter].includes(cat.id)
  );

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Ambient White Spread at Top (Seamless blend with Page 2) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      {/* Ambient White Spread at Bottom (Seamless blend with Page 4) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-t from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="02 // TECHNICAL REPERTOIRE"
          title="Skills, Tools & Technologies"
          subtitle="A categorized breakdown of software, embedded hardware, industrial servicing competencies, and modern tooling."
        />

        {/* Filter Pills with Crisp High-Contrast Styling */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8 sm:mb-12">
          {[
            { id: 'all', label: 'All Competencies' },
            { id: 'embedded', label: 'Embedded Systems & IoT' },
            { id: 'software', label: 'Software & Database' },
            { id: 'laser', label: 'Industrial Laser Tech' },
            { id: 'tools', label: 'Dev, Design & AI Tools' },
            { id: 'soft', label: 'Professional Skills' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? 'bg-white text-black font-extrabold shadow-[0_0_25px_rgba(255,255,255,0.35)] scale-105'
                  : 'bg-white/[0.06] text-white border border-white/20 hover:bg-white/[0.14] hover:border-white/35 font-medium'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid - Elevated Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="group p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black border border-white/20 hover:border-amber-400/50 transition-all duration-300 shadow-2xl backdrop-blur-xl flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent"
            >
              <div>
                {/* Category Header with Solid White Square Badge */}
                <div className="flex items-center gap-3.5 mb-5 pb-3.5 sm:mb-6 sm:pb-4 border-b border-white/[0.08]">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-amber-300 group-hover:scale-105 transition-all flex-shrink-0">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-xs text-slate-300 font-medium">
                      {category.skills.length} competencies listed
                    </span>
                  </div>
                </div>

                {/* Skills Badges List - High Contrast Elevated Rows */}
                <div className="space-y-2 sm:space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 sm:p-3 rounded-xl bg-white/[0.05] border border-white/[0.09] hover:bg-white/[0.1] hover:border-white/25 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 sm:gap-2.5">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-white">
                            {skill.name}
                          </span>
                        </div>
                        {skill.highlight ? (
                          <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm">
                            Core
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold text-slate-300">
                            Verified
                          </span>
                        )}
                      </div>
                      {skill.level && (
                        <p className="text-[10px] sm:text-[11px] text-slate-300 mt-1 pl-0 sm:pl-6.5 font-normal">
                          {skill.level}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity with Elevated Card */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-black border border-white/20 text-center max-w-2xl mx-auto backdrop-blur-md shadow-xl">
          <p className="text-xs sm:text-sm text-slate-200 flex items-center justify-center gap-2 font-medium">
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Presented with technical transparency: Skills reflect actual academic coursework, hands-on implementations, and certified internships.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
