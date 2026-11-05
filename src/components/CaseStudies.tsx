import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Lock,
  Building,
  Building2,
  MapPin,
  Headphones,
  Zap,
  SunMedium,
  CheckCircle2,
  Clock,
  Users,
  Quote,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';

interface CaseStudiesProps {
  onOpenDemo: () => void;
  onSuccessToast?: (title: string, message: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenDemo, onSuccessToast }) => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const currentCase = CASE_STUDIES[activeCaseIdx];

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCaseIdx((prev) => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 180);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCaseIdx((prev) => (prev === CASE_STUDIES.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 180);
  };

  const handleSelect = (idx: number) => {
    if (idx === activeCaseIdx || isTransitioning) return;
    setDirection(idx > activeCaseIdx ? 'next' : 'prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCaseIdx(idx);
      setIsTransitioning(false);
    }, 180);
  };

  const handleSupportClick = () => {
    if (onSuccessToast) {
      onSuccessToast(
        'Solar Support Desk Connected',
        'Senior PV Engineer assigned. Live assistance available via Phone and WhatsApp.'
      );
    }
    onOpenDemo();
  };

  const renderCompanyLogo = (company: string) => {
    if (company.includes('CleanMax')) {
      return (
        <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-forest-950/80 border border-lime/30 shadow-sm backdrop-blur-sm">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-lime/25 to-emerald-500/20 border border-lime/40 flex items-center justify-center text-lime shadow-inner">
            <Zap className="w-5 h-5 text-lime fill-lime/30" />
          </div>
          <div>
            <div className="text-xs font-black tracking-wider text-white font-mono uppercase flex items-center gap-1.5">
              <span>CLEANMAX</span>
              <span className="text-[9px] text-lime font-mono px-1.5 py-0.5 rounded bg-lime/10 border border-lime/30 font-bold">
                STERLING
              </span>
            </div>
            <div className="text-[10px] text-warm-muted font-mono tracking-tight">Utility & Open Access Solar EPC</div>
          </div>
        </div>
      );
    }
    if (company.includes('Kothari')) {
      return (
        <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-forest-950/80 border border-solar-yellow/30 shadow-sm backdrop-blur-sm">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-solar-yellow/25 to-amber-500/20 border border-solar-yellow/40 flex items-center justify-center text-solar-yellow shadow-inner">
            <Building2 className="w-5 h-5 text-solar-yellow" />
          </div>
          <div>
            <div className="text-xs font-black tracking-wider text-white font-mono uppercase flex items-center gap-1.5">
              <span>KOTHARI</span>
              <span className="text-[9px] text-solar-yellow font-mono px-1.5 py-0.5 rounded bg-solar-yellow/10 border border-solar-yellow/30 font-bold">
                SYNTEX
              </span>
            </div>
            <div className="text-[10px] text-warm-muted font-mono tracking-tight">Textile Mills · Surat (Est. 1984)</div>
          </div>
        </div>
      );
    }
    // Deccan Solar Solutions
    return (
      <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-forest-950/80 border border-cyan-400/30 shadow-sm backdrop-blur-sm">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-400/25 to-lime/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-inner">
          <SunMedium className="w-5 h-5 text-cyan-300" />
        </div>
        <div>
          <div className="text-xs font-black tracking-wider text-white font-mono uppercase flex items-center gap-1.5">
            <span>DECCAN</span>
            <span className="text-[9px] text-cyan-300 font-mono px-1.5 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/30 font-bold">
              SOLAR
            </span>
          </div>
          <div className="text-[10px] text-warm-muted font-mono tracking-tight">Regional EPC & DISCOM Net-Meter Partner</div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="case-studies"
      className="min-h-screen py-14 lg:py-20 flex flex-col justify-center snap-start relative border-b border-white/10 bg-forest-950 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">

        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-warm-white tracking-tight leading-tight">
            Trusted Across India's{' '}
            <span className="text-lime">Leading Solar Hubs.</span>
          </h2>
          <p className="text-xs sm:text-sm text-warm-muted mt-2.5 max-w-xl mx-auto leading-relaxed">
            Real performance audits, verified logistics savings, and dedicated engineering guidance across utility, C&amp;I, and rooftop installations.
          </p>
        </div>

        {/* Redesigned Case Study Carousel Card with Embedded Side Arrows */}
        <div className="rounded-3xl bg-forest-900 border border-lime/25 shadow-2xl relative overflow-hidden mb-6 group">

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-forest-950/90 hover:bg-forest-950 border border-white/15 hover:border-lime text-warm-muted hover:text-white flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 group/btn"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5 text-warm-muted group-hover/btn:text-lime transition-colors" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-forest-950/90 hover:bg-forest-950 border border-white/15 hover:border-lime text-warm-muted hover:text-white flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 group/btn"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5 text-warm-muted group-hover/btn:text-lime transition-colors" />
          </button>

          {/* Inner Content Container with Left & Right Padding for Arrows */}
          <div className="px-12 sm:px-16 lg:px-20 py-5 sm:py-6">

            {/* Animated Transition Wrapper */}
            <div
              className={`transition-all duration-300 ease-out transform ${
                isTransitioning
                  ? direction === 'next'
                    ? 'opacity-0 translate-x-8 scale-[0.99]'
                    : 'opacity-0 -translate-x-8 scale-[0.99]'
                  : 'opacity-100 translate-x-0 scale-100'
              }`}
            >
              {/* Card Header Row: Company Logo & Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
                {renderCompanyLogo(currentCase.company)}

                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-lime/10 text-lime border border-lime/25 uppercase">
                    {currentCase.role}
                  </span>
                  <span className="text-xs font-mono text-warm-muted flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-950/60 border border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-lime" />
                    {currentCase.region}
                  </span>
                </div>
              </div>

              {/* Grid: Story & Quote (Left 5 cols) vs Big Visual Proof (Right 7 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">

                {/* Left 5 cols: Compact Text Container */}
                <div className="lg:col-span-5 space-y-3 flex flex-col justify-center">
                  <h3 className="text-base sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    "{currentCase.headline}"
                  </h3>

                  <div className="relative pl-3.5 sm:pl-4 border-l-2 border-lime/60 py-1 bg-forest-950/40 rounded-r-xl pr-3">
                    <Quote className="w-5 h-5 text-lime/30 absolute -top-2.5 -left-2.5 pointer-events-none" />
                    <p className="text-xs sm:text-sm text-warm-muted italic leading-relaxed">
                      "{currentCase.quote}"
                    </p>
                    <div className="mt-2.5 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-forest-950 border border-lime/40 flex items-center justify-center font-mono font-bold text-lime text-xs shrink-0">
                        {currentCase.personName.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-white truncate">{currentCase.personName}</div>
                        <div className="text-[11px] text-warm-muted font-mono truncate">
                          {currentCase.personRole} · <strong className="text-warm-white">{currentCase.company}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {currentCase.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-forest-950 text-warm-muted border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right 7 cols: Much Bigger Visual Image & Horizontal Metrics */}
                <div className="lg:col-span-7 p-3.5 sm:p-4 rounded-2xl bg-forest-950 border border-white/10 space-y-3 shadow-xl">
                  {/* Expanded, Prominent Photo */}
                  <div className="relative rounded-xl overflow-hidden h-56 sm:h-64 lg:h-72 border border-white/10 group/img bg-forest-950">
                    <img
                      src={currentCase.image}
                      alt={currentCase.company}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('unsplash')) {
                          target.src = 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80';
                        }
                      }}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                    />
                    {/* Dark gradient overlay at bottom and top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent flex flex-col justify-between p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-lg bg-forest-950/80 backdrop-blur-md border border-lime/30 text-[11px] font-mono text-lime font-bold flex items-center gap-1.5 shadow-lg">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime" />
                          <span>Audited Commercial Commissioning</span>
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-forest-950/70 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-warm-white">
                          Verified Asset
                        </span>
                      </div>

                      <div className="text-[11px] font-mono text-warm-muted/80">
                        Operational Grid-Tie: <span className="text-warm-white font-semibold">{currentCase.region}</span>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal 3-Column Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                    {currentCase.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-2 sm:p-2.5 rounded-xl bg-forest-900/70 border border-white/5 flex flex-col justify-between"
                      >
                        <span className="text-[10px] sm:text-[11px] text-warm-muted font-mono leading-tight truncate">
                          {m.label}
                        </span>
                        <span className="text-sm sm:text-base lg:text-lg font-black font-mono text-lime mt-1">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenDemo}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-forest-950 bg-lime hover:bg-lime-glow transition-all flex items-center justify-center gap-1.5 shadow-md shadow-lime/20"
                  >
                    <span>Read Full Project Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

            {/* Bottom Pagination Dots inside the card */}
            <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-center gap-2">
              {CASE_STUDIES.map((cs, idx) => {
                const isActive = idx === activeCaseIdx;
                return (
                  <button
                    key={cs.id}
                    onClick={() => handleSelect(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-8 bg-lime shadow-sm shadow-lime/50'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to case study ${idx + 1}`}
                  />
                );
              })}
            </div>

          </div>
        </div>

        {/* Customer Support & Engineering Guidance Banner */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-forest-900/90 via-forest-900/70 to-forest-950 border border-lime/25 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-lime/15 border border-lime/30 text-lime flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm sm:text-base font-extrabold text-white">
                  24/7 Dedicated Solar Engineering Support &amp; Guidance
                </h4>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-lime/10 text-lime border border-lime/20">
                  FREE ADVISORY
                </span>
              </div>
              <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                Every procurement order includes a dedicated Key Account Manager, PVSyst string sizing, and DISCOM net-metering clearance support.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-[11px] font-mono text-warm-muted">
                <span className="flex items-center gap-1 text-white">
                  <Users className="w-3.5 h-3.5 text-lime" /> Dedicated Account Manager
                </span>
                <span className="flex items-center gap-1 text-white">
                  <Clock className="w-3.5 h-3.5 text-lime" /> &lt; 15 Min Expert Response
                </span>
                <span className="flex items-center gap-1 text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-lime" /> DISCOM Liaison Support
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSupportClick}
            className="w-full md:w-auto px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-forest-950 bg-lime hover:bg-lime-glow transition-all shrink-0 flex items-center justify-center gap-2 shadow-md shadow-lime/10"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Connect with Solar Support Desk</span>
          </button>
        </div>

        {/* Indian Compliance & Institutional Security Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-forest-900/60 border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-forest-950 border border-lime/30 text-lime shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">MNRE ALMM Enlisted</div>
              <div className="text-[11px] text-warm-muted mt-0.5 leading-relaxed">
                Automated check against List-I of approved models &amp; manufacturers.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-forest-950 border border-lime/30 text-lime shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">ICICI Institutional Escrow</div>
              <div className="text-[11px] text-warm-muted mt-0.5 leading-relaxed">
                RBI-compliant custody accounts with electronic milestone release.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-forest-950 border border-lime/30 text-lime shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">BIS Certified Hardware</div>
              <div className="text-[11px] text-warm-muted mt-0.5 leading-relaxed">
                IS 14286 &amp; IS 61730 hardware test compliance auto-verified.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-forest-950 border border-lime/30 text-lime shrink-0">
              <Building className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">SBI / IREDA Bankable</div>
              <div className="text-[11px] text-warm-muted mt-0.5 leading-relaxed">
                PVSyst &amp; single-line drawings pre-formatted for loan appraisal.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
