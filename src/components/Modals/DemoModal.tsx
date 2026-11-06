import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Shield, ArrowRight, Zap, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { StakeholderRole } from '../../types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: StakeholderRole;
  onSuccessToast: (title: string, message: string) => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'vendor',
  onSuccessToast
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    mobile: '+91 ',
    company: '',
    cityState: 'Mumbai, Maharashtra',
    role: defaultRole,
    annualVolume: '5-20 MWp',
    interest: 'ALMM Wholesale Procurement & DISCOM Net-Metering'
  });
  const [copiedKey, setCopiedKey] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync role when defaultRole changes
  useEffect(() => {
    if (defaultRole) {
      setFormData(prev => ({ ...prev, role: defaultRole }));
    }
  }, [defaultRole]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B8F36B', '#FFEA00', '#FFFFFF', '#34574C']
      });
      onSuccessToast('Indian Enterprise Sandbox Activated', 'Your provisioned tenant credentials are ready below.');
    }, 700);
  };

  const handleCopyToken = () => {
    navigator.clipboard.writeText('hls_india_live_sandbox_994a82194bce81');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
    onSuccessToast('Access Token Copied', 'Paste this token into the Helios India CLI or API gateway.');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-forest-900 border border-lime/30 shadow-2xl shadow-lime/10 overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-forest-600 via-lime to-solar-yellow" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-warm-muted hover:text-white hover:bg-forest-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {step === 1 ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-lime/10 text-lime border border-lime/20">
                  <Zap className="w-3.5 h-3.5" />
                  INSTANT INDIAN ENTERPRISE SANDBOX
                </span>
                <span className="text-xs text-warm-muted font-mono">Step 1 of 2</span>
              </div>

              <h3 id="demo-modal-title" className="text-xl sm:text-2xl font-bold text-warm-white tracking-tight">
                Experience the Helios Solar Operating System
              </h3>
              <p className="text-xs text-warm-muted mt-1 leading-relaxed font-mono">
                Full access to live ALMM spot rates, automated DISCOM net-metering, and ICICI bank escrow clearance.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-warm-muted uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Anand Deshmukh"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-forest-800/80 border border-white/10 text-white placeholder-white/30 text-xs font-mono focus:outline-none focus:border-lime"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-warm-muted uppercase tracking-wider mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="anand@cleanmax.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-forest-800/80 border border-white/10 text-white placeholder-white/30 text-xs font-mono focus:outline-none focus:border-lime"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-warm-muted uppercase tracking-wider mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Deccan Solar / CleanMax"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-forest-800/80 border border-white/10 text-white placeholder-white/30 text-xs font-mono focus:outline-none focus:border-lime"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-warm-muted uppercase tracking-wider mb-1">
                      Your Ecosystem Role *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value as StakeholderRole })}
                      className="w-full px-3 py-2 rounded-lg bg-forest-800/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-lime"
                    >
                      <option value="vendor">Solar Vendor / OEM</option>
                      <option value="trader">Solar Installer & Field Crew</option>
                      <option value="enterprise">Trader & Wholesale Distributor</option>
                      <option value="consultant">Solar Consultant & Support</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-warm-muted uppercase tracking-wider mb-1">
                      City & State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pune, Maharashtra"
                      value={formData.cityState}
                      onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-forest-800/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-lime"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-warm-muted uppercase tracking-wider mb-1">
                      Annual Solar Capacity
                    </label>
                    <select
                      value={formData.annualVolume}
                      onChange={(e) => setFormData({ ...formData, annualVolume: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-forest-800/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-lime"
                    >
                      <option value="< 1 MWp">Under 1 MWp (Residential / Rooftop)</option>
                      <option value="1-10 MWp">1 - 10 MWp (C&I Factory Scale)</option>
                      <option value="10-50 MWp">10 - 50 MWp (Open Access Fleet)</option>
                      <option value="> 50 MWp">50+ MWp (Utility Solar Park)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl font-bold text-forest-950 bg-lime hover:bg-lime-glow shadow-lg shadow-lime/20 flex items-center justify-center gap-2 transition-all duration-200 text-xs sm:text-sm"
                  >
                    {isSubmitting ? (
                      <span>Provisioning Indian Tenant...</span>
                    ) : (
                      <>
                        <span>Generate Instant Credentials</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-warm-muted/60 mt-2 font-mono flex items-center justify-center gap-1.5">
                    <Shield className="w-3 h-3 text-lime" />
                    GSTIN Validated · ICICI Bank Escrow · Zero Credit Card Required
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-2 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-lime/10 border border-lime/40 flex items-center justify-center mx-auto mb-3 text-lime shadow-lg shadow-lime/20">
                <CheckCircle className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-warm-white">Indian Tenant Ready</h3>
              <p className="text-xs text-warm-muted mt-1 max-w-md mx-auto font-mono">
                Welcome aboard, <strong className="text-white">{formData.fullName || 'Partner'}</strong>. Dedicated sandbox workspace initialized for <strong className="text-white">{formData.company || 'your team'}</strong>.
              </p>

              <div className="mt-4 p-3.5 rounded-xl bg-forest-950 border border-lime/20 text-left font-mono">
                <div className="flex items-center justify-between text-xs text-warm-muted mb-1.5">
                  <span>PROVISIONED_API_BEARER:</span>
                  <span className="text-lime text-[10px] px-2 py-0.5 rounded bg-lime/10 border border-lime/20">
                    Active (India Gateway)
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-forest-900 border border-white/10">
                  <code className="text-xs text-lime overflow-hidden text-ellipsis whitespace-nowrap">
                    hls_india_live_sandbox_994a82194bce81
                  </code>
                  <button
                    onClick={handleCopyToken}
                    className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded bg-forest-800 hover:bg-forest-700 text-xs text-warm-white transition-colors"
                  >
                    {copiedKey ? <Check className="w-3.5 h-3.5 text-lime" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5 my-4 text-left font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-forest-800/60 border border-white/5">
                  <div className="text-[10px] text-warm-muted">Allocated Stock</div>
                  <div className="text-sm font-bold text-white mt-0.5">25.0 MWp</div>
                </div>
                <div className="p-2.5 rounded-lg bg-forest-800/60 border border-white/5">
                  <div className="text-[10px] text-warm-muted">ICICI Escrow</div>
                  <div className="text-sm font-bold text-lime mt-0.5">₹50 Lakhs Mock</div>
                </div>
                <div className="p-2.5 rounded-lg bg-forest-800/60 border border-white/5">
                  <div className="text-[10px] text-warm-muted">Role Pre-Set</div>
                  <div className="text-sm font-bold text-solar-yellow mt-0.5 capitalize">{formData.role}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 rounded-xl font-bold text-forest-950 bg-lime hover:bg-lime-glow transition-all text-xs sm:text-sm"
                >
                  Enter Indian Simulator
                </button>
                <button
                  onClick={() => {
                    setStep(1);
                    onClose();
                  }}
                  className="py-2.5 px-4 rounded-xl font-medium text-warm-muted hover:text-white bg-forest-800 hover:bg-forest-700 transition-colors text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
