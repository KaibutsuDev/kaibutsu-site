export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'SaaS' | 'EdTech' | 'E-Commerce' | '3D / Graphics' | 'B2B / Legal';
  status: 'Producción' | 'Activo' | 'Flagship' | 'En Escala';
  metrics?: { label: string; value: string }[];
  tags: string[];
  imageSrc?: string;
  href?: string;
  repo?: string;
  isFlagship?: boolean;
}

export interface ProjectUserSection {
  targetAudience: string;
  headline: string;
  problemStatement: string;
  dailyBenefits: { title: string; desc: string }[];
  useCases: { title: string; scenario: string; outcome: string }[];
}

export interface ProjectTechSection {
  architectureHeadline: string;
  architectureDescription: string;
  deepStack: { category: string; items: string[] }[];
  enterpriseGains: { title: string; desc: string }[];
  securityAndReliability: string[];
  benchmarks: { label: string; value: string; detail: string }[];
}

export interface ProjectDetail extends ProjectItem {
  userSection: ProjectUserSection;
  techSection: ProjectTechSection;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
  timeline: string;
  featured?: boolean;
}

export interface PricingTier {
  id: string;
  index: string;
  category: string;
  name: string;
  priceLabel: string;
  priceSubtext: string;
  timeline: string;
  deliverables: string[];
  ctaLabel: string;
  ctaHref: string;
  recommended?: boolean;
}

export interface ProcessStep {
  index: string;
  title: string;
  duration: string;
  description: string;
  deliverable: string;
}

export interface TechCategory {
  category: string;
  badge: string;
  description?: string;
  skills: { name: string; detail: string; highlight?: boolean }[];
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}
