import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
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
      subtitle="Sabes cuánto cuesta y cuándo estará lista antes de partir. Si necesitas arreglar una web antigua o armar un sistema especial, lo conversamos sin costo y te damos un valor cerrado."
      kanjiWatermark="価"
    >
      <div className="border border-[var(--hairline-strong)] rounded-[4px] overflow-hidden bg-[#0D0E13]/90">
        {/* Desktop Ledger Table Header */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 px-8 py-4 border-b border-[var(--hairline-strong)] bg-[#070709]/80 font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[var(--ash)]">
          <div className="col-span-3">Tipo de Proyecto</div>
          <div className="col-span-3">Valor Base</div>
          <div className="col-span-4">Qué Incluye</div>
          <div className="col-span-2 text-right">Contacto</div>
        </div>

        {/* Ledger Rows */}
        <div className="divide-y divide-[var(--hairline)]">
          {PRICING_TIERS.map((tier, idx) => (
            <Reveal key={tier.id} delay={idx * 0.05}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center transition-colors ${
                  tier.recommended
                    ? 'bg-[#C8102E]/[0.05] ring-1 ring-inset ring-[#C8102E]/35'
                    : 'hover:bg-white/[0.015]'
                }`}
              >
                {/* Col 1: Tier Name & Timeline */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono-tech text-xs font-bold text-[var(--hanko)]">
                      {tier.index} · {tier.category}
                    </span>
                    {tier.recommended && (
                      <span className="hanko-seal px-2 py-0.5 rounded-[3px] font-mono-tech text-[10px] uppercase tracking-wider font-bold">
                        Más Pedido
                      </span>
                    )}
                  </div>
                  <h3 className="font-dela text-xl text-[var(--bone)]">{tier.name}</h3>
                  <p className="font-mono-tech text-xs text-[var(--ash)]">
                    Entrega: <span className="text-[var(--bone)]">{tier.timeline}</span>
                  </p>
                </div>

                {/* Col 2: Price */}
                <div className="lg:col-span-3 space-y-1">
                  <div className="font-mono-tech text-xs uppercase tracking-wider text-[var(--ash)]">
                    {tier.priceSubtext}
                  </div>
                  <div className="font-mono-tech text-2xl sm:text-3xl font-bold text-[var(--bone)]">
                    {tier.priceLabel}
                  </div>
                </div>

                {/* Col 3: Deliverables */}
                <ul className="lg:col-span-4 space-y-2">
                  {tier.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4F1EA]/90">
                      <Check className="w-4 h-4 text-[var(--hanko)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Col 4: Action */}
                <div className="lg:col-span-2 flex lg:justify-end pt-2 lg:pt-0">
                  <Button
                    href={tier.ctaHref}
                    variant={tier.recommended ? 'primary' : 'secondary'}
                    size="sm"
                    className="w-full lg:w-auto"
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Ledger Note */}
        <div className="px-6 sm:px-8 py-4 border-t border-[var(--hairline-strong)] bg-[#070709]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-tech text-[var(--ash)]">
          <span>
            El valor exacto queda definido antes de empezar según lo que necesite tu página.
          </span>
          <span className="text-[var(--bone)]">Facilidades de pago: 50% al iniciar · 50% al entregar</span>
        </div>
      </div>
    </Section>
  );
}
