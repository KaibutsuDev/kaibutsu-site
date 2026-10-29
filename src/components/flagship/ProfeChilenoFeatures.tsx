import React from 'react';

const PROFE_FEATURES = [
  {
    index: '01',
    title: 'Asistencia en 60 segundos',
    desc: 'Registro por clase con atajos de teclado y cálculo automático de porcentaje.',
  },
  {
    index: '02',
    title: 'Libro de Notas por Semestre',
    desc: 'Ponderaciones configurables, promedios al instante y exportación limpia.',
  },
  {
    index: '03',
    title: 'Modo Reunión (Privacidad)',
    desc: 'Oculta datos sensibles de otros alumnos al proyectar o atender apoderados.',
  },
  {
    index: '04',
    title: 'Actas Oficiales en PDF',
    desc: 'Generación inmediata de informes y actas con el timbre del establecimiento.',
  },
  {
    index: '05',
    title: 'Buscador Rápido (Ctrl+K)',
    desc: 'Salto directo a cualquier estudiante, curso o citación sin perder tiempo en menús.',
  },
  {
    index: '06',
    title: 'Vistas Docente y Dirección',
    desc: 'Permisos diferenciados para profesores de aula, UTP y equipo directivo.',
  },
];

export default function ProfeChilenoFeatures() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {PROFE_FEATURES.map((item) => (
        <div
          key={item.index}
          className="p-4 rounded-[4px] bg-[#070709]/60 border border-[var(--hairline)] space-y-1.5"
        >
          <span className="font-mono-tech text-[11px] text-[var(--hanko)] font-bold block">
            {item.index}
          </span>
          <h4 className="text-sm font-bold text-[var(--bone)]">{item.title}</h4>
          <p className="text-xs text-[var(--ash)] leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
