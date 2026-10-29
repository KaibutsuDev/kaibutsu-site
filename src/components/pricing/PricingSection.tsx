import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '@/lib/data/pricingData';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

export default function PricingSection() {
  return (
    <Section
      id="pricing"
      index="02"
      eyebrow="Valores y Plazos"
      title="Precios claros en Pesos Chilenos (CLP)"
      subtitle="Sabes exactamente cuánto cuesta y cuándo estará lista antes de partir. Sin letras chicas ni cobros sorpresa."
      kanjiWatermark="価"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRICING_TIERS.map((tier, idx) => {
          const isFeatured = tier.recommended;
          return (
            <Reveal key={tier.id} delay={idx * 0.08} className="flex">
              <div
                className={`w-full rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#1c1216] to-[var(--ink-surface)] border-2 border-[var(--hanko)] shadow-[0_12px_36px_rgba(200,16,46,0.25)]'
                    : 'bg-[var(--ink-card)] border border-[var(--hairline)] hover:border-[var(--hairline-strong)]'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="hanko-seal px-3.5 py-1 text-[11px] font-mono uppercase tracking-wider font-bold shadow-md">
                      ★ Más Solicitado
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Category and Name */}
                  <div>
                    <span className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-wider">
                      {tier.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--bone)] mt-1">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[var(--mist)] mt-1">
                      Tiempo estimado: <strong className="text-[var(--bone)]">{tier.timeline}</strong>
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pb-4 border-b border-[var(--hairline)]">
                    <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider block">
                      {tier.priceSubtext}
                    </span>
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-[var(--bone)] mt-0.5">
                      {tier.priceLabel}
                      <span className="text-xs font-mono font-normal text-[var(--gold)] ml-2">CLP</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {tier.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--bone)]/90">
                        <Check className="w-4 h-4 text-[var(--hanko)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="pt-6 mt-6 border-t border-[var(--hairline)]">
                  <Button
                    href={tier.ctaHref}
                    variant={isFeatured ? 'primary' : 'secondary'}
                    className="w-full justify-center"
                    size="md"
                  >
                    <span>Cotizar este Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
