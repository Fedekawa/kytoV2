import { HeroSection } from '@/components/sections/hero-section'
import { WhyAISection } from '@/components/sections/why-ai-section'
import { SolutionsSection } from '@/components/sections/solutions-section'
import { CaseStudiesSection } from '@/components/sections/case-studies-section'
import { MethodologySection } from '@/components/sections/methodology-section'

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <WhyAISection />
      <SolutionsSection />
      <CaseStudiesSection />
      <MethodologySection />
    </main>
  )
}