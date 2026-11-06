import { SolarProduct, CaseStudy, PlatformStat } from '../types';

export const PLATFORM_STATS: PlatformStat[] = [
  {
    label: "Annual Traded Capacity",
    value: "14.2 GW",
    change: "+52% YoY",
    description: "Across Rooftop, C&I, and Utility solar projects in India",
    isPositive: true,
    iconName: "Zap"
  },
  {
    label: "Facilitated Escrow GMV",
    value: "₹4,850 Cr+",
    change: "+124% YoY",
    description: "Secured via ICICI & HDFC Institutional Milestone Escrow",
    isPositive: true,
    iconName: "ShieldCheck"
  },
  {
    label: "Verified Indian Installers",
    value: "28,400+",
    change: "+1,420 this month",
    description: "GST & MNRE ALMM-cleared EPCs across 28 states",
    isPositive: true,
    iconName: "Users"
  },
  {
    label: "Port-to-Site Dispatch Speed",
    value: "3.2 Days",
    change: "-68% lead time",
    description: "Direct from JNPT, Mundra, & Bhiwandi bonded yards",
    isPositive: true,
    iconName: "Truck"
  }
];

export const INDIAN_CERTIFICATIONS = [
  { name: "MNRE Approved", label: "Ministry of New and Renewable Energy", sub: "National Grid Compliant" },
  { name: "ALMM List-I", label: "Approved Models & Manufacturers", sub: "Mandatory for Net-Metering" },
  { name: "BIS Certified", label: "Bureau of Indian Standards", sub: "IS 14286 / IS 61730" },
  { name: "PM Surya Ghar", label: "National Rooftop Solar Portal", sub: "Direct DBT Subsidy Sync" },
  { name: "e-Way Bill Ready", label: "GST & Customs Integrated", sub: "Zero Checkpost Stoppage" }
];

