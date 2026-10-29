import { ServiceItem } from '../types/site';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'landing-pages',
    index: '01',
    title: 'Página de Presentación o Campaña',
    subtitle: 'Para Emprendedores, Ofertas y Profesionales',
    description:
      'Una página directa y clara donde tus clientes ven qué haces, cuánto cobras y te escriben al instante por WhatsApp. Lista en pocos días para compartir en Instagram o buscar en Google.',
    iconName: 'Zap',
    deliverables: [
      'Carga rápida en celulares y computadores',
      'Botón directo a tu WhatsApp y formulario al correo',
      'Conectada a tus anuncios de Instagram y Google para medir visitas',
    ],
    timeline: '5 a 7 días hábiles',
    featured: true,
  },
  {
    id: 'sitios-corporativos',
    index: '02',
    title: 'Sitio Web para tu Negocio',
    subtitle: 'Vitrina Completa y Fácil de Editar',
    description:
      'Varias páginas ordenadas para mostrar tus servicios, trabajos realizados, preguntas frecuentes y ubicación. Ideal para consultas profesionales, talleres, oficinas y comercios.',
    iconName: 'Building2',
    deliverables: [
      '5 a 8 secciones hechas a la medida de tu marca',
      'Panel simple para que subas fotos, precios o avisos tú mismo',
      'Configurada desde el primer día para aparecer en Google',
    ],
    timeline: '2 a 3 semanas',
  },
  {
    id: 'aplicaciones-web',
    index: '03',
    title: 'Tienda Online o Sistema de Reservas',
    subtitle: 'Ventas con Carrito, Agenda y Stock',
    description:
      'Tu propio local abierto las 24 horas: tus clientes arman su pedido, reservan hora o pagan con tarjeta sin que tengas que responder mensaje por mensaje.',
    iconName: 'Boxes',
    deliverables: [
      'Catálogo con tallas, variantes, control de stock o agenda de horas',
      'Pagos con Webpay, MercadoPago, transferencia o pedido al WhatsApp',
      'Panel privado para revisar tus ventas y clientes del día',
    ],
    timeline: '4 a 6 semanas',
  },
  {
    id: 'migraciones',
    index: '04',
    title: 'Arreglo o Mejora de tu Web Actual',
    subtitle: 'Renovación de Páginas Lentas o Antiguas',
    description:
      'Si ya tienes una página en WordPress o una tienda que carga lento, se ve mal en el celular o nadie sabe cómo actualizar, la pasamos a una versión nueva sin perder tus clientes.',
    iconName: 'ArrowLeftRight',
    deliverables: [
      'Rescate de tus fotos, textos, productos y dominio actual',
      'Cambio sin dejar tu negocio desconectado en ningún momento',
      'Rediseño limpio pensado para que tus visitas compren sin perderse',
    ],
    timeline: 'Según tamaño',
  },
  {
    id: 'personalizacion',
    index: '05',
    title: 'Sistemas a Medida y Apoyo Mensual',
    subtitle: 'Herramientas para el Día a Día de tu Trabajo',
    description:
      'Si usas planillas de Excel eternas o cuadernos para anotar pedidos, creamos un sistema hecho para tu forma de trabajar y te acompañamos mes a mes.',
    iconName: 'Wrench',
    deliverables: [
      'Paneles de control de inventario, comandas, clientes o documentos',
      'Conexión con boletas, correos automáticos o medios de pago chilenos',
      'Soporte directo para agregar mejoras cuando tu negocio crezca',
    ],
    timeline: 'Por etapa o mensual',
  },
];
