import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { certificationsData } from '../data/certifications';
import { ExternalLink, CheckCircle, ShieldCheck, Image, X } from 'lucide-react';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [previewCert, setPreviewCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Ambient White Spread at Top (Seamless blend with Page 5) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      {/* Ambient White Spread at Bottom (Seamless blend with Page 7) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-t from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="05 // FORMAL CREDENTIALS"
          title="Certifications & Technical Credentials"
          subtitle="Accredited courses and verified examinations from global technology leaders and premier engineering institutes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black border border-white/20 hover:border-amber-400/50 transition-all duration-300 shadow-2xl backdrop-blur-xl flex flex-col justify-between group relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:-translate-y-1"
            >
              <div>
                {/* Header with Solid White Box Issuer Logo */}
                <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
                  {cert.logoUrl ? (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white border border-white/30 flex items-center justify-center p-2 sm:p-2.5 overflow-hidden flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform">
                      <img src={cert.logoUrl} alt={cert.issuer} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white text-black flex items-center justify-center p-2.5 shadow-md">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                  )}
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-white text-black shadow-md">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-amber-200 transition-colors">
                  {cert.title}
                </h3>

                <div className="text-xs font-bold text-amber-300 mb-4 sm:mb-5 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>Credential Completed</span>
                </div>

                {/* Skills Learned - Crisp High Contrast Chips */}
                <div className="space-y-2 mb-5 sm:mb-6">
                  <p className="text-[11px] uppercase tracking-wider text-slate-300 font-semibold">
                    Syllabus Highlights:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-medium bg-white/[0.08] text-white border border-white/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Slots: Configurable verification & image preview */}
              <div className="pt-3.5 sm:pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 text-xs mt-auto">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold bg-white text-black hover:bg-amber-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.35)] transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5 text-black" />
                  </a>
                ) : (
                  <span className="text-[11px] sm:text-xs font-medium text-slate-300 text-center sm:text-left">
                    Verification Link Configurable
                  </span>
                )}

                {cert.image && (
                  <button
                    onClick={() => setPreviewCert(cert)}
                    className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white/[0.08] text-white border border-white/20 hover:bg-white/[0.18] transition-all"
                  >
                    <Image className="w-3.5 h-3.5" />
                    <span>Certificate</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Image Preview Modal (if configured) */}
        {previewCert && previewCert.image && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
            <div className="relative bg-[#0f0f13] rounded-2xl max-w-2xl w-full p-4 border border-white/[0.1]">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                <h4 className="font-bold text-sm text-white">
                  {previewCert.title}
                </h4>
                <button onClick={() => setPreviewCert(null)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <img src={previewCert.image} alt={previewCert.title} className="w-full rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
