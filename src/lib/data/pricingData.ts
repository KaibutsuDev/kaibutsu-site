import { PricingTier, ProcessStep } from '../types/site';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'landing',
    index: '01',
    category: 'Presencia de Marca',
    name: 'Página Web Corporativa',
    priceLabel: '$290.000',
    priceSubtext: 'Desde · CLP (+ IVA)',
    timeline: '2 a 3 semanas',
    deliverables: [
      'Entrevista sobre tu marca, colores y propuesta de valor',
      'Diseño artesanal exclusivo en Next.js (cero plantillas repetidas de WordPress)',
      'Acceso a Dashboard de cliente para auditar avances del proyecto',
      'Botón directo a tu WhatsApp, formulario validado y SEO técnico',
      'Publicada en tu dominio .cl con certificado SSL y 30 días de garantía',
    ],
    ctaLabel: 'Cotizar Página Web',
    ctaHref: '#cotizador',
  },
  {
    id: 'corporativo',
    index: '02',
    category: 'Ventas y Catálogo',
    name: 'Tienda Online / E-commerce',
    priceLabel: '$690.000',
    priceSubtext: 'Desde · CLP (+ IVA)',
    timeline: '4 a 6 semanas',
    deliverables: [
      'Catálogo autoadministrable con fotos, variantes y control de stock',
      'Integración oficial de pagos chilenos (Webpay Plus, Mercado Pago o Flow)',
      'Acceso a Dashboard para revisar avances y retroalimentar en cada hito',
      'Entrega de MVP funcional antes de pasar al despliegue definitivo',
      'Pruebas de compra en tiempo real y capacitación personalizada',
    ],
    ctaLabel: 'Cotizar Tienda Online',
    ctaHref: '#cotizador',
    recommended: true,
  },
  {
    id: 'app-ecommerce',
    index: '03',
    category: 'Operación y Plataformas',
    name: 'Sistema a Medida / SaaS',
    priceLabel: '$1.890.000',
    priceSubtext: 'Desde · CLP (+ IVA)',
    timeline: '6 a 10 semanas (Hitos continuos)',
    deliverables: [
      'Levantamiento exhaustivo de arquitectura y requerimientos técnicos',
      'Contrato formal con 50% de anticipo e hitos de pago contra avances probados',
      'Dashboard privado para solicitar revisiones y evaluar nuevas funciones',
      'Base de datos segura en la nube (PostgreSQL Neon) con roles y permisos',
      'Traspaso total del código fuente o plan anexo de mantención delegada',
    ],
    ctaLabel: 'Cotizar Sistema a Medida',
    ctaHref: '#cotizador',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: '01',
    title: 'Entrevista de Marca y Diagnóstico',
    duration: 'Semana 1',
    description:
      'Conversamos a fondo sobre tu marca, producto y los colores que representan tu negocio. Luego realizamos el levantamiento detallado de los requerimientos técnicos y funcionales de tu aplicación.',
    deliverable: 'Especificación técnica y guía de estilo',
  },
  {
    index: '02',
    title: 'Evaluación y Contrato (50% Anticipo)',
    duration: 'Semana 1–2',
    description:
      'Evaluamos el costo exacto y los plazos de construcción. Se firma el contrato formal de trabajo; una vez acreditado el 50% acordado, iniciamos de inmediato la construcción de tu software.',
    deliverable: 'Contrato firmado y calendario de hitos',
  },
  {
    index: '03',
    title: 'Dashboard de Avances en Vivo',
    duration: 'Durante el desarrollo',
    description:
      'Te entregamos credenciales exclusivas para acceder a un dashboard privado donde podrás ver el estado del proyecto en tiempo real, auditar lo construido y verificar cada avance sin intermediarios.',
    deliverable: 'Acceso directo al panel de control de avances',
  },
  {
    index: '04',
    title: 'Entrega de MVP Funcional',
    duration: 'Hito intermedio',
    description:
      'Desplegamos un Producto Mínimo Viable (MVP) operativo para comprobar que el modelo y la interacción resuelven tu necesidad real. Las nuevas ideas o cambios fuera de contrato se cotizan de forma transparente.',
    deliverable: 'Versión funcional para pruebas del cliente',
  },
  {
    index: '05',
    title: 'Pruebas en Vivo y Entrega de Código',
    duration: 'Fase final',
    description:
      'Previo al cierre, ejecutamos pruebas en tiempo real para verificar que todo opere con precisión. Concluido el proyecto, se realiza la entrega del código fuente completo si fue estipulado en el contrato.',
    deliverable: 'Testing en tiempo real y código fuente entregado',
  },
  {
    index: '06',
    title: 'Credenciales o Mantención Delegada',
    duration: 'Post-lanzamiento',
    description:
      'El manejo de credenciales (base de datos, auth, servidor, correos) se define según contrato: puedes administrarlas por vía propia o delegar la mantención a Kaibutsu mediante un contrato anexo con tarifa mensual o anual.',
    deliverable: 'Traspaso de llaves maestras o contrato de mantención',
  },
];
