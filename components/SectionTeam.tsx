  import Image from 'next/image'
  import { Reveal } from '@/components/motion/Reveal'
  import { StaggerParent, StaggerChild } from '@/components/motion/Stagger'
  import { TiltCard } from '@/components/motion/TiltCard'
  import SectionLabel from './SectionLabel'

  const TEAM_PLACEHOLDER = '/assets/team-placeholder.png'

  type TeamMember = {
    first: string
    last: string
    role: string
    image: string
    imageClass: string
    linkedin: string
    imageObjectPosition?: string
    imageScale?: number
  imageTranslateY?: string
  }

  const TEAM_MEMBERS: TeamMember[] = [
    {
      first: 'Milagros',
      last: 'Santamaría',
      role: 'COS & COFUNDADORA',
      image: '/assets/team/milagros-santamaria-v2.jpg',
      imageClass: 'object-cover',
      linkedin: 'https://www.linkedin.com/in/maria-milagros-santamaria-353235b4/',
    },
    {
      first: 'Teófilo',
      last: 'Beato',
      role: 'CPA & COFUNDADOR',
      image: '/assets/team/teofilo-beato-v2.jpg',
      imageClass: 'object-cover',
      linkedin: 'https://www.linkedin.com/in/teofilo-beato/',
    },
    {
      first: 'Simón',
      last: 'Puebla',
      role: 'CBO & COFUNDADOR',
      image: '/assets/team/simon-puebla-v2.jpg',
      imageClass: 'object-cover',
      linkedin: 'https://www.linkedin.com/in/simonpuebla/',
    },
    {
      first: 'Santiago',
      last: 'Bermúdez',
      role: 'CEO & COFUNDADOR',
      image: TEAM_PLACEHOLDER,
      imageClass: 'object-cover',
      linkedin: 'https://www.linkedin.com/in/bermudezsantiago/',
    },
  ]

  const BACKED_BY = {
    top: ['Protocol Labs', 'Crecimiento', 'Odisea'],
    bottom: ['Juan Benet', 'Luis Cuende', 'German Garay'],
  }

  export default function SectionTeam() {
    return (
      <section className="mx-auto max-w-content px-4 py-16 lg:px-0 lg:py-24">
        <Reveal>
          <SectionLabel text="El equipo" textClassName="text-cream-light" />
        </Reveal>

        <div className="mt-6 lg:mt-8">
          {/* Title area */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-[51px]">
            <Reveal className="flex-1" y={28} delay={0.05}>
              <h2 className="font-alfarn text-2xl uppercase leading-tight text-cream md:text-3xl lg:min-w-[500px] lg:text-4xl">
                El equipo que lo hace posible.
              </h2>
            </Reveal>
            <Reveal className="flex-1" delay={0.15}>
              <div className="border-l-2 border-cream/25 py-1 pl-3">
                <p
                  className="font-body text-sm font-light text-cream-light md:text-base font-variation-normal"
                >
                  Un equipo multidisciplinario que combina experiencia en tecnología,
                  regulación y desarrollo de ecosistemas. Formado en los mejores
                  entornos de web3 e innovación de Latinoamérica.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Team grid */}
          <StaggerParent className="mt-8 flex flex-col gap-2 lg:mt-12 lg:grid lg:grid-cols-4 lg:gap-[14px]">
            {TEAM_MEMBERS.map((member) => (
              <StaggerChild key={member.first}>
                <TiltCard className="group relative grid w-full min-w-0 grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 overflow-hidden rounded-3xl border border-cream/40 bg-[#8994ff] p-5 transition-[border-color,box-shadow] duration-200 hover:border-cream/70 hover:shadow-xl lg:flex lg:h-full lg:flex-col lg:items-center lg:justify-start lg:gap-5 lg:p-4">
                  {/* Hover fill overlay */}
                  <div className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] bg-cream/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Photo — left col on mobile (row-span-2), centered on desktop (order-2) */}
                  <div className="relative z-10 row-span-2 size-[72px] shrink-0 overflow-hidden rounded-full ring-2 ring-cream/20 shadow-[0_4px_20px_rgba(0,0,0,0.30)] lg:order-2 lg:row-span-1 lg:size-[130px]">
                    <Image
                      src={member.image}
                      alt={`${member.first} ${member.last}`}
                      fill
                      className={member.imageClass}
                      sizes="(min-width: 1024px) 130px, 72px"
                      style={
                        member.imageObjectPosition || member.imageScale
                          ? {
                              objectPosition: member.imageObjectPosition,
                              transform:
                                member.imageScale || member.imageTranslateY
                                  ? `translateY(${member.imageTranslateY ?? '0%'}) scale(${member.imageScale ?? 1})`
                                  : undefined,
                              transformOrigin: 'center',
                            }
                          : undefined
                      }
                    />
                  </div>

                  {/* Name and role — right col top on mobile, top on desktop (order-1) */}
                  <div className="relative z-10 min-w-0 self-end text-left lg:order-1 lg:self-auto lg:text-center">
                    <p className="font-body text-xl font-semibold leading-[1.1] text-cream-light font-variation-normal lg:flex lg:flex-col lg:items-center lg:text-2xl">
                      <span>{member.first} </span>
                      <span className="lg:block lg:leading-none">{member.last}</span>
                    </p>
                    <p className="mt-0.5 font-sans text-xs text-cream-light">
                      {member.role}
                    </p>
                  </div>

                  {/* Social — right col bottom on mobile, bottom on desktop (order-3) */}
                  <div className="relative z-10 self-start text-left lg:order-3 lg:flex lg:self-auto lg:justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${member.first} ${member.last}`}
                      className="flex size-7 items-center justify-center rounded-full text-cream-light transition-all duration-150 hover:scale-110 hover:opacity-80 lg:size-6"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="lg:w-[18px] lg:h-[18px]">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </TiltCard>
              </StaggerChild>
            ))}
          </StaggerParent>

          {/* Backed by */}
          <Reveal className="mt-12 flex flex-col items-center gap-4 lg:mt-24" delay={0.1}>
            <p className="font-sans text-base text-cream-light">
              RESPALDADOS POR
            </p>
            <div className="flex w-full flex-col gap-3">
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
                {BACKED_BY.top.map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-center rounded-lg bg-lime-brand px-2.5 py-2 lg:py-1"
                  >
                    <p className="text-center font-sans text-base text-brown-dark lg:text-lg">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
                {BACKED_BY.bottom.map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-center rounded-lg bg-[#8994ff] px-2.5 py-2 lg:py-1"
                  >
                    <p className="text-center font-sans text-base text-cream-light lg:text-lg">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }
