import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <ServicesSection />
      <OutcomesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
