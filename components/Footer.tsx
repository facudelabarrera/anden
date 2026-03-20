import { Reveal } from '@/components/motion/Reveal'
import { MagneticButton } from '@/components/motion/MagneticButton'

const ARROW_DARK = '/assets/arrow-dark.svg'

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="px-4 pb-4 pt-16 lg:px-6 lg:pb-6"
    >
      <Reveal y={16}>
      <div className="flex flex-col items-center gap-8 rounded-[48px] bg-brown-dark px-6 py-12 md:px-12 lg:p-12">
        {/* Quote */}
        <p
          className="max-w-[500px] text-center font-body text-base font-light text-lime-brand md:text-lg font-variation-normal"
        >
          Una Zona Digital puede estar en marcha en 6 meses. El marco legal
          existe. La tecnología está lista. Solo falta la decisión.
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-cream-light/30" />

        {/* CTA */}
        <MagneticButton>
          <a
            href="https://mail.google.com/mail/?view=cm&to=teofilo@anden.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-w-[220px] items-center gap-4 rounded-xl border border-brown-dark/50 bg-lime-brand px-4 py-1.5 font-sans text-base font-medium text-brown-dark transition-all duration-200 hover:bg-lime-brand/80 hover:shadow-sm active:scale-[0.98]"
          >
            <span className="flex-1">Hablar con el Equipo</span>
            <span className="flex size-6 items-center justify-center rounded bg-brown-dark p-1 transition-transform duration-150 group-hover:translate-x-0.5">
              <img src={ARROW_DARK} alt="" className="size-3" />
            </span>
          </a>
        </MagneticButton>

        {/* Divider */}
        <div className="h-px w-full bg-cream-light/30" />

        {/* Copyright */}
        <p className="text-center font-sans text-sm text-cream-light md:text-base">
          © 2026 ANDÉN · Infraestructura para Zonas Digitales · Buenos Aires,
          Argentina
        </p>

        {/* Social */}
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/anden-tech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-cream-light transition-all duration-150 hover:scale-110 hover:opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://x.com/Andentech" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-cream-light transition-all duration-150 hover:scale-110 hover:opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
      </Reveal>
    </footer>
  )
}
