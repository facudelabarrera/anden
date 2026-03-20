'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { MagneticButton } from '@/components/motion/MagneticButton'

const ARROW_ICON = '/assets/arrow-light.svg'

const TITLE = 'El puente entre la regulación existente y el capital tecnológico global.'
const WORDS = TITLE.split(' ')

const wordVariants = {
  hidden: { opacity: 0, y: 18, rotate: -2 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.45, ease: EASE } },
}

export default function Hero() {
  return (
    <section className="flex min-h-[88dvh] flex-1 flex-col items-center justify-center px-4 pt-28 text-center lg:min-h-0 lg:px-6">
      {/* Word-by-word reveal */}
      <motion.h1
        className="mx-auto max-w-[900px] font-alfarn text-3xl uppercase leading-[1.1] text-blue-brand md:text-4xl md:leading-tight lg:text-[60px] lg:leading-[60px]"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.055, delayChildren: 0.15 }}
        aria-label={TITLE}
      >
        {WORDS.map((word, i) => (
          <motion.span key={i} className="inline-block" variants={wordVariants}>
            {word}{i < WORDS.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="mx-auto mt-4 max-w-[750px] font-body text-base font-light text-blue-brand md:text-lg lg:mt-6 lg:text-xl font-variation-normal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
      >
        Andén es la infraestructura digital que convierte regímenes especiales
        existentes en motores de la Economía del Conocimiento — sin nueva
        legislación, sin reemplazar al Estado, con resultados medibles en meses.
      </motion.p>

      <motion.div
        className="mt-10 flex justify-center lg:mt-14"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
      >
        <MagneticButton>
          <a
            href="mailto:admin@anden.tech"
            className="group inline-flex items-center gap-4 rounded-xl border border-brown-dark/50 px-4 py-1.5 font-sans text-sm font-medium text-brown-dark transition-all duration-200 hover:border-brown-dark/70 hover:bg-brown-dark/5 hover:shadow-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown-dark/40 focus-visible:ring-offset-2 md:text-base"
          >
            Hablar con el Equipo
            <span className="flex size-6 items-center justify-center rounded bg-lime-brand p-1 transition-transform duration-150 group-hover:translate-x-0.5">
              <img src={ARROW_ICON} alt="" className="size-3" />
            </span>
          </a>
        </MagneticButton>
      </motion.div>
    </section>
  )
}
