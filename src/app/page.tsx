import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import ServicesSection from '@/components/services/ServicesSection';
import PricingSection from '@/components/pricing/PricingSection';
import QuoteCalculator from '@/components/calculator/QuoteCalculator';
import KMarketSection from '@/components/flagship/KMarketSection';
import ProfeChilenoSection from '@/components/flagship/ProfeChilenoSection';
import ProjectsGridSection from '@/components/projects/ProjectsGridSection';
import ProcessSection from '@/components/process/ProcessSection';
import FaqSection from '@/components/faq/FaqSection';
import TechStackSection from '@/components/tech/TechStackSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[var(--ink-bg)] text-[var(--bone)] flex flex-col washi-grain">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section (Scene 1: Sumi-e Ink + K Monogram Reveal) */}
        <HeroSection />

        {/* 2. Services Section (Asymmetric Editorial Grid) */}
        <ServicesSection />

        {/* 3. Transparent Pricing Ledger in CLP */}
        <PricingSection />

        {/* 3B. Cotizador Web Interactivo (Benchmark Zyteron) */}
        <Section
          id="cotizador"
          index="03B"
          eyebrow="Calculadora de Inversión"
          title="Calcula el valor estimado de tu proyecto"
          subtitle="Transparencia inmediata. Selecciona el tipo de solución y funcionalidades que necesitas para obtener un presupuesto referencial en pesos chilenos."
          kanjiWatermark="算"
        >
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <QuoteCalculator />
            </div>
          </Reveal>
        </Section>

        {/* 4. Production Flagship Cases */}
        <Section
          id="flagships"
          index="04"
          eyebrow="Sistemas Propios Funcionando"
          title="Plataformas creadas y operativas en Chile"
          subtitle="No solo hacemos páginas por encargo: también operamos nuestros propios sistemas comerciales para gastronomía y educación en Chile. Puedes explorar cada uno con vista para personas o vista técnica."
          kanjiWatermark="実"
          sceneSrc="/images/scene-cases-sumie.webp"
          sceneAlt="Escena sumi-e arquitectónica para casos reales"
        >
          <div className="space-y-12">
            <Reveal>
              <KMarketSection />
            </Reveal>
            <Reveal delay={0.08}>
              <ProfeChilenoSection />
            </Reveal>
          </div>
        </Section>

        {/* 4B. Additional Portfolio Works */}
        <ProjectsGridSection />

        {/* 5. 4-Step Delivery Process */}
        <ProcessSection />

        {/* 5B. Frequently Asked Questions & Guarantees */}
        <FaqSection />

        {/* 6. Compact Technology Stack */}
        <TechStackSection />

        {/* 7. Direct Contact & Requirements */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
