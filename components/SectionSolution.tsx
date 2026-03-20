import { Reveal } from '@/components/motion/Reveal'
import { StaggerParent, StaggerChild } from '@/components/motion/Stagger'
import { TiltCard } from '@/components/motion/TiltCard'
import SectionLabel from './SectionLabel'

const ROW1_CARDS = [
  'REGISTRO DIGITAL DE EMPRESAS',
  'AUTOMATIZACIÓN DE TAX & COMPLIANCE',
  'AGENTES Y AUTOMATIZACIÓN DE TAREAS',
]

const ROW2_CARDS = [
  'PANEL OPERATIVO DEL ESTADO',
  'INTEROPERABILIDAD ENTRE ORGANISMOS',
  'KIT DE DESPLIEGUE',
]

export default function SectionSolution() {
  return (
    <section className="mx-auto max-w-content px-4 py-16 lg:px-0 lg:py-24">
      <Reveal>
        <SectionLabel text="La solución" />
      </Reveal>

      <div className="mt-6 lg:mt-8">
        {/* Title area */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-[51px]">
          <Reveal className="flex-1" y={28} delay={0.05}>
            <h2 className="break-words font-alfarn text-2xl uppercase leading-tight text-blue-brand md:text-3xl lg:text-4xl">
              Andén OS: el sistema operativo para regímenes especiales de la
              economía.
            </h2>
          </Reveal>
          <Reveal className="flex-1" delay={0.15}>
            <div
              className="space-y-4 border-l-2 border-brown-dark/20 py-1 pl-3 font-body text-sm font-light text-body md:text-base font-variation-normal"
            >
              <p>
                Andén diseña, lanza y opera Zonas Digitales sobre el marco legal
                existente. No requiere nueva legislación ni reemplaza al Estado, sino que incorpora la capa de tecnología para ejecutar mejor, más rápido, y con total trazabilidad.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="mt-8 flex flex-col gap-2 lg:mt-12">
          {/* Row 1 */}
          <StaggerParent className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {ROW1_CARDS.map((text) => (
              <StaggerChild key={text}>
                <TiltCard>
                  <FeatureCard text={text} />
                </TiltCard>
              </StaggerChild>
            ))}
          </StaggerParent>
          {/* Row 2 */}
          <StaggerParent className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {ROW2_CARDS.map((text) => (
              <StaggerChild key={text}>
                <TiltCard>
                  <FeatureCard text={text} />
                </TiltCard>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ text }: { text: string }) {
  return (
    <div className="group flex min-h-[80px] cursor-default flex-col rounded-xl bg-gray-card p-4 transition-all duration-200 hover:bg-white hover:shadow-sm">
      <div className="border-b border-black pb-4 transition-colors duration-200 group-hover:border-brown-dark/40">
        <p className="whitespace-pre-line font-sans text-sm font-normal leading-5 text-brown-dark">
          {text}
        </p>
      </div>
    </div>
  )
}
