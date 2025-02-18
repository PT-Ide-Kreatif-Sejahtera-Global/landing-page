"use client"
import { useState, useEffect, useRef } from "react";
import About from "./components/About";
import EducationSection from "./components/EducationSection";
import HeroSection from "./components/HeroSection";
import MarketSection from "./components/MarketSection";
import ServiceSection from "./components/BlogSection";
import VisiMisi from "./components/VisiMisi";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [shadow, setShadow] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current?.scrollTop! > 0) setShadow(true)
      if (pageRef.current?.scrollTop! > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setShadow(false);
      }
    };
    console.log('setshadow', shadow);

    const container = pageRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [shadow]);

  const scrollToTop = () => {
    if (pageRef.current) {
      pageRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
    <Navbar shadow={shadow} />
      <div 
        className="grid grid-cols-1 h-full overflow-y-auto gap-4 relative w-full"
        ref={pageRef}
      >
        <HeroSection />
        <About />
        <VisiMisi />
        <EducationSection />
        <MarketSection />
        <ServiceSection />
        {/* download app icons */}
        <div className="w-full flex flex-col gap-y-4 items-center py-6 bg-black">
          <h1 className="text-xl md:text-3xl text-white font-bold">Get Our Apps</h1>
          <div className="flex justify-center items-center gap-x-6">
            <Link href="#" className="w-full">
              <Image 
                src="playstore.png"
                width={60}
                height={60}
                alt="playstore"
              />
            </Link>
            <Link href="#" className="w-full">
              <Image 
                src="app-store.png"
                width={60}
                height={60}
                alt="app-store"
              />
            </Link>
          </div>
        </div>
        <Footer />
        {/* <a href="https://www.flaticon.com/free-icons/playstore" title="playstore icons">Playstore icons created by Freepik - Flaticon</a> */}
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
