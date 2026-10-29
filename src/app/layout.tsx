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
  title: 'Kaibutsu 怪物 — Páginas Web, Tiendas Online y Sistemas en Chile',
  description:
    'Hacemos páginas web, tiendas online y sistemas a medida para emprendedores, profesionales y negocios en Chile. Creadores de K-Market y ProfeChileno.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${geistSans.variable} ${geistMono.variable} ${delaGothic.variable} ${shipporiMincho.variable} dark scroll-smooth`}
    >
      <body className="bg-[var(--ink-bg)] text-[var(--bone)] min-h-screen flex flex-col antialiased selection:bg-[var(--hanko)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
