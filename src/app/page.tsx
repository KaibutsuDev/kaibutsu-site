import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import ServicesSection from '@/components/services/ServicesSection';
import PricingSection from '@/components/pricing/PricingSection';
import KMarketSection from '@/components/flagship/KMarketSection';
import ProfeChilenoSection from '@/components/flagship/ProfeChilenoSection';
import ProjectsGridSection from '@/components/projects/ProjectsGridSection';
import ProcessSection from '@/components/process/ProcessSection';
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

        {/* 4. Production Flagship Cases (Scene 2: Sumi-e Cases Backdrop) */}
        <Section
          id="flagships"
          index="03"
          eyebrow="Sistemas Propios Funcionando"
          title="Plataformas que creamos y usamos todos los días en Chile"
          subtitle="No solo hacemos páginas por encargo: también creamos nuestros propios sistemas para comerciantes y profesores. Puedes explorar cada uno con vista para personas o vista técnica."
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

        {/* 6. Compact Technology Stack */}
        <TechStackSection />

        {/* 7. Direct Contact & Requirements (Scene 3: Nocturnal Sumi-e) */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
