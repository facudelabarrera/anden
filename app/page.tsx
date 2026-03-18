import { BackgroundDecoration } from '@/components/BackgroundDecoration'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import SectionArgentina from '@/components/SectionArgentina'
import SectionProblem from '@/components/SectionProblem'
import SectionSolution from '@/components/SectionSolution'
import SectionBenefits from '@/components/SectionBenefits'
import SectionGlobal from '@/components/SectionGlobal'
import SectionTeam from '@/components/SectionTeam'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream">
      <BackgroundDecoration />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Stats />
        <SectionArgentina />
        <SectionProblem />
        <SectionSolution />
        <SectionBenefits />
        <SectionGlobal />
        <SectionTeam />
        <Footer />
      </div>
    </div>
  )
}
