import React, { useState } from 'react';
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  Lock,
  Headphones,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { StakeholderRole } from '../types';

interface FinalCTAProps {
  onSuccessToast: (title: string, message: string) => void;
  onOpenDemo: (role?: StakeholderRole) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onSuccessToast, onOpenDemo }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [role, setRole] = useState<StakeholderRole>('vendor');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B8F36B', '#FFEA00', '#FFFFFF']
      });
      onSuccessToast(
        'Indian Tenant Credentials Dispatched',
        `Onboarding credentials sent to ${emailOrPhone} for role: ${role}.`
      );
      setEmailOrPhone('');
    }, 600);
  };

  return (
    <section
      id="cta"
      className="min-h-screen py-16 lg:py-24 flex flex-col justify-center snap-start relative border-b border-white/10 bg-forest-900 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="w-full h-full opacity-30 sm:opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(184, 243, 107, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(184, 243, 107, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 80%)',
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 80%)'
          }}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-lime/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full my-auto">
        {/* Big Editorial Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-warm-white tracking-tight leading-[1.1]">
          Ready to Modernize Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-white to-solar-yellow">
            Indian Solar Operations?
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-warm-muted max-w-xl mx-auto mt-2.5 leading-relaxed font-sans">
          Deploy commercial megawatts, trade ALMM container stock, and manage verified installation crews.
        </p>

        {/* Quick Email/Mobile Registration Form */}
        <div className="mt-8 max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="p-3 rounded-2xl bg-forest-950/90 border border-lime/30 shadow-2xl flex flex-col sm:flex-row items-center gap-2.5 backdrop-blur-xl"
          >
            <div className="w-full sm:w-48 shrink-0">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as StakeholderRole)}
                className="w-full px-3 py-3 rounded-xl bg-forest-900 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-lime"
              >
                <option value="vendor">Solar Vendor / OEM</option>
                <option value="trader">Installer &amp; Field Crew</option>
                <option value="enterprise">Trader &amp; Distributor</option>
                <option value="consultant">Consultant &amp; Support</option>
              </select>
            </div>

            <div className="w-full flex-1">
              <input
                type="text"
                required
                placeholder="Work Email or Mobile (+91)..."
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-forest-900/60 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-lime font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-forest-950 bg-lime hover:bg-lime-glow shadow-lg shadow-lime/20 flex items-center justify-center gap-2 transition-all duration-200 text-xs sm:text-sm whitespace-nowrap shrink-0 group"
            >
              {isSubmitting ? (
                <span>Generating...</span>
              ) : (
                <>
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo alternative button */}
          <div className="mt-3 flex items-center justify-center gap-4 text-xs">
            <span className="text-warm-muted">Prefer a live walkthrough?</span>
            <button
              onClick={() => onOpenDemo(role)}
              className="text-lime hover:text-lime-glow font-semibold underline underline-offset-4"
            >
              Book 1-on-1 Indian Enterprise Walkthrough
            </button>
          </div>
        </div>

        {/* Three Pillars Assurance */}
        <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-warm-muted font-mono">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-lime" />
            <span>Instant 14-Day Free Sandbox</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Lock className="w-4 h-4 text-lime" />
            <span>ICICI RBI-Regulated Escrow</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Headphones className="w-4 h-4 text-lime" />
            <span>Dedicated Indian Technical Support</span>
          </div>
        </div>

      </div>
    </section>
  );
};
