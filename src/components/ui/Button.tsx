'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useReducedMotion } from 'motion/react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'katana' | 'gold';
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
    'bg-gradient-to-r from-[#9b1126] via-[#c8102e] to-[#7f0b1d] hover:from-[#b5142f] hover:to-[#9b1126] text-white shadow-[0_4px_24px_rgba(200,16,46,0.45),inset_0_1px_0_rgba(255,255,255,0.3)] border border-[#ff3b5c]/40',
  katana:
    'bg-gradient-to-r from-[#171a25]/90 via-[#221018]/90 to-[#171a25]/90 hover:border-[#c8102e]/60 text-white border border-white/15 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_24px_rgba(200,16,46,0.35)]',
  secondary:
    'bg-white/[0.04] hover:bg-white/[0.08] text-[var(--bone)] border border-white/12 hover:border-white/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
  ghost:
    'bg-transparent hover:bg-white/[0.05] text-[var(--mist)] hover:text-white border border-transparent',
  gold:
    'bg-gradient-to-r from-[#78350f] via-[#b45309] to-[#78350f] text-[#fef3c7] border border-[#f59e0b]/40 shadow-[0_4px_20px_rgba(245,158,11,0.25)]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-xs sm:text-sm',
  lg: 'px-7 py-3 text-sm sm:text-base font-semibold',
};

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'katana',
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

  const sharedClasses = `inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-wide transition-all duration-300 cursor-pointer select-none active:scale-[0.97] min-h-[44px] ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

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
