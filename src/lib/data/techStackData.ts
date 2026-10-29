import { TechCategory } from '../types/site';

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: 'Páginas rápidas en celular y computador',
    badge: 'Interfaz y Diseño',
    description:
      'Para que tu página cargue al instante con datos móviles y cualquier cliente pueda comprar o escribirte sin trabas.',
    skills: [
      { name: 'Next.js 16', detail: 'Carga rápida y Google' },
      { name: 'React 19', detail: 'Pantallas interactivas' },
      { name: 'TypeScript', detail: 'Código sin errores' },
      { name: 'Tailwind CSS', detail: 'Diseño para celular' },
      { name: 'Three.js / WebGL', detail: 'Figuras y visores 3D' },
      { name: 'Framer Motion', detail: 'Animaciones suaves' },
    ],
  },
  {
    category: 'Ventas, pedidos y cuentas seguras',
    badge: 'Sistema Interno',
    description:
      'Donde se calculan tus ventas, se validan los pagos y se conectan las notificaciones a tu WhatsApp o correo.',
    skills: [
      { name: 'NestJS', detail: 'Paneles y sistemas' },
      { name: 'Node.js 24', detail: 'Motor de pedidos' },
      { name: 'Prisma / TypeORM', detail: 'Orden de datos' },
      { name: 'Zod 4', detail: 'Formularios seguros' },
      { name: 'Webpay / MercadoPago', detail: 'Pagos con tarjeta' },
      { name: 'WhatsApp Links & APIs', detail: 'Pedidos al teléfono' },
    ],
  },
  {
    category: 'Bases de datos y servidores activos todo el día',
    badge: 'Respaldo y Nube',
    description:
      'Para que tus productos, clientes y notas escolares estén respaldados y tu sitio siga arriba a toda hora.',
    skills: [
      { name: 'PostgreSQL (Neon)', detail: 'Base de datos segura' },
      { name: 'Cloudflare', detail: 'Candado SSL y escudo' },
      { name: 'Vercel', detail: 'Servidores rápidos' },
      { name: 'Redis / Caché', detail: 'Respuestas al instante' },
      { name: 'Docker', detail: 'Entornos estables' },
      { name: 'GitHub', detail: 'Código a tu nombre' },
    ],
  },
  {
    category: 'Aplicaciones móviles y automatización',
    badge: 'Celulares y Ahorro de Tiempo',
    description:
      'Para llevar tu negocio a teléfonos Android/iPhone o ahorrar horas en tareas repetitivas como reportes y actas.',
    skills: [
      { name: 'Flutter & Dart', detail: 'Apps Android e iOS' },
      { name: 'React Native', detail: 'Apps móviles' },
      { name: 'Google Gemini API', detail: 'Asistentes inteligentes' },
      { name: 'PDFKit / Reportes', detail: 'Actas y boletas PDF' },
      { name: 'Resend', detail: 'Correos de confirmación' },
      { name: 'Google Analytics 4', detail: 'Estadísticas de visitas' },
    ],
  },
];
