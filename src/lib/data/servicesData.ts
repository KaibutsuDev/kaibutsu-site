import { ServiceItem } from '../types/site';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'sitio-web-presencia',
    index: '01',
    title: 'Páginas Web Corporativas a Medida',
    subtitle: 'Presencia digital artesanal en Next.js',
    description:
      'Construcción limpia desde cero, pensada para que tu negocio transmita seriedad, cargue instantáneamente en celulares y convierta visitas en mensajes de WhatsApp o llamadas de clientes.',
    deliverables: [
      'Entrevista profunda sobre tu marca, colores y propuesta de valor',
      'Maquetación responsive sin plantillas pesadas de WordPress',
      'Dashboard privado para verificar avances de construcción en vivo',
      'Configuración de dominio .cl, certificado SSL y SEO técnico para Google',
    ],
    timeline: '2 a 3 semanas',
    iconName: 'Zap',
  },
  {
    id: 'tienda-online',
    index: '02',
    title: 'Tiendas Online y Catálogos con Pagos',
    subtitle: 'Comercio electrónico ágil y seguro',
    description:
      'Tu vitrina de productos abierta las 24 horas. Tus clientes eligen, compran con Webpay Plus o Mercado Pago, y tú recibes los pedidos ordenados sin intermediarios que te quiten comisiones abusivas.',
    deliverables: [
      'Catálogo con variantes (tallas, sabores, colores) y control de stock',
      'Integración oficial de pasarelas de pago Webpay Plus o Flow',
      'Entrega de MVP funcional antes de pasar al despliegue final',
      'Pruebas de checkout en tiempo real y capacitación personalizada',
    ],
    timeline: '4 a 6 semanas',
    iconName: 'Building2',
  },
  {
    id: 'sistemas-a-medida',
    index: '03',
    title: 'Sistemas a Medida y Software Operacional',
    subtitle: 'Plataformas diseñadas para resolver tu dolor real',
    description:
      'Digitalizamos tus procesos diarios con software propio: paneles de control interno, cotizadores automáticos, trazabilidad de clientes o sistemas de reservas para que dejes atrás las planillas enredadas.',
    deliverables: [
      'Levantamiento exhaustivo de requerimientos y arquitectura por etapas',
      'Contrato formal con 50% de anticipo y entrega de MVP funcional',
      'Base de datos segura en la nube (PostgreSQL Neon) con perfiles y roles',
      'Entrega de código fuente o mantención delegada mensual/anual',
    ],
    timeline: '6 a 10 semanas (Hitos continuos)',
    iconName: 'Boxes',
  },
  {
    id: 'renovacion-optimizacion',
    index: '04',
    title: 'Renovación de Sitios Lentos y Migraciones',
    subtitle: 'Rescate de proyectos y modernización',
    description:
      'Si tienes una web antigua o un WordPress pesado que tarda en cargar o se cae constantemente, reconstruimos tu plataforma con tecnología moderna manteniendo tu dominio y contenidos intactos.',
    deliverables: [
      'Diagnóstico de cuellos de botella y rescate de contenidos existentes',
      'Migración de hosting tradicional a infraestructura Edge en la nube',
      'Mejora radical en puntuaciones de Google PageSpeed (Core Web Vitals)',
      'Garantía técnica de 30 días corridos posterior a la migración',
    ],
    timeline: '2 a 4 semanas',
    iconName: 'ArrowLeftRight',
  },
];
