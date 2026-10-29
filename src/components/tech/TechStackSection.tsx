import React from 'react';
import TechCategoryGroup from './TechCategoryGroup';
import { TECH_CATEGORIES } from '@/lib/data/techStackData';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

export default function TechStackSection() {
  return (
    <Section
      id="tech"
      index="05"
      eyebrow="Herramientas Reales"
      title="Tecnologías modernas que cuidan tu negocio"
      subtitle="Mostramos con qué construimos cada página y sistema para que tengas la tranquilidad de que tu inversión no quedará obsoleta ni amarrada a nosotros."
      kanjiWatermark="術"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECH_CATEGORIES.map((category, idx) => (
          <Reveal key={category.category} delay={idx * 0.05}>
            <TechCategoryGroup category={category} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
