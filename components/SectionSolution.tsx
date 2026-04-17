'use client'

import { Reveal } from '@/components/motion/Reveal'
import { StaggerParent, StaggerChild } from '@/components/motion/Stagger'
import { TiltCard } from '@/components/motion/TiltCard'
import SectionLabel from './SectionLabel'
import SectionTitle from './SectionTitle'
import { useTranslation } from '@/lib/i18n'

export default function SectionSolution() {
  const t = useTranslation()
  const { label, title, body, features } = t.solution

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
            <div
              className="space-y-4 border-l-2 border-brown-dark/20 py-1 pl-3 font-body text-sm font-light text-body md:text-base font-variation-normal"
            >
              <p>{body}</p>
            </div>
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="mt-8 flex flex-col gap-2 lg:mt-12">
          {/* Row 1 */}
          <StaggerParent className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 3).map((text, i) => (
              <StaggerChild key={i}>
                <TiltCard>
                  <FeatureCard text={text} />
                </TiltCard>
              </StaggerChild>
            ))}
          </StaggerParent>
          {/* Row 2 */}
          <StaggerParent className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(3).map((text, i) => (
              <StaggerChild key={i}>
                <TiltCard>
                  <FeatureCard text={text} />
                </TiltCard>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ text }: { text: string }) {
  return (
    <div className="group flex min-h-[80px] cursor-default flex-col rounded-xl p-4" style={{ backgroundColor: '#8894ff' }}>
      <div className="border-b border-white/40 pb-4">
        <p className="whitespace-pre-line font-sans text-sm font-normal leading-5 text-cream-light">
          {text}
        </p>
      </div>
    </div>
  )
}
