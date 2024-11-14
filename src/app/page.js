import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import TabNavigation from "./_components/TabNavigation";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TabNavigation />
      <ServicesSection />
    </main>
  );
}
