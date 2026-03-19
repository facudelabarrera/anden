import { StaggerParent, StaggerChild } from '@/components/motion/Stagger'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'
import { TiltCard } from '@/components/motion/TiltCard'

const STATS = [
  {
    counter: { to: 7000, suffix: '+', thousandsSep: true },
    label: 'ZONAS ECONÓMICAS EN EL MUNDO',
  },
  {
    counter: { to: 250, prefix: '~' },
    label: 'REALMENTE FUNCIONALES',
  },
  {
    static: '0',
    label: 'ZONAS DIGITALES OPERATIVAS EN LATAM',
  },
  {
    counter: { to: 100, prefix: 'USD ', suffix: 'K' },
    label: 'COSTO DE TRIANGULACIÓN INTERNACIONAL HOY',
  },
] as const

export default function Stats() {
  return (
    <section className="mx-auto max-w-content shrink-0 px-4 pb-6 lg:px-0 lg:pb-10">
      <StaggerParent className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <StaggerChild key={i}>
            <TiltCard
              intensity={3}
              className="flex h-full flex-col gap-2 rounded-2xl border border-blue-brand/15 border-t-2 border-t-lime-brand bg-cream-light p-3 shadow-sm transition-[box-shadow,border-color] duration-200 hover:border-blue-brand/30 hover:shadow-md lg:p-5"
            >
              <p className="whitespace-nowrap font-alfarn text-3xl leading-none text-blue-brand lg:text-4xl">
                {'counter' in stat ? (
                  <AnimatedCounter {...stat.counter} />
                ) : (
                  stat.static
                )}
              </p>
              <span className="block h-px w-5 shrink-0 bg-lime-brand/70" />
              <p className="font-sans text-[9px] uppercase leading-[13px] tracking-wide text-blue-brand/50 lg:text-[10px] lg:tracking-wider">
                {stat.label}
              </p>
            </TiltCard>
          </StaggerChild>
        ))}
      </StaggerParent>
    </section>
  )
}
