'use client';

import React from 'react';
import { User, Cpu } from 'lucide-react';

export type ViewMode = 'user' | 'technical';

interface ProjectModeToggleProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export default function ProjectModeToggle({ currentMode, onModeChange }: ProjectModeToggleProps) {
  return (
    <div className="inline-flex p-1 rounded-[4px] bg-[var(--ink-surface)] border border-[var(--hairline-strong)]">
      <button
        onClick={() => onModeChange('user')}
        className={`px-4 py-2 rounded-[3px] font-mono-tech text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
          currentMode === 'user'
            ? 'bg-[var(--hanko)] text-[var(--bone)] font-semibold'
            : 'text-[var(--ash)] hover:text-[var(--bone)]'
        }`}
      >
        <User className="w-3.5 h-3.5" />
        <span>Para Personas (En Simple)</span>
      </button>

      <button
        onClick={() => onModeChange('technical')}
        className={`px-4 py-2 rounded-[3px] font-mono-tech text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
          currentMode === 'technical'
            ? 'bg-[var(--hanko)] text-[var(--bone)] font-semibold'
            : 'text-[var(--ash)] hover:text-[var(--bone)]'
        }`}
      >
        <Cpu className="w-3.5 h-3.5" />
        <span>Ficha Técnica (Tecnologías)</span>
      </button>
    </div>
  );
}
