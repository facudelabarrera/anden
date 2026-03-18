import type { Metadata, Viewport } from 'next'
import { Jost, Fraunces, Playfair_Display } from 'next/font/google'
import { Providers } from '@/components/Providers'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Andén — Infraestructura para Zonas Digitales',
  description:
    'El puente entre la regulación existente y el capital tecnológico global. Infraestructura digital para zonas económicas especiales.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${jost.variable} ${fraunces.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
