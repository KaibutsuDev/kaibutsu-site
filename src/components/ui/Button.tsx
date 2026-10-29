'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
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
    'bg-[var(--hanko)] hover:bg-[var(--hanko-hover)] text-[var(--bone)] border border-[#e02444]',
  secondary:
    'bg-transparent hover:bg-white/[0.04] text-[var(--bone)] border border-[var(--hairline-strong)] hover:border-[#F4F1EA]/40',
  ghost:
    'bg-transparent hover:bg-white/[0.04] text-[var(--ash)] hover:text-[var(--bone)] border border-transparent',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-xs sm:text-sm',
  lg: 'px-7 py-3.5 text-xs sm:text-sm',
};

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  magnetic = true,
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
      x: (e.clientX - cx) * 0.16,
      y: (e.clientY - cy) * 0.16,
    });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  const sharedClasses = `inline-flex items-center justify-center gap-2.5 rounded-[4px] font-mono-tech uppercase tracking-[0.14em] font-semibold transition-colors duration-200 cursor-pointer ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

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

  return (
    <motion.span
      ref={wrapperRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, mass: 0.5 }}
      className="inline-flex"
    >
      {content}
    </motion.span>
  );
}
