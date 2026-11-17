import React from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/lib/types/site';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.id}`}
      className="sumi-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-3 font-mono text-xs">
          <span className="text-[#f87171] uppercase tracking-wider font-semibold">
            {project.category}
          </span>
          <span className="text-[var(--mist)]">{project.status}</span>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg text-[var(--bone)] flex items-center justify-between">
            <span>{project.name}</span>
            <ArrowUpRight className="w-4 h-4 text-[var(--mist)] group-hover:text-[#f87171] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>
          <p className="text-xs text-[var(--mist)] font-mono mt-1">{project.tagline}</p>
        </div>

        <p className="text-[var(--mist)] text-xs sm:text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="pt-4 mt-6 border-t border-[var(--hairline)] flex items-center justify-between text-xs font-mono text-[var(--mist)]">
        <span>Arquitectura y Alcance</span>
        <span className="text-[var(--bone)] font-semibold group-hover:text-[#f87171] transition-colors">
          Ver caso →
        </span>
      </div>
    </Link>
  );
}
