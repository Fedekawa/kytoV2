import { HeroSection } from '@/components/sections/hero-section';
import { SolutionsSection } from '@/components/sections/solutions-section';
import { CaseStudiesSection } from '@/components/sections/case-studies-section';
import { MethodologySection } from '@/components/sections/methodology-section';
import { WhyAISection } from '@/components/sections/why-ai-section';
import { ScrollProvider } from '@/contexts/scroll-context';


export default function Home() {
  return (
    <ScrollProvider>
      <main className="relative">
        <HeroSection />
        <WhyAISection />
        <SolutionsSection />
      <CaseStudiesSection />
      <MethodologySection />
      </main>
    </ScrollProvider>
  );
}
