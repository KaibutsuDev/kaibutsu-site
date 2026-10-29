import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones del Servicio | Kaibutsu 怪物',
  description:
    'Términos legales, condiciones de contratación, propiedad intelectual, gestión de credenciales y garantías de entrega para servicios web y software a medida prestados por Kaibutsu en Chile.',
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
        <section className="bg-[var(--ink-card)] p-6 rounded-2xl border border-[var(--ink-border)]">
          <h2 className="text-lg font-serif font-bold text-[var(--gold)] mb-3">
            1. Individualización del Prestador
          </h2>
          <p>
            Los servicios tecnológicos, desarrollo web, comercio electrónico y sistemas de software ofrecidos bajo la marca <strong>Kaibutsu 怪物</strong> son administrados y representados legalmente por <strong>Roberto Ignacio Antonio González González</strong>, Cédula Nacional de Identidad N° <strong>19.542.218-4</strong>, con domicilio comercial en Santiago, Chile.
          </p>
          <p className="mt-2 text-xs text-[var(--mist)] font-mono">
            Contacto legal directo: contacto@kaibutsu.cl · +56 9 3654 9761
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            2. Proceso de Contratación, Presupuestos y Anticipo (50%)
          </h2>
          <p>
            Todo proyecto inicia con una entrevista sobre marca, producto, paleta de colores y levantamiento técnico exhaustivo de requerimientos. Con dicha base se formaliza el contrato de trabajo con alcance, plazos de entrega y valores netos en pesos chilenos (CLP).
          </p>
          <p className="mt-2">
            La construcción del software da inicio una vez acreditado el <strong>50% de anticipo</strong> estipulado. El 50% restante se cancela contra la entrega definitiva tras la verificación exitosa de pruebas en tiempo real.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            3. Dashboard de Cliente, Entrega de MVP y Control de Cambios
          </h2>
          <p>
            Para garantizar máxima transparencia:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              <strong>Credenciales de Seguimiento:</strong> Se entregan credenciales privadas al cliente para ingresar a un panel donde puede revisar en tiempo real el avance de la obra digital.
            </li>
            <li>
              <strong>Entrega de MVP Funcional:</strong> Se entrega un modelo y esquema funcional intermedio para verificar que la arquitectura resuelve la necesidad operativa real antes del cierre.
            </li>
            <li>
              <strong>Nuevos Requerimientos:</strong> Toda solicitud nueva o cambio de alcance que no haya sido contemplado en el contrato inicial y que represente una demora o trabajo adicional será valorizado de forma independiente y podrá generar costos adicionales transparentes.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            4. Propiedad Intelectual y Entrega de Código Fuente
          </h2>
          <p>
            Concluido el proyecto y verificado el pago íntegro pactado, se realiza la entrega formal del código fuente completo al cliente, siempre y cuando haya sido convenido y estipulado en el contrato de prestación de servicios.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            5. Gestión de Credenciales y Opciones de Mantención (Propia vs Delegada)
          </h2>
          <p>
            El control y administración de las credenciales de infraestructura (bases de datos en la nube, autenticación, servidores de despliegue, pasarelas de correos transaccionales y APIs):
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              <strong>Vía Propia:</strong> El cliente puede optar por recibir todas las credenciales maestras y asumir de forma autónoma el costo de consumo y la mantención técnica de dichos proveedores.
            </li>
            <li>
              <strong>Mantención Delegada por Kaibutsu:</strong> Si el cliente prefiere que Kaibutsu administre la infraestructura, respaldos y estabilidad, se suscribe un contrato anexo individual que agrupa los servicios involucrados y establece un arancel mensual o anual acordado.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            6. Garantía de Funcionamiento y Soporte Técnico
          </h2>
          <p>
            Todo software entregado cuenta con una <strong>garantía técnica de 30 días corridos</strong> sin costo adicional a partir de la fecha de puesta en marcha. Dicha garantía cubre la corrección inmediata de errores de código (bugs) o desviaciones respecto a las especificaciones contractuales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-serif font-bold mb-3 text-[var(--bone)]">
            7. Legislación Aplicable y Jurisdicción
          </h2>
          <p>
            Los presentes términos se rigen por las leyes de la República de Chile. Cualquier controversia técnica o legal se somete a la jurisdicción de los Tribunales Ordinarios de Justicia de la ciudad de Santiago.
          </p>
        </section>
      </div>
    </div>
  );
}
