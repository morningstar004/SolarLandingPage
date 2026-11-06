import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Clock, 
  FileCheck,
  Building2
} from 'lucide-react';
import { StakeholderRole } from '../types';

interface HeroProps {
  onOpenDemo: (role?: StakeholderRole) => void;
  onOpenRfq: (product?: any) => void;
  onSuccessToast: (title: string, message: string) => void;
}

const SPECIFICATIONS = [
  {
    badge: 'ALMM LIST-I DIRECT',
    text: 'Direct ALMM hardware procurement straight from Mundra & JNPT bonded port yards with zero middleman markup.',
    metric: '100% Giga-Factory Stock'
  },
  {
    badge: 'DISCOM NET-METERING',
    text: 'Automated DISCOM net-metering & CEIG safety approvals mapped across 54 state electricity distribution utilities.',
    metric: '12-Day Approval Turnaround'
  },
  {
    badge: 'ICICI BANK ESCROW',
    text: 'ICICI Bank programmatic milestone escrow with zero payment default risk and automated GST e-Way bills.',
    metric: '₹4,850 Cr Secured'
  },
  {
    badge: 'B2B SOLAR ECOSYSTEM',
    text: 'Connecting verified Solar EPCs, Port Stockists, Chartered Engineers, and Indian Manufacturing Factories.',
    metric: '28,400+ Active Enterprises'
  },
  {
    badge: 'C&I TARIFF OPTIMIZATION',
    text: 'Slashing industrial grid tariffs from ₹9.50/unit down to ₹3.15/unit levelized rooftop solar cost.',
    metric: '68% Power Bill Reduction'
  }
];

export const Hero: React.FC<HeroProps> = ({
  onOpenDemo,
  onOpenRfq: _onOpenRfq,
  onSuccessToast: _onSuccessToast
}) => {
  const [activeSpecIndex, setActiveSpecIndex] = useState(0);

  // Automatically cycle through specifications every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpecIndex((prev) => (prev + 1) % SPECIFICATIONS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToSpotDesk = () => {
    const el = document.getElementById('distributor-workflow') || document.getElementById('vendor-workflow');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-32 pb-20 lg:pt-[154px] lg:pb-24 flex flex-col justify-center snap-start relative border-b border-white/10 solar-grid-bg overflow-hidden"
    >
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-lime/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-solar-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-5 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-800/80 border border-lime/30 backdrop-blur-md shadow-lg shadow-lime/5 group hover:border-lime/60 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
            </span>
            <span className="text-xs font-mono font-medium text-warm-white">
              INDIA'S 500 GW RENEWABLE MISSION
            </span>
            <span className="text-warm-muted text-xs">·</span>
            <span className="text-xs text-lime font-medium flex items-center gap-1">
              ALMM List-I & GST e-Way Integrated
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>

        {/* Hero Editorial Headline & Visual Metrics Row */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-warm-white leading-[1.08]">
            The Solar Operating System for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-lime-glow to-solar-yellow">
              Indian Enterprises.
            </span>
          </h1>

          {/* Dynamic Specifications Rotating Showcase */}
          <div className="relative min-h-[96px] sm:min-h-[76px] max-w-2xl mx-auto flex flex-col items-center justify-center">
            <div
              key={activeSpecIndex}
              className="animate-fadeIn transition-all duration-500 flex flex-col items-center text-center space-y-2 px-2"
            >
              <div className="inline-flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-lime/15 text-lime border border-lime/30 tracking-wider uppercase">
                  {SPECIFICATIONS[activeSpecIndex].badge}
                </span>
                <span className="text-[10px] font-mono text-warm-muted">
                  {SPECIFICATIONS[activeSpecIndex].metric}
                </span>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-warm-white font-medium leading-relaxed max-w-xl">
                {SPECIFICATIONS[activeSpecIndex].text}
              </p>
            </div>

            {/* Visual Progress Dash Indicators */}
            <div className="flex items-center gap-1.5 mt-2.5">
              {SPECIFICATIONS.map((spec, idx) => (
                <button
                  key={spec.badge}
                  onClick={() => setActiveSpecIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                    idx === activeSpecIndex
                      ? 'w-6 bg-lime shadow-[0_0_8px_rgba(184,243,107,0.8)]'
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Show ${spec.badge}`}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons & Visual Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenDemo()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-forest-950 bg-lime hover:bg-lime-glow shadow-[0_0_35px_rgba(184,243,107,0.35)] transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Request Indian Tenant Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleScrollToSpotDesk}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-warm-white bg-forest-800/80 hover:bg-forest-700/80 border border-white/10 hover:border-lime/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <Play className="w-4 h-4 text-lime fill-lime" />
              <span>Explore Spot Order Book (₹/Wp)</span>
            </button>
          </div>

          {/* Quick Regulatory Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-warm-muted/80 pt-12 font-mono">
            <span className="flex items-center gap-1.5 text-white">
              <FileCheck className="w-4 h-4 text-lime" />
              ALMM List-I Direct
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="w-4 h-4 text-lime" />
              ICICI Institutional Escrow
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-white">
              <Building2 className="w-4 h-4 text-lime" />
              54 DISCOMs Mapped
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-white">
              <Clock className="w-4 h-4 text-lime" />
              3.2-Day Port Dispatch
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
