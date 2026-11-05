import React from 'react';
import {
  Zap,
  ArrowUpRight,
  MapPin,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';
import { StakeholderRole } from '../types';

interface FooterProps {
  onSelectRole: (role: StakeholderRole) => void;
  onOpenDemo: (role?: StakeholderRole) => void;
  onSuccessToast: (title: string, message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectRole,
  onOpenDemo,
  onSuccessToast
}) => {
  return (
    <footer className="relative bg-forest-950 border-t border-white/10 py-16 sm:py-24 lg:py-28 text-warm-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-14 sm:pb-16 lg:pb-20 border-b border-white/10">

          {/* Brand Col */}
          <div className="col-span-2 space-y-5">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-forest-900 border border-lime/40 flex items-center justify-center shadow-sm">
                <Zap className="w-4 h-4 text-lime fill-lime/20" />
              </div>
              <span className="font-extrabold text-base sm:text-lg text-white tracking-tight">
                HELIOS<span className="text-lime">GRID</span> INDIA
              </span>
            </a>

            <div className="flex items-center gap-2.5 pt-1 mt-10">
              <a href="#" className="p-2.5 rounded-xl bg-forest-900 border border-white/5 hover:border-lime/30 text-warm-muted hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-forest-900 border border-white/5 hover:border-lime/30 text-warm-muted hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-forest-900 border border-white/5 hover:border-lime/30 text-warm-muted hover:text-white transition-colors" aria-label="Github">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Architecture */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Modules
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs font-mono">
              <li>
                <a href="#installer-workflow" className="hover:text-lime transition-colors">Field Crew Dispatch</a>
              </li>
              <li>
                <a href="#vendor-workflow" className="hover:text-lime transition-colors">DISCOM Net-Meter CRM</a>
              </li>
              <li>
                <a href="#distributor-workflow" className="hover:text-lime transition-colors">ICICI Escrow Core</a>
              </li>
              <li>
                <span className="text-warm-muted/50 flex items-center gap-1">
                  PM Surya Ghar DBT <span className="text-[9px] font-mono px-1 rounded bg-forest-900 text-lime border border-lime/20">Live</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Stakeholders */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Stakeholders
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs font-mono">
              <li>
                <button onClick={() => onSelectRole('vendor')} className="hover:text-lime transition-colors text-left">
                  Solar EPCs &amp; Installers
                </button>
              </li>
              <li>
                <button onClick={() => onSelectRole('trader')} className="hover:text-lime transition-colors text-left">
                  Mundra &amp; JNPT Stockists
                </button>
              </li>
              <li>
                <button onClick={() => onSelectRole('consultant')} className="hover:text-lime transition-colors text-left">
                  Chartered Engineers
                </button>
              </li>
              <li>
                <button onClick={() => onSelectRole('enterprise')} className="hover:text-lime transition-colors text-left">
                  Factory &amp; C&amp;I Decarbonization
                </button>
              </li>
              <li>
                <a href="#installer-workflow" onClick={() => onOpenDemo()} className="hover:text-lime transition-colors">
                  ALMM Pallet Bulk Buy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Indian Compliance */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Compliance &amp; Hubs
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs font-mono">
              <li>
                <a href="#" className="hover:text-lime transition-colors flex items-center gap-1">
                  MNRE ALMM List-I <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime transition-colors">BIS IS 14286 Standards</a>
              </li>
              <li>
                <a href="#" className="hover:text-lime transition-colors">GSTN e-Way Bill API</a>
              </li>
              <li>
                <a href="#" className="hover:text-lime transition-colors">ICICI Escrow Framework</a>
              </li>
              <li>
                <span className="text-warm-muted/70 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-lime" />
                  BKC, Mumbai &amp; Mundra Port
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="text-warm-muted/60">
            © {new Date().getFullYear()} HELIOS GRID TECHNOLOGIES INDIA PVT. LTD. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
};
