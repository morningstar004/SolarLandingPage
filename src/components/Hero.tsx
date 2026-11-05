import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Play, 
  TrendingDown, 
  TrendingUp, 
  ShieldCheck, 
  Truck, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Activity, 
  Terminal,
  FileCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { HERO_CHART_SERIES, SOLAR_PRODUCTS } from '../data/mockData';
import { StakeholderRole } from '../types';
import { COMPANY_PARTNERS } from './CompanyLogosData';

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

const getBrandLogo = (brandName: string) => {
  const norm = brandName.toLowerCase();
  if (norm.includes('waaree')) return COMPANY_PARTNERS.find(p => p.id === 'waaree')?.logo;
  if (norm.includes('tata')) return COMPANY_PARTNERS.find(p => p.id === 'tatapower')?.logo;
  if (norm.includes('adani')) return COMPANY_PARTNERS.find(p => p.id === 'adani')?.logo;
  if (norm.includes('sungrow')) return COMPANY_PARTNERS.find(p => p.id === 'sungrow')?.logo;
  if (norm.includes('growatt')) return COMPANY_PARTNERS.find(p => p.id === 'growatt')?.logo;
  if (norm.includes('goldi')) return COMPANY_PARTNERS.find(p => p.id === 'goldi')?.logo;
  if (norm.includes('vikram')) return COMPANY_PARTNERS.find(p => p.id === 'vikram')?.logo;
  if (norm.includes('havells')) return COMPANY_PARTNERS.find(p => p.id === 'havells')?.logo;
  return null;
};

