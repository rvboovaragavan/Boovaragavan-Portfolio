import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

const navItems = [
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

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.body.style.overflow = 'unset';
    setIsOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-amber-400/10 shadow-2xl'
            : 'bg-black/40 backdrop-blur-sm border-b border-white/[0.03]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Top-Left: Clean Minimalist */}
            <div className="flex items-center">
              {/* Left space intentionally minimalist */}
            </div>

            {/* Desktop Navigation (Neutral with Refined Gold Active Accent) */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'text-amber-300 bg-amber-400/10 border border-amber-400/30 font-semibold shadow-[0_0_15px_rgba(251,191,36,0.12)]'
                        : 'text-slate-300 hover:text-amber-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Actions: Resume Pill Button & Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={profileData.resumePdf}
                download="Boovaragavan_RV_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-amber-300 hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(251,191,36,0.35)] transition-all active:scale-95"
              >
                <FileText className="w-3.5 h-3.5 text-black" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 text-black opacity-80" />
              </a>

              {/* Mobile 3-Dash / Hamburger Menu Trigger */}
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="lg:hidden relative z-50 min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl text-white hover:text-amber-300 bg-white/[0.08] border border-white/15 hover:bg-white/[0.15] active:scale-95 transition-all cursor-pointer focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="w-6 h-6 pointer-events-none text-white" />
                ) : (
                  <Menu className="w-6 h-6 pointer-events-none text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer - Rendered outside <header> to avoid backdrop-blur fixed positioning context bugs */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 sm:top-20 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto">
          <div className="bg-[#09090c]/98 border-b border-white/20 p-5 shadow-2xl">
            <div className="space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`block px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-white text-black font-extrabold shadow-lg'
                        : 'text-slate-200 hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-5 pt-5 border-t border-white/[0.08] flex flex-col gap-3">
              <a
                href={profileData.resumePdf}
                download="Boovaragavan_RV_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-sm font-extrabold bg-white text-black hover:bg-amber-300 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
              >
                <FileText className="w-4 h-4 text-black" />
                <span>Download Resume (PDF)</span>
              </a>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-300 pt-1 font-medium">
                <span>{profileData.email}</span>
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-[50px]" onClick={() => { setIsOpen(false); document.body.style.overflow = 'unset'; }} />
        </div>
      )}
    </>
  );
};
