import React, { useState } from 'react';
import { 
  Warehouse, 
  ShieldCheck, 
  Truck, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Zap, 
  Building2, 
  Clock, 
  MapPin, 
  FileCheck, 
  Lock, 
  TrendingUp, 
  ChevronRight, 
  Download, 
  ExternalLink,
  Layers,
  Sparkles,
  PackageCheck
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { HERO_CHART_SERIES, SOLAR_PRODUCTS } from '../data/mockData';
import { StakeholderRole, SolarProduct } from '../types';
import { COMPANY_PARTNERS } from './CompanyLogosData';

interface DistributorWorkflowProps {
  onSuccessToast: (title: string, message: string) => void;
  onOpenDemo: (role?: StakeholderRole) => void;
  onOpenRfq?: (product?: SolarProduct) => void;
}

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

export const DistributorWorkflow: React.FC<DistributorWorkflowProps> = ({ 
  onSuccessToast, 
  onOpenDemo,
  onOpenRfq 
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev'>('next');
  const [heroMockupTab, setHeroMockupTab] = useState<'spot' | 'telemetry'>('spot');

  const DISTRIBUTOR_SLIDES = [
    {
      id: 'catalog-order',
      title: 'Wholesale Catalog & Orders',
      subtitle: 'Order Desk',
      icon: Warehouse,
      badgeIcon: PackageCheck,
      tagline: 'Publish factory-gate inventory & receive direct EPC bookings with verified GST credits.',
    },
    {
      id: 'escrow-lock',
      title: 'Escrow Securitization',
      subtitle: 'Payment Lock',
      icon: ShieldCheck,
      badgeIcon: Lock,
      tagline: 'Eliminate 90-day credit risk: buyer funds are locked in bank escrow before pallets leave the yard.',
    },
    {
      id: 'cfs-dispatch',
      title: 'CFS Port Logistics',
      subtitle: 'e-Way Bills',
      icon: Truck,
      badgeIcon: FileCheck,
      tagline: 'Automate NIC e-Way bills, transport telematics, and pallet flash-test barcode matching.',
    },
    {
      id: 'depot-analytics',
      title: 'Multi-Depot Inventory',
      subtitle: 'Stock & Pricing',
      icon: BarChart3,
      badgeIcon: Layers,
      tagline: 'Track bonded container stock across Bhiwandi, Mundra & NCR with dynamic volume pricing.',
    }
  ];

  const currentSlide = DISTRIBUTOR_SLIDES[activeSlideIndex];

  const handleTabChange = (index: number) => {
    if (index === activeSlideIndex || isTransitioning) return;
    setTransitionDirection(index > activeSlideIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlideIndex(index);
      setIsTransitioning(false);
    }, 180);
  };

  const handleNextSlide = () => {
    if (isTransitioning) return;
    const nextIdx = (activeSlideIndex + 1) % DISTRIBUTOR_SLIDES.length;
    setTransitionDirection('next');
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlideIndex(nextIdx);
      setIsTransitioning(false);
    }, 180);
    onSuccessToast(
      `Distributor Platform: ${DISTRIBUTOR_SLIDES[nextIdx].title}`,
      DISTRIBUTOR_SLIDES[nextIdx].subtitle
    );
  };

  const handleSimulateBid = (brand: string, watt: string) => {
    onSuccessToast(
      'Wholesale Stock Reservation Placed',
      `Locked 1.5 MWp allocation of ${brand} (${watt}) via Bhiwandi / Mundra CFS Depot.`
    );
  };

  const handleSimulateRfq = (brand: string) => {
    onSuccessToast(
      'Wholesale Price Requested',
      `Sent formal quotation request for bulk container allocation of ${brand}.`
    );
  };

  return (
    <section 
      id="distributor-workflow" 
      className="min-h-screen py-12 lg:py-16 flex flex-col justify-center snap-start relative border-b border-white/10 bg-forest-950 overflow-hidden"
    >
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-forest-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        
        {/* ========================================================= */}
        {/* CENTERED SECTION HEADER */}
        {/* ========================================================= */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-warm-white tracking-tight leading-tight">
            Built for Solar Hardware Distributors.{' '}
            <span className="text-lime">List Port Stock, Lock Escrow Orders & Automate Transit.</span>
          </h2>
          <p className="text-xs sm:text-sm text-warm-muted mt-2 sm:mt-2.5 leading-relaxed font-sans max-w-2xl mx-auto">
            List factory-gate ALMM stock across bonded port yards, secure upfront escrow orders, and automate GST e-Way bills.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 4-SLIDE NAVIGATION BAR (Clean Icons, No Blinking, No Step Text) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
          {DISTRIBUTOR_SLIDES.map((slide, idx) => {
            const isActive = idx === activeSlideIndex;
            const Icon = slide.icon;
            const BadgeIcon = slide.badgeIcon;
            return (
              <button
                key={slide.id}
                onClick={() => handleTabChange(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex items-center gap-3 group ${
                  isActive
                    ? 'bg-forest-900 border-lime shadow-lg shadow-lime/10 scale-[1.01]'
                    : 'bg-forest-900/40 border-white/5 hover:border-white/20 hover:bg-forest-900/60'
                }`}
              >
                {/* Smooth active indicator line */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-lime transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`} 
                />

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isActive 
                    ? 'bg-lime text-forest-950 font-bold shadow-md shadow-lime/20' 
                    : 'bg-forest-950 text-warm-muted group-hover:text-white border border-white/10'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className={`font-semibold tracking-wide transition-colors ${isActive ? 'text-lime' : 'text-warm-muted'}`}>
                      {slide.subtitle}
                    </span>
                    <BadgeIcon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-lime' : 'text-warm-muted/60'}`} />
                  </div>
                  <div className={`text-xs sm:text-sm font-bold truncate mt-0.5 transition-colors ${isActive ? 'text-white' : 'text-warm-muted group-hover:text-white'}`}>
                    {slide.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* SLIDE CONTENT CONTAINER */}
        {/* ========================================================= */}
        <div className="rounded-3xl bg-forest-950 p-4 sm:p-6 shadow-2xl relative overflow-hidden min-h-[460px] flex flex-col justify-between">

          {/* Smooth Animated Slide Content Wrapper */}
          <div
            className={`transition-all duration-300 ease-out transform flex-1 flex flex-col justify-between ${
              isTransitioning
                ? transitionDirection === 'next'
                  ? 'opacity-0 translate-x-10 scale-[0.99]'
                  : 'opacity-0 -translate-x-10 scale-[0.99]'
                : 'opacity-100 translate-x-0 scale-100'
            }`}
          >

            {/* Slide Header Strip */}
            <div className="pb-3 mb-4 border-b border-white/10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              {currentSlide.title}
            </h3>
            <p className="text-xs sm:text-sm text-warm-muted mt-1 font-sans leading-relaxed">
              {currentSlide.tagline}
            </p>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              SLIDE 1: Wholesale Catalog & Real-Time Trading Portal 
              (HERO.TSX MOCKUP L215-L441 INTEGRATION)
              ───────────────────────────────────────────────────────────── */}
          {activeSlideIndex === 0 && (
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-lime/20 via-solar-yellow/10 to-lime/20 rounded-2xl blur-xl opacity-60 pointer-events-none" />

              <div className="relative rounded-2xl bg-forest-900 border border-lime/30 shadow-2xl shadow-black overflow-hidden backdrop-blur-2xl">
                
                {/* Top Header Bar */}
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
                      <span>Distributor Portal · Live Wholesale Stock &amp; Dispatch Desk</span>
                    </span>
                  </div>

                  {/* Intuitive 2-Tab Switcher with Smooth Sliding Indicator Pill */}
                  <div className="relative flex items-center p-1 rounded-xl bg-forest-900 border border-white/10 select-none">
                    <div
                      className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg bg-lime transition-all duration-300 ease-out shadow-sm shadow-lime/20 ${
                        heroMockupTab === 'spot' ? 'left-1' : 'left-[calc(50%+2px)]'
                      }`}
                    />
                    <button
                      onClick={() => setHeroMockupTab('spot')}
                      className={`relative z-10 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 ${
                        heroMockupTab === 'spot'
                          ? 'text-forest-950 font-bold'
                          : 'text-warm-muted hover:text-white'
                      }`}
                    >
                      1. Wholesale Inventory &amp; Orders
                    </button>
                    <button
                      onClick={() => setHeroMockupTab('telemetry')}
                      className={`relative z-10 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 ${
                        heroMockupTab === 'telemetry'
                          ? 'text-forest-950 font-bold'
                          : 'text-warm-muted hover:text-white'
                      }`}
                    >
                      2. Regional Generation &amp; Demand
                    </button>
                  </div>

                  {/* Live Warehouse Status */}
                  <div className="hidden md:flex items-center gap-2 text-xs font-mono text-warm-muted">
                    <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                    <span className="text-warm-white">Depots Active:</span>
                    <span className="text-lime font-bold">Bhiwandi, Mundra &amp; NCR</span>
                  </div>
                </div>

                {/* Smooth Tab Content Area */}
                <div className="relative overflow-hidden w-full">
                  {/* Tab 1: Buy Panels & Inverters (Wholesale) */}
                  <div
                    className={`w-full p-4 sm:p-6 transition-all duration-300 ease-out ${
                      heroMockupTab === 'spot'
                        ? 'opacity-100 translate-x-0 relative pointer-events-auto'
                        : 'opacity-0 -translate-x-6 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead>
                          <tr className="border-b border-white/10 text-warm-muted/70 uppercase">
                            <th className="pb-2.5 font-medium w-24 sm:w-28"></th>
                            <th className="pb-2.5 font-medium">Brand &amp; Product Name</th>
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
                                    onClick={() => onOpenRfq ? onOpenRfq(product) : handleSimulateRfq(product.brand)}
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

                  {/* Tab 2: Solar Generation & Demand Telemetry */}
                  <div
                    className={`w-full p-4 sm:p-6 transition-all duration-300 ease-out ${
                      heroMockupTab === 'telemetry'
                        ? 'opacity-100 translate-x-0 relative pointer-events-auto'
                        : 'opacity-0 translate-x-6 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-white/10">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-white">
                            Regional Solar Generation vs. Industrial Power Demand
                          </h3>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime/10 text-lime border border-lime/20 font-bold">
                            14.2 GW CONNECTED
                          </span>
                        </div>
                        <p className="text-xs text-warm-muted mt-0.5">
                          Live power feed tracking industrial off-take curves to forecast upcoming distributor pallet demand.
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-xs font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-lime" />
                          <span className="text-warm-white">Solar Power Generated (GW)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-solar-yellow" />
                          <span className="text-warm-muted">Industrial Consumed (GW)</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-56 w-full mt-3">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={HERO_CHART_SERIES} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="distColorGen" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#B8F36B" stopOpacity={0.35}/>
                              <stop offset="95%" stopColor="#B8F36B" stopOpacity={0.0}/>
                            </linearGradient>
                            <linearGradient id="distColorGrid" x1="0" y1="0" x2="0" y2="1">
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
                          <Area type="monotone" dataKey="generation" stroke="#B8F36B" strokeWidth={2.5} fillOpacity={1} fill="url(#distColorGen)" />
                          <Area type="monotone" dataKey="gridFlow" stroke="#FFEA00" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#distColorGrid)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Bottom Buyer Safety & Escrow Protection Strip */}
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
          )}

          {/* ─────────────────────────────────────────────────────────────
              SLIDE 2: Escrow Securitization & 100% Payment Lock
              ───────────────────────────────────────────────────────────── */}
          {activeSlideIndex === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left: Escrow Ledger Visual Card */}
              <div className="lg:col-span-7 rounded-2xl bg-forest-900/90 border border-lime/30 p-5 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-lime" />
                    <span className="text-xs font-mono font-bold text-white uppercase">ICICI Bank Programmatic Escrow Ledger</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime/10 text-lime border border-lime/25 font-bold">
                    Zero Default Risk
                  </span>
                </div>

                {/* 3 Active Securitized POs */}
                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-forest-950 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-white font-bold">Deccan Solar EPC • 1.2 MWp Waaree TOPCon</div>
                      <div className="text-[11px] text-warm-muted mt-0.5">PO #DS-9902 · Bhiwandi Port Depot</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lime font-bold text-sm">₹2.16 Cr Held</div>
                      <span className="text-[10px] text-emerald-400 font-bold">100% Funded · Ready to Dispatch</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-forest-950 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-white font-bold">Surat CleanTech EPC • 500 kWp Sungrow Hybrid</div>
                      <div className="text-[11px] text-warm-muted mt-0.5">PO #SC-4412 · Mundra CFS Yard</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-sm">₹62.5 Lakh Held</div>
                      <span className="text-[10px] text-lime font-bold">Tranche 1 Disbursed (₹31.2L)</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-forest-950 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-white font-bold">NCR Agro Infra • 2.5 MWp Adani Bifacial</div>
                      <div className="text-[11px] text-warm-muted mt-0.5">PO #NA-1092 · Dadri CFS Terminal</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lime font-bold text-sm">₹4.45 Cr Held</div>
                      <span className="text-[10px] text-solar-yellow font-bold">Transit e-Way Bill Active</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-warm-muted font-mono">Total Escrow Funds Secured:</span>
                  <span className="text-base font-extrabold text-lime font-mono">₹7.235 Crore</span>
                </div>
              </div>

              {/* Right: Distributor Benefits */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-forest-900/60 border border-white/10">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                    <span>No More 90-Day Credit Exposure</span>
                  </h4>
                  <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                    Stop financing EPCs on unsecured credit notes. Buyer project funds are deposited into ICICI Bank escrow before you allocate yard inventory.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-forest-900/60 border border-white/10">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                    <span>Programmatic Milestone Releases</span>
                  </h4>
                  <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                    Payouts disburse automatically upon transit receipt and DISCOM verification, eliminating delays and negotiation friction.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-forest-900/60 border border-white/10">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                    <span>Instant RTGS / NEFT Settlement</span>
                  </h4>
                  <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                    Released escrow tranches settle directly to your corporate current account within 2 hours of electronic receipt sign-off.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SLIDE 3: CFS Port Yard Logistics & Instant e-Way Bills
              ───────────────────────────────────────────────────────────── */}
          {activeSlideIndex === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left: Interactive Logistics Mockup */}
              <div className="lg:col-span-7 rounded-2xl bg-forest-900/90 border border-lime/30 p-5 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-solar-yellow" />
                    <span className="text-xs font-mono font-bold text-white uppercase">NIC National Portal e-Way Bill &amp; CFS Desk</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-solar-yellow/10 text-solar-yellow border border-solar-yellow/25 font-bold">
                    1-Click Dispatch
                  </span>
                </div>

                {/* Active Transit Dossier */}
                <div className="mt-4 p-4 rounded-xl bg-forest-950 border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-warm-white">
                    <span className="text-warm-muted">Consignment #CFS-MND-99201</span>
                    <span className="text-lime font-bold">18-Wheeler Multi-Axle Trailer</span>
                  </div>
                  <div className="p-3 rounded-lg bg-forest-900 border border-white/5 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-warm-muted">Route Origin:</span>
                      <span className="text-white font-bold">Mundra CFS Yard, Gujarat</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-muted">Destination:</span>
                      <span className="text-white font-bold">Bhiwandi Hub Depot, Maharashtra</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-muted">NIC e-Way Bill No:</span>
                      <span className="text-lime font-bold">2810 9481 0294 (Valid 72h)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded bg-forest-900 border border-white/5">
                      <div className="text-[10px] text-warm-muted">PALLET QR CODES</div>
                      <div className="text-emerald-400 font-bold mt-0.5">120/120 Flash-Test Matched</div>
                    </div>
                    <div className="p-2.5 rounded bg-forest-900 border border-white/5">
                      <div className="text-[10px] text-warm-muted">GST TAX INVOICE</div>
                      <div className="text-lime font-bold mt-0.5">18% Input Credit Passed</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-warm-muted font-mono">Driver GPS Telematics:</span>
                  <span className="text-emerald-400 font-mono font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    En-Route (ETA: 14 hrs)
                  </span>
                </div>
              </div>

              {/* Right: Logistics Benefits */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-forest-900/60 border border-white/10">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                    <span>Instant NIC e-Way Bill API Sync</span>
                  </h4>
                  <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                    Generate valid national e-Way bills in seconds directly from the portal. Eliminate border checkpost hold-ups and vehicle detention.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-forest-900/60 border border-white/10">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                    <span>Pallet Flash-Test QR Validation</span>
                  </h4>
                  <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                    Every pallet barcode matches Tier-1 manufacturer flash-test curves (Waaree, Tata, Adani). Zero product disputes upon site arrival.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-forest-900/60 border border-white/10">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                    <span>18% GST Input Credit Automation</span>
                  </h4>
                  <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                    GSTR-1 and e-Invoice IRN details are automatically synced to the buyer's GSTIN, accelerating rapid payment approvals.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              SLIDE 4: Multi-Depot Inventory & Channel Analytics
              ───────────────────────────────────────────────────────────── */}
          {activeSlideIndex === 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left: Multi-Depot Stock Overview */}
              <div className="lg:col-span-7 rounded-2xl bg-forest-900/90 border border-lime/30 p-5 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-lime" />
                    <span className="text-xs font-mono font-bold text-white uppercase">Multi-Depot Stock Overview &amp; Regional Allocation</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime/10 text-lime border border-lime/25 font-bold">
                    207.8 MWp Active
                  </span>
                </div>

                {/* 3 Depots Status */}
                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-forest-950 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-lime" />
                        <span>Bhiwandi Hub Depot (Maharashtra)</span>
                      </div>
                      <div className="text-[11px] text-warm-muted mt-0.5">2-Day Delivery to West &amp; South Solar Corridors</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lime font-bold text-sm">48.2 MWp</div>
                      <span className="text-[10px] text-warm-muted">92% Capacity</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-forest-950 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-solar-yellow" />
                        <span>Mundra CFS Yard (Gujarat)</span>
                      </div>
                      <div className="text-[11px] text-warm-muted mt-0.5">Bonded Port Yard · Import Container Clearance</div>
                    </div>
                    <div className="text-right">
                      <div className="text-solar-yellow font-bold text-sm">124.0 MWp</div>
                      <span className="text-[10px] text-warm-muted">85% Capacity</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-forest-950 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Dadri Terminal Depot (NCR)</span>
                      </div>
                      <div className="text-[11px] text-warm-muted mt-0.5">24h Express Dispatch for UP, Rajasthan &amp; Haryana</div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold text-sm">35.6 MWp</div>
                      <span className="text-[10px] text-warm-muted">78% Capacity</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-forest-950/80 border border-lime/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-warm-white font-bold">Dynamic Bulk Rule Active:</span>
                  <span className="text-lime">1.2 MWp+ Container orders receive ₹0.35/Wp automatic factory rebate</span>
                </div>
              </div>

              {/* Right: Growth & Channel Advantages */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-forest-900/60 border border-white/10">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                    <span>Dynamic Wholesale Pricing Controls</span>
                  </h4>
                  <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                    Set tier pricing for container loads, regional stock pick-ups, and long-term EPC supply agreements with live margin calculations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-forest-900/60 border border-white/10">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                    <span>Direct Factory-Gate Supply Allocations</span>
                  </h4>
                  <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                    Integrate your stock directly with Tier-1 manufacturing plants to pre-book upcoming giga-watt module production runs.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-forest-900/60 border border-white/10">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                    <span>Real-Time Regional Demand Forecasts</span>
                  </h4>
                  <p className="text-xs text-warm-muted mt-1 leading-relaxed">
                    Track DISCOM net-metering approval spikes across Maharashtra, Gujarat, Karnataka, and Tamil Nadu to pre-position stock.
                  </p>
                </div>
              </div>
            </div>
          )}

          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM ACTIONS BAR */}
        {/* ========================================================= */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-warm-muted">
            <span className="w-2 h-2 rounded-full bg-lime" />
            <span className="text-warm-white font-semibold">{currentSlide.title}</span>
            <span className="text-warm-muted/60">·</span>
            <span>{currentSlide.subtitle}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenDemo('trader')}
              className="px-5 py-3 rounded-xl font-bold text-forest-950 bg-lime hover:bg-lime-glow shadow-md shadow-lime/20 text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <Warehouse className="w-4 h-4" />
              <span>Register as Authorized Distributor</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleNextSlide}
              className="px-4 py-3 rounded-xl font-mono text-xs text-warm-white bg-forest-900 hover:bg-forest-800 border border-white/10 hover:border-white/20 flex items-center gap-2 transition-colors"
            >
              <span>Explore Next View</span>
              <ArrowRight className="w-3.5 h-3.5 text-lime" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
