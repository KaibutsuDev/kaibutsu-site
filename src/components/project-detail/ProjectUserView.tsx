import React from 'react';
import { ProjectUserSection } from '@/lib/types/site';
import ProjectUserCases from './ProjectUserCases';

interface ProjectUserViewProps {
  userSection: ProjectUserSection;
}

export default function ProjectUserView({ userSection }: ProjectUserViewProps) {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="sumi-card rounded-[4px] p-6 sm:p-8 space-y-3">
          <span className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[var(--hanko)] block">
            ¿Para Quién Es?
          </span>
          <h2 className="font-dela text-lg text-[var(--bone)]">{userSection.headline}</h2>
          <p className="text-xs sm:text-sm text-[var(--ash)] leading-relaxed">
            {userSection.targetAudience}
          </p>
        </div>

        <div className="sumi-card rounded-[4px] p-6 sm:p-8 space-y-3">
          <span className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[var(--hanko)] block">
            Problema que Evita
          </span>
          <h2 className="font-dela text-lg text-[var(--bone)]">Lo que ahorras en el día a día</h2>
          <p className="text-xs sm:text-sm text-[var(--ash)] leading-relaxed">
            {userSection.problemStatement}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-dela text-xl sm:text-2xl text-[var(--bone)]">
          Cómo te ayuda todos los días
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {userSection.dailyBenefits.map((benefit, idx) => (
            <div key={idx} className="sumi-card rounded-[4px] p-6 space-y-2">
              <div className="font-mono-tech text-xs text-[var(--hanko)]">0{idx + 1}</div>
              <h3 className="text-sm font-bold text-[var(--bone)]">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-[var(--ash)] leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ProjectUserCases userSection={userSection} />
    </div>
  );
}
