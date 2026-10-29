import { ProjectItem } from '../types/site';

export const FLAGSHIP_KMARKET: ProjectItem = {
  id: 'k-market',
  name: 'K-Market',
  tagline: 'Tienda Online y Carta QR para Comercios y Locales de Comida (0% Comisión)',
  description:
    'Creado para almacenes, minimarkets, botillerías, sushi bars y restobares en Chile. Tus clientes ven tu catálogo con fotos, piden desde la mesa escaneando un QR o te envían el pedido listo y sumado directo a tu WhatsApp.',
  category: 'SaaS',
  status: 'Flagship',
  metrics: [
    { label: 'Comisión por venta', value: '0%' },
    { label: 'Cuadratura de caja', value: '30 seg' },
    { label: 'Rubros de comercio', value: '4' },
    { label: 'Pedidos al WhatsApp', value: 'Directos' },
  ],
  tags: ['Next.js 16', 'PostgreSQL Neon', 'React 19', 'Tailwind CSS', 'TypeScript', 'Zod 4'],
  imageSrc: '/images/k-market/mockup-dashboard-desktop.webp',
  href: 'https://k-market.cl',
  isFlagship: true,
};

export const FLAGSHIP_PROFECHILENO: ProjectItem = {
  id: 'profechileno',
  name: 'ProfeChileno',
  tagline: 'Asistencia, Libro de Notas y Actas en PDF para Profesores de Chile',
  description:
    'Pensado para profesores y colegios que quieren dejar atrás el papeleo eterno. Permite pasar la lista en un minuto, calcular promedios semestrales solos, proyectar en reunión de apoderados cuidando los datos privados e imprimir actas al instante.',
  category: 'EdTech',
  status: 'Flagship',
  metrics: [
    { label: 'Pase de lista', value: '60 seg' },
    { label: 'Buscador rápido', value: 'Ctrl + K' },
    { label: 'Actas e informes', value: 'PDF al toque' },
    { label: 'Enfoque', value: '100% Docente' },
  ],
  tags: ['NestJS', 'TypeORM', 'PostgreSQL', 'React', 'Vite', 'Shadcn UI', 'Tailwind CSS'],
  imageSrc: '/images/team-samurai-code.webp',
  href: 'https://www.profechileno.cl',
  isFlagship: true,
};

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'barberian',
    name: 'Barberian',
    tagline: 'Agenda de Horas Online para Barberías y Peluquerías',
    description:
      'Página de reservas donde el cliente elige a su barbero, ve las horas libres en el celular y agenda sin tener que esperar respuesta por Instagram.',
    category: 'SaaS',
    status: 'Activo',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    id: 'igonzalez-abogados',
    name: 'IGonzalez Abogados',
    tagline: 'Sitio Web y Consultas Online para Estudio de Abogados',
    description:
      'Página clara para personas que necesitan orientación legal rápida, con formulario para explicar su caso y conocer valores sin vueltas.',
    category: 'B2B / Legal',
    status: 'Activo',
    tags: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'pmx-viewer',
    name: 'PMX 3D Viewer',
    tagline: 'Visor de Personajes y Modelos 3D Directo en el Navegador',
    description:
      'Herramienta gratuita en la web para arrastrar archivos 3D, probar luces, texturas y movimientos a 60 cuadros por segundo sin instalar programas pesados.',
    category: '3D / Graphics',
    status: 'Activo',
    tags: ['Three.js', 'WebGL', 'TypeScript', 'GLSL'],
  },
  {
    id: 'catalina-chocolates',
    name: 'Catalina Chocolates',
    tagline: 'Tienda Online de Chocolatería Artesanal y Regalos',
    description:
      'Catálogo dulce donde los clientes arman su caja de bombones a gusto, agregan tarjeta de saludo y coordinan el despacho a domicilio.',
    category: 'E-Commerce',
    status: 'Activo',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'pyme-suite',
    name: 'Pyme Suite',
    tagline: 'Control de Stock, Ventas y Caja para Negocios Locales',
    description:
      'Panel sencillo para dueños de locales que quieren saber cuánta mercadería queda y cuánto vendieron en el día sin enredarse con planillas.',
    category: 'SaaS',
    status: 'En Escala',
    tags: ['NestJS', 'PostgreSQL', 'React', 'TypeScript'],
  },
];
