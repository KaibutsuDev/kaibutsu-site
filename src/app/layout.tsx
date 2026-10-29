import type { Metadata } from 'next';
import { Geist, Geist_Mono, Dela_Gothic_One, Shippori_Mincho } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const delaGothic = Dela_Gothic_One({
  weight: '400',
  variable: '--font-dela',
  subsets: ['latin'],
});

const shipporiMincho = Shippori_Mincho({
  weight: ['700', '800'],
  variable: '--font-kanji',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kaibutsu.cl'),
  title: {
    default: 'Kaibutsu 怪物 — Desarrollo Web, Tiendas Online y Software en Chile',
    template: '%s | Kaibutsu 怪物',
  },
  description:
    'Desarrollo de páginas web, tiendas online y software a medida en Chile. Velocidad instantánea con Next.js, sin plantillas genéricas. Creadores de K-Market y ProfeChileno.',
  keywords: [
    'desarrollo web chile',
    'paginas web santiago',
    'software a medida chile',
    'tiendas online ecommerce webpay chile',
    'programacion nextjs chile',
    'k-market',
    'kaibutsu',
  ],
  authors: [{ name: 'Roberto Ignacio Antonio González González', url: 'https://kaibutsu.cl' }],
  creator: 'Roberto Ignacio Antonio González González',
  publisher: 'Kaibutsu 怪物',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://kaibutsu.cl',
  },
  openGraph: {
    title: 'Kaibutsu 怪物 — Páginas Web y Software a Medida en Chile',
    description:
      'Soluciones digitales precisas: páginas web rápidas, comercio electrónico y sistemas a medida en Chile. Creadores de K-Market y ProfeChileno.',
    url: 'https://kaibutsu.cl',
    siteName: 'Kaibutsu 怪物',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaibutsu 怪物 — Desarrollo Web y Sistemas en Chile',
    description:
      'Páginas web modernas, tiendas online y software a medida. Código 100% de tu propiedad.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Kaibutsu 怪物',
    legalName: 'Roberto Ignacio Antonio González González',
    taxID: '19.542.218-4',
    url: 'https://kaibutsu.cl',
    logo: 'https://kaibutsu.cl/favicon.ico',
    description:
      'Desarrollo de software a medida, páginas web corporativas y plataformas de e-commerce en Chile.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santiago',
      addressRegion: 'Región Metropolitana',
      addressCountry: 'CL',
    },
    founder: {
      '@type': 'Person',
      name: 'Roberto Ignacio Antonio González González',
      jobTitle: 'Fundador y Desarrollador Principal',
    },
    telephone: '+56939526626',
    email: 'contacto@kaibutsu.cl',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
  };

  return (
    <html
      lang="es-CL"
      className={`${geistSans.variable} ${geistMono.variable} ${delaGothic.variable} ${shipporiMincho.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--ink-bg)] text-[var(--bone)] min-h-screen flex flex-col antialiased selection:bg-[var(--hanko)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
