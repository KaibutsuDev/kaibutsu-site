import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ProjectDetail } from '@/lib/types/site';
import ProjectModeToggle, { ViewMode } from './ProjectModeToggle';
import Button from '@/components/ui/Button';

interface ProjectDetailHeroProps {
  project: ProjectDetail;
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function ProjectDetailHero({
  project,
  currentMode,
  onModeChange,
}: ProjectDetailHeroProps) {
  return (
    <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[var(--hairline)] bg-[#0D0E13]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--ash)] hover:text-[var(--bone)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Proyectos</span>
          </Link>

          {project.href && (
            <Button href={project.href} external variant="secondary" size="sm">
              <span>Visitar {project.name}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          )}
        </div>

        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-3 font-mono-tech text-xs">
            <span className="text-[var(--hanko)] uppercase tracking-[0.18em]">
              {project.category}
            </span>
            <span className="hanko-seal px-2 py-0.5 rounded-[3px] text-[10px] uppercase tracking-wider">
              {project.status}
            </span>
          </div>

          <h1 className="font-dela text-3xl sm:text-5xl text-[var(--bone)] tracking-tight">
            {project.name}
          </h1>

          <p className="text-[var(--ash)] text-base sm:text-lg leading-relaxed">
            {project.tagline}
          </p>
        </div>

        <div className="pt-2">
          <ProjectModeToggle currentMode={currentMode} onModeChange={onModeChange} />
        </div>
      </div>
    </section>
  );
}
