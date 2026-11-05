import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Layers,
  Warehouse,
  Briefcase,
  Store,
  CheckCircle2,
  ChevronRight,
  Users,
  HardHat,
  Zap,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { StakeholderRole } from '../types';

interface EcosystemProps {
  onSelectRole: (role: StakeholderRole) => void;
}

const PERSONAS = [
  {
    id: 'vendor' as StakeholderRole,
    label: 'Solar Vendor',
    icon: Layers,
    accentColor: '#B8F36B',
    image:
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=900&q=80',
    headline: 'Solar Vendors',
    subheadline: 'List. Sell. Scale Nationally.',
    description:
      'List your solar panels, inverters, and BOS components on India\'s most active B2B marketplace. Reach verified EPCs, installers, and factory buyers across all 28 states — with GST-compliant invoicing, ALMM verification badges, and escrow-protected payments built in.',
    benefits: [
      'ALMM List-I Verification Badge on every listing',
      'Reach 28,400+ verified B2B buyers instantly',
      'Escrow-protected payments — zero default risk',
      'Auto-generated GST invoices & e-Way bills',
      'Real-time inventory & order tracking dashboard',
    ],
    stats: [
      { label: 'Active Listings', value: '12,400+', icon: TrendingUp },
      { label: 'Avg. Fulfilment', value: '3.2 days', icon: Zap },
      { label: 'Payment Safety', value: '100%', icon: ShieldCheck },
    ],
    cta: 'Start Selling',
    tag: 'For Module & Inverter Manufacturers',
  },
  {
    id: 'trader' as StakeholderRole,
    label: 'Installer & Crew',
    icon: HardHat,
    accentColor: '#FFEA00',
    image:
      'https://img.freepik.com/premium-photo/indian-worker-installs-solar-panels-concept-renewable-energy_255667-54481.jpg',
    headline: 'Solar Installers & Field Crews',
    subheadline: 'Find Jobs. Build Your Crew. Get Certified.',
    description:
      'The platform built for the people who actually get on rooftops. Browse and apply for installation jobs posted by vendors and EPCs, assemble your crew, coordinate tool requirements and safety gear, track every project from dispatch to commissioning — and build a verified portfolio that earns you more work.',
    benefits: [
      'Browse live rooftop installation jobs & apply instantly',
      'Build your crew profile — add members, skills & certifications',
      'Safety checklist, PPE tracking & site coordination tools',
      'Showcase completed installations with photos & client ratings',
      'Track material orders, delivery status & tool requirements',
    ],
    stats: [
      { label: 'Jobs Posted', value: '4,600+', icon: Zap },
      { label: 'Certified Crews', value: '2,100+', icon: TrendingUp },
      { label: 'Avg. Crew Rating', value: '4.7★', icon: ShieldCheck },
    ],
    cta: 'Find Jobs',
    tag: 'For Installers, Electricians & Crew Leads',
  },
  {
    id: 'enterprise' as StakeholderRole,
    label: 'Traders & Distributors',
    icon: Store,
    accentColor: '#60D4A0',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    headline: 'Solar Product Traders & Distributors',
    subheadline: 'Move Container Lots. Zero Default Risk.',
    description:
      'Liquidate bulk module allocations from Giga-factories and bonded port warehouses with ICICI Bank milestone escrow protecting every transaction. List container lots, receive bids from verified EPCs, and dispatch with auto-generated e-Way bills — all within 72 hours.',
    benefits: [
      'ICICI Bank escrow on every bulk transaction',
      'Spot bidding from 3,000+ active EPC buyers',
      'Auto e-Way bill generation on dispatch',
      'Real-time container yard availability at Mundra & JNPT',
      'Bulk GST Input Credit reconciliation',
    ],
    stats: [
      { label: 'Escrow Protected', value: '₹4,850 Cr', icon: ShieldCheck },
      { label: 'Active Traders', value: '3,200+', icon: TrendingUp },
      { label: 'Dispatch Window', value: '72 hrs', icon: Zap },
    ],
    cta: 'List Stock Now',
    tag: 'For Port Stockists & Wholesale Distributors',
  },
  {
    id: 'consultant' as StakeholderRole,
    label: 'Support & Guidance',
    icon: Briefcase,
    accentColor: '#7DD3FC',
    image:
      'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80',
    headline: 'Expert Consultation & Support',
    subheadline: 'Buy Smart. Sell Confidently. Get Help Anytime.',
    description:
      'Not sure which panel suits your rooftop? Need help choosing between Waaree, Tata Power Solar, or Adani modules? Our dedicated solar consultants and product specialists walk you through every decision — from product selection and pricing to warranty terms and installation guidance. Backed by partnerships with India\'s leading manufacturers.',
    benefits: [
      'One-on-one guidance from certified solar product specialists',
      'Compare products from Waaree, Tata Power, Adani, Vikram & more',
      'Live chat, call-back & WhatsApp support channels',
      'Post-purchase installation support & warranty assistance',
      'Dedicated account managers for bulk & enterprise orders',
    ],
    stats: [
      { label: 'Avg. Response', value: '< 2 min', icon: Zap },
      { label: 'Customer Satisfaction', value: '98.4%', icon: TrendingUp },
      { label: 'OEM Partners', value: '24+', icon: ShieldCheck },
    ],
    cta: 'Talk to an Expert',
    tag: 'Backed by Waaree, Tata Power Solar, Adani & More',
  },
];

