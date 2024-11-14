import ContactSection from "./_components/ContactSection";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import TabNavigation from "./_components/TabNavigation";
import ToolsSection from "./_components/ToolsSection";

export default function Home() {
  return (
    <main className="md:px-[100px] md:py-0">
      <HeroSection />
      <TabNavigation />
      <ServicesSection />
      <ToolsSection />
      <ContactSection />
    </main>
  );
}
