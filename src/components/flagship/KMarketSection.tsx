import React from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import KMarketMockupGallery from './KMarketMockupGallery';
import { FLAGSHIP_KMARKET } from '@/lib/data/projectsData';
import Button from '@/components/ui/Button';

export default function KMarketSection() {
  return (
    <div className="sumi-card rounded-[4px] p-6 sm:p-10 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[4px] bg-white/[0.03] border border-[var(--hairline-strong)] flex items-center justify-center">
                <Image
                  src="/images/k-market/k-market-isotipo-km.svg"
                  alt="K-Market Isotipo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[var(--hanko)] block">
                  Caso 01 · Comercios de Barrio y Locales de Comida
                </span>
                <h3 className="font-dela text-2xl sm:text-3xl text-[var(--bone)]">
                  K-Market
                </h3>
              </div>
            </div>
            <span className="hanko-seal px-2.5 py-1 rounded-[3px] font-mono-tech text-[10px] uppercase tracking-wider">
              Funcionando Hoy
            </span>
          </div>

          <p className="text-[var(--ash)] text-sm sm:text-base leading-relaxed">
            {FLAGSHIP_KMARKET.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            {(FLAGSHIP_KMARKET.metrics || []).map((m) => (
              <div
                key={m.label}
                className="p-3.5 rounded-[4px] bg-[#070709]/70 border border-[var(--hairline)]"
              >
                <div className="font-mono-tech text-lg font-bold text-[var(--bone)]">
                  {m.value}
                </div>
                <div className="text-[11px] text-[var(--ash)] mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button href="/proyectos/k-market" variant="primary" size="md">
              <span>Ver Cómo Funciona</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
            <Button href="https://k-market.cl" external variant="secondary" size="md">
              <span>Ir a k-market.cl</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <KMarketMockupGallery />
        </div>
      </div>
    </div>
  );
}
