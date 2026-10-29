import React from 'react';
import { PROCESS_STEPS } from '@/lib/data/pricingData';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

export default function ProcessSection() {
  return (
    <Section
      id="process"
      index="04"
      eyebrow="Cómo Trabajamos"
      title="Cuatro pasos simples desde tu idea hasta publicar"
      subtitle="Sin tecnicismos ni meses de espera sin saber qué pasa. Desde la primera semana puedes ver los avances directamente en tu celular."
      kanjiWatermark="道"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STEPS.map((step, idx) => (
          <Reveal key={step.index} delay={idx * 0.06} className="flex">
            <div className="sumi-card rounded-[4px] p-6 sm:p-7 flex flex-col justify-between w-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-3 font-mono-tech text-xs">
                  <span className="text-[var(--hanko)] font-bold">PASO {step.index}</span>
                  <span className="text-[var(--ash)]">{step.duration}</span>
                </div>

                <h3 className="font-dela text-lg text-[var(--bone)]">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--ash)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[var(--hairline)]">
                <span className="block font-mono-tech text-[10px] uppercase tracking-wider text-[var(--ash)]">
                  Qué recibes
                </span>
                <span className="font-mono-tech text-xs font-semibold text-[var(--bone)]">
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
