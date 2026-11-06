export type StakeholderRole = 'vendor' | 'trader' | 'consultant' | 'enterprise';

export interface SolarProduct {
  id: string;
  category: 'module' | 'inverter' | 'storage' | 'mounting';
  brand: string;
  model: string;
  technology: string;
  spec: string;
  priceInr: string;
  pricePerWattInr: string;
  availableMw: number;
  location: string;
  almmListed: boolean;
  bisCertified: boolean;
  warranty: string;
  efficiency: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  logoText: string;
  region: string;
  role: string;
  image: string;
  headline: string;
  quote: string;
  personName: string;
  personRole: string;
  metrics: { value: string; label: string }[];
  tags: string[];
}

export interface PlatformStat {
  label: string;
  value: string;
  change: string;
  description: string;
  isPositive: boolean;
  iconName: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}
