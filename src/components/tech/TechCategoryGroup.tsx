import React from 'react';
import { TechCategory } from '@/lib/types/site';

interface TechCategoryGroupProps {
  category: TechCategory;
}

export default function TechCategoryGroup({ category }: TechCategoryGroupProps) {
  return (
    <div className="sumi-card rounded-2xl p-6 sm:p-7 space-y-4">
      <div className="space-y-2 pb-3 border-b border-[var(--hairline)]">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--bone)]">
            {category.category}
          </h3>
          <span className="font-mono text-xs text-[#f87171] uppercase tracking-wider font-semibold">
            {category.badge}
          </span>
        </div>
        {category.description && (
          <p className="text-xs text-[var(--mist)] leading-relaxed">{category.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="p-3 rounded-xl border border-white/8 bg-white/[0.02] text-xs font-mono flex items-center justify-between gap-2"
          >
            <span className="text-[var(--bone)] font-semibold truncate">{skill.name}</span>
            <span className="text-[11px] text-[var(--mist)] shrink-0">{skill.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
