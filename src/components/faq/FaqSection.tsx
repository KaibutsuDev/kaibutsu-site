'use client';

import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: '¿Cuáles son los plazos reales de entrega?',
    a: 'Nos tomamos el tiempo necesario para construir software robusto y no algo hecho a la rápida. Una página web corporativa toma de 2 a 3 semanas. Una tienda online con catálogo y pagos chilenos toma de 4 a 6 semanas. Un sistema a medida o SaaS se construye entre 6 a 10 semanas, entregando un MVP funcional intermedio para que pruebes el flujo antes del cierre.',
  },
  {
    q: '¿Cómo puedo revisar los avances durante el desarrollo?',
    a: 'Al iniciar el proyecto te entregamos credenciales de acceso a un dashboard privado de cliente. Desde allí puedes auditar el estado en tiempo real, revisar los componentes construidos y realizar consultas o solicitudes de cambio.',
  },
  {
    q: '¿Quién es el dueño del código fuente y de las credenciales?',
    a: 'Finalizado el proyecto y conforme a lo pactado en el contrato de trabajo, se entrega el código fuente completo del software. Respecto a las credenciales (base de datos, auth, servidor, correos transaccionales), tú decides si recibes las llaves maestras para administrarlas por vía propia o si delegas la mantención técnica a Kaibutsu.',
  },
  {
    q: '¿Cómo funciona el servicio de mantención mensual o anual?',
    a: 'Si prefieres que nosotros nos encarguemos de la estabilidad, respaldos, actualizaciones de seguridad y monitoreo de servidores, generamos un contrato anexo individual que detalla todos los servicios incluidos y fija un valor mensual o anual transparente.',
  },
  {
    q: '¿Qué ocurre si necesito agregar funciones que no estaban en el contrato?',
    a: 'Cualquier requerimiento nuevo que surja durante la revisión del MVP funcional o desde tu dashboard será evaluado de forma clara. Si implica un retraso en los tiempos originales o una complejidad técnica adicional, se cotiza de forma independiente con un anexo de alcance.',
  },
  {
    q: '¿Cuál es la modalidad de pago y formalización?',
    a: 'Trabajamos bajo contrato de prestación de servicios con factura comercial o boleta. El proyecto inicia una vez recibido el 50% de anticipo acordado, y el 50% restante se liquida contra la entrega final tras realizar las pruebas de funcionamiento en tiempo real.',
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
      index="05"
      eyebrow="Claridad y Confianza"
      title="Preguntas Frecuentes y Metodología de Trabajo"
      subtitle="Todo lo que necesitas saber sobre plazos reales, seguimiento en vivo, código fuente y mantención."
      kanjiWatermark="問"
    >
      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-white/20 bg-[var(--ink-card)] shadow-lg'
                  : 'border-[var(--hairline)] bg-[var(--ink-card)]/50 hover:border-white/15'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-heading font-bold text-base sm:text-lg text-[var(--bone)]">
                  {item.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                    isOpen
                      ? 'rotate-180 bg-[var(--hanko)] text-white border-[var(--hanko)]'
                      : 'border-white/10 text-[var(--mist)]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[var(--mist)] leading-relaxed border-t border-[var(--hairline)]">
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
