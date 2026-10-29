import React from 'react';
import { TechCategory } from '@/lib/types/site';

interface TechCategoryGroupProps {
  category: TechCategory;
}

export default function TechCategoryGroup({ category }: TechCategoryGroupProps) {
  return (
    <div className="sumi-card rounded-[4px] p-6 space-y-4">
      <div className="space-y-2 pb-3 border-b border-[var(--hairline)]">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-dela text-base text-[var(--bone)]">{category.category}</h3>
          <span className="hanko-seal px-2 py-0.5 rounded-[3px] font-mono-tech text-[10px] uppercase tracking-wider shrink-0">
            {category.badge}
          </span>
        </div>
        {category.description && (
          <p className="text-xs text-[var(--ash)] leading-relaxed">{category.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="p-2.5 rounded-[3px] border border-[var(--hairline)] bg-[#070709]/60 text-xs font-mono-tech flex items-center justify-between gap-2"
          >
            <span className="text-[var(--bone)] font-semibold truncate">{skill.name}</span>
            <span className="text-[10px] text-[var(--ash)] shrink-0">{skill.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
