import React from 'react';
import { profileData } from '../data/profile';
import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black pt-16 pb-12 transition-colors relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Ambient White Spread at Top (Seamless blend with Contact) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Identity & Headline */}
          <div className="md:col-span-5 space-y-3">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {profileData.name}
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm font-medium text-amber-300/90">
              {profileData.headline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Electronics & Communication Engineering student at Sathyabama Institute of Science and Technology. Passionate about software, embedded systems, and hardware-software integration.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-3">
              Navigation Index
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-amber-300 transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-3">
                Connect Directly
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141418] text-slate-300 hover:text-white border border-white/[0.08] hover:border-amber-400/40 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141418] text-slate-300 hover:text-white border border-white/[0.08] hover:border-amber-400/40 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={profileData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#141418] text-slate-300 hover:text-white border border-white/[0.08] hover:border-amber-400/40 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2.5 rounded-xl bg-[#141418] text-slate-300 hover:text-white border border-white/[0.08] hover:border-amber-400/40 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-6 md:pt-0">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs text-slate-300 hover:text-amber-300 bg-[#141418] border border-white/[0.08] hover:border-amber-400/40 transition-all"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Subtext */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="italic text-center sm:text-left">
            "Designed and developed with curiosity, creativity and continuous learning."
          </p>

          <p className="text-center sm:text-right">
            © {currentYear} Boovaragavan R V. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
