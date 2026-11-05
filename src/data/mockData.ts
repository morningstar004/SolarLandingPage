import { UserSegment, SolarProduct, WorkflowStep, CaseStudy, PlatformStat } from '../types';

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

export const TRUSTED_PARTNERS = [
  { name: "Waaree Energies", category: "India's #1 Solar OEM", ticker: "NSE: WAAREEENER", badge: "ALMM List-I" },
  { name: "Tata Power Solar", category: "Integrated EPC & Cell OEM", ticker: "NSE: TATAPOWER", badge: "ALMM List-I" },
  { name: "Adani Solar", category: "Mundra Giga-Factory", ticker: "NSE: ADANIENT", badge: "ALMM List-I" },
  { name: "Vikram Solar", category: "High-Efficiency N-Type", ticker: "Kolkata Hub", badge: "ALMM List-I" },
  { name: "Goldi Solar", category: "Gujarat Manufacturing Hub", ticker: "Surat / Navsari", badge: "ALMM List-I" },
  { name: "Sungrow India", category: "Commercial & Utility Inverters", ticker: "Bengaluru Factory", badge: "BIS Certified" },
  { name: "Growatt India", category: "Rooftop Smart Inverters", ticker: "Gurugram Hub", badge: "BIS Certified" },
  { name: "Havells Solar", category: "Make In India Consumer/C&I", ticker: "NSE: HAVELLS", badge: "MNRE Partner" }
];

export const INDIAN_CERTIFICATIONS = [
  { name: "MNRE Approved", label: "Ministry of New and Renewable Energy", sub: "National Grid Compliant" },
  { name: "ALMM List-I", label: "Approved Models & Manufacturers", sub: "Mandatory for Net-Metering" },
  { name: "BIS Certified", label: "Bureau of Indian Standards", sub: "IS 14286 / IS 61730" },
  { name: "PM Surya Ghar", label: "National Rooftop Solar Portal", sub: "Direct DBT Subsidy Sync" },
  { name: "e-Way Bill Ready", label: "GST & Customs Integrated", sub: "Zero Checkpost Stoppage" }
];

