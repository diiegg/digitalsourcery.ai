import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import TwoEnginesSection from "@/components/sections/TwoEnginesSection";
import StackSection from "@/components/sections/StackSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ProblemSection />
      <TwoEnginesSection />
      <StackSection />
      <ServicesSection />
      <OutcomesSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
