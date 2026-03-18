import { StaggerParent, StaggerChild } from '@/components/motion/Stagger'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'

const STATS = [
  {
    counter: { to: 7000, suffix: '+', thousandsSep: true },
    label: 'ZONAS ECONÓMICAS\nEN EL MUNDO.',
  },
  {
    counter: { to: 250, prefix: '~' },
    label: 'REALMENTE\nFUNCIONALES',
  },
  {
    static: '0',
    label: 'ZONAS DIGITALES\nOPERATIVAS EN LATAM',
  },
  {
    counter: { to: 100, prefix: 'USD ', suffix: 'K' },
    label: 'COSTO DE TRIANGULACIÓN\nINTERNACIONAL HOY',
  },
] as const

export default function Stats() {
  return (
    <section className="mx-auto max-w-content px-4 lg:px-0">
      <StaggerParent className="flex flex-wrap items-center justify-between gap-y-6 px-6 py-4 text-center text-blue-brand">
        {STATS.map((stat, i) => (
          <StaggerChild
            key={i}
            className="flex min-w-[140px] flex-1 flex-col items-center justify-center gap-2"
          >
            <p className="font-alfarn text-2xl md:text-3xl lg:text-4xl">
              {'counter' in stat ? (
                <AnimatedCounter {...stat.counter} />
              ) : (
                stat.static
              )}
            </p>
            <p className="whitespace-pre-line font-sans text-[11px] leading-[14px] opacity-60 md:text-xs">
              {stat.label}
            </p>
          </StaggerChild>
        ))}
      </StaggerParent>
    </section>
  )
}
