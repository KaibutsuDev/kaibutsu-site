import React from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import KMarketMockupGallery from './KMarketMockupGallery';
import { FLAGSHIP_KMARKET } from '@/lib/data/projectsData';
import Button from '@/components/ui/Button';

export default function KMarketSection() {
  return (
    <div className="sumi-card rounded-2xl p-6 sm:p-10 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                <Image
                  src="/images/k-market/k-market-isotipo-km.svg"
                  alt="K-Market Isotipo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#f87171] font-semibold block">
                  Caso 01 · Plataforma Multi-Tenant para Comercio
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--bone)]">
                  K-Market
                </h3>
              </div>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-[var(--hanko)]/20 text-[#fca5a5] border border-[var(--hanko)]/40">
              En Producción
            </span>
          </div>

          <p className="text-[var(--mist)] text-sm sm:text-base leading-relaxed">
            {FLAGSHIP_KMARKET.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            {(FLAGSHIP_KMARKET.metrics || []).map((m) => (
              <div
                key={m.label}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/10"
              >
                <div className="font-heading text-lg font-bold text-[var(--bone)]">
                  {m.value}
                </div>
                <div className="text-xs text-[var(--mist)] mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button href="/proyectos/k-market" variant="primary" size="md">
              <span>Ver Arquitectura</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
            <Button href="https://k-market.cl" external variant="katana" size="md">
              <span>Visitar k-market.cl</span>
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
