import { Reveal } from '@/components/motion/Reveal'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'

const STATS = [
  {
    counter: { to: 7000, suffix: '+', thousandsSep: true },
    line1: 'ZONAS ECONÓMICAS',
    line2: 'EN EL MUNDO',
  },
  {
    counter: { to: 250, prefix: '~' },
    line1: 'REALMENTE',
    line2: 'FUNCIONALES',
  },
  {
    static: '0',
    line1: 'ZONAS DIGITALES',
    line2: 'OPERATIVAS EN LATAM',
  },
  {
    counter: { to: 100, prefix: 'USD ', suffix: 'K' },
    line1: 'COSTO DE TRIANGULACIÓN',
    line2: 'INTERNACIONAL HOY',
  },
] as const

export default function Stats() {
  return (
    <section className="mx-auto w-full max-w-content shrink-0 px-4 pt-8 pb-6 lg:px-0 lg:pt-0 lg:pb-10">
      {/* Desktop: glass container / Mobile: transparent, no layout container */}
      <div className="w-full lg:overflow-hidden lg:rounded-2xl lg:border lg:border-blue-brand/[0.15] lg:bg-blue-brand lg:backdrop-blur-md">
        <div className="grid w-full grid-cols-2 gap-x-3 gap-y-3 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-x-3 lg:gap-y-0 lg:px-6">
          {STATS.map((stat, i) => (
            <Reveal key={i} delay={i === 0 ? 0.9 : 0.1 + i * 0.07} className="min-w-0 lg:flex-1">
              <div className="flex min-h-0 flex-col items-center justify-center gap-y-1 px-1 py-3 text-center lg:flex-row lg:justify-center lg:gap-x-1.5 lg:gap-y-0 lg:px-0 lg:py-5">
                <p className="shrink-0 whitespace-nowrap font-sans text-[26px] font-bold leading-none text-blue-brand lg:text-[24px] lg:text-cream-light">
                  {'counter' in stat ? (
                    <AnimatedCounter {...stat.counter} />
                  ) : (
                    stat.static
                  )}
                </p>
                <p className="max-w-[11rem] text-balance text-center font-sans text-[11px] uppercase leading-[14px] tracking-[0.12em] text-blue-brand/70 lg:max-w-none lg:text-left lg:text-[8px] lg:leading-[11px] lg:tracking-[0.08em] lg:whitespace-nowrap lg:text-cream-light/60">
                  {stat.line1}
                  <br />
                  {stat.line2}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
