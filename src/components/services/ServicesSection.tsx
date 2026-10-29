import React from 'react';
import { Zap, Building2, Boxes, ArrowLeftRight, Wrench, Check } from 'lucide-react';
import { SERVICES_LIST } from '@/lib/data/servicesData';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Building2,
  Boxes,
  ArrowLeftRight,
  Wrench,
};

export default function ServicesSection() {
  const featured = SERVICES_LIST[0];
  const rest = SERVICES_LIST.slice(1);
  const FeaturedIcon = ICON_MAP[featured.iconName] || Boxes;

  return (
    <Section
      id="services"
      index="01"
      eyebrow="Lo Que Hacemos"
      title="Páginas y sistemas pensados para tu día a día"
      subtitle="Desde tu primera página web lista en una semana hasta una tienda online completa o un sistema para organizar tus ventas."
      kanjiWatermark="技"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Featured Column (Asymmetric B layout) */}
        <Reveal className="lg:col-span-5 flex">
          <div className="sumi-card rounded-[4px] p-7 sm:p-9 flex flex-col justify-between w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-4">
                <span className="hanko-seal px-2.5 py-1 rounded-[3px] font-mono-tech text-xs font-bold">
                  {featured.index} · LISTA EN 1 SEMANA
                </span>
                <FeaturedIcon className="w-5 h-5 text-[var(--hanko)]" />
              </div>

              <div className="space-y-2">
                <p className="font-mono-tech text-xs uppercase tracking-[0.16em] text-[var(--ash)]">
                  {featured.subtitle}
                </p>
                <h3 className="font-dela text-xl sm:text-2xl text-[var(--bone)]">
                  {featured.title}
                </h3>
              </div>

              <p className="text-sm text-[var(--ash)] leading-relaxed">{featured.description}</p>

              <ul className="space-y-2.5 pt-2 border-t border-[var(--hairline)]">
                {featured.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4F1EA]/90">
                    <Check className="w-4 h-4 text-[var(--hanko)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-[var(--hairline)] flex items-center justify-between gap-4">
              <div>
                <span className="block font-mono-tech text-[11px] uppercase tracking-wider text-[var(--ash)]">
                  Plazo de entrega
                </span>
                <span className="font-mono-tech text-sm font-semibold text-[var(--bone)]">
                  {featured.timeline}
                </span>
              </div>
              <Button href="#pricing" variant="secondary" size="sm">
                Ver Valor
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Right Stacked Rows */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName] || Boxes;
            return (
              <Reveal key={service.id} delay={0.06 * (idx + 1)} className="flex">
                <div className="sumi-card rounded-[4px] p-6 sm:p-7 flex flex-col justify-between w-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-xs font-bold text-[var(--hanko)]">
                        {service.index}
                      </span>
                      <Icon className="w-4 h-4 text-[var(--ash)]" />
                    </div>

                    <div>
                      <p className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[var(--ash)]">
                        {service.subtitle}
                      </p>
                      <h3 className="font-dela text-lg text-[var(--bone)] mt-1">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--ash)] leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 pt-3 border-t border-[var(--hairline)]">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#F4F1EA]/85">
                          <span className="text-[var(--hanko)] font-mono-tech">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[var(--hairline)] flex items-center justify-between text-xs font-mono-tech">
                    <span className="text-[var(--ash)]">Plazo</span>
                    <span className="text-[var(--bone)]">{service.timeline}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
