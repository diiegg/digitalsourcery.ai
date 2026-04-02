import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import TwoEnginesSection from "@/components/sections/TwoEnginesSection";
import StackSection from "@/components/sections/StackSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";
import ScrollSpark from "@/components/ScrollSpark";

export default function Home() {
  return (
    <main className="relative">
      <ScrollSpark />
      <Header />
      <HeroSection />
      <ProblemSection />
      <TwoEnginesSection />
      <StackSection />
      <ServicesSection />
      <OutcomesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
