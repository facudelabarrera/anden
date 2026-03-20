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
    <section className="mx-auto max-w-content shrink-0 px-4 pt-8 pb-6 lg:px-0 lg:pt-0 lg:pb-10">
      {/* Desktop: glass container / Mobile: transparent, no layout container */}
      <div className="lg:overflow-hidden lg:rounded-2xl lg:border lg:border-blue-brand/[0.15] lg:bg-blue-brand/[0.08] lg:backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={i} delay={i === 0 ? 0.9 : 0.1 + i * 0.07}>
              <div className="flex flex-col items-center gap-3 py-6 text-center lg:justify-center lg:gap-2 lg:px-6 lg:py-3.5">
                <p className="whitespace-nowrap font-sans text-[42px] font-bold leading-none text-blue-brand lg:text-[22px]">
                  {'counter' in stat ? (
                    <AnimatedCounter {...stat.counter} />
                  ) : (
                    stat.static
                  )}
                </p>
                <p className="font-sans text-[13px] uppercase leading-[17px] tracking-widest text-blue-brand/45 lg:text-[9px] lg:leading-[13px]">
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
