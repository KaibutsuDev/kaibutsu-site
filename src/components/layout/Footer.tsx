import React from 'react';
import Link from 'next/link';
import KaibutsuLogo from '@/components/ui/KaibutsuLogo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06070a]/90 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8 text-[var(--mist)] text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <KaibutsuLogo className="w-8 h-8 text-[var(--bone)]" showWordmark />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-[var(--mist)] uppercase tracking-wider text-[11px] font-medium">
          <Link href="/#services" className="hover:text-white transition-colors">
            Servicios
          </Link>
          <Link href="/#pricing" className="hover:text-white transition-colors">
            Precios CLP
          </Link>
          <Link href="/#cotizador" className="hover:text-white transition-colors">
            Cotizador Web
          </Link>
          <Link href="/#faq" className="hover:text-white transition-colors">
            Preguntas Frecuentes
          </Link>
          <Link href="/proyectos" className="hover:text-white transition-colors">
            Proyectos
          </Link>
          <Link href="/terminos" className="hover:text-white transition-colors">
            Términos y Condiciones
          </Link>
          <Link href="/privacidad" className="hover:text-white transition-colors">
            Privacidad
          </Link>
        </div>

        <div className="text-[var(--mist)] text-[11px] tracking-wider text-center md:text-right space-y-1">
          <div>
            <a
              href="https://github.com/KaibutsuDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--bone)] hover:text-[#ff4d6d] font-semibold transition-colors"
            >
              GitHub: KaibutsuDev
            </a>
            <span className="mx-2 text-white/20">·</span>
            <span>WhatsApp: +56 9 3654 9761</span>
          </div>
          <div className="text-white/40">Santiago / Valparaíso, Chile — © 2026 Kaibutsu 怪物</div>
        </div>
      </div>
    </footer>
  );
}
