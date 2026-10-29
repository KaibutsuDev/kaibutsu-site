import { ProjectDetail } from '@/lib/types/site';
import { PORTFOLIO_EXTRA_DETAILS } from './portfolioExtraDetail';

export const PORTFOLIO_DETAILS: Record<string, ProjectDetail> = {
  barberian: {
    id: 'barberian',
    name: 'Barberian',
    tagline: 'Agenda de Horas Online para Barberías y Peluquerías',
    description:
      'Página de reservas donde el cliente elige a su barbero, ve las horas libres en el celular y agenda sin tener que esperar respuesta por Instagram.',
    category: 'SaaS',
    status: 'Activo',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    userSection: {
      targetAudience: 'Barberos, peluquerías, centros de estética y clientes que prefieren pedir hora desde el teléfono.',
      headline: 'Reserva tu corte en 30 segundos sin llamar ni esperar mensajes',
      problemStatement: 'Agendar por mensajes de Instagram o WhatsApp suele terminar en horas repetidas, clientes que olvidan su cita y tiempo perdido respondiendo entre corte y corte.',
      dailyBenefits: [
        { title: 'Elige a tu Barbero', desc: 'Cada cliente ve qué profesional está disponible y elige el servicio que quiere.' },
        { title: 'Confirmación al Instante', desc: 'La hora queda reservada enseguida y envía recordatorio para evitar inasistencias.' },
        { title: 'Agenda Ordenada todo el Día', desc: 'El local ve su semana completa en una sola pantalla sin cruces de horario.' },
      ],
      useCases: [
        { title: 'Reserva de noche para el fin de semana', scenario: 'Un cliente se acuerda en la noche que necesita cortarse el pelo el sábado.', outcome: 'Entra a la página desde su celular, elige la hora libre y queda agendado sin despertar a nadie.' },
      ],
    },
    techSection: {
      architectureHeadline: 'Agenda en Vivo con Next.js y Base de Datos PostgreSQL',
      architectureDescription: 'Sistema web en Next.js y Node.js que bloquea el horario apenas se confirma para que dos personas no tomen el mismo turno.',
      deepStack: [
        { category: 'Herramientas', items: ['Next.js App Router', 'React 19', 'Tailwind CSS', 'PostgreSQL'] },
      ],
      enterpriseGains: [
        { title: 'Sin Horas Duplicadas', desc: 'El calendario se actualiza al instante cada vez que entra una reserva nueva.' },
      ],
      securityAndReliability: ['Protección contra reservas falsas y respaldo diario del calendario.'],
      benchmarks: [{ label: 'Confirmación de Hora', value: '< 1 seg', detail: 'Actualización inmediata en agenda' }],
    },
  },
  'igonzalez-abogados': {
    id: 'igonzalez-abogados',
    name: 'IGonzalez Abogados',
    tagline: 'Sitio Web y Consultas Online para Estudio de Abogados',
    description:
      'Página clara para personas que necesitan orientación legal rápida, con formulario para explicar su caso y conocer valores sin vueltas.',
    category: 'B2B / Legal',
    status: 'Activo',
    tags: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS'],
    userSection: {
      targetAudience: 'Personas, trabajadores, familias y pymes que necesitan ayuda de un abogado sin palabras complicadas.',
      headline: 'Orientación legal clara, con valores transparentes desde el primer contacto',
      problemStatement: 'Buscar un abogado suele dar desconfianza cuando no se sabe cuánto va a costar la consulta ni cuánto tardarán en responder.',
      dailyBenefits: [
        { title: 'Valores Claros por Trámite', desc: 'El visitante entiende qué incluye cada servicio legal antes de agendar.' },
        { title: 'Contacto Directo sin Papeleo', desc: 'Formulario guiado para contar el problema en simple y recibir respuesta rápida.' },
      ],
      useCases: [
        { title: 'Duda urgente laboral o familiar', scenario: 'Una persona necesita saber hoy mismo qué pasos seguir ante un despido o trámite.', outcome: 'Deja sus datos en la página y un abogado del equipo la llama con los pasos claros.' },
      ],
    },
    techSection: {
      architectureHeadline: 'Sitio Web Rápido en React 19 y TypeScript',
      architectureDescription: 'Página liviana que abre al instante en cualquier celular, con formularios verificados y cuidado de los datos privados del cliente.',
      deepStack: [
        { category: 'Herramientas', items: ['React 19', 'Vite 7', 'TypeScript 5.9', 'Tailwind CSS'] },
      ],
      enterpriseGains: [
        { title: 'Imagen Confiable y Clara', desc: 'Diseño limpio que da tranquilidad a quien busca ayuda legal.' },
      ],
      securityAndReliability: ['Conexión segura con candado SSL y envío privado de antecedentes.'],
      benchmarks: [{ label: 'Búsqueda en Google', value: '100/100', detail: 'Preparada para aparecer en buscadores' }],
    },
  },
  'pmx-viewer': {
    id: 'pmx-viewer',
    name: 'PMX 3D Viewer',
    tagline: 'Visor de Personajes y Modelos 3D Directo en el Navegador',
    description:
      'Herramienta gratuita en la web para arrastrar archivos 3D, probar luces, texturas y movimientos a 60 cuadros por segundo sin instalar programas pesados.',
    category: '3D / Graphics',
    status: 'Activo',
    tags: ['Three.js', 'WebGL', 'TypeScript', 'GLSL'],
    userSection: {
      targetAudience: 'Ilustradores, animadores 3D, creadores de videojuegos y curiosos del diseño 3D.',
      headline: 'Mira y mueve tus modelos 3D en segundos desde cualquier navegador',
      problemStatement: 'Revisar un archivo 3D normalmente obliga a instalar programas gigantes en el computador y esperar varios minutos solo para ver cómo quedó.',
      dailyBenefits: [
        { title: 'Sin Instalar Nada', desc: 'Solo arrastras tu archivo a la página y el modelo aparece listo para girar y acercar.' },
        { title: 'Prueba de Luces y Poses', desc: 'Cambias la iluminación, sombras y movimiento de las piezas en vivo.' },
      ],
      useCases: [
        { title: 'Revisión rápida de un diseño', scenario: 'Un artista quiere comprobar cómo se ven las texturas de su personaje antes de entregarlo.', outcome: 'Abre el visor en el navegador, carga el archivo y lo revisa fluido a 60 cuadros por segundo.' },
      ],
    },
    techSection: {
      architectureHeadline: 'Motor Gráfico 3D en la Web con Three.js y WebGL 2.0',
      architectureDescription: 'Lectura de modelos poligonales, texturas y esqueletos de animación usando la tarjeta gráfica del dispositivo directamente desde el navegador.',
      deepStack: [
        { category: 'Motor 3D', items: ['Three.js', 'WebGL 2.0', 'Shaders GLSL', 'Web Workers'] },
      ],
      enterpriseGains: [
        { title: 'Movimiento Fluido', desc: 'Mantiene 60 cuadros por segundo incluso con modelos llenos de detalles.' },
      ],
      securityAndReliability: ['El archivo se revisa en tu propio navegador sin subir tus diseños privados a servidores externos.'],
      benchmarks: [{ label: 'Fluidez Visual', value: '60 FPS', detail: 'En computadores y teléfonos modernos' }],
    },
  },
  ...PORTFOLIO_EXTRA_DETAILS,
};
