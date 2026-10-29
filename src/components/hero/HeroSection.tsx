import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
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
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[var(--hairline)]">
      {/* Sumi-e Atmospheric Scene Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/images/scene-hero-sumie.webp"
          alt="Escena sumi-e de fondo Kaibutsu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60 sm:opacity-75 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/70 via-[#42040d]/20 to-[var(--ink-bg)]" />
      </div>

      {/* Monumental Kanji Watermark (Desplazado a la extrema derecha para NO colisionar con el logo) */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-6 sm:right-0 pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="kanji-watermark text-[40vw] sm:text-[22vw] font-bold block opacity-[0.035] leading-none">
          怪物
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Main Editorial Column */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <Reveal y={12}>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="hanko-seal px-3.5 py-1 text-xs font-mono uppercase tracking-wider font-semibold">
                  KATANA STUDIO · CHILE
                </span>
                <span className="text-xs sm:text-sm font-medium text-[var(--mist)]">
                  Páginas Web · Tiendas Online · Software a Medida
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06} y={16}>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[var(--bone)] tracking-tight leading-[1.1]">
                Hacemos páginas web y software para que vendas más y ordenes tu negocio.
              </h1>
            </Reveal>

            <Reveal delay={0.12} y={16}>
              <p className="text-base sm:text-lg text-[var(--mist)] max-w-2xl leading-relaxed">
                Para negocios, profesionales y proyectos en Chile que necesitan recibir pedidos por WhatsApp,
                cobrar por internet con Webpay o tener una plataforma a la medida sin letras chicas.
                Creadores de <strong className="text-[var(--bone)] font-semibold">K-Market</strong> y <strong className="text-[var(--bone)] font-semibold">ProfeChileno</strong>.
              </p>
            </Reveal>

            <Reveal delay={0.18} y={16}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Button href="#cotizador" variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>Cotizar Proyecto Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="#pricing" variant="katana" size="lg" className="w-full sm:w-auto">
                  <span>Ver Precios en CLP</span>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Monogram & Glowing Crimson Aura */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <Reveal delay={0.15}>
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 flex items-center justify-center">
                {/* Intense Crimson Background Glow inspired by reference */}
                <div className="absolute inset-0 bg-radial from-[#c8102e]/40 via-[#8b0a1d]/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
                
                <div className="relative w-full h-full p-8 rounded-3xl bg-gradient-to-b from-[#181a26]/90 via-[#10121a]/85 to-[#0b0c12]/95 border border-white/15 backdrop-blur-2xl flex items-center justify-center shadow-[0_16px_48px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15)] group hover:border-[#c8102e]/50 transition-all duration-300">
                  <BrandMarkSvg className="w-32 h-32 sm:w-40 sm:h-40 text-white drop-shadow-[0_4px_16px_rgba(200,16,46,0.5)] transition-transform duration-300 group-hover:scale-105" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Ergonomic Metrics Bento Grid */}
        <Reveal delay={0.24}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 pt-4 border-t border-[var(--hairline)]">
            {HERO_METRICS.map((metric) => (
              <div
                key={metric.value}
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-md transition-all hover:border-[#c8102e]/40 hover:shadow-[0_8px_24px_rgba(200,16,46,0.15)]"
              >
                <div className="text-lg sm:text-2xl font-extrabold font-heading text-[var(--bone)] mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-[var(--mist)] leading-snug">
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
