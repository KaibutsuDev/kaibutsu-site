'use client';

import React, { useState } from 'react';
import { QUOTE_SERVICES, QUOTE_ADDONS, QuoteServiceOption } from '@/lib/data/calculatorData';

export default function QuoteCalculator() {
  const [selectedService, setSelectedService] = useState<QuoteServiceOption>(QUOTE_SERVICES[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo-avanzado']);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = QUOTE_ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.priceClp : 0);
  }, 0);

  const totalEstimate = selectedService.basePriceClp + addonsTotal;

  const formatCLP = (amount: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const buildWhatsAppUrl = () => {
    const addonNames = selectedAddons
      .map((id) => QUOTE_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Hola Kaibutsu, estuve usando el cotizador web.\n\nMe interesa:\n- Servicio: ${selectedService.name}\n- Módulos adicionales: ${addonNames || 'Ninguno'}\n- Estimación referencial: ${formatCLP(totalEstimate)} + IVA\n\n¿Podemos coordinar una reunión o propuesta formal?`;
    return `https://wa.me/56939526626?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[var(--ink-surface)] border border-[var(--ink-border)] rounded-xl p-6 sm:p-8 relative overflow-hidden">
      <div className="mb-6 pb-4 border-b border-[var(--ink-border)]">
        <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)]">
          Calculadora de Inversión Transparente
        </span>
        <h3 className="text-2xl font-serif font-bold text-[var(--bone)] mt-1">
          Cotiza tu Proyecto en Minutos
        </h3>
        <p className="text-sm text-[var(--mist)] mt-1">
          Valores referenciales transparentes en CLP para Chile. Sin costos ocultos.
        </p>
      </div>

      {/* Paso 1: Selección de Servicio Base */}
      <div className="space-y-3 mb-8">
        <label className="text-xs font-mono uppercase tracking-wider text-[var(--mist)] block">
          1. Elige el tipo de solución base
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {QUOTE_SERVICES.map((service) => {
            const isSelected = selectedService.id === service.id;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service)}
                className={`text-left p-4 rounded-lg border transition-all ${
                  isSelected
                    ? 'border-[var(--hanko)] bg-[var(--ink-card)] shadow-md ring-1 ring-[var(--hanko)]'
                    : 'border-[var(--ink-border)] bg-[var(--ink-bg)]/60 hover:border-[var(--mist)]/50'
                }`}
              >
                <div className="font-bold text-sm text-[var(--bone)] mb-1">{service.name}</div>
                <div className="text-xs text-[var(--mist)] mb-3 leading-relaxed">
                  {service.description}
                </div>
                <div className="flex items-baseline justify-between mt-auto pt-2 border-t border-[var(--ink-border)]/50">
                  <span className="text-xs font-mono text-[var(--gold)]">
                    {formatCLP(service.basePriceClp)}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--mist)]">
                    {service.deliveryWeeks}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Paso 2: Integraciones y Módulos Adicionales */}
      <div className="space-y-3 mb-8">
        <label className="text-xs font-mono uppercase tracking-wider text-[var(--mist)] block">
          2. Agrega funcionalidades específicas (Opcionales)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {QUOTE_ADDONS.map((addon) => {
            const isChecked = selectedAddons.includes(addon.id);
            return (
              <button
                key={addon.id}
                type="button"
                onClick={() => toggleAddon(addon.id)}
                className={`text-left p-3 rounded-lg border flex items-start gap-3 transition-all ${
                  isChecked
                    ? 'border-[var(--gold)]/80 bg-[var(--ink-card)]'
                    : 'border-[var(--ink-border)] bg-[var(--ink-bg)]/40 hover:border-[var(--mist)]/40'
                }`}
              >
                <div
                  className={`w-4 h-4 mt-0.5 rounded flex items-center justify-center border font-mono text-xs transition-colors ${
                    isChecked
                      ? 'bg-[var(--gold)] text-black border-[var(--gold)]'
                      : 'border-[var(--mist)]/40'
                  }`}
                >
                  {isChecked ? '✓' : ''}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-xs font-semibold text-[var(--bone)]">{addon.name}</span>
                    <span className="text-xs font-mono text-[var(--gold)]">
                      +{formatCLP(addon.priceClp)}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--mist)] mt-0.5">{addon.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Resumen Final y CTA */}
      <div className="bg-[var(--ink-card)] p-5 rounded-lg border border-[var(--ink-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono text-[var(--mist)] uppercase tracking-wider block">
            Estimación referencial (+ IVA si requiere factura)
          </span>
          <div className="text-3xl font-serif font-bold text-[var(--bone)]">
            {formatCLP(totalEstimate)}
            <span className="text-xs font-mono font-normal text-[var(--gold)] ml-2">CLP</span>
          </div>
          <span className="text-xs text-[var(--mist)]">
            Tiempo de desarrollo estimado: {selectedService.deliveryWeeks}
          </span>
        </div>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[var(--hanko)] text-white hover:bg-[var(--hanko-hover)] font-semibold text-sm transition-all shadow-lg active:scale-95"
        >
          <span>Conversar esta cotización por WhatsApp →</span>
        </a>
      </div>
    </div>
  );
}
