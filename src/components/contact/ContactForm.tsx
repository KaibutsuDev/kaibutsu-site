'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: 'Página de Presentación o Campaña ($250.000 CLP+)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="sumi-card p-8 rounded-[4px] text-center space-y-4">
        <CheckCircle2 className="w-8 h-8 text-[var(--hanko)] mx-auto" />
        <h3 className="font-dela text-xl text-[var(--bone)]">Mensaje recibido</h3>
        <p className="text-sm text-[var(--ash)]">
          Ya recibimos tus datos. Te escribiremos dentro del día para conversar tu idea y darte un
          presupuesto claro.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-mono-tech uppercase tracking-wider text-[var(--hanko)] underline cursor-pointer"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-[4px] bg-[var(--ink-bg)] border border-[var(--hairline-strong)] focus:border-[var(--hanko)] text-[var(--bone)] placeholder-[var(--ash-muted)] text-sm outline-none transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-[11px] font-mono-tech text-[var(--ash)] mb-1.5 uppercase tracking-wider"
          >
            Tu Nombre o Negocio
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Ej. Juan Pérez / Pastelería Sur"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-[11px] font-mono-tech text-[var(--ash)] mb-1.5 uppercase tracking-wider"
          >
            Tu Correo o WhatsApp
          </label>
          <input
            id="contact-email"
            type="text"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="correo@ejemplo.cl o +56 9..."
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-type"
          className="block text-[11px] font-mono-tech text-[var(--ash)] mb-1.5 uppercase tracking-wider"
        >
          ¿Qué te gustaría hacer?
        </label>
        <select
          id="contact-type"
          value={form.projectType}
          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
          className={inputClass}
        >
          <option value="Página de Presentación o Campaña ($250.000 CLP+)">
            Página de Presentación o Campaña (Desde $250.000 CLP)
          </option>
          <option value="Sitio Web para tu Negocio ($650.000 CLP+)">
            Sitio Web para tu Negocio (Desde $650.000 CLP)
          </option>
          <option value="Tienda Online o Sistema de Reservas ($1.500.000 CLP+)">
            Tienda Online o Sistema de Reservas (Desde $1.500.000 CLP)
          </option>
          <option value="Arreglo o Mejora de mi Web Actual">
            Arreglar o Mejorar mi Web Actual (Valor a convenir)
          </option>
          <option value="Sistema a Medida">
            Sistema a Medida para mi Trabajo o Local (Valor a convenir)
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-[11px] font-mono-tech text-[var(--ash)] mb-1.5 uppercase tracking-wider"
        >
          Cuéntanos sobre tu idea o negocio
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="¿Qué vendes o qué servicio ofreces? ¿Tienes una página hoy o partes desde cero?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        <Send className="w-4 h-4" />
        <span>Pedir Presupuesto</span>
      </Button>
    </form>
  );
}
