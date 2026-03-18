import { Reveal } from '@/components/motion/Reveal'
import { StaggerParent, StaggerChild } from '@/components/motion/Stagger'
import SectionLabel from './SectionLabel'

const LEFT_BENEFITS = [
  'Constitución rápida y 100% digital',
  'Certidumbre regulatoria',
  'Acceso a capital global',
  'Reducción de costos de triangulación',
  'Escalabilidad desde Latam',
]

const RIGHT_BENEFITS = [
  'Trazabilidad y supervisión en tiempo real',
  'Captura de valor de la economía del conocimiento',
  'Atracción de talento e inversión',
  'Modernización sin nueva legislación',
  'Desarrollo de ecosistema local',
]

export default function SectionBenefits() {
  return (
    <section className="mx-auto max-w-content px-4 py-16 lg:px-0 lg:py-24">
      <Reveal>
        <SectionLabel text="La oportunidad Regional" />
      </Reveal>

      <div className="mt-6 lg:mt-8">
        {/* Title area */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-[51px]">
          <Reveal className="flex-1" y={28} delay={0.05}>
            <h2 className="break-words font-alfarn text-2xl uppercase leading-tight text-blue-brand md:text-3xl lg:text-4xl">
              Una infraestructura que crea valor en ambos lados del ecosistema.
            </h2>
          </Reveal>
          <Reveal className="flex-1" delay={0.15}>
            <p
              className="font-body text-sm font-light text-body md:text-base"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              La Zona Digital beneficia simultáneamente a quienes operan dentro
              de ella y a la jurisdicción que la implementa. Ambos lados se
              refuerzan mutuamente.
            </p>
          </Reveal>
        </div>

        {/* Benefits columns */}
        <div className="mt-16 flex flex-col gap-8 lg:mt-[120px] lg:flex-row lg:gap-6">
          {/* Left - For startups */}
          <div className="min-w-0 flex-1">
            <Reveal>
              <span className="inline-flex items-center rounded bg-blue-brand px-2.5 py-1 font-sans text-sm text-cream-light md:text-base">
                PARA STARTUPS Y EMPRESAS
              </span>
            </Reveal>
            <StaggerParent className="mt-6">
              {LEFT_BENEFITS.map((item) => (
                <StaggerChild
                  key={item}
                  className="border-b border-orange-brand p-2.5"
                >
                  <p
                    className="break-words font-body text-base font-light italic text-blue-brand md:text-lg lg:text-xl"
                    style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  >
                    {item}
                  </p>
                </StaggerChild>
              ))}
            </StaggerParent>
          </div>

          {/* Right - For operators */}
          <div className="min-w-0 flex-1">
            <Reveal delay={0.1}>
              <span className="inline-flex items-center rounded bg-orange-brand px-2.5 py-1 font-sans text-sm text-brown-dark md:text-base">
                PARA EL OPERADOR
              </span>
            </Reveal>
            <StaggerParent className="mt-6">
              {RIGHT_BENEFITS.map((item) => (
                <StaggerChild
                  key={item}
                  className="border-b border-orange-brand p-2.5"
                >
                  <p
                    className="break-words font-body text-base font-light italic text-blue-brand md:text-lg lg:text-xl"
                    style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  >
                    {item}
                  </p>
                </StaggerChild>
              ))}
            </StaggerParent>
          </div>
        </div>
      </div>
    </section>
  )
}