export const EcosystemOverview: React.FC<EcosystemProps> = ({ onSelectRole }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Intersection Observer — trigger entrance animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Auto-cycle through tabs every 5 s */
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PERSONAS.length);
    }, 5000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, []);

  const handleSelect = (idx: number) => {
    if (idx === activeIndex) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setAnimating(false);
    }, 220);
  };

  const persona = PERSONAS[activeIndex];
  const Icon = persona.icon;

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="min-h-screen py-16 lg:py-24 flex flex-col justify-center snap-start relative border-b border-white/10 bg-forest-900 overflow-hidden"
    >
      {/* Subtle dot background */}
      <div className="absolute inset-0 solar-dots-bg opacity-20 pointer-events-none" />

      {/* Accent glow behind active image */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: persona.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* ── Section Header ── */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-warm-white tracking-tight leading-tight">
            One Platform.{' '}
            <span className="text-lime">Every Solar Professional.</span>
          </h2>
          <p className="mt-3 text-sm text-warm-muted max-w-2xl mx-auto leading-relaxed font-mono">
            Whether you manufacture, install, trade, or consult — SolarPort is built for your workflow,
            compliance needs, and payment security.
          </p>
        </div>

        {/* ── Tab Pills ── */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          {PERSONAS.map((p, idx) => {
            const TabIcon = p.icon;
            const isActive = idx === activeIndex;
            return (
              <button
                key={p.id}
                onClick={() => handleSelect(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${isActive
                    ? 'text-forest-950 border-transparent shadow-lg scale-105'
                    : 'bg-forest-950/60 border-white/10 text-warm-muted hover:border-white/30 hover:text-white'
                  }`}
                style={isActive ? { backgroundColor: p.accentColor, boxShadow: `0 4px 20px -4px ${p.accentColor}66` } : {}}
              >
                <TabIcon className="w-3.5 h-3.5" />
                {p.label}
              </button>
            );
          })}
        </div>

        {/* ── Main Split Layout ── */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >

          {/* LEFT — Image Panel */}
          <div
            className={`relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 min-h-[360px] lg:min-h-[500px] ${animating ? 'opacity-0 scale-[0.97]' : 'opacity-100 scale-100'
              }`}
          >
            {/* Photo */}
            <img
              key={persona.id + '-img'}
              src={persona.image}
              alt={persona.headline}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('photo-1508514177221-188b1cf16e9d')) {
                  target.src = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80';
                }
              }}
            />

            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950/60 via-transparent to-transparent" />

            {/* Floating tag pill */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold bg-forest-950/80 backdrop-blur-md border border-white/10 text-warm-muted">
              {persona.tag}
            </div>

            {/* Stats strip at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="grid grid-cols-3 gap-3">
                {persona.stats.map((stat, i) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-forest-950/80 backdrop-blur-md border border-white/10 text-center"
                    >
                      <StatIcon className="w-3.5 h-3.5 mx-auto mb-1" style={{ color: persona.accentColor }} />
                      <div className="text-sm font-extrabold text-white leading-none">{stat.value}</div>
                      <div className="text-[10px] font-mono text-warm-muted mt-0.5 leading-tight">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — Info Panel */}
          <div
            className={`flex flex-col justify-center transition-all duration-300 ${animating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
              }`}
          >
            {/* Icon + Headline */}
            <div className="flex items-center gap-3.5 mb-3">
              <div
                className="p-3 rounded-2xl shrink-0"
                style={{ backgroundColor: `${persona.accentColor}22`, border: `1px solid ${persona.accentColor}44` }}
              >
                <Icon className="w-6 h-6" style={{ color: persona.accentColor }} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {persona.headline}
              </h3>
            </div>

            {/* Subheadline with accent dot */}
            <p className="text-base sm:text-lg font-semibold text-warm-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: persona.accentColor }} />
              {persona.subheadline}
            </p>

            {/* Description */}
            <p className="text-sm text-warm-muted leading-relaxed mb-5">
              {persona.description}
            </p>

            {/* Benefits list */}
            <ul className="space-y-2.5 mb-7">
              {persona.benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-warm-white"
                  style={{
                    transitionDelay: `${i * 40}ms`,
                    transition: 'opacity 0.4s, transform 0.4s',
                    opacity: animating ? 0 : 1,
                    transform: animating ? 'translateX(8px)' : 'translateX(0)',
                  }}
                >
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: persona.accentColor }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  onSelectRole(persona.id);
                  const el = document.getElementById('pathways');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-forest-950 transition-all hover:scale-105 active:scale-100"
                style={{
                  backgroundColor: persona.accentColor,
                  boxShadow: `0 4px 20px -4px ${persona.accentColor}80`,
                }}
              >
                {persona.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Progress indicator dots */}
            <div className="flex items-center gap-2 mt-8">
              {PERSONAS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? '28px' : '8px',
                    backgroundColor: i === activeIndex ? persona.accentColor : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
