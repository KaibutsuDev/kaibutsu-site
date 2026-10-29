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
          <div className="sumi-card rounded-[4px] p-6 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5 space-y-6">
          <div className="sumi-card rounded-[4px] p-6 sm:p-8 space-y-6">
            <div className="space-y-2 border-b border-[var(--hairline)] pb-4">
              <span className="hanko-seal px-2 py-0.5 rounded-[3px] font-mono-tech text-[10px] uppercase tracking-wider">
                Trato Directo
              </span>
              <h3 className="font-dela text-lg text-[var(--bone)] pt-1">
                Hablas directo con quienes hacen tu página
              </h3>
              <p className="text-xs sm:text-sm text-[var(--ash)] leading-relaxed">
                Sin vendedores entre medio ni letra chica. Te explicamos todo en simple desde el
                primer mensaje para que elijas lo que de verdad te sirve.
              </p>
            </div>

            <div className="space-y-3 font-mono-tech text-xs">
              <div className="flex justify-between py-2 border-b border-[var(--hairline)]">
                <span className="text-[var(--ash)]">Tiempo de respuesta</span>
                <span className="text-[var(--bone)]">Dentro del mismo día</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--hairline)]">
                <span className="text-[var(--ash)]">Primera conversación</span>
                <span className="text-[var(--bone)]">Gratis y sin compromiso</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[var(--ash)]">Ubicación</span>
                <span className="text-[var(--bone)]">Santiago / Valparaíso, Chile</span>
              </div>
            </div>

            <ContactChannels />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
