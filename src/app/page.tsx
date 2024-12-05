import { HeroSection } from '@/components/sections/hero-section';
import { SolutionsSection } from '@/components/sections/solutions-section';
import { CaseStudiesSection } from '@/components/sections/case-studies-section';
import { MethodologySection } from '@/components/sections/methodology-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SolutionsSection />
      <CaseStudiesSection />
      <MethodologySection />
    </div>
  );
}
