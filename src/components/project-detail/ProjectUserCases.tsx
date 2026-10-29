import React from 'react';
import { ProjectUserSection } from '@/lib/types/site';
import { Check } from 'lucide-react';

interface ProjectUserCasesProps {
  userSection: ProjectUserSection;
}

export default function ProjectUserCases({ userSection }: ProjectUserCasesProps) {
  return (
    <div className="space-y-6 pt-4">
      <h2 className="font-dela text-xl sm:text-2xl text-[var(--bone)]">
        Escenarios reales de uso
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {userSection.useCases.map((useCase, idx) => (
          <div
            key={idx}
            className="sumi-card rounded-[4px] p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[var(--hanko)] block">
                Escenario 0{idx + 1}
              </span>
              <h3 className="text-base font-bold text-[var(--bone)]">{useCase.title}</h3>
              <p className="text-xs text-[var(--ash)] leading-relaxed">{useCase.scenario}</p>
            </div>

            <div className="p-3.5 rounded-[3px] bg-[#070709]/80 border border-[var(--hairline)] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono-tech font-semibold text-[var(--bone)]">
                <Check className="w-3.5 h-3.5 text-[var(--hanko)] shrink-0" />
                <span>Resultado</span>
              </div>
              <p className="text-[11px] text-[var(--ash)] leading-normal">{useCase.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
