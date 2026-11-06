import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { profileData } from '../data/profile';

const typewriterPhrases = [
  "Software Development",
  "Embedded Systems & IoT",
  "Python & Java Programming",
  "Industrial Laser Technology",
  "Robotics & Automation"
];

export const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden pt-24 pb-16">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Spreading Ambient White Light at Bottom of First Page (Seamless blend into Page 2) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-t from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      {/* DESKTOP FULL-HEIGHT SUIT PHOTO (Right Side, Desktop Only) */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 lg:w-[50%] xl:w-[48%] h-full items-end justify-end pointer-events-none z-10 overflow-hidden">
        <img
          src="/hero-portrait-blend.png"
          alt={profileData.name}
          className="h-full max-h-[94vh] w-auto object-contain object-bottom select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
          loading="eager"
        />
        {/* Soft bottom blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
          
          {/* Status Location Indicator with Gold Glow Accent */}
          <div className="inline-flex items-center flex-wrap gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-amber-400/[0.08] backdrop-blur-md text-amber-200 border border-amber-400/25 mb-4 sm:mb-6 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span>Available for Roles & Internships</span>
            <span className="text-amber-400/30 hidden xs:inline">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-amber-400/80" />
              {profileData.location}
            </span>
          </div>

          {/* DEDICATED MOBILE & TABLET PORTRAIT (Hidden on Desktop 'lg') */}
          <div className="lg:hidden w-full flex justify-center items-center my-3 sm:my-5">
            <div className="relative group">
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 via-white/20 to-amber-400/20 rounded-3xl blur-xl opacity-75 pointer-events-none" />
              
              {/* Glassmorphic Portrait Container */}
              <div className="relative w-48 h-60 xs:w-52 xs:h-64 sm:w-64 sm:h-76 rounded-3xl p-1 bg-gradient-to-b from-white/40 via-white/10 to-transparent shadow-[0_0_35px_rgba(255,255,255,0.15)]">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-gradient-to-b from-slate-900/95 via-black/90 to-black relative flex items-end justify-center">
                  {/* Subtle inner grid & spotlight */}
                  <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
                  <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
                  
                  {/* Portrait Photo */}
                  <img
                    src="/hero-portrait-blend.png"
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top select-none drop-shadow-2xl"
                    loading="eager"
                  />
                  
                  {/* Soft bottom blend to match container */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Hello, It's Me */}
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-1 sm:mb-2">
            Hello, It’s Me
          </h2>

          {/* Name */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
            {profileData.name}
          </h1>

          {/* Subtitle & Live Typewriter (with Gold Moving Details) */}
          <div className="space-y-1 mb-5 sm:mb-6 text-base sm:text-2xl lg:text-3xl font-normal text-slate-200 leading-snug">
            <p className="text-slate-300 text-sm sm:text-xl lg:text-2xl">
              I’m an Engineering Student, Who is
            </p>
            <p className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-white font-medium min-h-[32px] sm:min-h-[38px]">
              <span className="text-slate-400">Passionate in</span>
              <span className="text-amber-400 font-bold drop-shadow-[0_0_15px_rgba(251,191,36,0.35)]">
                {currentText}
              </span>
              <span className="inline-block w-[3px] h-6 sm:h-7 bg-amber-400 ml-0.5 animate-pulse" />
            </p>
          </div>

          {/* Short Bio */}
          <p className="text-xs sm:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal">
            {profileData.bio}
          </p>

          {/* Action Buttons & Social Icons - Optimized Full-Width Stack for Mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 w-full sm:w-auto">
            {/* White Pill Resume Button with subtle Gold hover */}
            <a
              href={profileData.resumePdf}
              download="Boovaragavan_RV_Resume.pdf"
              className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full bg-white text-black font-extrabold hover:bg-amber-300 hover:shadow-[0_0_35px_rgba(251,191,36,0.45)] transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] text-sm sm:text-base inline-flex items-center gap-2 active:scale-95"
            >
              <Download className="w-4 h-4 text-black" />
              <span>Resume</span>
            </a>

            {/* Explore Projects Button */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/30 font-semibold hover:border-amber-400/60 hover:text-amber-300 transition-all text-sm sm:text-base inline-flex items-center gap-2 active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            {/* Social Symbols Only: GitHub, LinkedIn, Instagram */}
            <div className="flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto mt-1 sm:mt-0 sm:ml-2">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center p-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] text-slate-200 hover:text-amber-300 border border-white/20 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.25)] transition-all hover:scale-105 active:scale-95 shadow-sm"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center p-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] text-slate-200 hover:text-amber-300 border border-white/20 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.25)] transition-all hover:scale-105 active:scale-95 shadow-sm"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center p-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] text-slate-200 hover:text-amber-300 border border-white/20 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.25)] transition-all hover:scale-105 active:scale-95 shadow-sm"
                aria-label="Instagram"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Quick Highlights Counter Strip with Gold Numbers */}
        <div className="mt-8 sm:mt-14 pt-6 sm:pt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl">
          <div className="p-3.5 sm:p-5 rounded-2xl bg-[#0a0a0d]/80 backdrop-blur-md border border-white/15 hover:border-amber-400/30 transition-all">
            <div className="text-xl sm:text-3xl font-extrabold text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]">
              5+
            </div>
            <div className="text-[11px] sm:text-sm text-slate-300 mt-1 leading-tight">
              Completed Technical Projects
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-[#0a0a0d]/80 backdrop-blur-md border border-white/15 hover:border-amber-400/30 transition-all">
            <div className="text-xl sm:text-3xl font-extrabold text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]">
              2
            </div>
            <div className="text-[11px] sm:text-sm text-slate-300 mt-1 leading-tight">
              Industry Internships (Software & Laser)
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-[#0a0a0d]/80 backdrop-blur-md border border-white/15 hover:border-amber-400/30 transition-all">
            <div className="text-xl sm:text-3xl font-extrabold text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]">
              3
            </div>
            <div className="text-[11px] sm:text-sm text-slate-300 mt-1 leading-tight">
              Leadership & Ambassador Roles
            </div>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-[#0a0a0d]/80 backdrop-blur-md border border-white/15 hover:border-amber-400/30 transition-all">
            <div className="text-xl sm:text-3xl font-extrabold text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]">
              7.8/10
            </div>
            <div className="text-[11px] sm:text-sm text-slate-300 mt-1 leading-tight">
              ECE Academic CGPA (Till 6th Sem)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
