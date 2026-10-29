import React from 'react';
import Link from 'next/link';
import KaibutsuLogo from '@/components/ui/KaibutsuLogo';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[#050507] py-12 px-4 sm:px-6 lg:px-8 text-[var(--ash)] text-xs font-mono-tech">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <KaibutsuLogo className="w-7 h-7 text-[var(--bone)]" showWordmark />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--ash)] uppercase tracking-[0.14em]">
          <Link href="/#services" className="hover:text-[var(--bone)] transition-colors">
            Servicios
          </Link>
          <Link href="/#pricing" className="hover:text-[var(--bone)] transition-colors">
            Precios CLP
          </Link>
          <Link href="/#flagships" className="hover:text-[var(--bone)] transition-colors">
            Trabajos
          </Link>
          <Link href="/proyectos" className="hover:text-[var(--bone)] transition-colors">
            Proyectos
          </Link>
          <Link href="/#contact" className="hover:text-[var(--bone)] transition-colors">
            Contacto
          </Link>
        </div>

        <div className="text-[var(--ash-muted)] text-[11px] tracking-wider uppercase">
          Santiago / Valparaíso, Chile — © 2026 Kaibutsu
        </div>
      </div>
    </footer>
  );
}
