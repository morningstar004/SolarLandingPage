import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  CheckCircle2, 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  ExternalLink, 
  ChevronRight, 
  Layers, 
  Truck, 
  HardHat, 
  Building2, 
  PackageCheck, 
  Clock 
} from 'lucide-react';
import { StakeholderRole } from '../types';

interface VendorWorkflowProps {
  selectedRole?: StakeholderRole;
  onRoleChange?: (role: StakeholderRole) => void;
  onOpenDemo: (role?: StakeholderRole) => void;
  onSuccessToast: (title: string, message: string) => void;
}

interface VendorWorkflowItem {
  id: 'inventory' | 'orders' | 'installers' | 'customers';
  stepNumber: string;
  tabLabel: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  screenUrl: string;
  screenTitle: string;
  badge: string;
}

const VENDOR_WORKFLOWS: VendorWorkflowItem[] = [
  {
    id: 'inventory',
    stepNumber: '01',
    tabLabel: '1. Inventory & Booking',
    title: 'Manage Inventory & Book in Stocks',
    tagline: 'Lock tier-1 ALMM panels & inverters directly from port stockists before prices rise.',
    description: 'Book wholesale ALMM panels and inverters directly from Mundra and Bhiwandi port yards with instant GST input tax credits.',
    highlights: [
      'Real-time bonded yard stock at Mundra & Bhiwandi depots',
      'ALMM List-I & BIS certified modules (Waaree, Adani, Goldi, Tata)',
      'Programmatic stock reservations with price lock guarantee',
      'Automated GST 18% input credit reconciliation invoice'
    ],
    screenUrl: 'app.solarport.in/vendor/inventory/spot-book',
    screenTitle: 'Depot Hardware Reservation Desk',
    badge: '18.4 MWp IN STOCK'
  },
  {
    id: 'orders',
    stepNumber: '02',
    tabLabel: '2. Track Orders',
    title: 'Track Orders & Port Dispatch',
    tagline: 'Full live telemetry from customs bonded port release to your project site.',
    description: 'Track hardware shipments live with real-time GPS fleet telemetry, automated e-Way bills, and pallet QR scan verification.',
    highlights: [
      'Live GPS fleet telemetry & NH-48 toll gate tracking',
      'Auto-generated GST e-Way bills & port customs gate passes',
      'Pallet barcode verification to prevent counterfeit modules',
      'Zero checkpost stoppage guarantee with digital challans'
    ],
    screenUrl: 'app.solarport.in/vendor/orders/freight-tracker',
    screenTitle: 'Active Consignment & e-Way Tracking',
    badge: '3 ACTIVE SHIPMENTS'
  },
  {
    id: 'installers',
    stepNumber: '03',
    tabLabel: '3. Manage Installers',
    title: 'Manage Installers & Field Crews',
    tagline: 'Dispatch certified electricians, verify safety gear, and track rooftop progress.',
    description: 'Assign certified local electricians by rating and location. Track past installations, safety checklists, and live rooftop progress.',
    highlights: [
      'Geo-targeted crew assignment from 2,100+ certified solar teams',
      'Mandatory digital PPE, safety harness & tool inspection',
      'Daily geotagged photographic progress logs from rooftop sites',
      'Milestone-based crew payouts released upon quality sign-off'
    ],
    screenUrl: 'app.solarport.in/vendor/crews/installer-directory',
    screenTitle: 'Verified Electricians & Crew Fleet',
    badge: '42 CREWS VERIFIED'
  },
  {
    id: 'customers',
    stepNumber: '04',
    tabLabel: '4. Manage Customers',
    title: 'Manage Customers & Rooftop Projects',
    tagline: 'End-to-end customer CRM, DISCOM net-metering approvals, and subsidy release.',
    description: 'Manage customer projects from survey to grid commissioning, including automated net-metering for 54 DISCOMs and subsidy tracking.',
    highlights: [
      'DISCOM net-metering automation across 54 state utilities',
      'PM Surya Ghar National Portal sync for direct consumer DBT subsidy',
      'Customer portal with live solar generation & bill savings tracker',
      'Automated warranty registration & 5-year O&M service schedule'
    ],
    screenUrl: 'app.solarport.in/vendor/crm/discom-pipeline',
    screenTitle: 'Customer Rooftop CRM & DISCOM Approvals',
    badge: '28 ACTIVE PROJECTS'
  }
];

