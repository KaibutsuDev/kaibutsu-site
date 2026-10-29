export interface QuoteServiceOption {
  id: string;
  name: string;
  category: 'web' | 'ecommerce' | 'system';
  basePriceClp: number;
  deliveryWeeks: string;
  description: string;
}

export interface QuoteAddon {
  id: string;
  name: string;
  priceClp: number;
  description: string;
}

export const QUOTE_SERVICES: QuoteServiceOption[] = [
  {
    id: 'landing-presencia',
    name: 'Página Web Corporativa / Presencia',
    category: 'web',
    basePriceClp: 290000,
    deliveryWeeks: '2 a 3 semanas',
    description: 'Diagnóstico de marca, diseño artesanal a medida, velocidad Next.js, SEO técnico y botón directo a tu WhatsApp.',
  },
  {
    id: 'ecommerce-pyme',
    name: 'Tienda Online / E-commerce',
    category: 'ecommerce',
    basePriceClp: 690000,
    deliveryWeeks: '4 a 6 semanas',
    description: 'Catálogo administrable, carro de compras rápido, e integración de pagos con Webpay Plus, Mercado Pago o Flow.',
  },
  {
    id: 'sistema-medida',
    name: 'Sistema a Medida / SaaS Operacional',
    category: 'system',
    basePriceClp: 1890000,
    deliveryWeeks: '6 a 10 semanas (Hitos MVP)',
    description: 'Software exclusivo para la operación de tu empresa: base de datos Neon PostgreSQL, roles, métricas y automatización.',
  },
];

export const QUOTE_ADDONS: QuoteAddon[] = [
  {
    id: 'pagos-webpay',
    name: 'Integración Webpay / Mercado Pago',
    priceClp: 90000,
    description: 'Cobros automáticos con tarjetas de crédito, débito y transferencias bancarias en Chile.',
  },
  {
    id: 'whatsapp-bot',
    name: 'Notificaciones automáticas por WhatsApp',
    priceClp: 85000,
    description: 'Avisos directos a tu teléfono cada vez que un cliente cotiza o realiza un pedido.',
  },
  {
    id: 'panel-admin',
    name: 'Panel de Administración y Control',
    priceClp: 160000,
    description: 'Edita precios, productos, textos y revisa métricas desde un portal protegido.',
  },
  {
    id: 'seo-avanzado',
    name: 'Optimización SEO Técnica para Google',
    priceClp: 75000,
    description: 'Indexación garantizada, datos estructurados Schema.org y velocidad de carga ultrarrápida (Core Web Vitals).',
  },
];
