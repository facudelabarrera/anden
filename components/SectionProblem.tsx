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

      <div className="mt-6 flex flex-col gap-12 lg:mt-8 lg:flex-row lg:gap-[120px]">
        {/* Left column - Text */}
        <div className="min-w-0 flex flex-1 flex-col gap-6 lg:gap-8 lg:self-start">
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
        <div className="relative flex-shrink-0 lg:w-[496px]">
          {/*
            Keep a compact 2x2 grid and place the circle as an absolute overlay.
            The gap is intentionally tighter so the circle behaves like a sticker
            that slightly overlaps the four inner corners of the cards.
          */}
          <Reveal
            delay={0.1}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[152px] sm:gap-3"
          >
            {CARDS.map((card) => (
              <TiltCard
                key={card.title}
                className="flex h-full flex-col gap-3 rounded-xl bg-gray-card p-4 transition-[background-color,box-shadow] duration-200 hover:bg-[#8894ff] hover:shadow-xl"
              >
                <div className="group flex h-full flex-col gap-3">
                  <p className="whitespace-pre-line font-sans text-sm font-normal leading-5 text-brown-dark transition-colors duration-200 group-hover:text-cream-light md:text-base">
                    {card.title}
                  </p>
                  <p
                    className="font-body text-xs font-light text-brown-dark font-variation-normal transition-colors duration-200 group-hover:text-cream-light"
                  >
                    {card.text}
                  </p>
                </div>
              </TiltCard>
            ))}
          </Reveal>
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden size-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lime-brand shadow-[0_0_0_3px_rgba(224,231,56,0.18)] sm:flex">
            <span className="text-center font-sans text-[9px] leading-[11px] text-brown-dark">
              CICLO SIN
              <br />
              SALIDA
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
