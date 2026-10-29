import React from 'react';
import Link from 'next/link';
import KaibutsuLogo from '@/components/ui/KaibutsuLogo';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--ink-border)] bg-[#050507] py-12 px-4 sm:px-6 lg:px-8 text-[var(--mist)] text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <KaibutsuLogo className="w-7 h-7 text-[var(--bone)]" showWordmark />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--mist)] uppercase tracking-wider text-[11px]">
          <Link href="/#services" className="hover:text-[var(--bone)] transition-colors">
            Servicios
          </Link>
          <Link href="/#pricing" className="hover:text-[var(--bone)] transition-colors">
            Precios CLP
          </Link>
          <Link href="/#cotizador" className="hover:text-[var(--bone)] transition-colors">
            Cotizador Web
          </Link>
          <Link href="/#faq" className="hover:text-[var(--bone)] transition-colors">
            Preguntas Frecuentes
          </Link>
          <Link href="/proyectos" className="hover:text-[var(--bone)] transition-colors">
            Proyectos
          </Link>
          <Link href="/terminos" className="hover:text-[var(--bone)] transition-colors">
            Términos y Condiciones
          </Link>
          <Link href="/privacidad" className="hover:text-[var(--bone)] transition-colors">
            Privacidad
          </Link>
        </div>

        <div className="text-[var(--mist)]/70 text-[11px] tracking-wider text-center md:text-right">
          <div>Roberto Ignacio Antonio González González · RUT 19.542.218-4</div>
          <div>Santiago, Chile — © 2026 Kaibutsu 怪物</div>
        </div>
      </div>
    </footer>
  );
}
