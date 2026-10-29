'use client';

import React, { useState } from 'react';
import { QUOTE_SERVICES, QUOTE_ADDONS, QuoteServiceOption } from '@/lib/data/calculatorData';
import { ArrowRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';

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

    const text = `Hola Kaibutsu, estuve usando el cotizador en kaibutsu.cl.\n\nMe interesa:\n- Solución: ${selectedService.name}\n- Módulos opcionales: ${addonNames || 'Ninguno'}\n- Estimado: ${formatCLP(totalEstimate)} + IVA\n\n¿Podemos coordinar una reunión o propuesta formal?`;
    return `https://wa.me/56936549761?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[var(--ink-card)] border border-[var(--hairline-strong)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="mb-6 sm:mb-8 pb-4 border-b border-[var(--hairline)]">
        <span className="text-xs font-mono uppercase tracking-wider text-[var(--gold)] font-semibold">
          Calculadora de Inversión Transparente
        </span>
        <h3 className="text-xl sm:text-3xl font-serif font-bold text-[var(--bone)] mt-1">
          Cotiza tu Proyecto en Minutos
        </h3>
        <p className="text-xs sm:text-sm text-[var(--mist)] mt-1">
          Valores referenciales directos en CLP para Chile. Ajusta a tu medida.
        </p>
      </div>

      {/* Paso 1: Tipo de Solución */}
      <div className="space-y-3 mb-6 sm:mb-8">
        <label className="text-xs font-mono uppercase tracking-wider text-[var(--mist)] block font-semibold">
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
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[var(--hanko)] bg-[var(--hanko)]/10 shadow-[0_4px_20px_rgba(200,16,46,0.2)]'
                    : 'border-[var(--hairline)] bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="font-bold text-sm text-[var(--bone)]">{service.name}</span>
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-[var(--hanko)] text-white flex items-center justify-center shrink-0 text-xs">
                      ✓
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--mist)] mb-3 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-baseline justify-between pt-2 border-t border-[var(--hairline)]">
                  <span className="text-sm font-serif font-bold text-[var(--bone)]">
                    {formatCLP(service.basePriceClp)}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--gold)]">
                    {service.deliveryWeeks}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Paso 2: Funcionalidades Opcionales */}
      <div className="space-y-3 mb-6 sm:mb-8">
        <label className="text-xs font-mono uppercase tracking-wider text-[var(--mist)] block font-semibold">
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
                className={`text-left p-3.5 rounded-xl border flex items-start gap-3 transition-all cursor-pointer ${
                  isChecked
                    ? 'border-[var(--gold)] bg-[var(--gold)]/10'
                    : 'border-[var(--hairline)] bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <div
                  className={`w-5 h-5 mt-0.5 rounded-md flex items-center justify-center border text-xs shrink-0 transition-colors ${
                    isChecked
                      ? 'bg-[var(--gold)] text-black border-[var(--gold)] font-bold'
                      : 'border-white/20'
                  }`}
                >
                  {isChecked ? '✓' : ''}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-xs font-semibold text-[var(--bone)]">{addon.name}</span>
                    <span className="text-xs font-mono font-bold text-[var(--gold)]">
                      +{formatCLP(addon.priceClp)}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--mist)] mt-0.5 leading-snug">
                    {addon.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Resumen Final Ergonométrico */}
      <div className="bg-gradient-to-r from-black/60 to-[var(--ink-surface)] p-5 sm:p-6 rounded-2xl border border-[var(--hairline-strong)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5">
        <div>
          <span className="text-[11px] font-mono text-[var(--mist)] uppercase tracking-wider block">
            Estimación referencial (+ IVA si requiere factura)
          </span>
          <div className="text-2xl sm:text-4xl font-serif font-bold text-[var(--bone)] mt-0.5">
            {formatCLP(totalEstimate)}
            <span className="text-xs font-mono font-normal text-[var(--gold)] ml-2">CLP</span>
          </div>
          <span className="text-xs text-[var(--mist)] block mt-0.5">
            Plazo estimado: <strong className="text-[var(--bone)]">{selectedService.deliveryWeeks}</strong>
          </span>
        </div>

        <Button
          href={buildWhatsAppUrl()}
          external
          variant="primary"
          size="lg"
          className="w-full sm:w-auto justify-center"
        >
          <span>Conversar cotización por WhatsApp</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
