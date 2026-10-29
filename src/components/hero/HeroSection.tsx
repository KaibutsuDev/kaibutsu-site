import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageSquareCode } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import BrandMarkSvg from '@/components/ui/BrandMarkSvg';

const HERO_METRICS = [
  { value: 'Desde $250.000', label: 'Valores claros en CLP' },
  { value: 'Carga < 1 seg', label: 'Velocidad Next.js' },
  { value: '100% Tuyo', label: 'Código y dominio propios' },
  { value: 'SaaS Activos', label: 'K-Market y ProfeChileno' },
];

export default function HeroSection() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[var(--hairline)]">
      {/* Sumi-e Atmospheric Scene Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/images/scene-hero-sumie.webp"
          alt="Escena sumi-e de fondo Kaibutsu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-75 sm:opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/80 via-transparent to-[var(--ink-bg)]" />
      </div>

      {/* Monumental Kanji Watermark */}
      <div
        aria-hidden="true"
        className="absolute top-20 sm:top-28 right-2 sm:right-12 pointer-events-none select-none z-0"
      >
        <span className="kanji-watermark text-[30vw] sm:text-[16vw] font-bold tracking-widest block opacity-20 sm:opacity-30">
          怪物
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Main Editorial Column */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-7">
            <Reveal y={12}>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="hanko-seal px-3 py-1 text-[11px] font-mono uppercase tracking-wider font-semibold">
                  印 · Chile
                </span>
                <span className="text-xs sm:text-sm font-medium text-[var(--mist)]">
                  Páginas Web · Tiendas Online · Sistemas a Medida
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06} y={16}>
              <h1 className="font-dela text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-[var(--bone)] tracking-tight leading-[1.12]">
                Hacemos páginas web y software para que vendas más y ordenes tu negocio.
              </h1>
            </Reveal>

            <Reveal delay={0.12} y={16}>
              <p className="text-sm sm:text-base lg:text-lg text-[var(--mist)] max-w-2xl leading-relaxed">
                Para negocios, profesionales y emprendedores en Chile que necesitan recibir pedidos por WhatsApp,
                cobrar por internet con Webpay o tener un sistema a la medida sin letras chicas.
                Creadores de <strong className="text-[var(--bone)] font-semibold">K-Market</strong> y <strong className="text-[var(--bone)] font-semibold">ProfeChileno</strong>.
              </p>
            </Reveal>

            <Reveal delay={0.18} y={16}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Button href="#cotizador" variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>Cotizar Proyecto Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="#pricing" variant="secondary" size="lg" className="w-full sm:w-auto">
                  <span>Ver Precios en CLP</span>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Monogram & Visual Aura */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <Reveal delay={0.15}>
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:lg:h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-radial from-[var(--hanko)]/25 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div className="relative w-full h-full p-6 rounded-3xl bg-[var(--ink-card)] border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                  <BrandMarkSvg className="w-28 h-28 sm:w-36 sm:h-36 text-[var(--bone)]" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Ergonomic Metrics Pills (Responsive Bento Grid) */}
        <Reveal delay={0.24}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[var(--hairline)]">
            {HERO_METRICS.map((metric) => (
              <div
                key={metric.value}
                className="p-4 sm:p-5 rounded-2xl bg-[var(--ink-card)] border border-[var(--hairline)] backdrop-blur-md transition-all hover:border-[var(--hairline-strong)]"
              >
                <div className="text-base sm:text-xl font-bold font-serif text-[var(--bone)] mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-[var(--mist)] leading-snug">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
