import React from 'react';
import { ShieldCheck, Award, ArrowUpRight, CheckCircle2, Zap, FileCheck, Layers, Building2, Anchor } from 'lucide-react';
import { PLATFORM_STATS, INDIAN_CERTIFICATIONS } from '../data/mockData';
import { COMPANY_PARTNERS } from './CompanyLogosData';

export const TrustTicker: React.FC = () => {
  return (
    <section className="py-12 border-b border-white/10 bg-forest-950/90 relative overflow-hidden">
      {/* SVG Filter Definition for Website Themed Shader (Duotone mapping to Solar Lime #B8F36B & Forest Black) */}
      <svg className="absolute w-0 h-0 pointer-events-none opacity-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="solar-lime-duotone" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.3333 0.3333 0.3333 0 0
                      0.3333 0.3333 0.3333 0 0
                      0.3333 0.3333 0.3333 0 0
                      0      0      0      1 0"
            />
            <feComponentTransfer>
              <feFuncR type="linear" slope="0.72" intercept="0.06" />
              <feFuncG type="linear" slope="0.95" intercept="0.10" />
              <feFuncB type="linear" slope="0.42" intercept="0.08" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Regulatory Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-warm-muted">
              Indian Regulatory Approvals & Institutional Framework
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {INDIAN_CERTIFICATIONS.map((cert) => (
              <span
                key={cert.name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-forest-900 border border-lime/20 text-[11px] font-mono text-warm-white"
              >
                <CheckCircle2 className="w-3 h-3 text-lime" />
                <strong className="text-white">{cert.name}</strong>
              </span>
            ))}
          </div>
        </div>

        {/* 4 Core Indian Platform Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PLATFORM_STATS.map((stat) => (
            <div
              key={stat.label}
              className="relative p-5 sm:p-6 rounded-2xl bg-forest-900/70 border border-white/5 hover:border-lime/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-warm-muted">
                  {stat.label}
                </span>
                <span className="inline-flex items-center gap-0.5 text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-lime/10 text-lime border border-lime/20">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.change}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mt-2.5 tracking-tight font-sans group-hover:text-lime transition-colors">
                {stat.value}
              </div>

              <p className="text-xs text-warm-muted/70 mt-1.5 leading-relaxed">
                {stat.description}
              </p>

              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-lime/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Top Indian Module OEMs & Inverter Manufacturers - Infinite Logo Marquee */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              <p className="text-xs font-mono uppercase tracking-widest text-warm-muted/90 font-medium">
                Integrated With India's Leading ALMM Module OEMs & Inverter Manufacturers
              </p>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-warm-muted/60">
              <span className="px-2 py-0.5 rounded-full bg-lime/10 text-lime border border-lime/20 font-semibold">
                12 Tier-1 Brands
              </span>
            </div>
          </div>

          {/* Marquee Wrapper with left/right fade masks */}
          <div className="marquee-container relative w-full overflow-hidden py-2 select-none">
            {/* Left Edge Gradient Fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-forest-950 via-forest-950/80 to-transparent z-10" />

            {/* Right Edge Gradient Fade */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-forest-950 via-forest-950/80 to-transparent z-10" />

            {/* Continuous Infinite Marquee Track */}
            <div className="animate-infinite-marquee flex items-center gap-4 sm:gap-6">
              {[...COMPANY_PARTNERS, ...COMPANY_PARTNERS].map((partner, idx) => (
                <div
                  key={`${partner.id}-${idx}`}
                  className="group-logo-card flex-shrink-0 relative px-6 py-4 sm:py-5 rounded-2xl bg-forest-900/50 border border-white/5 hover:border-lime/40 hover:bg-forest-900/90 hover:shadow-[0_0_28px_rgba(184,243,107,0.18)] transition-all duration-300 cursor-pointer min-w-[240px] sm:min-w-[270px] flex flex-col items-center justify-center"
                >
                  {/* Company Logo with Website-Themed Shader (40% Larger) */}
                  <div className="h-14 sm:h-16 w-full flex items-center justify-center logo-themed-shader">
                    {partner.logo}
                  </div>

                  {/* Bottom ticker info */}
                  {partner.ticker && (
                    <div className="w-full text-center mt-2.5 pt-1.5 border-t border-white/5 text-[9px] font-mono text-warm-muted/50 group-hover:text-lime transition-colors">
                      {partner.ticker}
                    </div>
                  )}

                  {/* Subtle hover accent bar */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-lime/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