export const VendorWorkflow: React.FC<VendorWorkflowProps> = ({
  onOpenDemo,
  onSuccessToast
}) => {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-switch tabs every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleTabChange((activeWorkflowIndex + 1) % VENDOR_WORKFLOWS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [activeWorkflowIndex]);

  const handleTabChange = (index: number) => {
    if (index === activeWorkflowIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveWorkflowIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  const workflow = VENDOR_WORKFLOWS[activeWorkflowIndex];

  return (
    <section 
      id="vendor-workflow" 
      className="min-h-screen py-16 lg:py-24 flex flex-col justify-center snap-start relative border-b border-white/10 bg-forest-950 overflow-hidden"
    >
      {/* Background glow & solar dots */}
      <div className="absolute inset-0 solar-dots-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-lime/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-solar-yellow/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight">
            Manage Everything from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-lime-glow to-solar-yellow">
              Distributor Orders
            </span>{' '}
            to Customer Rooftop Installations.
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-warm-muted max-w-xl mx-auto leading-relaxed font-mono">
            One unified platform to source wholesale stocks, track freight, dispatch crews, and manage rooftop projects.
          </p>
        </div>

        {/* 4 Interactive Workflow Stage Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 select-none">
          {VENDOR_WORKFLOWS.map((wf, idx) => {
            const isActive = idx === activeWorkflowIndex;
            return (
              <button
                key={wf.id}
                onClick={() => handleTabChange(idx)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 border ${
                  isActive
                    ? 'bg-lime text-forest-950 border-lime font-bold shadow-lg shadow-lime/25 scale-[1.03]'
                    : 'bg-forest-900/80 border-white/10 text-warm-muted hover:text-white hover:border-lime/30 hover:bg-forest-900'
                }`}
              >
                <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[11px] font-mono font-bold ${
                  isActive ? 'bg-forest-950 text-lime' : 'bg-forest-950/70 text-warm-muted'
                }`}>
                  {wf.stepNumber}
                </span>
                <span>{wf.tabLabel.replace(/^\d+\.\s*/, '')}</span>
              </button>
            );
          })}
        </div>

        {/* 50 / 50 Split Layout: Left Text Information | Right 16:9 Application Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT 6 COLS: Works the vendor can perform (clean borderless layout) */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2 sm:py-4 relative">
            <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 -translate-x-3' : 'opacity-100 translate-x-0'}`}>

              {/* Title & Tagline */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {workflow.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-lime mt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                  {workflow.tagline}
                </p>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-warm-muted leading-relaxed mb-6 font-sans">
                {workflow.description}
              </p>

              {/* 4 Feature Checklist Highlights */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-warm-white font-bold flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-lime" />
                  <span>Platform Actions You Can Execute:</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {workflow.highlights.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-forest-900/60 flex items-start gap-3 group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-lime shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm text-warm-white font-medium leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT 6 COLS: 16:9 Browser Screen (+15% Size, 5 Degree Anticlockwise Tilted, Whole-Side Animation) */}
          <div className="lg:col-span-6 flex items-center justify-center relative py-8 sm:py-10 px-2 sm:px-4 overflow-visible">
            {/* Ambient shadow glow */}
            <div className="absolute inset-4 bg-black/60 blur-3xl rounded-full pointer-events-none transform -rotate-[5deg] scale-105" />

            {/* Whole Right Side Browser Window: Neutral browser frame styling, Increased by 15% (scale 1.10), 5° tilted, slides right-to-left */}
            <div className={`w-full transform -rotate-[5deg] scale-[1.10] origin-center flex flex-col rounded-2xl bg-[#1e1f22] border border-neutral-700/60 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] ring-1 ring-white/10 overflow-hidden relative aspect-[16/9] transition-all duration-300 ease-out ${
              isTransitioning ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'
            }`}>
              
              {/* Neutral Browser Window Chrome (Tabs + Omnibox Toolbar) */}
              <div className="bg-[#18191c] border-b border-neutral-800 select-none shrink-0">
                {/* 1. Tab Bar */}
                <div className="px-3 pt-2 pb-0 flex items-center gap-2">
                  {/* Traffic Light Window Controls */}
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  </div>

                  {/* Active Browser Tab (Neutral Dark Gray Chrome Tab) */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-t-lg bg-[#27282b] border-t border-x border-neutral-700/50 text-[11px] font-sans text-neutral-200 max-w-[190px] shadow-sm">
                    <Layers className="w-3 h-3 text-neutral-400 shrink-0" />
                    <span className="truncate text-[10px] font-medium text-neutral-200">SolarPort Vendor</span>
                    <span className="text-[10px] text-neutral-400 hover:text-white ml-auto">×</span>
                  </div>

                  {/* New Tab Plus Icon */}
                  <span className="text-neutral-500 hover:text-neutral-300 text-xs px-1 cursor-default font-bold">+</span>
                </div>

                {/* 2. Navigation & Omnibox Address Bar */}
                <div className="px-3 py-1.5 bg-[#202124] border-t border-neutral-800/80 flex items-center gap-2">
                  <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
                    <span className="hover:text-neutral-200 cursor-pointer select-none">‹</span>
                    <span className="hover:text-neutral-200 cursor-pointer select-none">›</span>
                    <span className="text-[10px] hover:text-neutral-200 cursor-pointer select-none">↻</span>
                  </div>

                  {/* Omnibox / URL (Neutral Browser Style with standard lock and url) */}
                  <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#121316] border border-neutral-700/60 text-[10px] font-mono text-neutral-400 shadow-inner">
                    <ShieldCheck className="w-3 h-3 text-neutral-400 shrink-0" />
                    <span className="text-neutral-500 font-sans">https://</span>
                    <span className="text-neutral-200 truncate">{workflow.screenUrl}</span>
                  </div>

                  <div className="flex items-center gap-2 text-neutral-400 text-[10px]">
                    <span className="hover:text-neutral-200 cursor-pointer">★</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 border border-neutral-500/50" />
                  </div>
                </div>
              </div>

              {/* Application Main Canvas (True 16:9 Screen Content) */}
              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between overflow-hidden relative bg-forest-950">
                <div className="flex-1 flex flex-col justify-between">

                  {/* Webpage Header inside the Webpage (not the browser chrome) */}
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                      <h4 className="text-xs sm:text-sm font-bold text-white font-mono">
                        {workflow.screenTitle}
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-lime/10 text-lime border border-lime/25 shrink-0">
                      {workflow.badge}
                    </span>
                  </div>

                {/* ─────────────────────────────────────────────────────────────
                    SCREEN 1: Inventory & Stock Booking Table
                ───────────────────────────────────────────────────────────── */}
                {workflow.id === 'inventory' && (
                  <div className="space-y-3">
                    {/* Filter Bar */}
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-1.5 bg-forest-900/80 px-2.5 py-1 rounded-lg border border-white/10 text-warm-muted flex-1 max-w-[260px]">
                        <Search className="w-3 h-3 text-lime" />
                        <span className="text-[11px] text-warm-white truncate">Filter Modules & Inverters...</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px]">
                        <span className="px-2 py-1 rounded bg-forest-900 text-lime border border-lime/20 font-bold">Mundra FTWZ</span>
                        <span className="px-2 py-1 rounded bg-forest-900/60 text-warm-muted hidden sm:inline">Bhiwandi Depot</span>
                      </div>
                    </div>

                    {/* Table of Available Stocks */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11px] font-mono">
                        <thead>
                          <tr className="border-b border-white/10 text-warm-muted uppercase text-[9px]">
                            <th className="pb-2 font-medium">Hardware Model</th>
                            <th className="pb-2 font-medium">Port Depot</th>
                            <th className="pb-2 font-medium">Stock</th>
                            <th className="pb-2 font-medium">Spot Price</th>
                            <th className="pb-2 font-medium text-right">Order</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="font-bold text-white text-xs">Waaree 580W TOPCon</div>
                              <div className="text-[10px] text-lime font-mono">ALMM List-I · Bifacial</div>
                            </td>
                            <td className="py-2.5 text-warm-muted">Mundra Port Yard</td>
                            <td className="py-2.5 font-bold text-warm-white">12.4 MWp</td>
                            <td className="py-2.5 font-bold text-lime">₹17.40<span className="text-[9px] text-warm-muted">/Wp</span></td>
                            <td className="py-2.5 text-right">
                              <span className="px-2 py-1 rounded bg-lime text-forest-950 font-sans font-bold text-[10px] cursor-pointer hover:bg-lime-glow transition-colors">
                                Book
                              </span>
                            </td>
                          </tr>

                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="font-bold text-white text-xs">Adani Elan 590W N-Type</div>
                              <div className="text-[10px] text-lime font-mono">ALMM List-I · Anti-PID</div>
                            </td>
                            <td className="py-2.5 text-warm-muted">Bhiwandi Hub</td>
                            <td className="py-2.5 font-bold text-warm-white">8.2 MWp</td>
                            <td className="py-2.5 font-bold text-lime">₹17.95<span className="text-[9px] text-warm-muted">/Wp</span></td>
                            <td className="py-2.5 text-right">
                              <span className="px-2 py-1 rounded bg-lime text-forest-950 font-sans font-bold text-[10px] cursor-pointer hover:bg-lime-glow transition-colors">
                                Book
                              </span>
                            </td>
                          </tr>

                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="font-bold text-white text-xs">Sungrow 100kW String Inverter</div>
                              <div className="text-[10px] text-solar-yellow font-mono">3-Phase · 98.8% Eff</div>
                            </td>
                            <td className="py-2.5 text-warm-muted">JNPT Nhava Sheva</td>
                            <td className="py-2.5 font-bold text-warm-white">24 Units</td>
                            <td className="py-2.5 font-bold text-white">₹2,42,000</td>
                            <td className="py-2.5 text-right">
                              <span className="px-2 py-1 rounded bg-forest-800 text-warm-white font-sans font-semibold text-[10px] border border-white/10">
                                Allocated
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-2 rounded-xl bg-forest-900/70 border border-white/10 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-warm-white">Auto GST Pass-through: <strong className="text-lime">18% Input Tax Credit</strong></span>
                      <span className="text-warm-muted">Price Lock Window: <strong className="text-solar-yellow">72 Hours</strong></span>
                    </div>
                  </div>
                )}

                {/* ─────────────────────────────────────────────────────────────
                    SCREEN 2: Track Orders & Live Orderlist Status
                ───────────────────────────────────────────────────────────── */}
                {workflow.id === 'orders' && (
                  <div className="space-y-3">
                    {/* Status Tabs */}
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-1 text-[10px]">
                        <span className="px-2.5 py-1 rounded-lg bg-lime/15 text-lime border border-lime/30 font-bold">All Orders (14)</span>
                        <span className="px-2.5 py-1 rounded-lg bg-forest-900 text-solar-yellow font-semibold">In Transit (3)</span>
                        <span className="px-2.5 py-1 rounded-lg bg-forest-900 text-warm-muted hidden sm:inline">Delivered (11)</span>
                      </div>
                      <span className="text-[10px] text-warm-muted font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3 text-lime" />
                        <span>Live GPS Sync</span>
                      </span>
                    </div>

                    {/* Orders List Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11px] font-mono">
                        <thead>
                          <tr className="border-b border-white/10 text-warm-muted uppercase text-[9px]">
                            <th className="pb-2 font-medium">Order ID & Equipment</th>
                            <th className="pb-2 font-medium">Transit Route</th>
                            <th className="pb-2 font-medium">e-Way Bill</th>
                            <th className="pb-2 font-medium">Status</th>
                            <th className="pb-2 font-medium text-right">ETA</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="font-bold text-white text-xs">#ORD-88214</div>
                              <div className="text-[10px] text-warm-muted font-mono">640x Waaree 580W (371 kWp)</div>
                            </td>
                            <td className="py-2.5 text-warm-white text-[10px]">
                              <span>Mundra → Bengaluru</span>
                              <div className="text-warm-muted text-[9px]">BlueDart GJ-12-BT-9021</div>
                            </td>
                            <td className="py-2.5 text-lime text-[10px]">2410-9844-3201</td>
                            <td className="py-2.5">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-solar-yellow/15 text-solar-yellow border border-solar-yellow/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-solar-yellow animate-pulse" />
                                In Transit (NH-48)
                              </span>
                            </td>
                            <td className="py-2.5 text-right font-bold text-warm-white text-[10px]">Today 6:30 PM</td>
                          </tr>

                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="font-bold text-white text-xs">#ORD-88209</div>
                              <div className="text-[10px] text-warm-muted font-mono">400x Adani 590W (236 kWp)</div>
                            </td>
                            <td className="py-2.5 text-warm-white text-[10px]">
                              <span>Bhiwandi → Chakan Pune</span>
                              <div className="text-warm-muted text-[9px]">TCI Express MH-04-AZ-4412</div>
                            </td>
                            <td className="py-2.5 text-lime text-[10px]">2410-9822-1104</td>
                            <td className="py-2.5">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-lime/15 text-lime border border-lime/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                                Out for Delivery
                              </span>
                            </td>
                            <td className="py-2.5 text-right font-bold text-lime text-[10px]">Tomorrow 10 AM</td>
                          </tr>

                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="font-bold text-white text-xs">#ORD-88195</div>
                              <div className="text-[10px] text-warm-muted font-mono">2x Sungrow 100kW Inverter</div>
                            </td>
                            <td className="py-2.5 text-warm-white text-[10px]">
                              <span>JNPT → Sanand Yard</span>
                              <div className="text-warm-muted text-[9px]">VRL Cargo GJ-01-EE-8810</div>
                            </td>
                            <td className="py-2.5 text-lime text-[10px]">2410-9755-9080</td>
                            <td className="py-2.5">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                ✓ Delivered
                              </span>
                            </td>
                            <td className="py-2.5 text-right font-medium text-warm-muted text-[10px]">Verified</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-2 rounded-xl bg-forest-900/70 border border-white/10 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-warm-white">FASTag Checkpoint: <strong className="text-lime">Surat Bypass Cleared</strong></span>
                      <span className="text-lime font-bold cursor-pointer hover:underline">Download Delivery Challan →</span>
                    </div>
                  </div>
                )}

                {/* ─────────────────────────────────────────────────────────────
                    SCREEN 3: Manage Installers — Workers, Ratings, Past Installs
                ───────────────────────────────────────────────────────────── */}
                {workflow.id === 'installers' && (
                  <div className="space-y-3">
                    {/* Search & Location Bar */}
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-1.5 bg-forest-900/80 px-2.5 py-1 rounded-lg border border-white/10 text-warm-muted flex-1 max-w-[260px]">
                        <Search className="w-3 h-3 text-lime" />
                        <span className="text-[11px] text-warm-white truncate">Search Installers by City...</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px]">
                        <span className="px-2 py-1 rounded bg-lime/15 text-lime border border-lime/30 font-bold">42 Certified Crews</span>
                      </div>
                    </div>

                    {/* Workers Directory Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11px] font-mono">
                        <thead>
                          <tr className="border-b border-white/10 text-warm-muted uppercase text-[9px]">
                            <th className="pb-2 font-medium">Installer Lead</th>
                            <th className="pb-2 font-medium">Location</th>
                            <th className="pb-2 font-medium">Past Installs</th>
                            <th className="pb-2 font-medium">Rating</th>
                            <th className="pb-2 font-medium text-right">Assign</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-lime/20 text-lime font-mono font-bold text-[10px] flex items-center justify-center border border-lime/40 shrink-0">
                                  SS
                                </div>
                                <div>
                                  <div className="font-bold text-white text-xs">Sunil Sharma</div>
                                  <div className="text-[10px] text-lime font-mono">Grade-A Wireman</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-2.5 text-warm-white text-[10px]">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-lime shrink-0" />
                                <span>Bengaluru, KA</span>
                              </div>
                              <div className="text-[9px] text-warm-muted font-mono">Peenya & Whitefield</div>
                            </td>
                            <td className="py-2.5 font-bold text-warm-white text-[10px]">
                              <div>64 Rooftops</div>
                              <div className="text-[9px] text-lime font-normal">2.8 MWp Installed</div>
                            </td>
                            <td className="py-2.5">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-forest-900 border border-white/10 text-solar-yellow font-bold text-[10px]">
                                <Star className="w-3 h-3 fill-solar-yellow text-solar-yellow" />
                                4.9 (58)
                              </span>
                            </td>
                            <td className="py-2.5 text-right">
                              <span className="px-2.5 py-1 rounded bg-lime text-forest-950 font-sans font-bold text-[10px] cursor-pointer hover:bg-lime-glow transition-colors">
                                Assign
                              </span>
                            </td>
                          </tr>

                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-solar-yellow/20 text-solar-yellow font-mono font-bold text-[10px] flex items-center justify-center border border-solar-yellow/40 shrink-0">
                                  RP
                                </div>
                                <div>
                                  <div className="font-bold text-white text-xs">Ramesh Patel</div>
                                  <div className="text-[10px] text-solar-yellow font-mono">Structure Specialist</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-2.5 text-warm-white text-[10px]">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-lime shrink-0" />
                                <span>Pune, MH</span>
                              </div>
                              <div className="text-[9px] text-warm-muted font-mono">Chakan Industrial</div>
                            </td>
                            <td className="py-2.5 font-bold text-warm-white text-[10px]">
                              <div>48 Rooftops</div>
                              <div className="text-[9px] text-lime font-normal">1.9 MWp Installed</div>
                            </td>
                            <td className="py-2.5">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-forest-900 border border-white/10 text-solar-yellow font-bold text-[10px]">
                                <Star className="w-3 h-3 fill-solar-yellow text-solar-yellow" />
                                4.8 (42)
                              </span>
                            </td>
                            <td className="py-2.5 text-right">
                              <span className="px-2 py-1 rounded bg-forest-800 text-warm-white font-sans font-semibold text-[10px] border border-white/10">
                                On Site
                              </span>
                            </td>
                          </tr>

                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-sky-500/20 text-sky-400 font-mono font-bold text-[10px] flex items-center justify-center border border-sky-500/40 shrink-0">
                                  AD
                                </div>
                                <div>
                                  <div className="font-bold text-white text-xs">Amit Deshmukh</div>
                                  <div className="text-[10px] text-sky-400 font-mono">Inverter Commissioning</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-2.5 text-warm-white text-[10px]">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-lime shrink-0" />
                                <span>Ahmedabad, GJ</span>
                              </div>
                              <div className="text-[9px] text-warm-muted font-mono">Sanand Hub</div>
                            </td>
                            <td className="py-2.5 font-bold text-warm-white text-[10px]">
                              <div>38 Rooftops</div>
                              <div className="text-[9px] text-lime font-normal">1.4 MWp Installed</div>
                            </td>
                            <td className="py-2.5">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-forest-900 border border-white/10 text-solar-yellow font-bold text-[10px]">
                                <Star className="w-3 h-3 fill-solar-yellow text-solar-yellow" />
                                4.7 (31)
                              </span>
                            </td>
                            <td className="py-2.5 text-right">
                              <span className="px-2.5 py-1 rounded bg-lime text-forest-950 font-sans font-bold text-[10px] cursor-pointer hover:bg-lime-glow transition-colors">
                                Assign
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-2 rounded-xl bg-forest-900/70 border border-white/10 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-warm-white">Pre-Climb Checklist: <strong className="text-lime">100% PPE Verified</strong></span>
                      <span className="text-warm-muted">CEIG Safety Approval: <strong className="text-emerald-400">Standard Mandated</strong></span>
                    </div>
                  </div>
                )}

                {/* ─────────────────────────────────────────────────────────────
                    SCREEN 4: Customer Projects & DISCOM CRM
                ───────────────────────────────────────────────────────────── */}
                {workflow.id === 'customers' && (
                  <div className="space-y-3">
                    {/* Filter Bar */}
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10 text-xs font-mono">
                      <div className="flex items-center gap-1.5 bg-forest-900/80 px-2.5 py-1 rounded-lg border border-white/10 text-warm-muted flex-1 max-w-[260px]">
                        <Search className="w-3 h-3 text-lime" />
                        <span className="text-[11px] text-warm-white truncate">Search Rooftop Accounts...</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px]">
                        <span className="px-2 py-1 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">28 Projects Active</span>
                      </div>
                    </div>

                    {/* Customers Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11px] font-mono">
                        <thead>
                          <tr className="border-b border-white/10 text-warm-muted uppercase text-[9px]">
                            <th className="pb-2 font-medium">Customer & Account</th>
                            <th className="pb-2 font-medium">DISCOM Utility</th>
                            <th className="pb-2 font-medium">Net-Meter Stage</th>
                            <th className="pb-2 font-medium">Savings/mo</th>
                            <th className="pb-2 font-medium text-right">View</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="font-bold text-white text-xs">Shree Balaji Polymers</div>
                              <div className="text-[10px] text-warm-muted font-mono">120 kWp Commercial Array</div>
                            </td>
                            <td className="py-2.5 text-warm-white text-[10px]">
                              <span>BESCOM Karnataka</span>
                              <div className="text-lime text-[9px]">HT Net-Metered</div>
                            </td>
                            <td className="py-2.5">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-lime/15 text-lime border border-lime/30">
                                ✓ Meter Sanctioned
                              </span>
                            </td>
                            <td className="py-2.5 font-bold text-solar-yellow text-[10px]">₹1,42,000</td>
                            <td className="py-2.5 text-right">
                              <span className="px-2 py-1 rounded bg-forest-800 text-warm-white font-sans font-bold text-[10px] border border-white/10 cursor-pointer hover:bg-forest-700">
                                CRM
                              </span>
                            </td>
                          </tr>

                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="font-bold text-white text-xs">Greenfield Cold Storage</div>
                              <div className="text-[10px] text-warm-muted font-mono">80 kWp Rooftop System</div>
                            </td>
                            <td className="py-2.5 text-warm-white text-[10px]">
                              <span>MSEDCL Maharashtra</span>
                              <div className="text-lime text-[9px]">LT Industrial Feeder</div>
                            </td>
                            <td className="py-2.5">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                ✓ CEIG Passed
                              </span>
                            </td>
                            <td className="py-2.5 font-bold text-solar-yellow text-[10px]">₹94,000</td>
                            <td className="py-2.5 text-right">
                              <span className="px-2 py-1 rounded bg-forest-800 text-warm-white font-sans font-bold text-[10px] border border-white/10 cursor-pointer hover:bg-forest-700">
                                CRM
                              </span>
                            </td>
                          </tr>

                          <tr className="hover:bg-forest-900/40 transition-colors">
                            <td className="py-2.5 font-sans">
                              <div className="font-bold text-white text-xs">Kaveri Spinning Mills</div>
                              <div className="text-[10px] text-warm-muted font-mono">250 kWp Industrial Grid</div>
                            </td>
                            <td className="py-2.5 text-warm-white text-[10px]">
                              <span>TANGEDCO Tamil Nadu</span>
                              <div className="text-lime text-[9px]">11kV Interconnection</div>
                            </td>
                            <td className="py-2.5">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-solar-yellow/15 text-solar-yellow border border-solar-yellow/30">
                                • Subsidy Pending
                              </span>
                            </td>
                            <td className="py-2.5 font-bold text-solar-yellow text-[10px]">₹2,88,000</td>
                            <td className="py-2.5 text-right">
                              <span className="px-2 py-1 rounded bg-forest-800 text-warm-white font-sans font-bold text-[10px] border border-white/10 cursor-pointer hover:bg-forest-700">
                                CRM
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-2 rounded-xl bg-forest-900/70 border border-white/10 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-warm-white">PM Surya Ghar Portal: <strong className="text-lime">Direct DBT Sync</strong></span>
                      <span className="text-lime font-bold cursor-pointer hover:underline">Export 54 DISCOM Dossier →</span>
                    </div>
                  </div>
                )}

              </div>

            </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
