import { Reveal } from '@/components/motion/Reveal'
import { TiltCard } from '@/components/motion/TiltCard'
import SectionLabel from './SectionLabel'

const CARDS = [
  {
    title: 'REGULACIÓN\nDESACTUALIZADA',
    text: 'Marcos del siglo pasado. No contemplan IA, tokenización ni servicios digitales.',
  },
  {
    title: 'INFRAESTRUCTURA\nANACRÓNICA',
    text: 'Procesos manuales, silos entre organismos. Modernizar toma 7+ años.',
  },
  {
    title: 'FUGA DE CAPITAL\nY TALENTO',
    text: 'Sin infraestructura digital-first, la región no compite por el capital que Dubai, Estonia o Singapur capturan.',
  },
  {
    title: 'MENOR\nCOMPETITIVIDAD',
    text: 'Sin infraestructura digital-first, la región no compite por el capital que Dubai, Estonia o Singapur capturan.',
  },
]

export default function SectionProblem() {
  return (
    <section className="mx-auto max-w-content px-4 py-16 lg:px-0 lg:py-24">
      <Reveal>
        <SectionLabel text="La oportunidad Regional" />
      </Reveal>

      <div className="mt-6 flex flex-col gap-12 lg:mt-8 lg:flex-row lg:items-stretch lg:gap-[120px]">
        {/* Left column - Text */}
        <div className="min-w-0 flex flex-1 flex-col gap-6 lg:gap-8">
          <Reveal y={28} delay={0.05}>
            <h2 className="break-words font-alfarn text-2xl uppercase leading-tight text-orange-brand md:text-3xl lg:text-4xl">
              Las zonas económicas de la región operan con lógica del siglo pasado.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-body text-sm font-light text-body md:text-base font-variation-normal"
            >
              Diseñadas para el comercio físico de los años 90, las ZEE existentes
              no contemplan la economía digital. Sus marcos regulatorios, procesos
              e infraestructura generan un ciclo que ninguna jurisdicción puede
              romper sola: regulación desactualizada e infraestructura anacrónica
              reducen la competitividad, lo que concentra capital y talento en
              otras jurisdicciones, profundizando la brecha.
            </p>
          </Reveal>
        </div>

        {/* Right column — Cards grid + sticker overlay */}
        <div className="relative h-full w-full flex-shrink-0 lg:w-[496px]">
          <Reveal
            delay={0.1}
            className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:min-h-0"
          >
            {CARDS.map((card) => (
              <TiltCard
                key={card.title}
                className="flex h-fit w-full min-w-0 flex-col justify-start rounded-xl bg-[#f9982f] p-3 transition-[background-color,box-shadow] duration-200 hover:bg-[#d97818] hover:shadow-xl sm:p-3.5"
              >
                <div className="flex flex-col gap-1.5">
                  <p className="whitespace-pre-line font-alfarn text-[15px] font-normal uppercase leading-[1.15] tracking-wide text-cream-light sm:text-[16px] md:text-[17px] md:leading-tight">
                    {card.title}
                  </p>
                  <p className="font-sans text-[10px] font-light leading-snug text-cream-light sm:text-xs md:text-[14px] md:leading-snug">
                    {card.text}
                  </p>
                </div>
              </TiltCard>
            ))}
          </Reveal>
          {/* Centered on the grid box (same dimensions as parent via inset-0) */}
          <div
            className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center sm:flex"
            aria-hidden
          >
            <div className="flex size-[64px] shrink-0 items-center justify-center rounded-full bg-lime-brand shadow-[0_0_0_3px_rgba(224,231,56,0.18)]">
              <span className="text-center font-sans text-[9px] leading-[11px] text-brown-dark">
                CICLO SIN
                <br />
                SALIDA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
