'use client';

import React, { useState } from 'react';
import Section from '@/components/ui/Section';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: '¿Quién es el dueño legal del código fuente y del dominio?',
    a: 'Tú eres el dueño absoluto del 100% del código fuente, diseño, bases de datos y accesos. Una vez finalizado el proyecto, te entregamos el repositorio y las credenciales maestras sin letras chicas ni cláusulas de cautiverio.',
  },
  {
    q: '¿Cuáles son los tiempos reales de entrega?',
    a: 'Una página web corporativa o de presencia toma entre 7 a 14 días hábiles. Una tienda online con catálogo y Webpay toma de 2 a 3 semanas. Los sistemas a medida complejos se estructuran en entregas continuas cada 10 días.',
  },
  {
    q: '¿Cómo funciona la modalidad de pago?',
    a: 'Trabajamos con un 50% de anticipo al firmar la propuesta técnica y el 50% restante contra entrega y verificación en tu dominio final. Emitimos factura comercial o boleta de honorarios conforme al SII.',
  },
  {
    q: '¿Qué garantía incluye el proyecto?',
    a: 'Todos los proyectos incluyen 30 días de garantía técnica posterior al lanzamiento para corrección sin costo de cualquier fallo o duda operativa.',
  },
  {
    q: '¿Por qué no usan plantillas genéricas de WordPress?',
    a: 'Construimos con código moderno (Next.js, React, Tailwind y bases de datos en la nube). Esto garantiza que tu sitio cargue en menos de 1 segundo, no sea vulnerable a hackeos por plugins obsoletos y logre puntajes superiores en Google (SEO).',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      index="06"
      eyebrow="Claridad y Confianza"
      title="Preguntas Frecuentes y Garantías Comerciales"
      subtitle="Todo lo que necesitas saber antes de iniciar tu proyecto con nosotros en Chile."
      kanjiWatermark="問"
    >
      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-[var(--ink-border)] rounded-lg bg-[var(--ink-card)] overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[var(--ink-surface)]/50 transition-colors"
              >
                <span className="font-serif font-bold text-base text-[var(--bone)]">
                  {item.q}
                </span>
                <span className="font-mono text-sm text-[var(--gold)] flex-shrink-0">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-[var(--mist)] leading-relaxed border-t border-[var(--ink-border)]/40">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
