"use client"
import { useState, useEffect, useRef } from "react";
import About from "./components/About";
import EducationSection from "./components/EducationSection";
import HeroSection from "./components/HeroSection";
import MarketSection from "./components/MarketSection";
import ServiceSection from "./components/BlogSection";
import VisiMisi from "./components/VisiMisi";
import Footer from "./components/Footer";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current?.scrollTop! > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    const container = pageRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (pageRef.current) {
      pageRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div 
        className="grid grid-cols-1 h-full overflow-y-auto gap-10 relative max-w-full"
        ref={pageRef}
      >
        <HeroSection />
        <About />
        <VisiMisi />
        <EducationSection />
        <MarketSection />
        <ServiceSection />
        <Footer />
        {/* Back to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed text-2xl bottom-10 right-10 z-50 bg-lime-600 text-white p-3 px-5 rounded-full shadow-md hover:bg-lime-800 transition-all duration-300"
            aria-label="Back to top"
          >
            ↑
          </button>
        )}
      </div>

    </>
  );
}
