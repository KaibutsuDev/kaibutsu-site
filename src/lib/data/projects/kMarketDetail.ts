import { ProjectDetail } from '@/lib/types/site';

export const K_MARKET_DETAIL: ProjectDetail = {
  id: 'k-market',
  name: 'K-Market',
  tagline: 'Tienda Online y Carta QR para Comercios y Locales de Comida (0% Comisión)',
  description:
    'Creado para almacenes, minimarkets, botillerías, sushi bars y restobares en Chile. Tus clientes ven tu catálogo con fotos, piden desde la mesa escaneando un QR o te envían el pedido listo y sumado directo a tu WhatsApp.',
  category: 'SaaS',
  status: 'Flagship',
  tags: ['Next.js 16', 'PostgreSQL Neon', 'React 19', 'Tailwind CSS', 'TypeScript', 'Zod 4'],
  imageSrc: '/images/k-market/mockup-dashboard-desktop.webp',
  href: 'https://k-market.cl',
  isFlagship: true,

  userSection: {
    targetAudience:
      'Dueños de almacenes, minimarkets, botillerías, restobares, sushi bars, pizzerías y sus clientes.',
    headline: 'Vender y comprar en el barrio sin pagar comisiones abusivas',
    problemStatement:
      'Las aplicaciones de reparto tradicionales se quedan con hasta el 30% de cada venta, y atender por mensajes sueltos de WhatsApp hace perder tiempo preguntando precios y sumando a mano.',
    dailyBenefits: [
      {
        title: '0% Comisión por Venta',
        desc: 'Todo lo que vendes entra íntegro a tu local. Sin cobros por pedido ni descuentos a fin de mes.',
      },
      {
        title: 'Carta Digital con Wi-Fi en 1 Toque',
        desc: 'Tus clientes escanean el QR en la mesa, miran fotos reales de tus platos y se conectan al Wi-Fi sin pedir la clave.',
      },
      {
        title: 'Pedidos Listos al WhatsApp',
        desc: 'El cliente arma su carrito y a ti te llega un mensaje ordenado con los productos, dirección y total ya sumado.',
      },
      {
        title: 'Cierre de Caja en 30 Segundos',
        desc: 'Revisas desde el celular o computador cuánto vendiste en el día en efectivo, tarjetas y transferencias.',
      },
    ],
    useCases: [
      {
        title: 'El pedido de la tarde en el almacén',
        scenario: 'Una vecina quiere pedir pan, cecinas y bebidas sin llamar ni esperar respuestas largas.',
        outcome: 'Entra al link del almacén, elige las cantidades y manda el pedido listo para pasar a retirar o recibir en casa.',
      },
      {
        title: 'Mesa ocupada en Restobar o Sushi',
        scenario: 'Llega un grupo de amigos y el garzón está atendiendo otra mesa grande.',
        outcome: 'Escanean el QR de la mesa, revisan la carta con fotos, hacen su pedido y la orden pasa directo a la cocina.',
      },
      {
        title: 'Despacho a domicilio sin enredos',
        scenario: 'El local reparte en su sector y necesita saber dirección exacta y forma de pago.',
        outcome: 'El carrito calcula el valor del envío solo y lo incluye en el mensaje de WhatsApp.',
      },
    ],
  },

  techSection: {
    architectureHeadline:
      'Plataforma Multi-Tienda sobre Next.js 16 y Base de Datos PostgreSQL',
    architectureDescription:
      'Construida con Next.js 16, base de datos PostgreSQL en Neon y validación de formularios y precios en el servidor con Zod 4.',
    deepStack: [
      { category: 'Pantallas y Web', items: ['Next.js 16 (App Router)', 'React 19', 'Tailwind CSS v4', 'Lucide React'] },
      { category: 'Datos y Pedidos', items: ['PostgreSQL (Neon)', 'Acciones de servidor seguras', 'Esquemas Zod 4'] },
      { category: 'Servidores y Red', items: ['Vercel', 'Cloudflare CDN & SSL', 'Correos con Resend'] },
      { category: 'Pruebas y Calidad', items: ['209/209 pruebas en Vitest', 'TypeScript 5.9 estricto', 'Revisión continua'] },
    ],
    enterpriseGains: [
      {
        title: 'Cuentas Separadas por Local',
        desc: 'Cada comercio tiene su propio catálogo, precios, horarios y registros de ventas protegidos.',
      },
      {
        title: 'Carga Rápida en Celulares',
        desc: 'Fotos livianas en formato WebP para que el menú abra en un segundo incluso con señal móvil regular.',
      },
      {
        title: 'Totales Calculados en Servidor',
        desc: 'Los precios, descuentos y costos de envío se validan en el servidor para evitar errores en los cobros.',
      },
    ],
    securityAndReliability: [
      'Revisión automática de todos los datos ingresados con Zod 4 para evitar caídas o envíos falsos.',
      'Sesiones privadas con cookies protegidas (HttpOnly).',
      'Descuento de stock ordenado para que dos personas no compren el último producto al mismo tiempo.',
      'Revisión constante de seguridad en librerías sin fallas pendientes.',
    ],
    benchmarks: [
      { label: 'Velocidad en Celular', value: '1.1 seg', detail: 'Puntaje 98+ en pruebas de Google' },
      { label: 'Pruebas Automáticas', value: '209/209', detail: '40 grupos de pruebas aprobadas' },
      { label: 'Productos por Tienda', value: 'Sin límite', detail: 'Búsqueda rápida en menos de 15ms' },
    ],
  },
};