export const Hero: React.FC<HeroProps> = ({
  onOpenDemo,
  onOpenRfq,
  onSuccessToast
}) => {
  const [activeTab, setActiveTab] = useState<'spot' | 'telemetry'>('spot');
  const [activeSpecIndex, setActiveSpecIndex] = useState(0);

  // Automatically cycle through specifications every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpecIndex((prev) => (prev + 1) % SPECIFICATIONS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSimulateBid = (brand: string, watt: string) => {
    onSuccessToast(
      'Simulated Indian Spot Bid Placed',
      `Bid placed for 1.5 MWp of ${brand} (${watt}) via Mundra / Bhiwandi Depot.`
    );
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

          {/* Dynamic Specifications Rotating Showcase (3-second interval) */}
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

            {/* 3-Second Visual Progress Dash Indicators */}
            <div className="flex items-center gap-1.5 mt-2.5">
              {SPECIFICATIONS.map((spec, idx) => (
                <button
                  key={spec.badge}
                  onClick={() => setActiveSpecIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
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
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-forest-950 bg-lime hover:bg-lime-glow shadow-[0_0_35px_rgba(184,243,107,0.35)] transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base"
            >
              <span>Request Indian Tenant Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('features');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-warm-white bg-forest-800/80 hover:bg-forest-700/80 border border-white/10 hover:border-lime/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
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

        {/* Live Product Interactive UI Mockup - Simplified for Indian Solar Vendors & B2B Buyers
        <div className="mt-8 sm:mt-10 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-lime/20 via-solar-yellow/10 to-lime/20 rounded-2xl blur-xl opacity-60 pointer-events-none" />

          <div className="relative rounded-2xl bg-forest-900 border border-lime/30 shadow-2xl shadow-black overflow-hidden backdrop-blur-2xl">
            
            {/* Top Header Bar * /}
            <div className="px-5 py-3 bg-forest-950/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />
                <span className="text-xs font-mono text-warm-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-lime" />
                  <span>Verified Indian Solar Portal · GST & ALMM Integrated</span>
                </span>
              </div>

              {/* Intuitive 2-Tab Switcher with Smooth Sliding Indicator Pill * /}
              <div className="relative flex items-center p-1 rounded-xl bg-forest-900 border border-white/10 select-none">
                {/* Animated sliding indicator pill * /}
                <div
                  className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg bg-lime transition-all duration-300 ease-out shadow-sm shadow-lime/20 ${
                    activeTab === 'spot' ? 'left-1' : 'left-[calc(50%+2px)]'
                  }`}
                />
                <button
                  onClick={() => setActiveTab('spot')}
                  className={`relative z-10 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 ${
                    activeTab === 'spot'
                      ? 'text-forest-950 font-bold'
                      : 'text-warm-muted hover:text-white'
                  }`}
                >
                  1. Buy Panels & Inverters (Wholesale)
                </button>
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`relative z-10 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 ${
                    activeTab === 'telemetry'
                      ? 'text-forest-950 font-bold'
                      : 'text-warm-muted hover:text-white'
                  }`}
                >
                  2. Solar Generation & Bill Savings
                </button>
              </div>

              {/* Live Warehouse Status * /}
              <div className="hidden md:flex items-center gap-2 text-xs font-mono text-warm-muted">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="text-warm-white">Depots Active:</span>
                <span className="text-lime font-bold">Bhiwandi, Mundra & NCR</span>
              </div>
            </div>

            {/* Smooth Tab Content Area * /}
            <div className="relative overflow-hidden w-full">
              {/* Tab 1: Buy Panels & Inverters (Wholesale) * /}
              <div
                className={`w-full p-5 sm:p-6 transition-all duration-300 ease-out ${
                  activeTab === 'spot'
                    ? 'opacity-100 translate-x-0 relative pointer-events-auto'
                    : 'opacity-0 -translate-x-6 absolute inset-0 pointer-events-none'
                }`}
              >
                {/* Friendly Hardware Table * /}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/10 text-warm-muted/70 uppercase">
                        <th className="pb-2.5 font-medium w-24 sm:w-28"></th>
                        <th className="pb-2.5 font-medium">Brand & Product Name</th>
                        <th className="pb-2.5 font-medium">Price per Watt</th>
                        <th className="pb-2.5 font-medium">Stock Available</th>
                        <th className="pb-2.5 font-medium text-right">Order Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {SOLAR_PRODUCTS.slice(0, 4).map((product) => (
                        <tr
                          key={product.id}
                          className="hover:bg-forest-800/50 transition-colors group"
                        >
                          <td className="py-3 pr-2">
                            <div className="w-20 sm:w-24 h-9 sm:h-10 px-2 py-1 rounded-xl bg-forest-950/80 border border-white/10 flex items-center justify-center group-hover:border-lime/40 transition-colors">
                              {getBrandLogo(product.brand) || (
                                <span className="text-[10px] font-mono font-bold text-warm-white">{product.brand}</span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 font-sans">
                            <div className="font-semibold text-warm-white group-hover:text-lime transition-colors">
                              {product.brand} {product.model}
                            </div>
                            {/* Govt Approval under Product - No Eff/Warranty clutter * /}
                            <div className="mt-1">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-forest-950 border border-lime/30 text-[10px] text-lime font-bold font-mono">
                                <CheckCircle2 className="w-3 h-3 text-lime" />
                                {product.almmListed ? 'ALMM List-I (Govt Approved)' : 'BIS Certified'}
                              </span>
                            </div>
                          </td>
                          <td className="py-3">
                            <div className="font-bold text-white text-sm">
                              {product.pricePerWattInr}
                            </div>
                            <div className="text-[10px] text-lime flex items-center gap-0.5">
                              <span>+ 18% GST Input Credit</span>
                            </div>
                          </td>
                          <td className="py-3 text-warm-white font-bold">
                            {product.availableMw} MWp
                            <span className="block text-[10px] text-warm-muted/70 font-normal">Ready to Ship</span>
                          </td>
                          <td className="py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => onOpenRfq(product)}
                                className="px-2.5 py-1 rounded-md bg-lime/10 hover:bg-lime text-lime hover:text-forest-950 font-sans font-semibold text-xs border border-lime/30 transition-all"
                              >
                                Get Price
                              </button>
                              <button
                                onClick={() => handleSimulateBid(product.brand, product.pricePerWattInr)}
                                className="px-2 py-1 rounded-md bg-forest-800 hover:bg-forest-700 text-warm-white text-xs border border-white/10 transition-colors"
                              >
                                Book Stock
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tab 2: Solar Generation & Electricity Bill Savings * /}
              <div
                className={`w-full p-5 sm:p-6 transition-all duration-300 ease-out ${
                  activeTab === 'telemetry'
                    ? 'opacity-100 translate-x-0 relative pointer-events-auto'
                    : 'opacity-0 translate-x-6 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        Solar Electricity Generated vs. Factory Power Use
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime/10 text-lime border border-lime/20 font-bold">
                        14.2 GW POWERING FACTORIES
                      </span>
                    </div>
                    <p className="text-xs text-warm-muted mt-0.5">
                      See how much clean electricity is produced during sunshine hours to cut your expensive electricity bill.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-lime" />
                      <span className="text-warm-white">Solar Power Generated (GW)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-solar-yellow" />
                      <span className="text-warm-muted">Factory Power Consumed (GW)</span>
                    </div>
                  </div>
                </div>

                <div className="h-56 w-full mt-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={HERO_CHART_SERIES} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorGen" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#B8F36B" stopOpacity={0.35}/>
                          <stop offset="95%" stopColor="#B8F36B" stopOpacity={0.0}/>
                        </linearGradient>
                        <linearGradient id="colorGrid" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FFEA00" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#FFEA00" stopOpacity={0.0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="time" stroke="#4D7A6C" fontSize={11} tickLine={false} fontFamily="monospace" />
                      <YAxis stroke="#4D7A6C" fontSize={11} tickLine={false} fontFamily="monospace" unit=" GW" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0A120F', 
                          borderColor: 'rgba(184, 243, 107, 0.3)',
                          borderRadius: '8px',
                          fontFamily: 'monospace',
                          fontSize: '12px'
                        }} 
                      />
                      <Area type="monotone" dataKey="generation" stroke="#B8F36B" strokeWidth={2.5} fillOpacity={1} fill="url(#colorGen)" />
                      <Area type="monotone" dataKey="gridFlow" stroke="#FFEA00" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorGrid)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Bottom Buyer Safety & Escrow Protection Strip * /}
            <div className="px-5 py-3 bg-forest-950 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-warm-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime shrink-0" />
                <span className="text-white font-medium">100% Payment Safety</span>
                <span className="text-lime font-semibold font-mono text-[11px] px-2 py-0.5 rounded bg-lime/10 border border-lime/20">
                  ICICI Escrow Protected
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-lime font-semibold">✓ 18% GST Input Invoice</span>
                <span className="text-warm-muted">·</span>
                <span className="text-white">e-Way Bill Ready</span>
              </div>
            </div>

          </div>
        </div>
        */}

      </div>
    </section>
  );
};
