import { ProjectDetail } from '@/lib/types/site';
import { K_MARKET_DETAIL } from './projects/kMarketDetail';
import { PROFE_CHILENO_DETAIL } from './projects/profeChilenoDetail';
import { PORTFOLIO_DETAILS } from './projects/portfolioDetail';

export const ALL_PROJECT_DETAILS: Record<string, ProjectDetail> = {
  'k-market': K_MARKET_DETAIL,
  profechileno: PROFE_CHILENO_DETAIL,
  ...PORTFOLIO_DETAILS,
};

export function getProjectDetail(id: string): ProjectDetail | null {
  return ALL_PROJECT_DETAILS[id] || null;
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(ALL_PROJECT_DETAILS);
}
