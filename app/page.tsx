"use client"
import { useState, useEffect } from "react";
import About from "./components/About";
import EducationSection from "./components/EducationSection";
import HeroSection from "./components/HeroSection";
import MarketSection from "./components/MarketSection";
import ServiceSection from "./components/BlogSection";
import VisiMisi from "./components/VisiMisi";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col gap-10 justify-items-center">
        <HeroSection />
        <About />
        <VisiMisi />
        <EducationSection />
        <MarketSection />
        <ServiceSection />
      </div>

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
    </>
  );
}
