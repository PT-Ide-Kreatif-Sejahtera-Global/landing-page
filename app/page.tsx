import Image from "next/image";
import EducationSection from "./components/EducationSection";
import HeroSection from "./components/HeroSection";
import MarketSection from "./components/MarketSection";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
   <>
   <div className="w-full">
      <HeroSection/>
      <EducationSection/>
      <MarketSection />
      <ServiceSection />
   </div>
   </>
  );
}
