import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ProfeChilenoFeatures from './ProfeChilenoFeatures';
import { FLAGSHIP_PROFECHILENO } from '@/lib/data/projectsData';
import Button from '@/components/ui/Button';

export default function ProfeChilenoSection() {
  return (
    <div className="sumi-card rounded-2xl p-6 sm:p-10 lg:p-12 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[var(--hairline)]">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f87171] font-semibold">
              Caso 02 · Plataforma de Gestión y Asistencia Docente
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-[var(--hanko)]/20 text-[#fca5a5] border border-[var(--hanko)]/40">
              En Producción
            </span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--bone)]">
            ProfeChileno
          </h3>
          <p className="text-[var(--mist)] text-sm sm:text-base max-w-2xl leading-relaxed">
            {FLAGSHIP_PROFECHILENO.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Button href="/proyectos/profechileno" variant="primary" size="md">
            <span>Ver Arquitectura</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
          <Button href="https://www.profechileno.cl" external variant="katana" size="md">
            <span>Visitar profechileno.cl</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(FLAGSHIP_PROFECHILENO.metrics || []).map((m) => (
          <div
            key={m.label}
            className="p-4 rounded-xl bg-white/[0.02] border border-white/10"
          >
            <div className="font-heading text-base sm:text-lg font-bold text-[var(--bone)]">
              {m.value}
            </div>
            <div className="text-xs text-[var(--mist)] mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="pt-2">
        <ProfeChilenoFeatures />
      </div>
    </div>
  );
}
