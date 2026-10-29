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
      className={`relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--hairline)] overflow-hidden ${className}`}
    >
      {/* Optional Atmospheric Scene Backdrop */}
      {sceneSrc && (
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src={sceneSrc}
            alt={sceneAlt}
            fill
            sizes="100vw"
            className="object-cover object-center opacity-60 sm:opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-bg)] via-[#070709]/80 to-[var(--ink-bg)]" />
        </div>
      )}

      {/* Monumental Kanji Watermark */}
      {kanjiWatermark && (
        <div
          aria-hidden="true"
          className="absolute -top-8 sm:top-4 right-2 sm:right-8 pointer-events-none select-none z-0"
        >
          <span className="kanji-watermark text-[36vw] sm:text-[20vw] font-bold block opacity-15 sm:opacity-25">
            {kanjiWatermark}
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 space-y-8 sm:space-y-12">
        {(eyebrow || title || subtitle) && (
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            {eyebrow && (
              <div className="flex items-center gap-2.5">
                {index && (
                  <span className="font-mono text-xs font-bold text-[var(--hanko)]">
                    {index}
                  </span>
                )}
                <span className="hanko-seal px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold">
                  {eyebrow}
                </span>
              </div>
            )}
            {title && (
              <h2 className="font-dela text-2xl sm:text-3xl lg:text-4xl text-[var(--bone)] tracking-tight leading-[1.15]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm sm:text-base text-[var(--mist)] leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
