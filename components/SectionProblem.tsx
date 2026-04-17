'use client'

import { Reveal } from '@/components/motion/Reveal'
import { TiltCard } from '@/components/motion/TiltCard'
import SectionLabel from './SectionLabel'
import SectionTitle from './SectionTitle'
import { useTranslation } from '@/lib/i18n'

export default function SectionProblem() {
  const t = useTranslation()
  const { label, title, body, sticker, cards } = t.problem

  return (
    <section className="mx-auto max-w-content px-4 py-16 lg:px-0 lg:py-24">
      <Reveal>
        <SectionLabel text={label} />
      </Reveal>

      <div className="mt-6 flex flex-col gap-12 lg:mt-8 lg:flex-row lg:items-stretch lg:gap-[120px]">
        {/* Left column - Text */}
        <div className="min-w-0 flex flex-1 flex-col gap-6 lg:gap-8">
          <Reveal y={28} delay={0.05}>
            <SectionTitle className="text-orange-brand">
              {title}
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-body text-sm font-light text-body md:text-base font-variation-normal"
            >
              {body}
            </p>
          </Reveal>
        </div>

        {/* Right column — Cards grid + sticker overlay */}
        <div className="relative h-full w-full flex-shrink-0 lg:w-[496px]">
          <Reveal
            delay={0.1}
            className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-rows-2"
          >
            {cards.map((card, i) => (
              <TiltCard
                key={i}
                className="flex w-full min-w-0 flex-col justify-start rounded-xl bg-[#f9982f] p-3 transition-[background-color,box-shadow] duration-200 hover:bg-[#d97818] hover:shadow-xl sm:min-h-[140px] sm:p-3.5 lg:h-full lg:min-h-0"
              >
                <div className="flex flex-col gap-1.5">
                  <p className="whitespace-pre-line font-alfarn text-[17px] font-normal uppercase leading-[1.15] tracking-wide text-cream-light sm:text-[16px] md:text-[17px] md:leading-tight">
                    {card.title}
                  </p>
                  <p className="font-sans text-[13px] font-light leading-snug text-cream-light sm:text-xs md:text-[14px] md:leading-snug">
                    {card.text}
                  </p>
                </div>
              </TiltCard>
            ))}
          </Reveal>
          {/* Centered on the grid box (same dimensions as parent via inset-0) */}
          <div
            className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center sm:flex"
            aria-hidden
          >
            <div className="flex size-[64px] shrink-0 items-center justify-center rounded-full bg-lime-brand shadow-[0_0_0_3px_rgba(224,231,56,0.18)]">
              <span className="whitespace-pre-line text-center font-sans text-[9px] leading-[11px] text-brown-dark">
                {sticker}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
