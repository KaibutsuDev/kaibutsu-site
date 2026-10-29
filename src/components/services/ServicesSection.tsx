import React from 'react';
import { Zap, Building2, Boxes, ArrowLeftRight, Wrench, Check, ArrowRight } from 'lucide-react';
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
      subtitle="Desde tu primera página web lista en una semana hasta una tienda online completa o un sistema para ordenar tus operaciones."
      kanjiWatermark="技"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Featured Card */}
        <Reveal className="lg:col-span-5 flex">
          <div className="sumi-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between w-full relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-4">
                <span className="hanko-seal px-3 py-1 text-xs font-mono font-semibold">
                  {featured.index} · LISTA EN 1 SEMANA
                </span>
                <FeaturedIcon className="w-5 h-5 text-[var(--hanko)]" />
              </div>

              <div className="space-y-1.5">
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--mist)]">
                  {featured.subtitle}
                </p>
                <h3 className="font-dela text-xl sm:text-2xl text-[var(--bone)]">
                  {featured.title}
                </h3>
              </div>

              <p className="text-sm text-[var(--mist)] leading-relaxed">
                {featured.description}
              </p>

              <ul className="space-y-2.5 pt-2 border-t border-[var(--hairline)]">
                {featured.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--bone)]/90">
                    <Check className="w-4 h-4 text-[var(--hanko)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[var(--hairline)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[var(--mist)]">
                  Plazo de entrega
                </span>
                <span className="text-sm font-semibold text-[var(--bone)]">
                  {featured.timeline}
                </span>
              </div>
              <Button href="#cotizador" variant="secondary" size="sm" className="justify-center">
                <span>Cotizar Servicio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Right Bento Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {rest.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName] || Boxes;
            return (
              <Reveal key={service.id} delay={0.06 * (idx + 1)} className="flex">
                <div className="sumi-card rounded-2xl p-6 flex flex-col justify-between w-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[var(--gold)]">
                        {service.index}
                      </span>
                      <Icon className="w-4 h-4 text-[var(--mist)]" />
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-base sm:text-lg text-[var(--bone)]">
                        {service.title}
                      </h4>
                      <p className="text-xs text-[var(--mist)] mt-1.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[var(--hairline)] flex items-center justify-between text-xs">
                    <span className="text-[var(--mist)]">{service.timeline}</span>
                    <a
                      href="#cotizador"
                      className="text-[var(--bone)] font-semibold hover:text-[var(--gold)] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Cotizar</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
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
