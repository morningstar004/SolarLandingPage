import React from 'react';

export interface CompanyPartner {
  id: string;
  name: string;
  category: string;
  ticker?: string;
  badge: string;
  logo: React.ReactNode;
}

export const COMPANY_PARTNERS: CompanyPartner[] = [
  {
    id: 'waaree',
    name: 'Waaree Energies',
    category: "India's #1 Solar Module OEM",
    ticker: 'NSE: WAAREEENER',
    badge: 'ALMM List-I OEM',
    logo: (
      <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* Waaree Rising Sunburst with rays */}
          <circle cx="20" cy="22" r="9" fill="#F37021" />
          <path d="M20 5v4M20 35v4M3 22h4M33 22h4M8 10l3 3M29 31l3 3M8 34l3-3M29 13l3-3" stroke="#F37021" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <text x="44" y="22" fill="#FFFFFF" fontSize="13.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.08em">
          WAAREE
        </text>
        <text x="45" y="32" fill="#F37021" fontSize="7.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.14em">
          ONE WITH THE SUN
        </text>
      </svg>
    )
  },
  {
    id: 'tatapower',
    name: 'Tata Power Solar',
    category: 'Integrated EPC & Cell OEM',
    ticker: 'NSE: TATAPOWER',
    badge: 'ALMM List-I OEM',
    logo: (
      <svg viewBox="0 0 175 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* Tata Classic Oval Monogram */}
          <ellipse cx="20" cy="22" rx="17" ry="17" fill="#005696" />
          <path d="M12 15h16M20 15v14M14 20h12" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
        </g>
        <text x="44" y="20" fill="#FFFFFF" fontSize="12.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.08em">
          TATA POWER
        </text>
        <text x="44" y="32" fill="#38BDF8" fontSize="9.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.22em">
          SOLAR
        </text>
      </svg>
    )
  },
  {
    id: 'adani',
    name: 'Adani Solar',
    category: 'Mundra Giga-Factory',
    ticker: 'NSE: ADANIENT',
    badge: 'ALMM List-I OEM',
    logo: (
      <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* Adani 3-color curved ribbon */}
          <path d="M10 26C10 16 16 10 25 10" stroke="#1E40AF" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M15 29C15 21 20 16 28 16" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M20 32C20 26 24 22 30 22" stroke="#8B5CF6" strokeWidth="3.5" strokeLinecap="round" />
        </g>
        <text x="42" y="22" fill="#FFFFFF" fontSize="14.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.02em">
          adani
        </text>
        <text x="43" y="32" fill="#F59E0B" fontSize="9" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.16em">
          SOLAR
        </text>
      </svg>
    )
  },
  {
    id: 'sungrow',
    name: 'Sungrow India',
    category: 'Commercial & Utility Inverters',
    ticker: 'Bengaluru Factory',
    badge: 'BIS Inverter',
    logo: (
      <svg viewBox="0 0 165 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* Sungrow Solar Arc */}
          <circle cx="20" cy="22" r="13" stroke="#FF6B00" strokeWidth="2.5" />
          <path d="M13 22a7 7 0 0 1 14 0" fill="#FF6B00" />
          <circle cx="20" cy="22" r="3" fill="#FFFFFF" />
        </g>
        <text x="42" y="26" fill="#FFFFFF" fontSize="13.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.06em">
          SUNGROW
        </text>
      </svg>
    )
  },
  {
    id: 'vikram',
    name: 'Vikram Solar',
    category: 'High-Efficiency TOPCon & Bifacial',
    ticker: 'Kolkata Hub',
    badge: 'ALMM List-I OEM',
    logo: (
      <svg viewBox="0 0 165 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* Vikram Solar V-shield */}
          <path d="M9 13L19 32L29 13H24L19 23L14 13H9Z" fill="#F59E0B" />
          <circle cx="19" cy="11" r="2.5" fill="#3B82F6" />
        </g>
        <text x="38" y="21" fill="#FFFFFF" fontSize="12.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.06em">
          VIKRAM
        </text>
        <text x="39" y="32" fill="#F59E0B" fontSize="8.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.18em">
          SOLAR
        </text>
      </svg>
    )
  },
  {
    id: 'growatt',
    name: 'Growatt India',
    category: 'Rooftop Smart Inverters',
    ticker: 'Gurugram Hub',
    badge: 'BIS Inverter',
    logo: (
      <svg viewBox="0 0 155 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* Growatt Solar Leaf */}
          <path d="M11 27C11 16 20 11 28 11C28 20 20 29 11 27Z" fill="#10B981" />
          <path d="M15 25C17 20 21 16 26 14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <text x="36" y="26" fill="#FFFFFF" fontSize="14" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.02em">
          Growatt
        </text>
      </svg>
    )
  },
  {
    id: 'goldi',
    name: 'Goldi Solar',
    category: 'Gujarat Manufacturing Giga-Hub',
    ticker: 'Surat / Navsari',
    badge: 'ALMM List-I OEM',
    logo: (
      <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* Goldi Solar Faceted Diamond */}
          <rect x="9" y="11" width="20" height="20" rx="3.5" transform="rotate(45 19 21)" fill="#F59E0B" />
          <circle cx="19" cy="21" r="4.5" fill="#101B17" />
        </g>
        <text x="40" y="21" fill="#FFFFFF" fontSize="12.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.08em">
          GOLDI
        </text>
        <text x="41" y="32" fill="#F59E0B" fontSize="8.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.2em">
          SOLAR
        </text>
      </svg>
    )
  },
  {
    id: 'havells',
    name: 'Havells Solar',
    category: 'Make In India Consumer & C&I',
    ticker: 'NSE: HAVELLS',
    badge: 'MNRE Approved',
    logo: (
      <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* Havells Signature Red Wave */}
          <path d="M7 26C11 15 16 15 20 26C24 15 29 15 33 26" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" />
        </g>
        <text x="42" y="21" fill="#FFFFFF" fontSize="12.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.06em">
          HAVELLS
        </text>
        <text x="43" y="31" fill="#EF4444" fontSize="8" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.16em">
          SOLAR
        </text>
      </svg>
    )
  },
  {
    id: 'luminous',
    name: 'Luminous Solar',
    category: 'Schneider Electric Backed',
    ticker: 'Rooftop Champion',
    badge: 'BIS Certified',
    logo: (
      <svg viewBox="0 0 165 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* Luminous Electric Spark */}
          <rect x="9" y="12" width="19" height="19" rx="4.5" fill="#0284C7" />
          <path d="M18.5 15l1.8 3.5 3.5 1.8-3.5 1.8-1.8 3.5-1.8-3.5-3.5-1.8 3.5-1.8 1.8-3.5z" fill="#FFFFFF" />
        </g>
        <text x="38" y="26" fill="#FFFFFF" fontSize="12.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.08em">
          LUMINOUS
        </text>
      </svg>
    )
  },
  {
    id: 'renewsys',
    name: 'RenewSys Solar',
    category: 'Integrated Cells, EVA & Backsheets',
    ticker: 'Bengaluru / Hyderabad',
    badge: 'ALMM List-I OEM',
    logo: (
      <svg viewBox="0 0 165 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* RenewSys Solar Orbit */}
          <ellipse cx="19" cy="22" rx="13" ry="6.5" stroke="#10B981" strokeWidth="2.2" transform="rotate(-25 19 22)" />
          <circle cx="19" cy="22" r="4.5" fill="#3B82F6" />
        </g>
        <text x="40" y="26" fill="#FFFFFF" fontSize="13.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">
          RenewSys
        </text>
      </svg>
    )
  },
  {
    id: 'microtek',
    name: 'Microtek Solar',
    category: 'High-Efficiency MPPT PCU & Inverters',
    ticker: 'Parwanoo Hub',
    badge: 'BIS Certified',
    logo: (
      <svg viewBox="0 0 165 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* Microtek Shield */}
          <path d="M9 13l10-3.5 10 3.5v8c0 6-5 11.5-10 13.5-5-2-10-7.5-10-13.5v-8z" fill="#2563EB" />
          <path d="M13 22h3.5l1.8-3.5 1.8 7 1.8-3.5h2.5" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x="38" y="21" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.06em">
          MICROTEK
        </text>
        <text x="39" y="31" fill="#2563EB" fontSize="8" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.16em">
          SOLAR
        </text>
      </svg>
    )
  },
  {
    id: 'cleanmax',
    name: 'CleanMax Solar',
    category: 'Brookfield Backed C&I Leader',
    ticker: 'Mumbai HQ',
    badge: 'C&I Developer',
    logo: (
      <svg viewBox="0 0 155 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-14 sm:max-h-16">
        <g>
          {/* CleanMax Renewable Sun Circle */}
          <circle cx="18" cy="22" r="12" stroke="#22C55E" strokeWidth="2.2" strokeDasharray="3 2" />
          <circle cx="18" cy="22" r="5" fill="#22C55E" />
        </g>
        <text x="38" y="26" fill="#FFFFFF" fontSize="13.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">
          CleanMax
        </text>
      </svg>
    )
  }
];
