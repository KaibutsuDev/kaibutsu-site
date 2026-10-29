import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import KaibutsuLogo from '@/components/ui/KaibutsuLogo';
import Reveal from '@/components/ui/Reveal';
import BrandMarkSvg from '@/components/ui/BrandMarkSvg';

const HERO_METRICS = [
  { value: 'Desde $250.000', label: 'Precios claros en pesos chilenos' },
  { value: 'Carga en 1 seg', label: 'Rápida en celulares y computadores' },
  { value: '100% Tuyo', label: 'Tu dominio, tus cuentas y tu página' },
  { value: '2 Sistemas Propios', label: 'Funcionando hoy en comercios y colegios' },
];

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[var(--hairline)]">
      {/* Sumi-e Atmospheric Scene Background (LCP Priority) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/images/scene-hero-sumie.webp"
          alt="Escena sumi-e de fondo Kaibutsu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/70 via-transparent to-[var(--ink-bg)]" />
      </div>

      {/* Monumental Kanji Watermark (Right-aligned, 3% opacity) */}
      <div
        aria-hidden="true"
        className="absolute top-28 right-4 sm:right-12 pointer-events-none select-none z-0"
      >
        <span className="kanji-watermark text-[22vw] sm:text-[15vw] font-bold tracking-widest block">
          怪物
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left / Main Editorial Column */}
          <div className="lg:col-span-8 space-y-7">
            <Reveal y={12}>
              <div className="inline-flex items-center gap-3">
                <span className="hanko-seal px-2.5 py-1 rounded-[3px] font-mono-tech text-[11px] uppercase tracking-[0.18em]">
                  印 · Chile
                </span>
                <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[var(--ash)]">
                  Páginas Web · Tiendas Online · Sistemas a Medida
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08} y={16}>
              <h1 className="font-dela text-3xl sm:text-5xl lg:text-6xl text-[var(--bone)] tracking-tight leading-[1.08]">
                Hacemos páginas web y sistemas para que vendas más y ordenes tu negocio.
              </h1>
            </Reveal>

            <Reveal delay={0.14} y={16}>
              <p className="text-base sm:text-lg text-[var(--ash)] max-w-2xl leading-relaxed">
                Para emprendedores, profesionales, locales de barrio y negocios que quieren atender
                mejor a sus clientes, recibir pedidos por WhatsApp o cobrar por internet sin
                enredos. Creadores de{' '}
                <strong className="text-[var(--bone)] font-semibold">K-Market</strong> y{' '}
                <strong className="text-[var(--bone)] font-semibold">ProfeChileno</strong>.
              </p>
            </Reveal>

            <Reveal delay={0.2} y={16}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="#pricing" variant="primary" size="lg">
                  <span>Ver Precios en CLP</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="#contact" variant="secondary" size="lg">
                  <span>Cuéntanos tu Idea</span>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Signature Moment: Animated Brush-Stroke K Seal Card */}
          <div className="lg:col-span-4">
            <div className="sumi-card p-6 sm:p-8 rounded-[4px] relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-4 mb-6">
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-[var(--ash)]">
                  Trato Directo
                </span>
                <span className="font-kanji text-sm text-[var(--hanko)] font-bold">怪物・印</span>
              </div>

              <div className="py-4 flex items-center justify-center relative">
                <span className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none text-[#f4f1ea]">
                  <BrandMarkSvg className="w-44 h-44 sm:w-52 sm:h-52" />
                </span>
                <KaibutsuLogo
                  className="w-36 h-36 sm:w-40 sm:h-40 text-[#f4f1ea]"
                  animateStroke
                />
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--hairline)] space-y-2 text-xs font-mono-tech">
                <div className="flex justify-between text-[var(--ash)]">
                  <span>Presupuesto</span>
                  <span className="text-[var(--bone)]">Cerrado antes de partir</span>
                </div>
                <div className="flex justify-between text-[var(--ash)]">
                  <span>Tu página</span>
                  <span className="text-[var(--bone)]">100% a tu nombre</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[var(--hairline)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--hairline)] bg-[#070709]/60">
          {HERO_METRICS.map((item) => (
            <div key={item.label} className="p-5 sm:p-6 space-y-1">
              <div className="font-mono-tech text-xl sm:text-2xl font-bold text-[var(--bone)]">
                {item.value}
              </div>
              <div className="text-xs text-[var(--ash)]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
