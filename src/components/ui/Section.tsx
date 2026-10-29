import React from 'react';
import Image from 'next/image';

interface SectionProps {
  id?: string;
  index?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  kanjiWatermark?: string;
  sceneSrc?: string;
  sceneAlt?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  index,
  eyebrow,
  title,
  subtitle,
  kanjiWatermark,
  sceneSrc,
  sceneAlt = '',
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[var(--hairline)] overflow-hidden ${className}`}
    >
      {/* Optional Sumi-e Atmospheric Scene */}
      {sceneSrc && (
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src={sceneSrc}
            alt={sceneAlt}
            fill
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-bg)] via-[#070709]/75 to-[var(--ink-bg)]" />
        </div>
      )}

      {/* Optional Subtle Kanji Watermark */}
      {kanjiWatermark && (
        <div
          aria-hidden="true"
          className="absolute top-12 right-6 sm:right-12 pointer-events-none select-none z-0"
        >
          <span className="kanji-watermark text-[13vw] sm:text-[10vw] font-bold block">
            {kanjiWatermark}
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 space-y-14">
        {(eyebrow || title) && (
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end border-b border-[var(--hairline)] pb-8">
            <div className="lg:col-span-7 space-y-3">
              {eyebrow && (
                <div className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[var(--hanko)]">
                  {index ? `${index} · ` : ''}
                  {eyebrow}
                </div>
              )}
              {title && (
                <h2 className="font-dela text-2xl sm:text-4xl text-[var(--bone)] tracking-tight leading-[1.15]">
                  {title}
                </h2>
              )}
            </div>
            {subtitle && (
              <p className="lg:col-span-5 text-sm sm:text-base text-[var(--ash)] leading-relaxed">
                {subtitle}
              </p>
            )}
          </header>
        )}

        {children}
      </div>
    </section>
  );
}
