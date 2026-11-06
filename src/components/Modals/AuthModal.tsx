import React, { useState, useEffect } from 'react';
import { X, Shield, ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';
import { StakeholderRole } from '../../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (title: string, message: string) => void;
  currentUser: { name: string; role: StakeholderRole; company: string } | null;
  onSelectUser: (user: { name: string; role: StakeholderRole; company: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccessToast,
  currentUser,
  onSelectUser
}) => {
  const [activeTab, setActiveTab] = useState<'signin' | 'persona'>('persona');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle Escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const demoPersonas: { name: string; role: StakeholderRole; roleLabel: string; company: string; metric: string }[] = [
    {
      name: "Rajeshwar Hegde",
      role: "vendor",
      roleLabel: "Solar EPC & Rooftop VP",
      company: "Deccan Solar (Bengaluru)",
      metric: "38 Active Sites"
    },
    {
      name: "Sneha Parikh",
      role: "trader",
      roleLabel: "Mundra Port Trading Director",
      company: "Gujarat Solar Hub (Mundra)",
      metric: "48.2 MWp Depot Stock"
    },
    {
      name: "Dr. K. Swaminathan, CE",
      role: "consultant",
      roleLabel: "Lead Power Systems Advisor",
      company: "Vidyut Clean Advisory (Chennai)",
      metric: "142 MWp Audited"
    },
    {
      name: "Praveen Kothari",
      role: "enterprise",
      roleLabel: "Executive Director",
      company: "Kothari Syntex (Surat)",
      metric: "4.2 MWp Factory Fleet"
    }
  ];

  const handleSelectPersona = (p: typeof demoPersonas[0]) => {
    onSelectUser({ name: p.name, role: p.role, company: p.company });
    onSuccessToast(`Authenticated as ${p.name}`, `Switched role view to ${p.roleLabel} at ${p.company}`);
    onClose();
  };

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectUser({
      name: email.split('@')[0] || 'Indian Partner',
      role: 'vendor',
      company: 'Indian Solar Enterprise'
    });
    onSuccessToast('Session Initialized', `Authenticated as ${email}`);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-forest-900 border border-lime/30 shadow-2xl overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-forest-600 via-lime to-solar-yellow" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-warm-muted hover:text-white hover:bg-forest-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-lime/10 text-lime border border-lime/20">
              <Shield className="w-3.5 h-3.5" />
              GSTN & NATIONAL PORTAL SSO
            </span>
          </div>

          <h3 id="auth-modal-title" className="text-xl sm:text-2xl font-bold text-warm-white">Access Helios Grid India</h3>
          <p className="text-xs text-warm-muted mt-0.5 font-mono">
            Choose an Indian stakeholder persona or sign in with corporate credentials.
          </p>

          <div className="flex border-b border-white/10 mt-4">
            <button
              onClick={() => setActiveTab('persona')}
              className={`pb-2 text-xs font-mono font-medium uppercase tracking-wider transition-colors border-b-2 mr-6 ${
                activeTab === 'persona'
                  ? 'border-lime text-lime font-bold'
                  : 'border-transparent text-warm-muted hover:text-white'
              }`}
            >
              Indian Stakeholder Switcher
            </button>
            <button
              onClick={() => setActiveTab('signin')}
              className={`pb-2 text-xs font-mono font-medium uppercase tracking-wider transition-colors border-b-2 ${
                activeTab === 'signin'
                  ? 'border-lime text-lime font-bold'
                  : 'border-transparent text-warm-muted hover:text-white'
              }`}
            >
              GSTIN / Corporate Sign In
            </button>
          </div>

          {activeTab === 'persona' ? (
            <div className="mt-4 space-y-2.5">
              <p className="text-[11px] text-warm-muted font-mono">
                Select an Indian persona to experience the tailored workflow:
              </p>
              {demoPersonas.map((persona) => {
                const isCurrent = currentUser?.name === persona.name;
                return (
                  <div
                    key={persona.name}
                    onClick={() => handleSelectPersona(persona)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isCurrent
                        ? 'bg-lime/10 border-lime text-white'
                        : 'bg-forest-800/60 border-white/10 hover:border-lime/40 hover:bg-forest-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-semibold text-white">{persona.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-forest-950 text-lime border border-lime/20 uppercase">
                          {persona.role}
                        </span>
                      </div>
                      <div className="text-[11px] text-warm-muted font-mono mt-0.5">
                        {persona.roleLabel} · {persona.company}
                      </div>
                    </div>

                    <div className="text-right flex items-center gap-2">
                      <span className="hidden sm:inline-block text-[11px] font-mono text-warm-muted">
                        {persona.metric}
                      </span>
                      {isCurrent ? (
                        <CheckCircle2 className="w-4 h-4 text-lime" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-warm-muted/60" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <form onSubmit={handleCustomLogin} className="mt-4 space-y-3 font-mono text-xs">
              <div>
                <label className="block text-[11px] text-warm-muted uppercase tracking-wider mb-1">
                  Corporate Work Email / GSTIN
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 27AAACG0561F1Z8 or name@company.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-forest-800 border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-lime"
                />
              </div>

              <div>
                <label className="block text-[11px] text-warm-muted uppercase tracking-wider mb-1">
                  Passkey / OTP
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-forest-800 border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-lime"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-forest-950 bg-lime hover:bg-lime-glow transition-all duration-200 mt-2 flex items-center justify-center gap-2 text-xs"
              >
                <UserCheck className="w-4 h-4" />
                <span>Sign In via Indian Grid Gateway</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
