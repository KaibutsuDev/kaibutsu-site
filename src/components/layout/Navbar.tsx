'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import KaibutsuLogo from '@/components/ui/KaibutsuLogo';
import Button from '@/components/ui/Button';

const NAV_LINKS = [
  { href: '/#services', label: 'Servicios' },
  { href: '/#pricing', label: 'Precios CLP' },
  { href: '/#flagships', label: 'Trabajos' },
  { href: '/#process', label: 'Cómo Trabajamos' },
  { href: '/proyectos', label: 'Proyectos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#070709]/90 backdrop-blur-md border-b border-[var(--hairline)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-[var(--bone)] hover:opacity-90 transition-opacity">
          <KaibutsuLogo className="w-9 h-9 text-[var(--bone)]" showWordmark />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono-tech uppercase tracking-[0.16em] text-[var(--ash)]">
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
          <Button href="/#contact" variant="primary" size="sm">
            <span>Pedir Presupuesto</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[var(--ash)] hover:text-[var(--bone)]"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[var(--ink-surface)] border-b border-[var(--hairline-strong)] px-6 py-6 space-y-4">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block font-mono-tech text-xs uppercase tracking-[0.16em] text-[var(--bone)] py-2 border-b border-[var(--hairline)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              href="/#contact"
              onClick={() => setIsOpen(false)}
              variant="primary"
              size="md"
              className="w-full"
            >
              <span>Pedir Presupuesto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
