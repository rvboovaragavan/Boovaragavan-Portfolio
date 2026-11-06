import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { profileData } from '../data/profile';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, Check, Copy, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const copyToClipboard = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) errs.message = 'Please provide your message details.';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Save contact inquiry directly into Firebase Cloud Firestore
      await addDoc(collection(db, 'contacts'), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
        timestamp: new Date().toISOString()
      });

      setSubmittedStatus(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmittedStatus(false);
      }, 7000);
    } catch (err: any) {
      console.error('Firebase submission error:', err);
      setSubmitError(err?.message || 'Failed to submit to database. Please check connection or use direct email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFallbackEmail = () => {
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || 'New Message'}`);
    const mailtoBody = encodeURIComponent(
      `Hello Boovaragavan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from Portfolio Website Contact Form`
    );
    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      {/* Ambient White Spread at Top (Seamless blend with Page 8) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      {/* Ambient White Spread at Bottom (Seamless blend with Footer) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] lg:w-[1300px] h-[220px] sm:h-[320px] bg-gradient-to-t from-white/[0.14] via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[550px] sm:w-[850px] h-[160px] sm:h-[220px] bg-white/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="08 // INITIATE CONVERSATION"
          title="Get In Touch"
          subtitle="Open for software engineering roles, embedded systems opportunities, internships, and technical collaboration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-amber-300 font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Direct Contact Information
            </h3>

            {/* Email Card - Tap to open mail client, with separate copy button */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black border border-white/20 hover:border-amber-400/50 transition-all shadow-xl backdrop-blur-md flex items-center justify-between group">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1 cursor-pointer"
                title="Send an email to Boovaragavan"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-amber-300 group-hover:scale-105 transition-all flex-shrink-0">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
                    Email Address
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-200 transition-colors break-all">
                    {profileData.email}
                  </div>
                </div>
              </a>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(profileData.email, 'email');
                }}
                className="p-2 sm:p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 transition-all cursor-pointer flex-shrink-0 ml-2"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-amber-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card - Tap to trigger direct call, with separate copy button */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black border border-white/20 hover:border-amber-400/50 transition-all shadow-xl backdrop-blur-md flex items-center justify-between group">
              <a
                href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1 cursor-pointer"
                title="Call Boovaragavan directly"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-amber-300 group-hover:scale-105 transition-all flex-shrink-0">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
                    Phone / Call Directly
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                    {profileData.phone}
                  </div>
                </div>
              </a>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(profileData.phone, 'phone');
                }}
                className="p-2 sm:p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 transition-all cursor-pointer flex-shrink-0 ml-2"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-amber-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card with Solid White Icon Badge */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black border border-white/20 hover:border-amber-400/50 transition-all shadow-xl backdrop-blur-md flex items-center gap-3.5 sm:gap-4 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-amber-300 group-hover:scale-105 transition-all flex-shrink-0">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
                  Location
                </div>
                <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                  {profileData.location}
                </div>
              </div>
            </div>

            {/* Social Links Cards - Logo and Platform Name Only (Clean 3-column layout) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-black border border-white/20 hover:border-amber-400/50 hover:bg-white/[0.12] flex items-center justify-center gap-2 group transition-all shadow-md cursor-pointer"
                title="Visit GitHub profile"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white text-black flex items-center justify-center shadow-sm group-hover:bg-amber-300 transition-colors flex-shrink-0">
                  <Github className="w-4 h-4 text-black" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                  GitHub
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-300 transition-colors hidden sm:inline" />
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-black border border-white/20 hover:border-amber-400/50 hover:bg-white/[0.12] flex items-center justify-center gap-2 group transition-all shadow-md cursor-pointer"
                title="Visit LinkedIn profile"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white text-black flex items-center justify-center shadow-sm group-hover:bg-amber-300 transition-colors flex-shrink-0">
                  <Linkedin className="w-4 h-4 text-black" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                  LinkedIn
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-300 transition-colors hidden sm:inline" />
              </a>

              <a
                href={profileData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-black border border-white/20 hover:border-amber-400/50 hover:bg-white/[0.12] flex items-center justify-center gap-2 group transition-all shadow-md cursor-pointer"
                title="Visit Instagram profile"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white text-black flex items-center justify-center shadow-sm group-hover:bg-amber-300 transition-colors flex-shrink-0">
                  <Instagram className="w-4 h-4 text-black" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                  Instagram
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-300 transition-colors hidden sm:inline" />
              </a>
            </div>
          </div>

          {/* Contact Form Column - Glassmorphic Form Card with Firebase Integration */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-9 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black border border-white/20 shadow-2xl backdrop-blur-xl relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent">
              <div className="mb-5 sm:mb-6">
                <h3 className="text-lg sm:text-2xl font-extrabold text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submittedStatus && (
                <div className="mb-5 sm:mb-6 p-4 rounded-xl sm:rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-start gap-3 shadow-lg">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                    <strong className="text-emerald-300 font-bold">Message Delivered Successfully!</strong> Your message has been sent. Boovaragavan will review it and reply shortly.
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-5 sm:mb-6 p-4 rounded-xl sm:rounded-2xl bg-red-500/15 border border-red-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-red-200">
                      <strong>Submission notice:</strong> {submitError}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleFallbackEmail}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white text-black hover:bg-amber-300 transition-colors cursor-pointer whitespace-nowrap self-start sm:self-auto"
                  >
                    Open Mail App Instead
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {/* Visitor Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 sm:mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / Hiring Manager"
                      className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl text-xs sm:text-sm bg-white/[0.06] border ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-white/20 focus:border-amber-400'
                      } text-white placeholder-slate-400 focus:bg-white/[0.1] focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all font-medium`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Visitor Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 sm:mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl text-xs sm:text-sm bg-white/[0.06] border ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-white/20 focus:border-amber-400'
                      } text-white placeholder-slate-400 focus:bg-white/[0.1] focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all font-medium`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 sm:mb-1.5">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Technical Role / Project Collaboration"
                    className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl text-xs sm:text-sm bg-white/[0.06] border ${
                      errors.subject
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-white/20 focus:border-amber-400'
                    } text-white placeholder-slate-400 focus:bg-white/[0.1] focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all font-medium`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex justify-between items-center mb-1 sm:mb-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-200">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your project, role requirements, or question..."
                    className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl text-xs sm:text-sm bg-white/[0.06] border ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-white/20 focus:border-amber-400'
                    } text-white placeholder-slate-400 focus:bg-white/[0.1] focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all resize-none font-medium`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button - Solid White Pill Primary Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-base font-extrabold transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-95 cursor-pointer ${
                    isSubmitting
                      ? 'bg-white/60 text-black cursor-not-allowed'
                      : 'bg-white text-black hover:bg-amber-300 hover:shadow-[0_0_35px_rgba(251,191,36,0.45)]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-black animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
