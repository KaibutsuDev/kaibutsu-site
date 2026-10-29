'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
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
    <header className="fixed top-0 inset-x-0 z-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto h-16 px-5 sm:px-6 rounded-2xl bg-[#0c0d14]/75 backdrop-blur-2xl border border-white/10 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
        <Link href="/" className="flex items-center gap-3 text-[var(--bone)] hover:opacity-90 transition-opacity">
          <KaibutsuLogo className="w-8 h-8 sm:w-9 sm:h-9 text-[var(--bone)]" showWordmark />
        </Link>

        {/* Desktop Links (Clean subtle typography like reference) */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium tracking-wide text-[var(--mist)]">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button href="/#cotizador" variant="katana" size="sm">
            <span>CONTACTAR</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl border border-white/12 bg-white/[0.04] text-[var(--bone)] active:scale-95 transition-all"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Modern Floating Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-2 p-5 rounded-2xl bg-[#0c0d14]/95 backdrop-blur-2xl border border-white/12 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 py-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-[var(--bone)] hover:bg-white/[0.06] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 mt-2 border-t border-white/10">
            <Button
              href="/#cotizador"
              variant="katana"
              size="md"
              className="w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              <span>CONTACTAR</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
