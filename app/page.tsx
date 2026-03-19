import { BackgroundDecoration } from '@/components/BackgroundDecoration'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import SectionProblem from '@/components/SectionProblem'
import SectionSolution from '@/components/SectionSolution'
import SectionBenefits from '@/components/SectionBenefits'
import SectionGlobal from '@/components/SectionGlobal'
import SectionArgentina from '@/components/SectionArgentina'
import SectionTeam from '@/components/SectionTeam'
import Footer from '@/components/Footer'
import { OrangeSection } from '@/components/OrangeSection'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream">
      <BackgroundDecoration />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        {/* First viewport: header + hero centered + stats at bottom */}
        <div className="flex h-dvh flex-col">
          <Hero />
          <Stats />
        </div>
        <SectionProblem />
        <SectionSolution />
        <SectionBenefits />

        {/* Orange zone — Global onwards */}
        <OrangeSection>
          <SectionGlobal />
          <SectionArgentina />
          <SectionTeam />
          <Footer />
        </OrangeSection>
      </div>
    </div>
  )
}
