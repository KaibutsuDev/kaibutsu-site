'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useReducedMotion } from 'motion/react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gold';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: ButtonVariant;
  size?: ButtonSize;
  magnetic?: boolean;
  className?: string;
  external?: boolean;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--hanko)] hover:bg-[var(--hanko-hover)] text-white shadow-[0_4px_16px_rgba(200,16,46,0.35),inset_0_1px_0_rgba(255,255,255,0.25)] border border-[#ff3355]/40',
  secondary:
    'bg-white/[0.05] hover:bg-white/[0.1] text-[var(--bone)] border border-[var(--hairline-strong)] hover:border-white/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]',
  ghost:
    'bg-transparent hover:bg-white/[0.05] text-[var(--ash)] hover:text-[var(--bone)] border border-transparent',
  gold:
    'bg-[var(--gold)]/15 hover:bg-[var(--gold)]/25 text-[#ffd700] border border-[var(--gold)]/40 shadow-[0_4px_16px_rgba(212,175,55,0.2),inset_0_1px_0_rgba(255,255,255,0.2)]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-xs sm:text-sm',
  lg: 'px-6 py-3.5 text-sm sm:text-base',
};

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  magnetic = false,
  className = '',
  external = false,
}: ButtonProps) {
  const reduced = useReducedMotion();
  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (reduced || !magnetic || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - cx) * 0.12,
      y: (e.clientY - cy) * 0.12,
    });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  const sharedClasses = `inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-normal transition-all duration-200 cursor-pointer select-none active:scale-[0.97] min-h-[44px] ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  const content = href ? (
    external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={sharedClasses}>
        {children}
      </a>
    ) : (
      <Link href={href} className={sharedClasses}>
        {children}
      </Link>
    )
  ) : (
    <button type={type} onClick={onClick} className={sharedClasses}>
      {children}
    </button>
  );

  if (!magnetic) {
    return content;
  }

  return (
    <span
      ref={wrapperRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
      }}
    >
      {content}
    </span>
  );
}
