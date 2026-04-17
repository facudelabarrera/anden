'use client'

import { Reveal } from '@/components/motion/Reveal'
import { StaggerParent, StaggerChild } from '@/components/motion/Stagger'
import SectionLabel from './SectionLabel'
import SectionTitle from './SectionTitle'
import { useTranslation } from '@/lib/i18n'

export default function SectionBenefits() {
  const t = useTranslation()
  const { label, title, body, leftBadge, leftItems, rightBadge, rightItems } = t.benefits

  return (
    <section className="mx-auto max-w-content px-4 py-16 lg:px-0 lg:py-24">
      <Reveal>
        <SectionLabel text={label} />
      </Reveal>

      <div className="mt-6 lg:mt-8">
        {/* Title area */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-[51px]">
          <Reveal className="flex-1" y={28} delay={0.05}>
            <SectionTitle className="text-blue-brand">
              {title}
            </SectionTitle>
          </Reveal>
          <Reveal className="flex-1" delay={0.15}>
            <div className="border-l-2 border-brown-dark/20 py-1 pl-3">
              <p
                className="font-body text-sm font-light text-body md:text-base font-variation-normal"
              >
                {body}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Benefits columns */}
        <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:gap-6">
          {/* Left - For startups */}
          <div className="min-w-0 flex-1">
            <Reveal>
              <span className="inline-flex items-center rounded bg-blue-brand px-2.5 py-1 font-sans text-sm text-cream-light md:text-base">
                {leftBadge}
              </span>
            </Reveal>
            <StaggerParent className="mt-6">
              {leftItems.map((item, i) => (
                <StaggerChild
                  key={i}
                  className="border-b border-orange-brand p-2.5"
                >
                  <p
                    className="break-words font-body text-base font-light italic text-blue-brand md:text-lg lg:text-xl font-variation-normal"
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
                {rightBadge}
              </span>
            </Reveal>
            <StaggerParent className="mt-6">
              {rightItems.map((item, i) => (
                <StaggerChild
                  key={i}
                  className="border-b border-orange-brand p-2.5"
                >
                  <p
                    className="break-words font-body text-base font-light italic text-blue-brand md:text-lg lg:text-xl font-variation-normal"
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
