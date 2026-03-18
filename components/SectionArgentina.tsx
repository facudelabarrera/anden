import { Reveal } from '@/components/motion/Reveal'
import { StaggerParent, StaggerChild } from '@/components/motion/Stagger'
import { TiltCard } from '@/components/motion/TiltCard'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'
import SectionLabel from './SectionLabel'

const STATS_DATA = [
  {
    counter: { to: 9.7, prefix: 'USD ', suffix: 'B', decimals: 1 },
    description:
      'Exportaciones de Economía del Conocimiento, Argentina (récord 2025)',
  },
  {
    counter: { to: 20.8, prefix: '+', suffix: '%', decimals: 1 },
    description:
      'Crecimiento interanual de exportaciones de servicios basados en conocimiento',
  },
  {
    counter: { to: 283, suffix: 'K' },
    description: 'Empleados en la Economía del Conocimiento. Meta 2030: 440K',
  },
  {
    static: 'TOP 10',
    description: 'Densidad global de desarrolladores (Github, 2024)',
  },
] as const

export default function SectionArgentina() {
  return (
    <section className="mx-auto max-w-content px-4 py-16 lg:px-0 lg:py-24">
      <Reveal>
        <SectionLabel text="La oportunidad en arg" textClassName="text-cream-light" />
      </Reveal>

      <div className="mt-6 flex flex-col gap-12 lg:mt-8 lg:flex-row lg:gap-[72px]">
        {/* Left column */}
        <div className="min-w-0 flex flex-1 flex-col gap-6 lg:self-start">
          <Reveal y={28} delay={0.05}>
            <h2 className="break-words font-alfarn text-2xl uppercase leading-tight text-cream md:text-3xl lg:text-4xl">
              Argentina: el primer caso de implementación.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="space-y-4 font-body text-sm font-light text-cream-light md:text-base font-variation-normal"
            >
              <p>
                Argentina tiene condiciones únicas para ser el primer país con una
                Zona Digital: talento tecnológico de clase mundial, un régimen
                especial activable por vía reglamentaria, y una Ley de Economía del
                Conocimiento con beneficios acumulables.
              </p>
              <p>
                El instrumento legal ya existe. Andén lo adapta y digitaliza para
                albergar empresas de tecnología, IA, fintech y activos digitales,
                sin necesidad de una nueva legislación.
              </p>
              <p
                className="font-semibold italic"
              >
                &ldquo;El régimen especial existe. Lo que no existía era la capa
                digital para activarlo en la economía del conocimiento.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right column - Stats */}
        <div className="min-w-0 flex flex-1 flex-col gap-8 lg:gap-12">
          <StaggerParent className="flex flex-col gap-4">
            {STATS_DATA.map((stat, i) => (
              <StaggerChild key={i}>
                <TiltCard
                  intensity={5}
                  className="flex flex-col gap-4 rounded-xl border border-cream/40 bg-[#8994ff] p-4 transition-[border-color,box-shadow] duration-200 hover:border-cream/70 hover:shadow-xl sm:flex-row sm:items-start"
                >
                  <p className="font-alfarn text-2xl text-cream sm:min-w-[120px] lg:min-w-[160px] lg:text-[30px]">
                    {'counter' in stat ? (
                      <AnimatedCounter {...stat.counter} />
                    ) : (
                      stat.static
                    )}
                  </p>
                  <p className="font-sans text-xs uppercase leading-[14px] text-cream-light">
                    {stat.description}
                  </p>
                </TiltCard>
              </StaggerChild>
            ))}
          </StaggerParent>

          <Reveal delay={0.2}>
            <div className="border-l-2 border-cream/40 py-2 pl-4">
              <p className="font-sans text-base text-cream">
                PRÓXIMAS JURISDICCIONES
              </p>
              <p
                className="mt-4 font-body text-sm font-light text-cream-light font-variation-normal"
              >
                El modelo es replicable en cualquier jurisdicción con marco de ZEE
                vigente. Múltiples países de LatAm en estudio.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