export const USER_SEGMENTS: UserSegment[] = [
  {
    id: 'vendor',
    title: 'Solar EPCs & Rooftop Installers',
    badge: 'PM Surya Ghar & C&I CRM',
    tagline: 'Close residential & factory solar proposals 4x faster with automated DISCOM net-metering & instant ALMM hardware delivery.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
    heroMetric: {
      value: '3.4x',
      label: 'Faster Installation Velocity',
      sublabel: 'Average 12-day turnaround from site survey to DISCOM meter'
    },
    keyFeatures: [
      'DISCOM Net-Metering Checklist & single-line diagram auto-generator (MSEDCL, BESCOM, TANGEDCO, Tata Power, BSES)',
      'Direct ALMM List-I pallet checkout with GST input credit pass-through',
      'PM Surya Ghar DBT subsidy compliance and automated consumer KYC ingestion',
      'Technician crew tracker with geo-tagged installation photos and CEIG safety checks'
    ],
    capabilities: [
      {
        title: 'DISCOM Net-Metering Tracker',
        description: 'Auto-fill application forms for 54 Indian electricity distribution companies with zero paperwork delays.',
        badge: '54 DISCOMs Supported',
        icon: 'Zap'
      },
      {
        title: 'Instant ALMM BOM Checkout',
        description: 'Convert rooftop design into a ready Bill of Materials; pull modules and inverters from nearby state depots.',
        badge: 'GST Input Pass-through',
        icon: 'Layers'
      },
      {
        title: 'Crew Fleet Dispatch App',
        description: 'Assign certified electricians, track ladder & structure delivery, and conduct live solar IV-curve audits.',
        badge: 'Real-time GPS Tracking',
        icon: 'Truck'
      }
    ],
    testimonial: {
      quote: "Helios Grid shortened our net-metering clearance in Bengaluru from 48 days to 14 days. Sourcing Waaree and Sungrow pallets directly from Bhiwandi with same-week delivery has doubled our monthly installations.",
      author: "Rajeshwar Hegde",
      role: "Managing Director",
      company: "Deccan Solar EPC",
      location: "Bengaluru, Karnataka (3,200+ Rooftops)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80"
    },
    uiPreview: {
      headline: "Deccan Solar — Live DISCOM & Field Dispatch",
      stats: [
        { label: "Active Rooftops", value: "38 Sites", trend: "+8 this week" },
        { label: "DISCOM Sanction", value: "99.1%", trend: "Avg 3.2 days" },
        { label: "Depot BOM Stock", value: "1.8 MW", trend: "Bhiwandi Hub" }
      ],
      recentActivity: [
        { id: "BESCOM-41", title: "BESCOM Net-Meter Approved", meta: "Whitefield Tech Park (120 kWp)", status: "Meter Installed" },
        { id: "ALMM-89", title: "BOM Delivery Dispatched", meta: "640x Waaree 580W TOPCon via Hosur Yard", status: "Out for Delivery" },
        { id: "SURYA-12", title: "PM Surya Ghar Subsidy Released", meta: "Indiranagar Residential Array (5 kWp)", status: "Subsidy Credited" }
      ]
    }
  },
  {
    id: 'trader',
    title: 'Product Traders & Stockists',
    badge: 'Mundra & JNPT Bonded Desk',
    tagline: 'Liquidate container lots from Mundra, JNPT, and Bhiwandi with zero payment default via bank escrow.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    heroMetric: {
      value: '₹0.00',
      label: 'Payment Default Risk',
      sublabel: '100% escrow backed via ICICI Bank with automated e-Way bill'
    },
    keyFeatures: [
      'Live Indian spot order book for ALMM modules, hybrid inverters, and C&I BESS storage',
      'Automated GST 18% invoicing, e-Way bills, and factory flash test report syncing',
      'Real-time inventory sync across Mundra Port, Nhava Sheva (JNPT), and ICD Tughlakabad',
      'Direct financing options for vetted Indian EPCs with T+0 instant payout to stockist'
    ],
    capabilities: [
      {
        title: 'Spot & Container Clearing',
        description: 'Sell full container loads or broken pallet lots to 28,000+ verified Indian EPCs with guaranteed buyer escrow.',
        badge: 'Live Order Book',
        icon: 'TrendingUp'
      },
      {
        title: 'Mundra & JNPT Port Telematics',
        description: 'Live barcode and pallet verification directly from port CFS and bonded yards without manual physical counting.',
        badge: 'Port Telematics',
        icon: 'Warehouse'
      },
      {
        title: 'GST & e-Way Bill Automation',
        description: 'Generate legally compliant e-Way bills and electronic tax invoices with zero toll checkpost friction.',
        badge: '1-Click e-Way Bill',
        icon: 'ShieldCheck'
      }
    ],
    testimonial: {
      quote: "Before Helios Grid, selling solar modules across Maharashtra and Gujarat meant chasing overdue payments for 60 to 90 days. With ICICI escrow, our funds unlock immediately upon truck unloading at the customer site.",
      author: "Sneha Parikh",
      role: "Head of Distribution",
      company: "Gujarat Solar Transnational Hub",
      location: "Ahmedabad & Mundra (850 MW/yr)",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
    },
    uiPreview: {
      headline: "Bonded Port Inventory & Liquidity Desk",
      stats: [
        { label: "Mundra Stock", value: "48.2 MW", trend: "ALMM List-I Ready" },
        { label: "Spot Rate", value: "₹17.85 / Wp", trend: "-1.1% today" },
        { label: "Bank Escrow Balance", value: "₹24.8 Cr", trend: "100% Locked" }
      ],
      recentActivity: [
        { id: "ORD-IN-101", title: "Container Lot Cleared", meta: "10x 40ft Containers Waaree 585W at JNPT", status: "Escrow Funded" },
        { id: "EWAY-441", title: "e-Way Bill Issued", meta: "Consignment dispatched to Pune MIDC", status: "In Transit" },
        { id: "INV-621", title: "Sungrow 125kW Pallet Release", meta: "Bhiwandi Depot to Surat Industrial Estate", status: "Delivered" }
      ]
    }
  },
  {
    id: 'consultant',
    title: 'Solar Chartered Engineers & Consultants',
    badge: 'CEIG & Bankability Network',
    tagline: 'Monetize your technical expertise. Bid on C&I feasibility tenders, CEIG approvals, and bankability audits.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    heroMetric: {
      value: '1,850+',
      label: 'Active High-Yield Tenders',
      sublabel: 'Factory rooftops & open-access solar projects needing certified engineers'
    },
    keyFeatures: [
      'Verified Chartered Engineer & Certified Energy Auditor (BEE) profile directory',
      'Milestone-locked escrow payments for PVSyst, shading reports, and electrical single-line drawings',
      'State-specific regulatory guides for CEIG (Chief Electrical Inspector to Govt.) approvals',
      'Collaborative CAD and geotechnical inspection data rooms'
    ],
    capabilities: [
      {
        title: 'Tender Matchmaking Engine',
        description: 'Receive instant notifications when textile mills, pharma factories, and IT parks publish design RFPs.',
        badge: 'AI Tender Router',
        icon: 'Search'
      },
      {
        title: 'Milestone Escrow Billing',
        description: 'Engineering fees are secured in advance. 50% on report draft, 50% on CEIG or DISCOM signoff.',
        badge: 'Guaranteed Payouts',
        icon: 'FileCheck2'
      },
      {
        title: 'Bankability Audit Suite',
        description: 'Standardized PVSyst and yield generation models accepted directly by SBI, IREDA, and Tata Capital.',
        badge: 'SBI / IREDA Compliant',
        icon: 'Lock'
      }
    ],
    testimonial: {
      quote: "Helios Grid connected our boutique engineering advisory to 22 industrial solar mandates across Tamil Nadu and Telangana in just three months. The milestone escrow ensures zero payment disputes.",
      author: "Dr. K. Swaminathan, CE",
      role: "Lead Power Systems Advisor",
      company: "Vidyut Clean Advisory",
      location: "Chennai & Hyderabad",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80"
    },
    uiPreview: {
      headline: "Consultant RFP & Engineering Portal",
      stats: [
        { label: "Tenders Won", value: "28 Mandates", trend: "100% 5-Star" },
        { label: "Audited Capacity", value: "142 MWp", trend: "Across 4 states" },
        { label: "Avg Audit Fee", value: "₹1.85 Lakh", trend: "+24% vs manual" }
      ],
      recentActivity: [
        { id: "CEIG-92", title: "CEIG Safety Audit Approved", meta: "Coimbatore Textile Spinning Mill (2.5 MW)", status: "Milestone Paid" },
        { id: "IREDA-14", title: "Bankability Report Submitted", meta: "IREDA Debt Refinance / Rajasthan Solar", status: "Signed Off" },
        { id: "PVS-78", title: "PVSyst Simulation Signed", meta: "Hyderabad Pharma SEZ Rooftop Array", status: "Delivered" }
      ]
    }
  },
  {
    id: 'enterprise',
    title: 'Commercial & Industrial Enterprises',
    badge: 'Factory Rooftop Decarbonization',
    tagline: 'Slash grid tariffs from ₹9.50/unit down to ₹3.20/unit with institutional solar reverse auctions & ALMM hardware.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    heroMetric: {
      value: '68%',
      label: 'Power Cost Reduction',
      sublabel: 'Drop from ₹9.50 DISCOM peak tariff to ₹3.20/unit levelized solar cost'
    },
    keyFeatures: [
      'Multi-site factory rooftop feasibility scanner via satellite and shadow analysis',
      'Reverse EPC auction with vetted regional Tier-1 contractors (eliminates 20% broker margin)',
      'Direct module procurement from Mundra & JNPT bonded stock with 25-year OEM warranty',
      'Full ESG compliance report for carbon abatement and Section 32 40% Accelerated Depreciation tax write-off'
    ],
    capabilities: [
      {
        title: 'Factory Solar Feasibility Scanner',
        description: 'Input your monthly electricity bill and factory roof size to see estimated generation, Capex, and payback in 60 seconds.',
        badge: 'Instant Feasibility',
        icon: 'Building2'
      },
      {
        title: 'Reverse EPC Contractor Auction',
        description: 'Vetted regional EPCs bid for your project with standardized warranties, driving down overall implementation costs.',
        badge: 'Competitive Bidding',
        icon: 'Award'
      },
      {
        title: 'Live Generation & Carbon Telemetry',
        description: 'Track real-time solar generation, grid export credits, and carbon offsets across all manufacturing plants in one dashboard.',
        badge: 'ESG Audit-Ready',
        icon: 'Zap'
      }
    ],
    testimonial: {
      quote: "We deployed 4.2 MW across our three textile mills in Surat. Helios Grid cut our Capex by ₹1.4 Crores through direct ALMM procurement and reverse EPC bidding. Our payback period is just 2.8 years.",
      author: "Praveen Kothari",
      role: "Executive Director",
      company: "Kothari Syntex & Fabrics",
      location: "Surat, Gujarat (4.2 MWp Fleet)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80"
    },
    uiPreview: {
      headline: "Kothari Syntex — Multi-Plant Solar Monitor",
      stats: [
        { label: "Fleet Capacity", value: "4.2 MWp", trend: "3 Manufacturing Plants" },
        { label: "Power Savings", value: "₹42.8 Lakh / mo", trend: "vs DISCOM Tariff" },
        { label: "CO2 Abated", value: "4,900 Tons / yr", trend: "Scope 2 Reduction" }
      ],
      recentActivity: [
        { id: "PLANT-01", title: "Surat Mill Unit 1", meta: "1.8 MWp Operating at 98.4% Efficiency", status: "Online" },
        { id: "PLANT-02", title: "Navsari Weaving Plant", meta: "1.2 MWp Inverter Sync Completed", status: "Online" },
        { id: "PLANT-03", title: "Kim Processing Facility", meta: "1.2 MWp Reverse EPC Auction Closed", status: "Under Construction" }
      ]
    }
  }
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

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "GSTIN & MNRE ALMM Verification",
    subtitle: "Automated Compliance & Buyer Underwriting",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    actionText: "Instant Verification in under 2 minutes",
    highlightPills: ["GST Portal e-Verification", "ALMM List-I Validated", "ICICI Bank Escrow Pre-Set"],
    metrics: [
      { label: "Verification Time", value: "< 90 Seconds" },
      { label: "State DISCOM Match", value: "100% Automated" }
    ],
    terminalOutput: {
      command: "helios-india kyc --gstin '27AAACG0561F1Z8' --discom 'MSEDCL'",
      timestamp: "11:15:22 IST",
      outputLines: [
        "✓ GSTIN Active & Validated via GSTN API (Maharashtra)",
        "✓ Credit Line Approved: ₹1.50 Crore via Tata Capital Clean Energy",
        "✓ MNRE ALMM Enlistment: Verified Manufacturer / Class-A EPC",
        "● Status: APPROVED [Ready for Spot Procurement & DISCOM Net-Metering]"
      ],
      statusBadge: "GST & ALMM VERIFIED"
    }
  },
  {
    step: "02",
    title: "AI Smart RFQ & Port Hub Matching",
    subtitle: "Direct-to-Warehouse Pricing & Zero Middleman",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    actionText: "Match tenders across 28 states in 4 minutes",
    highlightPills: ["Mundra & JNPT Port Sync", "Automated Bill of Quantities", "Lowest CIF Landed Cost"],
    metrics: [
      { label: "Avg Bids Per Tender", value: "8.6 Quotes" },
      { label: "Landed Cost Savings", value: "₹2.20 / Wp" }
    ],
    terminalOutput: {
      command: "helios-match tender:route --volume 2.5MWp --tech topcon_585 --depot 'Bhiwandi'",
      timestamp: "11:17:40 IST",
      outputLines: [
        "Scanning 18 state depots & Mundra Port CFS stocks...",
        "Optimal Match: 4,270x Waaree 585W TOPCon at Bhiwandi Central Depot",
        "Landed price: ₹17.85/Wp + GST (Lowest CIF Maharashtra)",
        "● Stock Locked: 3 verified transporters bidding on dispatch"
      ],
      statusBadge: "OPTIMAL MATCH"
    }
  },
  {
    step: "03",
    title: "ICICI Programmatic Bank Escrow",
    subtitle: "Zero Payment Default & Safe Capital Turnover",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80",
    actionText: "Reserve funds safely in institutional custody",
    highlightPills: ["RBI Regulated Escrow", "Smart Release on Delivery", "Automated GST e-Way Bill"],
    metrics: [
      { label: "Payment Default Loss", value: "₹0.00" },
      { label: "Escrow Volume Settled", value: "₹4,850 Cr" }
    ],
    terminalOutput: {
      command: "helios-escrow contract:create --escrow-bank 'ICICI_BANK' --amount 4462500 INR",
      timestamp: "11:19:15 IST",
      outputLines: [
        "Escrow Account Initialized with ICICI Special Custody Branch...",
        "Tranche 1: 30% Released upon e-Way Bill & Dispatch Scan [LOCKED]",
        "Tranche 2: 60% Released upon Pallet Delivery & QR Flash Test [PENDING]",
        "Tranche 3: 10% Released upon DISCOM Net-Meter Inspection [PENDING]",
        "● Cryptographic Contract Signed: Zero Counterparty Risk"
      ],
      statusBadge: "FUNDS ESCROWED"
    }
  },
  {
    step: "04",
    title: "Fast e-Way Bill & DISCOM Grid Tie",
    subtitle: "Real-time Telemetry & Digital Warranty Token",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80",
    actionText: "Turnkey delivery with manufacturer warranty certificate",
    highlightPills: ["Live GPS Truck Telemetry", "Pallet Barcode Scan", "Direct OEM Warranty Registry"],
    metrics: [
      { label: "Transit Time", value: "48-72 Hours" },
      { label: "Warranty Clearance", value: "Instant Digital" }
    ],
    terminalOutput: {
      command: "helios-dispatch track --eway-bill '891048291044' --truck 'MH04-KF-8821'",
      timestamp: "11:21:05 IST",
      outputLines: [
        "GPS Beacon: NH-48 Express Corridor (Pune-Bengaluru Highway)",
        "Transit Shock Sensors: Nominal (0.1g max, pristine pallet integrity)",
        "Pallet Serials: 4,270 modules ingested into Waaree Care Portal",
        "● Electronic Proof of Delivery Signed: Escrow Tranche 2 Disbursed"
      ],
      statusBadge: "DELIVERED & VERIFIED"
    }
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

export const HISTORICAL_SPOT_PRICES = [
  { month: "Jan", topcon: 19.8, perc: 18.2, inverter: 3.6 },
  { month: "Feb", topcon: 19.2, perc: 17.8, inverter: 3.5 },
  { month: "Mar", topcon: 18.8, perc: 17.4, inverter: 3.4 },
  { month: "Apr", topcon: 18.4, perc: 17.1, inverter: 3.3 },
  { month: "May", topcon: 18.0, perc: 16.8, inverter: 3.2 },
  { month: "Jun", topcon: 17.85, perc: 16.5, inverter: 3.16 }
];
