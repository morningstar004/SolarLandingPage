import React from 'react';
import {
  Smartphone,
  Wrench,
  Camera,
  Banknote,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Award,
  FileCheck,
  Download,
  Users,
  Check,
  ChevronRight,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import { StakeholderRole } from '../types';

interface InstallerWorkflowProps {
  onOpenRfq?: () => void;
  onOpenDemo: (role?: StakeholderRole) => void;
  onSuccessToast: (title: string, message: string) => void;
}

export const InstallerWorkflow: React.FC<InstallerWorkflowProps> = ({
  onOpenDemo,
  onSuccessToast
}) => {

  const handleDownloadSop = () => {
    onSuccessToast(
      'Field SOP Pack Downloaded',
      'Saved CEA 2026 rooftop installation checklist and earthing audit guides.'
    );
  };

  return (
    <section
      id="installer-workflow"
      className="py-16 lg:py-24 flex flex-col justify-center snap-start relative border-b border-white/10 bg-forest-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-forest-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Section Header (Centered, Clean & Concise) */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-warm-white tracking-tight leading-tight">
            Engineered for Field Installers.{' '}
            <span className="text-lime">From Daily Dispatch to Instant Payout.</span>
          </h2>
          <p className="text-sm sm:text-base text-warm-muted mt-3 leading-relaxed font-sans max-w-2xl mx-auto">
            Claim pre-surveyed local jobs, follow digital CEA/MNRE checklists, and receive guaranteed escrow payouts within 24 hours.
          </p>
        </div>

        {/* Divided Left & Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ========================================================= */}
          {/* LEFT 6 COLS: 2 Column × 2 Row Wired Process Grid */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative">
            
            {/* Tilted Grid Texture Background with Disappearing / Fading Edges */}
            <div className="absolute -inset-6 sm:-inset-10 pointer-events-none overflow-hidden z-0">
              <div 
                className="w-[140%] h-[140%] -ml-[20%] -mt-[20%] transform -rotate-[5deg] origin-center opacity-35 sm:opacity-45"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(184, 243, 107, 0.16) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(184, 243, 107, 0.16) 1px, transparent 1px)
                  `,
                  backgroundSize: '32px 32px',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 75%)',
                  maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 75%)'
                }}
              />
            </div>

            {/* 2 Column × 2 Row Connected Cards Grid with Generous Gap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 relative z-10">

              {/* ---------------- CARD 1: STEP 01 ---------------- */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-forest-950 border border-white/10 hover:border-lime/40 transition-all shadow-md group relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-lime/10 border border-lime/30 flex items-center justify-center text-lime shrink-0">
                        <Smartphone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-lime uppercase tracking-wider block leading-none">Step 01</span>
                        <span className="text-[9px] font-mono text-warm-muted leading-none">Dispatch</span>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-forest-900 text-lime border border-lime/20 font-bold">
                      Incoming
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-white mt-2.5 leading-snug">
                    Accept Job & Scan QRs
                  </h4>

                  <div className="mt-2.5 p-2 rounded-lg bg-forest-900/80 border border-white/5 text-[10px] font-mono space-y-1">
                    <div className="text-warm-white truncate flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-lime shrink-0" />
                      <span className="truncate">15 kWp • Bengaluru</span>
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3 shrink-0" />
                      <span>24/24 Module QRs Matched</span>
                    </div>
                  </div>
                </div>

                <div className="text-[9px] font-mono text-warm-muted mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between">
                  <span>Serial db verified</span>
                  <span className="text-lime font-bold">100% Kit OK</span>
                </div>

                {/* Wire 1 -> 2 Connector Bridge across the gap */}
                <div className="hidden sm:flex items-center absolute -right-8 sm:-right-10 lg:-right-12 top-1/2 -translate-y-1/2 w-8 sm:w-10 lg:w-12 pointer-events-none z-20">
                  <div className="w-full h-0.5 bg-gradient-to-r from-lime/60 to-solar-yellow/60 border-t border-dashed border-lime/80 relative flex items-center justify-center">
                    <span className="w-5 h-5 rounded-full bg-forest-950 border border-lime text-lime flex items-center justify-center text-[10px] shadow-md shadow-lime/30">
                      <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* ---------------- CARD 2: STEP 02 ---------------- */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-forest-950 border border-white/10 hover:border-solar-yellow/40 transition-all shadow-md group relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-solar-yellow/10 border border-solar-yellow/30 flex items-center justify-center text-solar-yellow shrink-0">
                        <Wrench className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-solar-yellow uppercase tracking-wider block leading-none">Step 02</span>
                        <span className="text-[9px] font-mono text-warm-muted leading-none">Execution</span>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-forest-900 text-solar-yellow border border-solar-yellow/20 font-bold">
                      SOP Check
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-white mt-2.5 leading-snug">
                    Follow Digital SOPs
                  </h4>

                  <div className="mt-2.5 p-2 rounded-lg bg-forest-900/80 border border-white/5 text-[10px] font-mono space-y-1">
                    <div className="text-warm-white truncate flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-solar-yellow shrink-0" />
                      <span>Torque 42 Nm & 14° Azimuth</span>
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3 shrink-0" />
                      <span>DC String Voc 585V Logged</span>
                    </div>
                  </div>
                </div>

                <div className="text-[9px] font-mono text-warm-muted mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between">
                  <span>CEA/MNRE compliant</span>
                  <span className="text-solar-yellow font-bold">Zero Violations</span>
                </div>

                {/* Wire 2 -> 3 Downward Bridge across the vertical gap */}
                <div className="hidden sm:flex flex-col items-center absolute left-1/2 -bottom-8 sm:-bottom-10 lg:-bottom-12 -translate-x-1/2 h-8 sm:h-10 lg:h-12 pointer-events-none z-20">
                  <div className="h-full w-0.5 bg-gradient-to-b from-solar-yellow/60 to-emerald-400/60 border-l border-dashed border-solar-yellow/80 relative flex items-center justify-center">
                    <span className="w-5 h-5 rounded-full bg-forest-950 border border-solar-yellow text-solar-yellow flex items-center justify-center text-[10px] shadow-md shadow-solar-yellow/30">
                      <ArrowDown className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* ---------------- CARD 3: STEP 03 ---------------- */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-forest-950 border border-white/10 hover:border-emerald-400/40 transition-all shadow-md group relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <Camera className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block leading-none">Step 03</span>
                        <span className="text-[9px] font-mono text-warm-muted leading-none">Audit</span>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-forest-900 text-emerald-400 border border-emerald-400/20 font-bold">
                      Geo-Fenced
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-white mt-2.5 leading-snug">
                    Upload Geotagged Proofs
                  </h4>

                  <div className="mt-2.5 p-2 rounded-lg bg-forest-900/80 border border-white/5 text-[10px] font-mono space-y-1">
                    <div className="text-warm-white truncate flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>GPS: 12.9716°N, 77.5946°E</span>
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3 shrink-0" />
                      <span>Earthing & SLD Synced</span>
                    </div>
                  </div>
                </div>

                <div className="text-[9px] font-mono text-warm-muted mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between">
                  <span>DISCOM audit ready</span>
                  <span className="text-emerald-400 font-bold">1st-Pass Ready</span>
                </div>

                {/* Wire 3 -> 4 Connector Bridge across the gap */}
                <div className="hidden sm:flex items-center absolute -right-8 sm:-right-10 lg:-right-12 top-1/2 -translate-y-1/2 w-8 sm:w-10 lg:w-12 pointer-events-none z-20">
                  <div className="w-full h-0.5 bg-gradient-to-r from-emerald-400/60 to-lime/60 border-t border-dashed border-emerald-400/80 relative flex items-center justify-center">
                    <span className="w-5 h-5 rounded-full bg-forest-950 border border-emerald-400 text-emerald-400 flex items-center justify-center text-[10px] shadow-md shadow-emerald-400/30">
                      <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* ---------------- CARD 4: STEP 04 ---------------- */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-forest-950 border border-lime/30 hover:border-lime transition-all shadow-lg group relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-lime/20 border border-lime flex items-center justify-center text-lime shrink-0">
                        <Banknote className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-lime uppercase tracking-wider block leading-none">Step 04</span>
                        <span className="text-[9px] font-mono text-warm-muted leading-none">Settlement</span>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-lime text-forest-950 font-bold">
                      &lt; 24h Escrow
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-white mt-2.5 leading-snug">
                    Digital Sign-off & Payout
                  </h4>

                  <div className="mt-2.5 p-2 rounded-lg bg-forest-900 border border-lime/20 text-[10px] font-mono space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-warm-muted">Labor Payout</span>
                      <span className="text-sm font-extrabold text-lime">₹28,500</span>
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3 shrink-0" />
                      <span>IMPS / UPI Released</span>
                    </div>
                  </div>
                </div>

                <div className="text-[9px] font-mono text-warm-muted mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between">
                  <span>Zero retainage delay</span>
                  <span className="text-lime font-bold">100% Cleared</span>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT 6 COLS: Static Information & How Website Helps */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Pillar Header */}
              <div className="mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-lime" />
                  <span>Why Installation Crews Choose Helios Grid</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1.5 leading-snug">
                  Built to eliminate wage disputes, delayed retainages, and paperwork friction.
                </h3>
                <p className="text-xs sm:text-sm text-warm-muted font-sans mt-2.5 leading-relaxed">
                  Protecting your time and income by eliminating payment delays, bad debt, and paperwork friction.
                </p>
              </div>

              {/* 4 Feature Information Cards */}
              <div className="space-y-2.5 sm:space-y-3">

                {/* 1. Guaranteed Escrow Payouts */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-forest-950/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-forest-900 text-lime shrink-0">
                    <Banknote className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    Guaranteed Escrow Payouts Within 24 Hours
                  </h4>
                </div>

                {/* 2. Predictable Local Job Pipeline */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-forest-950/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-forest-900 text-solar-yellow shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    Continuous Local Job Pipeline Within 50 km
                  </h4>
                </div>

                {/* 3. Zero DISCOM Rejection Guarantee */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-forest-950/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-forest-900 text-emerald-400 shrink-0">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    Zero DISCOM Rejections on First Inspection
                  </h4>
                </div>

                {/* 4. Verified Badges & Higher Day-Rates */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-forest-950/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-forest-900 text-lime shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    Verified Reputation & Premium Labor Rates
                  </h4>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* FULL-WIDTH CENTERED BOTTOM: Stat Badges & Action Buttons */}
        {/* ========================================================= */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10 flex flex-col items-center text-center">

          {/* 4 Quick Stat Badges (Increased Size & Centered) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mx-auto">
            <div className="p-4 sm:p-5 rounded-2xl bg-forest-950 border border-white/10 text-center hover:border-lime/30 transition-all shadow-md">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-lime font-mono">₹18.4 Cr+</div>
              <div className="text-xs sm:text-sm text-warm-muted font-mono uppercase mt-1">Crew Payouts Released</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-forest-950 border border-white/10 text-center hover:border-lime/30 transition-all shadow-md">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-mono">&lt; 24 Hrs</div>
              <div className="text-xs sm:text-sm text-warm-muted font-mono uppercase mt-1">Direct Disbursal Speed</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-forest-950 border border-white/10 text-center hover:border-lime/30 transition-all shadow-md">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
              <div className="text-xs sm:text-sm text-warm-muted font-mono uppercase mt-1">1st-Pass DISCOM Audit</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-forest-950 border border-white/10 text-center hover:border-lime/30 transition-all shadow-md">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-solar-yellow font-mono">4.9 / 5.0</div>
              <div className="text-xs sm:text-sm text-warm-muted font-mono uppercase mt-1">Verified Crew Rating</div>
            </div>
          </div>

          {/* Action Buttons (Centered & Enlarged) */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onOpenDemo('vendor')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-forest-950 bg-lime hover:bg-lime-glow shadow-lg shadow-lime/20 text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all"
            >
              <Users className="w-5 h-5" />
              <span>Join as Certified Installer</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownloadSop}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm text-warm-white bg-forest-950 hover:bg-forest-800 border border-white/10 hover:border-white/20 flex items-center justify-center gap-2.5 transition-colors shadow-md"
            >
              <Download className="w-4 h-4 text-lime" />
              <span>Download CEA Field SOP Guide (PDF)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
