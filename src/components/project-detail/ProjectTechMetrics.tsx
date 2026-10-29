import React from 'react';
import { ProjectTechSection } from '@/lib/types/site';
import { Check } from 'lucide-react';

interface ProjectTechMetricsProps {
  techSection: ProjectTechSection;
}

export default function ProjectTechMetrics({ techSection }: ProjectTechMetricsProps) {
  return (
    <div className="space-y-8 pt-4">
      <div className="space-y-4">
        <h2 className="font-dela text-xl sm:text-2xl text-[var(--bone)]">
          Velocidad y resultados medidos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {techSection.benchmarks.map((bench, idx) => (
            <div key={idx} className="sumi-card rounded-[4px] p-6 space-y-2">
              <div className="text-xs font-mono-tech uppercase tracking-wider text-[var(--ash)]">
                {bench.label}
              </div>
              <div className="font-mono-tech text-3xl font-bold text-[var(--bone)]">
                {bench.value}
              </div>
              <p className="text-xs text-[var(--ash)] leading-snug">{bench.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sumi-card rounded-[4px] p-6 sm:p-8 space-y-4">
        <span className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[var(--hanko)] block">
          Seguridad y Cuidado de Datos
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {techSection.securityAndReliability.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4F1EA]/90">
              <Check className="w-4 h-4 text-[var(--hanko)] mt-0.5 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
