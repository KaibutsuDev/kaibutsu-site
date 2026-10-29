import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Tratamiento de Datos | Kaibutsu 怪物',
  description:
    'Políticas de privacidad y protección de datos personales de Kaibutsu conforme a la Ley N° 19.628 de la República de Chile.',
};

export default function PrivacidadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-[var(--bone)]">
      <div className="mb-10 pb-6 border-b border-[var(--ink-border)]">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--gold)]">
          Privacidad y Transparencia
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold mt-2">
          Política de Privacidad y Protección de Datos
        </h1>
        <p className="text-sm text-[var(--mist)] mt-2 font-mono">
          Conforme a la Ley N° 19.628 sobre Protección de la Vida Privada (Chile)
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[var(--bone)]/90">
        <section className="bg-[var(--ink-card)] p-6 rounded-lg border border-[var(--ink-border)]">
          <h2 className="text-lg font-serif font-bold text-[var(--gold)] mb-3">
            Responsable del Tratamiento de Datos
          </h2>
          <p>
            El responsable legal del tratamiento, seguridad y resguardo de la información recopilada en este sitio es <strong>Roberto Ignacio Antonio González González</strong> (RUT <strong>19.542.218-4</strong>), titular de <strong>Kaibutsu 怪物</strong>.
          </p>
          <p className="mt-2 text-xs text-[var(--mist)] font-mono">
            Canal de atención para el ejercicio de derechos ARCO: contacto@kaibutsu.cl
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            1. Información que Recopilamos
          </h2>
          <p>
            Recopilamos únicamente los datos indispensables para responder a solicitudes de presupuestos, entablar contacto comercial y prestar servicios informáticos:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Nombre y datos de individualización de contacto.</li>
            <li>Correo electrónico corporativo o personal.</li>
            <li>Número telefónico / WhatsApp para coordinación técnica y comercial.</li>
            <li>Detalles y especificaciones técnicas del proyecto a cotizar.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            2. Finalidad del Uso de Datos
          </h2>
          <p>
            Los datos proporcionados son tratados con la exclusiva finalidad de:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Elaborar y remitir propuestas económicas y técnicas personalizadas.</li>
            <li>Ejecutar los contratos de prestación de servicios tecnológicos suscritos.</li>
            <li>Cumplir con las obligaciones tributarias y de facturación ante el SII.</li>
          </ul>
          <p className="mt-3 font-semibold text-[var(--bone)]">
            No vendemos, cedemos ni compartimos bajo ninguna circunstancia bases de datos con terceros para fines de publicidad no solicitada (spam).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            3. Seguridad y Confidencialidad
          </h2>
          <p>
            Implementamos rigurosos estándares de seguridad informática y encriptación en tránsito (HTTPS/TLS) para proteger la integridad de las comunicaciones. Asimismo, los proyectos y credenciales compartidos por nuestros clientes se encuentran protegidos bajo estricto deber de confidencialidad comercial.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            4. Derechos del Titular (Derechos ARCO)
          </h2>
          <p>
            En cualquier momento, el usuario o titular de los datos puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición contemplados en la legislación chilena mediante una comunicación escrita al correo electrónico <strong>contacto@kaibutsu.cl</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
