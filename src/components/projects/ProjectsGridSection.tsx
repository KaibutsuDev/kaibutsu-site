import React from 'react';
import ProjectCard from './ProjectCard';
import { PORTFOLIO_PROJECTS } from '@/lib/data/projectsData';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

export default function ProjectsGridSection() {
  return (
    <Section
      id="portfolio"
      index="03B"
      eyebrow="Más Trabajos"
      title="Páginas y sistemas para distintos rubros"
      subtitle="Trabajos realizados para barberías, oficinas de abogados, chocolaterías, pequeños comercios y herramientas creativas en 3D."
      kanjiWatermark="作"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_PROJECTS.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 0.05} className="flex">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
