import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProductsSection from "@/components/sections/ProductsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WhyNexora from "@/components/sections/WhyNexora";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import VisionMission from "@/components/sections/VisionMission";
import ClientCta from "@/components/sections/ClientCta";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductsSection />
      <FeaturesSection />
      <WhyNexora />
      <TechnologiesSection />
      <IndustriesSection />
      <ProcessSection />
      <LeadershipSection />
      <VisionMission />
      <ClientCta />
      <ContactSection />
    </>
  );
}
