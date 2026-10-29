import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ProfeChilenoFeatures from './ProfeChilenoFeatures';
import { FLAGSHIP_PROFECHILENO } from '@/lib/data/projectsData';
import Button from '@/components/ui/Button';

export default function ProfeChilenoSection() {
  return (
    <div className="sumi-card rounded-[4px] p-6 sm:p-10 lg:p-12 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[var(--hairline)]">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[var(--hanko)]">
              Caso 02 · Apoyo Diario para Profesores y Colegios
            </span>
            <span className="hanko-seal px-2 py-0.5 rounded-[3px] font-mono-tech text-[10px] uppercase tracking-wider">
              Funcionando Hoy
            </span>
          </div>
          <h3 className="font-dela text-2xl sm:text-3xl text-[var(--bone)]">
            ProfeChileno
          </h3>
          <p className="text-[var(--ash)] text-sm sm:text-base max-w-2xl leading-relaxed">
            {FLAGSHIP_PROFECHILENO.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Button href="/proyectos/profechileno" variant="primary" size="md">
            <span>Ver Cómo Funciona</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
          <Button href="https://www.profechileno.cl" external variant="secondary" size="md">
            <span>Ir a profechileno.cl</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(FLAGSHIP_PROFECHILENO.metrics || []).map((m) => (
          <div
            key={m.label}
            className="p-4 rounded-[4px] bg-[#070709]/70 border border-[var(--hairline)]"
          >
            <div className="font-mono-tech text-base sm:text-lg font-bold text-[var(--bone)]">
              {m.value}
            </div>
            <div className="text-xs text-[var(--ash)] mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>

      <ProfeChilenoFeatures />
    </div>
  );
}
