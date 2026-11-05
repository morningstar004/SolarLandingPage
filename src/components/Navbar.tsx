import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Menu, 
  X, 
  User, 
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import { StakeholderRole } from '../types';

interface NavbarProps {
  onOpenDemo: (role?: StakeholderRole) => void;
  onOpenAuth: () => void;
  currentUser: { name: string; role: StakeholderRole; company: string } | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDemo,
  onOpenAuth,
  currentUser,
  onLogout
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initials for avatar
  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-forest-950/95 backdrop-blur-xl border-b border-lime/15 py-2.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-3.5'
      }`}
    >
      {/* 100% width with small clean margins on far left & right */}
      <div className="w-full px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Company Name shifted all the way to the left */}
          <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-8 h-8 rounded-xl bg-forest-800 border border-lime/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-lime group-hover:shadow-[0_0_20px_rgba(184,243,107,0.35)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-lime/20 via-transparent to-solar-yellow/20" />
              <Zap className="w-4 h-4 text-lime fill-lime/20 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-warm-white group-hover:text-white transition-colors leading-none">
                HELIOS<span className="text-lime">GRID</span>
              </span>
              <span className="text-[9px] text-warm-muted/70 tracking-wider font-mono uppercase mt-0.5">
                B2B Solar Grid
              </span>
            </div>
          </a>

          {/* Navigation Buttons: Smaller text with superscript numbering (e.g. Ecosystem^01) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a
              href="#ecosystem"
              className="px-2.5 py-1 text-[13px] font-medium text-warm-muted hover:text-white transition-colors group flex items-center"
            >
              <span>Ecosystem</span>
              <sup className="text-[9px] font-mono text-lime ml-0.5 -top-1 group-hover:text-lime-glow font-bold">
                01
              </sup>
            </a>
            <a
              href="#vendor-workflow"
              className="px-2.5 py-1 text-[13px] font-medium text-warm-muted hover:text-white transition-colors group flex items-center"
            >
              <span>Vendors</span>
              <sup className="text-[9px] font-mono text-lime ml-0.5 -top-1 group-hover:text-lime-glow font-bold">
                02
              </sup>
            </a>
            <a
              href="#installer-workflow"
              className="px-2.5 py-1 text-[13px] font-medium text-warm-muted hover:text-white transition-colors group flex items-center"
            >
              <span>Installers</span>
              <sup className="text-[9px] font-mono text-lime ml-0.5 -top-1 group-hover:text-lime-glow font-bold">
                03
              </sup>
            </a>
            <a
              href="#distributor-workflow"
              className="px-2.5 py-1 text-[13px] font-medium text-warm-muted hover:text-white transition-colors group flex items-center"
            >
              <span>Distributors</span>
              <sup className="text-[9px] font-mono text-lime ml-0.5 -top-1 group-hover:text-lime-glow font-bold">
                04
              </sup>
            </a>
            <a
              href="#case-studies"
              className="px-2.5 py-1 text-[13px] font-medium text-warm-muted hover:text-white transition-colors group flex items-center"
            >
              <span>Case Studies</span>
              <sup className="text-[9px] font-mono text-lime ml-0.5 -top-1 group-hover:text-lime-glow font-bold">
                05
              </sup>
            </a>
          </nav>

          {/* Right Side: Redesigned Profile + Charging Lightning Instant Access Button */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Redesigned Profile Section */}
            {currentUser ? (
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-forest-900/90 border border-white/10 hover:border-lime/40 transition-colors shadow-sm">
                <button
                  onClick={onOpenAuth}
                  className="flex items-center gap-2 pl-1 pr-2 py-1 text-left group"
                  title="Switch Persona / Account"
                >
                  {/* Avatar circle with initials */}
                  <div className="relative w-6 h-6 rounded-full bg-gradient-to-tr from-lime/30 to-forest-700 border border-lime/50 flex items-center justify-center text-[10px] font-mono font-bold text-lime shadow-sm">
                    {getInitials(currentUser.name)}
                    <span className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-lime ring-1 ring-forest-950" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-white group-hover:text-lime transition-colors leading-none truncate max-w-[110px]">
                      {currentUser.name}
                    </span>
                    <span className="text-[9px] font-mono text-warm-muted truncate max-w-[110px]">
                      {currentUser.company.split(' ')[0]}
                    </span>
                  </div>

                  <ChevronDown className="w-3 h-3 text-warm-muted group-hover:text-white transition-colors ml-0.5" />
                </button>

                <button
                  onClick={onLogout}
                  className="p-1 rounded-lg text-warm-muted hover:text-rose-400 hover:bg-forest-800/80 transition-colors"
                  title="Switch Persona / Log out"
                  aria-label="Logout"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-warm-white hover:text-white hover:bg-forest-800/80 border border-white/10 transition-colors"
              >
                <User className="w-3.5 h-3.5 text-lime" />
                <span>Sign In</span>
              </button>
            )}

            {/* Instant Access Button: Single Line + Lighter Stroke Bolt + 2.5s Charge + Animated ArrowUpRight */}
            <button
              onClick={() => onOpenDemo()}
              className="lightning-button relative group px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-forest-950 bg-lime hover:bg-lime-glow shadow-md shadow-lime/20 hover:shadow-lime/30 transition-all duration-300 flex items-center gap-2 whitespace-nowrap select-none"
            >
              {/* Charging Thunderbolt Icon (Light 1.5 stroke + 2.5s fill transition) */}
              <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
                {/* Empty base thunderbolt outline */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-forest-950"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>

                {/* Filling thunderbolt layer (fills smoothly over 2.5 seconds on hover) */}
                <svg
                  viewBox="0 0 24 24"
                  className="bolt-charge-empty absolute inset-0 w-4 h-4 text-forest-950 fill-forest-950"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>

              {/* Single line text */}
              <span className="tracking-tight whitespace-nowrap">Instant Access</span>

              {/* Animated Up-Right Arrow (animates once on hover, returns to rest on mouse leave) */}
              <ArrowUpRight className="w-4 h-4 text-forest-950 arrow-animated shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenDemo()}
              className="lightning-button px-3 py-1.5 rounded-lg text-xs font-bold text-forest-950 bg-lime whitespace-nowrap flex items-center gap-1.5"
            >
              <Zap className="w-3 h-3 fill-forest-950" />
              <span>Access</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-warm-white hover:bg-forest-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-950/95 border-b border-white/10 px-6 py-5 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            <a
              href="#ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-warm-white hover:bg-forest-800"
            >
              <span>Ecosystem</span>
              <sup className="text-[10px] font-mono text-lime">01</sup>
            </a>
            <a
              href="#vendor-workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-warm-white hover:bg-forest-800"
            >
              <span>Vendors</span>
              <sup className="text-[10px] font-mono text-lime">02</sup>
            </a>
            <a
              href="#installer-workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-warm-white hover:bg-forest-800"
            >
              <span>Installers</span>
              <sup className="text-[10px] font-mono text-lime">03</sup>
            </a>
            <a
              href="#distributor-workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-warm-white hover:bg-forest-800"
            >
              <span>Distributors</span>
              <sup className="text-[10px] font-mono text-lime">04</sup>
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-warm-white hover:bg-forest-800"
            >
              <span>Case Studies</span>
              <sup className="text-[10px] font-mono text-lime">05</sup>
            </a>
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-mono text-warm-white bg-forest-900 border border-white/10 flex items-center justify-center gap-2"
            >
              <User className="w-3.5 h-3.5 text-lime" />
              <span>{currentUser ? `${currentUser.name} (${currentUser.company.split(' ')[0]})` : 'Sign In / Switch Persona'}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="lightning-button w-full py-3 rounded-lg text-xs font-bold text-forest-950 bg-lime hover:bg-lime-glow flex items-center justify-center gap-2 whitespace-nowrap shadow-md shadow-lime/20"
            >
              <Zap className="w-4 h-4 fill-forest-950" />
              <span>Instant Access</span>
              <ArrowUpRight className="w-4 h-4 text-forest-950 arrow-animated" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
