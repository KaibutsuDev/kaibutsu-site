import type { Metadata, Route } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones del Servicio | Kaibutsu 怪物',
  description:
    'Términos legales, condiciones de contratación, propiedad intelectual y garantías de entrega para servicios web y software a medida prestados por Kaibutsu en Chile.',
};

export default function TerminosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-[var(--bone)]">
      <div className="mb-10 pb-6 border-b border-[var(--ink-border)]">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--gold)]">
          Marco Jurídico de Prestación de Servicios
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold mt-2">
          Términos y Condiciones del Servicio
        </h1>
        <p className="text-sm text-[var(--mist)] mt-2 font-mono">
          Última actualización: 29 de octubre de 2026 · Vigente en la República de Chile
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[var(--bone)]/90">
        <section className="bg-[var(--ink-card)] p-6 rounded-lg border border-[var(--ink-border)]">
          <h2 className="text-lg font-serif font-bold text-[var(--gold)] mb-3">
            1. Individualización del Prestador
          </h2>
          <p>
            Los servicios tecnológicos, desarrollo web, comercio electrónico y sistemas de software ofrecidos bajo la marca <strong>Kaibutsu 怪物</strong> son administrados y representados legalmente por <strong>Roberto Ignacio Antonio González González</strong>, Cédula Nacional de Identidad N° <strong>19.542.218-4</strong>, con domicilio comercial en Santiago, Chile.
          </p>
          <p className="mt-2 text-xs text-[var(--mist)] font-mono">
            Contacto legal directo: contacto@kaibutsu.cl · +56 9 3952 6626
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            2. Alcance del Servicio y Presupuestos
          </h2>
          <p>
            Toda propuesta técnica o económica generada a través de nuestros canales oficiales o cotizadores web detalla de forma explícita el alcance funcional, hitos de entrega y valores netos expresados en pesos chilenos (CLP).
          </p>
          <p className="mt-2">
            Salvo estipulación expresa en contrario, los valores pactados no incluyen el Impuesto al Valor Agregado (IVA) correspondiente a la emisión de factura comercial o boleta de honorarios conforme a la normativa tributaria del Servicio de Impuestos Internos (SII).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            3. Propiedad Intelectual y Código Fuente
          </h2>
          <p>
            En Kaibutsu creemos en la soberanía tecnológica de nuestros clientes:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              <strong>Traspaso del 100% de la Propiedad:</strong> Una vez completado el pago total pactado del proyecto, el cliente recibe la titularidad íntegra sobre el código fuente a medida desarrollado, base de datos y contenidos.
            </li>
            <li>
              <strong>Sin Cautiverio ni Dependencias Forzadas:</strong> No amarramos al cliente a plataformas cerradas. El cliente es libre de hospedar, auditar o transferir su software a la infraestructura o equipo técnico que estime conveniente.
            </li>
            <li>
              <strong>Sistemas Propios SaaS:</strong> En el caso de suscripciones o uso de plataformas propietarias (como K-Market), el cliente conserva la propiedad total de sus datos comerciales, productos y bases de clientes, rigiéndose por los términos específicos del servicio SaaS.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            4. Modalidad de Pago e Hitos de Entrega
          </h2>
          <p>
            Para resguardar a ambas partes, los proyectos a medida se estructuran bajo modalidad de anticipo y liquidación contra entrega:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>50% de Anticipo:</strong> Para reserva de capacidad, arquitectura inicial y diseño de interfaz.</li>
            <li><strong>50% Contra Entrega y Aprobación:</strong> Previo al despliegue en el dominio definitivo y entrega de credenciales maestras.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            5. Garantía de Funcionamiento y Soporte Técnico
          </h2>
          <p>
            Todo proyecto entregado cuenta con una <strong>garantía técnica de 30 días corridos</strong> sin costo adicional a partir de la fecha de puesta en marcha. Dicha garantía cubre la corrección inmediata de cualquier fallo de programación (bugs) o desviación respecto a las especificaciones acordadas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            6. Legislación Aplicable y Jurisdicción
          </h2>
          <p>
            Los presentes términos se rigen por las leyes vigentes de la República de Chile. Para cualquier controversia o interpretación judicial, las partes se someten a la competencia de los Tribunales Ordinarios de Justicia de la ciudad de Santiago.
          </p>
        </section>
      </div>
    </div>
  );
}
