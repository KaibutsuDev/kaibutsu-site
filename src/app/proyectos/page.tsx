import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import {
  FLAGSHIP_KMARKET,
  FLAGSHIP_PROFECHILENO,
  PORTFOLIO_PROJECTS,
} from '@/lib/data/projectsData';

export const metadata = {
  title: 'Proyectos y Arquitecturas | Kaibutsu 怪物',
  description:
    'Explora nuestras plataformas en producción y proyectos desarrollados. Vista técnica y para personas de cada arquitectura en Next.js, React y NestJS.',
};

export default function ProyectosIndexPage() {
  const allProjects = [FLAGSHIP_KMARKET, FLAGSHIP_PROFECHILENO, ...PORTFOLIO_PROJECTS];

  return (
    <div className="relative min-h-screen bg-[var(--ink-bg)] text-[var(--bone)] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        <Section
          id="proyectos-hero"
          index="PROYECTOS"
          eyebrow="Portafolio Técnico"
          title="Plataformas y Sistemas Construidos"
          subtitle="Cada proyecto cuenta con una vista de negocio y una vista técnica con métricas, decisiones de diseño de software y lecciones aprendidas."
          kanjiWatermark="作"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((p, idx) => (
              <Reveal key={p.id} delay={idx * 0.05} className="flex">
                <Link
                  href={`/proyectos/${p.id}`}
                  className="sumi-card rounded-2xl p-7 flex flex-col justify-between group w-full transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-3 font-mono text-xs">
                      <span className="text-[#f87171] uppercase tracking-wider font-semibold">
                        {p.category}
                      </span>
                      <span className="text-[var(--mist)]">{p.status}</span>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-xl text-[var(--bone)] flex items-center justify-between">
                        <span>{p.name}</span>
                        <ArrowUpRight className="w-4 h-4 text-[var(--mist)] group-hover:text-[#f87171] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h3>
                      <p className="text-xs text-[var(--gold)] font-mono mt-1">{p.tagline}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--mist)] leading-relaxed">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-lg bg-white/[0.03] text-[10px] font-mono text-[var(--mist)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[var(--hairline)] flex items-center justify-between text-xs font-mono">
                    <span className="text-[var(--mist)]">Arquitectura y Métricas</span>
                    <span className="text-[var(--bone)] font-semibold group-hover:text-[#f87171] transition-colors">
                      Ver detalle →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center pt-8 border-t border-[var(--hairline)]">
            <Button href="/#cotizador" variant="primary" size="lg">
              <span>Cotizar un Proyecto Similar</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
