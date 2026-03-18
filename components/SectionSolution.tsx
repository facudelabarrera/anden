import { Reveal } from '@/components/motion/Reveal'
import { StaggerParent, StaggerChild } from '@/components/motion/Stagger'
import SectionLabel from './SectionLabel'

const ROW1_CARDS = [
  'SANDBOX PARA ACTIVOS DIGITALES',
  'REGISTRO DIGITAL\nDE EMPRESAS',
  'AUTOMATIZACIÓN DE TAX & COMPLIANCE',
  'AGENTES Y AUTOMATIZACIÓN DE TAREAS',
]

const ROW2_CARDS = [
  'PANEL OPERATIVO DEL ESTADO',
  'INTEROPERABILIDAD ENTRE ORGANISMOS',
  'KIT DE DESPLIEGUE',
]

export default function SectionSolution() {
  return (
    <section className="mx-auto max-w-content px-4 py-16 lg:px-0 lg:py-24">
      <Reveal>
        <SectionLabel text="La solución" />
      </Reveal>

      <div className="mt-6 lg:mt-8">
        {/* Title area */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-[51px]">
          <Reveal className="flex-1" y={28} delay={0.05}>
            <h2 className="break-words font-alfarn text-2xl uppercase leading-tight text-blue-brand md:text-3xl lg:text-4xl">
              Andén OS: el sistema operativo para regímenes especiales de la
              economía.
            </h2>
          </Reveal>
          <Reveal className="flex-1" delay={0.15}>
            <div
              className="space-y-4 font-body text-sm font-light text-body md:text-base"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              <p>
                Andén diseña, lanza y opera Zonas Digitales sobre el marco legal
                existente. No requiere nueva legislación. No reemplaza al Estado:
                le da al Estado las herramientas para ejecutar mejor, más rápido y
                con trazabilidad total.
              </p>
              <p>
                &ldquo;No hace falta una nueva ley. Hace falta la capa digital que
                active las que ya existen.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="mt-16 flex flex-col gap-2 lg:mt-[120px]">
          {/* Row 1 */}
          <StaggerParent className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {ROW1_CARDS.map((text) => (
              <StaggerChild key={text}>
                <FeatureCard text={text} />
              </StaggerChild>
            ))}
          </StaggerParent>
          {/* Row 2 */}
          <StaggerParent className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {ROW2_CARDS.map((text) => (
              <StaggerChild key={text}>
                <FeatureCard text={text} />
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
    <div className="flex min-h-[104px] flex-col gap-4 rounded-xl bg-gray-card p-4">
      <div className="border-b border-black pb-4">
        <p className="whitespace-pre-line font-sans text-sm font-normal leading-5 text-brown-dark">
          {text}
        </p>
      </div>
      <svg
        width="16"
        height="8"
        viewBox="0 0 16 8"
        fill="none"
        className="text-brown-dark"
      >
        <path
          d="M12 0L16 4L12 8"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line x1="0" y1="4" x2="15" y2="4" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  )
}
