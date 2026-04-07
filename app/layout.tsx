import type { Metadata, Viewport } from 'next'
import { Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Providers } from '@/components/Providers'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['400', '500', '600'],
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
    <html lang="es">
      <body className={`${jost.variable} font-sans`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
