import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`mb-8 sm:mb-12 md:mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide bg-amber-400/[0.08] text-amber-300 border border-amber-400/25 mb-3 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        {badge}
      </div>
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
