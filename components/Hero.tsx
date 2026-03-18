'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { MagneticButton } from '@/components/motion/MagneticButton'

const ARROW_ICON = '/assets/arrow-light.svg'

const TITLE = 'El puente entre la regulación existente y el capital tecnológico global.'
const WORDS = TITLE.split(' ')

const wordVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-4 pb-16 pt-20 text-center lg:px-0 lg:pt-32">
      {/* Word-by-word reveal */}
      <motion.h1
        className="mx-auto max-w-[900px] font-alfarn text-3xl uppercase leading-tight text-blue-brand md:text-4xl lg:text-[60px] lg:leading-[60px]"
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
        className="mx-auto mt-8 max-w-[750px] font-body text-base font-light text-blue-brand md:text-lg lg:mt-12 lg:text-xl"
        style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
      >
        Andén es la infraestructura digital que convierte regímenes especiales
        existentes en motores de la Economía del Conocimiento — sin nueva
        legislación, sin reemplazar al Estado, con resultados medibles en meses.
      </motion.p>

      <motion.div
        className="mt-8 flex justify-center lg:mt-12"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
      >
        <MagneticButton>
          <a
            href="#contacto"
            className="inline-flex items-center gap-4 rounded-xl border border-brown-dark/50 px-5 py-2.5 font-sans text-base font-medium text-brown-dark transition-colors hover:bg-brown-dark/5 md:text-lg lg:text-xl"
          >
            Hablar con el Equipo
            <span className="flex size-6 items-center justify-center rounded bg-lime-brand p-1">
              <img src={ARROW_ICON} alt="" className="size-3" />
            </span>
          </a>
        </MagneticButton>
      </motion.div>
    </section>
  )
}
