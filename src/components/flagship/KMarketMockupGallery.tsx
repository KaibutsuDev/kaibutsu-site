'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface MockupTab {
  id: string;
  label: string;
  imageSrc: string;
  caption: string;
}

const MOCKUP_TABS: MockupTab[] = [
  {
    id: 'dashboard',
    label: 'Panel del Local',
    imageSrc: '/images/k-market/mockup-dashboard-desktop.webp',
    caption: 'Cierre de caja en 30 segundos, pedidos del día y control de stock en una sola vista.',
  },
  {
    id: 'sakura',
    label: 'Carta QR en Mesa',
    imageSrc: '/images/k-market/mockup-sakura.webp',
    caption: 'El cliente escanea el QR en la mesa, mira fotos de los platos y se conecta al Wi-Fi en un toque.',
  },
  {
    id: 'carrito',
    label: 'Pedido al WhatsApp',
    imageSrc: '/images/k-market/mockup-carrito.webp',
    caption: 'Suma automática de envío o retiro y mensaje ordenado directo al WhatsApp del negocio.',
  },
  {
    id: 'stitch-story',
    label: 'Afiche Promocional',
    imageSrc: '/images/stitch/kmarket-story-editorial.jpg',
    caption: 'Gráfica lista para compartir ofertas e historias de tu local en redes sociales.',
  },
];

export default function KMarketMockupGallery() {
  const [activeTab, setActiveTab] = useState(MOCKUP_TABS[0]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {MOCKUP_TABS.map((tab) => {
          const isActive = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-[3px] text-xs font-mono-tech uppercase tracking-wider transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[var(--hanko)] text-[var(--bone)] font-semibold'
                  : 'bg-[var(--ink-bg)] text-[var(--ash)] hover:text-[var(--bone)] border border-[var(--hairline)]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="relative aspect-[16/10] w-full rounded-[4px] overflow-hidden border border-[var(--hairline-strong)] bg-[var(--ink-bg)]">
        <Image
          src={activeTab.imageSrc}
          alt={activeTab.label}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-2 sm:p-4"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[var(--ink-bg)] via-[#070709]/85 to-transparent p-3.5">
          <p className="text-xs text-[var(--ash)]">
            <span className="text-[var(--bone)] font-mono-tech font-semibold">
              {activeTab.label}:
            </span>{' '}
            {activeTab.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
