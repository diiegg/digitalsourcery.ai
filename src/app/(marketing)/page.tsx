import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import StackSection from "@/components/sections/StackSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ProblemSection />
      <StackSection />
      <ServicesSection />
      <OutcomesSection />
      <CTASection />
    </main>
  );
}
