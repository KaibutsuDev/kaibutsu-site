import { ProjectDetail } from '@/lib/types/site';

export const PORTFOLIO_EXTRA_DETAILS: Record<string, ProjectDetail> = {
  'catalina-chocolates': {
    id: 'catalina-chocolates',
    name: 'Catalina Chocolates',
    tagline: 'Tienda Online de Chocolatería Artesanal y Regalos',
    description:
      'Catálogo dulce donde los clientes arman su caja de bombones a gusto, agregan tarjeta de saludo y coordinan el despacho a domicilio.',
    category: 'E-Commerce',
    status: 'Activo',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    userSection: {
      targetAudience: 'Amantes del chocolate artesanal y personas que buscan enviar un regalo especial a domicilio.',
      headline: 'Elige tus bombones favoritos y envía un regalo en un par de minutos',
      problemStatement: 'Vender chocolates solo por fotos sueltas de Instagram hacía difícil elegir sabores, anotar dedicatorias y coordinar las entregas en fechas de alta demanda.',
      dailyBenefits: [
        { title: 'Arma tu Propia Caja', desc: 'El cliente elige los sabores, tamaños y agrega un mensaje de regalo paso a paso.' },
        { title: 'Pedidos Claros para el Taller', desc: 'Cada compra llega con el detalle exacto de sabores, fecha de entrega y dirección.' },
      ],
      useCases: [
        { title: 'Regalo de cumpleaños o Día de la Madre', scenario: 'Un cliente quiere mandar una caja personalizada con dedicatoria a otra comuna.', outcome: 'Selecciona los chocolates en la web, escribe el saludo y deja agendado el envío en dos minutos.' },
      ],
    },
    techSection: {
      architectureHeadline: 'Tienda Online Rápida con Next.js y Carrito Personalizado',
      architectureDescription: 'Catálogo visual optimizado para teléfonos móviles con selección interactiva de productos y cálculo automático de despacho.',
      deepStack: [
        { category: 'Tienda Web', items: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'] },
      ],
      enterpriseGains: [
        { title: 'Compra Simple desde Instagram', desc: 'Pensada para quienes abren el link desde historias o publicaciones en el celular.' },
      ],
      securityAndReliability: ['Validación de stock por temporada y protección de datos de despacho.'],
      benchmarks: [{ label: 'Tiempo de Compra', value: '< 2 min', detail: 'Desde abrir el catálogo hasta confirmar' }],
    },
  },
  'pyme-suite': {
    id: 'pyme-suite',
    name: 'Pyme Suite',
    tagline: 'Control de Stock, Ventas y Caja para Negocios Locales',
    description:
      'Panel sencillo para dueños de locales que quieren saber cuánta mercadería queda y cuánto vendieron en el día sin enredarse con planillas.',
    category: 'SaaS',
    status: 'En Escala',
    tags: ['NestJS', 'PostgreSQL', 'React', 'TypeScript'],
    userSection: {
      targetAudience: 'Dueños de tiendas, ferreterías, bazares y pequeños comercios que quieren ordenar sus números.',
      headline: 'Tus ventas, tu mercadería y tu caja claros en un solo lugar',
      problemStatement: 'Llevar las cuentas en cuadernos o planillas sueltas hace que nunca sepas con certeza qué productos se están acabando ni cuánto ganaste realmente en la semana.',
      dailyBenefits: [
        { title: 'Avisos de Poco Stock', desc: 'El sistema te muestra qué productos quedan con pocas unidades antes de que se agoten.' },
        { title: 'Resumen Diario de Caja', desc: 'Ves cuánto entró por efectivo, tarjetas y transferencias sin sumar boleta por boleta.' },
      ],
      useCases: [
        { title: 'Revisión rápida antes de comprar mercadería', scenario: 'El dueño va al distribuidor y necesita saber qué productos reponer.', outcome: 'Mira el resumen en su celular y compra justo lo que hace falta en el local.' },
      ],
    },
    techSection: {
      architectureHeadline: 'Panel de Gestión en React con Servidor NestJS y PostgreSQL',
      architectureDescription: 'Sistema modular con base de datos relacional para movimientos de bodega, registro de ventas diarias y reportes por fecha.',
      deepStack: [
        { category: 'Sistema', items: ['NestJS', 'PostgreSQL', 'React', 'TypeScript'] },
      ],
      enterpriseGains: [
        { title: 'Cuentas Cuadradas y Respaldadas', desc: 'Cada entrada y salida de mercadería queda registrada con fecha y responsable.' },
      ],
      securityAndReliability: ['Respaldos automáticos en la nube y acceso con clave por vendedor o administrador.'],
      benchmarks: [{ label: 'Consulta de Stock', value: 'Instantánea', detail: 'Búsqueda por nombre o código' }],
    },
  },
};
