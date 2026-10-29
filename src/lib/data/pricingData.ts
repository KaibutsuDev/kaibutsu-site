import { PricingTier, ProcessStep } from '../types/site';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'landing',
    index: '01',
    category: 'Inicio Rápido',
    name: 'Página de Presentación o Campaña',
    priceLabel: '$250.000',
    priceSubtext: 'Desde · CLP',
    timeline: '5 a 7 días hábiles',
    deliverables: [
      'Una página completa y rápida que se ve bien en celular y computador',
      'Diseño hecho para tu marca (sin usar la misma plantilla de todos)',
      'Botón directo a tu WhatsApp y formulario de contacto a tu correo',
      'Publicada en tu propio dominio .cl o .com con candado de seguridad',
    ],
    ctaLabel: 'Quiero mi Página',
    ctaHref: '#contact',
  },
  {
    id: 'corporativo',
    index: '02',
    category: 'Negocios y Consultas',
    name: 'Sitio Web para tu Negocio',
    priceLabel: '$650.000',
    priceSubtext: 'Desde · CLP',
    timeline: '2 a 3 semanas',
    deliverables: [
      '5 a 8 secciones internas (Inicio, Servicios, Trabajos, Nosotros, Contacto)',
      'Panel fácil de usar para que subas fotos, precios o noticias cuando quieras',
      'Preparado para que tus clientes te encuentren buscando en Google',
      'Te enseñamos a usarlo paso a paso + 30 días de garantía y soporte',
    ],
    ctaLabel: 'Cotizar Sitio Web',
    ctaHref: '#contact',
    recommended: true,
  },
  {
    id: 'app-ecommerce',
    index: '03',
    category: 'Ventas y Reservas',
    name: 'Tienda Online o Reservas',
    priceLabel: '$1.500.000',
    priceSubtext: 'Desde · CLP',
    timeline: '4 a 6 semanas',
    deliverables: [
      'Catálogo de productos con stock al día o calendario para agendar horas',
      'Pagos con tarjeta (Webpay, MercadoPago), transferencia o envío al WhatsApp',
      'Panel privado para ver tus pedidos, clientes y ventas del mes',
      'Base de datos propia y segura con respaldos automáticos',
    ],
    ctaLabel: 'Cotizar Tienda',
    ctaHref: '#contact',
  },
  {
    id: 'a-medida',
    index: '04',
    category: 'A Tu Medida',
    name: 'Arreglo de tu Web o Sistema Propio',
    priceLabel: 'A convenir',
    priceSubtext: 'Presupuesto cerrado tras conversar',
    timeline: 'Por etapas acordadas',
    deliverables: [
      'Nos juntamos a ver qué necesitas arreglar o crear antes de darte un precio',
      'Renovamos tu página antigua o WordPress lento sin perder tu información',
      'Creamos sistemas a medida para tu operación (inventario, colegios, locales)',
      'Todo el sistema y sus cuentas quedan 100% a tu nombre',
    ],
    ctaLabel: 'Conversar mi Caso',
    ctaHref: '#contact',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: '01',
    title: 'Conversamos tu Idea',
    duration: 'Día 1–2',
    description:
      'Nos cuentas a qué te dedicas, qué quieres lograr con tu página y qué problemas quieres resolver hoy en tu negocio.',
    deliverable: 'Resumen claro de lo que haremos',
  },
  {
    index: '02',
    title: 'Precio y Fecha Cerrados',
    duration: 'Día 3–4',
    description:
      'Te entregamos el presupuesto en pesos chilenos con fecha de entrega y el listado en simple de todo lo que incluye, sin cobros sorpresa.',
    deliverable: 'Propuesta con valor y fechas',
  },
  {
    index: '03',
    title: 'Avances en tu Celular',
    duration: 'Según plan',
    description:
      'Desde la primera semana te mandamos un link privado para que veas cómo va quedando tu página desde tu propio teléfono y computador.',
    deliverable: 'Link privado para revisar avances',
  },
  {
    index: '04',
    title: 'Publicación y Enseñanza',
    duration: 'Entrega',
    description:
      'Dejamos tu página funcionando en tu dominio, te entregamos todas las claves y te enseñamos a usarla con calma.',
    deliverable: 'Página al aire, claves y garantía',
  },
];