export const SOLAR_PRODUCTS: SolarProduct[] = [
  {
    id: "MOD-IN-01",
    category: "module",
    brand: "Waaree Energies",
    model: "Aditya N-Type TOPCon 585W Bifacial",
    technology: "Bifacial Glass-to-Glass / 16BB",
    spec: "585 Wp | 22.65% Eff | 30Y Warranty | ALMM List-I",
    priceInr: "₹10,442",
    pricePerWattInr: "₹17.85 / Wp",
    availableMw: 18.5,
    location: "Bhiwandi Clean Hub",
    almmListed: true,
    bisCertified: true,
    warranty: "30 Years",
    efficiency: "22.65%",
    trend: "down",
    trendValue: "-1.4%",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "MOD-IN-02",
    category: "module",
    brand: "Tata Power Solar",
    model: "TP-550M Mono PERC Half-Cell",
    technology: "Mono PERC / Heavy Snow & Wind Rated",
    spec: "550 Wp | 21.3% Eff | 25Y Linear Warranty",
    priceInr: "₹9,515",
    pricePerWattInr: "₹17.30 / Wp",
    availableMw: 12.0,
    location: "Mundra Port Hub",
    almmListed: true,
    bisCertified: true,
    warranty: "25 Years",
    efficiency: "21.30%",
    trend: "down",
    trendValue: "-0.8%",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "MOD-IN-03",
    category: "module",
    brand: "Adani Solar",
    model: "Elan Shine N-Type TOPCon 590W",
    technology: "Bifacial Dual-Glass / Anti-PID & LeTID",
    spec: "590 Wp | 22.8% Eff | Mundra Giga-Facility",
    priceInr: "₹10,590",
    pricePerWattInr: "₹17.95 / Wp",
    availableMw: 25.0,
    location: "Ahmedabad Central Depot",
    almmListed: true,
    bisCertified: true,
    warranty: "30 Years",
    efficiency: "22.80%",
    trend: "neutral",
    trendValue: "0.0%",
    image: "https://images.unsplash.com/photo-1545209179-a5dc550495da?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "INV-IN-01",
    category: "inverter",
    brand: "Sungrow India",
    model: "SG125CX-P2 Commercial String Inverter",
    technology: "12 MPPTs / 1500V DC / AFCI 2.0 Fire Safe",
    spec: "125 kW | 98.5% Eff | IP66 Exterior Rated",
    priceInr: "₹3,95,000",
    pricePerWattInr: "₹3.16 / Wp",
    availableMw: 22.0,
    location: "Bengaluru Factory Depot",
    almmListed: false,
    bisCertified: true,
    warranty: "10 Years",
    efficiency: "98.50%",
    trend: "down",
    trendValue: "-2.5%",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "INV-IN-02",
    category: "inverter",
    brand: "Growatt India",
    model: "MAX 100KTL3-X LV Commercial",
    technology: "10 MPPT / Type II SPD / Smart IV Curve",
    spec: "100 kW | 98.8% Eff | Low Voltage 415V AC",
    priceInr: "₹3,15,000",
    pricePerWattInr: "₹3.15 / Wp",
    availableMw: 14.0,
    location: "NCR ICD Depot",
    almmListed: false,
    bisCertified: true,
    warranty: "10 Years",
    efficiency: "98.80%",
    trend: "down",
    trendValue: "-1.9%",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "STR-IN-01",
    category: "storage",
    brand: "Tata Power & Exide BESS",
    model: "IndiVolt C&I Liquid Cooled 200kWh",
    technology: "Prismatic LFP Cells / Multi-Stage BMS",
    spec: "200 kWh | 100 kW Inverter | 6,000 Cycles",
    priceInr: "₹26,80,000",
    pricePerWattInr: "₹13,400 / kWh",
    availableMw: 8.0,
    location: "Pune Chakan Auto Hub",
    almmListed: false,
    bisCertified: true,
    warranty: "15 Years",
    efficiency: "92.00%",
    trend: "down",
    trendValue: "-3.8%",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-in-1",
    company: "CleanMax Solar & Sterling EPC",
    logoText: "CLEANMAX & STERLING",
    region: "Maharashtra & Gujarat",
    role: "Industrial Rooftop & Open Access EPC",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    headline: "Procured 180 MWp of ALMM TOPCon modules with 28-day lead-time compression",
    quote: "Helios Grid removed the uncertainty of maritime container allocation at Mundra. We sourced directly from bonded port stock with verified ALMM compliance, saving ₹4.2 Crores in expedited freight and detention charges.",
    personName: "Anand Deshmukh",
    personRole: "Head of Procurement & Supply Chain",
    metrics: [
      { value: "₹4.2 Cr", label: "Port Demurrage & Logistics Saved" },
      { value: "28 Days", label: "Lead Time Compressed" },
      { value: "100%", label: "ALMM List-I Compliant" }
    ],
    tags: ["Open Access", "180 MWp", "Mundra Port Stock"]
  },
  {
    id: "cs-in-2",
    company: "Kothari Syntex & Textile Mills",
    logoText: "KOTHARI SYNTEX",
    region: "Surat, Gujarat",
    role: "Textile Manufacturing Enterprise",
    image: "https://www.hindustantimes.com/ht-img/img/2024/02/13/1600x900/Solar_Panel_1707821404013_1707821404455.jpg",
    headline: "Cut monthly factory power bills by ₹42 Lakhs through direct-to-port solar deployment",
    quote: "Our electricity cost dropped from ₹9.20/unit with DGVCL to ₹3.15/unit with our 4.2 MW rooftop system. Helios Grid's reverse auction saved us 18% on total Capex compared to local turnkey contractor quotes.",
    personName: "Praveen Kothari",
    personRole: "Managing Director",
    metrics: [
      { value: "₹50.4 Lakh", label: "Annual DISCOM Power Savings" },
      { value: "2.8 Years", label: "Complete Capex Payback" },
      { value: "40%", label: "Tax Write-off via Sec 32 AD" }
    ],
    tags: ["C&I Rooftop", "4.2 MWp", "Surat Textile"]
  },
  {
    id: "cs-in-3",
    company: "Deccan Solar Solutions",
    logoText: "DECCAN SOLAR",
    region: "Karnataka & Tamil Nadu",
    role: "Regional Rooftop & C&I EPC",
    image: "https://i.pinimg.com/736x/7f/77/d5/7f77d556fbc05a189dad8f49ecc69425.jpg",
    headline: "Scaled from 15 to 60 monthly commercial installations using automated DISCOM net-metering",
    quote: "Our crews never sit idle waiting for modules or inverters. Having inventory reserved in nearby state depots with same-week truck delivery transformed our working capital cycle.",
    personName: "Rajeshwar Hegde",
    personRole: "Chief Executive Officer",
    metrics: [
      { value: "4.0x", label: "Monthly Installation Capacity" },
      { value: "14 Days", label: "Avg DISCOM Net-Metering Time" },
      { value: "+22%", label: "EBITDA Margin Uplift" }
    ],
    tags: ["BESCOM Grid-Tie", "Bhiwandi Depot", "PM Surya Ghar"]
  }
];

export const HERO_CHART_SERIES = [
  { time: "06:00", generation: 3.8, gridFlow: 2.9, spotIndex: 18.2 },
  { time: "08:00", generation: 12.4, gridFlow: 9.8, spotIndex: 18.0 },
  { time: "10:00", generation: 34.2, gridFlow: 28.5, spotIndex: 17.9 },
  { time: "12:00", generation: 52.8, gridFlow: 46.2, spotIndex: 17.85 },
  { time: "14:00", generation: 48.6, gridFlow: 43.1, spotIndex: 17.85 },
  { time: "16:00", generation: 28.4, gridFlow: 24.0, spotIndex: 18.1 },
  { time: "18:00", generation: 8.2, gridFlow: 6.5, spotIndex: 18.3 },
  { time: "20:00", generation: 1.5, gridFlow: 1.0, spotIndex: 18.4 }
];
