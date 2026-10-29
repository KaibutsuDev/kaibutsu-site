import React from 'react';
import ContactForm from './ContactForm';
import ContactChannels from './ContactChannels';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

export default function ContactSection() {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Hablemos"
      title="Cuéntanos qué quieres hacer con tu página o negocio"
      subtitle="Escríbenos con tus propias palabras qué necesitas crear o arreglar. Te respondemos rápido con un valor claro en pesos chilenos y cuánto demora."
      kanjiWatermark="縁"
      sceneSrc="/images/scene-contact-sumie.webp"
      sceneAlt="Escena nocturna sumi-e de contacto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <Reveal className="lg:col-span-7">
          <div className="sumi-card rounded-2xl p-6 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5 space-y-6">
          <div className="sumi-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-2 border-b border-[var(--hairline)] pb-4">
              <span className="hanko-seal px-3 py-1 text-[11px] font-mono uppercase tracking-wider font-semibold">
                Trato Directo
              </span>
              <h3 className="font-heading font-bold text-xl text-[var(--bone)] pt-1">
                Hablas directo con quienes hacen tu página
              </h3>
              <p className="text-xs sm:text-sm text-[var(--mist)] leading-relaxed">
                Sin intermediarios ni letra chica. Te explicamos todo en simple desde el
                primer mensaje para que elijas lo que de verdad le sirve a tu negocio.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-[var(--hairline)]">
                <span className="text-[var(--mist)]">Tiempo de respuesta</span>
                <span className="text-[var(--bone)] font-medium">Dentro del mismo día</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--hairline)]">
                <span className="text-[var(--mist)]">Primera conversación</span>
                <span className="text-[var(--bone)] font-medium">Gratis y sin compromiso</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--hairline)]">
                <span className="text-[var(--mist)]">WhatsApp directo</span>
                <span className="text-[var(--bone)] font-mono font-medium">+56 9 3654 9761</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[var(--mist)]">Ubicación</span>
                <span className="text-[var(--bone)] font-medium">Santiago / Valparaíso, Chile</span>
              </div>
            </div>

            <ContactChannels />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
