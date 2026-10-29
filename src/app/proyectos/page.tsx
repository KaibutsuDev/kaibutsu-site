import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ALL_PROJECT_DETAILS } from '@/lib/data/projectsDetailData';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Proyectos y Trabajos Realizados | Kaibutsu',
  description:
    'Conoce las páginas web, tiendas online y sistemas que hemos creado en Chile. Puedes ver cada trabajo explicado en simple para personas o en su detalle técnico.',
};

export default function ProyectosHubPage() {
  const projects = Object.values(ALL_PROJECT_DETAILS);

  return (
    <div className="min-h-screen bg-[var(--ink-bg)] text-[var(--bone)] flex flex-col washi-grain">
      <Navbar />
      <main className="flex-1 pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-14">
        <header className="border-b border-[var(--hairline)] pb-8 space-y-3 max-w-3xl">
          <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[var(--hanko)] block">
            Trabajos Realizados
          </span>
          <h1 className="font-dela text-3xl sm:text-5xl text-[var(--bone)] tracking-tight">
            Páginas y sistemas que hemos construido
          </h1>
          <p className="text-[var(--ash)] text-sm sm:text-base leading-relaxed">
            Al abrir cualquiera de nuestros trabajos puedes elegir entre la{' '}
            <strong className="text-[var(--bone)]">Vista para Personas</strong> (explicada en
            simple con ejemplos de uso diario) o la{' '}
            <strong className="text-[var(--bone)]">Vista Técnica</strong> (con las herramientas y
            estructura interna).
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.05} className="flex">
              <Link
                href={`/proyectos/${project.id}`}
                className="sumi-card rounded-[4px] p-7 flex flex-col justify-between group w-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-3 font-mono-tech text-[11px]">
                    <span className="text-[var(--hanko)] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[var(--ash)]">{project.status}</span>
                  </div>

                  <div>
                    <h2 className="font-dela text-xl text-[var(--bone)] group-hover:text-[var(--hanko)] transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-xs text-[var(--ash)] font-mono-tech mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--ash)] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[var(--hairline)] mt-6 flex items-center justify-between text-xs font-mono-tech text-[var(--ash)]">
                  <span>Para Personas · Técnico</span>
                  <span className="inline-flex items-center gap-1 text-[var(--bone)] group-hover:text-[var(--hanko)] transition-colors">
                    <span>Ver Detalle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
