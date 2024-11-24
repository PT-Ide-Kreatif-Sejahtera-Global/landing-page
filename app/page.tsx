import EducationSection from "./components/EducationSection";
import HeroSection from "./components/HeroSection";
import MarketSection from "./components/MarketSection";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
   <>
   <div className="flex flex-col gap-8 justify-items-center">
      <HeroSection/>
      <EducationSection/>
      <MarketSection />
      <ServiceSection />
   </div>
   </>
  );
}
