import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ViewMode } from './ProjectModeToggle';
import Button from '@/components/ui/Button';

interface ProjectDetailCTAProps {
  projectName: string;
  projectHref?: string;
  currentMode: ViewMode;
}

export default function ProjectDetailCTA({
  projectName,
  projectHref,
  currentMode,
}: ProjectDetailCTAProps) {
  if (currentMode === 'user') {
    return (
      <div className="sumi-card rounded-[4px] p-8 sm:p-12 text-center space-y-6">
        <div className="space-y-2 max-w-xl mx-auto">
          <h3 className="font-dela text-2xl sm:text-3xl text-[var(--bone)]">
            ¿Te gustaría usar {projectName} o tener algo parecido?
          </h3>
          <p className="text-sm text-[var(--ash)]">
            Puedes probar la página en vivo ahora mismo o escribirnos para hacer una versión para
            tu propio negocio.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {projectHref && (
            <Button href={projectHref} external variant="primary" size="lg">
              <span>Probar {projectName}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
          <Button href="/#contact" variant="secondary" size="lg">
            <span>Hacer una Consulta</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="sumi-card rounded-[4px] p-8 sm:p-12 text-center space-y-6">
      <div className="space-y-2 max-w-xl mx-auto">
        <span className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[var(--hanko)] block">
          Hecho a Medida
        </span>
        <h3 className="font-dela text-2xl sm:text-3xl text-[var(--bone)]">
          ¿Necesitas un sistema como este para tu negocio?
        </h3>
        <p className="text-sm text-[var(--ash)]">
          Lo armamos a la medida de tu trabajo, con plazos claros y todas las cuentas a tu nombre.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button href="/#contact" variant="primary" size="lg">
          <span>Pedir Presupuesto</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button href="/#pricing" variant="secondary" size="lg">
          <span>Ver Precios en CLP</span>
        </Button>
      </div>
    </div>
  );
}
