import { ProjectDetail } from '@/lib/types/site';

export const PROFE_CHILENO_DETAIL: ProjectDetail = {
  id: 'profechileno',
  name: 'ProfeChileno',
  tagline: 'Asistencia, Libro de Notas y Actas en PDF para Profesores de Chile',
  description:
    'Pensado para profesores y colegios que quieren dejar atrás el papeleo eterno. Permite pasar la lista en un minuto, calcular promedios semestrales solos, proyectar en reunión de apoderados cuidando los datos privados e imprimir actas al instante.',
  category: 'EdTech',
  status: 'Flagship',
  tags: ['NestJS', 'TypeORM', 'PostgreSQL', 'React', 'Vite', 'Shadcn UI', 'Tailwind CSS'],
  imageSrc: '/images/team-samurai-code.webp',
  href: 'https://www.profechileno.cl',
  isFlagship: true,

  userSection: {
    targetAudience:
      'Profesores de enseñanza básica y media, profesores jefes, inspectores y equipos directivos de colegios.',
    headline: 'Menos horas llenando papeles, más tiempo para hacer clases',
    problemStatement:
      'Muchos profesores terminan llevándose trabajo a la casa para pasar notas, sacar promedios a mano y redactar informes o actas que un buen sistema hace en segundos.',
    dailyBenefits: [
      {
        title: 'Asistencia en 60 Segundos',
        desc: 'Pasas la lista rápido con el teclado o el celular y el porcentaje de asistencia de cada alumno se actualiza solo.',
      },
      {
        title: 'Promedios Sin Calculadora',
        desc: 'Ingresas las notas del semestre con el peso de cada prueba y el sistema calcula los promedios al instante.',
      },
      {
        title: 'Modo Reunión de Apoderados',
        desc: 'Proyectas tu pantalla en la sala ocultando en un clic las notas o anotaciones de los demás estudiantes.',
      },
      {
        title: 'Actas Listas para Imprimir',
        desc: 'Descargas certificados, informes y actas en PDF con la insignia del colegio listos para firmar.',
      },
    ],
    useCases: [
      {
        title: 'Pasar la lista al empezar la hora',
        scenario: 'Tienes 45 minutos de clases y no quieres perder 10 minutos llamando uno por uno en el libro físico.',
        outcome: 'Marcas solo a los ausentes en menos de un minuto y queda todo guardado.',
      },
      {
        title: 'Cierre de semestre sin trasnochar',
        scenario: 'Vienen los consejos de curso y necesitas tener todos los promedios cerrados y ver quiénes necesitan apoyo.',
        outcome: 'El libro digital muestra los promedios listos y avisa qué alumnos están con notas rojas o baja asistencia.',
      },
      {
        title: 'Atención de apoderados',
        scenario: 'Un apoderado pide ver el avance de su hijo frente al computador del profesor.',
        outcome: 'Activas el Modo Reunión para mostrar únicamente la ficha de ese alumno sin exponer al resto del curso.',
      },
    ],
  },

  techSection: {
    architectureHeadline:
      'Sistema Web en NestJS, Base de Datos PostgreSQL y Pantallas en React',
    architectureDescription:
      'Construido con servidor en NestJS, base de datos relacional PostgreSQL para cursos y calificaciones, y acceso diferenciado según el cargo en el colegio.',
    deepStack: [
      { category: 'Servidor', items: ['NestJS', 'Node.js 24 LTS', 'TypeORM', 'Acceso con JWT'] },
      { category: 'Pantallas', items: ['React 19', 'Vite 6', 'Tailwind CSS', 'Shadcn UI & Radix'] },
      { category: 'Base de Datos y PDF', items: ['PostgreSQL', 'Respaldos automáticos', 'PDFKit para actas'] },
      { category: 'Orden y Despliegue', items: ['Docker', 'pnpm Workspaces', 'Actualizaciones continuas'] },
    ],
    enterpriseGains: [
      {
        title: 'Adaptado a la Realidad Chilena',
        desc: 'Escala de notas de 1.0 a 7.0, semestres o trimestres, cursos chilenos y formatos de actas usados en colegios.',
      },
      {
        title: 'Permisos según el Cargo',
        desc: 'Cada usuario ve lo que le corresponde: Profesor de Asignatura, Profesor Jefe, UTP, Inspectoría o Dirección.',
      },
      {
        title: 'Buscador Rápido (Ctrl+K)',
        desc: 'Encuentras a cualquier alumno, apoderado o curso escribiendo un par de letras sin buscar en menús largos.',
      },
    ],
    securityAndReliability: [
      'Claves protegidas y cierre de sesión automático en computadores compartidos de sala de profesores.',
      'Guardado seguro de notas para que no se pierdan cambios si dos profesores trabajan al mismo tiempo.',
      'Generación de documentos PDF desde el servidor con timbre de verificación.',
      'Copias de seguridad periódicas de toda la información escolar.',
    ],
    benchmarks: [
      { label: 'Búsqueda de Alumnos', value: '< 20ms', detail: 'Respuesta inmediata al escribir' },
      { label: 'Descarga de Acta PDF', value: '< 0.4 seg', detail: 'Documento listo para imprimir' },
      { label: 'Disponibilidad', value: '99.95%', detail: 'Activo durante toda la jornada escolar' },
    ],
  },
};
