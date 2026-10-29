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
      className="sumi-card rounded-[4px] p-6 sm:p-7 flex flex-col justify-between group"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-3 font-mono-tech text-[11px]">
          <span className="text-[var(--hanko)] uppercase tracking-[0.16em]">
            {project.category}
          </span>
          <span className="text-[var(--ash)]">{project.status}</span>
        </div>

        <div>
          <h3 className="font-dela text-lg text-[var(--bone)] flex items-center justify-between">
            <span>{project.name}</span>
            <ArrowUpRight className="w-4 h-4 text-[var(--ash)] group-hover:text-[var(--hanko)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </h3>
          <p className="text-xs text-[var(--ash)] font-mono-tech mt-1">{project.tagline}</p>
        </div>

        <p className="text-[var(--ash)] text-xs sm:text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="pt-4 mt-6 border-t border-[var(--hairline)] flex items-center justify-between text-xs font-mono-tech text-[var(--ash)]">
        <span>Para Personas · Técnico</span>
        <span className="text-[var(--bone)] group-hover:text-[var(--hanko)] transition-colors">
          Ver detalle →
        </span>
      </div>
    </Link>
  );
}
