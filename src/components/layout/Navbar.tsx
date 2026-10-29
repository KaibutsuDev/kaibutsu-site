'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import KaibutsuLogo from '@/components/ui/KaibutsuLogo';
import Button from '@/components/ui/Button';

const NAV_LINKS = [
  { href: '/#services', label: 'Servicios' },
  { href: '/#pricing', label: 'Precios CLP' },
  { href: '/#cotizador', label: 'Cotizador' },
  { href: '/#flagships', label: 'Trabajos' },
  { href: '/#faq', label: 'Dudas' },
  { href: '/proyectos', label: 'Proyectos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#070709]/90 backdrop-blur-md border-b border-[var(--ink-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-[var(--bone)] hover:opacity-90 transition-opacity">
          <KaibutsuLogo className="w-9 h-9 text-[var(--bone)]" showWordmark />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[var(--mist)]">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[var(--bone)] transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button href="/#cotizador" variant="primary" size="sm">
            <span>Cotizar Online</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[var(--mist)] hover:text-[var(--bone)]"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#070709] border-b border-[var(--ink-border)] px-4 py-6 space-y-4">
          <div className="flex flex-col gap-3 text-xs font-mono uppercase tracking-wider text-[var(--mist)]">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[var(--bone)] transition-colors py-2 border-b border-[var(--ink-border)]/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Button
              href="/#cotizador"
              variant="primary"
              size="sm"
              className="w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              <span>Cotizar Online →</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
