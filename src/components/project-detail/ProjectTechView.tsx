import React from 'react';
import { ProjectTechSection } from '@/lib/types/site';
import ProjectTechMetrics from './ProjectTechMetrics';

interface ProjectTechViewProps {
  techSection: ProjectTechSection;
}

export default function ProjectTechView({ techSection }: ProjectTechViewProps) {
  return (
    <div className="space-y-12">
      <div className="sumi-card rounded-[4px] p-6 sm:p-10 space-y-3">
        <span className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[var(--hanko)] block">
          Cómo Está Construido
        </span>
        <h2 className="font-dela text-2xl sm:text-3xl text-[var(--bone)]">
          {techSection.architectureHeadline}
        </h2>
        <p className="text-[var(--ash)] text-sm sm:text-base leading-relaxed">
          {techSection.architectureDescription}
        </p>
      </div>

      <div className="space-y-5">
        <h2 className="font-dela text-xl sm:text-2xl text-[var(--bone)]">
          Herramientas y tecnologías usadas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techSection.deepStack.map((stackGroup, idx) => (
            <div key={idx} className="sumi-card rounded-[4px] p-5 space-y-3">
              <div className="text-xs font-mono-tech uppercase tracking-wider text-[var(--hanko)] border-b border-[var(--hairline)] pb-2">
                {stackGroup.category}
              </div>
              <ul className="space-y-1.5">
                {stackGroup.items.map((item, i) => (
                  <li key={i} className="text-xs font-mono-tech text-[#F4F1EA]/90 flex items-center gap-2">
                    <span className="text-[var(--hanko)]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <h2 className="font-dela text-xl sm:text-2xl text-[var(--bone)]">
          Puntos fuertes del sistema
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {techSection.enterpriseGains.map((gain, idx) => (
            <div key={idx} className="sumi-card rounded-[4px] p-6 space-y-2">
              <h3 className="text-sm font-bold text-[var(--bone)]">{gain.title}</h3>
              <p className="text-xs text-[var(--ash)] leading-relaxed">{gain.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <ProjectTechMetrics techSection={techSection} />
    </div>
  );
}
