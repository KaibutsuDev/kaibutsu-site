import React from 'react';
import { PROCESS_STEPS } from '@/lib/data/pricingData';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

export default function ProcessSection() {
  return (
    <Section
      id="process"
      index="04"
      eyebrow="Flujo de Trabajo"
      title="Cómo construimos tu proyecto: Transparencia paso a paso"
      subtitle="Trabajamos con plazos reales, metodología rigurosa y sin apuros que comprometan la calidad. Sabes en todo momento qué estamos construyendo y puedes auditar avances en tiempo real."
      kanjiWatermark="道"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROCESS_STEPS.map((step, idx) => (
          <Reveal key={step.index} delay={idx * 0.06} className="flex">
            <div className="sumi-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between w-full relative overflow-hidden group hover:border-[#c8102e]/50">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="font-mono font-bold text-[#ff4d6d]">
                    ETAPA {step.index}
                  </span>
                  <span className="font-mono text-[var(--gold)] font-medium">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-[var(--bone)]">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[var(--mist)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[var(--mist)] mb-1">
                  Qué entregamos en esta etapa:
                </span>
                <span className="text-xs font-semibold text-[var(--bone)] block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
