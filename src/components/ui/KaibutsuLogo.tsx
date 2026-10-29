'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import BrandMarkSvg from './BrandMarkSvg';

interface KaibutsuLogoProps {
  className?: string;
  animateStroke?: boolean;
  showWordmark?: boolean;
}

export default function KaibutsuLogo({
  className = 'w-8 h-8',
  animateStroke = false,
  showWordmark = false,
}: KaibutsuLogoProps) {
  const reduced = useReducedMotion();
  const shouldAnimate = animateStroke && !reduced;

  const mark = (
    <span className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <BrandMarkSvg className="w-full h-full" />
    </span>
  );

  return (
    <span className="inline-flex items-center gap-3 select-none">
      {shouldAnimate ? (
        <motion.span
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.2 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex"
        >
          {mark}
        </motion.span>
      ) : (
        mark
      )}

      {showWordmark && (
        <span className="inline-flex items-baseline gap-2">
          <span className="font-dela text-base sm:text-lg tracking-wider text-[var(--bone)]">
            KAIBUTSU
          </span>
          <span
            className="font-kanji text-xs text-[var(--hanko)] font-bold tracking-widest border border-[#C8102E]/45 px-1.5 py-0.5 rounded-[3px]"
            aria-hidden="true"
          >
            怪物
          </span>
        </span>
      )}
    </span>
  );
}
