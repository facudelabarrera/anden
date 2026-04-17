'use client'

import { Reveal } from '@/components/motion/Reveal'
import { StaggerParent, StaggerChild } from '@/components/motion/Stagger'
import { TiltCard } from '@/components/motion/TiltCard'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'
import SectionLabel from './SectionLabel'
import SectionTitle from './SectionTitle'
import { useTranslation } from '@/lib/i18n'

const COUNTER_CONFIG = [
  { counter: { to: 9.7, prefix: 'USD ', suffix: 'B', decimals: 1 } },
  { counter: { to: 20.8, prefix: '+', suffix: '%', decimals: 1 } },
  { counter: { to: 283, suffix: 'K' } },
  { static: 'TOP 10' },
] as const

export default function SectionArgentina() {
  const t = useTranslation()
  const { label, title, bodyParagraphs, quote, statsDescriptions, nextJurisdictionsTitle, nextJurisdictionsBody } = t.argentina

  return (
    <section className="mx-auto max-w-content px-4 py-16 lg:px-0 lg:py-24">
      <Reveal>
        <SectionLabel text={label} textClassName="text-cream-light" />
      </Reveal>

      <div className="mt-6 flex flex-col gap-12 lg:mt-8 lg:flex-row lg:gap-[72px]">
        {/* Left column */}
        <div className="min-w-0 flex flex-1 flex-col gap-6 lg:self-start">
          <Reveal y={28} delay={0.05}>
            <SectionTitle className="text-cream">
              {title}
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="space-y-4 font-body text-sm font-light text-cream-light md:text-base font-variation-normal"
            >
              {bodyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="font-semibold italic">
                {quote}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right column - Stats */}
        <div className="min-w-0 flex flex-1 flex-col gap-8 lg:gap-12">
          <StaggerParent className="flex flex-col gap-4">
            {COUNTER_CONFIG.map((config, i) => (
              <StaggerChild key={i}>
                <TiltCard
                  intensity={5}
                  className="flex flex-col gap-4 rounded-xl border border-cream/40 bg-[#8994ff] p-4 transition-[border-color,box-shadow] duration-200 hover:border-cream/70 hover:shadow-xl sm:flex-row sm:items-start"
                >
                  <p className="font-alfarn text-2xl text-cream sm:min-w-[120px] lg:min-w-[160px] lg:text-[30px]">
                    {'counter' in config ? (
                      <AnimatedCounter {...config.counter} />
                    ) : (
                      config.static
                    )}
                  </p>
                  <p className="font-sans text-xs uppercase leading-[14px] text-cream-light">
                    {statsDescriptions[i]}
                  </p>
                </TiltCard>
              </StaggerChild>
            ))}
          </StaggerParent>

          <Reveal delay={0.2}>
            <div className="border-l-2 border-cream/40 py-2 pl-4">
              <p className="font-sans text-base text-cream">
                {nextJurisdictionsTitle}
              </p>
              <p
                className="mt-4 font-body text-sm font-light text-cream-light font-variation-normal"
              >
                {nextJurisdictionsBody}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
