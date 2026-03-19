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
    <section className="mx-auto max-w-content shrink-0 px-4 pb-8 lg:px-0 lg:pb-10">
      <StaggerParent className="grid grid-cols-2 gap-x-4 gap-y-6 py-4 text-center text-blue-brand lg:grid-cols-4 lg:px-6">
        {STATS.map((stat, i) => (
          <StaggerChild
            key={i}
            className="flex flex-col items-center gap-2"
          >
            <p className="whitespace-nowrap font-alfarn text-2xl md:text-3xl lg:text-4xl">
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
