import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { aiWebDevIntro, aiWorkflowSteps, learningAreas, upcomingWebProjects } from '../data/aiWebDev';
import { 
  Target, Layout, Sparkles, Palette, Layers, 
  MessageSquare, Code, Cpu, Globe, 
  ExternalLink, Info 
} from 'lucide-react';

export const AiWebDev: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-5 h-5 text-white" />;
      case 'Layout': return <Layout className="w-5 h-5 text-slate-300" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-slate-300" />;
      case 'Palette': return <Palette className="w-5 h-5 text-slate-300" />;
      case 'Layers': return <Layers className="w-5 h-5 text-slate-300" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-slate-300" />;
      case 'Code': return <Code className="w-5 h-5 text-white" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-white" />;
      case 'Globe': return <Globe className="w-5 h-5 text-slate-300" />;
      default: return <Code className="w-5 h-5 text-white" />;
    }
  };

  const currentStepData = aiWorkflowSteps.find(s => s.step === activeStep) || aiWorkflowSteps[0];

  return (
    <section id="ai-web" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="05 // EMERGING METHODOLOGY"
          title={aiWebDevIntro.title}
          subtitle={aiWebDevIntro.subtitle}
        />

        {/* Narrative & Transparent Learner Note */}
        <div className="max-w-4xl mb-12">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            {aiWebDevIntro.description}
          </p>

          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.12] flex items-start gap-3">
            <Info className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="font-semibold text-white">Learning Track Transparency:</strong> This is a recently acquired technical focus. Rather than claiming full-stack commercial mastery, I focus on applying prompt engineering, AI pair-programming, and modular frontend tooling to design clean, production-ready web interfaces with disciplined engineering practices.
            </div>
          </div>
        </div>

        {/* Visual End-to-End Workflow Pipeline */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm uppercase tracking-wider text-slate-400">
              Interactive Development Pipeline:
            </h3>
            <span className="text-xs text-white">
              Step {activeStep} of {aiWorkflowSteps.length}
            </span>
          </div>

          {/* Workflow Step Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
            {aiWorkflowSteps.map((step) => {
              const isCurrent = step.step === activeStep;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    isCurrent
                      ? 'bg-white text-black font-bold border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                      : 'bg-[#0a0a0d] text-slate-300 border-white/[0.08] hover:border-white/40 hover:text-white'
                  }`}
                >
                  <div className={`text-[11px] mb-1 ${isCurrent ? 'text-black font-black' : 'text-slate-500'}`}>
                    0{step.step}
                  </div>
                  <div className="text-xs font-bold leading-tight">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detail Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0a0d] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-none">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 text-white border border-white/20 mb-2">
                Stage 0{currentStepData.step} // Phase Specification
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {currentStepData.title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentStepData.description}
              </p>
            </div>

            <div className="flex flex-col gap-2 min-w-[200px]">
              <span className="text-xs uppercase tracking-wider text-slate-400">
                Key Instruments:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentStepData.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg text-xs bg-[#141418] text-slate-200 border border-white/[0.06]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 9 Learning Areas Grid */}
        <div className="mb-16">
          <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-6">
            Core Web Development Competency Tracks
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningAreas.map((area) => (
              <div
                key={area.title}
                className="p-5 rounded-2xl bg-[#0a0a0d] border border-white/[0.06] hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-[#141418] border border-white/[0.06] flex-shrink-0">
                  {getAreaIcon(area.icon)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {area.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Project Showcase & Deployment Slots */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0a0d] border border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.06]">
            <div>
              <h3 className="text-xl font-bold text-white">
                Web Development Projects & Deployment Showcase
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Configurable showcase for active websites and deployment links.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingWebProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-5 rounded-2xl bg-[#121216] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/10 text-white border border-white/20">
                      {proj.status}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] bg-[#0a0a0d] text-slate-300 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-3">
                  {proj.liveUrl && proj.liveUrl !== '#' ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-slate-300"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-400">
                      Current Portfolio App
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
