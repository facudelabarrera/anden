import { Reveal } from '@/components/motion/Reveal'
import { StaggerParent, StaggerChild } from '@/components/motion/Stagger'
import SectionLabel from './SectionLabel'

const REGIONS = [
  {
    amount: 'USDE 180M+',
    location: 'DMCC · DUBAI',
    category: '/Comercio & Servicios',
    badge: 'REGULACIÓN = CRECIMIENTO',
  },
  {
    amount: 'USDE 100M+',
    location: 'RAK DAO · RAS AL KHAIMAH',
    category: '/Blockchain / Web3',
    badge: 'INNOVACIÓN = CAPITAL',
  },
  {
    amount: 'USDE 80M+',
    location: 'E-ESTONIA',
    category: '/Identidad Digital',
    badge: 'CONFIANZA = ESCALA',
  },
]

export default function SectionGlobal() {
  return (
    <section className="mx-auto max-w-content px-4 py-16 lg:px-0 lg:py-24">
      <Reveal>
        <SectionLabel text="La solución" />
      </Reveal>

      <div className="mt-6 lg:mt-8">
        {/* Title area */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-[51px]">
          <Reveal className="flex-1" y={28} delay={0.05}>
            <h2 className="break-words font-alfarn text-2xl uppercase leading-tight text-blue-brand md:text-3xl lg:min-w-[500px] lg:text-4xl">
              Asia, Emiratos y Europa ya probaron el modelo. Latam aún no tiene su
              equivalente.
            </h2>
          </Reveal>
          <Reveal className="flex-1" delay={0.15}>
            <p
              className="font-body text-sm font-light text-body md:text-base"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Tres regiones demostraron que las zonas digitales generan valor a
              escala. La oportunidad regional está abierta.
            </p>
          </Reveal>
        </div>

        {/* Region cards */}
        <StaggerParent className="mt-16 grid grid-cols-1 gap-4 lg:mt-[120px] lg:grid-cols-3 lg:gap-[18px]">
          {REGIONS.map((region) => (
            <StaggerChild
              key={region.location}
              className="grid h-full grid-rows-[auto_1fr_auto] gap-6 rounded-2xl border border-brown-dark bg-cream p-4 sm:gap-8"
            >
              {/* Top row */}
              <div className="grid min-h-[44px] grid-cols-[auto_1fr] items-start gap-x-3 gap-y-2">
                <span className="rounded-xl border border-black px-4 py-2 font-sans text-sm text-brown-dark md:text-base">
                  {region.amount}
                </span>
                <span
                  className="min-w-0 self-center justify-self-end whitespace-nowrap text-right font-body text-[11px] font-light italic leading-tight text-blue-brand md:text-[13px]"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  {region.location}
                </span>
              </div>
              {/* Body */}
              <div className="flex min-h-0 flex-col justify-start">
                <p
                  className="font-body text-sm font-light italic text-brown-dark md:text-base"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  {region.category}
                </p>
              </div>
              {/* Bottom badge */}
              <div className="mt-auto rounded-lg bg-lime-brand px-2.5 py-1">
                <p className="text-center font-sans text-sm text-brown-dark md:text-base">
                  {region.badge}
                </p>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  )
}
